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
      'cn-hangzhou': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-finance': "r-kvstore.aliyuncs.com",
      'ap-northeast-2-pop': "r-kvstore.aliyuncs.com",
      'cn-beijing-finance-pop': "r-kvstore.aliyuncs.com",
      'cn-beijing-gov-1': "r-kvstore.aliyuncs.com",
      'cn-beijing-nu16-b01': "r-kvstore.aliyuncs.com",
      'cn-edge-1': "r-kvstore.aliyuncs.com",
      'cn-fujian': "r-kvstore.aliyuncs.com",
      'cn-haidian-cm12-c01': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-bj-b01': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-test-306': "r-kvstore.aliyuncs.com",
      'cn-hongkong-finance-pop': "r-kvstore.aliyuncs.com",
      'cn-qingdao-nebula': "r-kvstore.aliyuncs.com",
      'cn-shanghai-et15-b01': "r-kvstore.aliyuncs.com",
      'cn-shanghai-et2-b01': "r-kvstore.aliyuncs.com",
      'cn-shanghai-inner': "r-kvstore.aliyuncs.com",
      'cn-shanghai-internal-test-1': "r-kvstore.aliyuncs.com",
      'cn-shenzhen-inner': "r-kvstore.aliyuncs.com",
      'cn-shenzhen-st4-d01': "r-kvstore.aliyuncs.com",
      'cn-shenzhen-su18-b01': "r-kvstore.aliyuncs.com",
      'cn-wuhan': "r-kvstore.aliyuncs.com",
      'cn-yushanfang': "r-kvstore.aliyuncs.com",
      'cn-zhangbei': "r-kvstore.aliyuncs.com",
      'cn-zhangbei-na61-b01': "r-kvstore.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "r-kvstore.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "r-kvstore.aliyuncs.com",
      'eu-west-1-oxs': "r-kvstore.aliyuncs.com",
      'rus-west-1-pop': "r-kvstore.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("r-kvstore", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds data shard nodes to a cluster instance. This operation supports only cloud-native Cluster Edition instances.
   * 
   * @param request - AddShardingNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddShardingNodeResponse
   */
  async addShardingNodeWithOptions(request: $_model.AddShardingNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddShardingNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.forceTrans)) {
      query["ForceTrans"] = request.forceTrans;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.shardCount)) {
      query["ShardCount"] = request.shardCount;
    }

    if (!$dara.isNull(request.sourceBiz)) {
      query["SourceBiz"] = request.sourceBiz;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddShardingNode",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddShardingNodeResponse>(await this.callApi(params, req, runtime), new $_model.AddShardingNodeResponse({}));
  }

  /**
   * Adds data shard nodes to a cluster instance. This operation supports only cloud-native Cluster Edition instances.
   * 
   * @param request - AddShardingNodeRequest
   * @returns AddShardingNodeResponse
   */
  async addShardingNode(request: $_model.AddShardingNodeRequest): Promise<$_model.AddShardingNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addShardingNodeWithOptions(request, runtime);
  }

  /**
   * Applies for a direct connection endpoint for an ApsaraDB Tair (Redis® OSS-Compatible) database cluster instance.
   * 
   * @remarks
   * Clients can use the direct connection endpoint to bypass the proxy and connect to the cluster instance in the same way as they connect to a native Redis cluster. This reduces link overhead and further improves the response speed of the ApsaraDB Tair (Redis® OSS-Compatible) database service.
   * The instance for which you invoke this operation must meet the following conditions:
   * * The instance uses the cluster architecture.
   * * The deployment pattern is classic.
   * * The network type of the instance is VPC. If the instance is connected to the classic network, you can invoke the [SwitchNetwork](https://help.aliyun.com/document_detail/473797.html) operation to switch the network type to VPC.
   * * The Secure Sockets Layer (SSL) encryption feature is disabled for the instance. If the Secure Sockets Layer (SSL) encryption feature is enabled, you can invoke the [ModifyInstanceSSL](https://help.aliyun.com/document_detail/473838.html) operation for shutdown.
   * 
   * @param request - AllocateDirectConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateDirectConnectionResponse
   */
  async allocateDirectConnectionWithOptions(request: $_model.AllocateDirectConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateDirectConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateDirectConnection",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocateDirectConnectionResponse>(await this.callApi(params, req, runtime), new $_model.AllocateDirectConnectionResponse({}));
  }

  /**
   * Applies for a direct connection endpoint for an ApsaraDB Tair (Redis® OSS-Compatible) database cluster instance.
   * 
   * @remarks
   * Clients can use the direct connection endpoint to bypass the proxy and connect to the cluster instance in the same way as they connect to a native Redis cluster. This reduces link overhead and further improves the response speed of the ApsaraDB Tair (Redis® OSS-Compatible) database service.
   * The instance for which you invoke this operation must meet the following conditions:
   * * The instance uses the cluster architecture.
   * * The deployment pattern is classic.
   * * The network type of the instance is VPC. If the instance is connected to the classic network, you can invoke the [SwitchNetwork](https://help.aliyun.com/document_detail/473797.html) operation to switch the network type to VPC.
   * * The Secure Sockets Layer (SSL) encryption feature is disabled for the instance. If the Secure Sockets Layer (SSL) encryption feature is enabled, you can invoke the [ModifyInstanceSSL](https://help.aliyun.com/document_detail/473838.html) operation for shutdown.
   * 
   * @param request - AllocateDirectConnectionRequest
   * @returns AllocateDirectConnectionResponse
   */
  async allocateDirectConnection(request: $_model.AllocateDirectConnectionRequest): Promise<$_model.AllocateDirectConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateDirectConnectionWithOptions(request, runtime);
  }

  /**
   * Applies for a public endpoint for a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * For the corresponding console operation, see [Apply for a public endpoint](https://help.aliyun.com/document_detail/124920.html).
   * 
   * @param request - AllocateInstancePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateInstancePublicConnectionResponse
   */
  async allocateInstancePublicConnectionWithOptions(request: $_model.AllocateInstancePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateInstancePublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateInstancePublicConnection",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocateInstancePublicConnectionResponse>(await this.callApi(params, req, runtime), new $_model.AllocateInstancePublicConnectionResponse({}));
  }

  /**
   * Applies for a public endpoint for a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * For the corresponding console operation, see [Apply for a public endpoint](https://help.aliyun.com/document_detail/124920.html).
   * 
   * @param request - AllocateInstancePublicConnectionRequest
   * @returns AllocateInstancePublicConnectionResponse
   */
  async allocateInstancePublicConnection(request: $_model.AllocateInstancePublicConnectionRequest): Promise<$_model.AllocateInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Cancels O&M events in batches.
   * 
   * @remarks
   * Scenarios in which O&M events cannot be canceled
   * - allowCancel is 0.
   * - The current time is later than the start time of the O&M event.
   * - The status of the O&M event is not 3 (waiting for execution).
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
      version: "2015-01-01",
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
   * Cancels O&M events in batches.
   * 
   * @remarks
   * Scenarios in which O&M events cannot be canceled
   * - allowCancel is 0.
   * - The current time is later than the start time of the O&M event.
   * - The status of the O&M event is not 3 (waiting for execution).
   * 
   * @param request - CancelActiveOperationTasksRequest
   * @returns CancelActiveOperationTasksResponse
   */
  async cancelActiveOperationTasks(request: $_model.CancelActiveOperationTasksRequest): Promise<$_model.CancelActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Disables an AI assistant inspection task.
   * 
   * @param request - CancelInspectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelInspectionTaskResponse
   */
  async cancelInspectionTaskWithOptions(request: $_model.CancelInspectionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelInspectionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelInspectionTask",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelInspectionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelInspectionTaskResponse({}));
  }

  /**
   * Disables an AI assistant inspection task.
   * 
   * @param request - CancelInspectionTaskRequest
   * @returns CancelInspectionTaskResponse
   */
  async cancelInspectionTask(request: $_model.CancelInspectionTaskRequest): Promise<$_model.CancelInspectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelInspectionTaskWithOptions(request, runtime);
  }

  /**
   * Queries whether an ApsaraDB for Redis (Tair) instance has been granted authorization to use the Key Management Service (KMS).
   * 
   * @remarks
   * For more information about Transparent Data Encryption (TDE) and related precautions, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * * After you call this operation to confirm that the authorization is complete, you can call the [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html) operation to enable TDE.
   * 
   * @param request - CheckCloudResourceAuthorizedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCloudResourceAuthorizedResponse
   */
  async checkCloudResourceAuthorizedWithOptions(request: $_model.CheckCloudResourceAuthorizedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCloudResourceAuthorizedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckCloudResourceAuthorized",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckCloudResourceAuthorizedResponse>(await this.callApi(params, req, runtime), new $_model.CheckCloudResourceAuthorizedResponse({}));
  }

  /**
   * Queries whether an ApsaraDB for Redis (Tair) instance has been granted authorization to use the Key Management Service (KMS).
   * 
   * @remarks
   * For more information about Transparent Data Encryption (TDE) and related precautions, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * * After you call this operation to confirm that the authorization is complete, you can call the [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html) operation to enable TDE.
   * 
   * @param request - CheckCloudResourceAuthorizedRequest
   * @returns CheckCloudResourceAuthorizedResponse
   */
  async checkCloudResourceAuthorized(request: $_model.CheckCloudResourceAuthorizedRequest): Promise<$_model.CheckCloudResourceAuthorizedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCloudResourceAuthorizedWithOptions(request, runtime);
  }

  /**
   * Creates an account for an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * This operation supports only instances that are compatible with Redis 4.0 or later.
   *  * The instance status must be Running when you call this operation. 
   *  * You can create up to 18 accounts for each instance.
   * > For the console operation that corresponds to this API operation, see [Account management](https://help.aliyun.com/document_detail/92665.html).
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

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
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

    if (!$dara.isNull(request.sourceBiz)) {
      query["SourceBiz"] = request.sourceBiz;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccount",
      version: "2015-01-01",
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
   * Creates an account for an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * This operation supports only instances that are compatible with Redis 4.0 or later.
   *  * The instance status must be Running when you call this operation. 
   *  * You can create up to 18 accounts for each instance.
   * > For the console operation that corresponds to this API operation, see [Account management](https://help.aliyun.com/document_detail/92665.html).
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Creates a data backup for an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * For the console operation that corresponds to this API operation, see [Backup and recovery](https://help.aliyun.com/document_detail/43886.html).
   * 
   * @param request - CreateBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupResponse
   */
  async createBackupWithOptions(request: $_model.CreateBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "CreateBackup",
      version: "2015-01-01",
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
   * Creates a data backup for an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * For the console operation that corresponds to this API operation, see [Backup and recovery](https://help.aliyun.com/document_detail/43886.html).
   * 
   * @param request - CreateBackupRequest
   * @returns CreateBackupResponse
   */
  async createBackup(request: $_model.CreateBackupRequest): Promise<$_model.CreateBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  /**
   * Manually initiates a cache analysis task for an instance.
   * 
   * @remarks
   * This operation is no longer recommended. Use the new operation [Real-time Top Key Statistics and Offline Full Key Analysis](https://help.aliyun.com/document_detail/184226.html) instead.
   * 
   * @param request - CreateCacheAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCacheAnalysisTaskResponse
   */
  async createCacheAnalysisTaskWithOptions(request: $_model.CreateCacheAnalysisTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCacheAnalysisTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "CreateCacheAnalysisTask",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCacheAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateCacheAnalysisTaskResponse({}));
  }

  /**
   * Manually initiates a cache analysis task for an instance.
   * 
   * @remarks
   * This operation is no longer recommended. Use the new operation [Real-time Top Key Statistics and Offline Full Key Analysis](https://help.aliyun.com/document_detail/184226.html) instead.
   * 
   * @param request - CreateCacheAnalysisTaskRequest
   * @returns CreateCacheAnalysisTaskResponse
   */
  async createCacheAnalysisTask(request: $_model.CreateCacheAnalysisTaskRequest): Promise<$_model.CreateCacheAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCacheAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * Converts an existing Tair memory-optimized (Classic Edition) instance into the first child instance of a distributed instance.
   * 
   * @remarks
   * You can call this operation to convert an existing instance into the first child instance of a distributed instance. After the conversion, the distributed instance to which the instance belongs is created.
   * The instance to be converted must meet the following requirements:
   * * The instance is a Tair [memory-optimized](https://help.aliyun.com/document_detail/126164.html) (Classic Edition) instance.
   * * If the instance uses a cluster architecture, you must disable the direct connection mode. For more information, see [Release a direct connection endpoint](https://help.aliyun.com/document_detail/150047.html).
   * > You can also call the [CreateInstance](https://help.aliyun.com/document_detail/473757.html) operation to create an instance as the first child instance of a distributed instance. After the child instance is created, the distributed instance to which it belongs is created.
   * 
   * @param request - CreateGlobalDistributeCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGlobalDistributeCacheResponse
   */
  async createGlobalDistributeCacheWithOptions(request: $_model.CreateGlobalDistributeCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGlobalDistributeCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
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

    if (!$dara.isNull(request.seedSubInstanceId)) {
      query["SeedSubInstanceId"] = request.seedSubInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGlobalDistributeCache",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGlobalDistributeCacheResponse>(await this.callApi(params, req, runtime), new $_model.CreateGlobalDistributeCacheResponse({}));
  }

  /**
   * Converts an existing Tair memory-optimized (Classic Edition) instance into the first child instance of a distributed instance.
   * 
   * @remarks
   * You can call this operation to convert an existing instance into the first child instance of a distributed instance. After the conversion, the distributed instance to which the instance belongs is created.
   * The instance to be converted must meet the following requirements:
   * * The instance is a Tair [memory-optimized](https://help.aliyun.com/document_detail/126164.html) (Classic Edition) instance.
   * * If the instance uses a cluster architecture, you must disable the direct connection mode. For more information, see [Release a direct connection endpoint](https://help.aliyun.com/document_detail/150047.html).
   * > You can also call the [CreateInstance](https://help.aliyun.com/document_detail/473757.html) operation to create an instance as the first child instance of a distributed instance. After the child instance is created, the distributed instance to which it belongs is created.
   * 
   * @param request - CreateGlobalDistributeCacheRequest
   * @returns CreateGlobalDistributeCacheResponse
   */
  async createGlobalDistributeCache(request: $_model.CreateGlobalDistributeCacheRequest): Promise<$_model.CreateGlobalDistributeCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGlobalDistributeCacheWithOptions(request, runtime);
  }

  /**
   * Creates a global IP address whitelist template.
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
      version: "2015-01-01",
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
   * Creates a global IP address whitelist template.
   * 
   * @param request - CreateGlobalSecurityIPGroupRequest
   * @returns CreateGlobalSecurityIPGroupResponse
   */
  async createGlobalSecurityIPGroup(request: $_model.CreateGlobalSecurityIPGroupRequest): Promise<$_model.CreateGlobalSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Creates a scheduled inspection task configuration.
   * 
   * @param request - CreateInspectionScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInspectionScheduleResponse
   */
  async createInspectionScheduleWithOptions(request: $_model.CreateInspectionScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInspectionScheduleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.inspectionItems)) {
      query["InspectionItems"] = request.inspectionItems;
    }

    if (!$dara.isNull(request.inspectionWindow)) {
      query["InspectionWindow"] = request.inspectionWindow;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.reportLanguage)) {
      query["ReportLanguage"] = request.reportLanguage;
    }

    if (!$dara.isNull(request.scheduleName)) {
      query["ScheduleName"] = request.scheduleName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.timezone)) {
      query["Timezone"] = request.timezone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInspectionSchedule",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInspectionScheduleResponse>(await this.callApi(params, req, runtime), new $_model.CreateInspectionScheduleResponse({}));
  }

  /**
   * Creates a scheduled inspection task configuration.
   * 
   * @param request - CreateInspectionScheduleRequest
   * @returns CreateInspectionScheduleResponse
   */
  async createInspectionSchedule(request: $_model.CreateInspectionScheduleRequest): Promise<$_model.CreateInspectionScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInspectionScheduleWithOptions(request, runtime);
  }

  /**
   * Creates a manual inspection task.
   * 
   * @param request - CreateInspectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInspectionTaskResponse
   */
  async createInspectionTaskWithOptions(request: $_model.CreateInspectionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInspectionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.inspectionItems)) {
      query["InspectionItems"] = request.inspectionItems;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.reportLanguage)) {
      query["ReportLanguage"] = request.reportLanguage;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInspectionTask",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInspectionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateInspectionTaskResponse({}));
  }

  /**
   * Creates a manual inspection task.
   * 
   * @param request - CreateInspectionTaskRequest
   * @returns CreateInspectionTaskResponse
   */
  async createInspectionTask(request: $_model.CreateInspectionTaskRequest): Promise<$_model.CreateInspectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInspectionTaskWithOptions(request, runtime);
  }

  /**
   * Creates an ApsaraDB for Redis Community Edition instance with the classic or cloud-native architecture, or a Tair in-memory instance with the classic architecture. To create a Tair instance with the cloud-native architecture, call the CreateTairInstance operation.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of Tair (Redis OSS-compatible).
   * This operation can be used to create an ApsaraDB for Redis Community Edition instance or a Tair in-memory instance with the classic architecture. To create a Tair instance with the cloud-native architecture, call the [CreateTairInstance](https://help.aliyun.com/document_detail/473770.html) operation.
   * > For information about how to create an ApsaraDB for Redis instance in the console and how to select an instance type, see [Create an ApsaraDB for Redis instance](https://help.aliyun.com/document_detail/26351.html).
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appendonly)) {
      query["Appendonly"] = request.appendonly;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clusterBackupId)) {
      query["ClusterBackupId"] = request.clusterBackupId;
    }

    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.globalInstance)) {
      query["GlobalInstance"] = request.globalInstance;
    }

    if (!$dara.isNull(request.globalInstanceId)) {
      query["GlobalInstanceId"] = request.globalInstanceId;
    }

    if (!$dara.isNull(request.globalSecurityGroupIds)) {
      query["GlobalSecurityGroupIds"] = request.globalSecurityGroupIds;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceEndpointType)) {
      query["InstanceEndpointType"] = request.instanceEndpointType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.maintainEndTime)) {
      query["MaintainEndTime"] = request.maintainEndTime;
    }

    if (!$dara.isNull(request.maintainStartTime)) {
      query["MaintainStartTime"] = request.maintainStartTime;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
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

    if (!$dara.isNull(request.paramGroupId)) {
      query["ParamGroupId"] = request.paramGroupId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.readOnlyCount)) {
      query["ReadOnlyCount"] = request.readOnlyCount;
    }

    if (!$dara.isNull(request.recoverConfigMode)) {
      query["RecoverConfigMode"] = request.recoverConfigMode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaCount)) {
      query["ReplicaCount"] = request.replicaCount;
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

    if (!$dara.isNull(request.secondaryZoneId)) {
      query["SecondaryZoneId"] = request.secondaryZoneId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.shardCount)) {
      query["ShardCount"] = request.shardCount;
    }

    if (!$dara.isNull(request.slaveReadOnlyCount)) {
      query["SlaveReadOnlyCount"] = request.slaveReadOnlyCount;
    }

    if (!$dara.isNull(request.slaveReplicaCount)) {
      query["SlaveReplicaCount"] = request.slaveReplicaCount;
    }

    if (!$dara.isNull(request.srcDBInstanceId)) {
      query["SrcDBInstanceId"] = request.srcDBInstanceId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
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
      action: "CreateInstance",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Creates an ApsaraDB for Redis Community Edition instance with the classic or cloud-native architecture, or a Tair in-memory instance with the classic architecture. To create a Tair instance with the cloud-native architecture, call the CreateTairInstance operation.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of Tair (Redis OSS-compatible).
   * This operation can be used to create an ApsaraDB for Redis Community Edition instance or a Tair in-memory instance with the classic architecture. To create a Tair instance with the cloud-native architecture, call the [CreateTairInstance](https://help.aliyun.com/document_detail/473770.html) operation.
   * > For information about how to create an ApsaraDB for Redis instance in the console and how to select an instance type, see [Create an ApsaraDB for Redis instance](https://help.aliyun.com/document_detail/26351.html).
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * Creates multiple VIPs for an instance.
   * 
   * @param request - CreateInstanceMultiVIPRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceMultiVIPResponse
   */
  async createInstanceMultiVIPWithOptions(request: $_model.CreateInstanceMultiVIPRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceMultiVIPResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addCount)) {
      query["AddCount"] = request.addCount;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "CreateInstanceMultiVIP",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceMultiVIPResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceMultiVIPResponse({}));
  }

  /**
   * Creates multiple VIPs for an instance.
   * 
   * @param request - CreateInstanceMultiVIPRequest
   * @returns CreateInstanceMultiVIPResponse
   */
  async createInstanceMultiVIP(request: $_model.CreateInstanceMultiVIPRequest): Promise<$_model.CreateInstanceMultiVIPResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceMultiVIPWithOptions(request, runtime);
  }

  /**
   * Creates multiple ApsaraDB for Tair (Redis OSS-compatible) database Classic Edition instances.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of the ApsaraDB for Tair (Redis OSS-compatible) database before you call this API operation.
   * > This API operation only supports creating Classic Edition instances.
   * Use the following operations to create a single instance:
   * > - [CreateInstance](https://help.aliyun.com/document_detail/473757.html): creates an open-source Redis instance or a Tair memory-optimized Classic Edition instance.
   * > - [CreateTairInstance](https://help.aliyun.com/document_detail/473770.html): creates a Tair cloud-native instance (including memory-optimized, persistent memory-optimized, and disk-optimized instances).
   * 
   * @param request - CreateInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstancesResponse
   */
  async createInstancesWithOptions(request: $_model.CreateInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.instances)) {
      query["Instances"] = request.instances;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.rebuildInstance)) {
      query["RebuildInstance"] = request.rebuildInstance;
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

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstances",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstancesResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstancesResponse({}));
  }

  /**
   * Creates multiple ApsaraDB for Tair (Redis OSS-compatible) database Classic Edition instances.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of the ApsaraDB for Tair (Redis OSS-compatible) database before you call this API operation.
   * > This API operation only supports creating Classic Edition instances.
   * Use the following operations to create a single instance:
   * > - [CreateInstance](https://help.aliyun.com/document_detail/473757.html): creates an open-source Redis instance or a Tair memory-optimized Classic Edition instance.
   * > - [CreateTairInstance](https://help.aliyun.com/document_detail/473770.html): creates a Tair cloud-native instance (including memory-optimized, persistent memory-optimized, and disk-optimized instances).
   * 
   * @param request - CreateInstancesRequest
   * @returns CreateInstancesResponse
   */
  async createInstances(request: $_model.CreateInstancesRequest): Promise<$_model.CreateInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstancesWithOptions(request, runtime);
  }

  /**
   * Creates a parameter template.
   * 
   * @remarks
   * Parameter templates are applicable only to instances deployed in cloud-native deployment mode (formerly cloud disk instances).
   * 
   * @param request - CreateParameterGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateParameterGroupResponse
   */
  async createParameterGroupWithOptions(request: $_model.CreateParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateParameterGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
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
      action: "CreateParameterGroup",
      version: "2015-01-01",
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
   * Parameter templates are applicable only to instances deployed in cloud-native deployment mode (formerly cloud disk instances).
   * 
   * @param request - CreateParameterGroupRequest
   * @returns CreateParameterGroupResponse
   */
  async createParameterGroup(request: $_model.CreateParameterGroupRequest): Promise<$_model.CreateParameterGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createParameterGroupWithOptions(request, runtime);
  }

  /**
   * 创建TairCustom实例
   * 
   * @param request - CreateTCInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTCInstanceResponse
   */
  async createTCInstanceWithOptions(request: $_model.CreateTCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTCInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.dataDisk)) {
      query["DataDisk"] = request.dataDisk;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.needEni)) {
      query["NeedEni"] = request.needEni;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
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

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
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
      action: "CreateTCInstance",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTCInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateTCInstanceResponse({}));
  }

  /**
   * 创建TairCustom实例
   * 
   * @param request - CreateTCInstanceRequest
   * @returns CreateTCInstanceResponse
   */
  async createTCInstance(request: $_model.CreateTCInstanceRequest): Promise<$_model.CreateTCInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTCInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a cloud-native Tair (Enterprise Edition) instance.
   * 
   * @remarks
   * For selection reference, see [Must-read for selecting Tair database (Redis OSS-Compatible)](https://help.aliyun.com/document_detail/223808.html).
   * Make sure that you fully understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of Tair database (Redis OSS-Compatible) before you invoke this operation.
   * > * For instructions on how to perform this operation in the console, see [Create a Tair instance](https://help.aliyun.com/document_detail/26351.html).
   * > * To create other types of instances, such as open-source instances or [Tair memory-optimized](https://help.aliyun.com/document_detail/126164.html) classic instances, you can invoke the [CreateInstance](https://help.aliyun.com/document_detail/473757.html) operation.
   * 
   * @param request - CreateTairInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTairInstanceResponse
   */
  async createTairInstanceWithOptions(request: $_model.CreateTairInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTairInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterBackupId)) {
      query["ClusterBackupId"] = request.clusterBackupId;
    }

    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.globalInstanceId)) {
      query["GlobalInstanceId"] = request.globalInstanceId;
    }

    if (!$dara.isNull(request.globalSecurityGroupIds)) {
      query["GlobalSecurityGroupIds"] = request.globalSecurityGroupIds;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceEndpointType)) {
      query["InstanceEndpointType"] = request.instanceEndpointType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
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

    if (!$dara.isNull(request.paramGroupId)) {
      query["ParamGroupId"] = request.paramGroupId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.readOnlyCount)) {
      query["ReadOnlyCount"] = request.readOnlyCount;
    }

    if (!$dara.isNull(request.recoverConfigMode)) {
      query["RecoverConfigMode"] = request.recoverConfigMode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaCount)) {
      query["ReplicaCount"] = request.replicaCount;
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

    if (!$dara.isNull(request.secondaryZoneId)) {
      query["SecondaryZoneId"] = request.secondaryZoneId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.shardCount)) {
      query["ShardCount"] = request.shardCount;
    }

    if (!$dara.isNull(request.shardType)) {
      query["ShardType"] = request.shardType;
    }

    if (!$dara.isNull(request.slaveReadOnlyCount)) {
      query["SlaveReadOnlyCount"] = request.slaveReadOnlyCount;
    }

    if (!$dara.isNull(request.slaveReplicaCount)) {
      query["SlaveReplicaCount"] = request.slaveReplicaCount;
    }

    if (!$dara.isNull(request.srcDBInstanceId)) {
      query["SrcDBInstanceId"] = request.srcDBInstanceId;
    }

    if (!$dara.isNull(request.storage)) {
      query["Storage"] = request.storage;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
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
      action: "CreateTairInstance",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTairInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateTairInstanceResponse({}));
  }

  /**
   * Creates a cloud-native Tair (Enterprise Edition) instance.
   * 
   * @remarks
   * For selection reference, see [Must-read for selecting Tair database (Redis OSS-Compatible)](https://help.aliyun.com/document_detail/223808.html).
   * Make sure that you fully understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of Tair database (Redis OSS-Compatible) before you invoke this operation.
   * > * For instructions on how to perform this operation in the console, see [Create a Tair instance](https://help.aliyun.com/document_detail/26351.html).
   * > * To create other types of instances, such as open-source instances or [Tair memory-optimized](https://help.aliyun.com/document_detail/126164.html) classic instances, you can invoke the [CreateInstance](https://help.aliyun.com/document_detail/473757.html) operation.
   * 
   * @param request - CreateTairInstanceRequest
   * @returns CreateTairInstanceResponse
   */
  async createTairInstance(request: $_model.CreateTairInstanceRequest): Promise<$_model.CreateTairInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTairInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a Tair VNode virtual node instance.
   * 
   * @param request - CreateTairKVCacheVNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTairKVCacheVNodeResponse
   */
  async createTairKVCacheVNodeWithOptions(request: $_model.CreateTairKVCacheVNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTairKVCacheVNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.computeUnitNum)) {
      query["ComputeUnitNum"] = request.computeUnitNum;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.elasticTimeRange)) {
      query["ElasticTimeRange"] = request.elasticTimeRange;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.VNodeType)) {
      query["VNodeType"] = request.VNodeType;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vkName)) {
      query["VkName"] = request.vkName;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTairKVCacheVNode",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTairKVCacheVNodeResponse>(await this.callApi(params, req, runtime), new $_model.CreateTairKVCacheVNodeResponse({}));
  }

  /**
   * Creates a Tair VNode virtual node instance.
   * 
   * @param request - CreateTairKVCacheVNodeRequest
   * @returns CreateTairKVCacheVNodeResponse
   */
  async createTairKVCacheVNode(request: $_model.CreateTairKVCacheVNodeRequest): Promise<$_model.CreateTairKVCacheVNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTairKVCacheVNodeWithOptions(request, runtime);
  }

  /**
   * Creates a Tair Serverless KV table instance.
   * 
   * @remarks
   * ## Operation description
   * - Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.htm) of ApsaraDB for Redis.
   * 
   * @param request - CreateTairSkvDdbTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTairSkvDdbTableResponse
   */
  async createTairSkvDdbTableWithOptions(request: $_model.CreateTairSkvDdbTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTairSkvDdbTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
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

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.srcDBInstanceId)) {
      query["SrcDBInstanceId"] = request.srcDBInstanceId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.ttlSpec)) {
      query["TtlSpec"] = request.ttlSpec;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTairSkvDdbTable",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTairSkvDdbTableResponse>(await this.callApi(params, req, runtime), new $_model.CreateTairSkvDdbTableResponse({}));
  }

  /**
   * Creates a Tair Serverless KV table instance.
   * 
   * @remarks
   * ## Operation description
   * - Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.htm) of ApsaraDB for Redis.
   * 
   * @param request - CreateTairSkvDdbTableRequest
   * @returns CreateTairSkvDdbTableResponse
   */
  async createTairSkvDdbTable(request: $_model.CreateTairSkvDdbTableRequest): Promise<$_model.CreateTairSkvDdbTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTairSkvDdbTableWithOptions(request, runtime);
  }

  /**
   * Creates a Tair Serverless KV workspace instance.
   * 
   * @remarks
   * ## Request description
   * - Before you call this operation, make sure that you understand the billing methods and [pricing details](https://help.aliyun.com/document_detail/54532.htm) of ApsaraDB for Redis.
   * - To create a Tair Serverless KV table instance, call the `CreateTairSkvDdbTable` operation.
   * 
   * @param request - CreateTairSkvDdbWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTairSkvDdbWorkspaceResponse
   */
  async createTairSkvDdbWorkspaceWithOptions(request: $_model.CreateTairSkvDdbWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTairSkvDdbWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
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

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
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

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
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
      action: "CreateTairSkvDdbWorkspace",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTairSkvDdbWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateTairSkvDdbWorkspaceResponse({}));
  }

  /**
   * Creates a Tair Serverless KV workspace instance.
   * 
   * @remarks
   * ## Request description
   * - Before you call this operation, make sure that you understand the billing methods and [pricing details](https://help.aliyun.com/document_detail/54532.htm) of ApsaraDB for Redis.
   * - To create a Tair Serverless KV table instance, call the `CreateTairSkvDdbTable` operation.
   * 
   * @param request - CreateTairSkvDdbWorkspaceRequest
   * @returns CreateTairSkvDdbWorkspaceResponse
   */
  async createTairSkvDdbWorkspace(request: $_model.CreateTairSkvDdbWorkspaceRequest): Promise<$_model.CreateTairSkvDdbWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTairSkvDdbWorkspaceWithOptions(request, runtime);
  }

  /**
   * Deletes an account of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * This API operation supports only instances that are compatible with Redis 4.0 or later.
   * * You can call this API operation only when the instance is in the Running state.
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

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.sourceBiz)) {
      query["SourceBiz"] = request.sourceBiz;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccount",
      version: "2015-01-01",
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
   * Deletes an account of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * This API operation supports only instances that are compatible with Redis 4.0 or later.
   * * You can call this API operation only when the instance is in the Running state.
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a specified backup set. Only manual backup sets can be deleted.
   * 
   * @remarks
   * This operation supports only cloud-native edition instances.
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

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      version: "2015-01-01",
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
   * Deletes a specified backup set. Only manual backup sets can be deleted.
   * 
   * @remarks
   * This operation supports only cloud-native edition instances.
   * 
   * @param request - DeleteBackupRequest
   * @returns DeleteBackupResponse
   */
  async deleteBackup(request: $_model.DeleteBackupRequest): Promise<$_model.DeleteBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupWithOptions(request, runtime);
  }

  /**
   * Deletes a global IP address whitelist template.
   * 
   * @remarks
   * Before you delete an IP whitelist template, dissociate all instances that are associated with the template.
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
      version: "2015-01-01",
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
   * Deletes a global IP address whitelist template.
   * 
   * @remarks
   * Before you delete an IP whitelist template, dissociate all instances that are associated with the template.
   * 
   * @param request - DeleteGlobalSecurityIPGroupRequest
   * @returns DeleteGlobalSecurityIPGroupResponse
   */
  async deleteGlobalSecurityIPGroup(request: $_model.DeleteGlobalSecurityIPGroupRequest): Promise<$_model.DeleteGlobalSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a scheduled inspection task.
   * 
   * @remarks
   * For the console operation that corresponds to this API, see [Release an instance](https://help.aliyun.com/document_detail/43882.html).
   * When you invoke this operation, the instance must meet the following conditions:
   * * The instance status is Running.
   * * The payer of the instance is pay-as-you-go.
   * > Upfront (subscription) instances cannot be deleted by invoking this operation. They will undergo automatic release when they expire. To release a subscription instance in advance, perform the operation in the console.
   * 
   * @param request - DeleteInspectionScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInspectionScheduleResponse
   */
  async deleteInspectionScheduleWithOptions(request: $_model.DeleteInspectionScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInspectionScheduleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scheduleId)) {
      query["ScheduleId"] = request.scheduleId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInspectionSchedule",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInspectionScheduleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInspectionScheduleResponse({}));
  }

  /**
   * Deletes a scheduled inspection task.
   * 
   * @remarks
   * For the console operation that corresponds to this API, see [Release an instance](https://help.aliyun.com/document_detail/43882.html).
   * When you invoke this operation, the instance must meet the following conditions:
   * * The instance status is Running.
   * * The payer of the instance is pay-as-you-go.
   * > Upfront (subscription) instances cannot be deleted by invoking this operation. They will undergo automatic release when they expire. To release a subscription instance in advance, perform the operation in the console.
   * 
   * @param request - DeleteInspectionScheduleRequest
   * @returns DeleteInspectionScheduleResponse
   */
  async deleteInspectionSchedule(request: $_model.DeleteInspectionScheduleRequest): Promise<$_model.DeleteInspectionScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInspectionScheduleWithOptions(request, runtime);
  }

  /**
   * Releases an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * For the console operation that corresponds to this API operation, see [Release an instance](https://help.aliyun.com/document_detail/43882.html).
   * When you invoke this operation, the instance must meet the following conditions:
   * * The instance status is Running.
   * * The payer uses the pay-as-you-go billing method.
   * > Upfront (subscription) instances cannot be deleted by invoking this operation. They will undergo automatic release after they expire. To release a subscription instance in advance, perform the operation in the console.
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.globalInstanceId)) {
      query["GlobalInstanceId"] = request.globalInstanceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DeleteInstance",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * Releases an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * For the console operation that corresponds to this API operation, see [Release an instance](https://help.aliyun.com/document_detail/43882.html).
   * When you invoke this operation, the instance must meet the following conditions:
   * * The instance status is Running.
   * * The payer uses the pay-as-you-go billing method.
   * > Upfront (subscription) instances cannot be deleted by invoking this operation. They will undergo automatic release after they expire. To release a subscription instance in advance, perform the operation in the console.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a parameter template.
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
      action: "DeleteParameterGroup",
      version: "2015-01-01",
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
   * Deletes a parameter template.
   * 
   * @param request - DeleteParameterGroupRequest
   * @returns DeleteParameterGroupResponse
   */
  async deleteParameterGroup(request: $_model.DeleteParameterGroupRequest): Promise<$_model.DeleteParameterGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteParameterGroupWithOptions(request, runtime);
  }

  /**
   * Deletes data shard nodes from a cluster instance. This operation is supported only for cloud-native instances in the cluster architecture.
   * 
   * @param request - DeleteShardingNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteShardingNodeResponse
   */
  async deleteShardingNodeWithOptions(request: $_model.DeleteShardingNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteShardingNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.forceTrans)) {
      query["ForceTrans"] = request.forceTrans;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.shardCount)) {
      query["ShardCount"] = request.shardCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteShardingNode",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteShardingNodeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteShardingNodeResponse({}));
  }

  /**
   * Deletes data shard nodes from a cluster instance. This operation is supported only for cloud-native instances in the cluster architecture.
   * 
   * @param request - DeleteShardingNodeRequest
   * @returns DeleteShardingNodeResponse
   */
  async deleteShardingNode(request: $_model.DeleteShardingNodeRequest): Promise<$_model.DeleteShardingNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteShardingNodeWithOptions(request, runtime);
  }

  /**
   * Queries the information about an account in a specified ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
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

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.searchAccountName)) {
      query["SearchAccountName"] = request.searchAccountName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccounts",
      version: "2015-01-01",
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
   * Queries the information about an account in a specified ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: $_model.DescribeAccountsRequest): Promise<$_model.DescribeAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the O&M task configuration of an instance.
   * 
   * @param request - DescribeActiveOperationMaintenanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationMaintenanceConfigResponse
   */
  async describeActiveOperationMaintenanceConfigWithOptions(request: $_model.DescribeActiveOperationMaintenanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationMaintenanceConfigResponse> {
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeActiveOperationMaintenanceConfig",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActiveOperationMaintenanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActiveOperationMaintenanceConfigResponse({}));
  }

  /**
   * Queries the O&M task configuration of an instance.
   * 
   * @param request - DescribeActiveOperationMaintenanceConfigRequest
   * @returns DescribeActiveOperationMaintenanceConfigResponse
   */
  async describeActiveOperationMaintenanceConfig(request: $_model.DescribeActiveOperationMaintenanceConfigRequest): Promise<$_model.DescribeActiveOperationMaintenanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationMaintenanceConfigWithOptions(request, runtime);
  }

  /**
   * Queries the details of O&M tasks for an ApsaraDB for Redis (Tair) instance.
   * 
   * @remarks
   * After you call this operation to check whether O&M tasks exist, you can call [ModifyActiveOperationTask](https://help.aliyun.com/document_detail/473864.html) to modify the scheduled switchover time of an O&M task.
   * 
   * @param request - DescribeActiveOperationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationTaskResponse
   */
  async describeActiveOperationTaskWithOptions(request: $_model.DescribeActiveOperationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationTaskResponse> {
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
      action: "DescribeActiveOperationTask",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActiveOperationTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActiveOperationTaskResponse({}));
  }

  /**
   * Queries the details of O&M tasks for an ApsaraDB for Redis (Tair) instance.
   * 
   * @remarks
   * After you call this operation to check whether O&M tasks exist, you can call [ModifyActiveOperationTask](https://help.aliyun.com/document_detail/473864.html) to modify the scheduled switchover time of an O&M task.
   * 
   * @param request - DescribeActiveOperationTaskRequest
   * @returns DescribeActiveOperationTaskResponse
   */
  async describeActiveOperationTask(request: $_model.DescribeActiveOperationTaskRequest): Promise<$_model.DescribeActiveOperationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTaskWithOptions(request, runtime);
  }

  /**
   * Queries the number of O&M tasks for a Tair instance.
   * 
   * @param request - DescribeActiveOperationTaskCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationTaskCountResponse
   */
  async describeActiveOperationTaskCountWithOptions(request: $_model.DescribeActiveOperationTaskCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationTaskCountResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeActiveOperationTaskCount",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActiveOperationTaskCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActiveOperationTaskCountResponse({}));
  }

  /**
   * Queries the number of O&M tasks for a Tair instance.
   * 
   * @param request - DescribeActiveOperationTaskCountRequest
   * @returns DescribeActiveOperationTaskCountResponse
   */
  async describeActiveOperationTaskCount(request: $_model.DescribeActiveOperationTaskCountRequest): Promise<$_model.DescribeActiveOperationTaskCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTaskCountWithOptions(request, runtime);
  }

  /**
   * Queries the details of O&M events for an instance.
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
      version: "2015-01-01",
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
   * Queries the details of O&M events for an instance.
   * 
   * @param request - DescribeActiveOperationTasksRequest
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasks(request: $_model.DescribeActiveOperationTasksRequest): Promise<$_model.DescribeActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Queries the audit log configuration of a Tair (Redis® OSS-Compatible) instance, such as whether audit logging is enabled and the log retention period.
   * 
   * @remarks
   * Before calling this operation, audit logging must be enabled for the instance. For more information, see [ModifyAuditLogConfig](https://help.aliyun.com/document_detail/473829.html) or [Audit logs](https://help.aliyun.com/document_detail/102015.html).
   * 
   * @param request - DescribeAuditLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditLogConfigResponse
   */
  async describeAuditLogConfigWithOptions(request: $_model.DescribeAuditLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuditLogConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeAuditLogConfig",
      version: "2015-01-01",
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
   * Queries the audit log configuration of a Tair (Redis® OSS-Compatible) instance, such as whether audit logging is enabled and the log retention period.
   * 
   * @remarks
   * Before calling this operation, audit logging must be enabled for the instance. For more information, see [ModifyAuditLogConfig](https://help.aliyun.com/document_detail/473829.html) or [Audit logs](https://help.aliyun.com/document_detail/102015.html).
   * 
   * @param request - DescribeAuditLogConfigRequest
   * @returns DescribeAuditLogConfigResponse
   */
  async describeAuditLogConfig(request: $_model.DescribeAuditLogConfigRequest): Promise<$_model.DescribeAuditLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditLogConfigWithOptions(request, runtime);
  }

  /**
   * Queries the audit logs of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * When you call this operation, the audit log feature must be enabled for the instance. For more information, see [ModifyAuditLogConfig](https://help.aliyun.com/document_detail/473829.html).
   * 
   * @param request - DescribeAuditRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditRecordsResponse
   */
  async describeAuditRecordsWithOptions(request: $_model.DescribeAuditRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuditRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.hostAddress)) {
      query["HostAddress"] = request.hostAddress;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuditRecords",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuditRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuditRecordsResponse({}));
  }

  /**
   * Queries the audit logs of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * When you call this operation, the audit log feature must be enabled for the instance. For more information, see [ModifyAuditLogConfig](https://help.aliyun.com/document_detail/473829.html).
   * 
   * @param request - DescribeAuditRecordsRequest
   * @returns DescribeAuditRecordsResponse
   */
  async describeAuditRecords(request: $_model.DescribeAuditRecordsRequest): Promise<$_model.DescribeAuditRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the instance types available for creation in a specified zone.
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

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceScene)) {
      query["InstanceScene"] = request.instanceScene;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
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

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableResource",
      version: "2015-01-01",
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
   * Queries the instance types available for creation in a specified zone.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResource(request: $_model.DescribeAvailableResourceRequest): Promise<$_model.DescribeAvailableResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  /**
   * Queries the backup policy of a Tair (Redis® OSS-Compatible) instance, including the backup cycle and backup time.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: $_model.DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeBackupPolicy",
      version: "2015-01-01",
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
   * Queries the backup policy of a Tair (Redis® OSS-Compatible) instance, including the backup cycle and backup time.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the execution status of backup tasks for a Tair (Redis® OSS-Compatible) database instance.
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

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobMode)) {
      query["JobMode"] = request.jobMode;
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
      action: "DescribeBackupTasks",
      version: "2015-01-01",
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
   * Queries the execution status of backup tasks for a Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - DescribeBackupTasksRequest
   * @returns DescribeBackupTasksResponse
   */
  async describeBackupTasks(request: $_model.DescribeBackupTasksRequest): Promise<$_model.DescribeBackupTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupTasksWithOptions(request, runtime);
  }

  /**
   * Queries the backup file information of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * This operation is not applicable to cloud-native cluster architecture instances. If needed, use the [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) operation.
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

    if (!$dara.isNull(request.backupJobId)) {
      query["BackupJobId"] = request.backupJobId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.needAof)) {
      query["NeedAof"] = request.needAof;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackups",
      version: "2015-01-01",
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
   * Queries the backup file information of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * This operation is not applicable to cloud-native cluster architecture instances. If needed, use the [DescribeClusterBackupList](https://help.aliyun.com/document_detail/2679168.html) operation.
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: $_model.DescribeBackupsRequest): Promise<$_model.DescribeBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * Retrieves the cache analysis report for an instance on a specified date.
   * 
   * @remarks
   * This API operation is deprecated. Use the new operation [Real-time top key statistics and offline full key analysis](https://help.aliyun.com/document_detail/184226.html) instead.
   * 
   * @param request - DescribeCacheAnalysisReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCacheAnalysisReportResponse
   */
  async describeCacheAnalysisReportWithOptions(request: $_model.DescribeCacheAnalysisReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCacheAnalysisReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.analysisType)) {
      query["AnalysisType"] = request.analysisType;
    }

    if (!$dara.isNull(request.date)) {
      query["Date"] = request.date;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.pageNumbers)) {
      query["PageNumbers"] = request.pageNumbers;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCacheAnalysisReport",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCacheAnalysisReportResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCacheAnalysisReportResponse({}));
  }

  /**
   * Retrieves the cache analysis report for an instance on a specified date.
   * 
   * @remarks
   * This API operation is deprecated. Use the new operation [Real-time top key statistics and offline full key analysis](https://help.aliyun.com/document_detail/184226.html) instead.
   * 
   * @param request - DescribeCacheAnalysisReportRequest
   * @returns DescribeCacheAnalysisReportResponse
   */
  async describeCacheAnalysisReport(request: $_model.DescribeCacheAnalysisReportRequest): Promise<$_model.DescribeCacheAnalysisReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCacheAnalysisReportWithOptions(request, runtime);
  }

  /**
   * Queries the list of cache analysis reports of an instance.
   * 
   * @remarks
   * This operation is no longer recommended. Use the new operation [Real-time top key statistics and offline full key analysis](https://help.aliyun.com/document_detail/184226.html).
   * 
   * @param request - DescribeCacheAnalysisReportListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCacheAnalysisReportListResponse
   */
  async describeCacheAnalysisReportListWithOptions(request: $_model.DescribeCacheAnalysisReportListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCacheAnalysisReportListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.days)) {
      query["Days"] = request.days;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.pageNumbers)) {
      query["PageNumbers"] = request.pageNumbers;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCacheAnalysisReportList",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCacheAnalysisReportListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCacheAnalysisReportListResponse({}));
  }

  /**
   * Queries the list of cache analysis reports of an instance.
   * 
   * @remarks
   * This operation is no longer recommended. Use the new operation [Real-time top key statistics and offline full key analysis](https://help.aliyun.com/document_detail/184226.html).
   * 
   * @param request - DescribeCacheAnalysisReportListRequest
   * @returns DescribeCacheAnalysisReportListResponse
   */
  async describeCacheAnalysisReportList(request: $_model.DescribeCacheAnalysisReportListRequest): Promise<$_model.DescribeCacheAnalysisReportListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCacheAnalysisReportListWithOptions(request, runtime);
  }

  /**
   * Queries the backup list of an ApsaraDB for Tair (Redis-compatible) database cluster instance.
   * 
   * @remarks
   * This operation is applicable only to cloud-native instances.
   * 
   * @param request - DescribeClusterBackupListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterBackupListResponse
   */
  async describeClusterBackupListWithOptions(request: $_model.DescribeClusterBackupListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterBackupListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterBackupList",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterBackupListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterBackupListResponse({}));
  }

  /**
   * Queries the backup list of an ApsaraDB for Tair (Redis-compatible) database cluster instance.
   * 
   * @remarks
   * This operation is applicable only to cloud-native instances.
   * 
   * @param request - DescribeClusterBackupListRequest
   * @returns DescribeClusterBackupListResponse
   */
  async describeClusterBackupList(request: $_model.DescribeClusterBackupListRequest): Promise<$_model.DescribeClusterBackupListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterBackupListWithOptions(request, runtime);
  }

  /**
   * Queries the node configuration information of a Tair (Redis® OSS-Compatible) cluster instance, such as specifications and maximum connections.
   * 
   * @remarks
   * > This operation is applicable only to [cloud-native instances](https://help.aliyun.com/document_detail/188068.html) in the [cluster architecture](https://help.aliyun.com/document_detail/52228.html).
   * 
   * @param request - DescribeClusterMemberInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterMemberInfoResponse
   */
  async describeClusterMemberInfoWithOptions(request: $_model.DescribeClusterMemberInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterMemberInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterMemberInfo",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterMemberInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterMemberInfoResponse({}));
  }

  /**
   * Queries the node configuration information of a Tair (Redis® OSS-Compatible) cluster instance, such as specifications and maximum connections.
   * 
   * @remarks
   * > This operation is applicable only to [cloud-native instances](https://help.aliyun.com/document_detail/188068.html) in the [cluster architecture](https://help.aliyun.com/document_detail/52228.html).
   * 
   * @param request - DescribeClusterMemberInfoRequest
   * @returns DescribeClusterMemberInfoResponse
   */
  async describeClusterMemberInfo(request: $_model.DescribeClusterMemberInfoRequest): Promise<$_model.DescribeClusterMemberInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterMemberInfoWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring collection granularity of a Tair instance.
   * 
   * @param request - DescribeDBInstanceMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceMonitorResponse
   */
  async describeDBInstanceMonitorWithOptions(request: $_model.DescribeDBInstanceMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeDBInstanceMonitor",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceMonitorResponse({}));
  }

  /**
   * Queries the monitoring collection granularity of a Tair instance.
   * 
   * @param request - DescribeDBInstanceMonitorRequest
   * @returns DescribeDBInstanceMonitorResponse
   */
  async describeDBInstanceMonitor(request: $_model.DescribeDBInstanceMonitorRequest): Promise<$_model.DescribeDBInstanceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceMonitorWithOptions(request, runtime);
  }

  /**
   * Queries the network information of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - DescribeDBInstanceNetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceNetInfoResponse
   */
  async describeDBInstanceNetInfoWithOptions(request: $_model.DescribeDBInstanceNetInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceNetInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceNetInfo",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceNetInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceNetInfoResponse({}));
  }

  /**
   * Queries the network information of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - DescribeDBInstanceNetInfoRequest
   * @returns DescribeDBInstanceNetInfoResponse
   */
  async describeDBInstanceNetInfo(request: $_model.DescribeDBInstanceNetInfoRequest): Promise<$_model.DescribeDBInstanceNetInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceNetInfoWithOptions(request, runtime);
  }

  /**
   * Queries the virtual IP address (VIP) information of the child instances of a cluster instance in direct connection mode.
   * 
   * @remarks
   * <notice>Only cloud-native instances support this operation.</notice>
   * 
   * @param request - DescribeDBNodeDirectVipInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBNodeDirectVipInfoResponse
   */
  async describeDBNodeDirectVipInfoWithOptions(request: $_model.DescribeDBNodeDirectVipInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBNodeDirectVipInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeDBNodeDirectVipInfo",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBNodeDirectVipInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBNodeDirectVipInfoResponse({}));
  }

  /**
   * Queries the virtual IP address (VIP) information of the child instances of a cluster instance in direct connection mode.
   * 
   * @remarks
   * <notice>Only cloud-native instances support this operation.</notice>
   * 
   * @param request - DescribeDBNodeDirectVipInfoRequest
   * @returns DescribeDBNodeDirectVipInfoResponse
   */
  async describeDBNodeDirectVipInfo(request: $_model.DescribeDBNodeDirectVipInfoRequest): Promise<$_model.DescribeDBNodeDirectVipInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBNodeDirectVipInfoWithOptions(request, runtime);
  }

  /**
   * Checks the connectivity from a source client IP address to an instance.
   * 
   * @param request - DescribeDbInstanceConnectivityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDbInstanceConnectivityResponse
   */
  async describeDbInstanceConnectivityWithOptions(request: $_model.DescribeDbInstanceConnectivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDbInstanceConnectivityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.srcIp)) {
      query["SrcIp"] = request.srcIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDbInstanceConnectivity",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDbInstanceConnectivityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDbInstanceConnectivityResponse({}));
  }

  /**
   * Checks the connectivity from a source client IP address to an instance.
   * 
   * @param request - DescribeDbInstanceConnectivityRequest
   * @returns DescribeDbInstanceConnectivityResponse
   */
  async describeDbInstanceConnectivity(request: $_model.DescribeDbInstanceConnectivityRequest): Promise<$_model.DescribeDbInstanceConnectivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDbInstanceConnectivityWithOptions(request, runtime);
  }

  /**
   * Queries the information about ApsaraDB for Tair (Redis-compatible) database instances in a dedicated cluster.
   * 
   * @remarks
   * > To query the information about instances that are not in a dedicated cluster, call [DescribeInstanceAttribute](https://help.aliyun.com/document_detail/473779.html).
   * 
   * @param request - DescribeDedicatedClusterInstanceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDedicatedClusterInstanceListResponse
   */
  async describeDedicatedClusterInstanceListWithOptions(request: $_model.DescribeDedicatedClusterInstanceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDedicatedClusterInstanceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dedicatedHostName)) {
      query["DedicatedHostName"] = request.dedicatedHostName;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceNetType)) {
      query["InstanceNetType"] = request.instanceNetType;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
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

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDedicatedClusterInstanceList",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDedicatedClusterInstanceListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDedicatedClusterInstanceListResponse({}));
  }

  /**
   * Queries the information about ApsaraDB for Tair (Redis-compatible) database instances in a dedicated cluster.
   * 
   * @remarks
   * > To query the information about instances that are not in a dedicated cluster, call [DescribeInstanceAttribute](https://help.aliyun.com/document_detail/473779.html).
   * 
   * @param request - DescribeDedicatedClusterInstanceListRequest
   * @returns DescribeDedicatedClusterInstanceListResponse
   */
  async describeDedicatedClusterInstanceList(request: $_model.DescribeDedicatedClusterInstanceListRequest): Promise<$_model.DescribeDedicatedClusterInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDedicatedClusterInstanceListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a custom Transparent Data Encryption (TDE) key for an ApsaraDB for Redis (Tair) instance.
   * 
   * @remarks
   * Before you call this operation, make sure that TDE (Transparent Data Encryption) has been enabled for the instance by using a custom key. For more information about the related operation, see [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html).
   * > For more information about TDE and precautions, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * 
   * @param request - DescribeEncryptionKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEncryptionKeyResponse
   */
  async describeEncryptionKeyWithOptions(request: $_model.DescribeEncryptionKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEncryptionKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeEncryptionKey",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEncryptionKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEncryptionKeyResponse({}));
  }

  /**
   * Queries the details of a custom Transparent Data Encryption (TDE) key for an ApsaraDB for Redis (Tair) instance.
   * 
   * @remarks
   * Before you call this operation, make sure that TDE (Transparent Data Encryption) has been enabled for the instance by using a custom key. For more information about the related operation, see [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html).
   * > For more information about TDE and precautions, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * 
   * @param request - DescribeEncryptionKeyRequest
   * @returns DescribeEncryptionKeyResponse
   */
  async describeEncryptionKey(request: $_model.DescribeEncryptionKeyRequest): Promise<$_model.DescribeEncryptionKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEncryptionKeyWithOptions(request, runtime);
  }

  /**
   * Queries the list of custom keys used by an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * When you invoke [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html) to enable transparent data encryption (TDE), you can use a custom key. This operation helps you query the custom keys used by an instance. To create a custom key, invoke the [CreateKey](https://help.aliyun.com/document_detail/28947.html) operation of Key Management Service.
   * * For more information about transparent data encryption (TDE) and precautions, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * 
   * @param request - DescribeEncryptionKeyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEncryptionKeyListResponse
   */
  async describeEncryptionKeyListWithOptions(request: $_model.DescribeEncryptionKeyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEncryptionKeyListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeEncryptionKeyList",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEncryptionKeyListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEncryptionKeyListResponse({}));
  }

  /**
   * Queries the list of custom keys used by an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * When you invoke [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html) to enable transparent data encryption (TDE), you can use a custom key. This operation helps you query the custom keys used by an instance. To create a custom key, invoke the [CreateKey](https://help.aliyun.com/document_detail/28947.html) operation of Key Management Service.
   * * For more information about transparent data encryption (TDE) and precautions, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * 
   * @param request - DescribeEncryptionKeyListRequest
   * @returns DescribeEncryptionKeyListResponse
   */
  async describeEncryptionKeyList(request: $_model.DescribeEncryptionKeyListRequest): Promise<$_model.DescribeEncryptionKeyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEncryptionKeyListWithOptions(request, runtime);
  }

  /**
   * Queries the major and minor version information of a Tair (Redis® OSS-Compatible) database instance, as well as the release notes for the minor version.
   * 
   * @param request - DescribeEngineVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEngineVersionResponse
   */
  async describeEngineVersionWithOptions(request: $_model.DescribeEngineVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEngineVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeEngineVersion",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEngineVersionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEngineVersionResponse({}));
  }

  /**
   * Queries the major and minor version information of a Tair (Redis® OSS-Compatible) database instance, as well as the release notes for the minor version.
   * 
   * @param request - DescribeEngineVersionRequest
   * @returns DescribeEngineVersionResponse
   */
  async describeEngineVersion(request: $_model.DescribeEngineVersionRequest): Promise<$_model.DescribeEngineVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEngineVersionWithOptions(request, runtime);
  }

  /**
   * Queries the details of a distributed instance.
   * 
   * @param request - DescribeGlobalDistributeCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalDistributeCacheResponse
   */
  async describeGlobalDistributeCacheWithOptions(request: $_model.DescribeGlobalDistributeCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalDistributeCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.globalInstanceId)) {
      query["GlobalInstanceId"] = request.globalInstanceId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.subInstanceId)) {
      query["SubInstanceId"] = request.subInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGlobalDistributeCache",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGlobalDistributeCacheResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGlobalDistributeCacheResponse({}));
  }

  /**
   * Queries the details of a distributed instance.
   * 
   * @param request - DescribeGlobalDistributeCacheRequest
   * @returns DescribeGlobalDistributeCacheResponse
   */
  async describeGlobalDistributeCache(request: $_model.DescribeGlobalDistributeCacheRequest): Promise<$_model.DescribeGlobalDistributeCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalDistributeCacheWithOptions(request, runtime);
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
    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
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
      action: "DescribeGlobalSecurityIPGroup",
      version: "2015-01-01",
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
   * Queries the information about global IP whitelist templates associated with an instance.
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
      version: "2015-01-01",
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
   * Queries the information about global IP whitelist templates associated with an instance.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRelationRequest
   * @returns DescribeGlobalSecurityIPGroupRelationResponse
   */
  async describeGlobalSecurityIPGroupRelation(request: $_model.DescribeGlobalSecurityIPGroupRelationRequest): Promise<$_model.DescribeGlobalSecurityIPGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalSecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * Queries historical events in Event Center.
   * 
   * @param request - DescribeHistoryEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHistoryEventsResponse
   */
  async describeHistoryEventsWithOptions(request: $_model.DescribeHistoryEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.archiveStatus)) {
      query["ArchiveStatus"] = request.archiveStatus;
    }

    if (!$dara.isNull(request.eventCategory)) {
      query["EventCategory"] = request.eventCategory;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.eventLevel)) {
      query["EventLevel"] = request.eventLevel;
    }

    if (!$dara.isNull(request.eventStatus)) {
      query["EventStatus"] = request.eventStatus;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.fromStartTime)) {
      query["FromStartTime"] = request.fromStartTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.toStartTime)) {
      query["ToStartTime"] = request.toStartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHistoryEvents",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHistoryEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHistoryEventsResponse({}));
  }

  /**
   * Queries historical events in Event Center.
   * 
   * @param request - DescribeHistoryEventsRequest
   * @returns DescribeHistoryEventsResponse
   */
  async describeHistoryEvents(request: $_model.DescribeHistoryEventsRequest): Promise<$_model.DescribeHistoryEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryEventsWithOptions(request, runtime);
  }

  /**
   * Queries historical event statistics.
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
      version: "2015-01-01",
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
   * Queries historical event statistics.
   * 
   * @param request - DescribeHistoryEventsStatRequest
   * @returns DescribeHistoryEventsStatResponse
   */
  async describeHistoryEventsStat(request: $_model.DescribeHistoryEventsStatRequest): Promise<$_model.DescribeHistoryEventsStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryEventsStatWithOptions(request, runtime);
  }

  /**
   * Queries the performance monitoring information of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * For the console operation that corresponds to this API, see [Performance monitoring](https://help.aliyun.com/document_detail/43887.html).
   * 
   * @param request - DescribeHistoryMonitorValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHistoryMonitorValuesResponse
   */
  async describeHistoryMonitorValuesWithOptions(request: $_model.DescribeHistoryMonitorValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryMonitorValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intervalForHistory)) {
      query["IntervalForHistory"] = request.intervalForHistory;
    }

    if (!$dara.isNull(request.monitorKeys)) {
      query["MonitorKeys"] = request.monitorKeys;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.nodeRole)) {
      query["NodeRole"] = request.nodeRole;
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
      action: "DescribeHistoryMonitorValues",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHistoryMonitorValuesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHistoryMonitorValuesResponse({}));
  }

  /**
   * Queries the performance monitoring information of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * For the console operation that corresponds to this API, see [Performance monitoring](https://help.aliyun.com/document_detail/43887.html).
   * 
   * @param request - DescribeHistoryMonitorValuesRequest
   * @returns DescribeHistoryMonitorValuesResponse
   */
  async describeHistoryMonitorValues(request: $_model.DescribeHistoryMonitorValuesRequest): Promise<$_model.DescribeHistoryMonitorValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryMonitorValuesWithOptions(request, runtime);
  }

  /**
   * Queries the task list in the task center.
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
      version: "2015-01-01",
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
   * Queries the task list in the task center.
   * 
   * @param request - DescribeHistoryTasksRequest
   * @returns DescribeHistoryTasksResponse
   */
  async describeHistoryTasks(request: $_model.DescribeHistoryTasksRequest): Promise<$_model.DescribeHistoryTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryTasksWithOptions(request, runtime);
  }

  /**
   * Queries task statistics in the task center.
   * 
   * @param request - DescribeHistoryTasksStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHistoryTasksStatResponse
   */
  async describeHistoryTasksStatWithOptions(request: $_model.DescribeHistoryTasksStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryTasksStatResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "DescribeHistoryTasksStat",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHistoryTasksStatResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHistoryTasksStatResponse({}));
  }

  /**
   * Queries task statistics in the task center.
   * 
   * @param request - DescribeHistoryTasksStatRequest
   * @returns DescribeHistoryTasksStatResponse
   */
  async describeHistoryTasksStat(request: $_model.DescribeHistoryTasksStatRequest): Promise<$_model.DescribeHistoryTasksStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryTasksStatWithOptions(request, runtime);
  }

  /**
   * Queries the historical inspection reports for timed scheduling.
   * 
   * @param request - DescribeInspectionScheduleReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInspectionScheduleReportsResponse
   */
  async describeInspectionScheduleReportsWithOptions(request: $_model.DescribeInspectionScheduleReportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInspectionScheduleReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scheduleId)) {
      query["ScheduleId"] = request.scheduleId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInspectionScheduleReports",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInspectionScheduleReportsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInspectionScheduleReportsResponse({}));
  }

  /**
   * Queries the historical inspection reports for timed scheduling.
   * 
   * @param request - DescribeInspectionScheduleReportsRequest
   * @returns DescribeInspectionScheduleReportsResponse
   */
  async describeInspectionScheduleReports(request: $_model.DescribeInspectionScheduleReportsRequest): Promise<$_model.DescribeInspectionScheduleReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInspectionScheduleReportsWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of scheduled inspection tasks.
   * 
   * @param request - DescribeInspectionSchedulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInspectionSchedulesResponse
   */
  async describeInspectionSchedulesWithOptions(request: $_model.DescribeInspectionSchedulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInspectionSchedulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scheduleId)) {
      query["ScheduleId"] = request.scheduleId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInspectionSchedules",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInspectionSchedulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInspectionSchedulesResponse({}));
  }

  /**
   * Queries the configurations of scheduled inspection tasks.
   * 
   * @param request - DescribeInspectionSchedulesRequest
   * @returns DescribeInspectionSchedulesResponse
   */
  async describeInspectionSchedules(request: $_model.DescribeInspectionSchedulesRequest): Promise<$_model.DescribeInspectionSchedulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInspectionSchedulesWithOptions(request, runtime);
  }

  /**
   * Queries the report of a specific inspection task.
   * 
   * @param request - DescribeInspectionTaskReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInspectionTaskReportResponse
   */
  async describeInspectionTaskReportWithOptions(request: $_model.DescribeInspectionTaskReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInspectionTaskReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inspectionInsId)) {
      query["InspectionInsId"] = request.inspectionInsId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInspectionTaskReport",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInspectionTaskReportResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInspectionTaskReportResponse({}));
  }

  /**
   * Queries the report of a specific inspection task.
   * 
   * @param request - DescribeInspectionTaskReportRequest
   * @returns DescribeInspectionTaskReportResponse
   */
  async describeInspectionTaskReport(request: $_model.DescribeInspectionTaskReportRequest): Promise<$_model.DescribeInspectionTaskReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInspectionTaskReportWithOptions(request, runtime);
  }

  /**
   * Query the list of smart inspection tasks
   * 
   * @param request - DescribeInspectionTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInspectionTasksResponse
   */
  async describeInspectionTasksWithOptions(request: $_model.DescribeInspectionTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInspectionTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInspectionTasks",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInspectionTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInspectionTasksResponse({}));
  }

  /**
   * Query the list of smart inspection tasks
   * 
   * @param request - DescribeInspectionTasksRequest
   * @returns DescribeInspectionTasksResponse
   */
  async describeInspectionTasks(request: $_model.DescribeInspectionTasksRequest): Promise<$_model.DescribeInspectionTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInspectionTasksWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @param request - DescribeInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAttributeResponse
   */
  async describeInstanceAttributeWithOptions(request: $_model.DescribeInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeInstanceAttribute",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAttributeResponse({}));
  }

  /**
   * Queries the detailed information of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @param request - DescribeInstanceAttributeRequest
   * @returns DescribeInstanceAttributeResponse
   */
  async describeInstanceAttribute(request: $_model.DescribeInstanceAttributeRequest): Promise<$_model.DescribeInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries whether auto-renewal is enabled for a Tair (Redis® OSS-Compatible) instance.
   * 
   * @param request - DescribeInstanceAutoRenewalAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAutoRenewalAttributeResponse
   */
  async describeInstanceAutoRenewalAttributeWithOptions(request: $_model.DescribeInstanceAutoRenewalAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAutoRenewalAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeInstanceAutoRenewalAttribute",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAutoRenewalAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAutoRenewalAttributeResponse({}));
  }

  /**
   * Queries whether auto-renewal is enabled for a Tair (Redis® OSS-Compatible) instance.
   * 
   * @param request - DescribeInstanceAutoRenewalAttributeRequest
   * @returns DescribeInstanceAutoRenewalAttributeResponse
   */
  async describeInstanceAutoRenewalAttribute(request: $_model.DescribeInstanceAutoRenewalAttributeRequest): Promise<$_model.DescribeInstanceAutoRenewalAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  /**
   * Queries some default configuration parameters of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @param request - DescribeInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceConfigResponse
   */
  async describeInstanceConfigWithOptions(request: $_model.DescribeInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeInstanceConfig",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceConfigResponse({}));
  }

  /**
   * Queries some default configuration parameters of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @param request - DescribeInstanceConfigRequest
   * @returns DescribeInstanceConfigResponse
   */
  async describeInstanceConfig(request: $_model.DescribeInstanceConfigRequest): Promise<$_model.DescribeInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Queries the load balancer (LB) information of an instance.
   * 
   * @remarks
   * For more information about multiple LBs, see.
   * 
   * @param request - DescribeInstanceMultiVIPRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceMultiVIPResponse
   */
  async describeInstanceMultiVIPWithOptions(request: $_model.DescribeInstanceMultiVIPRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceMultiVIPResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeInstanceMultiVIP",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceMultiVIPResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceMultiVIPResponse({}));
  }

  /**
   * Queries the load balancer (LB) information of an instance.
   * 
   * @remarks
   * For more information about multiple LBs, see.
   * 
   * @param request - DescribeInstanceMultiVIPRequest
   * @returns DescribeInstanceMultiVIPResponse
   */
  async describeInstanceMultiVIP(request: $_model.DescribeInstanceMultiVIPRequest): Promise<$_model.DescribeInstanceMultiVIPResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceMultiVIPWithOptions(request, runtime);
  }

  /**
   * Queries whether TLS (SSL) encryption authentication is enabled for a Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - DescribeInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSSLResponse
   */
  async describeInstanceSSLWithOptions(request: $_model.DescribeInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeInstanceSSL",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSSLResponse({}));
  }

  /**
   * Queries whether TLS (SSL) encryption authentication is enabled for a Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - DescribeInstanceSSLRequest
   * @returns DescribeInstanceSSLResponse
   */
  async describeInstanceSSL(request: $_model.DescribeInstanceSSLRequest): Promise<$_model.DescribeInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSSLWithOptions(request, runtime);
  }

  /**
   * Queries whether the TDE data encryption feature is enabled for an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * For more information about the transparent data encryption (TDE) feature and precautions, see [Enable transparent data encryption TDE](https://help.aliyun.com/document_detail/265913.html).
   * > You can invoke [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html) to enable or shutdown the TDE encrypt feature.
   * 
   * @param request - DescribeInstanceTDEStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceTDEStatusResponse
   */
  async describeInstanceTDEStatusWithOptions(request: $_model.DescribeInstanceTDEStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceTDEStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeInstanceTDEStatus",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceTDEStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceTDEStatusResponse({}));
  }

  /**
   * Queries whether the TDE data encryption feature is enabled for an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * For more information about the transparent data encryption (TDE) feature and precautions, see [Enable transparent data encryption TDE](https://help.aliyun.com/document_detail/265913.html).
   * > You can invoke [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html) to enable or shutdown the TDE encrypt feature.
   * 
   * @param request - DescribeInstanceTDEStatusRequest
   * @returns DescribeInstanceTDEStatusResponse
   */
  async describeInstanceTDEStatus(request: $_model.DescribeInstanceTDEStatusRequest): Promise<$_model.DescribeInstanceTDEStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceTDEStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information of one or more Tair (Redis® OSS-Compatible) instances.
   * 
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: $_model.DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.architectureType)) {
      query["ArchitectureType"] = request.architectureType;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.editionType)) {
      query["EditionType"] = request.editionType;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.expired)) {
      query["Expired"] = request.expired;
    }

    if (!$dara.isNull(request.globalInstance)) {
      query["GlobalInstance"] = request.globalInstance;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
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

    if (!$dara.isNull(request.privateIp)) {
      query["PrivateIp"] = request.privateIp;
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

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
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
      action: "DescribeInstances",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancesResponse({}));
  }

  /**
   * Queries the information of one or more Tair (Redis® OSS-Compatible) instances.
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the overview information of one or more ApsaraDB for Tair (Redis® OSS-Compatible) database instances.
   * 
   * @remarks
   * If you do not specify any request parameters, the overview information of all instances is returned.
   * > This operation does not support pagination for the returned results.
   * 
   * @param request - DescribeInstancesOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesOverviewResponse
   */
  async describeInstancesOverviewWithOptions(request: $_model.DescribeInstancesOverviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesOverviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.architectureType)) {
      query["ArchitectureType"] = request.architectureType;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.editionType)) {
      query["EditionType"] = request.editionType;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
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

    if (!$dara.isNull(request.privateIp)) {
      query["PrivateIp"] = request.privateIp;
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

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
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
      action: "DescribeInstancesOverview",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancesOverviewResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancesOverviewResponse({}));
  }

  /**
   * Queries the overview information of one or more ApsaraDB for Tair (Redis® OSS-Compatible) database instances.
   * 
   * @remarks
   * If you do not specify any request parameters, the overview information of all instances is returned.
   * > This operation does not support pagination for the returned results.
   * 
   * @param request - DescribeInstancesOverviewRequest
   * @returns DescribeInstancesOverviewResponse
   */
  async describeInstancesOverview(request: $_model.DescribeInstancesOverviewRequest): Promise<$_model.DescribeInstancesOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesOverviewWithOptions(request, runtime);
  }

  /**
   * Queries the current bandwidth of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * You can call the [EnableAdditionalBandwidth](https://help.aliyun.com/document_detail/473771.html) operation to purchase bandwidth for an instance.
   * 
   * @param request - DescribeIntranetAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIntranetAttributeResponse
   */
  async describeIntranetAttributeWithOptions(request: $_model.DescribeIntranetAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIntranetAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeIntranetAttribute",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIntranetAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIntranetAttributeResponse({}));
  }

  /**
   * Queries the current bandwidth of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * You can call the [EnableAdditionalBandwidth](https://help.aliyun.com/document_detail/473771.html) operation to purchase bandwidth for an instance.
   * 
   * @param request - DescribeIntranetAttributeRequest
   * @returns DescribeIntranetAttributeResponse
   */
  async describeIntranetAttribute(request: $_model.DescribeIntranetAttributeRequest): Promise<$_model.DescribeIntranetAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIntranetAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the logical topology structure of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * This operation is supported only for cluster and read/write splitting instances.
   * 
   * @param request - DescribeLogicInstanceTopologyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogicInstanceTopologyResponse
   */
  async describeLogicInstanceTopologyWithOptions(request: $_model.DescribeLogicInstanceTopologyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogicInstanceTopologyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeLogicInstanceTopology",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogicInstanceTopologyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogicInstanceTopologyResponse({}));
  }

  /**
   * Queries the logical topology structure of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * This operation is supported only for cluster and read/write splitting instances.
   * 
   * @param request - DescribeLogicInstanceTopologyRequest
   * @returns DescribeLogicInstanceTopologyResponse
   */
  async describeLogicInstanceTopology(request: $_model.DescribeLogicInstanceTopologyRequest): Promise<$_model.DescribeLogicInstanceTopologyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogicInstanceTopologyWithOptions(request, runtime);
  }

  /**
   * Queries the list of monitoring items supported by a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * > To improve user experience, Tair (Redis® OSS-Compatible) has upgraded its performance monitoring. This operation will be taken offline. For more information, see [Notice: Tair (Redis® OSS-Compatible) DescribeMonitorItems operation offline](https://help.aliyun.com/document_detail/189893.html).
   * After you call this operation to obtain the list of monitoring items, you can call the [DescribeHistoryMonitorValues](https://help.aliyun.com/document_detail/473827.html) operation to query the historical monitoring information of an instance.
   * 
   * @param request - DescribeMonitorItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitorItemsResponse
   */
  async describeMonitorItemsWithOptions(request: $_model.DescribeMonitorItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitorItemsResponse> {
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitorItems",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitorItemsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitorItemsResponse({}));
  }

  /**
   * Queries the list of monitoring items supported by a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * > To improve user experience, Tair (Redis® OSS-Compatible) has upgraded its performance monitoring. This operation will be taken offline. For more information, see [Notice: Tair (Redis® OSS-Compatible) DescribeMonitorItems operation offline](https://help.aliyun.com/document_detail/189893.html).
   * After you call this operation to obtain the list of monitoring items, you can call the [DescribeHistoryMonitorValues](https://help.aliyun.com/document_detail/473827.html) operation to query the historical monitoring information of an instance.
   * 
   * @param request - DescribeMonitorItemsRequest
   * @returns DescribeMonitorItemsResponse
   */
  async describeMonitorItems(request: $_model.DescribeMonitorItemsRequest): Promise<$_model.DescribeMonitorItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitorItemsWithOptions(request, runtime);
  }

  /**
   * Queries the basic information about a query parameter template.
   * 
   * @param request - DescribeParameterGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterGroupResponse
   */
  async describeParameterGroupWithOptions(request: $_model.DescribeParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterGroupResponse> {
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
      action: "DescribeParameterGroup",
      version: "2015-01-01",
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
   * Queries the basic information about a query parameter template.
   * 
   * @param request - DescribeParameterGroupRequest
   * @returns DescribeParameterGroupResponse
   */
  async describeParameterGroup(request: $_model.DescribeParameterGroupRequest): Promise<$_model.DescribeParameterGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterGroupWithOptions(request, runtime);
  }

  /**
   * Queries the list of parameters that can be configured in parameter templates of different versions.
   * 
   * @param request - DescribeParameterGroupSupportParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterGroupSupportParamResponse
   */
  async describeParameterGroupSupportParamWithOptions(request: $_model.DescribeParameterGroupSupportParamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterGroupSupportParamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
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
      action: "DescribeParameterGroupSupportParam",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParameterGroupSupportParamResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParameterGroupSupportParamResponse({}));
  }

  /**
   * Queries the list of parameters that can be configured in parameter templates of different versions.
   * 
   * @param request - DescribeParameterGroupSupportParamRequest
   * @returns DescribeParameterGroupSupportParamResponse
   */
  async describeParameterGroupSupportParam(request: $_model.DescribeParameterGroupSupportParamRequest): Promise<$_model.DescribeParameterGroupSupportParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterGroupSupportParamWithOptions(request, runtime);
  }

  /**
   * Queries the details of configurable query parameters in a parameter template, such as default values, value ranges, and descriptions.
   * 
   * @param request - DescribeParameterGroupTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterGroupTemplateListResponse
   */
  async describeParameterGroupTemplateListWithOptions(request: $_model.DescribeParameterGroupTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterGroupTemplateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.characterType)) {
      query["CharacterType"] = request.characterType;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
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
      action: "DescribeParameterGroupTemplateList",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParameterGroupTemplateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParameterGroupTemplateListResponse({}));
  }

  /**
   * Queries the details of configurable query parameters in a parameter template, such as default values, value ranges, and descriptions.
   * 
   * @param request - DescribeParameterGroupTemplateListRequest
   * @returns DescribeParameterGroupTemplateListResponse
   */
  async describeParameterGroupTemplateList(request: $_model.DescribeParameterGroupTemplateListRequest): Promise<$_model.DescribeParameterGroupTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterGroupTemplateListWithOptions(request, runtime);
  }

  /**
   * Queries available parameter templates.
   * 
   * @param request - DescribeParameterGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterGroupsResponse
   */
  async describeParameterGroupsWithOptions(request: $_model.DescribeParameterGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
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
      action: "DescribeParameterGroups",
      version: "2015-01-01",
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
   * Queries available parameter templates.
   * 
   * @param request - DescribeParameterGroupsRequest
   * @returns DescribeParameterGroupsResponse
   */
  async describeParameterGroups(request: $_model.DescribeParameterGroupsRequest): Promise<$_model.DescribeParameterGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the parameter modification history of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - DescribeParameterModificationHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterModificationHistoryResponse
   */
  async describeParameterModificationHistoryWithOptions(request: $_model.DescribeParameterModificationHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterModificationHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.parameterName)) {
      query["ParameterName"] = request.parameterName;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParameterModificationHistory",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParameterModificationHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParameterModificationHistoryResponse({}));
  }

  /**
   * Queries the parameter modification history of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - DescribeParameterModificationHistoryRequest
   * @returns DescribeParameterModificationHistoryResponse
   */
  async describeParameterModificationHistory(request: $_model.DescribeParameterModificationHistoryRequest): Promise<$_model.DescribeParameterModificationHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterModificationHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the parameters and default values of ApsaraDB Tair (Redis® OSS-Compatible) database instances across different architectures and major engine versions.
   * 
   * @remarks
   * After you call this operation to retrieve the parameter list and default values, you can call the [ModifyInstanceConfig](https://help.aliyun.com/document_detail/473844.html) operation to modify the parameters of a Redis instance as needed.
   * 
   * @param request - DescribeParameterTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterTemplatesResponse
   */
  async describeParameterTemplatesWithOptions(request: $_model.DescribeParameterTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.characterType)) {
      query["CharacterType"] = request.characterType;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameterCategory)) {
      query["ParameterCategory"] = request.parameterCategory;
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
      action: "DescribeParameterTemplates",
      version: "2015-01-01",
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
   * Queries the parameters and default values of ApsaraDB Tair (Redis® OSS-Compatible) database instances across different architectures and major engine versions.
   * 
   * @remarks
   * After you call this operation to retrieve the parameter list and default values, you can call the [ModifyInstanceConfig](https://help.aliyun.com/document_detail/473844.html) operation to modify the parameters of a Redis instance as needed.
   * 
   * @param request - DescribeParameterTemplatesRequest
   * @returns DescribeParameterTemplatesResponse
   */
  async describeParameterTemplates(request: $_model.DescribeParameterTemplatesRequest): Promise<$_model.DescribeParameterTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the configuration parameters and running parameters of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @param request - DescribeParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParametersResponse
   */
  async describeParametersWithOptions(request: $_model.DescribeParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeParameters",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParametersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParametersResponse({}));
  }

  /**
   * Queries the configuration parameters and running parameters of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @param request - DescribeParametersRequest
   * @returns DescribeParametersResponse
   */
  async describeParameters(request: $_model.DescribeParametersRequest): Promise<$_model.DescribeParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  /**
   * Queries the fees generated by operations such as creating a Tair (Redis® OSS-Compatible) database instance, upgrading the instance configuration, or renewing the instance.
   * 
   * @param request - DescribePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePriceResponse
   */
  async describePriceWithOptions(request: $_model.DescribePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.forceUpgrade)) {
      query["ForceUpgrade"] = request.forceUpgrade;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instances)) {
      query["Instances"] = request.instances;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    if (!$dara.isNull(request.orderParamOut)) {
      query["OrderParamOut"] = request.orderParamOut;
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

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
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

    if (!$dara.isNull(request.secondaryZoneId)) {
      query["SecondaryZoneId"] = request.secondaryZoneId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.shardCount)) {
      query["ShardCount"] = request.shardCount;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrice",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePriceResponse>(await this.callApi(params, req, runtime), new $_model.DescribePriceResponse({}));
  }

  /**
   * Queries the fees generated by operations such as creating a Tair (Redis® OSS-Compatible) database instance, upgrading the instance configuration, or renewing the instance.
   * 
   * @param request - DescribePriceRequest
   * @returns DescribePriceResponse
   */
  async describePrice(request: $_model.DescribePriceRequest): Promise<$_model.DescribePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  /**
   * Queries all regions and their corresponding active zones supported by ApsaraDB for Tair (Redis® OSS-Compatible) database instances.
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
      action: "DescribeRegions",
      version: "2015-01-01",
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
   * Queries all regions and their corresponding active zones supported by ApsaraDB for Tair (Redis® OSS-Compatible) database instances.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the roles, types, minor versions, and zones of nodes in a Tair (Redis® OSS-Compatible) instance.
   * 
   * @param request - DescribeRoleZoneInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRoleZoneInfoResponse
   */
  async describeRoleZoneInfoWithOptions(request: $_model.DescribeRoleZoneInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRoleZoneInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
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
      action: "DescribeRoleZoneInfo",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRoleZoneInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRoleZoneInfoResponse({}));
  }

  /**
   * Queries the roles, types, minor versions, and zones of nodes in a Tair (Redis® OSS-Compatible) instance.
   * 
   * @param request - DescribeRoleZoneInfoRequest
   * @returns DescribeRoleZoneInfoResponse
   */
  async describeRoleZoneInfo(request: $_model.DescribeRoleZoneInfoRequest): Promise<$_model.DescribeRoleZoneInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRoleZoneInfoWithOptions(request, runtime);
  }

  /**
   * Queries the running logs of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * For the corresponding console operation of this API, see [Query running logs](https://help.aliyun.com/document_detail/101713.html). The maximum call frequency of DescribeRunningLogRecords is 100 calls per minute.
   * 
   * @param request - DescribeRunningLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRunningLogRecordsResponse
   */
  async describeRunningLogRecordsWithOptions(request: $_model.DescribeRunningLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRunningLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.characterType)) {
      query["CharacterType"] = request.characterType;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRunningLogRecords",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRunningLogRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRunningLogRecordsResponse({}));
  }

  /**
   * Queries the running logs of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * For the corresponding console operation of this API, see [Query running logs](https://help.aliyun.com/document_detail/101713.html). The maximum call frequency of DescribeRunningLogRecords is 100 calls per minute.
   * 
   * @param request - DescribeRunningLogRecordsRequest
   * @returns DescribeRunningLogRecordsResponse
   */
  async describeRunningLogRecords(request: $_model.DescribeRunningLogRecordsRequest): Promise<$_model.DescribeRunningLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRunningLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the security groups in the Settings of the whitelist for an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - DescribeSecurityGroupConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityGroupConfigurationResponse
   */
  async describeSecurityGroupConfigurationWithOptions(request: $_model.DescribeSecurityGroupConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityGroupConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeSecurityGroupConfiguration",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityGroupConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityGroupConfigurationResponse({}));
  }

  /**
   * Queries the security groups in the Settings of the whitelist for an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - DescribeSecurityGroupConfigurationRequest
   * @returns DescribeSecurityGroupConfigurationResponse
   */
  async describeSecurityGroupConfiguration(request: $_model.DescribeSecurityGroupConfigurationRequest): Promise<$_model.DescribeSecurityGroupConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityGroupConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the IP address whitelist of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @param request - DescribeSecurityIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityIpsResponse
   */
  async describeSecurityIpsWithOptions(request: $_model.DescribeSecurityIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeSecurityIps",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityIpsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityIpsResponse({}));
  }

  /**
   * Queries the IP address whitelist of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @param request - DescribeSecurityIpsRequest
   * @returns DescribeSecurityIpsResponse
   */
  async describeSecurityIps(request: $_model.DescribeSecurityIpsRequest): Promise<$_model.DescribeSecurityIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityIpsWithOptions(request, runtime);
  }

  /**
   * Queries whether the service-linked role has been authorized for Tair (Redis® OSS-Compatible).
   * 
   * @remarks
   * Call this operation to query whether the associated role named AliyunServiceRoleForKvstore has been authorized for use by Tair (Redis® OSS-Compatible) database under the current account. For more information, see [Service-linked role for Tair (Redis® OSS-Compatible) database](https://help.aliyun.com/document_detail/184337.html).
   * 
   * @param request - DescribeServiceLinkedRoleExistsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceLinkedRoleExistsResponse
   */
  async describeServiceLinkedRoleExistsWithOptions(request: $_model.DescribeServiceLinkedRoleExistsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceLinkedRoleExistsResponse> {
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
      action: "DescribeServiceLinkedRoleExists",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceLinkedRoleExistsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceLinkedRoleExistsResponse({}));
  }

  /**
   * Queries whether the service-linked role has been authorized for Tair (Redis® OSS-Compatible).
   * 
   * @remarks
   * Call this operation to query whether the associated role named AliyunServiceRoleForKvstore has been authorized for use by Tair (Redis® OSS-Compatible) database under the current account. For more information, see [Service-linked role for Tair (Redis® OSS-Compatible) database](https://help.aliyun.com/document_detail/184337.html).
   * 
   * @param request - DescribeServiceLinkedRoleExistsRequest
   * @returns DescribeServiceLinkedRoleExistsResponse
   */
  async describeServiceLinkedRoleExists(request: $_model.DescribeServiceLinkedRoleExistsRequest): Promise<$_model.DescribeServiceLinkedRoleExistsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceLinkedRoleExistsWithOptions(request, runtime);
  }

  /**
   * Queries the slow query logs generated by a Tair (Redis® OSS-Compatible) database instance within a specified time period.
   * 
   * @remarks
   * For the corresponding console operation, see [Query slow query logs](https://help.aliyun.com/document_detail/95874.html).
   * The maximum number of calls to DescribeSlowLogRecords is 100 per minute.
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecordsWithOptions(request: $_model.DescribeSlowLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.slowLogRecordType)) {
      query["SlowLogRecordType"] = request.slowLogRecordType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowLogRecords",
      version: "2015-01-01",
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
   * Queries the slow query logs generated by a Tair (Redis® OSS-Compatible) database instance within a specified time period.
   * 
   * @remarks
   * For the corresponding console operation, see [Query slow query logs](https://help.aliyun.com/document_detail/95874.html).
   * The maximum number of calls to DescribeSlowLogRecords is 100 per minute.
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: $_model.DescribeSlowLogRecordsRequest): Promise<$_model.DescribeSlowLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries all tags in the specified region.
   * 
   * @param request - DescribeTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsResponse
   */
  async describeTagsWithOptions(request: $_model.DescribeTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTags",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagsResponse({}));
  }

  /**
   * Queries all tags in the specified region.
   * 
   * @param request - DescribeTagsRequest
   * @returns DescribeTagsResponse
   */
  async describeTags(request: $_model.DescribeTagsRequest): Promise<$_model.DescribeTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  /**
   * 查看TairCustom实例
   * 
   * @param request - DescribeTairKVCacheCustomInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTairKVCacheCustomInstanceAttributeResponse
   */
  async describeTairKVCacheCustomInstanceAttributeWithOptions(request: $_model.DescribeTairKVCacheCustomInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTairKVCacheCustomInstanceAttributeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTairKVCacheCustomInstanceAttribute",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTairKVCacheCustomInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTairKVCacheCustomInstanceAttributeResponse({}));
  }

  /**
   * 查看TairCustom实例
   * 
   * @param request - DescribeTairKVCacheCustomInstanceAttributeRequest
   * @returns DescribeTairKVCacheCustomInstanceAttributeResponse
   */
  async describeTairKVCacheCustomInstanceAttribute(request: $_model.DescribeTairKVCacheCustomInstanceAttributeRequest): Promise<$_model.DescribeTairKVCacheCustomInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTairKVCacheCustomInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 查询TairCustom主机监控
   * 
   * @param request - DescribeTairKVCacheCustomInstanceHistoryMonitorValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTairKVCacheCustomInstanceHistoryMonitorValuesResponse
   */
  async describeTairKVCacheCustomInstanceHistoryMonitorValuesWithOptions(request: $_model.DescribeTairKVCacheCustomInstanceHistoryMonitorValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTairKVCacheCustomInstanceHistoryMonitorValuesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTairKVCacheCustomInstanceHistoryMonitorValues",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTairKVCacheCustomInstanceHistoryMonitorValuesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTairKVCacheCustomInstanceHistoryMonitorValuesResponse({}));
  }

  /**
   * 查询TairCustom主机监控
   * 
   * @param request - DescribeTairKVCacheCustomInstanceHistoryMonitorValuesRequest
   * @returns DescribeTairKVCacheCustomInstanceHistoryMonitorValuesResponse
   */
  async describeTairKVCacheCustomInstanceHistoryMonitorValues(request: $_model.DescribeTairKVCacheCustomInstanceHistoryMonitorValuesRequest): Promise<$_model.DescribeTairKVCacheCustomInstanceHistoryMonitorValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTairKVCacheCustomInstanceHistoryMonitorValuesWithOptions(request, runtime);
  }

  /**
   * 查看TairCustom实例
   * 
   * @param request - DescribeTairKVCacheCustomInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTairKVCacheCustomInstancesResponse
   */
  async describeTairKVCacheCustomInstancesWithOptions(request: $_model.DescribeTairKVCacheCustomInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTairKVCacheCustomInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTairKVCacheCustomInstances",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTairKVCacheCustomInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTairKVCacheCustomInstancesResponse({}));
  }

  /**
   * 查看TairCustom实例
   * 
   * @param request - DescribeTairKVCacheCustomInstancesRequest
   * @returns DescribeTairKVCacheCustomInstancesResponse
   */
  async describeTairKVCacheCustomInstances(request: $_model.DescribeTairKVCacheCustomInstancesRequest): Promise<$_model.DescribeTairKVCacheCustomInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTairKVCacheCustomInstancesWithOptions(request, runtime);
  }

  /**
   * 查看TairInfer实例
   * 
   * @param request - DescribeTairKVCacheInferInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTairKVCacheInferInstanceAttributeResponse
   */
  async describeTairKVCacheInferInstanceAttributeWithOptions(request: $_model.DescribeTairKVCacheInferInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTairKVCacheInferInstanceAttributeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTairKVCacheInferInstanceAttribute",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTairKVCacheInferInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTairKVCacheInferInstanceAttributeResponse({}));
  }

  /**
   * 查看TairInfer实例
   * 
   * @param request - DescribeTairKVCacheInferInstanceAttributeRequest
   * @returns DescribeTairKVCacheInferInstanceAttributeResponse
   */
  async describeTairKVCacheInferInstanceAttribute(request: $_model.DescribeTairKVCacheInferInstanceAttributeRequest): Promise<$_model.DescribeTairKVCacheInferInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTairKVCacheInferInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the details of one or more Tair KVCache instances.
   * 
   * @remarks
   * This operation queries inference operator instances, virtual cluster instances, and cache service instances of Tair KVCache.
   * 
   * @param request - DescribeTairKVCacheInferInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTairKVCacheInferInstancesResponse
   */
  async describeTairKVCacheInferInstancesWithOptions(request: $_model.DescribeTairKVCacheInferInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTairKVCacheInferInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTairKVCacheInferInstances",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTairKVCacheInferInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTairKVCacheInferInstancesResponse({}));
  }

  /**
   * Queries the details of one or more Tair KVCache instances.
   * 
   * @remarks
   * This operation queries inference operator instances, virtual cluster instances, and cache service instances of Tair KVCache.
   * 
   * @param request - DescribeTairKVCacheInferInstancesRequest
   * @returns DescribeTairKVCacheInferInstancesResponse
   */
  async describeTairKVCacheInferInstances(request: $_model.DescribeTairKVCacheInferInstancesRequest): Promise<$_model.DescribeTairKVCacheInferInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTairKVCacheInferInstancesWithOptions(request, runtime);
  }

  /**
   * Queries all Tair Serverless KV table instances in a specified workspace.
   * 
   * @remarks
   * ## Operation description
   * - You must specify the `InstanceId` parameter when you call this operation.
   * - The response includes basic information about each table, such as the table ID, name, bandwidth, and maximum number of connections.
   * 
   * @param request - DescribeTairSkvDdbTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTairSkvDdbTableResponse
   */
  async describeTairSkvDdbTableWithOptions(request: $_model.DescribeTairSkvDdbTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTairSkvDdbTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTairSkvDdbTable",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTairSkvDdbTableResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTairSkvDdbTableResponse({}));
  }

  /**
   * Queries all Tair Serverless KV table instances in a specified workspace.
   * 
   * @remarks
   * ## Operation description
   * - You must specify the `InstanceId` parameter when you call this operation.
   * - The response includes basic information about each table, such as the table ID, name, bandwidth, and maximum number of connections.
   * 
   * @param request - DescribeTairSkvDdbTableRequest
   * @returns DescribeTairSkvDdbTableResponse
   */
  async describeTairSkvDdbTable(request: $_model.DescribeTairSkvDdbTableRequest): Promise<$_model.DescribeTairSkvDdbTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTairSkvDdbTableWithOptions(request, runtime);
  }

  /**
   * Retrieves the table schema and configuration information of a specified instance.
   * 
   * @remarks
   * ## Operation description
   * - This operation queries the table schema configuration of a Tair Serverless KV table instance.
   * - When you invoke this operation, you must specify the InstanceId parameter. The value of this parameter is the instance ID of the instance that you want to query.
   * - The BackupId parameter specifies the backup set of the table to query.
   * - The response packet includes the time-to-live (TTL) specifications and detailed table structure definition.
   * 
   * @param request - DescribeTairSkvDdbTableSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTairSkvDdbTableSchemaResponse
   */
  async describeTairSkvDdbTableSchemaWithOptions(request: $_model.DescribeTairSkvDdbTableSchemaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTairSkvDdbTableSchemaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeTairSkvDdbTableSchema",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTairSkvDdbTableSchemaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTairSkvDdbTableSchemaResponse({}));
  }

  /**
   * Retrieves the table schema and configuration information of a specified instance.
   * 
   * @remarks
   * ## Operation description
   * - This operation queries the table schema configuration of a Tair Serverless KV table instance.
   * - When you invoke this operation, you must specify the InstanceId parameter. The value of this parameter is the instance ID of the instance that you want to query.
   * - The BackupId parameter specifies the backup set of the table to query.
   * - The response packet includes the time-to-live (TTL) specifications and detailed table structure definition.
   * 
   * @param request - DescribeTairSkvDdbTableSchemaRequest
   * @returns DescribeTairSkvDdbTableSchemaResponse
   */
  async describeTairSkvDdbTableSchema(request: $_model.DescribeTairSkvDdbTableSchemaRequest): Promise<$_model.DescribeTairSkvDdbTableSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTairSkvDdbTableSchemaWithOptions(request, runtime);
  }

  /**
   * Queries the details of a node.
   * 
   * @param request - DescribeTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskDetailResponse
   */
  async describeTaskDetailWithOptions(request: $_model.DescribeTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTaskDetail",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTaskDetailResponse({}));
  }

  /**
   * Queries the details of a node.
   * 
   * @param request - DescribeTaskDetailRequest
   * @returns DescribeTaskDetailResponse
   */
  async describeTaskDetail(request: $_model.DescribeTaskDetailRequest): Promise<$_model.DescribeTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTaskDetailWithOptions(request, runtime);
  }

  /**
   * Queries the zones supported by Tair (Redis® OSS-Compatible) in a specified region. To query the zones that are active for purchase, call the DescribeAvailableResource operation.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse> {
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeZonesResponse({}));
  }

  /**
   * Queries the zones supported by Tair (Redis® OSS-Compatible) in a specified region. To query the zones that are active for purchase, call the DescribeAvailableResource operation.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Permanently destroys an instance and its data backups from the recycle bin.
   * 
   * @remarks
   * When you call this operation, the instance must exist in the recycle bin. For more information, see [Cluster recycle bin](https://help.aliyun.com/document_detail/86114.html).
   * > After you call this operation, the instance and its data backups in the recycle bin are permanently deleted.
   * <danger>After this operation is performed, the data of the instance is permanently deleted and cannot be recovered. Proceed with caution.
   * 
   * @param request - DestroyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DestroyInstanceResponse
   */
  async destroyInstanceWithOptions(request: $_model.DestroyInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DestroyInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DestroyInstance",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DestroyInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DestroyInstanceResponse({}));
  }

  /**
   * Permanently destroys an instance and its data backups from the recycle bin.
   * 
   * @remarks
   * When you call this operation, the instance must exist in the recycle bin. For more information, see [Cluster recycle bin](https://help.aliyun.com/document_detail/86114.html).
   * > After you call this operation, the instance and its data backups in the recycle bin are permanently deleted.
   * <danger>After this operation is performed, the data of the instance is permanently deleted and cannot be recovered. Proceed with caution.
   * 
   * @param request - DestroyInstanceRequest
   * @returns DestroyInstanceResponse
   */
  async destroyInstance(request: $_model.DestroyInstanceRequest): Promise<$_model.DestroyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.destroyInstanceWithOptions(request, runtime);
  }

  /**
   * Adjusts the bandwidth of an ApsaraDB Tair (Redis® OSS-Compatible) instance. Currently, only the pay-as-you-go billing method is supported. You only need to specify the InstanceId, NodeId (optional), Bandwidth, and ChargeType parameters.
   * 
   * @remarks
   * If you enable the elastic elastic scaling feature for the instance while calling this operation, the instance preferentially uses the elastic elastic scaling feature. When the bandwidth is elastically scaled down, it is scaled down to the default bandwidth of the instance specifications. For more information about the limits, billing, and FAQ of this feature, see [Adjust the bandwidth of an instance](https://help.aliyun.com/document_detail/102588.html).
   * > Before you call this operation, you can call [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/473782.html) to query the current bandwidth of each data node in the instance.
   * 
   * @param request - EnableAdditionalBandwidthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAdditionalBandwidthResponse
   */
  async enableAdditionalBandwidthWithOptions(request: $_model.EnableAdditionalBandwidthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAdditionalBandwidthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.bandWidthBurst)) {
      query["BandWidthBurst"] = request.bandWidthBurst;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.orderTimeLength)) {
      query["OrderTimeLength"] = request.orderTimeLength;
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

    if (!$dara.isNull(request.sourceBiz)) {
      query["SourceBiz"] = request.sourceBiz;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAdditionalBandwidth",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAdditionalBandwidthResponse>(await this.callApi(params, req, runtime), new $_model.EnableAdditionalBandwidthResponse({}));
  }

  /**
   * Adjusts the bandwidth of an ApsaraDB Tair (Redis® OSS-Compatible) instance. Currently, only the pay-as-you-go billing method is supported. You only need to specify the InstanceId, NodeId (optional), Bandwidth, and ChargeType parameters.
   * 
   * @remarks
   * If you enable the elastic elastic scaling feature for the instance while calling this operation, the instance preferentially uses the elastic elastic scaling feature. When the bandwidth is elastically scaled down, it is scaled down to the default bandwidth of the instance specifications. For more information about the limits, billing, and FAQ of this feature, see [Adjust the bandwidth of an instance](https://help.aliyun.com/document_detail/102588.html).
   * > Before you call this operation, you can call [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/473782.html) to query the current bandwidth of each data node in the instance.
   * 
   * @param request - EnableAdditionalBandwidthRequest
   * @returns EnableAdditionalBandwidthResponse
   */
  async enableAdditionalBandwidth(request: $_model.EnableAdditionalBandwidthRequest): Promise<$_model.EnableAdditionalBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAdditionalBandwidthWithOptions(request, runtime);
  }

  /**
   * Purges expired keys from a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * For the corresponding console operation, see [Clear data](https://help.aliyun.com/document_detail/43881.html).
   * > Expired keys cannot be recovered after they are cleared. Use this API operation with caution.
   * 
   * @param request - FlushExpireKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlushExpireKeysResponse
   */
  async flushExpireKeysWithOptions(request: $_model.FlushExpireKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FlushExpireKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "FlushExpireKeys",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlushExpireKeysResponse>(await this.callApi(params, req, runtime), new $_model.FlushExpireKeysResponse({}));
  }

  /**
   * Purges expired keys from a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * For the corresponding console operation, see [Clear data](https://help.aliyun.com/document_detail/43881.html).
   * > Expired keys cannot be recovered after they are cleared. Use this API operation with caution.
   * 
   * @param request - FlushExpireKeysRequest
   * @returns FlushExpireKeysResponse
   */
  async flushExpireKeys(request: $_model.FlushExpireKeysRequest): Promise<$_model.FlushExpireKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.flushExpireKeysWithOptions(request, runtime);
  }

  /**
   * Flushes all data from an ApsaraDB for Tair (Redis® OSS-Compatible) database instance. The data cannot be recovered.
   * 
   * @remarks
   * For the corresponding console operation, refer to [Purge data](https://help.aliyun.com/document_detail/43881.html).
   * > Before calling this API to delete data, back up your data or confirm that a backup is not required.
   * 
   * @param request - FlushInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlushInstanceResponse
   */
  async flushInstanceWithOptions(request: $_model.FlushInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FlushInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "FlushInstance",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlushInstanceResponse>(await this.callApi(params, req, runtime), new $_model.FlushInstanceResponse({}));
  }

  /**
   * Flushes all data from an ApsaraDB for Tair (Redis® OSS-Compatible) database instance. The data cannot be recovered.
   * 
   * @remarks
   * For the corresponding console operation, refer to [Purge data](https://help.aliyun.com/document_detail/43881.html).
   * > Before calling this API to delete data, back up your data or confirm that a backup is not required.
   * 
   * @param request - FlushInstanceRequest
   * @returns FlushInstanceResponse
   */
  async flushInstance(request: $_model.FlushInstanceRequest): Promise<$_model.FlushInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.flushInstanceWithOptions(request, runtime);
  }

  /**
   * Clears data from a specified database in an ApsaraDB for Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * ApsaraDB for Tair (Redis® OSS-Compatible) instances support 256 databases, from DB0 to DB255. Each database does not have a separate memory usage limit. The memory capacity available to a database is subject to the total memory limit of the instance. You can run the `SELECT` command to switch between databases. For more information, see [Tair DB](https://help.aliyun.com/document_detail/38688.html).
   * > This operation supports only cloud-native instances (formerly cloud disk-based instances) in cluster architecture.
   * 
   * @param request - FlushInstanceForDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlushInstanceForDBResponse
   */
  async flushInstanceForDBWithOptions(request: $_model.FlushInstanceForDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FlushInstanceForDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbIndex)) {
      query["DbIndex"] = request.dbIndex;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "FlushInstanceForDB",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlushInstanceForDBResponse>(await this.callApi(params, req, runtime), new $_model.FlushInstanceForDBResponse({}));
  }

  /**
   * Clears data from a specified database in an ApsaraDB for Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * ApsaraDB for Tair (Redis® OSS-Compatible) instances support 256 databases, from DB0 to DB255. Each database does not have a separate memory usage limit. The memory capacity available to a database is subject to the total memory limit of the instance. You can run the `SELECT` command to switch between databases. For more information, see [Tair DB](https://help.aliyun.com/document_detail/38688.html).
   * > This operation supports only cloud-native instances (formerly cloud disk-based instances) in cluster architecture.
   * 
   * @param request - FlushInstanceForDBRequest
   * @returns FlushInstanceForDBResponse
   */
  async flushInstanceForDB(request: $_model.FlushInstanceForDBRequest): Promise<$_model.FlushInstanceForDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.flushInstanceForDBWithOptions(request, runtime);
  }

  /**
   * Modifies the permissions of an ApsaraDB for Tair (Redis® OSS-Compatible) database account.
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

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.sourceBiz)) {
      query["SourceBiz"] = request.sourceBiz;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantAccountPrivilege",
      version: "2015-01-01",
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
   * Modifies the permissions of an ApsaraDB for Tair (Redis® OSS-Compatible) database account.
   * 
   * @param request - GrantAccountPrivilegeRequest
   * @returns GrantAccountPrivilegeResponse
   */
  async grantAccountPrivilege(request: $_model.GrantAccountPrivilegeRequest): Promise<$_model.GrantAccountPrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantAccountPrivilegeWithOptions(request, runtime);
  }

  /**
   * Associates the service-linked role named AliyunServiceRoleForKvstore with Tair (Redis® OSS-Compatible) database.
   * 
   * @remarks
   * The Log Management feature of Tair (Redis® OSS-Compatible) database requires resources from [Simple Log Service](https://help.aliyun.com/document_detail/48869.html). Before using the Log Management feature, call this operation to associate the service-linked role named AliyunServiceRoleForKvstore with Tair (Redis® OSS-Compatible) database. For more information, see [Service-linked role for Tair (Redis® OSS-Compatible) database](https://help.aliyun.com/document_detail/184337.html).
   * 
   * @param request - InitializeKvstorePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeKvstorePermissionResponse
   */
  async initializeKvstorePermissionWithOptions(request: $_model.InitializeKvstorePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitializeKvstorePermissionResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitializeKvstorePermission",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitializeKvstorePermissionResponse>(await this.callApi(params, req, runtime), new $_model.InitializeKvstorePermissionResponse({}));
  }

  /**
   * Associates the service-linked role named AliyunServiceRoleForKvstore with Tair (Redis® OSS-Compatible) database.
   * 
   * @remarks
   * The Log Management feature of Tair (Redis® OSS-Compatible) database requires resources from [Simple Log Service](https://help.aliyun.com/document_detail/48869.html). Before using the Log Management feature, call this operation to associate the service-linked role named AliyunServiceRoleForKvstore with Tair (Redis® OSS-Compatible) database. For more information, see [Service-linked role for Tair (Redis® OSS-Compatible) database](https://help.aliyun.com/document_detail/184337.html).
   * 
   * @param request - InitializeKvstorePermissionRequest
   * @returns InitializeKvstorePermissionResponse
   */
  async initializeKvstorePermission(request: $_model.InitializeKvstorePermissionRequest): Promise<$_model.InitializeKvstorePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeKvstorePermissionWithOptions(request, runtime);
  }

  /**
   * Queries the labels you attach to ApsaraDB for Tair (Redis® OSS-Compatible) database instances.
   * 
   * @remarks
   * For the corresponding console operations of this API, refer to [Filter instances by tag](https://help.aliyun.com/document_detail/119160.html) and [View tags bound to an instance](https://help.aliyun.com/document_detail/134038.html).
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
      version: "2015-01-01",
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
   * Queries the labels you attach to ApsaraDB for Tair (Redis® OSS-Compatible) database instances.
   * 
   * @remarks
   * For the corresponding console operations of this API, refer to [Filter instances by tag](https://help.aliyun.com/document_detail/119160.html) and [View tags bound to an instance](https://help.aliyun.com/document_detail/134038.html).
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Locks an instance so that it supports only data reads and does not support writes.
   * 
   * @param request - LockDBInstanceWriteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LockDBInstanceWriteResponse
   */
  async lockDBInstanceWriteWithOptions(request: $_model.LockDBInstanceWriteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LockDBInstanceWriteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.lockReason)) {
      query["LockReason"] = request.lockReason;
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
      action: "LockDBInstanceWrite",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LockDBInstanceWriteResponse>(await this.callApi(params, req, runtime), new $_model.LockDBInstanceWriteResponse({}));
  }

  /**
   * Locks an instance so that it supports only data reads and does not support writes.
   * 
   * @param request - LockDBInstanceWriteRequest
   * @returns LockDBInstanceWriteResponse
   */
  async lockDBInstanceWrite(request: $_model.LockDBInstanceWriteRequest): Promise<$_model.LockDBInstanceWriteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lockDBInstanceWriteWithOptions(request, runtime);
  }

  /**
   * Simulates a failure of a specified data node or proxy node in Tair (Redis® OSS-Compatible). The instance automatically performs a primary/secondary switchover to ensure high availability.
   * 
   * @remarks
   * - When you call this operation, the specified node is shut down. The instance automatically triggers a primary/secondary switchover to promote the secondary node to the primary node.
   * - The node with the simulated failure automatically recovers later.
   * - This operation is not supported for single-node (single-replica) instances.
   * 
   * @param request - MasterNodeShutDownFailOverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MasterNodeShutDownFailOverResponse
   */
  async masterNodeShutDownFailOverWithOptions(request: $_model.MasterNodeShutDownFailOverRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MasterNodeShutDownFailOverResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.DBFaultMode)) {
      query["DBFaultMode"] = request.DBFaultMode;
    }

    if (!$dara.isNull(request.DBNodes)) {
      query["DBNodes"] = request.DBNodes;
    }

    if (!$dara.isNull(request.failMode)) {
      query["FailMode"] = request.failMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.proxyFaultMode)) {
      query["ProxyFaultMode"] = request.proxyFaultMode;
    }

    if (!$dara.isNull(request.proxyInstanceIds)) {
      query["ProxyInstanceIds"] = request.proxyInstanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MasterNodeShutDownFailOver",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MasterNodeShutDownFailOverResponse>(await this.callApi(params, req, runtime), new $_model.MasterNodeShutDownFailOverResponse({}));
  }

  /**
   * Simulates a failure of a specified data node or proxy node in Tair (Redis® OSS-Compatible). The instance automatically performs a primary/secondary switchover to ensure high availability.
   * 
   * @remarks
   * - When you call this operation, the specified node is shut down. The instance automatically triggers a primary/secondary switchover to promote the secondary node to the primary node.
   * - The node with the simulated failure automatically recovers later.
   * - This operation is not supported for single-node (single-replica) instances.
   * 
   * @param request - MasterNodeShutDownFailOverRequest
   * @returns MasterNodeShutDownFailOverResponse
   */
  async masterNodeShutDownFailOver(request: $_model.MasterNodeShutDownFailOverRequest): Promise<$_model.MasterNodeShutDownFailOverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.masterNodeShutDownFailOverWithOptions(request, runtime);
  }

  /**
   * Migrates an ApsaraDB Tair (Redis OSS-Compatible) instance to another zone in the same region.
   * 
   * @remarks
   * Before you call this operation, you must release the public endpoint. For more information, see [Migrate an instance across zones](https://help.aliyun.com/document_detail/106272.html).
   * > * If the instance was switched from the classic network to a VPC and retains the classic network endpoint, you must wait until the classic network endpoint expires and is released before you can migrate the instance across zones.
   * > * After the migration, the endpoint of the instance remains unchanged, but the virtual IP address (VIP) changes. Use the endpoint instead of the VIP to connect to the instance in your business applications.
   * 
   * @param request - MigrateToOtherZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateToOtherZoneResponse
   */
  async migrateToOtherZoneWithOptions(request: $_model.MigrateToOtherZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateToOtherZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.readOnlyCount)) {
      query["ReadOnlyCount"] = request.readOnlyCount;
    }

    if (!$dara.isNull(request.replicaCount)) {
      query["ReplicaCount"] = request.replicaCount;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.secondaryZoneId)) {
      query["SecondaryZoneId"] = request.secondaryZoneId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.slaveReadOnlyCount)) {
      query["SlaveReadOnlyCount"] = request.slaveReadOnlyCount;
    }

    if (!$dara.isNull(request.slaveReplicaCount)) {
      query["SlaveReplicaCount"] = request.slaveReplicaCount;
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
      action: "MigrateToOtherZone",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateToOtherZoneResponse>(await this.callApi(params, req, runtime), new $_model.MigrateToOtherZoneResponse({}));
  }

  /**
   * Migrates an ApsaraDB Tair (Redis OSS-Compatible) instance to another zone in the same region.
   * 
   * @remarks
   * Before you call this operation, you must release the public endpoint. For more information, see [Migrate an instance across zones](https://help.aliyun.com/document_detail/106272.html).
   * > * If the instance was switched from the classic network to a VPC and retains the classic network endpoint, you must wait until the classic network endpoint expires and is released before you can migrate the instance across zones.
   * > * After the migration, the endpoint of the instance remains unchanged, but the virtual IP address (VIP) changes. Use the endpoint instead of the VIP to connect to the instance in your business applications.
   * 
   * @param request - MigrateToOtherZoneRequest
   * @returns MigrateToOtherZoneResponse
   */
  async migrateToOtherZone(request: $_model.MigrateToOtherZoneRequest): Promise<$_model.MigrateToOtherZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.migrateToOtherZoneWithOptions(request, runtime);
  }

  /**
   * Modifies the account description of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * This API operation supports only instances that are compatible with Redis 4.0 or later.
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

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.sourceBiz)) {
      query["SourceBiz"] = request.sourceBiz;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountDescription",
      version: "2015-01-01",
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
   * Modifies the account description of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * This API operation supports only instances that are compatible with Redis 4.0 or later.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies account parameters.
   * 
   * @remarks
   * Currently, only Tair Serverless KV instances are supported.
   * 
   * @param request - ModifyAccountParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountParameterResponse
   */
  async modifyAccountParameterWithOptions(request: $_model.ModifyAccountParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountParameter",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountParameterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountParameterResponse({}));
  }

  /**
   * Modifies account parameters.
   * 
   * @remarks
   * Currently, only Tair Serverless KV instances are supported.
   * 
   * @param request - ModifyAccountParameterRequest
   * @returns ModifyAccountParameterResponse
   */
  async modifyAccountParameter(request: $_model.ModifyAccountParameterRequest): Promise<$_model.ModifyAccountParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountParameterWithOptions(request, runtime);
  }

  /**
   * Modifies the password of a specified account in a Tair (Redis® OSS-Compatible) instance.
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

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.newAccountPassword)) {
      query["NewAccountPassword"] = request.newAccountPassword;
    }

    if (!$dara.isNull(request.oldAccountPassword)) {
      query["OldAccountPassword"] = request.oldAccountPassword;
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

    if (!$dara.isNull(request.sourceBiz)) {
      query["SourceBiz"] = request.sourceBiz;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountPassword",
      version: "2015-01-01",
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
   * Modifies the password of a specified account in a Tair (Redis® OSS-Compatible) instance.
   * 
   * @param request - ModifyAccountPasswordRequest
   * @returns ModifyAccountPasswordResponse
   */
  async modifyAccountPassword(request: $_model.ModifyAccountPasswordRequest): Promise<$_model.ModifyAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of an O&M task.
   * 
   * @param request - ModifyActiveOperationMaintainConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyActiveOperationMaintainConfigResponse
   */
  async modifyActiveOperationMaintainConfigWithOptions(request: $_model.ModifyActiveOperationMaintainConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyActiveOperationMaintainConfigResponse> {
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
      action: "ModifyActiveOperationMaintainConfig",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyActiveOperationMaintainConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyActiveOperationMaintainConfigResponse({}));
  }

  /**
   * Modifies the configuration of an O&M task.
   * 
   * @param request - ModifyActiveOperationMaintainConfigRequest
   * @returns ModifyActiveOperationMaintainConfigResponse
   */
  async modifyActiveOperationMaintainConfig(request: $_model.ModifyActiveOperationMaintainConfigRequest): Promise<$_model.ModifyActiveOperationMaintainConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationMaintainConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the scheduled switchover time of an O&M task.
   * 
   * @remarks
   * O&M events of Tair (Redis® OSS-Compatible) instances, such as instance migration and version upgrades, are notified through text messages, phone calls, emails, or internal messages, and are also displayed in the console. In addition to invoking this operation to modify the scheduled switchover time, you can also modify it in the console. For more information, see [Query or manage pending events](https://help.aliyun.com/document_detail/187022.html).
   * 
   * @param request - ModifyActiveOperationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyActiveOperationTaskResponse
   */
  async modifyActiveOperationTaskWithOptions(request: $_model.ModifyActiveOperationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyActiveOperationTaskResponse> {
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
      action: "ModifyActiveOperationTask",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyActiveOperationTaskResponse>(await this.callApi(params, req, runtime), new $_model.ModifyActiveOperationTaskResponse({}));
  }

  /**
   * Modifies the scheduled switchover time of an O&M task.
   * 
   * @remarks
   * O&M events of Tair (Redis® OSS-Compatible) instances, such as instance migration and version upgrades, are notified through text messages, phone calls, emails, or internal messages, and are also displayed in the console. In addition to invoking this operation to modify the scheduled switchover time, you can also modify it in the console. For more information, see [Query or manage pending events](https://help.aliyun.com/document_detail/187022.html).
   * 
   * @param request - ModifyActiveOperationTaskRequest
   * @returns ModifyActiveOperationTaskResponse
   */
  async modifyActiveOperationTask(request: $_model.ModifyActiveOperationTaskRequest): Promise<$_model.ModifyActiveOperationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationTaskWithOptions(request, runtime);
  }

  /**
   * Modifies the switchover time of scheduled O&M events for an instance.
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
      version: "2015-01-01",
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
   * Modifies the switchover time of scheduled O&M events for an instance.
   * 
   * @param request - ModifyActiveOperationTasksRequest
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasks(request: $_model.ModifyActiveOperationTasksRequest): Promise<$_model.ModifyActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Enables or modifies the audit log settings of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing and [pricing](https://help.aliyun.com/document_detail/54532.html) of audit logs.
   * 
   * @param request - ModifyAuditLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAuditLogConfigResponse
   */
  async modifyAuditLogConfigWithOptions(request: $_model.ModifyAuditLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAuditLogConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbAudit)) {
      query["DbAudit"] = request.dbAudit;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAuditLogConfig",
      version: "2015-01-01",
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
   * Enables or modifies the audit log settings of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing and [pricing](https://help.aliyun.com/document_detail/54532.html) of audit logs.
   * 
   * @param request - ModifyAuditLogConfigRequest
   * @returns ModifyAuditLogConfigResponse
   */
  async modifyAuditLogConfig(request: $_model.ModifyAuditLogConfigRequest): Promise<$_model.ModifyAuditLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAuditLogConfigWithOptions(request, runtime);
  }

  /**
   * Extends the expiration time of manual backup data.
   * 
   * @param request - ModifyBackupExpireTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupExpireTimeResponse
   */
  async modifyBackupExpireTimeWithOptions(request: $_model.ModifyBackupExpireTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupExpireTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.expectExpireTime)) {
      query["ExpectExpireTime"] = request.expectExpireTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ModifyBackupExpireTime",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackupExpireTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackupExpireTimeResponse({}));
  }

  /**
   * Extends the expiration time of manual backup data.
   * 
   * @param request - ModifyBackupExpireTimeRequest
   * @returns ModifyBackupExpireTimeResponse
   */
  async modifyBackupExpireTime(request: $_model.ModifyBackupExpireTimeRequest): Promise<$_model.ModifyBackupExpireTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupExpireTimeWithOptions(request, runtime);
  }

  /**
   * Modifies the automatic backup policy of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
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

    if (!$dara.isNull(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupPolicy",
      version: "2015-01-01",
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
   * Modifies the automatic backup policy of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the automatic minor engine version update switch for an instance.
   * 
   * @param request - ModifyDBInstanceAutoUpgradeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceAutoUpgradeResponse
   */
  async modifyDBInstanceAutoUpgradeWithOptions(request: $_model.ModifyDBInstanceAutoUpgradeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceAutoUpgradeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceAutoUpgrade",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceAutoUpgradeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceAutoUpgradeResponse({}));
  }

  /**
   * Modifies the automatic minor engine version update switch for an instance.
   * 
   * @param request - ModifyDBInstanceAutoUpgradeRequest
   * @returns ModifyDBInstanceAutoUpgradeResponse
   */
  async modifyDBInstanceAutoUpgrade(request: $_model.ModifyDBInstanceAutoUpgradeRequest): Promise<$_model.ModifyDBInstanceAutoUpgradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceAutoUpgradeWithOptions(request, runtime);
  }

  /**
   * Modifies the endpoint and port of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * For the console operation that corresponds to this API operation, see [Modify an endpoint](https://help.aliyun.com/document_detail/85683.html).
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionStringWithOptions(request: $_model.ModifyDBInstanceConnectionStringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceConnectionStringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.IPType)) {
      query["IPType"] = request.IPType;
    }

    if (!$dara.isNull(request.newConnectionString)) {
      query["NewConnectionString"] = request.newConnectionString;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceConnectionString",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceConnectionStringResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceConnectionStringResponse({}));
  }

  /**
   * Modifies the endpoint and port of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * For the console operation that corresponds to this API operation, see [Modify an endpoint](https://help.aliyun.com/document_detail/85683.html).
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionString(request: $_model.ModifyDBInstanceConnectionStringRequest): Promise<$_model.ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  /**
   * Modifies the monitoring collection granularity of a Tair instance.
   * 
   * @param request - ModifyDBInstanceMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceMonitorResponse
   */
  async modifyDBInstanceMonitorWithOptions(request: $_model.ModifyDBInstanceMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
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
      action: "ModifyDBInstanceMonitor",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceMonitorResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceMonitorResponse({}));
  }

  /**
   * Modifies the monitoring collection granularity of a Tair instance.
   * 
   * @param request - ModifyDBInstanceMonitorRequest
   * @returns ModifyDBInstanceMonitorResponse
   */
  async modifyDBInstanceMonitor(request: $_model.ModifyDBInstanceMonitorRequest): Promise<$_model.ModifyDBInstanceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceMonitorWithOptions(request, runtime);
  }

  /**
   * Modifies event information.
   * 
   * @param request - ModifyEventInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEventInfoResponse
   */
  async modifyEventInfoWithOptions(request: $_model.ModifyEventInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEventInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionParams)) {
      query["ActionParams"] = request.actionParams;
    }

    if (!$dara.isNull(request.eventAction)) {
      query["EventAction"] = request.eventAction;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyEventInfo",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyEventInfoResponse>(await this.callApi(params, req, runtime), new $_model.ModifyEventInfoResponse({}));
  }

  /**
   * Modifies event information.
   * 
   * @param request - ModifyEventInfoRequest
   * @returns ModifyEventInfoResponse
   */
  async modifyEventInfo(request: $_model.ModifyEventInfoRequest): Promise<$_model.ModifyEventInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEventInfoWithOptions(request, runtime);
  }

  /**
   * Modifies a global IP address whitelist template.
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
      version: "2015-01-01",
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
   * Modifies a global IP address whitelist template.
   * 
   * @param request - ModifyGlobalSecurityIPGroupRequest
   * @returns ModifyGlobalSecurityIPGroupResponse
   */
  async modifyGlobalSecurityIPGroup(request: $_model.ModifyGlobalSecurityIPGroupRequest): Promise<$_model.ModifyGlobalSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a global IP address whitelist template.
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
      version: "2015-01-01",
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
   * Modifies the name of a global IP address whitelist template.
   * 
   * @param request - ModifyGlobalSecurityIPGroupNameRequest
   * @returns ModifyGlobalSecurityIPGroupNameResponse
   */
  async modifyGlobalSecurityIPGroupName(request: $_model.ModifyGlobalSecurityIPGroupNameRequest): Promise<$_model.ModifyGlobalSecurityIPGroupNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupNameWithOptions(request, runtime);
  }

  /**
   * Adds a specified instance to a specified IP whitelist template.
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
      version: "2015-01-01",
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
   * Adds a specified instance to a specified IP whitelist template.
   * 
   * @param request - ModifyGlobalSecurityIPGroupRelationRequest
   * @returns ModifyGlobalSecurityIPGroupRelationResponse
   */
  async modifyGlobalSecurityIPGroupRelation(request: $_model.ModifyGlobalSecurityIPGroupRelationRequest): Promise<$_model.ModifyGlobalSecurityIPGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * Modifies the scheduled inspection configuration.
   * 
   * @param request - ModifyInspectionScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInspectionScheduleResponse
   */
  async modifyInspectionScheduleWithOptions(request: $_model.ModifyInspectionScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInspectionScheduleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.inspectionItems)) {
      query["InspectionItems"] = request.inspectionItems;
    }

    if (!$dara.isNull(request.inspectionWindow)) {
      query["InspectionWindow"] = request.inspectionWindow;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.reportLanguage)) {
      query["ReportLanguage"] = request.reportLanguage;
    }

    if (!$dara.isNull(request.scheduleId)) {
      query["ScheduleId"] = request.scheduleId;
    }

    if (!$dara.isNull(request.scheduleName)) {
      query["ScheduleName"] = request.scheduleName;
    }

    if (!$dara.isNull(request.timezone)) {
      query["Timezone"] = request.timezone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInspectionSchedule",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInspectionScheduleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInspectionScheduleResponse({}));
  }

  /**
   * Modifies the scheduled inspection configuration.
   * 
   * @param request - ModifyInspectionScheduleRequest
   * @returns ModifyInspectionScheduleResponse
   */
  async modifyInspectionSchedule(request: $_model.ModifyInspectionScheduleRequest): Promise<$_model.ModifyInspectionScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInspectionScheduleWithOptions(request, runtime);
  }

  /**
   * Modifies partial information of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance, including the instance password and name.
   * 
   * @param request - ModifyInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttributeWithOptions(request: $_model.ModifyInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceReleaseProtection)) {
      query["InstanceReleaseProtection"] = request.instanceReleaseProtection;
    }

    if (!$dara.isNull(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
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
      action: "ModifyInstanceAttribute",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceAttributeResponse({}));
  }

  /**
   * Modifies partial information of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance, including the instance password and name.
   * 
   * @param request - ModifyInstanceAttributeRequest
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttribute(request: $_model.ModifyInstanceAttributeRequest): Promise<$_model.ModifyInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Enables or disables the auto-renewal feature for a Tair (Redis® OSS-Compatible) instance before it expires.
   * 
   * @remarks
   * > Auto-renewal is triggered 7 days before the instance expires.
   * 
   * @param request - ModifyInstanceAutoRenewalAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceAutoRenewalAttributeResponse
   */
  async modifyInstanceAutoRenewalAttributeWithOptions(request: $_model.ModifyInstanceAutoRenewalAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceAutoRenewalAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
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
      action: "ModifyInstanceAutoRenewalAttribute",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceAutoRenewalAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceAutoRenewalAttributeResponse({}));
  }

  /**
   * Enables or disables the auto-renewal feature for a Tair (Redis® OSS-Compatible) instance before it expires.
   * 
   * @remarks
   * > Auto-renewal is triggered 7 days before the instance expires.
   * 
   * @param request - ModifyInstanceAutoRenewalAttributeRequest
   * @returns ModifyInstanceAutoRenewalAttributeResponse
   */
  async modifyInstanceAutoRenewalAttribute(request: $_model.ModifyInstanceAutoRenewalAttributeRequest): Promise<$_model.ModifyInstanceAutoRenewalAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  /**
   * Sets the target bandwidth value for a Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * - Before calling this operation, make sure that you fully understand the bandwidth billing method and pricing of the instance. Tair (Redis® OSS-Compatible) charges fees on an hourly basis based on the increased bandwidth and usage duration. The pricing varies by region. For more information, see [Billable items](https://help.aliyun.com/document_detail/54532.html).
   * - The bandwidth of an instance (or a single shard) can be increased by up to 6 times the default bandwidth of the instance, with a maximum increase of 192 MB/s. For example, the default bandwidth of a Tair memory-optimized 2 GB standard architecture instance is 96 MB/s. The bandwidth of this instance type can be increased by up to 192 MB/s, resulting in a maximum bandwidth of 288 MB/s. The default bandwidth of a Redis Community Edition 256 MB standard architecture instance is 10 MB/s. The bandwidth of this instance type can be increased by up to 60 MB/s, resulting in a maximum bandwidth of 70 MB/s.
   * 
   * @param request - ModifyInstanceBandwidthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceBandwidthResponse
   */
  async modifyInstanceBandwidthWithOptions(request: $_model.ModifyInstanceBandwidthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceBandwidthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.targetIntranetBandwidth)) {
      query["TargetIntranetBandwidth"] = request.targetIntranetBandwidth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceBandwidth",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceBandwidthResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceBandwidthResponse({}));
  }

  /**
   * Sets the target bandwidth value for a Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * - Before calling this operation, make sure that you fully understand the bandwidth billing method and pricing of the instance. Tair (Redis® OSS-Compatible) charges fees on an hourly basis based on the increased bandwidth and usage duration. The pricing varies by region. For more information, see [Billable items](https://help.aliyun.com/document_detail/54532.html).
   * - The bandwidth of an instance (or a single shard) can be increased by up to 6 times the default bandwidth of the instance, with a maximum increase of 192 MB/s. For example, the default bandwidth of a Tair memory-optimized 2 GB standard architecture instance is 96 MB/s. The bandwidth of this instance type can be increased by up to 192 MB/s, resulting in a maximum bandwidth of 288 MB/s. The default bandwidth of a Redis Community Edition 256 MB standard architecture instance is 10 MB/s. The bandwidth of this instance type can be increased by up to 60 MB/s, resulting in a maximum bandwidth of 70 MB/s.
   * 
   * @param request - ModifyInstanceBandwidthRequest
   * @returns ModifyInstanceBandwidthResponse
   */
  async modifyInstanceBandwidth(request: $_model.ModifyInstanceBandwidthRequest): Promise<$_model.ModifyInstanceBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceBandwidthWithOptions(request, runtime);
  }

  /**
   * Modifies the parameter settings of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - ModifyInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceConfigResponse
   */
  async modifyInstanceConfigWithOptions(request: $_model.ModifyInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.paramNoLooseSentinelEnabled)) {
      query["ParamNoLooseSentinelEnabled"] = request.paramNoLooseSentinelEnabled;
    }

    if (!$dara.isNull(request.paramNoLooseSentinelPasswordFreeAccess)) {
      query["ParamNoLooseSentinelPasswordFreeAccess"] = request.paramNoLooseSentinelPasswordFreeAccess;
    }

    if (!$dara.isNull(request.paramNoLooseSentinelPasswordFreeCommands)) {
      query["ParamNoLooseSentinelPasswordFreeCommands"] = request.paramNoLooseSentinelPasswordFreeCommands;
    }

    if (!$dara.isNull(request.paramReplMode)) {
      query["ParamReplMode"] = request.paramReplMode;
    }

    if (!$dara.isNull(request.paramSemisyncReplTimeout)) {
      query["ParamSemisyncReplTimeout"] = request.paramSemisyncReplTimeout;
    }

    if (!$dara.isNull(request.paramSentinelCompatEnable)) {
      query["ParamSentinelCompatEnable"] = request.paramSentinelCompatEnable;
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
      action: "ModifyInstanceConfig",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceConfigResponse({}));
  }

  /**
   * Modifies the parameter settings of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - ModifyInstanceConfigRequest
   * @returns ModifyInstanceConfigResponse
   */
  async modifyInstanceConfig(request: $_model.ModifyInstanceConfigRequest): Promise<$_model.ModifyInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the maintenance window of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance. Alibaba Cloud performs routine maintenance on the instance within the specified maintenance window.
   * 
   * @remarks
   * For the console operation that corresponds to this API operation, see [Set a maintenance window](https://help.aliyun.com/document_detail/55252.html).
   * 
   * @param request - ModifyInstanceMaintainTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceMaintainTimeResponse
   */
  async modifyInstanceMaintainTimeWithOptions(request: $_model.ModifyInstanceMaintainTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceMaintainTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ModifyInstanceMaintainTime",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceMaintainTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceMaintainTimeResponse({}));
  }

  /**
   * Modifies the maintenance window of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance. Alibaba Cloud performs routine maintenance on the instance within the specified maintenance window.
   * 
   * @remarks
   * For the console operation that corresponds to this API operation, see [Set a maintenance window](https://help.aliyun.com/document_detail/55252.html).
   * 
   * @param request - ModifyInstanceMaintainTimeRequest
   * @returns ModifyInstanceMaintainTimeResponse
   */
  async modifyInstanceMaintainTime(request: $_model.ModifyInstanceMaintainTimeRequest): Promise<$_model.ModifyInstanceMaintainTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceMaintainTimeWithOptions(request, runtime);
  }

  /**
   * Upgrades the major engine version of a Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * For the precautions and impacts of this API operation, see [Upgrade the major version](https://help.aliyun.com/document_detail/101764.html).
   * 
   * @param request - ModifyInstanceMajorVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceMajorVersionResponse
   */
  async modifyInstanceMajorVersionWithOptions(request: $_model.ModifyInstanceMajorVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceMajorVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.majorVersion)) {
      query["MajorVersion"] = request.majorVersion;
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
      action: "ModifyInstanceMajorVersion",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceMajorVersionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceMajorVersionResponse({}));
  }

  /**
   * Upgrades the major engine version of a Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * For the precautions and impacts of this API operation, see [Upgrade the major version](https://help.aliyun.com/document_detail/101764.html).
   * 
   * @param request - ModifyInstanceMajorVersionRequest
   * @returns ModifyInstanceMajorVersionResponse
   */
  async modifyInstanceMajorVersion(request: $_model.ModifyInstanceMajorVersionRequest): Promise<$_model.ModifyInstanceMajorVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceMajorVersionWithOptions(request, runtime);
  }

  /**
   * Upgrades the minor version of an ApsaraDB Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * The upgrade process varies by architecture. For more information, see [How minor version upgrades work](https://help.aliyun.com/document_detail/56450.html).
   * > * Before you call this operation, you can call [DescribeEngineVersion](https://help.aliyun.com/document_detail/473781.html) to query the current minor version of the instance.
   * > * During an instance switchover or primary/secondary switchover, the instance enters a read-only state for up to 60 seconds to wait for full data synchronization. Transient disconnections that last for a few seconds may also occur. Perform the upgrade during off-peak hours and ensure that your application has a reconnection mechanism.
   * 
   * @param request - ModifyInstanceMinorVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceMinorVersionResponse
   */
  async modifyInstanceMinorVersionWithOptions(request: $_model.ModifyInstanceMinorVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceMinorVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.minorversion)) {
      query["Minorversion"] = request.minorversion;
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
      action: "ModifyInstanceMinorVersion",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceMinorVersionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceMinorVersionResponse({}));
  }

  /**
   * Upgrades the minor version of an ApsaraDB Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * The upgrade process varies by architecture. For more information, see [How minor version upgrades work](https://help.aliyun.com/document_detail/56450.html).
   * > * Before you call this operation, you can call [DescribeEngineVersion](https://help.aliyun.com/document_detail/473781.html) to query the current minor version of the instance.
   * > * During an instance switchover or primary/secondary switchover, the instance enters a read-only state for up to 60 seconds to wait for full data synchronization. Transient disconnections that last for a few seconds may also occur. Perform the upgrade during off-peak hours and ensure that your application has a reconnection mechanism.
   * 
   * @param request - ModifyInstanceMinorVersionRequest
   * @returns ModifyInstanceMinorVersionResponse
   */
  async modifyInstanceMinorVersion(request: $_model.ModifyInstanceMinorVersionRequest): Promise<$_model.ModifyInstanceMinorVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceMinorVersionWithOptions(request, runtime);
  }

  /**
   * Extends the retention period of the classic network endpoint for a Tair (Redis® OSS-Compatible) database instance that retains the classic network endpoint after a switch from the classic network to a VPC.
   * 
   * @remarks
   * For the corresponding console operation of this API, refer to [Modify the retention period of the original classic network endpoint](https://help.aliyun.com/document_detail/60062.html).
   * > For information about how to switch an instance from the classic network to a VPC, refer to [SwitchNetwork](https://help.aliyun.com/document_detail/473797.html).
   * 
   * @param request - ModifyInstanceNetExpireTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceNetExpireTimeResponse
   */
  async modifyInstanceNetExpireTimeWithOptions(request: $_model.ModifyInstanceNetExpireTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceNetExpireTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.classicExpiredDays)) {
      query["ClassicExpiredDays"] = request.classicExpiredDays;
    }

    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ModifyInstanceNetExpireTime",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceNetExpireTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceNetExpireTimeResponse({}));
  }

  /**
   * Extends the retention period of the classic network endpoint for a Tair (Redis® OSS-Compatible) database instance that retains the classic network endpoint after a switch from the classic network to a VPC.
   * 
   * @remarks
   * For the corresponding console operation of this API, refer to [Modify the retention period of the original classic network endpoint](https://help.aliyun.com/document_detail/60062.html).
   * > For information about how to switch an instance from the classic network to a VPC, refer to [SwitchNetwork](https://help.aliyun.com/document_detail/473797.html).
   * 
   * @param request - ModifyInstanceNetExpireTimeRequest
   * @returns ModifyInstanceNetExpireTimeResponse
   */
  async modifyInstanceNetExpireTime(request: $_model.ModifyInstanceNetExpireTimeRequest): Promise<$_model.ModifyInstanceNetExpireTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceNetExpireTimeWithOptions(request, runtime);
  }

  /**
   * Applies a parameter template to a specified instance. This assigns the parameter values from the template to the specified instance. After you modify a parameter template, you must reapply it to the specified instance for the modified parameter values to take effect.
   * 
   * @param request - ModifyInstanceParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceParameterResponse
   */
  async modifyInstanceParameterWithOptions(request: $_model.ModifyInstanceParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ModifyInstanceParameter",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceParameterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceParameterResponse({}));
  }

  /**
   * Applies a parameter template to a specified instance. This assigns the parameter values from the template to the specified instance. After you modify a parameter template, you must reapply it to the specified instance for the modified parameter values to take effect.
   * 
   * @param request - ModifyInstanceParameterRequest
   * @returns ModifyInstanceParameterResponse
   */
  async modifyInstanceParameter(request: $_model.ModifyInstanceParameterRequest): Promise<$_model.ModifyInstanceParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceParameterWithOptions(request, runtime);
  }

  /**
   * Enables the Transport Layer Security (TLS) encryption protocol for an ApsaraDB Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * For the corresponding console operation, see [Secure Sockets Layer (SSL) encryption settings](https://help.aliyun.com/document_detail/84898.html).
   * > To specify the minimum SSL version, you can invoke the [ModifyInstanceConfig](https://help.aliyun.com/document_detail/473844.html) operation to modify the relevant parameter.
   * 
   * @param request - ModifyInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceSSLResponse
   */
  async modifyInstanceSSLWithOptions(request: $_model.ModifyInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.SSLEnabled)) {
      query["SSLEnabled"] = request.SSLEnabled;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceSSL",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceSSLResponse({}));
  }

  /**
   * Enables the Transport Layer Security (TLS) encryption protocol for an ApsaraDB Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * For the corresponding console operation, see [Secure Sockets Layer (SSL) encryption settings](https://help.aliyun.com/document_detail/84898.html).
   * > To specify the minimum SSL version, you can invoke the [ModifyInstanceConfig](https://help.aliyun.com/document_detail/473844.html) operation to modify the relevant parameter.
   * 
   * @param request - ModifyInstanceSSLRequest
   * @returns ModifyInstanceSSLResponse
   */
  async modifyInstanceSSL(request: $_model.ModifyInstanceSSLRequest): Promise<$_model.ModifyInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceSSLWithOptions(request, runtime);
  }

  /**
   * Modifies the specifications of an ApsaraDB Tair (Redis OSS-Compatible) instance.
   * 
   * @remarks
   * > For information about the execution process, impacts, feature limits, and billing of modifying instance specifications, refer to [Change instance configurations](https://help.aliyun.com/document_detail/26353.html).
   * 
   * @param request - ModifyInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceSpecResponse
   */
  async modifyInstanceSpecWithOptions(request: $_model.ModifyInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.forceTrans)) {
      query["ForceTrans"] = request.forceTrans;
    }

    if (!$dara.isNull(request.forceUpgrade)) {
      query["ForceUpgrade"] = request.forceUpgrade;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.majorVersion)) {
      query["MajorVersion"] = request.majorVersion;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["NodeType"] = request.nodeType;
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

    if (!$dara.isNull(request.readOnlyCount)) {
      query["ReadOnlyCount"] = request.readOnlyCount;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaCount)) {
      query["ReplicaCount"] = request.replicaCount;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.secondaryZoneId)) {
      query["SecondaryZoneId"] = request.secondaryZoneId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.shardCount)) {
      query["ShardCount"] = request.shardCount;
    }

    if (!$dara.isNull(request.slaveReadOnlyCount)) {
      query["SlaveReadOnlyCount"] = request.slaveReadOnlyCount;
    }

    if (!$dara.isNull(request.slaveReplicaCount)) {
      query["SlaveReplicaCount"] = request.slaveReplicaCount;
    }

    if (!$dara.isNull(request.sourceBiz)) {
      query["SourceBiz"] = request.sourceBiz;
    }

    if (!$dara.isNull(request.storage)) {
      query["Storage"] = request.storage;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceSpec",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceSpecResponse({}));
  }

  /**
   * Modifies the specifications of an ApsaraDB Tair (Redis OSS-Compatible) instance.
   * 
   * @remarks
   * > For information about the execution process, impacts, feature limits, and billing of modifying instance specifications, refer to [Change instance configurations](https://help.aliyun.com/document_detail/26353.html).
   * 
   * @param request - ModifyInstanceSpecRequest
   * @returns ModifyInstanceSpecResponse
   */
  async modifyInstanceSpec(request: $_model.ModifyInstanceSpecRequest): Promise<$_model.ModifyInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Enables the transparent data encryption (TDE) feature for an ApsaraDB for Tair (Redis® OSS-Compatible) database instance, with support for custom keys.
   * 
   * @remarks
   * > For more information about Transparent Data Encryption (TDE) and the impacts of enabling TDE, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * 
   * @param request - ModifyInstanceTDERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceTDEResponse
   */
  async modifyInstanceTDEWithOptions(request: $_model.ModifyInstanceTDERequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceTDEResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!$dara.isNull(request.encryptionName)) {
      query["EncryptionName"] = request.encryptionName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.TDEStatus)) {
      query["TDEStatus"] = request.TDEStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceTDE",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceTDEResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceTDEResponse({}));
  }

  /**
   * Enables the transparent data encryption (TDE) feature for an ApsaraDB for Tair (Redis® OSS-Compatible) database instance, with support for custom keys.
   * 
   * @remarks
   * > For more information about Transparent Data Encryption (TDE) and the impacts of enabling TDE, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * 
   * @param request - ModifyInstanceTDERequest
   * @returns ModifyInstanceTDEResponse
   */
  async modifyInstanceTDE(request: $_model.ModifyInstanceTDERequest): Promise<$_model.ModifyInstanceTDEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceTDEWithOptions(request, runtime);
  }

  /**
   * Enables or initiates a shutdown of password-free access over a VPC. After this feature is enabled, cloud servers in the same VPC can connect to the ApsaraDB for Tair (Redis® OSS-Compatible) database instance without a password. Connections using a username and password are still supported.
   * 
   * @remarks
   * For information about how to perform this operation in the console, see [Enable password-free access](https://help.aliyun.com/document_detail/85168.html).
   * 
   * @param request - ModifyInstanceVpcAuthModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceVpcAuthModeResponse
   */
  async modifyInstanceVpcAuthModeWithOptions(request: $_model.ModifyInstanceVpcAuthModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceVpcAuthModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.vpcAuthMode)) {
      query["VpcAuthMode"] = request.vpcAuthMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceVpcAuthMode",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceVpcAuthModeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceVpcAuthModeResponse({}));
  }

  /**
   * Enables or initiates a shutdown of password-free access over a VPC. After this feature is enabled, cloud servers in the same VPC can connect to the ApsaraDB for Tair (Redis® OSS-Compatible) database instance without a password. Connections using a username and password are still supported.
   * 
   * @remarks
   * For information about how to perform this operation in the console, see [Enable password-free access](https://help.aliyun.com/document_detail/85168.html).
   * 
   * @param request - ModifyInstanceVpcAuthModeRequest
   * @returns ModifyInstanceVpcAuthModeResponse
   */
  async modifyInstanceVpcAuthMode(request: $_model.ModifyInstanceVpcAuthModeRequest): Promise<$_model.ModifyInstanceVpcAuthModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceVpcAuthModeWithOptions(request, runtime);
  }

  /**
   * Temporarily adjusts the internal network bandwidth of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance in a dedicated cluster.
   * 
   * @remarks
   * > * This operation applies only to instances created in dedicated clusters<props="china">. For information about the related console operations and limits, see [Modify bandwidth policy](https://help.aliyun.com/document_detail/206257.html). To adjust the bandwidth of a regular instance, call the [EnableAdditionalBandwidth](https://help.aliyun.com/document_detail/473771.html) operation.
   * 
   * @param request - ModifyIntranetAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIntranetAttributeResponse
   */
  async modifyIntranetAttributeWithOptions(request: $_model.ModifyIntranetAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyIntranetAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandWidth)) {
      query["BandWidth"] = request.bandWidth;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ModifyIntranetAttribute",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyIntranetAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyIntranetAttributeResponse({}));
  }

  /**
   * Temporarily adjusts the internal network bandwidth of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance in a dedicated cluster.
   * 
   * @remarks
   * > * This operation applies only to instances created in dedicated clusters<props="china">. For information about the related console operations and limits, see [Modify bandwidth policy](https://help.aliyun.com/document_detail/206257.html). To adjust the bandwidth of a regular instance, call the [EnableAdditionalBandwidth](https://help.aliyun.com/document_detail/473771.html) operation.
   * 
   * @param request - ModifyIntranetAttributeRequest
   * @returns ModifyIntranetAttributeResponse
   */
  async modifyIntranetAttribute(request: $_model.ModifyIntranetAttributeRequest): Promise<$_model.ModifyIntranetAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyIntranetAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the settings of a parameter template.
   * 
   * @param request - ModifyParameterGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyParameterGroupResponse
   */
  async modifyParameterGroupWithOptions(request: $_model.ModifyParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyParameterGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
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

    if (!$dara.isNull(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
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
      action: "ModifyParameterGroup",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyParameterGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyParameterGroupResponse({}));
  }

  /**
   * Modifies the settings of a parameter template.
   * 
   * @param request - ModifyParameterGroupRequest
   * @returns ModifyParameterGroupResponse
   */
  async modifyParameterGroup(request: $_model.ModifyParameterGroupRequest): Promise<$_model.ModifyParameterGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyParameterGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the resource group to which a Tair (Redis® OSS-Compatible) instance belongs.
   * 
   * @remarks
   * You can also perform this operation in the [Resource Management](https://resourcemanager.console.aliyun.com/resource-center) console. For more information, see [Move resources across resource groups](https://help.aliyun.com/document_detail/94487.html).
   * > A resource group is a mechanism for managing resources in groups within an Alibaba Cloud account. Resource groups help you address the complexity of resource grouping and authorization management within a single Alibaba Cloud account. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @param request - ModifyResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyResourceGroupResponse
   */
  async modifyResourceGroupWithOptions(request: $_model.ModifyResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ModifyResourceGroup",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyResourceGroupResponse({}));
  }

  /**
   * Modifies the resource group to which a Tair (Redis® OSS-Compatible) instance belongs.
   * 
   * @remarks
   * You can also perform this operation in the [Resource Management](https://resourcemanager.console.aliyun.com/resource-center) console. For more information, see [Move resources across resource groups](https://help.aliyun.com/document_detail/94487.html).
   * > A resource group is a mechanism for managing resources in groups within an Alibaba Cloud account. Resource groups help you address the complexity of resource grouping and authorization management within a single Alibaba Cloud account. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @param request - ModifyResourceGroupRequest
   * @returns ModifyResourceGroupResponse
   */
  async modifyResourceGroup(request: $_model.ModifyResourceGroupRequest): Promise<$_model.ModifyResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyResourceGroupWithOptions(request, runtime);
  }

  /**
   * Settings the security groups in the whitelist of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * This operation overwrites the existing security groups in the instance whitelist and adds the security groups specified by the **SecurityGroupId** parameter to the whitelist. For the corresponding console operation, see [Add a security group](https://help.aliyun.com/document_detail/148267.html).
   * 
   * @param request - ModifySecurityGroupConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityGroupConfigurationResponse
   */
  async modifySecurityGroupConfigurationWithOptions(request: $_model.ModifySecurityGroupConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityGroupConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityGroupConfiguration",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySecurityGroupConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.ModifySecurityGroupConfigurationResponse({}));
  }

  /**
   * Settings the security groups in the whitelist of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * This operation overwrites the existing security groups in the instance whitelist and adds the security groups specified by the **SecurityGroupId** parameter to the whitelist. For the corresponding console operation, see [Add a security group](https://help.aliyun.com/document_detail/148267.html).
   * 
   * @param request - ModifySecurityGroupConfigurationRequest
   * @returns ModifySecurityGroupConfigurationResponse
   */
  async modifySecurityGroupConfiguration(request: $_model.ModifySecurityGroupConfigurationRequest): Promise<$_model.ModifySecurityGroupConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityGroupConfigurationWithOptions(request, runtime);
  }

  /**
   * Configures the IP whitelist of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * For the console operation that corresponds to this API operation, see [Configure an IP whitelist](https://help.aliyun.com/document_detail/56464.html).
   * 
   * @param request - ModifySecurityIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIpsWithOptions(request: $_model.ModifySecurityIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.securityIpGroupAttribute)) {
      query["SecurityIpGroupAttribute"] = request.securityIpGroupAttribute;
    }

    if (!$dara.isNull(request.securityIpGroupName)) {
      query["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    if (!$dara.isNull(request.securityIps)) {
      query["SecurityIps"] = request.securityIps;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityIps",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySecurityIpsResponse>(await this.callApi(params, req, runtime), new $_model.ModifySecurityIpsResponse({}));
  }

  /**
   * Configures the IP whitelist of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * For the console operation that corresponds to this API operation, see [Configure an IP whitelist](https://help.aliyun.com/document_detail/56464.html).
   * 
   * @param request - ModifySecurityIpsRequest
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIps(request: $_model.ModifySecurityIpsRequest): Promise<$_model.ModifySecurityIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  /**
   * 修改TairCustom实例基本参数
   * 
   * @param request - ModifyTairKVCacheCustomInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTairKVCacheCustomInstanceAttributeResponse
   */
  async modifyTairKVCacheCustomInstanceAttributeWithOptions(request: $_model.ModifyTairKVCacheCustomInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTairKVCacheCustomInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
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

    if (!$dara.isNull(request.sourceBiz)) {
      query["SourceBiz"] = request.sourceBiz;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTairKVCacheCustomInstanceAttribute",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTairKVCacheCustomInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTairKVCacheCustomInstanceAttributeResponse({}));
  }

  /**
   * 修改TairCustom实例基本参数
   * 
   * @param request - ModifyTairKVCacheCustomInstanceAttributeRequest
   * @returns ModifyTairKVCacheCustomInstanceAttributeResponse
   */
  async modifyTairKVCacheCustomInstanceAttribute(request: $_model.ModifyTairKVCacheCustomInstanceAttributeRequest): Promise<$_model.ModifyTairKVCacheCustomInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTairKVCacheCustomInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Performs a node operation. Currently, this operation supports modifying the execution time of a node.
   * 
   * @param request - ModifyTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTaskInfoResponse
   */
  async modifyTaskInfoWithOptions(request: $_model.ModifyTaskInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTaskInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionParams)) {
      query["ActionParams"] = request.actionParams;
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

    if (!$dara.isNull(request.stepName)) {
      query["StepName"] = request.stepName;
    }

    if (!$dara.isNull(request.taskAction)) {
      query["TaskAction"] = request.taskAction;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTaskInfo",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTaskInfoResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTaskInfoResponse({}));
  }

  /**
   * Performs a node operation. Currently, this operation supports modifying the execution time of a node.
   * 
   * @param request - ModifyTaskInfoRequest
   * @returns ModifyTaskInfoResponse
   */
  async modifyTaskInfo(request: $_model.ModifyTaskInfoRequest): Promise<$_model.ModifyTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTaskInfoWithOptions(request, runtime);
  }

  /**
   * Restarts the proxy nodes of a running Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * This operation is supported only for instances that use the cluster architecture in proxy mode or the read/write splitting architecture. For more information, see [Restart or rebuild proxy nodes](https://help.aliyun.com/document_detail/164224.html).
   * 
   * @param request - RebootProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootProxyResponse
   */
  async rebootProxyWithOptions(request: $_model.RebootProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.proxyList)) {
      query["ProxyList"] = request.proxyList;
    }

    if (!$dara.isNull(request.proxyNodeList)) {
      query["ProxyNodeList"] = request.proxyNodeList;
    }

    if (!$dara.isNull(request.rebootMode)) {
      query["RebootMode"] = request.rebootMode;
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
      action: "RebootProxy",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootProxyResponse>(await this.callApi(params, req, runtime), new $_model.RebootProxyResponse({}));
  }

  /**
   * Restarts the proxy nodes of a running Tair (Redis® OSS-Compatible) database instance.
   * 
   * @remarks
   * This operation is supported only for instances that use the cluster architecture in proxy mode or the read/write splitting architecture. For more information, see [Restart or rebuild proxy nodes](https://help.aliyun.com/document_detail/164224.html).
   * 
   * @param request - RebootProxyRequest
   * @returns RebootProxyResponse
   */
  async rebootProxy(request: $_model.RebootProxyRequest): Promise<$_model.RebootProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootProxyWithOptions(request, runtime);
  }

  /**
   * Releases the direct connection address of a Tair (Redis® OSS-Compatible) cluster instance.
   * 
   * @remarks
   * A client can use the direct connection address to bypass the proxy and connect to a Tair (Redis® OSS-Compatible) database cluster in the same way as connecting to a native Redis cluster. This reduces link overhead and further improves the response speed of the instance. For more information, see [Enable direct connection access](https://help.aliyun.com/document_detail/146901.html).
   * 
   * @param request - ReleaseDirectConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseDirectConnectionResponse
   */
  async releaseDirectConnectionWithOptions(request: $_model.ReleaseDirectConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseDirectConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ReleaseDirectConnection",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseDirectConnectionResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseDirectConnectionResponse({}));
  }

  /**
   * Releases the direct connection address of a Tair (Redis® OSS-Compatible) cluster instance.
   * 
   * @remarks
   * A client can use the direct connection address to bypass the proxy and connect to a Tair (Redis® OSS-Compatible) database cluster in the same way as connecting to a native Redis cluster. This reduces link overhead and further improves the response speed of the instance. For more information, see [Enable direct connection access](https://help.aliyun.com/document_detail/146901.html).
   * 
   * @param request - ReleaseDirectConnectionRequest
   * @returns ReleaseDirectConnectionResponse
   */
  async releaseDirectConnection(request: $_model.ReleaseDirectConnectionRequest): Promise<$_model.ReleaseDirectConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseDirectConnectionWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * For the corresponding console operation, refer to [Release a public endpoint](https://help.aliyun.com/document_detail/125424.html).
   * 
   * @param request - ReleaseInstancePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstancePublicConnectionResponse
   */
  async releaseInstancePublicConnectionWithOptions(request: $_model.ReleaseInstancePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstancePublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ReleaseInstancePublicConnection",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseInstancePublicConnectionResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseInstancePublicConnectionResponse({}));
  }

  /**
   * Releases the public endpoint of a Tair (Redis® OSS-Compatible) instance.
   * 
   * @remarks
   * For the corresponding console operation, refer to [Release a public endpoint](https://help.aliyun.com/document_detail/125424.html).
   * 
   * @param request - ReleaseInstancePublicConnectionRequest
   * @returns ReleaseInstancePublicConnectionResponse
   */
  async releaseInstancePublicConnection(request: $_model.ReleaseInstancePublicConnectionRequest): Promise<$_model.ReleaseInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Removes a child instance from a distributed instance and converts it to a standard instance. Data is retained.
   * 
   * @remarks
   * > After the conversion is complete, the child instance becomes a standard instance. You can find and manage the instance in the instance list of the corresponding region.
   * 
   * @param request - RemoveSubInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSubInstanceResponse
   */
  async removeSubInstanceWithOptions(request: $_model.RemoveSubInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveSubInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "RemoveSubInstance",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveSubInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RemoveSubInstanceResponse({}));
  }

  /**
   * Removes a child instance from a distributed instance and converts it to a standard instance. Data is retained.
   * 
   * @remarks
   * > After the conversion is complete, the child instance becomes a standard instance. You can find and manage the instance in the instance list of the corresponding region.
   * 
   * @param request - RemoveSubInstanceRequest
   * @returns RemoveSubInstanceResponse
   */
  async removeSubInstance(request: $_model.RemoveSubInstanceRequest): Promise<$_model.RemoveSubInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeSubInstanceWithOptions(request, runtime);
  }

  /**
   * The bandwidth of ApsaraDB for Tair (Redis® OSS-Compatible) database instances has been upgraded to the pay-as-you-go pattern. This operation is no longer recommended.
   * 
   * @remarks
   * This operation is no longer recommended. You can adjust instance bandwidth through the console ([Modify instance bandwidth](https://help.aliyun.com/document_detail/102588.html)) or by calling [EnableAdditionalBandwidth](https://help.aliyun.com/document_detail/473771.html).
   * 
   * @param request - RenewAdditionalBandwidthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewAdditionalBandwidthResponse
   */
  async renewAdditionalBandwidthWithOptions(request: $_model.RenewAdditionalBandwidthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewAdditionalBandwidthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderTimeLength)) {
      query["OrderTimeLength"] = request.orderTimeLength;
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

    if (!$dara.isNull(request.sourceBiz)) {
      query["SourceBiz"] = request.sourceBiz;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewAdditionalBandwidth",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewAdditionalBandwidthResponse>(await this.callApi(params, req, runtime), new $_model.RenewAdditionalBandwidthResponse({}));
  }

  /**
   * The bandwidth of ApsaraDB for Tair (Redis® OSS-Compatible) database instances has been upgraded to the pay-as-you-go pattern. This operation is no longer recommended.
   * 
   * @remarks
   * This operation is no longer recommended. You can adjust instance bandwidth through the console ([Modify instance bandwidth](https://help.aliyun.com/document_detail/102588.html)) or by calling [EnableAdditionalBandwidth](https://help.aliyun.com/document_detail/473771.html).
   * 
   * @param request - RenewAdditionalBandwidthRequest
   * @returns RenewAdditionalBandwidthResponse
   */
  async renewAdditionalBandwidth(request: $_model.RenewAdditionalBandwidthRequest): Promise<$_model.RenewAdditionalBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewAdditionalBandwidthWithOptions(request, runtime);
  }

  /**
   * Creates a renewal order for a subscription ApsaraDB for Tair (Redis OSS-Compatible) instance.
   * 
   * @param request - RenewInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(request: $_model.RenewInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.fromApp)) {
      query["FromApp"] = request.fromApp;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewInstance",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewInstanceResponse({}));
  }

  /**
   * Creates a renewal order for a subscription ApsaraDB for Tair (Redis OSS-Compatible) instance.
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
   * Resets the password of an ApsaraDB for Tair (Redis® OSS-Compatible) database account.
   * 
   * @remarks
   * > This operation is supported only for Redis instances that run version 4.0 or later.
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

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.sourceBiz)) {
      query["SourceBiz"] = request.sourceBiz;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAccountPassword",
      version: "2015-01-01",
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
   * Resets the password of an ApsaraDB for Tair (Redis® OSS-Compatible) database account.
   * 
   * @remarks
   * > This operation is supported only for Redis instances that run version 4.0 or later.
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: $_model.ResetAccountPasswordRequest): Promise<$_model.ResetAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * 重置TairCustom上主机密码
   * 
   * @param request - ResetTairKVCacheCustomInstancePasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetTairKVCacheCustomInstancePasswordResponse
   */
  async resetTairKVCacheCustomInstancePasswordWithOptions(request: $_model.ResetTairKVCacheCustomInstancePasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetTairKVCacheCustomInstancePasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sourceBiz)) {
      query["SourceBiz"] = request.sourceBiz;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetTairKVCacheCustomInstancePassword",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetTairKVCacheCustomInstancePasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetTairKVCacheCustomInstancePasswordResponse({}));
  }

  /**
   * 重置TairCustom上主机密码
   * 
   * @param request - ResetTairKVCacheCustomInstancePasswordRequest
   * @returns ResetTairKVCacheCustomInstancePasswordResponse
   */
  async resetTairKVCacheCustomInstancePassword(request: $_model.ResetTairKVCacheCustomInstancePasswordRequest): Promise<$_model.ResetTairKVCacheCustomInstancePasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetTairKVCacheCustomInstancePasswordWithOptions(request, runtime);
  }

  /**
   * 变配TairCustom的主机的磁盘
   * 
   * @param request - ResizeTairKVCacheCustomInstanceDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeTairKVCacheCustomInstanceDiskResponse
   */
  async resizeTairKVCacheCustomInstanceDiskWithOptions(request: $_model.ResizeTairKVCacheCustomInstanceDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResizeTairKVCacheCustomInstanceDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ResizeTairKVCacheCustomInstanceDisk",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResizeTairKVCacheCustomInstanceDiskResponse>(await this.callApi(params, req, runtime), new $_model.ResizeTairKVCacheCustomInstanceDiskResponse({}));
  }

  /**
   * 变配TairCustom的主机的磁盘
   * 
   * @param request - ResizeTairKVCacheCustomInstanceDiskRequest
   * @returns ResizeTairKVCacheCustomInstanceDiskResponse
   */
  async resizeTairKVCacheCustomInstanceDisk(request: $_model.ResizeTairKVCacheCustomInstanceDiskRequest): Promise<$_model.ResizeTairKVCacheCustomInstanceDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resizeTairKVCacheCustomInstanceDiskWithOptions(request, runtime);
  }

  /**
   * Restarts a running Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - RestartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(request: $_model.RestartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.upgradeMinorVersion)) {
      query["UpgradeMinorVersion"] = request.upgradeMinorVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartInstance",
      version: "2015-01-01",
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
   * Restarts a running Tair (Redis® OSS-Compatible) database instance.
   * 
   * @param request - RestartInstanceRequest
   * @returns RestartInstanceResponse
   */
  async restartInstance(request: $_model.RestartInstanceRequest): Promise<$_model.RestartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  /**
   * 重启TairCustom的主机
   * 
   * @param request - RestartTairKVCacheCustomInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartTairKVCacheCustomInstanceResponse
   */
  async restartTairKVCacheCustomInstanceWithOptions(request: $_model.RestartTairKVCacheCustomInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartTairKVCacheCustomInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "RestartTairKVCacheCustomInstance",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartTairKVCacheCustomInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartTairKVCacheCustomInstanceResponse({}));
  }

  /**
   * 重启TairCustom的主机
   * 
   * @param request - RestartTairKVCacheCustomInstanceRequest
   * @returns RestartTairKVCacheCustomInstanceResponse
   */
  async restartTairKVCacheCustomInstance(request: $_model.RestartTairKVCacheCustomInstanceRequest): Promise<$_model.RestartTairKVCacheCustomInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartTairKVCacheCustomInstanceWithOptions(request, runtime);
  }

  /**
   * Restores data from a specified backup file to a Tair (Redis OSS-Compatible) database instance.
   * 
   * @remarks
   * If your instance is a Tair (Enterprise Edition) memory-optimized instance of the classic architecture, you can call this operation to restore specified keys in the current instance to a specific point in time accurate to seconds. This enables more fine-grained data restoration.
   * * For instances other than the preceding type, call the [CreateInstance](https://help.aliyun.com/document_detail/473757.html) or [CreateTairInstance](https://help.aliyun.com/document_detail/473770.html) operation to restore backup data to a new instance.
   * 
   * @param request - RestoreInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreInstanceResponse
   */
  async restoreInstanceWithOptions(request: $_model.RestoreInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.filterKey)) {
      query["FilterKey"] = request.filterKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.timeShift)) {
      query["TimeShift"] = request.timeShift;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreInstance",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestoreInstanceResponse({}));
  }

  /**
   * Restores data from a specified backup file to a Tair (Redis OSS-Compatible) database instance.
   * 
   * @remarks
   * If your instance is a Tair (Enterprise Edition) memory-optimized instance of the classic architecture, you can call this operation to restore specified keys in the current instance to a specific point in time accurate to seconds. This enables more fine-grained data restoration.
   * * For instances other than the preceding type, call the [CreateInstance](https://help.aliyun.com/document_detail/473757.html) or [CreateTairInstance](https://help.aliyun.com/document_detail/473770.html) operation to restore backup data to a new instance.
   * 
   * @param request - RestoreInstanceRequest
   * @returns RestoreInstanceResponse
   */
  async restoreInstance(request: $_model.RestoreInstanceRequest): Promise<$_model.RestoreInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreInstanceWithOptions(request, runtime);
  }

  /**
   * Manually retries an inspection task.
   * 
   * @param request - RetryInspectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryInspectionTaskResponse
   */
  async retryInspectionTaskWithOptions(request: $_model.RetryInspectionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryInspectionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryInspectionTask",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryInspectionTaskResponse>(await this.callApi(params, req, runtime), new $_model.RetryInspectionTaskResponse({}));
  }

  /**
   * Manually retries an inspection task.
   * 
   * @param request - RetryInspectionTaskRequest
   * @returns RetryInspectionTaskResponse
   */
  async retryInspectionTask(request: $_model.RetryInspectionTaskRequest): Promise<$_model.RetryInspectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryInspectionTaskWithOptions(request, runtime);
  }

  /**
   * 启动TairCustom的主机
   * 
   * @param request - StartTairKVCacheCustomInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTairKVCacheCustomInstanceResponse
   */
  async startTairKVCacheCustomInstanceWithOptions(request: $_model.StartTairKVCacheCustomInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartTairKVCacheCustomInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "StartTairKVCacheCustomInstance",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartTairKVCacheCustomInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartTairKVCacheCustomInstanceResponse({}));
  }

  /**
   * 启动TairCustom的主机
   * 
   * @param request - StartTairKVCacheCustomInstanceRequest
   * @returns StartTairKVCacheCustomInstanceResponse
   */
  async startTairKVCacheCustomInstance(request: $_model.StartTairKVCacheCustomInstanceRequest): Promise<$_model.StartTairKVCacheCustomInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startTairKVCacheCustomInstanceWithOptions(request, runtime);
  }

  /**
   * 停止TairCustom的主机
   * 
   * @param request - StopTairKVCacheCustomInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTairKVCacheCustomInstanceResponse
   */
  async stopTairKVCacheCustomInstanceWithOptions(request: $_model.StopTairKVCacheCustomInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopTairKVCacheCustomInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "StopTairKVCacheCustomInstance",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTairKVCacheCustomInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopTairKVCacheCustomInstanceResponse({}));
  }

  /**
   * 停止TairCustom的主机
   * 
   * @param request - StopTairKVCacheCustomInstanceRequest
   * @returns StopTairKVCacheCustomInstanceResponse
   */
  async stopTairKVCacheCustomInstance(request: $_model.StopTairKVCacheCustomInstanceRequest): Promise<$_model.StopTairKVCacheCustomInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopTairKVCacheCustomInstanceWithOptions(request, runtime);
  }

  /**
   * Performs a primary/secondary switchover to switch node roles. This operation is applicable to scenarios such as disaster recovery drills and nearest access for applications in multi-zone deployments.
   * 
   * @remarks
   * > For more information about nearest access for applications in multi-zone deployment scenarios, see [Scenario examples](https://help.aliyun.com/document_detail/164222.html).
   * When you call this operation, the instance must be of the high-availability or dual-replica type.
   * Calling this operation has the following impacts:
   * * After the node role switchover is triggered, the data node on which the switchover is performed will enter a read-only state for a few seconds and experience transient disconnections. Make sure that your application has a reconnection mechanism.
   * * While the instance is in the switching state, you cannot perform instance-level operations, such as changing configurations or migrating zones.
   * 
   * @param request - SwitchInstanceHARequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchInstanceHAResponse
   */
  async switchInstanceHAWithOptions(request: $_model.SwitchInstanceHARequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchInstanceHAResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sourceNodeId)) {
      query["SourceNodeId"] = request.sourceNodeId;
    }

    if (!$dara.isNull(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    if (!$dara.isNull(request.switchType)) {
      query["SwitchType"] = request.switchType;
    }

    if (!$dara.isNull(request.targetNodeId)) {
      query["TargetNodeId"] = request.targetNodeId;
    }

    if (!$dara.isNull(request.targetShardName)) {
      query["TargetShardName"] = request.targetShardName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchInstanceHA",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchInstanceHAResponse>(await this.callApi(params, req, runtime), new $_model.SwitchInstanceHAResponse({}));
  }

  /**
   * Performs a primary/secondary switchover to switch node roles. This operation is applicable to scenarios such as disaster recovery drills and nearest access for applications in multi-zone deployments.
   * 
   * @remarks
   * > For more information about nearest access for applications in multi-zone deployment scenarios, see [Scenario examples](https://help.aliyun.com/document_detail/164222.html).
   * When you call this operation, the instance must be of the high-availability or dual-replica type.
   * Calling this operation has the following impacts:
   * * After the node role switchover is triggered, the data node on which the switchover is performed will enter a read-only state for a few seconds and experience transient disconnections. Make sure that your application has a reconnection mechanism.
   * * While the instance is in the switching state, you cannot perform instance-level operations, such as changing configurations or migrating zones.
   * 
   * @param request - SwitchInstanceHARequest
   * @returns SwitchInstanceHAResponse
   */
  async switchInstanceHA(request: $_model.SwitchInstanceHARequest): Promise<$_model.SwitchInstanceHAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchInstanceHAWithOptions(request, runtime);
  }

  /**
   * Enables or shuts down the proxy mode for a Tair (Redis® OSS-Compatible) database cluster instance in a dedicated cluster.
   * 
   * @remarks
   * For more information about the proxy mode, see [Proxy features](https://help.aliyun.com/document_detail/142959.html).
   * Before calling this operation, ensure that the following conditions are met:
   * * The instance is created in a dedicated cluster. For more information, see [ApsaraDB MyBase dedicated cluster](https://help.aliyun.com/document_detail/141455.html).
   * * The instance uses the [cluster architecture](https://help.aliyun.com/document_detail/52228.html).
   * > Before calling this operation, call the [DescribeDedicatedClusterInstanceList](https://help.aliyun.com/document_detail/473867.html) operation and check the value of the **ProxyCount** response parameter to determine whether the proxy mode is enabled for the instance. For example, a value of 0 indicates that the proxy mode is disabled. A value greater than 0 indicates that the proxy mode is enabled.
   * 
   * @param request - SwitchInstanceProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchInstanceProxyResponse
   */
  async switchInstanceProxyWithOptions(request: $_model.SwitchInstanceProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchInstanceProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "SwitchInstanceProxy",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchInstanceProxyResponse>(await this.callApi(params, req, runtime), new $_model.SwitchInstanceProxyResponse({}));
  }

  /**
   * Enables or shuts down the proxy mode for a Tair (Redis® OSS-Compatible) database cluster instance in a dedicated cluster.
   * 
   * @remarks
   * For more information about the proxy mode, see [Proxy features](https://help.aliyun.com/document_detail/142959.html).
   * Before calling this operation, ensure that the following conditions are met:
   * * The instance is created in a dedicated cluster. For more information, see [ApsaraDB MyBase dedicated cluster](https://help.aliyun.com/document_detail/141455.html).
   * * The instance uses the [cluster architecture](https://help.aliyun.com/document_detail/52228.html).
   * > Before calling this operation, call the [DescribeDedicatedClusterInstanceList](https://help.aliyun.com/document_detail/473867.html) operation and check the value of the **ProxyCount** response parameter to determine whether the proxy mode is enabled for the instance. For example, a value of 0 indicates that the proxy mode is disabled. A value greater than 0 indicates that the proxy mode is enabled.
   * 
   * @param request - SwitchInstanceProxyRequest
   * @returns SwitchInstanceProxyResponse
   */
  async switchInstanceProxy(request: $_model.SwitchInstanceProxyRequest): Promise<$_model.SwitchInstanceProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchInstanceProxyWithOptions(request, runtime);
  }

  /**
   * Switches an instance to a specified zone.
   * 
   * @remarks
   * This operation is supported only for cloud-native architecture instances.
   * 
   * @param request - SwitchInstanceToTargetZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchInstanceToTargetZoneResponse
   */
  async switchInstanceToTargetZoneWithOptions(request: $_model.SwitchInstanceToTargetZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchInstanceToTargetZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.switchType)) {
      query["SwitchType"] = request.switchType;
    }

    if (!$dara.isNull(request.targetZoneId)) {
      query["TargetZoneId"] = request.targetZoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchInstanceToTargetZone",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchInstanceToTargetZoneResponse>(await this.callApi(params, req, runtime), new $_model.SwitchInstanceToTargetZoneResponse({}));
  }

  /**
   * Switches an instance to a specified zone.
   * 
   * @remarks
   * This operation is supported only for cloud-native architecture instances.
   * 
   * @param request - SwitchInstanceToTargetZoneRequest
   * @returns SwitchInstanceToTargetZoneResponse
   */
  async switchInstanceToTargetZone(request: $_model.SwitchInstanceToTargetZoneRequest): Promise<$_model.SwitchInstanceToTargetZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchInstanceToTargetZoneWithOptions(request, runtime);
  }

  /**
   * Performs an impersonation of a zone-level failure of an active ApsaraDB for Tair (Redis® OSS-Compatible) cluster architecture database instance, triggering an automatic switchover to the secondary zone.
   * 
   * @remarks
   * - This operation applies only to active multi-zone (dual-zone) cluster architecture instances.
   * - The node subjected to failure impersonation automatically recovers later. However, the primary node is located in the secondary zone and the secondary node is located in the primary zone. This may cause cross-data-center access between the instance and other services. To resolve this issue, you can perform a manual switchover of zones on the Service Availability page in the console.
   * 
   * @param request - SwitchInstanceZoneFailOverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchInstanceZoneFailOverResponse
   */
  async switchInstanceZoneFailOverWithOptions(request: $_model.SwitchInstanceZoneFailOverRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchInstanceZoneFailOverResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.siteFaultTime)) {
      query["SiteFaultTime"] = request.siteFaultTime;
    }

    if (!$dara.isNull(request.targetZoneId)) {
      query["TargetZoneId"] = request.targetZoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchInstanceZoneFailOver",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchInstanceZoneFailOverResponse>(await this.callApi(params, req, runtime), new $_model.SwitchInstanceZoneFailOverResponse({}));
  }

  /**
   * Performs an impersonation of a zone-level failure of an active ApsaraDB for Tair (Redis® OSS-Compatible) cluster architecture database instance, triggering an automatic switchover to the secondary zone.
   * 
   * @remarks
   * - This operation applies only to active multi-zone (dual-zone) cluster architecture instances.
   * - The node subjected to failure impersonation automatically recovers later. However, the primary node is located in the secondary zone and the secondary node is located in the primary zone. This may cause cross-data-center access between the instance and other services. To resolve this issue, you can perform a manual switchover of zones on the Service Availability page in the console.
   * 
   * @param request - SwitchInstanceZoneFailOverRequest
   * @returns SwitchInstanceZoneFailOverResponse
   */
  async switchInstanceZoneFailOver(request: $_model.SwitchInstanceZoneFailOverRequest): Promise<$_model.SwitchInstanceZoneFailOverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchInstanceZoneFailOverWithOptions(request, runtime);
  }

  /**
   * Switches the virtual private cloud (VPC) or vSwitch of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance. If the instance uses the classic network, the instance is switched to a VPC.
   * 
   * @param request - SwitchNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchNetworkResponse
   */
  async switchNetworkWithOptions(request: $_model.SwitchNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.classicExpiredDays)) {
      query["ClassicExpiredDays"] = request.classicExpiredDays;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.retainClassic)) {
      query["RetainClassic"] = request.retainClassic;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.targetNetworkType)) {
      query["TargetNetworkType"] = request.targetNetworkType;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchNetwork",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchNetworkResponse>(await this.callApi(params, req, runtime), new $_model.SwitchNetworkResponse({}));
  }

  /**
   * Switches the virtual private cloud (VPC) or vSwitch of an ApsaraDB for Tair (Redis® OSS-Compatible) database instance. If the instance uses the classic network, the instance is switched to a VPC.
   * 
   * @param request - SwitchNetworkRequest
   * @returns SwitchNetworkResponse
   */
  async switchNetwork(request: $_model.SwitchNetworkRequest): Promise<$_model.SwitchNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchNetworkWithOptions(request, runtime);
  }

  /**
   * Before you use Data Transmission Service (DTS) to migrate or synchronize data of an ApsaraDB for Tair (Redis OSS-Compatible) database instance, you can invoke this operation to restrict the instance so that it does not execute Upgrade/Downgrade operations. This prevents data migration or synchronization nodes from becoming failed due to Upgrade/Downgrade.
   * 
   * @remarks
   * - This operation applies only to Classic Edition instances.
   * - After the data migration or synchronization task is completed, you can call this operation again to remove the specification change restrictions.
   * 
   * @param request - SyncDtsStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncDtsStatusResponse
   */
  async syncDtsStatusWithOptions(request: $_model.SyncDtsStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncDtsStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncDtsStatus",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncDtsStatusResponse>(await this.callApi(params, req, runtime), new $_model.SyncDtsStatusResponse({}));
  }

  /**
   * Before you use Data Transmission Service (DTS) to migrate or synchronize data of an ApsaraDB for Tair (Redis OSS-Compatible) database instance, you can invoke this operation to restrict the instance so that it does not execute Upgrade/Downgrade operations. This prevents data migration or synchronization nodes from becoming failed due to Upgrade/Downgrade.
   * 
   * @remarks
   * - This operation applies only to Classic Edition instances.
   * - After the data migration or synchronization task is completed, you can call this operation again to remove the specification change restrictions.
   * 
   * @param request - SyncDtsStatusRequest
   * @returns SyncDtsStatusResponse
   */
  async syncDtsStatus(request: $_model.SyncDtsStatusRequest): Promise<$_model.SyncDtsStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncDtsStatusWithOptions(request, runtime);
  }

  /**
   * Attaches labels to one or more ApsaraDB for Tair (Redis® OSS-Compatible) database instances.
   * 
   * @remarks
   * If you have a large number of instances, you can create multiple labels and attach different labels to the instances for categorization. You can then filter instances by label.
   * * A label consists of a key-value pair. The key must be unique within the same account and region, while the value has no such restriction.
   * * If the label in Settings does not exist, automatic creation of the label is performed and it is attached to the target instance.
   * * If the instance is already attached to a label with the same key, the new label overwrites the existing one.
   * * You can attach up to 20 labels to each instance.
   * * You can attach labels to up to 50 instances each time you invoke the API.
   * For the corresponding console operation, see [Create a label](https://help.aliyun.com/document_detail/118779.html).
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
      version: "2015-01-01",
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
   * Attaches labels to one or more ApsaraDB for Tair (Redis® OSS-Compatible) database instances.
   * 
   * @remarks
   * If you have a large number of instances, you can create multiple labels and attach different labels to the instances for categorization. You can then filter instances by label.
   * * A label consists of a key-value pair. The key must be unique within the same account and region, while the value has no such restriction.
   * * If the label in Settings does not exist, automatic creation of the label is performed and it is attached to the target instance.
   * * If the instance is already attached to a label with the same key, the new label overwrites the existing one.
   * * You can attach up to 20 labels to each instance.
   * * You can attach labels to up to 50 instances each time you invoke the API.
   * For the corresponding console operation, see [Create a label](https://help.aliyun.com/document_detail/118779.html).
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of a Tair (Redis® OSS-Compatible) database instance. You can switch between the pay-as-you-go and subscription billing methods.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the precautions and billing instructions. For more information, see:
   * * [Switch from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/54542.html).
   * * [Switch from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/211549.html).
   * 
   * @param request - TransformInstanceChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransformInstanceChargeTypeResponse
   */
  async transformInstanceChargeTypeWithOptions(request: $_model.TransformInstanceChargeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransformInstanceChargeTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransformInstanceChargeType",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransformInstanceChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.TransformInstanceChargeTypeResponse({}));
  }

  /**
   * Changes the billing method of a Tair (Redis® OSS-Compatible) database instance. You can switch between the pay-as-you-go and subscription billing methods.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the precautions and billing instructions. For more information, see:
   * * [Switch from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/54542.html).
   * * [Switch from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/211549.html).
   * 
   * @param request - TransformInstanceChargeTypeRequest
   * @returns TransformInstanceChargeTypeResponse
   */
  async transformInstanceChargeType(request: $_model.TransformInstanceChargeTypeRequest): Promise<$_model.TransformInstanceChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transformInstanceChargeTypeWithOptions(request, runtime);
  }

  /**
   * Converts a classic architecture instance to cloud-native.
   * 
   * @param request - TransformToEcsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransformToEcsResponse
   */
  async transformToEcsWithOptions(request: $_model.TransformToEcsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransformToEcsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isAcrossZone)) {
      query["IsAcrossZone"] = request.isAcrossZone;
    }

    if (!$dara.isNull(request.izNo)) {
      query["IzNo"] = request.izNo;
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

    if (!$dara.isNull(request.secondaryIzNo)) {
      query["SecondaryIzNo"] = request.secondaryIzNo;
    }

    if (!$dara.isNull(request.shardCount)) {
      query["ShardCount"] = request.shardCount;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransformToEcs",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransformToEcsResponse>(await this.callApi(params, req, runtime), new $_model.TransformToEcsResponse({}));
  }

  /**
   * Converts a classic architecture instance to cloud-native.
   * 
   * @param request - TransformToEcsRequest
   * @returns TransformToEcsResponse
   */
  async transformToEcs(request: $_model.TransformToEcsRequest): Promise<$_model.TransformToEcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transformToEcsWithOptions(request, runtime);
  }

  /**
   * Transforms a pay-as-you-go Tair (Redis® OSS-Compatible) database instance into a subscription instance.
   * 
   * @remarks
   * For the corresponding console operation, see [Change the billing method to subscription](https://help.aliyun.com/document_detail/54542.html).
   * 
   * @param request - TransformToPrePaidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransformToPrePaidResponse
   */
  async transformToPrePaidWithOptions(request: $_model.TransformToPrePaidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransformToPrePaidResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransformToPrePaid",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransformToPrePaidResponse>(await this.callApi(params, req, runtime), new $_model.TransformToPrePaidResponse({}));
  }

  /**
   * Transforms a pay-as-you-go Tair (Redis® OSS-Compatible) database instance into a subscription instance.
   * 
   * @remarks
   * For the corresponding console operation, see [Change the billing method to subscription](https://help.aliyun.com/document_detail/54542.html).
   * 
   * @param request - TransformToPrePaidRequest
   * @returns TransformToPrePaidResponse
   */
  async transformToPrePaid(request: $_model.TransformToPrePaidRequest): Promise<$_model.TransformToPrePaidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transformToPrePaidWithOptions(request, runtime);
  }

  /**
   * Unlocks a write-locked instance. After the instance is unlocked, the instance supports both reading and writing data.
   * 
   * @param request - UnlockDBInstanceWriteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockDBInstanceWriteResponse
   */
  async unlockDBInstanceWriteWithOptions(request: $_model.UnlockDBInstanceWriteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnlockDBInstanceWriteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "UnlockDBInstanceWrite",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnlockDBInstanceWriteResponse>(await this.callApi(params, req, runtime), new $_model.UnlockDBInstanceWriteResponse({}));
  }

  /**
   * Unlocks a write-locked instance. After the instance is unlocked, the instance supports both reading and writing data.
   * 
   * @param request - UnlockDBInstanceWriteRequest
   * @returns UnlockDBInstanceWriteResponse
   */
  async unlockDBInstanceWrite(request: $_model.UnlockDBInstanceWriteRequest): Promise<$_model.UnlockDBInstanceWriteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockDBInstanceWriteWithOptions(request, runtime);
  }

  /**
   * Removes labels from an ApsaraDB for Tair (Redis OSS-compatible) database instance.
   * 
   * @remarks
   * You can remove up to 20 tags at a time.
   * * If a tag is removed from an instance and is not attached to any other instances, the tag is automatically deleted.
   * For the corresponding console operation, see [Remove tags](https://help.aliyun.com/document_detail/119157.html).
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
      version: "2015-01-01",
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
   * Removes labels from an ApsaraDB for Tair (Redis OSS-compatible) database instance.
   * 
   * @remarks
   * You can remove up to 20 tags at a time.
   * * If a tag is removed from an instance and is not attached to any other instances, the tag is automatically deleted.
   * For the corresponding console operation, see [Remove tags](https://help.aliyun.com/document_detail/119157.html).
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Upgrades the proxy nodes of a cluster instance to the latest version.
   * 
   * @remarks
   * The upgrade process and impact vary depending on the architecture. For more information, see [Minor engine version update](https://help.aliyun.com/document_detail/56450.html).
   * > * Before you call this operation, you can call [DescribeEngineVersion](https://help.aliyun.com/document_detail/473781.html) to query the current minor version of the proxy nodes.
   * > * The upgrade causes connection interruptions. Perform the upgrade during off-peak hours and make sure that your application has a reconnection mechanism. For more information about the impact, see [Minor engine version update](https://help.aliyun.com/document_detail/56450.html).
   * 
   * @param request - UpgradeProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeProxyResponse
   */
  async upgradeProxyWithOptions(request: $_model.UpgradeProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.proxyInstanceIds)) {
      query["ProxyInstanceIds"] = request.proxyInstanceIds;
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

    if (!$dara.isNull(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeProxy",
      version: "2015-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeProxyResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeProxyResponse({}));
  }

  /**
   * Upgrades the proxy nodes of a cluster instance to the latest version.
   * 
   * @remarks
   * The upgrade process and impact vary depending on the architecture. For more information, see [Minor engine version update](https://help.aliyun.com/document_detail/56450.html).
   * > * Before you call this operation, you can call [DescribeEngineVersion](https://help.aliyun.com/document_detail/473781.html) to query the current minor version of the proxy nodes.
   * > * The upgrade causes connection interruptions. Perform the upgrade during off-peak hours and make sure that your application has a reconnection mechanism. For more information about the impact, see [Minor engine version update](https://help.aliyun.com/document_detail/56450.html).
   * 
   * @param request - UpgradeProxyRequest
   * @returns UpgradeProxyResponse
   */
  async upgradeProxy(request: $_model.UpgradeProxyRequest): Promise<$_model.UpgradeProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeProxyWithOptions(request, runtime);
  }

}
