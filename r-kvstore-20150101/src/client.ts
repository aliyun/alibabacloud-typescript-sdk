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
      'cn-qingdao': "r-kvstore.aliyuncs.com",
      'cn-beijing': "r-kvstore.aliyuncs.com",
      'cn-wulanchabu': "r-kvstore.aliyuncs.com",
      'cn-hangzhou': "r-kvstore.aliyuncs.com",
      'cn-shanghai': "r-kvstore.aliyuncs.com",
      'cn-heyuan': "r-kvstore.aliyuncs.com",
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
   * Adds one or more data shards to a Tair cluster instance.
   * 
   * @remarks
   * This operation is available only for cluster instances that use cloud disks.
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
   * Adds one or more data shards to a Tair cluster instance.
   * 
   * @remarks
   * This operation is available only for cluster instances that use cloud disks.
   * 
   * @param request - AddShardingNodeRequest
   * @returns AddShardingNodeResponse
   */
  async addShardingNode(request: $_model.AddShardingNodeRequest): Promise<$_model.AddShardingNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addShardingNodeWithOptions(request, runtime);
  }

  /**
   * Applies for a private endpoint for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * Clients can bypass proxy nodes and use private endpoints to connect to cluster instances. This is similar to the connection to native Redis clusters. The direct connection mode can reduce communication overheads and the response time of Tair (Redis OSS-compatible).
   * To call this operation, make sure that the instance meets the following requirements:
   * *   The instance is a cluster instance.
   * *   The instance is deployed in classic mode.
   * *   The instance is deployed in a virtual private cloud (VPC). If the instance is deployed in the classic network, you can call the [SwitchNetwork](https://help.aliyun.com/document_detail/473797.html) operation to change the network type to VPC.
   * *   SSL encryption is disabled for the instance. If SSL encryption is enabled, you can call the [ModifyInstanceSSL](https://help.aliyun.com/document_detail/473838.html) operation to disable SSL encryption.
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
   * Applies for a private endpoint for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * Clients can bypass proxy nodes and use private endpoints to connect to cluster instances. This is similar to the connection to native Redis clusters. The direct connection mode can reduce communication overheads and the response time of Tair (Redis OSS-compatible).
   * To call this operation, make sure that the instance meets the following requirements:
   * *   The instance is a cluster instance.
   * *   The instance is deployed in classic mode.
   * *   The instance is deployed in a virtual private cloud (VPC). If the instance is deployed in the classic network, you can call the [SwitchNetwork](https://help.aliyun.com/document_detail/473797.html) operation to change the network type to VPC.
   * *   SSL encryption is disabled for the instance. If SSL encryption is enabled, you can call the [ModifyInstanceSSL](https://help.aliyun.com/document_detail/473838.html) operation to disable SSL encryption.
   * 
   * @param request - AllocateDirectConnectionRequest
   * @returns AllocateDirectConnectionResponse
   */
  async allocateDirectConnection(request: $_model.AllocateDirectConnectionRequest): Promise<$_model.AllocateDirectConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateDirectConnectionWithOptions(request, runtime);
  }

  /**
   * Applies for a public endpoint for an ApsaraDB for Redis instance.
   * 
   * @remarks
   * You can also apply for public endpoints in the ApsaraDB for Redis console. For more information, see [Use a public endpoint to connect to an ApsaraDB for Redis instance](https://help.aliyun.com/document_detail/43850.html).
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
   * Applies for a public endpoint for an ApsaraDB for Redis instance.
   * 
   * @remarks
   * You can also apply for public endpoints in the ApsaraDB for Redis console. For more information, see [Use a public endpoint to connect to an ApsaraDB for Redis instance](https://help.aliyun.com/document_detail/43850.html).
   * 
   * @param request - AllocateInstancePublicConnectionRequest
   * @returns AllocateInstancePublicConnectionResponse
   */
  async allocateInstancePublicConnection(request: $_model.AllocateInstancePublicConnectionRequest): Promise<$_model.AllocateInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Cancels O\\\\\\&M events at a time.
   * 
   * @remarks
   * O\\&M events cannot be canceled in the following scenarios:
   * *   The allowCancel parameter is set to 0.
   * *   The current time is later than the start time of the O\\&M event.
   * *   The state value of the O\\&M event is not 3.
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
   * Cancels O\\\\\\&M events at a time.
   * 
   * @remarks
   * O\\&M events cannot be canceled in the following scenarios:
   * *   The allowCancel parameter is set to 0.
   * *   The current time is later than the start time of the O\\&M event.
   * *   The state value of the O\\&M event is not 3.
   * 
   * @param request - CancelActiveOperationTasksRequest
   * @returns CancelActiveOperationTasksResponse
   */
  async cancelActiveOperationTasks(request: $_model.CancelActiveOperationTasksRequest): Promise<$_model.CancelActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Queries whether a Tair (Redis OSS-compatible) instance has the permissions to use Key Management Service (KMS).
   * 
   * @remarks
   *   For information about Transparent Data Encryption (TDE) and the usage notes of TDE, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * *   If the Tair (Redis OSS-compatible) instance is authorized to use KMS, you can call the [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html) operation to enable TDE.
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
   * Queries whether a Tair (Redis OSS-compatible) instance has the permissions to use Key Management Service (KMS).
   * 
   * @remarks
   *   For information about Transparent Data Encryption (TDE) and the usage notes of TDE, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * *   If the Tair (Redis OSS-compatible) instance is authorized to use KMS, you can call the [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html) operation to enable TDE.
   * 
   * @param request - CheckCloudResourceAuthorizedRequest
   * @returns CheckCloudResourceAuthorizedResponse
   */
  async checkCloudResourceAuthorized(request: $_model.CheckCloudResourceAuthorizedRequest): Promise<$_model.CheckCloudResourceAuthorizedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCloudResourceAuthorizedWithOptions(request, runtime);
  }

  /**
   * Creates an account that has specific permissions for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   *   This operation is supported only for instances that are compatible with Redis 4.0 or later.
   * *   The instance must be in the running state.
   * *   You can create up to 18 accounts for an instance.
   * >  For more information about how to create an account in the console, see [Manage database accounts](https://help.aliyun.com/document_detail/92665.html).
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
   * Creates an account that has specific permissions for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   *   This operation is supported only for instances that are compatible with Redis 4.0 or later.
   * *   The instance must be in the running state.
   * *   You can create up to 18 accounts for an instance.
   * >  For more information about how to create an account in the console, see [Manage database accounts](https://help.aliyun.com/document_detail/92665.html).
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Backs up a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can also back up an instance in the Tair (Redis OSS-compatible) console. For more information, see [Backup and recovery](https://help.aliyun.com/document_detail/43886.html).
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
   * Backs up a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can also back up an instance in the Tair (Redis OSS-compatible) console. For more information, see [Backup and recovery](https://help.aliyun.com/document_detail/43886.html).
   * 
   * @param request - CreateBackupRequest
   * @returns CreateBackupResponse
   */
  async createBackup(request: $_model.CreateBackupRequest): Promise<$_model.CreateBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  /**
   * Creates a cache analysis task.
   * 
   * @remarks
   * This operation is no longer available. Use the new operation. For more information, see [Real-time key statistics and offline key analysis](https://help.aliyun.com/document_detail/184226.html).
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
   * Creates a cache analysis task.
   * 
   * @remarks
   * This operation is no longer available. Use the new operation. For more information, see [Real-time key statistics and offline key analysis](https://help.aliyun.com/document_detail/184226.html).
   * 
   * @param request - CreateCacheAnalysisTaskRequest
   * @returns CreateCacheAnalysisTaskResponse
   */
  async createCacheAnalysisTask(request: $_model.CreateCacheAnalysisTaskRequest): Promise<$_model.CreateCacheAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCacheAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * Converts an existing Tair DRAM-based classic instance to the first child instance of a distributed instance.
   * 
   * @remarks
   * You can call this operation to convert an existing instance to the first child instance of a distributed instance. After the instance is converted, the distributed instance is created. Before you call this operation, make sure that the following requirements are met:
   * *   The instance that you want to convert must be a Tair [DRAM-based](https://help.aliyun.com/document_detail/126164.html) instance that uses the classic deployment mode.
   * *   If the existing instance is a cluster instance, the direct connection mode must be disabled for the instance. For more information, see [Release a private endpoint](https://help.aliyun.com/document_detail/150047.html).
   * >  You can also call the [CreateInstance](https://help.aliyun.com/document_detail/473757.html) operation to create an instance that is specified as the first child instance of a distributed instance. After the child instance is created, the distributed instance to which the child instance belongs is created.
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
   * Converts an existing Tair DRAM-based classic instance to the first child instance of a distributed instance.
   * 
   * @remarks
   * You can call this operation to convert an existing instance to the first child instance of a distributed instance. After the instance is converted, the distributed instance is created. Before you call this operation, make sure that the following requirements are met:
   * *   The instance that you want to convert must be a Tair [DRAM-based](https://help.aliyun.com/document_detail/126164.html) instance that uses the classic deployment mode.
   * *   If the existing instance is a cluster instance, the direct connection mode must be disabled for the instance. For more information, see [Release a private endpoint](https://help.aliyun.com/document_detail/150047.html).
   * >  You can also call the [CreateInstance](https://help.aliyun.com/document_detail/473757.html) operation to create an instance that is specified as the first child instance of a distributed instance. After the child instance is created, the distributed instance to which the child instance belongs is created.
   * 
   * @param request - CreateGlobalDistributeCacheRequest
   * @returns CreateGlobalDistributeCacheResponse
   */
  async createGlobalDistributeCache(request: $_model.CreateGlobalDistributeCacheRequest): Promise<$_model.CreateGlobalDistributeCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGlobalDistributeCacheWithOptions(request, runtime);
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
   * Creates a Tair (Redis OSS-compatible) instance. If you want to create a Tair (Enterprise Edition) cloud-native instance, you can call the CreateTairInstance operation.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of Tair (Redis OSS-compatible).
   * You can call this operation to create a Tair (Redis OSS-compatible) instance or a classic Tair DRAM-based instance. To create a cloud-native Tair instance, call the [CreateTairInstance](https://help.aliyun.com/document_detail/473770.html) operation.
   * > For more information about how to create an instance that meets your requirements in the Tair (Redis OSS-compatible) console, see [Step 1: Create an instance](https://help.aliyun.com/document_detail/26351.html).
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

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
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
   * Creates a Tair (Redis OSS-compatible) instance. If you want to create a Tair (Enterprise Edition) cloud-native instance, you can call the CreateTairInstance operation.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of Tair (Redis OSS-compatible).
   * You can call this operation to create a Tair (Redis OSS-compatible) instance or a classic Tair DRAM-based instance. To create a cloud-native Tair instance, call the [CreateTairInstance](https://help.aliyun.com/document_detail/473770.html) operation.
   * > For more information about how to create an instance that meets your requirements in the Tair (Redis OSS-compatible) console, see [Step 1: Create an instance](https://help.aliyun.com/document_detail/26351.html).
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * Creates multiple Tair (Redis OSS-compatible) instances at a time.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of Tair (Redis OSS-compatible).
   * >  You can call this operation to create classic Redis Open-Source Edition instances or classic Tair DRAM-based instances. We recommend that you use an API operation for creating a single instance:
   * *   [CreateInstance](https://help.aliyun.com/document_detail/473757.html): creates a Redis Open-Source instance or a classic Tair DRAM-based instance.
   * *   [CreateTairInstance](https://help.aliyun.com/document_detail/473770.html): creates a Tair (Enterprise Edition) instance. The instance can be a DRAM-based, persistent memory-optimized, or ESSD/SSD-based instance.
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
   * Creates multiple Tair (Redis OSS-compatible) instances at a time.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of Tair (Redis OSS-compatible).
   * >  You can call this operation to create classic Redis Open-Source Edition instances or classic Tair DRAM-based instances. We recommend that you use an API operation for creating a single instance:
   * *   [CreateInstance](https://help.aliyun.com/document_detail/473757.html): creates a Redis Open-Source instance or a classic Tair DRAM-based instance.
   * *   [CreateTairInstance](https://help.aliyun.com/document_detail/473770.html): creates a Tair (Enterprise Edition) instance. The instance can be a DRAM-based, persistent memory-optimized, or ESSD/SSD-based instance.
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
   * Creates a Tair (Enterprise Edition) cloud-native instance.
   * 
   * @remarks
   * For information about instance selection, see [Instructions for selecting an appropriate Tair (Redis OSS-compatible) instance](https://help.aliyun.com/document_detail/223808.html).
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of Tair (Redis OSS-compatible).
   * > 
   * *   For information about how to create an instance in the console, see [Step 1: Create an instance](https://help.aliyun.com/document_detail/26351.html).
   * *   To create other types of instances, such as Redis Open-Source Edition instances or [Tair DRAM-based](https://help.aliyun.com/document_detail/126164.html) instances, you can call the [CreateInstance](https://help.aliyun.com/document_detail/473757.html) operation.
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
   * Creates a Tair (Enterprise Edition) cloud-native instance.
   * 
   * @remarks
   * For information about instance selection, see [Instructions for selecting an appropriate Tair (Redis OSS-compatible) instance](https://help.aliyun.com/document_detail/223808.html).
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of Tair (Redis OSS-compatible).
   * > 
   * *   For information about how to create an instance in the console, see [Step 1: Create an instance](https://help.aliyun.com/document_detail/26351.html).
   * *   To create other types of instances, such as Redis Open-Source Edition instances or [Tair DRAM-based](https://help.aliyun.com/document_detail/126164.html) instances, you can call the [CreateInstance](https://help.aliyun.com/document_detail/473757.html) operation.
   * 
   * @param request - CreateTairInstanceRequest
   * @returns CreateTairInstanceResponse
   */
  async createTairInstance(request: $_model.CreateTairInstanceRequest): Promise<$_model.CreateTairInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTairInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a Tair VNode instance.
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
   * Creates a Tair VNode instance.
   * 
   * @param request - CreateTairKVCacheVNodeRequest
   * @returns CreateTairKVCacheVNodeResponse
   */
  async createTairKVCacheVNode(request: $_model.CreateTairKVCacheVNodeRequest): Promise<$_model.CreateTairKVCacheVNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTairKVCacheVNodeWithOptions(request, runtime);
  }

  /**
   * Deletes an account from a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   *   This operation is supported only for instances that are compatible with Redis 4.0 or later.
   * *   The instance must be in the Running state.
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
   * Deletes an account from a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   *   This operation is supported only for instances that are compatible with Redis 4.0 or later.
   * *   The instance must be in the Running state.
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a specified backup set. However, you can delete only backup sets that are manually backed up.
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
   * Deletes a specified backup set. However, you can delete only backup sets that are manually backed up.
   * 
   * @param request - DeleteBackupRequest
   * @returns DeleteBackupResponse
   */
  async deleteBackup(request: $_model.DeleteBackupRequest): Promise<$_model.DeleteBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupWithOptions(request, runtime);
  }

  /**
   * Deletes a global IP whitelist template.
   * 
   * @remarks
   * Before you delete an IP whitelist template, you must unbind (disassociate) the instances that are currently associated with the template.
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
   * Deletes a global IP whitelist template.
   * 
   * @remarks
   * Before you delete an IP whitelist template, you must unbind (disassociate) the instances that are currently associated with the template.
   * 
   * @param request - DeleteGlobalSecurityIPGroupRequest
   * @returns DeleteGlobalSecurityIPGroupResponse
   */
  async deleteGlobalSecurityIPGroup(request: $_model.DeleteGlobalSecurityIPGroupRequest): Promise<$_model.DeleteGlobalSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Release the Redis instance.
   * 
   * @remarks
   * For more information about how to perform the corresponding operation in the console, see [Release an instance](https://help.aliyun.com/document_detail/43882.html).
   * Before you call this operation, make sure that the following requirements are met:
   * *   The instance is in the running state.
   * *   The instance is charged on a pay-as-you-go basis.
   * >  You cannot call this operation to release a subscription instance, which is automatically released when it expires. To release a subscription instance before it expires, submit a ticket.
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
   * Release the Redis instance.
   * 
   * @remarks
   * For more information about how to perform the corresponding operation in the console, see [Release an instance](https://help.aliyun.com/document_detail/43882.html).
   * Before you call this operation, make sure that the following requirements are met:
   * *   The instance is in the running state.
   * *   The instance is charged on a pay-as-you-go basis.
   * >  You cannot call this operation to release a subscription instance, which is automatically released when it expires. To release a subscription instance before it expires, submit a ticket.
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
   * Removes one or more data shards from a Tair (Redis OSS-compatible) cluster instance.
   * 
   * @remarks
   * You can also remove data shards from an instance in the Tair (Redis OSS-compatible) console. For more information, see [Adjust the number of shards for an instance with cloud disks](https://help.aliyun.com/document_detail/198082.html).\\
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is a persistent memory-optimized instance in the cluster architecture. For more information about persistent memory-optimized instances, see [Persistent memory-optimized instances](https://help.aliyun.com/document_detail/183956.html).
   * *   The instance has more than one data shard.
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
   * Removes one or more data shards from a Tair (Redis OSS-compatible) cluster instance.
   * 
   * @remarks
   * You can also remove data shards from an instance in the Tair (Redis OSS-compatible) console. For more information, see [Adjust the number of shards for an instance with cloud disks](https://help.aliyun.com/document_detail/198082.html).\\
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is a persistent memory-optimized instance in the cluster architecture. For more information about persistent memory-optimized instances, see [Persistent memory-optimized instances](https://help.aliyun.com/document_detail/183956.html).
   * *   The instance has more than one data shard.
   * 
   * @param request - DeleteShardingNodeRequest
   * @returns DeleteShardingNodeResponse
   */
  async deleteShardingNode(request: $_model.DeleteShardingNodeRequest): Promise<$_model.DeleteShardingNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteShardingNodeWithOptions(request, runtime);
  }

  /**
   * Queries a specified account of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * >  Only Tair (Redis OSS-compatible) instances of Redis 4.0 or later are supported.
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
   * Queries a specified account of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * >  Only Tair (Redis OSS-compatible) instances of Redis 4.0 or later are supported.
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: $_model.DescribeAccountsRequest): Promise<$_model.DescribeAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the O\\\\\\&M task configurations of an instance.
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
   * Queries the O\\\\\\&M task configurations of an instance.
   * 
   * @param request - DescribeActiveOperationMaintenanceConfigRequest
   * @returns DescribeActiveOperationMaintenanceConfigResponse
   */
  async describeActiveOperationMaintenanceConfig(request: $_model.DescribeActiveOperationMaintenanceConfigRequest): Promise<$_model.DescribeActiveOperationMaintenanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationMaintenanceConfigWithOptions(request, runtime);
  }

  /**
   * Queries the details of the O\\&M tasks of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * After you have called this API operation and queried the information about a specific O&M task, you can also call the [ModifyActiveOperationTask](https://help.aliyun.com/document_detail/473864.html) operation to modify the scheduled switchover time of the O&M task.
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
   * Queries the details of the O\\&M tasks of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * After you have called this API operation and queried the information about a specific O&M task, you can also call the [ModifyActiveOperationTask](https://help.aliyun.com/document_detail/473864.html) operation to modify the scheduled switchover time of the O&M task.
   * 
   * @param request - DescribeActiveOperationTaskRequest
   * @returns DescribeActiveOperationTaskResponse
   */
  async describeActiveOperationTask(request: $_model.DescribeActiveOperationTaskRequest): Promise<$_model.DescribeActiveOperationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTaskWithOptions(request, runtime);
  }

  /**
   * Queries the number of O\\\\\\&M tasks on a Tair (Redis OSS-compatible) instance.
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
   * Queries the number of O\\\\\\&M tasks on a Tair (Redis OSS-compatible) instance.
   * 
   * @param request - DescribeActiveOperationTaskCountRequest
   * @returns DescribeActiveOperationTaskCountResponse
   */
  async describeActiveOperationTaskCount(request: $_model.DescribeActiveOperationTaskCountRequest): Promise<$_model.DescribeActiveOperationTaskCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTaskCountWithOptions(request, runtime);
  }

  /**
   * Queries the O\\\\\\\\\\\\&M event details of an instance.
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
   * Queries the O\\\\\\\\\\\\&M event details of an instance.
   * 
   * @param request - DescribeActiveOperationTasksRequest
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasks(request: $_model.DescribeActiveOperationTasksRequest): Promise<$_model.DescribeActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Queries the audit log configurations of a Tair (Redis OSS-compatible) instance. The configurations include whether the audit log feature is enabled and the retention period of audit logs.
   * 
   * @remarks
   * Before you call this operation, you must enable the audit log feature for the instance. For more information, see [ModifyAuditLogConfig](https://help.aliyun.com/document_detail/473829.html) or [Enable the audit log feature](https://help.aliyun.com/document_detail/102015.html).
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
   * Queries the audit log configurations of a Tair (Redis OSS-compatible) instance. The configurations include whether the audit log feature is enabled and the retention period of audit logs.
   * 
   * @remarks
   * Before you call this operation, you must enable the audit log feature for the instance. For more information, see [ModifyAuditLogConfig](https://help.aliyun.com/document_detail/473829.html) or [Enable the audit log feature](https://help.aliyun.com/document_detail/102015.html).
   * 
   * @param request - DescribeAuditLogConfigRequest
   * @returns DescribeAuditLogConfigResponse
   */
  async describeAuditLogConfig(request: $_model.DescribeAuditLogConfigRequest): Promise<$_model.DescribeAuditLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditLogConfigWithOptions(request, runtime);
  }

  /**
   * Queries the audit logs of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * Before you call this operation, you must enable the audit log feature for the instance. For more information, see [ModifyAuditLogConfig](https://help.aliyun.com/document_detail/473829.html).
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
   * Queries the audit logs of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * Before you call this operation, you must enable the audit log feature for the instance. For more information, see [ModifyAuditLogConfig](https://help.aliyun.com/document_detail/473829.html).
   * 
   * @param request - DescribeAuditRecordsRequest
   * @returns DescribeAuditRecordsResponse
   */
  async describeAuditRecords(request: $_model.DescribeAuditRecordsRequest): Promise<$_model.DescribeAuditRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the types of Tair (Redis OSS-compatible) instances that can be created in a specified zone.
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
   * Queries the types of Tair (Redis OSS-compatible) instances that can be created in a specified zone.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResource(request: $_model.DescribeAvailableResourceRequest): Promise<$_model.DescribeAvailableResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  /**
   * Queries the backup policy of a Tair (Redis OSS-compatible) instance, including the backup cycle and backup time.
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
   * Queries the backup policy of a Tair (Redis OSS-compatible) instance, including the backup cycle and backup time.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the execution status of backup tasks for a Tair (Redis OSS-compatible) instance.
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
   * Queries the execution status of backup tasks for a Tair (Redis OSS-compatible) instance.
   * 
   * @param request - DescribeBackupTasksRequest
   * @returns DescribeBackupTasksResponse
   */
  async describeBackupTasks(request: $_model.DescribeBackupTasksRequest): Promise<$_model.DescribeBackupTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupTasksWithOptions(request, runtime);
  }

  /**
   * Queries the backup files of the Tair (Redis OSS-compatible) instance.
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
   * Queries the backup files of the Tair (Redis OSS-compatible) instance.
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: $_model.DescribeBackupsRequest): Promise<$_model.DescribeBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * Queries the cache analysis report of an instance on a specified date.
   * 
   * @remarks
   * > Tair (Redis OSS-compatible) has optimized the cache analytics feature to improve user experience. This API operation is phased out. You can use the new API operation for cache analytics. For more information, see [API operations for cache analytics are upgraded](https://help.aliyun.com/document_detail/186019.html).
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The engine version of the instance is Redis 4.0 or later.
   * *   The instance uses the latest minor version. For more information about how to check whether to update the minor version of an instance, see [How do I check whether the minor version of a Tair (Redis OSS-compatible) instance is the latest?](https://help.aliyun.com/document_detail/129203.html)
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
   * Queries the cache analysis report of an instance on a specified date.
   * 
   * @remarks
   * > Tair (Redis OSS-compatible) has optimized the cache analytics feature to improve user experience. This API operation is phased out. You can use the new API operation for cache analytics. For more information, see [API operations for cache analytics are upgraded](https://help.aliyun.com/document_detail/186019.html).
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The engine version of the instance is Redis 4.0 or later.
   * *   The instance uses the latest minor version. For more information about how to check whether to update the minor version of an instance, see [How do I check whether the minor version of a Tair (Redis OSS-compatible) instance is the latest?](https://help.aliyun.com/document_detail/129203.html)
   * 
   * @param request - DescribeCacheAnalysisReportRequest
   * @returns DescribeCacheAnalysisReportResponse
   */
  async describeCacheAnalysisReport(request: $_model.DescribeCacheAnalysisReportRequest): Promise<$_model.DescribeCacheAnalysisReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCacheAnalysisReportWithOptions(request, runtime);
  }

  /**
   * Queries a list of cache analysis reports for an instance.
   * 
   * @remarks
   * > Tair (Redis OSS-compatible) has optimized the cache analytics feature to improve user experience. This API operation is phased out. You can use the new API operation for cache analytics. For more information, see [API operations for cache analytics are upgraded](https://help.aliyun.com/document_detail/186019.html).
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The engine version of the instance is Redis 4.0 or later.
   * *   The instance uses the latest minor version. For more information about how to check whether to update the minor version of an instance, see [How do I check whether the minor version of a Tair (Redis OSS-compatible) instance is the latest?](https://help.aliyun.com/document_detail/129203.html)
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
   * Queries a list of cache analysis reports for an instance.
   * 
   * @remarks
   * > Tair (Redis OSS-compatible) has optimized the cache analytics feature to improve user experience. This API operation is phased out. You can use the new API operation for cache analytics. For more information, see [API operations for cache analytics are upgraded](https://help.aliyun.com/document_detail/186019.html).
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The engine version of the instance is Redis 4.0 or later.
   * *   The instance uses the latest minor version. For more information about how to check whether to update the minor version of an instance, see [How do I check whether the minor version of a Tair (Redis OSS-compatible) instance is the latest?](https://help.aliyun.com/document_detail/129203.html)
   * 
   * @param request - DescribeCacheAnalysisReportListRequest
   * @returns DescribeCacheAnalysisReportListResponse
   */
  async describeCacheAnalysisReportList(request: $_model.DescribeCacheAnalysisReportListRequest): Promise<$_model.DescribeCacheAnalysisReportListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCacheAnalysisReportListWithOptions(request, runtime);
  }

  /**
   * Queries the backup sets of a Tair (Redis OSS-compatible) cluster instance.
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
   * Queries the backup sets of a Tair (Redis OSS-compatible) cluster instance.
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
   * Queries the configuration information of nodes in a Tair (Redis OSS-compatible) cluster instance, such as the specifications and the maximum number of connections.
   * 
   * @remarks
   * > This API operation is applicable only to Tair (Redis OSS-compatible) instances that use [cloud disks](https://help.aliyun.com/document_detail/188068.html) and the [cluster architecture](https://help.aliyun.com/document_detail/52228.html).
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
   * Queries the configuration information of nodes in a Tair (Redis OSS-compatible) cluster instance, such as the specifications and the maximum number of connections.
   * 
   * @remarks
   * > This API operation is applicable only to Tair (Redis OSS-compatible) instances that use [cloud disks](https://help.aliyun.com/document_detail/188068.html) and the [cluster architecture](https://help.aliyun.com/document_detail/52228.html).
   * 
   * @param request - DescribeClusterMemberInfoRequest
   * @returns DescribeClusterMemberInfoResponse
   */
  async describeClusterMemberInfo(request: $_model.DescribeClusterMemberInfoRequest): Promise<$_model.DescribeClusterMemberInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterMemberInfoWithOptions(request, runtime);
  }

  /**
   * Queries the collection frequency of monitoring data for a Tair (Redis OSS-compatible) instance.
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
   * Queries the collection frequency of monitoring data for a Tair (Redis OSS-compatible) instance.
   * 
   * @param request - DescribeDBInstanceMonitorRequest
   * @returns DescribeDBInstanceMonitorResponse
   */
  async describeDBInstanceMonitor(request: $_model.DescribeDBInstanceMonitorRequest): Promise<$_model.DescribeDBInstanceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceMonitorWithOptions(request, runtime);
  }

  /**
   * Queries the network information of an ApsaraDB for Redis instance.
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
   * Queries the network information of an ApsaraDB for Redis instance.
   * 
   * @param request - DescribeDBInstanceNetInfoRequest
   * @returns DescribeDBInstanceNetInfoResponse
   */
  async describeDBInstanceNetInfo(request: $_model.DescribeDBInstanceNetInfoRequest): Promise<$_model.DescribeDBInstanceNetInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceNetInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information about virtual IP addresses (VIPs) of child instances of a cluster instance in direct connection mode.
   * 
   * @remarks
   * > Only instances that use cloud disks support this operation.
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
   * Queries the information about virtual IP addresses (VIPs) of child instances of a cluster instance in direct connection mode.
   * 
   * @remarks
   * > Only instances that use cloud disks support this operation.
   * 
   * @param request - DescribeDBNodeDirectVipInfoRequest
   * @returns DescribeDBNodeDirectVipInfoResponse
   */
  async describeDBNodeDirectVipInfo(request: $_model.DescribeDBNodeDirectVipInfoRequest): Promise<$_model.DescribeDBNodeDirectVipInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBNodeDirectVipInfoWithOptions(request, runtime);
  }

  /**
   * Checks the connectivity between the client IP address and the instance.
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
   * Checks the connectivity between the client IP address and the instance.
   * 
   * @param request - DescribeDbInstanceConnectivityRequest
   * @returns DescribeDbInstanceConnectivityResponse
   */
  async describeDbInstanceConnectivity(request: $_model.DescribeDbInstanceConnectivityRequest): Promise<$_model.DescribeDbInstanceConnectivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDbInstanceConnectivityWithOptions(request, runtime);
  }

  /**
   * Queries the information of Tair (Redis OSS-compatible) instances deployed in a dedicated cluster.
   * 
   * @remarks
   * > If you want to query the information about Tair (Redis OSS-compatible) instances that are not deployed in a dedicated cluster, call the [DescribeInstanceAttribute](https://help.aliyun.com/document_detail/473779.html) operation.
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
   * Queries the information of Tair (Redis OSS-compatible) instances deployed in a dedicated cluster.
   * 
   * @remarks
   * > If you want to query the information about Tair (Redis OSS-compatible) instances that are not deployed in a dedicated cluster, call the [DescribeInstanceAttribute](https://help.aliyun.com/document_detail/473779.html) operation.
   * 
   * @param request - DescribeDedicatedClusterInstanceListRequest
   * @returns DescribeDedicatedClusterInstanceListResponse
   */
  async describeDedicatedClusterInstanceList(request: $_model.DescribeDedicatedClusterInstanceListRequest): Promise<$_model.DescribeDedicatedClusterInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDedicatedClusterInstanceListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a custom key for a Tair (Redis OSS-compatible) instance to use transparent data encryption (TDE).
   * 
   * @remarks
   * Before you call this operation, TDE must be enabled for the Tair (Redis OSS-compatible) instance by using a custom key. For more information, see [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html).
   * > For more information about TDE, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
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
   * Queries the details of a custom key for a Tair (Redis OSS-compatible) instance to use transparent data encryption (TDE).
   * 
   * @remarks
   * Before you call this operation, TDE must be enabled for the Tair (Redis OSS-compatible) instance by using a custom key. For more information, see [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html).
   * > For more information about TDE, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * 
   * @param request - DescribeEncryptionKeyRequest
   * @returns DescribeEncryptionKeyResponse
   */
  async describeEncryptionKey(request: $_model.DescribeEncryptionKeyRequest): Promise<$_model.DescribeEncryptionKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEncryptionKeyWithOptions(request, runtime);
  }

  /**
   * Queries a list of custom keys used by Tair (Redis OSS-compatible) instances.
   * 
   * @remarks
   *   You can specify a custom key when you call the [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html) operation to enable Transparent Data Encryption (TDE). You can call the DescribeEncryptionKeyList operation to query the custom keys that are in use. To create a custom key, you can call the [CreateKey](https://help.aliyun.com/document_detail/28947.html) operation of Key Management Service (KMS).
   * *   For more information about TDE and the usage notes of TDE, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
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
   * Queries a list of custom keys used by Tair (Redis OSS-compatible) instances.
   * 
   * @remarks
   *   You can specify a custom key when you call the [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html) operation to enable Transparent Data Encryption (TDE). You can call the DescribeEncryptionKeyList operation to query the custom keys that are in use. To create a custom key, you can call the [CreateKey](https://help.aliyun.com/document_detail/28947.html) operation of Key Management Service (KMS).
   * *   For more information about TDE and the usage notes of TDE, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * 
   * @param request - DescribeEncryptionKeyListRequest
   * @returns DescribeEncryptionKeyListResponse
   */
  async describeEncryptionKeyList(request: $_model.DescribeEncryptionKeyListRequest): Promise<$_model.DescribeEncryptionKeyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEncryptionKeyListWithOptions(request, runtime);
  }

  /**
   * Queries the major version and minor version of a Tair (Redis OSS-compatible) instance and the release notes for minor versions.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=R-kvstore\\&api=DescribeEngineVersion\\&type=RPC\\&version=2015-01-01)
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
   * Queries the major version and minor version of a Tair (Redis OSS-compatible) instance and the release notes for minor versions.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=R-kvstore\\&api=DescribeEngineVersion\\&type=RPC\\&version=2015-01-01)
   * 
   * @param request - DescribeEngineVersionRequest
   * @returns DescribeEngineVersionResponse
   */
  async describeEngineVersion(request: $_model.DescribeEngineVersionRequest): Promise<$_model.DescribeEngineVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEngineVersionWithOptions(request, runtime);
  }

  /**
   * Queries the details of a distributed Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=R-kvstore\\&api=DescribeGlobalDistributeCache\\&type=RPC\\&version=2015-01-01)
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
   * Queries the details of a distributed Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=R-kvstore\\&api=DescribeGlobalDistributeCache\\&type=RPC\\&version=2015-01-01)
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
   * Queries information about the global IP whitelist templates associated with an instance.
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
   * Queries information about the global IP whitelist templates associated with an instance.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRelationRequest
   * @returns DescribeGlobalSecurityIPGroupRelationResponse
   */
  async describeGlobalSecurityIPGroupRelation(request: $_model.DescribeGlobalSecurityIPGroupRelationRequest): Promise<$_model.DescribeGlobalSecurityIPGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalSecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * DescribeHistoryEvents
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
   * DescribeHistoryEvents
   * 
   * @param request - DescribeHistoryEventsRequest
   * @returns DescribeHistoryEventsResponse
   */
  async describeHistoryEvents(request: $_model.DescribeHistoryEventsRequest): Promise<$_model.DescribeHistoryEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryEventsWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of historical events.
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
   * Queries the statistics of historical events.
   * 
   * @param request - DescribeHistoryEventsStatRequest
   * @returns DescribeHistoryEventsStatResponse
   */
  async describeHistoryEventsStat(request: $_model.DescribeHistoryEventsStatRequest): Promise<$_model.DescribeHistoryEventsStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryEventsStatWithOptions(request, runtime);
  }

  /**
   * Queries the performance monitoring data of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can also query the performance monitoring data of an instance in the Tair console. For more information, see [Metrics](https://help.aliyun.com/document_detail/43887.html).
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
   * Queries the performance monitoring data of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can also query the performance monitoring data of an instance in the Tair console. For more information, see [Metrics](https://help.aliyun.com/document_detail/43887.html).
   * 
   * @param request - DescribeHistoryMonitorValuesRequest
   * @returns DescribeHistoryMonitorValuesResponse
   */
  async describeHistoryMonitorValues(request: $_model.DescribeHistoryMonitorValuesRequest): Promise<$_model.DescribeHistoryMonitorValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryMonitorValuesWithOptions(request, runtime);
  }

  /**
   * Queries a list of tasks in the task center.
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
   * Queries a list of tasks in the task center.
   * 
   * @param request - DescribeHistoryTasksRequest
   * @returns DescribeHistoryTasksResponse
   */
  async describeHistoryTasks(request: $_model.DescribeHistoryTasksRequest): Promise<$_model.DescribeHistoryTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryTasksWithOptions(request, runtime);
  }

  /**
   * Queries the task statistics in the task center.
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
   * Queries the task statistics in the task center.
   * 
   * @param request - DescribeHistoryTasksStatRequest
   * @returns DescribeHistoryTasksStatResponse
   */
  async describeHistoryTasksStat(request: $_model.DescribeHistoryTasksStatRequest): Promise<$_model.DescribeHistoryTasksStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryTasksStatWithOptions(request, runtime);
  }

  /**
   * Queries the attribute of Tair (Redis OSS-compatible) instances.
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
   * Queries the attribute of Tair (Redis OSS-compatible) instances.
   * 
   * @param request - DescribeInstanceAttributeRequest
   * @returns DescribeInstanceAttributeResponse
   */
  async describeInstanceAttribute(request: $_model.DescribeInstanceAttributeRequest): Promise<$_model.DescribeInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries whether auto-renewal is enabled for a Tair (Redis OSS-compatible) instance.
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
   * Queries whether auto-renewal is enabled for a Tair (Redis OSS-compatible) instance.
   * 
   * @param request - DescribeInstanceAutoRenewalAttributeRequest
   * @returns DescribeInstanceAutoRenewalAttributeResponse
   */
  async describeInstanceAutoRenewalAttribute(request: $_model.DescribeInstanceAutoRenewalAttributeRequest): Promise<$_model.DescribeInstanceAutoRenewalAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the default parameter configurations of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * This operation is available only for instances that use cloud disks.
   * > You can call the [DescribeParameters](https://help.aliyun.com/document_detail/473847.html) operation to query the parameter settings of instances that use local disks.
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
   * Queries the default parameter configurations of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * This operation is available only for instances that use cloud disks.
   * > You can call the [DescribeParameters](https://help.aliyun.com/document_detail/473847.html) operation to query the parameter settings of instances that use local disks.
   * 
   * @param request - DescribeInstanceConfigRequest
   * @returns DescribeInstanceConfigResponse
   */
  async describeInstanceConfig(request: $_model.DescribeInstanceConfigRequest): Promise<$_model.DescribeInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Queries whether TLS (SSL) encryption is enabled for an instance.
   * 
   * @remarks
   * SSL encryption is supported for Tair (Redis OSS-compatible) 2.8 standard master-replica instances, Tair (Redis OSS-compatible) 2.8 master-replica cluster instances, and Tair (Redis OSS-compatible) 4.0 master-replica cluster instances. You can enable SSL encryption to enhance data transmission security.
   * You can use one of the following methods to enable or disable SSL encryption or update the SSL certificate for a Tair (Redis OSS-compatible) instance:
   * *   Call the [ModifyInstanceSSL](https://help.aliyun.com/document_detail/473838.html) operation.
   * *   Enable or disable SSL encryption or update the SSL certificate in the Tair (Redis OSS-compatible) console. For more information, see [Configure SSL encryption](https://help.aliyun.com/document_detail/84898.html).
   * > After SSL encryption is enabled, the instance may respond slower.
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
   * Queries whether TLS (SSL) encryption is enabled for an instance.
   * 
   * @remarks
   * SSL encryption is supported for Tair (Redis OSS-compatible) 2.8 standard master-replica instances, Tair (Redis OSS-compatible) 2.8 master-replica cluster instances, and Tair (Redis OSS-compatible) 4.0 master-replica cluster instances. You can enable SSL encryption to enhance data transmission security.
   * You can use one of the following methods to enable or disable SSL encryption or update the SSL certificate for a Tair (Redis OSS-compatible) instance:
   * *   Call the [ModifyInstanceSSL](https://help.aliyun.com/document_detail/473838.html) operation.
   * *   Enable or disable SSL encryption or update the SSL certificate in the Tair (Redis OSS-compatible) console. For more information, see [Configure SSL encryption](https://help.aliyun.com/document_detail/84898.html).
   * > After SSL encryption is enabled, the instance may respond slower.
   * 
   * @param request - DescribeInstanceSSLRequest
   * @returns DescribeInstanceSSLResponse
   */
  async describeInstanceSSL(request: $_model.DescribeInstanceSSLRequest): Promise<$_model.DescribeInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSSLWithOptions(request, runtime);
  }

  /**
   * Queries whether transparent data encryption (TDE) is enabled for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * For more information about TDE and the usage notes of TDE, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * >  You can call the [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html) to enable or disable TDE.
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
   * Queries whether transparent data encryption (TDE) is enabled for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * For more information about TDE and the usage notes of TDE, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * >  You can call the [ModifyInstanceTDE](https://help.aliyun.com/document_detail/473859.html) to enable or disable TDE.
   * 
   * @param request - DescribeInstanceTDEStatusRequest
   * @returns DescribeInstanceTDEStatusResponse
   */
  async describeInstanceTDEStatus(request: $_model.DescribeInstanceTDEStatusRequest): Promise<$_model.DescribeInstanceTDEStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceTDEStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more Tair (Redis OSS-compatible) instances.
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
   * Queries the information about one or more Tair (Redis OSS-compatible) instances.
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the overview information of one or more Tair (Redis OSS-compatible) instances.
   * 
   * @remarks
   * If you do not specify the InstanceIds parameter when you call this operation, the overview information of all instances is returned.
   * > This operation returns non-paged results.
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
   * Queries the overview information of one or more Tair (Redis OSS-compatible) instances.
   * 
   * @remarks
   * If you do not specify the InstanceIds parameter when you call this operation, the overview information of all instances is returned.
   * > This operation returns non-paged results.
   * 
   * @param request - DescribeInstancesOverviewRequest
   * @returns DescribeInstancesOverviewResponse
   */
  async describeInstancesOverview(request: $_model.DescribeInstancesOverviewRequest): Promise<$_model.DescribeInstancesOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesOverviewWithOptions(request, runtime);
  }

  /**
   * Queries the internal bandwidth of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can call the [EnableAdditionalBandwidth](https://help.aliyun.com/document_detail/473771.html) operation to increase the internal bandwidth of an instance.
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
   * Queries the internal bandwidth of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can call the [EnableAdditionalBandwidth](https://help.aliyun.com/document_detail/473771.html) operation to increase the internal bandwidth of an instance.
   * 
   * @param request - DescribeIntranetAttributeRequest
   * @returns DescribeIntranetAttributeResponse
   */
  async describeIntranetAttribute(request: $_model.DescribeIntranetAttributeRequest): Promise<$_model.DescribeIntranetAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIntranetAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the logical topology of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * This parameter is supported only for cluster and read/write splitting instances.
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
   * Queries the logical topology of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * This parameter is supported only for cluster and read/write splitting instances.
   * 
   * @param request - DescribeLogicInstanceTopologyRequest
   * @returns DescribeLogicInstanceTopologyResponse
   */
  async describeLogicInstanceTopology(request: $_model.DescribeLogicInstanceTopologyRequest): Promise<$_model.DescribeLogicInstanceTopologyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogicInstanceTopologyWithOptions(request, runtime);
  }

  /**
   * Queries the metrics of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * >  To improve user experience, Tair has upgraded the monitoring metrics. The DescribeMonitorItems operation is phased out. For more information, see [The DescribeMonitorItems operation of Tair (Redis OSS-compatible) is phased out](https://help.aliyun.com/document_detail/189893.html).
   * After you call this operation to retrieve a list of metrics for a specified instance, you can call the [DescribeHistoryMonitorValues](https://help.aliyun.com/document_detail/473827.html) operation to query the monitoring history of the instance.
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
   * Queries the metrics of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * >  To improve user experience, Tair has upgraded the monitoring metrics. The DescribeMonitorItems operation is phased out. For more information, see [The DescribeMonitorItems operation of Tair (Redis OSS-compatible) is phased out](https://help.aliyun.com/document_detail/189893.html).
   * After you call this operation to retrieve a list of metrics for a specified instance, you can call the [DescribeHistoryMonitorValues](https://help.aliyun.com/document_detail/473827.html) operation to query the monitoring history of the instance.
   * 
   * @param request - DescribeMonitorItemsRequest
   * @returns DescribeMonitorItemsResponse
   */
  async describeMonitorItems(request: $_model.DescribeMonitorItemsRequest): Promise<$_model.DescribeMonitorItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitorItemsWithOptions(request, runtime);
  }

  /**
   * Queries the basic information about a parameter template.
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
   * Queries the basic information about a parameter template.
   * 
   * @param request - DescribeParameterGroupRequest
   * @returns DescribeParameterGroupResponse
   */
  async describeParameterGroup(request: $_model.DescribeParameterGroupRequest): Promise<$_model.DescribeParameterGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterGroupWithOptions(request, runtime);
  }

  /**
   * Queries the parameters that can be configured in parameter templates across different database versions.
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
   * Queries the parameters that can be configured in parameter templates across different database versions.
   * 
   * @param request - DescribeParameterGroupSupportParamRequest
   * @returns DescribeParameterGroupSupportParamResponse
   */
  async describeParameterGroupSupportParam(request: $_model.DescribeParameterGroupSupportParamRequest): Promise<$_model.DescribeParameterGroupSupportParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterGroupSupportParamWithOptions(request, runtime);
  }

  /**
   * Queries the information about the parameters that can be configured in a parameter template, such as the default values, value ranges, and descriptions.
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
   * Queries the information about the parameters that can be configured in a parameter template, such as the default values, value ranges, and descriptions.
   * 
   * @param request - DescribeParameterGroupTemplateListRequest
   * @returns DescribeParameterGroupTemplateListResponse
   */
  async describeParameterGroupTemplateList(request: $_model.DescribeParameterGroupTemplateListRequest): Promise<$_model.DescribeParameterGroupTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterGroupTemplateListWithOptions(request, runtime);
  }

  /**
   * Queries a list of available parameter templates.
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
   * Queries a list of available parameter templates.
   * 
   * @param request - DescribeParameterGroupsRequest
   * @returns DescribeParameterGroupsResponse
   */
  async describeParameterGroups(request: $_model.DescribeParameterGroupsRequest): Promise<$_model.DescribeParameterGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the parameter modification history of a Tair (Redis OSS-compatible) instance.
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
   * Queries the parameter modification history of a Tair (Redis OSS-compatible) instance.
   * 
   * @param request - DescribeParameterModificationHistoryRequest
   * @returns DescribeParameterModificationHistoryResponse
   */
  async describeParameterModificationHistory(request: $_model.DescribeParameterModificationHistoryRequest): Promise<$_model.DescribeParameterModificationHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterModificationHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the parameters and their default values that are supported by Tair (Redis OSS-compatible) instances of different architectures and major versions.
   * 
   * @remarks
   * After you call this operation to query the parameters and default values of an instance, you can call the [ModifyInstanceConfig](https://help.aliyun.com/document_detail/473844.html) operation to reconfigure the parameters of the instance.
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
   * Queries the parameters and their default values that are supported by Tair (Redis OSS-compatible) instances of different architectures and major versions.
   * 
   * @remarks
   * After you call this operation to query the parameters and default values of an instance, you can call the [ModifyInstanceConfig](https://help.aliyun.com/document_detail/473844.html) operation to reconfigure the parameters of the instance.
   * 
   * @param request - DescribeParameterTemplatesRequest
   * @returns DescribeParameterTemplatesResponse
   */
  async describeParameterTemplates(request: $_model.DescribeParameterTemplatesRequest): Promise<$_model.DescribeParameterTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the configuration parameters and running parameters of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * This operation is applicable only to classic instances.
   * >  If the instance is deployed in cloud-native mode, you can use the [DescribeInstanceConfig](https://help.aliyun.com/document_detail/473846.html) operation to query the configuration and operational parameters of the instance.
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
   * Queries the configuration parameters and running parameters of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * This operation is applicable only to classic instances.
   * >  If the instance is deployed in cloud-native mode, you can use the [DescribeInstanceConfig](https://help.aliyun.com/document_detail/473846.html) operation to query the configuration and operational parameters of the instance.
   * 
   * @param request - DescribeParametersRequest
   * @returns DescribeParametersResponse
   */
  async describeParameters(request: $_model.DescribeParametersRequest): Promise<$_model.DescribeParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  /**
   * Queries the fees that you must pay when you create, upgrade, or renew a Tair (Redis OSS-compatible) instance.
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
   * Queries the fees that you must pay when you create, upgrade, or renew a Tair (Redis OSS-compatible) instance.
   * 
   * @param request - DescribePriceRequest
   * @returns DescribePriceResponse
   */
  async describePrice(request: $_model.DescribePriceRequest): Promise<$_model.DescribePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  /**
   * Queries the regions in which ApsaraDB for Redis instances can be created.
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
   * Queries the regions in which ApsaraDB for Redis instances can be created.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the role, type, minor version, and zone of each node in a Tair (Redis OSS-compatible) instance.
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
   * Queries the role, type, minor version, and zone of each node in a Tair (Redis OSS-compatible) instance.
   * 
   * @param request - DescribeRoleZoneInfoRequest
   * @returns DescribeRoleZoneInfoResponse
   */
  async describeRoleZoneInfo(request: $_model.DescribeRoleZoneInfoRequest): Promise<$_model.DescribeRoleZoneInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRoleZoneInfoWithOptions(request, runtime);
  }

  /**
   * Queries the operational logs of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * For more information about how to view the operational logs of an instance in the Tair (Redis OSS-compatible) console, see [View active logs](https://help.aliyun.com/document_detail/101713.html).
   * This operation can be called up to 100 times per minute.
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
   * Queries the operational logs of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * For more information about how to view the operational logs of an instance in the Tair (Redis OSS-compatible) console, see [View active logs](https://help.aliyun.com/document_detail/101713.html).
   * This operation can be called up to 100 times per minute.
   * 
   * @param request - DescribeRunningLogRecordsRequest
   * @returns DescribeRunningLogRecordsResponse
   */
  async describeRunningLogRecords(request: $_model.DescribeRunningLogRecordsRequest): Promise<$_model.DescribeRunningLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRunningLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the security groups that are added to the whitelists of a Tair (Redis OSS-compatible) instance.
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
   * Queries the security groups that are added to the whitelists of a Tair (Redis OSS-compatible) instance.
   * 
   * @param request - DescribeSecurityGroupConfigurationRequest
   * @returns DescribeSecurityGroupConfigurationResponse
   */
  async describeSecurityGroupConfiguration(request: $_model.DescribeSecurityGroupConfigurationRequest): Promise<$_model.DescribeSecurityGroupConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityGroupConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the IP address whitelists of a Tair (Redis OSS-compatible) instance.
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
   * Queries the IP address whitelists of a Tair (Redis OSS-compatible) instance.
   * 
   * @param request - DescribeSecurityIpsRequest
   * @returns DescribeSecurityIpsResponse
   */
  async describeSecurityIps(request: $_model.DescribeSecurityIpsRequest): Promise<$_model.DescribeSecurityIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityIpsWithOptions(request, runtime);
  }

  /**
   * Queries whether the related service-linked role is created for Tair (Redis OSS-compatible) in the current account.
   * 
   * @remarks
   * You can call this operation to query whether the service-lined role AliyunServiceRoleForKvstore is created for Tair (Redis OSS-compatible). For more information, see [Service-linked role of Tair (Redis OSS-compatible)](https://help.aliyun.com/document_detail/184337.html).
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
   * Queries whether the related service-linked role is created for Tair (Redis OSS-compatible) in the current account.
   * 
   * @remarks
   * You can call this operation to query whether the service-lined role AliyunServiceRoleForKvstore is created for Tair (Redis OSS-compatible). For more information, see [Service-linked role of Tair (Redis OSS-compatible)](https://help.aliyun.com/document_detail/184337.html).
   * 
   * @param request - DescribeServiceLinkedRoleExistsRequest
   * @returns DescribeServiceLinkedRoleExistsResponse
   */
  async describeServiceLinkedRoleExists(request: $_model.DescribeServiceLinkedRoleExistsRequest): Promise<$_model.DescribeServiceLinkedRoleExistsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceLinkedRoleExistsWithOptions(request, runtime);
  }

  /**
   * Queries the slow query logs of a Tair (Redis OSS-compatible) instance that are generated within a specified period of time.
   * 
   * @remarks
   * You can also query slow logs in the Tair (Redis OSS-compatible) console. For more information, see [Query slow logs of an instance](https://help.aliyun.com/document_detail/95874.html). This operation can be called up to 100 times per minute.
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
   * Queries the slow query logs of a Tair (Redis OSS-compatible) instance that are generated within a specified period of time.
   * 
   * @remarks
   * You can also query slow logs in the Tair (Redis OSS-compatible) console. For more information, see [Query slow logs of an instance](https://help.aliyun.com/document_detail/95874.html). This operation can be called up to 100 times per minute.
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: $_model.DescribeSlowLogRecordsRequest): Promise<$_model.DescribeSlowLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries all tags in a region.
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
   * Queries all tags in a region.
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
   * Queries the information of one or more Tair (Redis OSS-compatible) KVCache instances.
   * 
   * @remarks
   * You can call this operation to query the following Tair (Redis OSS-compatible) KVCache instances: inference operator instances, virtual cluster instances, and cache service instances.
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
   * Queries the information of one or more Tair (Redis OSS-compatible) KVCache instances.
   * 
   * @remarks
   * You can call this operation to query the following Tair (Redis OSS-compatible) KVCache instances: inference operator instances, virtual cluster instances, and cache service instances.
   * 
   * @param request - DescribeTairKVCacheInferInstancesRequest
   * @returns DescribeTairKVCacheInferInstancesResponse
   */
  async describeTairKVCacheInferInstances(request: $_model.DescribeTairKVCacheInferInstancesRequest): Promise<$_model.DescribeTairKVCacheInferInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTairKVCacheInferInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the zones available for Tair (Redis OSS-compatible).
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
   * Queries the zones available for Tair (Redis OSS-compatible).
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Permanently destroys instances and their data backups in the recycle bin.
   * 
   * @remarks
   * Before you call this operation, instances must be available in the recycle bin. For more information, see [Instance recycle bin](https://help.aliyun.com/document_detail/86114.html).
   * > Calling this operation permanently deletes the instances and their data backups in the recycle bin.
   * **
   * **Warning** After you destroy the instance, data in the instance is permanently deleted and can no longer be restored. Proceed with caution.
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
   * Permanently destroys instances and their data backups in the recycle bin.
   * 
   * @remarks
   * Before you call this operation, instances must be available in the recycle bin. For more information, see [Instance recycle bin](https://help.aliyun.com/document_detail/86114.html).
   * > Calling this operation permanently deletes the instances and their data backups in the recycle bin.
   * **
   * **Warning** After you destroy the instance, data in the instance is permanently deleted and can no longer be restored. Proceed with caution.
   * 
   * @param request - DestroyInstanceRequest
   * @returns DestroyInstanceResponse
   */
  async destroyInstance(request: $_model.DestroyInstanceRequest): Promise<$_model.DestroyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.destroyInstanceWithOptions(request, runtime);
  }

  /**
   * Adjusts the bandwidth of a Tair (Redis OSS-compatible) instance. Only the pay-as-you-go billing method is supported for bandwidth adjustment. You need to specify the InstanceId, NodeId (optional), Bandwidth, and ChargeType parameters.
   * 
   * @remarks
   * If you enable the bandwidth auto scaling feature and call this operation at the same time, bandwidth auto scaling takes precedence. During bandwidth scale-back, the instance is scaled back to the default bandwidth of the instance type. For more information about the limits, costs, and FAQ about this feature, see [Adjust the bandwidth of an instance](https://help.aliyun.com/document_detail/102588.html).
   * >  Before you call this operation, you can call the [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/473782.html) operation to query the current bandwidth of each data node in an instance.
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
   * Adjusts the bandwidth of a Tair (Redis OSS-compatible) instance. Only the pay-as-you-go billing method is supported for bandwidth adjustment. You need to specify the InstanceId, NodeId (optional), Bandwidth, and ChargeType parameters.
   * 
   * @remarks
   * If you enable the bandwidth auto scaling feature and call this operation at the same time, bandwidth auto scaling takes precedence. During bandwidth scale-back, the instance is scaled back to the default bandwidth of the instance type. For more information about the limits, costs, and FAQ about this feature, see [Adjust the bandwidth of an instance](https://help.aliyun.com/document_detail/102588.html).
   * >  Before you call this operation, you can call the [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/473782.html) operation to query the current bandwidth of each data node in an instance.
   * 
   * @param request - EnableAdditionalBandwidthRequest
   * @returns EnableAdditionalBandwidthResponse
   */
  async enableAdditionalBandwidth(request: $_model.EnableAdditionalBandwidthRequest): Promise<$_model.EnableAdditionalBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAdditionalBandwidthWithOptions(request, runtime);
  }

  /**
   * Clears all expired keys in a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * For more information about how to clear the expired keys in the Tair (Redis OSS-compatible) console, see [Clear data](https://help.aliyun.com/document_detail/43881.html).
   * >  Expired keys cannot be recovered after they are deleted. Exercise caution when you call this operation.
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
   * Clears all expired keys in a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * For more information about how to clear the expired keys in the Tair (Redis OSS-compatible) console, see [Clear data](https://help.aliyun.com/document_detail/43881.html).
   * >  Expired keys cannot be recovered after they are deleted. Exercise caution when you call this operation.
   * 
   * @param request - FlushExpireKeysRequest
   * @returns FlushExpireKeysResponse
   */
  async flushExpireKeys(request: $_model.FlushExpireKeysRequest): Promise<$_model.FlushExpireKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.flushExpireKeysWithOptions(request, runtime);
  }

  /**
   * Clears the data of a Tair (Redis OSS-compatible) instance. The cleared data cannot be restored.
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
   * Clears the data of a Tair (Redis OSS-compatible) instance. The cleared data cannot be restored.
   * 
   * @param request - FlushInstanceRequest
   * @returns FlushInstanceResponse
   */
  async flushInstance(request: $_model.FlushInstanceRequest): Promise<$_model.FlushInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.flushInstanceWithOptions(request, runtime);
  }

  /**
   * Cleans the data of specified databases in a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * Each Tair (Redis OSS-compatible) instance can contain up to 256 databases named from DB0 to DB255. Each database does not have a separate memory usage limit. The memory capacity that a database can use is subject to the total memory limit of the instance. You can execute the `SELECT` statement to switch between databases. For more information, see [What is the size of each database on a Tair (Redis OSS-compatible) instance, and how can I choose databases?](https://help.aliyun.com/document_detail/38688.html)
   * >  This operation is available only for cloud-native instances that use cloud disks.
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
   * Cleans the data of specified databases in a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * Each Tair (Redis OSS-compatible) instance can contain up to 256 databases named from DB0 to DB255. Each database does not have a separate memory usage limit. The memory capacity that a database can use is subject to the total memory limit of the instance. You can execute the `SELECT` statement to switch between databases. For more information, see [What is the size of each database on a Tair (Redis OSS-compatible) instance, and how can I choose databases?](https://help.aliyun.com/document_detail/38688.html)
   * >  This operation is available only for cloud-native instances that use cloud disks.
   * 
   * @param request - FlushInstanceForDBRequest
   * @returns FlushInstanceForDBResponse
   */
  async flushInstanceForDB(request: $_model.FlushInstanceForDBRequest): Promise<$_model.FlushInstanceForDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.flushInstanceForDBWithOptions(request, runtime);
  }

  /**
   * Modifies the permissions of an account for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * > 
   * *   Only Tair (Redis OSS-compatible) instances of Redis 4.0 or later are supported.
   * *   The Tair (Redis OSS-compatible) instance must be in the running state.
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
   * Modifies the permissions of an account for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * > 
   * *   Only Tair (Redis OSS-compatible) instances of Redis 4.0 or later are supported.
   * *   The Tair (Redis OSS-compatible) instance must be in the running state.
   * 
   * @param request - GrantAccountPrivilegeRequest
   * @returns GrantAccountPrivilegeResponse
   */
  async grantAccountPrivilege(request: $_model.GrantAccountPrivilegeRequest): Promise<$_model.GrantAccountPrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantAccountPrivilegeWithOptions(request, runtime);
  }

  /**
   * Assigns a service-linked role to Tair (Redis OSS-compatible).
   * 
   * @remarks
   * The log management feature of Tair (Redis OSS-compatible) requires the resources of [Simple Log Service](https://help.aliyun.com/document_detail/48869.html). To use the log management feature, you can call this operation to assign the AliyunServiceRoleForKvstore service-linked role to Tair (Redis OSS-compatible). For more information, see [Service-linked role of Tair (Redis OSS-compatible)](https://help.aliyun.com/document_detail/184337.html).
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
   * Assigns a service-linked role to Tair (Redis OSS-compatible).
   * 
   * @remarks
   * The log management feature of Tair (Redis OSS-compatible) requires the resources of [Simple Log Service](https://help.aliyun.com/document_detail/48869.html). To use the log management feature, you can call this operation to assign the AliyunServiceRoleForKvstore service-linked role to Tair (Redis OSS-compatible). For more information, see [Service-linked role of Tair (Redis OSS-compatible)](https://help.aliyun.com/document_detail/184337.html).
   * 
   * @param request - InitializeKvstorePermissionRequest
   * @returns InitializeKvstorePermissionResponse
   */
  async initializeKvstorePermission(request: $_model.InitializeKvstorePermissionRequest): Promise<$_model.InitializeKvstorePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeKvstorePermissionWithOptions(request, runtime);
  }

  /**
   * Queries the relationships between Tair (Redis OSS-compatible) instances and tags.
   * 
   * @remarks
   * You can also query the relationships between instances and tags in the Tair (Redis OSS-compatible) console. For more information, see [Filter Tair (Redis OSS-compatible) instances by tag](https://help.aliyun.com/document_detail/119160.html) and [View tags bound to an instance](https://help.aliyun.com/document_detail/134038.html).
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
   * Queries the relationships between Tair (Redis OSS-compatible) instances and tags.
   * 
   * @remarks
   * You can also query the relationships between instances and tags in the Tair (Redis OSS-compatible) console. For more information, see [Filter Tair (Redis OSS-compatible) instances by tag](https://help.aliyun.com/document_detail/119160.html) and [View tags bound to an instance](https://help.aliyun.com/document_detail/134038.html).
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Places a write lock on an instance. After the instance is locked, it supports only read operations.
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
   * Places a write lock on an instance. After the instance is locked, it supports only read operations.
   * 
   * @param request - LockDBInstanceWriteRequest
   * @returns LockDBInstanceWriteResponse
   */
  async lockDBInstanceWrite(request: $_model.LockDBInstanceWriteRequest): Promise<$_model.LockDBInstanceWriteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lockDBInstanceWriteWithOptions(request, runtime);
  }

  /**
   * Simulates database node failures.
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
   * Simulates database node failures.
   * 
   * @param request - MasterNodeShutDownFailOverRequest
   * @returns MasterNodeShutDownFailOverResponse
   */
  async masterNodeShutDownFailOver(request: $_model.MasterNodeShutDownFailOverRequest): Promise<$_model.MasterNodeShutDownFailOverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.masterNodeShutDownFailOverWithOptions(request, runtime);
  }

  /**
   * Migrates a Tair (Redis OSS-compatible) instance to another zone in the same region.
   * 
   * @remarks
   * Before you call this operation, you must release the public endpoint (if any) of the instance. For more information, see [Migrate an instance across zones](https://help.aliyun.com/document_detail/106272.html).
   * > 
   * *   If the network type of an Tair (Redis OSS-compatible) instance is switched from classic network to Virtual Private Cloud (VPC), and the classic network endpoint is retained, you can migrate the instance across zones only after the classic network endpoint is released upon expiration.
   * *   After the instance is migrated, the endpoint of the instance remains unchanged. However, the virtual IP address (VIP) is changed. We recommend that you use the endpoint instead of the VIP to connect to the instance.
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
   * Migrates a Tair (Redis OSS-compatible) instance to another zone in the same region.
   * 
   * @remarks
   * Before you call this operation, you must release the public endpoint (if any) of the instance. For more information, see [Migrate an instance across zones](https://help.aliyun.com/document_detail/106272.html).
   * > 
   * *   If the network type of an Tair (Redis OSS-compatible) instance is switched from classic network to Virtual Private Cloud (VPC), and the classic network endpoint is retained, you can migrate the instance across zones only after the classic network endpoint is released upon expiration.
   * *   After the instance is migrated, the endpoint of the instance remains unchanged. However, the virtual IP address (VIP) is changed. We recommend that you use the endpoint instead of the VIP to connect to the instance.
   * 
   * @param request - MigrateToOtherZoneRequest
   * @returns MigrateToOtherZoneResponse
   */
  async migrateToOtherZone(request: $_model.MigrateToOtherZoneRequest): Promise<$_model.MigrateToOtherZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.migrateToOtherZoneWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an account for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * This operation is supported only for instances that run Redis 4.0 or later.
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
   * Modifies the description of an account for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * This operation is supported only for instances that run Redis 4.0 or later.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * Changes the password of a specific account for a Tair (Redis OSS-compatible) instance.
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
   * Changes the password of a specific account for a Tair (Redis OSS-compatible) instance.
   * 
   * @param request - ModifyAccountPasswordRequest
   * @returns ModifyAccountPasswordResponse
   */
  async modifyAccountPassword(request: $_model.ModifyAccountPasswordRequest): Promise<$_model.ModifyAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountPasswordWithOptions(request, runtime);
  }

  /**
   * ModifyActiveOperationMaintainConf
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
   * ModifyActiveOperationMaintainConf
   * 
   * @param request - ModifyActiveOperationMaintainConfigRequest
   * @returns ModifyActiveOperationMaintainConfigResponse
   */
  async modifyActiveOperationMaintainConfig(request: $_model.ModifyActiveOperationMaintainConfigRequest): Promise<$_model.ModifyActiveOperationMaintainConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationMaintainConfigWithOptions(request, runtime);
  }

  /**
   * Changes the scheduled switchover time of an O&M task.
   * 
   * @remarks
   * You can receive notifications for Tair (Redis OSS-compatible) events such as instance migration and version upgrade by text message, phone call, email, internal message, or by using the console. You can also change the scheduled switchover time of a task by using the console. For more information, see [Query or manage pending events](https://help.aliyun.com/document_detail/187022.html).
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
   * Changes the scheduled switchover time of an O&M task.
   * 
   * @remarks
   * You can receive notifications for Tair (Redis OSS-compatible) events such as instance migration and version upgrade by text message, phone call, email, internal message, or by using the console. You can also change the scheduled switchover time of a task by using the console. For more information, see [Query or manage pending events](https://help.aliyun.com/document_detail/187022.html).
   * 
   * @param request - ModifyActiveOperationTaskRequest
   * @returns ModifyActiveOperationTaskResponse
   */
  async modifyActiveOperationTask(request: $_model.ModifyActiveOperationTaskRequest): Promise<$_model.ModifyActiveOperationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationTaskWithOptions(request, runtime);
  }

  /**
   * Modifies the switching time of scheduled O\\\\\\&M events for an instance.
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
   * Modifies the switching time of scheduled O\\\\\\&M events for an instance.
   * 
   * @param request - ModifyActiveOperationTasksRequest
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasks(request: $_model.ModifyActiveOperationTasksRequest): Promise<$_model.ModifyActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Enables the audit log feature or modifies the audit log settings for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of the audit log feature.
   * Before you call this operation, make sure that the Tair (Redis OSS-compatible) instance meets the following requirements:
   * *   The instance is a Tair (Redis OSS-compatible) Community Edition instance or Tair [DRAM-based instance](https://help.aliyun.com/document_detail/126164.html).
   * *   The engine version of the instance is Redis 4.0 or later, and the latest minor version is used. You can call the [DescribeEngineVersion](https://help.aliyun.com/document_detail/473781.html) operation to check whether the instance uses the latest major version and minor version.
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
   * Enables the audit log feature or modifies the audit log settings for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/54532.html) of the audit log feature.
   * Before you call this operation, make sure that the Tair (Redis OSS-compatible) instance meets the following requirements:
   * *   The instance is a Tair (Redis OSS-compatible) Community Edition instance or Tair [DRAM-based instance](https://help.aliyun.com/document_detail/126164.html).
   * *   The engine version of the instance is Redis 4.0 or later, and the latest minor version is used. You can call the [DescribeEngineVersion](https://help.aliyun.com/document_detail/473781.html) operation to check whether the instance uses the latest major version and minor version.
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
   * Modifies the automatic backup policy of a Tair (Redis OSS-compatible) instance.
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
   * Modifies the automatic backup policy of a Tair (Redis OSS-compatible) instance.
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the setting related to the automatic update of minor versions for an instance.
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
   * Modifies the setting related to the automatic update of minor versions for an instance.
   * 
   * @param request - ModifyDBInstanceAutoUpgradeRequest
   * @returns ModifyDBInstanceAutoUpgradeResponse
   */
  async modifyDBInstanceAutoUpgrade(request: $_model.ModifyDBInstanceAutoUpgradeRequest): Promise<$_model.ModifyDBInstanceAutoUpgradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceAutoUpgradeWithOptions(request, runtime);
  }

  /**
   * Changes the endpoint or port number of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can also modify the endpoint or port number of an instance in the Tair (Redis OSS-compatible) console. For more information, see [Change the endpoint or port number of an instance](https://help.aliyun.com/document_detail/85683.html).
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
   * Changes the endpoint or port number of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can also modify the endpoint or port number of an instance in the Tair (Redis OSS-compatible) console. For more information, see [Change the endpoint or port number of an instance](https://help.aliyun.com/document_detail/85683.html).
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionString(request: $_model.ModifyDBInstanceConnectionStringRequest): Promise<$_model.ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  /**
   * Modifies the monitoring granularity of a Tair (Redis OSS-compatible) instance.
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
   * Modifies the monitoring granularity of a Tair (Redis OSS-compatible) instance.
   * 
   * @param request - ModifyDBInstanceMonitorRequest
   * @returns ModifyDBInstanceMonitorResponse
   */
  async modifyDBInstanceMonitor(request: $_model.ModifyDBInstanceMonitorRequest): Promise<$_model.ModifyDBInstanceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceMonitorWithOptions(request, runtime);
  }

  /**
   * 事件中心修改事件信息
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
   * 事件中心修改事件信息
   * 
   * @param request - ModifyEventInfoRequest
   * @returns ModifyEventInfoResponse
   */
  async modifyEventInfo(request: $_model.ModifyEventInfoRequest): Promise<$_model.ModifyEventInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEventInfoWithOptions(request, runtime);
  }

  /**
   * Modifies a global IP whitelist template.
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
   * Modifies a global IP whitelist template.
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
   * Modifies the specific information of a Tair (Redis OSS-compatible) instance, such as the password and the name.
   * 
   * @remarks
   * You can also modify the information of an instance in the Tair (Redis OSS-compatible) console. For more information, see [Change or reset the password](https://help.aliyun.com/document_detail/43874.html).
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
   * Modifies the specific information of a Tair (Redis OSS-compatible) instance, such as the password and the name.
   * 
   * @remarks
   * You can also modify the information of an instance in the Tair (Redis OSS-compatible) console. For more information, see [Change or reset the password](https://help.aliyun.com/document_detail/43874.html).
   * 
   * @param request - ModifyInstanceAttributeRequest
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttribute(request: $_model.ModifyInstanceAttributeRequest): Promise<$_model.ModifyInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Enables or disables auto-renewal for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * > Auto-renewal is triggered seven days before the expiration date of the instance.
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
   * Enables or disables auto-renewal for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * > Auto-renewal is triggered seven days before the expiration date of the instance.
   * 
   * @param request - ModifyInstanceAutoRenewalAttributeRequest
   * @returns ModifyInstanceAutoRenewalAttributeResponse
   */
  async modifyInstanceAutoRenewalAttribute(request: $_model.ModifyInstanceAutoRenewalAttributeRequest): Promise<$_model.ModifyInstanceAutoRenewalAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  /**
   * Sets the intended bandwidth value of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   *   Before you call this operation, make sure that you understand the billing methods and pricing of instance bandwidth. Tair (Redis OSS-compatible) charges fees per hour based on the amount and usage duration of the extra bandwidth that you purchase. The fees vary based on the region that you select. For more information, see [Billable items](https://help.aliyun.com/document_detail/54532.html).
   * *   The bandwidth of an instance or a shard can be increased by up to six times the default bandwidth of the instance, but the increase in bandwidth cannot exceed 192 Mbit/s. For example, if the default bandwidth of a Tair DRAM-based master-replica instance equipped with 2 GB of memory is 96 Mbit/s, you can increase the bandwidth of the instance by up to 192 Mbit/s. As a result, the maximum bandwidth of the instance is 288 Mbit/s. If the default bandwidth of a Redis Open-Source Edition master-replica instance equipped with 256 MB of memory is 10 Mbit/s, you can increase the bandwidth of the instance by up to 60 Mbit/s. As a result, the maximum bandwidth of the instance is 70 Mbit/s.
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
   * Sets the intended bandwidth value of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   *   Before you call this operation, make sure that you understand the billing methods and pricing of instance bandwidth. Tair (Redis OSS-compatible) charges fees per hour based on the amount and usage duration of the extra bandwidth that you purchase. The fees vary based on the region that you select. For more information, see [Billable items](https://help.aliyun.com/document_detail/54532.html).
   * *   The bandwidth of an instance or a shard can be increased by up to six times the default bandwidth of the instance, but the increase in bandwidth cannot exceed 192 Mbit/s. For example, if the default bandwidth of a Tair DRAM-based master-replica instance equipped with 2 GB of memory is 96 Mbit/s, you can increase the bandwidth of the instance by up to 192 Mbit/s. As a result, the maximum bandwidth of the instance is 288 Mbit/s. If the default bandwidth of a Redis Open-Source Edition master-replica instance equipped with 256 MB of memory is 10 Mbit/s, you can increase the bandwidth of the instance by up to 60 Mbit/s. As a result, the maximum bandwidth of the instance is 70 Mbit/s.
   * 
   * @param request - ModifyInstanceBandwidthRequest
   * @returns ModifyInstanceBandwidthResponse
   */
  async modifyInstanceBandwidth(request: $_model.ModifyInstanceBandwidthRequest): Promise<$_model.ModifyInstanceBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceBandwidthWithOptions(request, runtime);
  }

  /**
   * Modifies the parameter settings of a Tair (Redis OSS-compatible) instance.
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
   * Modifies the parameter settings of a Tair (Redis OSS-compatible) instance.
   * 
   * @param request - ModifyInstanceConfigRequest
   * @returns ModifyInstanceConfigResponse
   */
  async modifyInstanceConfig(request: $_model.ModifyInstanceConfigRequest): Promise<$_model.ModifyInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the maintenance window of an Tair (Redis OSS-compatible) instance. Alibaba Cloud maintains Tair (Redis OSS-compatible) instances during the specified maintenance window.
   * 
   * @remarks
   * You can also modify the maintenance window of an instance in the Tair (Redis OSS-compatible) console. For more information, see [Set a maintenance window](https://help.aliyun.com/document_detail/55252.html).
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
   * Modifies the maintenance window of an Tair (Redis OSS-compatible) instance. Alibaba Cloud maintains Tair (Redis OSS-compatible) instances during the specified maintenance window.
   * 
   * @remarks
   * You can also modify the maintenance window of an instance in the Tair (Redis OSS-compatible) console. For more information, see [Set a maintenance window](https://help.aliyun.com/document_detail/55252.html).
   * 
   * @param request - ModifyInstanceMaintainTimeRequest
   * @returns ModifyInstanceMaintainTimeResponse
   */
  async modifyInstanceMaintainTime(request: $_model.ModifyInstanceMaintainTimeRequest): Promise<$_model.ModifyInstanceMaintainTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceMaintainTimeWithOptions(request, runtime);
  }

  /**
   * Upgrades the major version of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * For more information about the precautions and impacts of the upgrade, see [Upgrade the major version](https://help.aliyun.com/document_detail/101764.html).
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
   * Upgrades the major version of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * For more information about the precautions and impacts of the upgrade, see [Upgrade the major version](https://help.aliyun.com/document_detail/101764.html).
   * 
   * @param request - ModifyInstanceMajorVersionRequest
   * @returns ModifyInstanceMajorVersionResponse
   */
  async modifyInstanceMajorVersion(request: $_model.ModifyInstanceMajorVersionRequest): Promise<$_model.ModifyInstanceMajorVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceMajorVersionWithOptions(request, runtime);
  }

  /**
   * Updates the minor version of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * The procedure to update the minor version of an instance varies based on types of Tair (Redis OSS-compatible) instances. For more information, see [Upgrade the minor version](https://help.aliyun.com/document_detail/56450.html).
   * > 
   * *   Before you call this operation, you can call the [DescribeEngineVersion](https://help.aliyun.com/document_detail/473781.html) operation to query the minor version of the current instance.
   * *   When you switch your workloads over from the original instance to a new instance or from the master node to the replica node in the original instance, you may experience disconnections that last a few seconds. The original instance stays in the read-only state within 60 seconds until all data is synchronized. We recommend that you upgrade the original instance during off-peak hours and make sure that your application is configured to automatically reconnect to the original instance.
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
   * Updates the minor version of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * The procedure to update the minor version of an instance varies based on types of Tair (Redis OSS-compatible) instances. For more information, see [Upgrade the minor version](https://help.aliyun.com/document_detail/56450.html).
   * > 
   * *   Before you call this operation, you can call the [DescribeEngineVersion](https://help.aliyun.com/document_detail/473781.html) operation to query the minor version of the current instance.
   * *   When you switch your workloads over from the original instance to a new instance or from the master node to the replica node in the original instance, you may experience disconnections that last a few seconds. The original instance stays in the read-only state within 60 seconds until all data is synchronized. We recommend that you upgrade the original instance during off-peak hours and make sure that your application is configured to automatically reconnect to the original instance.
   * 
   * @param request - ModifyInstanceMinorVersionRequest
   * @returns ModifyInstanceMinorVersionResponse
   */
  async modifyInstanceMinorVersion(request: $_model.ModifyInstanceMinorVersionRequest): Promise<$_model.ModifyInstanceMinorVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceMinorVersionWithOptions(request, runtime);
  }

  /**
   * Extends the retention period of the classic network endpoint of a Tair (Redis OSS-compatible) instance. You can call this operation after you change the network type of the Tair (Redis OSS-compatible) instance from classic network to Virtual Private Cloud (VPC) with the classic network endpoint retained.
   * 
   * @remarks
   * You can also perform this operation in the Tair (Redis OSS-compatible) console. For more information, see [Change the expiration time for the endpoint of the classic network](https://help.aliyun.com/document_detail/60062.html).
   * > For more information about how to switch the network type of a Tair (Redis OSS-compatible) instance from classic network to VPC, see [SwitchNetwork](https://help.aliyun.com/document_detail/473797.html).
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
   * Extends the retention period of the classic network endpoint of a Tair (Redis OSS-compatible) instance. You can call this operation after you change the network type of the Tair (Redis OSS-compatible) instance from classic network to Virtual Private Cloud (VPC) with the classic network endpoint retained.
   * 
   * @remarks
   * You can also perform this operation in the Tair (Redis OSS-compatible) console. For more information, see [Change the expiration time for the endpoint of the classic network](https://help.aliyun.com/document_detail/60062.html).
   * > For more information about how to switch the network type of a Tair (Redis OSS-compatible) instance from classic network to VPC, see [SwitchNetwork](https://help.aliyun.com/document_detail/473797.html).
   * 
   * @param request - ModifyInstanceNetExpireTimeRequest
   * @returns ModifyInstanceNetExpireTimeResponse
   */
  async modifyInstanceNetExpireTime(request: $_model.ModifyInstanceNetExpireTimeRequest): Promise<$_model.ModifyInstanceNetExpireTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceNetExpireTimeWithOptions(request, runtime);
  }

  /**
   * Applies a parameter template to specific instances. This indicates that the parameter values in the template take effect on the instances. After you modify a parameter template, you must reapply it to specific instances for the new parameter values to take effect on the instances.
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
   * Applies a parameter template to specific instances. This indicates that the parameter values in the template take effect on the instances. After you modify a parameter template, you must reapply it to specific instances for the new parameter values to take effect on the instances.
   * 
   * @param request - ModifyInstanceParameterRequest
   * @returns ModifyInstanceParameterResponse
   */
  async modifyInstanceParameter(request: $_model.ModifyInstanceParameterRequest): Promise<$_model.ModifyInstanceParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceParameterWithOptions(request, runtime);
  }

  /**
   * Enables Transport Layer Security (TLS) for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can also configure SSL encryption in the console. For more information, see [Configure SSL encryption](https://help.aliyun.com/document_detail/84898.html).
   * >  To specify the earliest supported SSL version, you can call the [ModifyInstanceConfig](https://help.aliyun.com/document_detail/473844.html) operation to modify the required parameter.
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
   * Enables Transport Layer Security (TLS) for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can also configure SSL encryption in the console. For more information, see [Configure SSL encryption](https://help.aliyun.com/document_detail/84898.html).
   * >  To specify the earliest supported SSL version, you can call the [ModifyInstanceConfig](https://help.aliyun.com/document_detail/473844.html) operation to modify the required parameter.
   * 
   * @param request - ModifyInstanceSSLRequest
   * @returns ModifyInstanceSSLResponse
   */
  async modifyInstanceSSL(request: $_model.ModifyInstanceSSLRequest): Promise<$_model.ModifyInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceSSLWithOptions(request, runtime);
  }

  /**
   * Changes the configurations of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * >  For more information about the procedure, impacts, limits, and fees of this operation, see [Change the configurations of an instance](https://help.aliyun.com/document_detail/26353.html).
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
   * Changes the configurations of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * >  For more information about the procedure, impacts, limits, and fees of this operation, see [Change the configurations of an instance](https://help.aliyun.com/document_detail/26353.html).
   * 
   * @param request - ModifyInstanceSpecRequest
   * @returns ModifyInstanceSpecResponse
   */
  async modifyInstanceSpec(request: $_model.ModifyInstanceSpecRequest): Promise<$_model.ModifyInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Enables transparent data encryption (TDE) for a Tair (Redis OSS-compatible) instance. You can use existing custom keys.
   * 
   * @remarks
   * > For more information about TDE and the impact of TDE, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
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
   * Enables transparent data encryption (TDE) for a Tair (Redis OSS-compatible) instance. You can use existing custom keys.
   * 
   * @remarks
   * > For more information about TDE and the impact of TDE, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * 
   * @param request - ModifyInstanceTDERequest
   * @returns ModifyInstanceTDEResponse
   */
  async modifyInstanceTDE(request: $_model.ModifyInstanceTDERequest): Promise<$_model.ModifyInstanceTDEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceTDEWithOptions(request, runtime);
  }

  /**
   * Enables or disables password-free access for a Tair (Redis OSS-compatible) instance. This way, you can connect to a database in a convenient and secure manner.
   * 
   * @remarks
   * When the password-free access feature is enabled, Elastic Compute Service (ECS) instances in the same virtual private cloud (VPC) can connect to the Tair instance without a password. You can also use the username and password to connect to the Tair instance.
   * > The Tair instance is deployed in a VPC. For more information, see [Enable password-free access](https://help.aliyun.com/document_detail/85168.html).
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
   * Enables or disables password-free access for a Tair (Redis OSS-compatible) instance. This way, you can connect to a database in a convenient and secure manner.
   * 
   * @remarks
   * When the password-free access feature is enabled, Elastic Compute Service (ECS) instances in the same virtual private cloud (VPC) can connect to the Tair instance without a password. You can also use the username and password to connect to the Tair instance.
   * > The Tair instance is deployed in a VPC. For more information, see [Enable password-free access](https://help.aliyun.com/document_detail/85168.html).
   * 
   * @param request - ModifyInstanceVpcAuthModeRequest
   * @returns ModifyInstanceVpcAuthModeResponse
   */
  async modifyInstanceVpcAuthMode(request: $_model.ModifyInstanceVpcAuthModeRequest): Promise<$_model.ModifyInstanceVpcAuthModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceVpcAuthModeWithOptions(request, runtime);
  }

  /**
   * Temporarily adjusts the internal bandwidth of a Tair (Redis OSS-compatible) instance that is deployed in a dedicated cluster.
   * 
   * @remarks
   * > 
   * *   This operation is applicable only to an instance that is deployed in a dedicated cluster. To adjust the bandwidth of a standard instance, call the [EnableAdditionalBandwidth](https://help.aliyun.com/document_detail/473771.html) operation.
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
   * Temporarily adjusts the internal bandwidth of a Tair (Redis OSS-compatible) instance that is deployed in a dedicated cluster.
   * 
   * @remarks
   * > 
   * *   This operation is applicable only to an instance that is deployed in a dedicated cluster. To adjust the bandwidth of a standard instance, call the [EnableAdditionalBandwidth](https://help.aliyun.com/document_detail/473771.html) operation.
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
   * Changes the resource group to which a Tair (Redis OSS-compatible) instance belongs.
   * 
   * @remarks
   * You can also perform this operation in the [Resource Management](https://resourcemanager.console.aliyun.com/resource-center) console. For more information, see [Transfer resources across resource groups](https://help.aliyun.com/document_detail/94487.html).
   * >  Resource Group allows you to sort resources owned by your Alibaba Cloud account into groups. This simplifies the resource and permission management within your Alibaba Cloud account. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
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
   * Changes the resource group to which a Tair (Redis OSS-compatible) instance belongs.
   * 
   * @remarks
   * You can also perform this operation in the [Resource Management](https://resourcemanager.console.aliyun.com/resource-center) console. For more information, see [Transfer resources across resource groups](https://help.aliyun.com/document_detail/94487.html).
   * >  Resource Group allows you to sort resources owned by your Alibaba Cloud account into groups. This simplifies the resource and permission management within your Alibaba Cloud account. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @param request - ModifyResourceGroupRequest
   * @returns ModifyResourceGroupResponse
   */
  async modifyResourceGroup(request: $_model.ModifyResourceGroupRequest): Promise<$_model.ModifyResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyResourceGroupWithOptions(request, runtime);
  }

  /**
   * Resets the security groups that are added to the whitelists of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * > After you call this operation, the security groups that are added to the whitelists of the Tair instance are deleted, and the security group specified by the **SecurityGroupId** parameter is added to the whitelists. For more information about how to reset security groups in the Tair console, see [Add security groups](https://help.aliyun.com/document_detail/148267.html).
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
   * Resets the security groups that are added to the whitelists of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * > After you call this operation, the security groups that are added to the whitelists of the Tair instance are deleted, and the security group specified by the **SecurityGroupId** parameter is added to the whitelists. For more information about how to reset security groups in the Tair console, see [Add security groups](https://help.aliyun.com/document_detail/148267.html).
   * 
   * @param request - ModifySecurityGroupConfigurationRequest
   * @returns ModifySecurityGroupConfigurationResponse
   */
  async modifySecurityGroupConfiguration(request: $_model.ModifySecurityGroupConfigurationRequest): Promise<$_model.ModifySecurityGroupConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityGroupConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelists of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can also modify the whitelists of an instance in the Tair (Redis OSS-compatible) console. For more information, see [Configure a whitelist for an instance](https://help.aliyun.com/document_detail/56464.html).
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
   * Modifies the IP address whitelists of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can also modify the whitelists of an instance in the Tair (Redis OSS-compatible) console. For more information, see [Configure a whitelist for an instance](https://help.aliyun.com/document_detail/56464.html).
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
   * Modifies the task information, such as the task execution time.
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
   * Modifies the task information, such as the task execution time.
   * 
   * @param request - ModifyTaskInfoRequest
   * @returns ModifyTaskInfoResponse
   */
  async modifyTaskInfo(request: $_model.ModifyTaskInfoRequest): Promise<$_model.ModifyTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTaskInfoWithOptions(request, runtime);
  }

  /**
   * Restarts the proxy node of a running Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * This operation supports only instances that use the read/write splitting architecture or the cluster architecture in proxy mode. For more information, see [Restart or rebuild proxy nodes](https://help.aliyun.com/document_detail/164224.html).
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
   * Restarts the proxy node of a running Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * This operation supports only instances that use the read/write splitting architecture or the cluster architecture in proxy mode. For more information, see [Restart or rebuild proxy nodes](https://help.aliyun.com/document_detail/164224.html).
   * 
   * @param request - RebootProxyRequest
   * @returns RebootProxyResponse
   */
  async rebootProxy(request: $_model.RebootProxyRequest): Promise<$_model.RebootProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootProxyWithOptions(request, runtime);
  }

  /**
   * Releases the private endpoint of an ApsaraDB for Redis cluster instance.
   * 
   * @remarks
   * In direct connection mode, clients can bypass proxy nodes and use private endpoints to connect to ApsaraDB for Redis instances. This is similar to the connection to a native Redis cluster. The direct connection mode can reduce communication overheads and the response time of ApsaraDB for Redis. For more information, see [Enable the direct connection mode](https://help.aliyun.com/document_detail/146901.html).
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
   * Releases the private endpoint of an ApsaraDB for Redis cluster instance.
   * 
   * @remarks
   * In direct connection mode, clients can bypass proxy nodes and use private endpoints to connect to ApsaraDB for Redis instances. This is similar to the connection to a native Redis cluster. The direct connection mode can reduce communication overheads and the response time of ApsaraDB for Redis. For more information, see [Enable the direct connection mode](https://help.aliyun.com/document_detail/146901.html).
   * 
   * @param request - ReleaseDirectConnectionRequest
   * @returns ReleaseDirectConnectionResponse
   */
  async releaseDirectConnection(request: $_model.ReleaseDirectConnectionRequest): Promise<$_model.ReleaseDirectConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseDirectConnectionWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can also release the public endpoint for an instance in the Tair (Redis OSS-compatible) console. For more information, see [Release public endpoints](https://help.aliyun.com/document_detail/125424.html).
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
   * Releases the public endpoint of a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * You can also release the public endpoint for an instance in the Tair (Redis OSS-compatible) console. For more information, see [Release public endpoints](https://help.aliyun.com/document_detail/125424.html).
   * 
   * @param request - ReleaseInstancePublicConnectionRequest
   * @returns ReleaseInstancePublicConnectionResponse
   */
  async releaseInstancePublicConnection(request: $_model.ReleaseInstancePublicConnectionRequest): Promise<$_model.ReleaseInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Removes a child instance from a distributed instance.
   * 
   * @remarks
   * The operation that you want to perform. Set the value to **RemoveSubInstance**.
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
   * Removes a child instance from a distributed instance.
   * 
   * @remarks
   * The operation that you want to perform. Set the value to **RemoveSubInstance**.
   * 
   * @param request - RemoveSubInstanceRequest
   * @returns RemoveSubInstanceResponse
   */
  async removeSubInstance(request: $_model.RemoveSubInstanceRequest): Promise<$_model.RemoveSubInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeSubInstanceWithOptions(request, runtime);
  }

  /**
   * This operation is not recommended now. The billing method for bandwidth of a Tair (Redis OSS-compatible) instance is changed to pay-as-you-go.
   * 
   * @remarks
   * You can adjust the bandwidth of an instance in the Tair (Redis OSS-compatible) console. For more information, see [Adjust the bandwidth of an instance](https://help.aliyun.com/document_detail/102588.html). You can also call the [EnableAdditionalBandwidth](https://help.aliyun.com/document_detail/473771.html) operation to purchase bandwidth for an instance.
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
   * This operation is not recommended now. The billing method for bandwidth of a Tair (Redis OSS-compatible) instance is changed to pay-as-you-go.
   * 
   * @remarks
   * You can adjust the bandwidth of an instance in the Tair (Redis OSS-compatible) console. For more information, see [Adjust the bandwidth of an instance](https://help.aliyun.com/document_detail/102588.html). You can also call the [EnableAdditionalBandwidth](https://help.aliyun.com/document_detail/473771.html) operation to purchase bandwidth for an instance.
   * 
   * @param request - RenewAdditionalBandwidthRequest
   * @returns RenewAdditionalBandwidthResponse
   */
  async renewAdditionalBandwidth(request: $_model.RenewAdditionalBandwidthRequest): Promise<$_model.RenewAdditionalBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewAdditionalBandwidthWithOptions(request, runtime);
  }

  /**
   * Renews an ApsaraDB for Redis instance.
   * 
   * @remarks
   * This operation is applicable only to subscription instances.
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
   * Renews an ApsaraDB for Redis instance.
   * 
   * @remarks
   * This operation is applicable only to subscription instances.
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
   * Resets the password of an account for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * >  Only Tair (Redis OSS-compatible) instances of Redis 4.0 or later are supported.
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
   * Resets the password of an account for a Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   * >  Only Tair (Redis OSS-compatible) instances of Redis 4.0 or later are supported.
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
   * Restarts a running ApsaraDB for Redis instance.
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
   * Restarts a running ApsaraDB for Redis instance.
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
   * Restores the data in a backup file to a specified Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   *   If your instance is a [DRAM-based instance](https://help.aliyun.com/document_detail/126164.html) or a [persistent memory-optimized instance](https://help.aliyun.com/document_detail/183956.html) and has the [data flashback](https://help.aliyun.com/document_detail/148479.html) feature enabled, you can call this operation to restore the entire instance or specific keys to a specific point in time accurate to the second. This way, you can achieve more fine-grained data restoration.
   * *   For other types of instances, we recommend that you call the [CreateInstance](https://help.aliyun.com/document_detail/473757.html) or [CreateTairInstance](https://help.aliyun.com/document_detail/473770.html) operation to restore the backup data to a new instance.
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
   * Restores the data in a backup file to a specified Tair (Redis OSS-compatible) instance.
   * 
   * @remarks
   *   If your instance is a [DRAM-based instance](https://help.aliyun.com/document_detail/126164.html) or a [persistent memory-optimized instance](https://help.aliyun.com/document_detail/183956.html) and has the [data flashback](https://help.aliyun.com/document_detail/148479.html) feature enabled, you can call this operation to restore the entire instance or specific keys to a specific point in time accurate to the second. This way, you can achieve more fine-grained data restoration.
   * *   For other types of instances, we recommend that you call the [CreateInstance](https://help.aliyun.com/document_detail/473757.html) or [CreateTairInstance](https://help.aliyun.com/document_detail/473770.html) operation to restore the backup data to a new instance.
   * 
   * @param request - RestoreInstanceRequest
   * @returns RestoreInstanceResponse
   */
  async restoreInstance(request: $_model.RestoreInstanceRequest): Promise<$_model.RestoreInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreInstanceWithOptions(request, runtime);
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
   * Performs a master-replica switchover to switch node roles. This operation is applicable to disaster recovery drills and nearby access to applications that are deployed across zones.
   * 
   * @remarks
   * > For more information about nearby access to applications that are deployed across zones, see [Switch node roles](https://help.aliyun.com/document_detail/164222.html).
   * The instance must be a Redis Open-Source Edition instance or Tair (Enterprise Edition) [DRAM-based](https://help.aliyun.com/document_detail/126164.html) instance that uses local disks.
   * A call to this operation has the following impacts on your instance:
   * *   The data shards in the instance may change to the read-only state and experience transient connections within seconds. Make sure that your application is configured to automatically reconnect to the instance.
   * *   If the instance enters the switching state, you cannot manage this instance. For example, you cannot modify the instance configurations or migrate the instance to another zone.
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

    if (!$dara.isNull(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    if (!$dara.isNull(request.switchType)) {
      query["SwitchType"] = request.switchType;
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
   * Performs a master-replica switchover to switch node roles. This operation is applicable to disaster recovery drills and nearby access to applications that are deployed across zones.
   * 
   * @remarks
   * > For more information about nearby access to applications that are deployed across zones, see [Switch node roles](https://help.aliyun.com/document_detail/164222.html).
   * The instance must be a Redis Open-Source Edition instance or Tair (Enterprise Edition) [DRAM-based](https://help.aliyun.com/document_detail/126164.html) instance that uses local disks.
   * A call to this operation has the following impacts on your instance:
   * *   The data shards in the instance may change to the read-only state and experience transient connections within seconds. Make sure that your application is configured to automatically reconnect to the instance.
   * *   If the instance enters the switching state, you cannot manage this instance. For example, you cannot modify the instance configurations or migrate the instance to another zone.
   * 
   * @param request - SwitchInstanceHARequest
   * @returns SwitchInstanceHAResponse
   */
  async switchInstanceHA(request: $_model.SwitchInstanceHARequest): Promise<$_model.SwitchInstanceHAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchInstanceHAWithOptions(request, runtime);
  }

  /**
   * Enables or disables the proxy mode for a Tair (Redis OSS-compatible) cluster instance in a dedicated cluster.
   * 
   * @remarks
   * For more information about the proxy mode, see [Features of proxy servers](https://help.aliyun.com/document_detail/142959.html). Before you call this operation, make sure that the following requirements are met:
   * *   The instance is created by using a dedicated cluster. For more information, see [What is ApsaraDB for MyBase?](https://help.aliyun.com/document_detail/141455.html)
   * *   The instance uses the [cluster architecture](https://help.aliyun.com/document_detail/52228.html).
   * >  Before you call the SwitchInstanceProxy operation, you must call the [DescribeDedicatedClusterInstanceList](https://help.aliyun.com/document_detail/473867.html) operation and view the value of the **ProxyCount** response parameter to check whether the proxy mode is enabled. A value of 0 indicates that the proxy mode is disabled. A value that is greater than 0 indicates that the proxy mode is enabled.
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
   * Enables or disables the proxy mode for a Tair (Redis OSS-compatible) cluster instance in a dedicated cluster.
   * 
   * @remarks
   * For more information about the proxy mode, see [Features of proxy servers](https://help.aliyun.com/document_detail/142959.html). Before you call this operation, make sure that the following requirements are met:
   * *   The instance is created by using a dedicated cluster. For more information, see [What is ApsaraDB for MyBase?](https://help.aliyun.com/document_detail/141455.html)
   * *   The instance uses the [cluster architecture](https://help.aliyun.com/document_detail/52228.html).
   * >  Before you call the SwitchInstanceProxy operation, you must call the [DescribeDedicatedClusterInstanceList](https://help.aliyun.com/document_detail/473867.html) operation and view the value of the **ProxyCount** response parameter to check whether the proxy mode is enabled. A value of 0 indicates that the proxy mode is disabled. A value that is greater than 0 indicates that the proxy mode is enabled.
   * 
   * @param request - SwitchInstanceProxyRequest
   * @returns SwitchInstanceProxyResponse
   */
  async switchInstanceProxy(request: $_model.SwitchInstanceProxyRequest): Promise<$_model.SwitchInstanceProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchInstanceProxyWithOptions(request, runtime);
  }

  /**
   * Switches an instance from the current zone to the specified zone in the event of a fault.
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
   * Switches an instance from the current zone to the specified zone in the event of a fault.
   * 
   * @param request - SwitchInstanceZoneFailOverRequest
   * @returns SwitchInstanceZoneFailOverResponse
   */
  async switchInstanceZoneFailOver(request: $_model.SwitchInstanceZoneFailOverRequest): Promise<$_model.SwitchInstanceZoneFailOverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchInstanceZoneFailOverWithOptions(request, runtime);
  }

  /**
   * Changes the VPC or vSwitch of a Tair (Redis OSS-compatible) instance. If the instance is deployed in the classic network, the network type of the instance is changed from the classic network to VPC.
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
   * Changes the VPC or vSwitch of a Tair (Redis OSS-compatible) instance. If the instance is deployed in the classic network, the network type of the instance is changed from the classic network to VPC.
   * 
   * @param request - SwitchNetworkRequest
   * @returns SwitchNetworkResponse
   */
  async switchNetwork(request: $_model.SwitchNetworkRequest): Promise<$_model.SwitchNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchNetworkWithOptions(request, runtime);
  }

  /**
   * Disables configuration changes for a Tair (Redis OSS-compatible) instance before you use Data Transmission Service (DTS) to migrate or synchronize data of the instance. This prevents migration and synchronization task failures due to configuration changes.
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
   * Disables configuration changes for a Tair (Redis OSS-compatible) instance before you use Data Transmission Service (DTS) to migrate or synchronize data of the instance. This prevents migration and synchronization task failures due to configuration changes.
   * 
   * @param request - SyncDtsStatusRequest
   * @returns SyncDtsStatusResponse
   */
  async syncDtsStatus(request: $_model.SyncDtsStatusRequest): Promise<$_model.SyncDtsStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncDtsStatusWithOptions(request, runtime);
  }

  /**
   * Adds tags to Tair (Redis OSS-compatible) instances.
   * 
   * @remarks
   * If you have a large number of instances, you can create multiple tags and add these tags to the instances. Then, you can filter instances by tag.
   * *   A tag consists of a key and a value. Each key must be unique in a region for an Alibaba Cloud account. Different keys can be mapped to the same value.
   * *   If the tag that you specify does not exist, this tag is automatically created and added to the specified instance.
   * *   If the key of the specified tag is the same as that of an existing tag, the specified tag overwrites the existing tag.
   * *   You can add up to 20 tags to each instance.
   * *   You can add tags to up to 50 instances in each request.
   * You can also add tags to instances in the Tair (Redis OSS-compatible) console. For more information, see [Create a tag](https://help.aliyun.com/document_detail/118779.html).
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
   * Adds tags to Tair (Redis OSS-compatible) instances.
   * 
   * @remarks
   * If you have a large number of instances, you can create multiple tags and add these tags to the instances. Then, you can filter instances by tag.
   * *   A tag consists of a key and a value. Each key must be unique in a region for an Alibaba Cloud account. Different keys can be mapped to the same value.
   * *   If the tag that you specify does not exist, this tag is automatically created and added to the specified instance.
   * *   If the key of the specified tag is the same as that of an existing tag, the specified tag overwrites the existing tag.
   * *   You can add up to 20 tags to each instance.
   * *   You can add tags to up to 50 instances in each request.
   * You can also add tags to instances in the Tair (Redis OSS-compatible) console. For more information, see [Create a tag](https://help.aliyun.com/document_detail/118779.html).
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of a Tair (Redis OSS-compatible) instance from subscription to pay-as-you-go or from pay-as-you-go to subscription.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand relevant precautions and billing rules. For more information, see the following topics:
   * *   [Change the billing method to subscription](https://help.aliyun.com/document_detail/54542.html).
   * *   [Change the billing method to pay-as-you-go](https://help.aliyun.com/document_detail/211549.html).
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
   * Changes the billing method of a Tair (Redis OSS-compatible) instance from subscription to pay-as-you-go or from pay-as-you-go to subscription.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand relevant precautions and billing rules. For more information, see the following topics:
   * *   [Change the billing method to subscription](https://help.aliyun.com/document_detail/54542.html).
   * *   [Change the billing method to pay-as-you-go](https://help.aliyun.com/document_detail/211549.html).
   * 
   * @param request - TransformInstanceChargeTypeRequest
   * @returns TransformInstanceChargeTypeResponse
   */
  async transformInstanceChargeType(request: $_model.TransformInstanceChargeTypeRequest): Promise<$_model.TransformInstanceChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transformInstanceChargeTypeWithOptions(request, runtime);
  }

  /**
   * Converts an instance use local disks to a cloud-native instance.
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

    if (!$dara.isNull(request.shardCount)) {
      query["ShardCount"] = request.shardCount;
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
   * Converts an instance use local disks to a cloud-native instance.
   * 
   * @param request - TransformToEcsRequest
   * @returns TransformToEcsResponse
   */
  async transformToEcs(request: $_model.TransformToEcsRequest): Promise<$_model.TransformToEcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transformToEcsWithOptions(request, runtime);
  }

  /**
   * Changes a pay-as-you-go Tair (Redis OSS-compatible) instance to a subscription instance.
   * 
   * @remarks
   * For more information about how to change the billing method in the Tair (Redis OSS-compatible) console, see [Switch to subscription](https://help.aliyun.com/document_detail/54542.html).
   * >  You cannot change the billing method of a Tair (Redis OSS-compatible) instance from subscription to pay-as-you-go.
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
   * Changes a pay-as-you-go Tair (Redis OSS-compatible) instance to a subscription instance.
   * 
   * @remarks
   * For more information about how to change the billing method in the Tair (Redis OSS-compatible) console, see [Switch to subscription](https://help.aliyun.com/document_detail/54542.html).
   * >  You cannot change the billing method of a Tair (Redis OSS-compatible) instance from subscription to pay-as-you-go.
   * 
   * @param request - TransformToPrePaidRequest
   * @returns TransformToPrePaidResponse
   */
  async transformToPrePaid(request: $_model.TransformToPrePaidRequest): Promise<$_model.TransformToPrePaidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transformToPrePaidWithOptions(request, runtime);
  }

  /**
   * Removes the write lock from an instance. After the instance is unlocked, it supports both read and write operations.
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
   * Removes the write lock from an instance. After the instance is unlocked, it supports both read and write operations.
   * 
   * @param request - UnlockDBInstanceWriteRequest
   * @returns UnlockDBInstanceWriteResponse
   */
  async unlockDBInstanceWrite(request: $_model.UnlockDBInstanceWriteRequest): Promise<$_model.UnlockDBInstanceWriteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockDBInstanceWriteWithOptions(request, runtime);
  }

  /**
   * Removes tags from Tair (Redis OSS-compatible) instances.
   * 
   * @remarks
   *   You can remove up to 20 tags at a time.
   * *   If a tag is removed from an instance and is not added to other instances, the tag is deleted.
   * You can also remove tags from instances in the Tair (Redis OSS-compatible) console. For more information, see [Remove a tag](https://help.aliyun.com/document_detail/119157.html).
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
   * Removes tags from Tair (Redis OSS-compatible) instances.
   * 
   * @remarks
   *   You can remove up to 20 tags at a time.
   * *   If a tag is removed from an instance and is not added to other instances, the tag is deleted.
   * You can also remove tags from instances in the Tair (Redis OSS-compatible) console. For more information, see [Remove a tag](https://help.aliyun.com/document_detail/119157.html).
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the proxy node of a cluster instance to the latest version.
   * 
   * @remarks
   * The procedure and impacts for updating the minor version of an instance varies based on the instance architecture. For more information, see [Update the minor version of an instance](https://help.aliyun.com/document_detail/56450.html).
   * > 
   * *   Before you call this operation, you can call the [DescribeEngineVersion](https://help.aliyun.com/document_detail/473781.html) operation to query the current minor version of the proxy node.
   * *   The connection to the instance is interrupted during the update. We recommend that perform an update during off-peak hours. Make sure your application can reconnect to the instance after the update. For more information, see [Minor version update](https://help.aliyun.com/document_detail/56450.html).
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
   * Updates the proxy node of a cluster instance to the latest version.
   * 
   * @remarks
   * The procedure and impacts for updating the minor version of an instance varies based on the instance architecture. For more information, see [Update the minor version of an instance](https://help.aliyun.com/document_detail/56450.html).
   * > 
   * *   Before you call this operation, you can call the [DescribeEngineVersion](https://help.aliyun.com/document_detail/473781.html) operation to query the current minor version of the proxy node.
   * *   The connection to the instance is interrupted during the update. We recommend that perform an update during off-peak hours. Make sure your application can reconnect to the instance after the update. For more information, see [Minor version update](https://help.aliyun.com/document_detail/56450.html).
   * 
   * @param request - UpgradeProxyRequest
   * @returns UpgradeProxyResponse
   */
  async upgradeProxy(request: $_model.UpgradeProxyRequest): Promise<$_model.UpgradeProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeProxyWithOptions(request, runtime);
  }

}
