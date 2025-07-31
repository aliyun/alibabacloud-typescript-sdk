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
      'cn-qingdao': "mongodb.aliyuncs.com",
      'cn-beijing': "mongodb.aliyuncs.com",
      'cn-zhangjiakou': "mongodb.cn-zhangjiakou.aliyuncs.com",
      'cn-huhehaote': "mongodb.cn-huhehaote.aliyuncs.com",
      'cn-wulanchabu': "mongodb.aliyuncs.com",
      'cn-hangzhou': "mongodb.aliyuncs.com",
      'cn-shanghai': "mongodb.aliyuncs.com",
      'cn-shenzhen': "mongodb.aliyuncs.com",
      'cn-heyuan': "mongodb.aliyuncs.com",
      'cn-guangzhou': "mongodb.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "mongodb.cn-chengdu.aliyuncs.com",
      'cn-hongkong': "mongodb.cn-hongkong.aliyuncs.com",
      'ap-northeast-1': "mongodb.ap-northeast-1.aliyuncs.com",
      'ap-southeast-1': "mongodb.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "mongodb.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "mongodb.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "mongodb.ap-southeast-5.aliyuncs.com",
      'us-east-1': "mongodb.us-east-1.aliyuncs.com",
      'us-west-1': "mongodb.us-west-1.aliyuncs.com",
      'eu-west-1': "mongodb.eu-west-1.aliyuncs.com",
      'eu-central-1': "mongodb.eu-central-1.aliyuncs.com",
      'ap-south-1': "mongodb.ap-south-1.aliyuncs.com",
      'me-east-1': "mongodb.me-east-1.aliyuncs.com",
      'cn-hangzhou-finance': "mongodb.aliyuncs.com",
      'cn-shanghai-finance-1': "mongodb.aliyuncs.com",
      'cn-shenzhen-finance-1': "mongodb.cn-shenzhen-finance-1.aliyuncs.com",
      'cn-north-2-gov-1': "mongodb.cn-north-2-gov-1.aliyuncs.com",
      'ap-northeast-2-pop': "mongodb.aliyuncs.com",
      'cn-beijing-finance-1': "mongodb.aliyuncs.com",
      'cn-beijing-finance-pop': "mongodb.aliyuncs.com",
      'cn-beijing-gov-1': "mongodb.aliyuncs.com",
      'cn-beijing-nu16-b01': "mongodb.aliyuncs.com",
      'cn-edge-1': "mongodb.aliyuncs.com",
      'cn-fujian': "mongodb.aliyuncs.com",
      'cn-haidian-cm12-c01': "mongodb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "mongodb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "mongodb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "mongodb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "mongodb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "mongodb.aliyuncs.com",
      'cn-hangzhou-test-306': "mongodb.aliyuncs.com",
      'cn-hongkong-finance-pop': "mongodb.aliyuncs.com",
      'cn-huhehaote-nebula-1': "mongodb.aliyuncs.com",
      'cn-qingdao-nebula': "mongodb.aliyuncs.com",
      'cn-shanghai-et15-b01': "mongodb.aliyuncs.com",
      'cn-shanghai-et2-b01': "mongodb.aliyuncs.com",
      'cn-shanghai-inner': "mongodb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "mongodb.aliyuncs.com",
      'cn-shenzhen-inner': "mongodb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "mongodb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "mongodb.aliyuncs.com",
      'cn-wuhan': "mongodb.aliyuncs.com",
      'cn-yushanfang': "mongodb.aliyuncs.com",
      'cn-zhangbei': "mongodb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "mongodb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "mongodb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "mongodb.aliyuncs.com",
      'eu-west-1-oxs': "mongodb.aliyuncs.com",
      'rus-west-1-pop': "mongodb.aliyuncs.com",
      'na-south-1': "mongodb.na-south-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dds", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Applies for an internal endpoint for a shard or Configserver node in an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * This operation is applicable only to sharded cluster instances. For more information, see [Apply for an endpoint for a shard or Configserver node](https://help.aliyun.com/document_detail/134037.html).
   * >  The allocated endpoints can be used only for internal access. To gain Internet access, you must call the [AllocatePublicNetworkAddress](https://help.aliyun.com/document_detail/67602.html) operation to apply for public endpoints.
   * 
   * @param request - AllocateNodePrivateNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateNodePrivateNetworkAddressResponse
   */
  async allocateNodePrivateNetworkAddressWithOptions(request: $_model.AllocateNodePrivateNetworkAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateNodePrivateNetworkAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

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
      action: "AllocateNodePrivateNetworkAddress",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocateNodePrivateNetworkAddressResponse>(await this.callApi(params, req, runtime), new $_model.AllocateNodePrivateNetworkAddressResponse({}));
  }

  /**
   * Applies for an internal endpoint for a shard or Configserver node in an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * This operation is applicable only to sharded cluster instances. For more information, see [Apply for an endpoint for a shard or Configserver node](https://help.aliyun.com/document_detail/134037.html).
   * >  The allocated endpoints can be used only for internal access. To gain Internet access, you must call the [AllocatePublicNetworkAddress](https://help.aliyun.com/document_detail/67602.html) operation to apply for public endpoints.
   * 
   * @param request - AllocateNodePrivateNetworkAddressRequest
   * @returns AllocateNodePrivateNetworkAddressResponse
   */
  async allocateNodePrivateNetworkAddress(request: $_model.AllocateNodePrivateNetworkAddressRequest): Promise<$_model.AllocateNodePrivateNetworkAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateNodePrivateNetworkAddressWithOptions(request, runtime);
  }

  /**
   * Allocates a public endpoint to an instance.
   * 
   * @param request - AllocatePublicNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocatePublicNetworkAddressResponse
   */
  async allocatePublicNetworkAddressWithOptions(request: $_model.AllocatePublicNetworkAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocatePublicNetworkAddressResponse> {
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
      action: "AllocatePublicNetworkAddress",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocatePublicNetworkAddressResponse>(await this.callApi(params, req, runtime), new $_model.AllocatePublicNetworkAddressResponse({}));
  }

  /**
   * Allocates a public endpoint to an instance.
   * 
   * @param request - AllocatePublicNetworkAddressRequest
   * @returns AllocatePublicNetworkAddressResponse
   */
  async allocatePublicNetworkAddress(request: $_model.AllocatePublicNetworkAddressRequest): Promise<$_model.AllocatePublicNetworkAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocatePublicNetworkAddressWithOptions(request, runtime);
  }

  /**
   * You can call this operation to check whether KMS keys are authorized to ApsaraDB for MongoDB instances.
   * 
   * @remarks
   * Before you enable Transparent Data Encryption (TDE) by calling the [ModifyDBInstanceTDE](https://help.aliyun.com/document_detail/131267.html) operation, you can call this operation to check whether KMS keys are authorized to ApsaraDB for MongoDB instances.
   * 
   * @param request - CheckCloudResourceAuthorizedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCloudResourceAuthorizedResponse
   */
  async checkCloudResourceAuthorizedWithOptions(request: $_model.CheckCloudResourceAuthorizedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCloudResourceAuthorizedResponse> {
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

    if (!$dara.isNull(request.targetRegionId)) {
      query["TargetRegionId"] = request.targetRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckCloudResourceAuthorized",
      version: "2015-12-01",
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
   * You can call this operation to check whether KMS keys are authorized to ApsaraDB for MongoDB instances.
   * 
   * @remarks
   * Before you enable Transparent Data Encryption (TDE) by calling the [ModifyDBInstanceTDE](https://help.aliyun.com/document_detail/131267.html) operation, you can call this operation to check whether KMS keys are authorized to ApsaraDB for MongoDB instances.
   * 
   * @param request - CheckCloudResourceAuthorizedRequest
   * @returns CheckCloudResourceAuthorizedResponse
   */
  async checkCloudResourceAuthorized(request: $_model.CheckCloudResourceAuthorizedRequest): Promise<$_model.CheckCloudResourceAuthorizedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCloudResourceAuthorizedWithOptions(request, runtime);
  }

  /**
   * Queries whether the data of an ApsaraDB for MongoDB instance can be restored.
   * 
   * @remarks
   * This operation is applicable to replica set instances and sharded cluster instances.
   * >  After you call this operation to confirm that the data of the instance can be restored, you can call the [CreateDBInstance](https://help.aliyun.com/document_detail/61763.html) operation to restore data to a new instance.
   * 
   * @param request - CheckRecoveryConditionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckRecoveryConditionResponse
   */
  async checkRecoveryConditionWithOptions(request: $_model.CheckRecoveryConditionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckRecoveryConditionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.databaseNames)) {
      query["DatabaseNames"] = request.databaseNames;
    }

    if (!$dara.isNull(request.destRegion)) {
      query["DestRegion"] = request.destRegion;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
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

    if (!$dara.isNull(request.sourceDBInstance)) {
      query["SourceDBInstance"] = request.sourceDBInstance;
    }

    if (!$dara.isNull(request.sourceDBInstance)) {
      query["SourceDBInstance"] = request.sourceDBInstance;
    }

    if (!$dara.isNull(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckRecoveryCondition",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckRecoveryConditionResponse>(await this.callApi(params, req, runtime), new $_model.CheckRecoveryConditionResponse({}));
  }

  /**
   * Queries whether the data of an ApsaraDB for MongoDB instance can be restored.
   * 
   * @remarks
   * This operation is applicable to replica set instances and sharded cluster instances.
   * >  After you call this operation to confirm that the data of the instance can be restored, you can call the [CreateDBInstance](https://help.aliyun.com/document_detail/61763.html) operation to restore data to a new instance.
   * 
   * @param request - CheckRecoveryConditionRequest
   * @returns CheckRecoveryConditionResponse
   */
  async checkRecoveryCondition(request: $_model.CheckRecoveryConditionRequest): Promise<$_model.CheckRecoveryConditionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkRecoveryConditionWithOptions(request, runtime);
  }

  /**
   * Queries whether a service-linked role is created.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceLinkedRole",
      version: "2015-12-01",
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
   * Queries whether a service-linked role is created.
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRole(request: $_model.CheckServiceLinkedRoleRequest): Promise<$_model.CheckServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Creates an account that is granted read-only permissions for shard nodes in an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * 
   * @remarks
   *   You can create an account for shard nodes only in an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * *   The account is granted read-only permissions.
   * 
   * @param request - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
   */
  async createAccountWithOptions(request: $_model.CreateAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.characterType)) {
      query["CharacterType"] = request.characterType;
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
      version: "2015-12-01",
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
   * Creates an account that is granted read-only permissions for shard nodes in an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * 
   * @remarks
   *   You can create an account for shard nodes only in an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * *   The account is granted read-only permissions.
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Creates a backup set for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * When you call this operation, the instance must be in the Running state.
   * 
   * @param request - CreateBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupResponse
   */
  async createBackupWithOptions(request: $_model.CreateBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupMethod)) {
      query["BackupMethod"] = request.backupMethod;
    }

    if (!$dara.isNull(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
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
      version: "2015-12-01",
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
   * Creates a backup set for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * When you call this operation, the instance must be in the Running state.
   * 
   * @param request - CreateBackupRequest
   * @returns CreateBackupResponse
   */
  async createBackup(request: $_model.CreateBackupRequest): Promise<$_model.CreateBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  /**
   * Creates or clones an ApsaraDB for MongoDB replica set instance.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB before you call this operation.
   * For more information about the instance types of ApsaraDB for MongoDB instances, see [Instance types](https://www.alibabacloud.com/help/en/mongodb/product-overview/instance-types-1).
   * To create sharded cluster instances, you can call the [CreateShardingDBInstance](~~CreateShardingDBInstance~~) operation.
   * 
   * @param request - CreateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceResponse
   */
  async createDBInstanceWithOptions(request: $_model.CreateDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
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

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.DBInstanceStorage)) {
      query["DBInstanceStorage"] = request.DBInstanceStorage;
    }

    if (!$dara.isNull(request.databaseNames)) {
      query["DatabaseNames"] = request.databaseNames;
    }

    if (!$dara.isNull(request.encrypted)) {
      query["Encrypted"] = request.encrypted;
    }

    if (!$dara.isNull(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.globalSecurityGroupIds)) {
      query["GlobalSecurityGroupIds"] = request.globalSecurityGroupIds;
    }

    if (!$dara.isNull(request.hiddenZoneId)) {
      query["HiddenZoneId"] = request.hiddenZoneId;
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

    if (!$dara.isNull(request.provisionedIops)) {
      query["ProvisionedIops"] = request.provisionedIops;
    }

    if (!$dara.isNull(request.readonlyReplicas)) {
      query["ReadonlyReplicas"] = request.readonlyReplicas;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
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

    if (!$dara.isNull(request.secondaryZoneId)) {
      query["SecondaryZoneId"] = request.secondaryZoneId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.srcDBInstanceId)) {
      query["SrcDBInstanceId"] = request.srcDBInstanceId;
    }

    if (!$dara.isNull(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    if (!$dara.isNull(request.storageEngine)) {
      query["StorageEngine"] = request.storageEngine;
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
      action: "CreateDBInstance",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBInstanceResponse({}));
  }

  /**
   * Creates or clones an ApsaraDB for MongoDB replica set instance.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB before you call this operation.
   * For more information about the instance types of ApsaraDB for MongoDB instances, see [Instance types](https://www.alibabacloud.com/help/en/mongodb/product-overview/instance-types-1).
   * To create sharded cluster instances, you can call the [CreateShardingDBInstance](~~CreateShardingDBInstance~~) operation.
   * 
   * @param request - CreateDBInstanceRequest
   * @returns CreateDBInstanceResponse
   */
  async createDBInstance(request: $_model.CreateDBInstanceRequest): Promise<$_model.CreateDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
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
      version: "2015-12-01",
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
   * Adds a shard or mongos node to an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB.
   * This operation applies only to sharded cluster instances.
   * 
   * @param request - CreateNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodeResponse
   */
  async createNodeWithOptions(request: $_model.CreateNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

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

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.nodeClass)) {
      query["NodeClass"] = request.nodeClass;
    }

    if (!$dara.isNull(request.nodeStorage)) {
      query["NodeStorage"] = request.nodeStorage;
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

    if (!$dara.isNull(request.readonlyReplicas)) {
      query["ReadonlyReplicas"] = request.readonlyReplicas;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.shardDirect)) {
      query["ShardDirect"] = request.shardDirect;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNode",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNodeResponse>(await this.callApi(params, req, runtime), new $_model.CreateNodeResponse({}));
  }

  /**
   * Adds a shard or mongos node to an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB.
   * This operation applies only to sharded cluster instances.
   * 
   * @param request - CreateNodeRequest
   * @returns CreateNodeResponse
   */
  async createNode(request: $_model.CreateNodeRequest): Promise<$_model.CreateNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNodeWithOptions(request, runtime);
  }

  /**
   * Batch adds mongos or shard nodes for a sharded cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB. 
   * This operation is applicable only to sharded cluster instances.
   * 
   * @param request - CreateNodeBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodeBatchResponse
   */
  async createNodeBatchWithOptions(request: $_model.CreateNodeBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNodeBatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

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

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.fromApp)) {
      query["FromApp"] = request.fromApp;
    }

    if (!$dara.isNull(request.nodesInfo)) {
      query["NodesInfo"] = request.nodesInfo;
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

    if (!$dara.isNull(request.shardDirect)) {
      query["ShardDirect"] = request.shardDirect;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNodeBatch",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNodeBatchResponse>(await this.callApi(params, req, runtime), new $_model.CreateNodeBatchResponse({}));
  }

  /**
   * Batch adds mongos or shard nodes for a sharded cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB. 
   * This operation is applicable only to sharded cluster instances.
   * 
   * @param request - CreateNodeBatchRequest
   * @returns CreateNodeBatchResponse
   */
  async createNodeBatch(request: $_model.CreateNodeBatchRequest): Promise<$_model.CreateNodeBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNodeBatchWithOptions(request, runtime);
  }

  /**
   * Creates or clones an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   *   Make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB before you call this operation.
   * *   For more information about the instance types of ApsaraDB for MongoDB, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * *   To create standalone instances and replica set instances, you can call the [CreateDBInstance](https://help.aliyun.com/document_detail/61763.html) operation.
   * 
   * @param request - CreateShardingDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateShardingDBInstanceResponse
   */
  async createShardingDBInstanceWithOptions(request: $_model.CreateShardingDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateShardingDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configServer)) {
      query["ConfigServer"] = request.configServer;
    }

    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.destRegion)) {
      query["DestRegion"] = request.destRegion;
    }

    if (!$dara.isNull(request.encrypted)) {
      query["Encrypted"] = request.encrypted;
    }

    if (!$dara.isNull(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.globalSecurityGroupIds)) {
      query["GlobalSecurityGroupIds"] = request.globalSecurityGroupIds;
    }

    if (!$dara.isNull(request.hiddenZoneId)) {
      query["HiddenZoneId"] = request.hiddenZoneId;
    }

    if (!$dara.isNull(request.mongos)) {
      query["Mongos"] = request.mongos;
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

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.provisionedIops)) {
      query["ProvisionedIops"] = request.provisionedIops;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaSet)) {
      query["ReplicaSet"] = request.replicaSet;
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

    if (!$dara.isNull(request.secondaryZoneId)) {
      query["SecondaryZoneId"] = request.secondaryZoneId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.srcDBInstanceId)) {
      query["SrcDBInstanceId"] = request.srcDBInstanceId;
    }

    if (!$dara.isNull(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    if (!$dara.isNull(request.storageEngine)) {
      query["StorageEngine"] = request.storageEngine;
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
      action: "CreateShardingDBInstance",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateShardingDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateShardingDBInstanceResponse({}));
  }

  /**
   * Creates or clones an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   *   Make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB before you call this operation.
   * *   For more information about the instance types of ApsaraDB for MongoDB, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * *   To create standalone instances and replica set instances, you can call the [CreateDBInstance](https://help.aliyun.com/document_detail/61763.html) operation.
   * 
   * @param request - CreateShardingDBInstanceRequest
   * @returns CreateShardingDBInstanceResponse
   */
  async createShardingDBInstance(request: $_model.CreateShardingDBInstanceRequest): Promise<$_model.CreateShardingDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createShardingDBInstanceWithOptions(request, runtime);
  }

  /**
   * Releases an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements
   * *   The instance is in the Running state.
   * *   The billing method of the instance is pay-as-you-go.
   * > After an instance is released, all data in the instance is cleared and cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstanceWithOptions(request: $_model.DeleteDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceResponse> {
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
      action: "DeleteDBInstance",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBInstanceResponse({}));
  }

  /**
   * Releases an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements
   * *   The instance is in the Running state.
   * *   The billing method of the instance is pay-as-you-go.
   * > After an instance is released, all data in the instance is cleared and cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteDBInstanceRequest
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstance(request: $_model.DeleteDBInstanceRequest): Promise<$_model.DeleteDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
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
      version: "2015-12-01",
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
   * Deletes a shard or mongos node from an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is in the Running state.
   * *   The instance is a sharded cluster instance.
   * *   The billing method of the instance is pay-as-you-go.
   * *   The number of the shard or mongos nodes in the instance is greater than two.
   * 
   * @param request - DeleteNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNodeResponse
   */
  async deleteNodeWithOptions(request: $_model.DeleteNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      action: "DeleteNode",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNodeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNodeResponse({}));
  }

  /**
   * Deletes a shard or mongos node from an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is in the Running state.
   * *   The instance is a sharded cluster instance.
   * *   The billing method of the instance is pay-as-you-go.
   * *   The number of the shard or mongos nodes in the instance is greater than two.
   * 
   * @param request - DeleteNodeRequest
   * @returns DeleteNodeResponse
   */
  async deleteNode(request: $_model.DeleteNodeRequest): Promise<$_model.DeleteNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNodeWithOptions(request, runtime);
  }

  /**
   * Queries the database accounts of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  This operation can be used to query only the information of the root account.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccounts",
      version: "2015-12-01",
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
   * Queries the database accounts of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  This operation can be used to query only the information of the root account.
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: $_model.DescribeAccountsRequest): Promise<$_model.DescribeAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeActiveOperationMaintenanceConfig",
      version: "2015-12-01",
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
   * @param request - DescribeActiveOperationMaintenanceConfigRequest
   * @returns DescribeActiveOperationMaintenanceConfigResponse
   */
  async describeActiveOperationMaintenanceConfig(request: $_model.DescribeActiveOperationMaintenanceConfigRequest): Promise<$_model.DescribeActiveOperationMaintenanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationMaintenanceConfigWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about  tasks of an ApsaraDB for MongoDB instance.
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

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeActiveOperationTask",
      version: "2015-12-01",
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
   * Queries the detailed information about  tasks of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeActiveOperationTaskRequest
   * @returns DescribeActiveOperationTaskResponse
   */
  async describeActiveOperationTask(request: $_model.DescribeActiveOperationTaskRequest): Promise<$_model.DescribeActiveOperationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTaskWithOptions(request, runtime);
  }

  /**
   * Queries the number of operation and maintenance tasks on an ApsaraDB for MongoDB instance.
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
      action: "DescribeActiveOperationTaskCount",
      version: "2015-12-01",
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
   * Queries the number of operation and maintenance tasks on an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeActiveOperationTaskCountRequest
   * @returns DescribeActiveOperationTaskCountResponse
   */
  async describeActiveOperationTaskCount(request: $_model.DescribeActiveOperationTaskCountRequest): Promise<$_model.DescribeActiveOperationTaskCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTaskCountWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeActiveOperationTaskRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationTaskRegionResponse
   */
  async describeActiveOperationTaskRegionWithOptions(request: $_model.DescribeActiveOperationTaskRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationTaskRegionResponse> {
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
      action: "DescribeActiveOperationTaskRegion",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActiveOperationTaskRegionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActiveOperationTaskRegionResponse({}));
  }

  /**
   * @param request - DescribeActiveOperationTaskRegionRequest
   * @returns DescribeActiveOperationTaskRegionResponse
   */
  async describeActiveOperationTaskRegion(request: $_model.DescribeActiveOperationTaskRegionRequest): Promise<$_model.DescribeActiveOperationTaskRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTaskRegionWithOptions(request, runtime);
  }

  /**
   * Queries the types of Operation and Maintenance tasks and the number of tasks of each type for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is no longer updated and will be unavailable.
   * 
   * @param request - DescribeActiveOperationTaskTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationTaskTypeResponse
   */
  async describeActiveOperationTaskTypeWithOptions(request: $_model.DescribeActiveOperationTaskTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationTaskTypeResponse> {
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
      action: "DescribeActiveOperationTaskType",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActiveOperationTaskTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActiveOperationTaskTypeResponse({}));
  }

  /**
   * Queries the types of Operation and Maintenance tasks and the number of tasks of each type for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is no longer updated and will be unavailable.
   * 
   * @param request - DescribeActiveOperationTaskTypeRequest
   * @returns DescribeActiveOperationTaskTypeResponse
   */
  async describeActiveOperationTaskType(request: $_model.DescribeActiveOperationTaskTypeRequest): Promise<$_model.DescribeActiveOperationTaskTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTaskTypeWithOptions(request, runtime);
  }

  /**
   * Queries a list of operation and maintenance tasks initiated for an ApsaraDB for MongoDB instance.
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

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeActiveOperationTasks",
      version: "2015-12-01",
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
   * Queries a list of operation and maintenance tasks initiated for an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeActiveOperationTasksRequest
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasks(request: $_model.DescribeActiveOperationTasksRequest): Promise<$_model.DescribeActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Queries the types of entries in the audit log collected for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the running state when you call this operation.
   * *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeAuditLogFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditLogFilterResponse
   */
  async describeAuditLogFilterWithOptions(request: $_model.DescribeAuditLogFilterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuditLogFilterResponse> {
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

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuditLogFilter",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuditLogFilterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuditLogFilterResponse({}));
  }

  /**
   * Queries the types of entries in the audit log collected for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the running state when you call this operation.
   * *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeAuditLogFilterRequest
   * @returns DescribeAuditLogFilterResponse
   */
  async describeAuditLogFilter(request: $_model.DescribeAuditLogFilterRequest): Promise<$_model.DescribeAuditLogFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditLogFilterWithOptions(request, runtime);
  }

  /**
   * Queries whether the audit log feature is enabled for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the running state when you call this operation.
   * *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeAuditPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditPolicyResponse
   */
  async describeAuditPolicyWithOptions(request: $_model.DescribeAuditPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuditPolicyResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuditPolicy",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuditPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuditPolicyResponse({}));
  }

  /**
   * Queries whether the audit log feature is enabled for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the running state when you call this operation.
   * *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeAuditPolicyRequest
   * @returns DescribeAuditPolicyResponse
   */
  async describeAuditPolicy(request: $_model.DescribeAuditPolicyRequest): Promise<$_model.DescribeAuditPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the audit logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   When you call this operation, ensure that the audit log feature of the instance is enabled. Otherwise, the operation returns an empty audit log.
   * *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeAuditRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditRecordsResponse
   */
  async describeAuditRecordsWithOptions(request: $_model.DescribeAuditRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuditRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.form)) {
      query["Form"] = request.form;
    }

    if (!$dara.isNull(request.logicalOperator)) {
      query["LogicalOperator"] = request.logicalOperator;
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

    if (!$dara.isNull(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
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

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuditRecords",
      version: "2015-12-01",
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
   * Queries the audit logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   When you call this operation, ensure that the audit log feature of the instance is enabled. Otherwise, the operation returns an empty audit log.
   * *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeAuditRecordsRequest
   * @returns DescribeAuditRecordsResponse
   */
  async describeAuditRecords(request: $_model.DescribeAuditRecordsRequest): Promise<$_model.DescribeAuditRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditRecordsWithOptions(request, runtime);
  }

  /**
   * Queries a list of the zones that are supported by an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Queries the zones in which an ApsaraDB for MongoDB instance can be deployed under specified purchase conditions. The region ID is required in the purchase condition.
   * 
   * @param request - DescribeAvailabilityZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailabilityZonesResponse
   */
  async describeAvailabilityZonesWithOptions(request: $_model.DescribeAvailabilityZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailabilityZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.excludeSecondaryZoneId)) {
      query["ExcludeSecondaryZoneId"] = request.excludeSecondaryZoneId;
    }

    if (!$dara.isNull(request.excludeZoneId)) {
      query["ExcludeZoneId"] = request.excludeZoneId;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.mongoType)) {
      query["MongoType"] = request.mongoType;
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

    if (!$dara.isNull(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
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

    if (!$dara.isNull(request.storageSupport)) {
      query["StorageSupport"] = request.storageSupport;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailabilityZones",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailabilityZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailabilityZonesResponse({}));
  }

  /**
   * Queries a list of the zones that are supported by an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Queries the zones in which an ApsaraDB for MongoDB instance can be deployed under specified purchase conditions. The region ID is required in the purchase condition.
   * 
   * @param request - DescribeAvailabilityZonesRequest
   * @returns DescribeAvailabilityZonesResponse
   */
  async describeAvailabilityZones(request: $_model.DescribeAvailabilityZonesRequest): Promise<$_model.DescribeAvailabilityZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailabilityZonesWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the engine versions to which an ApsaraDB for MongoDB instance can be upgraded.
   * 
   * @param request - DescribeAvailableEngineVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableEngineVersionResponse
   */
  async describeAvailableEngineVersionWithOptions(request: $_model.DescribeAvailableEngineVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableEngineVersionResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableEngineVersion",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableEngineVersionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableEngineVersionResponse({}));
  }

  /**
   * You can call this operation to query the engine versions to which an ApsaraDB for MongoDB instance can be upgraded.
   * 
   * @param request - DescribeAvailableEngineVersionRequest
   * @returns DescribeAvailableEngineVersionResponse
   */
  async describeAvailableEngineVersion(request: $_model.DescribeAvailableEngineVersionRequest): Promise<$_model.DescribeAvailableEngineVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableEngineVersionWithOptions(request, runtime);
  }

  /**
   * Queries the available resources in the specified zone.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResourceWithOptions(request: $_model.DescribeAvailableResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
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

    if (!$dara.isNull(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
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

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableResource",
      version: "2015-12-01",
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
   * Queries the available resources in the specified zone.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResource(request: $_model.DescribeAvailableResourceRequest): Promise<$_model.DescribeAvailableResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  /**
   * Queries the databases at a specified time or the databases in a specified backup set before you restore a database for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can call the [CreateDBInstance](https://help.aliyun.com/document_detail/61763.html) operation to restore a database for an ApsaraDB for MongoDB instance. For more information, see [Restore one database of an ApsaraDB for MongoDB instance](https://help.aliyun.com/document_detail/112274.html).
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance was created after March 26, 2019.
   * *   The instance is located in the China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Hangzhou), China (Shanghai), China (Shenzhen), or Singapore region. Other regions are not supported.
   * *   The instance is a replica set instance.
   * *   The instance runs MongoDB 3.4, MongoDB 4.0, or MongoDB 4.2. In addition, the instance uses local disks to store data.
   * *   The storage engine of the instance is WiredTiger.
   * 
   * @param request - DescribeBackupDBsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupDBsResponse
   */
  async describeBackupDBsWithOptions(request: $_model.DescribeBackupDBsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupDBsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
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

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!$dara.isNull(request.sourceDBInstance)) {
      query["SourceDBInstance"] = request.sourceDBInstance;
    }

    if (!$dara.isNull(request.sourceDBInstance)) {
      query["SourceDBInstance"] = request.sourceDBInstance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupDBs",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupDBsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupDBsResponse({}));
  }

  /**
   * Queries the databases at a specified time or the databases in a specified backup set before you restore a database for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can call the [CreateDBInstance](https://help.aliyun.com/document_detail/61763.html) operation to restore a database for an ApsaraDB for MongoDB instance. For more information, see [Restore one database of an ApsaraDB for MongoDB instance](https://help.aliyun.com/document_detail/112274.html).
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance was created after March 26, 2019.
   * *   The instance is located in the China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Hangzhou), China (Shanghai), China (Shenzhen), or Singapore region. Other regions are not supported.
   * *   The instance is a replica set instance.
   * *   The instance runs MongoDB 3.4, MongoDB 4.0, or MongoDB 4.2. In addition, the instance uses local disks to store data.
   * *   The storage engine of the instance is WiredTiger.
   * 
   * @param request - DescribeBackupDBsRequest
   * @returns DescribeBackupDBsResponse
   */
  async describeBackupDBs(request: $_model.DescribeBackupDBsRequest): Promise<$_model.DescribeBackupDBsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupDBsWithOptions(request, runtime);
  }

  /**
   * Queries the backup policy of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: $_model.DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPolicy",
      version: "2015-12-01",
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
   * Queries the backup policy of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the storage used for backup in an ApsaraDB for MongoDB replica set or sharded cluster instance that uses cloud disks. Note that you are charged only for the backup-used storage of each shard in a sharded cluster instance. You can call this operation only to query the storage used by a single shard in the instance for backup.
   * 
   * @param request - DescribeBackupStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupStorageResponse
   */
  async describeBackupStorageWithOptions(request: $_model.DescribeBackupStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupStorageResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupStorage",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupStorageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupStorageResponse({}));
  }

  /**
   * Queries the storage used for backup in an ApsaraDB for MongoDB replica set or sharded cluster instance that uses cloud disks. Note that you are charged only for the backup-used storage of each shard in a sharded cluster instance. You can call this operation only to query the storage used by a single shard in the instance for backup.
   * 
   * @param request - DescribeBackupStorageRequest
   * @returns DescribeBackupStorageResponse
   */
  async describeBackupStorage(request: $_model.DescribeBackupStorageRequest): Promise<$_model.DescribeBackupStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupStorageWithOptions(request, runtime);
  }

  /**
   * Queries backup tasks running in an ApsaraDB for MongoDB replica set or sharded cluster instance that uses cloud disks.
   * 
   * @param request - DescribeBackupTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupTasksResponse
   */
  async describeBackupTasksWithOptions(request: $_model.DescribeBackupTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupTasks",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupTasksResponse({}));
  }

  /**
   * Queries backup tasks running in an ApsaraDB for MongoDB replica set or sharded cluster instance that uses cloud disks.
   * 
   * @param request - DescribeBackupTasksRequest
   * @returns DescribeBackupTasksResponse
   */
  async describeBackupTasks(request: $_model.DescribeBackupTasksRequest): Promise<$_model.DescribeBackupTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupTasksWithOptions(request, runtime);
  }

  /**
   * Queries the backup sets of an ApsaraDB for MongoDB instance.
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

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.destRegion)) {
      query["DestRegion"] = request.destRegion;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackups",
      version: "2015-12-01",
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
   * Queries the backup sets of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: $_model.DescribeBackupsRequest): Promise<$_model.DescribeBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * Queries the backup sets of an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * 
   * @remarks
   * For a sharded cluster instance that is created before October 19, 2023 and uses cloud disks, you must call the [TransferClusterBackup](https://help.aliyun.com/document_detail/2587931.html) operation to switch the instance from the shard backup mode to the cluster backup mode before you call the DescribeClusterBackups operation.
   * By default, cloud disk-based sharded cluster instances that are created after October 19, 2023 are in the cluster backup mode.
   * 
   * @param request - DescribeClusterBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterBackupsResponse
   */
  async describeClusterBackupsWithOptions(request: $_model.DescribeClusterBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterBackupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.destRegion)) {
      query["DestRegion"] = request.destRegion;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.isOnlyGetClusterBackUp)) {
      query["IsOnlyGetClusterBackUp"] = request.isOnlyGetClusterBackUp;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
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

    if (!$dara.isNull(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterBackups",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterBackupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterBackupsResponse({}));
  }

  /**
   * Queries the backup sets of an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * 
   * @remarks
   * For a sharded cluster instance that is created before October 19, 2023 and uses cloud disks, you must call the [TransferClusterBackup](https://help.aliyun.com/document_detail/2587931.html) operation to switch the instance from the shard backup mode to the cluster backup mode before you call the DescribeClusterBackups operation.
   * By default, cloud disk-based sharded cluster instances that are created after October 19, 2023 are in the cluster backup mode.
   * 
   * @param request - DescribeClusterBackupsRequest
   * @returns DescribeClusterBackupsResponse
   */
  async describeClusterBackups(request: $_model.DescribeClusterBackupsRequest): Promise<$_model.DescribeClusterBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterBackupsWithOptions(request, runtime);
  }

  /**
   * Queries the time range to which you can restore the data of an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * 
   * @remarks
   *   The instance is an ApsaraDB for MongoDB sharded cluster instance that runs MongoDB 4.4 or later and uses enhanced SSDs (ESSDs) to store data.
   * *   You can call the TransferClusterBackup operation only for instances that are created before October 19, 2023 to switch the instances to the cluster backup mode. The DescribeClusterRecoverTime operation is applicable only to instances that are switched to the cluster backup mode or instances that are created on or after October 19, 2023.
   * 
   * @param request - DescribeClusterRecoverTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterRecoverTimeResponse
   */
  async describeClusterRecoverTimeWithOptions(request: $_model.DescribeClusterRecoverTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterRecoverTimeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterRecoverTime",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterRecoverTimeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterRecoverTimeResponse({}));
  }

  /**
   * Queries the time range to which you can restore the data of an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * 
   * @remarks
   *   The instance is an ApsaraDB for MongoDB sharded cluster instance that runs MongoDB 4.4 or later and uses enhanced SSDs (ESSDs) to store data.
   * *   You can call the TransferClusterBackup operation only for instances that are created before October 19, 2023 to switch the instances to the cluster backup mode. The DescribeClusterRecoverTime operation is applicable only to instances that are switched to the cluster backup mode or instances that are created on or after October 19, 2023.
   * 
   * @param request - DescribeClusterRecoverTimeRequest
   * @returns DescribeClusterRecoverTimeResponse
   */
  async describeClusterRecoverTime(request: $_model.DescribeClusterRecoverTimeRequest): Promise<$_model.DescribeClusterRecoverTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterRecoverTimeWithOptions(request, runtime);
  }

  /**
   * Queries the details of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttributeWithOptions(request: $_model.DescribeDBInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.isDelete)) {
      query["IsDelete"] = request.isDelete;
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
      action: "DescribeDBInstanceAttribute",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceAttributeResponse({}));
  }

  /**
   * Queries the details of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttribute(request: $_model.DescribeDBInstanceAttributeRequest): Promise<$_model.DescribeDBInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the details of a key for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * When you call the DescribeDBInstanceEncryptionKey operation, the instance must have transparent data encryption (TDE) enabled in BYOK mode. You can call the [ModifyDBInstanceTDE](https://help.aliyun.com/document_detail/131267.html) operation to enable TDE.
   * 
   * @param request - DescribeDBInstanceEncryptionKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceEncryptionKeyResponse
   */
  async describeDBInstanceEncryptionKeyWithOptions(request: $_model.DescribeDBInstanceEncryptionKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceEncryptionKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceEncryptionKey",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceEncryptionKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceEncryptionKeyResponse({}));
  }

  /**
   * Queries the details of a key for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * When you call the DescribeDBInstanceEncryptionKey operation, the instance must have transparent data encryption (TDE) enabled in BYOK mode. You can call the [ModifyDBInstanceTDE](https://help.aliyun.com/document_detail/131267.html) operation to enable TDE.
   * 
   * @param request - DescribeDBInstanceEncryptionKeyRequest
   * @returns DescribeDBInstanceEncryptionKeyResponse
   */
  async describeDBInstanceEncryptionKey(request: $_model.DescribeDBInstanceEncryptionKeyRequest): Promise<$_model.DescribeDBInstanceEncryptionKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceEncryptionKeyWithOptions(request, runtime);
  }

  /**
   * Queries the collection frequency of monitoring data for an ApsaraDB for MongoDB instance.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceMonitor",
      version: "2015-12-01",
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
   * Queries the collection frequency of monitoring data for an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeDBInstanceMonitorRequest
   * @returns DescribeDBInstanceMonitorResponse
   */
  async describeDBInstanceMonitor(request: $_model.DescribeDBInstanceMonitorRequest): Promise<$_model.DescribeDBInstanceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceMonitorWithOptions(request, runtime);
  }

  /**
   * Queries the performance data of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeDBInstancePerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancePerformanceResponse
   */
  async describeDBInstancePerformanceWithOptions(request: $_model.DescribeDBInstancePerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancePerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.replicaSetRole)) {
      query["ReplicaSetRole"] = request.replicaSetRole;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstancePerformance",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstancePerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstancePerformanceResponse({}));
  }

  /**
   * Queries the performance data of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeDBInstancePerformanceRequest
   * @returns DescribeDBInstancePerformanceResponse
   */
  async describeDBInstancePerformance(request: $_model.DescribeDBInstancePerformanceRequest): Promise<$_model.DescribeDBInstancePerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancePerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the Secure Sockets Layer (SSL) settings of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the following requirements are met:
   * *   The instance is in the Running state.
   * *   The instance is a replica set instance.
   * *   The instance runs MongoDB 3.4 or later.
   * 
   * @param request - DescribeDBInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceSSLResponse
   */
  async describeDBInstanceSSLWithOptions(request: $_model.DescribeDBInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceSSLResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceSSL",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceSSLResponse({}));
  }

  /**
   * Queries the Secure Sockets Layer (SSL) settings of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the following requirements are met:
   * *   The instance is in the Running state.
   * *   The instance is a replica set instance.
   * *   The instance runs MongoDB 3.4 or later.
   * 
   * @param request - DescribeDBInstanceSSLRequest
   * @returns DescribeDBInstanceSSLResponse
   */
  async describeDBInstanceSSL(request: $_model.DescribeDBInstanceSSLRequest): Promise<$_model.DescribeDBInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceSSLWithOptions(request, runtime);
  }

  /**
   * 查看规格信息详情
   * 
   * @param request - DescribeDBInstanceSpecInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceSpecInfoResponse
   */
  async describeDBInstanceSpecInfoWithOptions(request: $_model.DescribeDBInstanceSpecInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceSpecInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
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
      action: "DescribeDBInstanceSpecInfo",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceSpecInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceSpecInfoResponse({}));
  }

  /**
   * 查看规格信息详情
   * 
   * @param request - DescribeDBInstanceSpecInfoRequest
   * @returns DescribeDBInstanceSpecInfoResponse
   */
  async describeDBInstanceSpecInfo(request: $_model.DescribeDBInstanceSpecInfoRequest): Promise<$_model.DescribeDBInstanceSpecInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceSpecInfoWithOptions(request, runtime);
  }

  /**
   * Queries the primary/secondary switching logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is a replica set or sharded cluster instance.
   * *   The instance uses local physical disks to store data.
   * 
   * @param request - DescribeDBInstanceSwitchLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceSwitchLogResponse
   */
  async describeDBInstanceSwitchLogWithOptions(request: $_model.DescribeDBInstanceSwitchLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceSwitchLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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
      action: "DescribeDBInstanceSwitchLog",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceSwitchLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceSwitchLogResponse({}));
  }

  /**
   * Queries the primary/secondary switching logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is a replica set or sharded cluster instance.
   * *   The instance uses local physical disks to store data.
   * 
   * @param request - DescribeDBInstanceSwitchLogRequest
   * @returns DescribeDBInstanceSwitchLogResponse
   */
  async describeDBInstanceSwitchLog(request: $_model.DescribeDBInstanceSwitchLogRequest): Promise<$_model.DescribeDBInstanceSwitchLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceSwitchLogWithOptions(request, runtime);
  }

  /**
   * Queries whether Transparent Data Encryption (TDE) is enabled for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  For more information about TDE, see [TDE](https://help.aliyun.com/document_detail/131048.html).
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is a replica set or sharded cluster instance.
   * *   The storage engine of the instance is WiredTiger.
   * *   The database engine version of the instance is 4.0 or 4.2. If the database engine version is earlier than 4.0, you can call the [UpgradeDBInstanceEngineVersion](https://help.aliyun.com/document_detail/67608.html) operation to upgrade the database engine.
   * 
   * @param request - DescribeDBInstanceTDEInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceTDEInfoResponse
   */
  async describeDBInstanceTDEInfoWithOptions(request: $_model.DescribeDBInstanceTDEInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceTDEInfoResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceTDEInfo",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceTDEInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceTDEInfoResponse({}));
  }

  /**
   * Queries whether Transparent Data Encryption (TDE) is enabled for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  For more information about TDE, see [TDE](https://help.aliyun.com/document_detail/131048.html).
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is a replica set or sharded cluster instance.
   * *   The storage engine of the instance is WiredTiger.
   * *   The database engine version of the instance is 4.0 or 4.2. If the database engine version is earlier than 4.0, you can call the [UpgradeDBInstanceEngineVersion](https://help.aliyun.com/document_detail/67608.html) operation to upgrade the database engine.
   * 
   * @param request - DescribeDBInstanceTDEInfoRequest
   * @returns DescribeDBInstanceTDEInfoResponse
   */
  async describeDBInstanceTDEInfo(request: $_model.DescribeDBInstanceTDEInfoRequest): Promise<$_model.DescribeDBInstanceTDEInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceTDEInfoWithOptions(request, runtime);
  }

  /**
   * Queries a list of ApsaraDB for MongoDB instances.
   * 
   * @remarks
   * The list of replica set and standalone instances is displayed when the **DBInstanceType** parameter uses the default value **replicate**. To query a list of sharded cluster instances, you must set the **DBInstanceType** parameter to **sharding**.
   * 
   * @param request - DescribeDBInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstancesWithOptions(request: $_model.DescribeDBInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.connectionDomain)) {
      query["ConnectionDomain"] = request.connectionDomain;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceStatus)) {
      query["DBInstanceStatus"] = request.DBInstanceStatus;
    }

    if (!$dara.isNull(request.DBInstanceType)) {
      query["DBInstanceType"] = request.DBInstanceType;
    }

    if (!$dara.isNull(request.DBNodeType)) {
      query["DBNodeType"] = request.DBNodeType;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.expired)) {
      query["Expired"] = request.expired;
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

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
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
      action: "DescribeDBInstances",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstancesResponse({}));
  }

  /**
   * Queries a list of ApsaraDB for MongoDB instances.
   * 
   * @remarks
   * The list of replica set and standalone instances is displayed when the **DBInstanceType** parameter uses the default value **replicate**. To query a list of sharded cluster instances, you must set the **DBInstanceType** parameter to **sharding**.
   * 
   * @param request - DescribeDBInstancesRequest
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstances(request: $_model.DescribeDBInstancesRequest): Promise<$_model.DescribeDBInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the overview information of one or more ApsaraDB for MongoDB instances.
   * 
   * @remarks
   *   If you do not specify an instance when you call this operation, the overview information of all instances in a specific region within this account is returned.
   * *   Paged query is disabled for this operation.
   * 
   * @param request - DescribeDBInstancesOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesOverviewResponse
   */
  async describeDBInstancesOverviewWithOptions(request: $_model.DescribeDBInstancesOverviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesOverviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
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

    if (!$dara.isNull(request.showTags)) {
      query["ShowTags"] = request.showTags;
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
      action: "DescribeDBInstancesOverview",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstancesOverviewResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstancesOverviewResponse({}));
  }

  /**
   * Queries the overview information of one or more ApsaraDB for MongoDB instances.
   * 
   * @remarks
   *   If you do not specify an instance when you call this operation, the overview information of all instances in a specific region within this account is returned.
   * *   Paged query is disabled for this operation.
   * 
   * @param request - DescribeDBInstancesOverviewRequest
   * @returns DescribeDBInstancesOverviewResponse
   */
  async describeDBInstancesOverview(request: $_model.DescribeDBInstancesOverviewRequest): Promise<$_model.DescribeDBInstancesOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancesOverviewWithOptions(request, runtime);
  }

  /**
   * Queries entries in error logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeErrorLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeErrorLogRecordsResponse
   */
  async describeErrorLogRecordsWithOptions(request: $_model.DescribeErrorLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeErrorLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.logicalOperator)) {
      query["LogicalOperator"] = request.logicalOperator;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeErrorLogRecords",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeErrorLogRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeErrorLogRecordsResponse({}));
  }

  /**
   * Queries entries in error logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeErrorLogRecordsRequest
   * @returns DescribeErrorLogRecordsResponse
   */
  async describeErrorLogRecords(request: $_model.DescribeErrorLogRecordsRequest): Promise<$_model.DescribeErrorLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeErrorLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the global IP whitelist template of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalSecurityIPGroupResponse
   */
  async describeGlobalSecurityIPGroupWithOptions(request: $_model.DescribeGlobalSecurityIPGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalSecurityIPGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGlobalSecurityIPGroup",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGlobalSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGlobalSecurityIPGroupResponse({}));
  }

  /**
   * Queries the global IP whitelist template of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRequest
   * @returns DescribeGlobalSecurityIPGroupResponse
   */
  async describeGlobalSecurityIPGroup(request: $_model.DescribeGlobalSecurityIPGroupRequest): Promise<$_model.DescribeGlobalSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Queries the global IP whitelist templates associated with an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalSecurityIPGroupRelationResponse
   */
  async describeGlobalSecurityIPGroupRelationWithOptions(request: $_model.DescribeGlobalSecurityIPGroupRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalSecurityIPGroupRelationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGlobalSecurityIPGroupRelation",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGlobalSecurityIPGroupRelationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGlobalSecurityIPGroupRelationResponse({}));
  }

  /**
   * Queries the global IP whitelist templates associated with an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRelationRequest
   * @returns DescribeGlobalSecurityIPGroupRelationResponse
   */
  async describeGlobalSecurityIPGroupRelation(request: $_model.DescribeGlobalSecurityIPGroupRelationRequest): Promise<$_model.DescribeGlobalSecurityIPGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalSecurityIPGroupRelationWithOptions(request, runtime);
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
      version: "2015-12-01",
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
   * Queries the overview of a task in the task center.
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
      version: "2015-12-01",
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
   * Queries the overview of a task in the task center.
   * 
   * @param request - DescribeHistoryTasksStatRequest
   * @returns DescribeHistoryTasksStatResponse
   */
  async describeHistoryTasksStat(request: $_model.DescribeHistoryTasksStatRequest): Promise<$_model.DescribeHistoryTasksStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryTasksStatWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query whether auto-renewal is enabled for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to subscription instances.
   * 
   * @param request - DescribeInstanceAutoRenewalAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAutoRenewalAttributeResponse
   */
  async describeInstanceAutoRenewalAttributeWithOptions(request: $_model.DescribeInstanceAutoRenewalAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAutoRenewalAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceType)) {
      query["DBInstanceType"] = request.DBInstanceType;
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
      version: "2015-12-01",
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
   * You can call this operation to query whether auto-renewal is enabled for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to subscription instances.
   * 
   * @param request - DescribeInstanceAutoRenewalAttributeRequest
   * @returns DescribeInstanceAutoRenewalAttributeResponse
   */
  async describeInstanceAutoRenewalAttribute(request: $_model.DescribeInstanceAutoRenewalAttributeRequest): Promise<$_model.DescribeInstanceAutoRenewalAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the time required to restore the data of an ApsaraDB for MongoDB replica set instance that uses cloud disks.
   * 
   * @param request - DescribeInstanceRecoverTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceRecoverTimeResponse
   */
  async describeInstanceRecoverTimeWithOptions(request: $_model.DescribeInstanceRecoverTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceRecoverTimeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceRecoverTime",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceRecoverTimeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceRecoverTimeResponse({}));
  }

  /**
   * Queries the time required to restore the data of an ApsaraDB for MongoDB replica set instance that uses cloud disks.
   * 
   * @param request - DescribeInstanceRecoverTimeRequest
   * @returns DescribeInstanceRecoverTimeResponse
   */
  async describeInstanceRecoverTime(request: $_model.DescribeInstanceRecoverTimeRequest): Promise<$_model.DescribeInstanceRecoverTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceRecoverTimeWithOptions(request, runtime);
  }

  /**
   * Queries the release notes of the minor versions of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeKernelReleaseNotesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKernelReleaseNotesResponse
   */
  async describeKernelReleaseNotesWithOptions(request: $_model.DescribeKernelReleaseNotesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKernelReleaseNotesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.kernelVersion)) {
      query["KernelVersion"] = request.kernelVersion;
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
      action: "DescribeKernelReleaseNotes",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKernelReleaseNotesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKernelReleaseNotesResponse({}));
  }

  /**
   * Queries the release notes of the minor versions of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeKernelReleaseNotesRequest
   * @returns DescribeKernelReleaseNotesResponse
   */
  async describeKernelReleaseNotes(request: $_model.DescribeKernelReleaseNotesRequest): Promise<$_model.DescribeKernelReleaseNotesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKernelReleaseNotesWithOptions(request, runtime);
  }

  /**
   * Queries Key Management Service (KMS) keys that are available for disk encryption.
   * 
   * @remarks
   * Queried keys are available only for disk encryption.
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
      action: "DescribeKmsKeys",
      version: "2015-12-01",
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
   * Queries Key Management Service (KMS) keys that are available for disk encryption.
   * 
   * @remarks
   * Queried keys are available only for disk encryption.
   * 
   * @param request - DescribeKmsKeysRequest
   * @returns DescribeKmsKeysResponse
   */
  async describeKmsKeys(request: $_model.DescribeKmsKeysRequest): Promise<$_model.DescribeKmsKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKmsKeysWithOptions(request, runtime);
  }

  /**
   * Queries the logging configurations of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * This operation depends on the audit log feature of ApsaraDB for MongoDB. You can enable the audit log feature based on your business requirements. For more information, see [Enable the audit log feature](https://help.aliyun.com/document_detail/59903.html).
   * *   Starting from January 6, 2022, the official edition of the audit log feature has been launched in all regions, and new applications for the free trial edition have ended. For more information, see [Notice on official launch of the pay-as-you-go audit log feature and no more application for the free trial edition](https://help.aliyun.com/document_detail/377480.html)
   * *   You are charged for the official edition of the audit log feature based on the storage capacity that is consumed by audit logs and the retention period of the audit logs. For more information, see [Pricing of ApsaraDB for MongoDB instances](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * 
   * @param request - DescribeMongoDBLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMongoDBLogConfigResponse
   */
  async describeMongoDBLogConfigWithOptions(request: $_model.DescribeMongoDBLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMongoDBLogConfigResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMongoDBLogConfig",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMongoDBLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMongoDBLogConfigResponse({}));
  }

  /**
   * Queries the logging configurations of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * This operation depends on the audit log feature of ApsaraDB for MongoDB. You can enable the audit log feature based on your business requirements. For more information, see [Enable the audit log feature](https://help.aliyun.com/document_detail/59903.html).
   * *   Starting from January 6, 2022, the official edition of the audit log feature has been launched in all regions, and new applications for the free trial edition have ended. For more information, see [Notice on official launch of the pay-as-you-go audit log feature and no more application for the free trial edition](https://help.aliyun.com/document_detail/377480.html)
   * *   You are charged for the official edition of the audit log feature based on the storage capacity that is consumed by audit logs and the retention period of the audit logs. For more information, see [Pricing of ApsaraDB for MongoDB instances](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * 
   * @param request - DescribeMongoDBLogConfigRequest
   * @returns DescribeMongoDBLogConfigResponse
   */
  async describeMongoDBLogConfig(request: $_model.DescribeMongoDBLogConfigRequest): Promise<$_model.DescribeMongoDBLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMongoDBLogConfigWithOptions(request, runtime);
  }

  /**
   * Queries the parameter modification records of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeParameterModificationHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterModificationHistoryResponse
   */
  async describeParameterModificationHistoryWithOptions(request: $_model.DescribeParameterModificationHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterModificationHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.characterType)) {
      query["CharacterType"] = request.characterType;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeParameterModificationHistory",
      version: "2015-12-01",
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
   * Queries the parameter modification records of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeParameterModificationHistoryRequest
   * @returns DescribeParameterModificationHistoryResponse
   */
  async describeParameterModificationHistory(request: $_model.DescribeParameterModificationHistoryRequest): Promise<$_model.DescribeParameterModificationHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterModificationHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the list of default parameter templates for ApsaraDB for MongoDB instances.
   * 
   * @param request - DescribeParameterTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterTemplatesResponse
   */
  async describeParameterTemplatesWithOptions(request: $_model.DescribeParameterTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
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

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParameterTemplates",
      version: "2015-12-01",
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
   * Queries the list of default parameter templates for ApsaraDB for MongoDB instances.
   * 
   * @param request - DescribeParameterTemplatesRequest
   * @returns DescribeParameterTemplatesResponse
   */
  async describeParameterTemplates(request: $_model.DescribeParameterTemplatesRequest): Promise<$_model.DescribeParameterTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the parameter settings of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParametersResponse
   */
  async describeParametersWithOptions(request: $_model.DescribeParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.characterType)) {
      query["CharacterType"] = request.characterType;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.extraParam)) {
      query["ExtraParam"] = request.extraParam;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParameters",
      version: "2015-12-01",
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
   * Queries the parameter settings of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeParametersRequest
   * @returns DescribeParametersResponse
   */
  async describeParameters(request: $_model.DescribeParametersRequest): Promise<$_model.DescribeParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  /**
   * Queries the pricing information of an ApsaraDB for MongoDB instance.
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

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.DBInstances)) {
      query["DBInstances"] = request.DBInstances;
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

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
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
      action: "DescribePrice",
      version: "2015-12-01",
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
   * Queries the pricing information of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribePriceRequest
   * @returns DescribePriceResponse
   */
  async describePrice(request: $_model.DescribePriceRequest): Promise<$_model.DescribePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  /**
   * Queries all regions and zones supported for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  To query available regions and zones in which an ApsaraDB for MongoDB instance can be created, call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/149719.html) operation.
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
      version: "2015-12-01",
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
   * Queries all regions and zones supported for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  To query available regions and zones in which an ApsaraDB for MongoDB instance can be created, call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/149719.html) operation.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the monthly renewal price of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to subscription instances.
   * 
   * @param request - DescribeRenewalPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRenewalPriceResponse
   */
  async describeRenewalPriceWithOptions(request: $_model.DescribeRenewalPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRenewalPriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
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
      action: "DescribeRenewalPrice",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRenewalPriceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRenewalPriceResponse({}));
  }

  /**
   * Queries the monthly renewal price of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to subscription instances.
   * 
   * @param request - DescribeRenewalPriceRequest
   * @returns DescribeRenewalPriceResponse
   */
  async describeRenewalPrice(request: $_model.DescribeRenewalPriceRequest): Promise<$_model.DescribeRenewalPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRenewalPriceWithOptions(request, runtime);
  }

  /**
   * Queries the role and connection information of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to replica set instances and standalone instances, but not to sharded cluster instances.
   * 
   * @param request - DescribeReplicaSetRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeReplicaSetRoleResponse
   */
  async describeReplicaSetRoleWithOptions(request: $_model.DescribeReplicaSetRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeReplicaSetRoleResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeReplicaSetRole",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeReplicaSetRoleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeReplicaSetRoleResponse({}));
  }

  /**
   * Queries the role and connection information of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to replica set instances and standalone instances, but not to sharded cluster instances.
   * 
   * @param request - DescribeReplicaSetRoleRequest
   * @returns DescribeReplicaSetRoleResponse
   */
  async describeReplicaSetRole(request: $_model.DescribeReplicaSetRoleRequest): Promise<$_model.DescribeReplicaSetRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeReplicaSetRoleWithOptions(request, runtime);
  }

  /**
   * Queries ApsaraDB for MongoDB instances whose backups are restored within seven days.
   * 
   * @param request - DescribeRestoreDBInstanceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreDBInstanceListResponse
   */
  async describeRestoreDBInstanceListWithOptions(request: $_model.DescribeRestoreDBInstanceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRestoreDBInstanceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.creationTimeAfter)) {
      query["CreationTimeAfter"] = request.creationTimeAfter;
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
      action: "DescribeRestoreDBInstanceList",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRestoreDBInstanceListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRestoreDBInstanceListResponse({}));
  }

  /**
   * Queries ApsaraDB for MongoDB instances whose backups are restored within seven days.
   * 
   * @param request - DescribeRestoreDBInstanceListRequest
   * @returns DescribeRestoreDBInstanceListResponse
   */
  async describeRestoreDBInstanceList(request: $_model.DescribeRestoreDBInstanceListRequest): Promise<$_model.DescribeRestoreDBInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRestoreDBInstanceListWithOptions(request, runtime);
  }

  /**
   * Queries the role and zone of each node in an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * > For more information, see [View the zone of a node](https://help.aliyun.com/document_detail/123825.html).
   * This operation is applicable to replica set instances and sharded cluster instances, but cannot be performed on standalone instances.
   * 
   * @param request - DescribeRoleZoneInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRoleZoneInfoResponse
   */
  async describeRoleZoneInfoWithOptions(request: $_model.DescribeRoleZoneInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRoleZoneInfoResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRoleZoneInfo",
      version: "2015-12-01",
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
   * Queries the role and zone of each node in an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * > For more information, see [View the zone of a node](https://help.aliyun.com/document_detail/123825.html).
   * This operation is applicable to replica set instances and sharded cluster instances, but cannot be performed on standalone instances.
   * 
   * @param request - DescribeRoleZoneInfoRequest
   * @returns DescribeRoleZoneInfoResponse
   */
  async describeRoleZoneInfo(request: $_model.DescribeRoleZoneInfoRequest): Promise<$_model.DescribeRoleZoneInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRoleZoneInfoWithOptions(request, runtime);
  }

  /**
   * Queries entries in operational logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeRunningLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRunningLogRecordsResponse
   */
  async describeRunningLogRecordsWithOptions(request: $_model.DescribeRunningLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRunningLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.logicalOperator)) {
      query["LogicalOperator"] = request.logicalOperator;
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

    if (!$dara.isNull(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
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

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRunningLogRecords",
      version: "2015-12-01",
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
   * Queries entries in operational logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeRunningLogRecordsRequest
   * @returns DescribeRunningLogRecordsResponse
   */
  async describeRunningLogRecords(request: $_model.DescribeRunningLogRecordsRequest): Promise<$_model.DescribeRunningLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRunningLogRecordsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query ECS security groups that are bound to an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeSecurityGroupConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityGroupConfigurationResponse
   */
  async describeSecurityGroupConfigurationWithOptions(request: $_model.DescribeSecurityGroupConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityGroupConfigurationResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityGroupConfiguration",
      version: "2015-12-01",
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
   * You can call this operation to query ECS security groups that are bound to an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeSecurityGroupConfigurationRequest
   * @returns DescribeSecurityGroupConfigurationResponse
   */
  async describeSecurityGroupConfiguration(request: $_model.DescribeSecurityGroupConfigurationRequest): Promise<$_model.DescribeSecurityGroupConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityGroupConfigurationWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the IP whitelists of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeSecurityIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityIpsResponse
   */
  async describeSecurityIpsWithOptions(request: $_model.DescribeSecurityIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityIpsResponse> {
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

    if (!$dara.isNull(request.showHDMIps)) {
      query["ShowHDMIps"] = request.showHDMIps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityIps",
      version: "2015-12-01",
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
   * You can call this operation to query the IP whitelists of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeSecurityIpsRequest
   * @returns DescribeSecurityIpsResponse
   */
  async describeSecurityIps(request: $_model.DescribeSecurityIpsRequest): Promise<$_model.DescribeSecurityIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityIpsWithOptions(request, runtime);
  }

  /**
   * Queries connection information about an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * This operation is applicable only to sharded cluster instances.
   * 
   * @param request - DescribeShardingNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeShardingNetworkAddressResponse
   */
  async describeShardingNetworkAddressWithOptions(request: $_model.DescribeShardingNetworkAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeShardingNetworkAddressResponse> {
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
      action: "DescribeShardingNetworkAddress",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeShardingNetworkAddressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeShardingNetworkAddressResponse({}));
  }

  /**
   * Queries connection information about an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * This operation is applicable only to sharded cluster instances.
   * 
   * @param request - DescribeShardingNetworkAddressRequest
   * @returns DescribeShardingNetworkAddressResponse
   */
  async describeShardingNetworkAddress(request: $_model.DescribeShardingNetworkAddressRequest): Promise<$_model.DescribeShardingNetworkAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeShardingNetworkAddressWithOptions(request, runtime);
  }

  /**
   * Queries the details of entries in slow query logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecordsWithOptions(request: $_model.DescribeSlowLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.logicalOperator)) {
      query["LogicalOperator"] = request.logicalOperator;
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

    if (!$dara.isNull(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowLogRecords",
      version: "2015-12-01",
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
   * Queries the details of entries in slow query logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: $_model.DescribeSlowLogRecordsRequest): Promise<$_model.DescribeSlowLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries all tags in a specified region.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTags",
      version: "2015-12-01",
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
   * Queries all tags in a specified region.
   * 
   * @param request - DescribeTagsRequest
   * @returns DescribeTagsResponse
   */
  async describeTags(request: $_model.DescribeTagsRequest): Promise<$_model.DescribeTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  /**
   * Queries the list of custom keys for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can use the custom key obtained by calling the DescribeUserEncryptionKeyList operation to enable TDE. For more information, see [ModifyDBInstanceTDE](https://help.aliyun.com/document_detail/131267.html).
   * 
   * @param request - DescribeUserEncryptionKeyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserEncryptionKeyListResponse
   */
  async describeUserEncryptionKeyListWithOptions(request: $_model.DescribeUserEncryptionKeyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserEncryptionKeyListResponse> {
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

    if (!$dara.isNull(request.targetRegionId)) {
      query["TargetRegionId"] = request.targetRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserEncryptionKeyList",
      version: "2015-12-01",
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
   * Queries the list of custom keys for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can use the custom key obtained by calling the DescribeUserEncryptionKeyList operation to enable TDE. For more information, see [ModifyDBInstanceTDE](https://help.aliyun.com/document_detail/131267.html).
   * 
   * @param request - DescribeUserEncryptionKeyListRequest
   * @returns DescribeUserEncryptionKeyListResponse
   */
  async describeUserEncryptionKeyList(request: $_model.DescribeUserEncryptionKeyListRequest): Promise<$_model.DescribeUserEncryptionKeyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserEncryptionKeyListWithOptions(request, runtime);
  }

  /**
   * Destroys an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is a replica set instance or a sharded cluster instance that uses local disks.
   * *   The billing method of the instance is subscription.
   * *   The instance has expired and is in the **Locking** state.
   * **
   * **Warning** Data cannot be restored after the instance is destroyed. Proceed with caution.
   * 
   * @param request - DestroyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DestroyInstanceResponse
   */
  async destroyInstanceWithOptions(request: $_model.DestroyInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DestroyInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DestroyInstance",
      version: "2015-12-01",
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
   * Destroys an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is a replica set instance or a sharded cluster instance that uses local disks.
   * *   The billing method of the instance is subscription.
   * *   The instance has expired and is in the **Locking** state.
   * **
   * **Warning** Data cannot be restored after the instance is destroyed. Proceed with caution.
   * 
   * @param request - DestroyInstanceRequest
   * @returns DestroyInstanceResponse
   */
  async destroyInstance(request: $_model.DestroyInstanceRequest): Promise<$_model.DestroyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.destroyInstanceWithOptions(request, runtime);
  }

  /**
   * Checks whether sufficient resources are available in a region in which you want to create or upgrade an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to replica set instances and sharded cluster instances. You can call this operation to check whether resources are sufficient for creating an instance, upgrading a replica set or sharded cluster instance, or upgrading a single node of the sharded cluster instance.
   * > You can call this operation a maximum of 200 times per minute.
   * 
   * @param request - EvaluateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvaluateResourceResponse
   */
  async evaluateResourceWithOptions(request: $_model.EvaluateResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EvaluateResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
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

    if (!$dara.isNull(request.readonlyReplicas)) {
      query["ReadonlyReplicas"] = request.readonlyReplicas;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.shardsInfo)) {
      query["ShardsInfo"] = request.shardsInfo;
    }

    if (!$dara.isNull(request.storage)) {
      query["Storage"] = request.storage;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EvaluateResource",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EvaluateResourceResponse>(await this.callApi(params, req, runtime), new $_model.EvaluateResourceResponse({}));
  }

  /**
   * Checks whether sufficient resources are available in a region in which you want to create or upgrade an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to replica set instances and sharded cluster instances. You can call this operation to check whether resources are sufficient for creating an instance, upgrading a replica set or sharded cluster instance, or upgrading a single node of the sharded cluster instance.
   * > You can call this operation a maximum of 200 times per minute.
   * 
   * @param request - EvaluateResourceRequest
   * @returns EvaluateResourceResponse
   */
  async evaluateResource(request: $_model.EvaluateResourceRequest): Promise<$_model.EvaluateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.evaluateResourceWithOptions(request, runtime);
  }

  /**
   * Queries the relationship between ApsaraDB for MongoDB instances and tags.
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
      version: "2015-12-01",
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
   * Queries the relationship between ApsaraDB for MongoDB instances and tags.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Migrates an ApsaraDB for MongoDB instance to a specific zone.
   * 
   * @remarks
   *   This operation is available only for replica set instances that run MongoDB 4.2 or earlier and sharded cluster instances.
   * *   If you have applied for a public endpoint for the ApsaraDB for MongoDB instance, you must call the [ReleasePublicNetworkAddress](https://help.aliyun.com/document_detail/67604.html) operation to release the public endpoint before you call the MigrateAvailableZone operation.
   * *   Transparent data encryption (TDE) is disabled for the ApsaraDB for MongoDB instance.
   * *   The source zone and the destination zone belong to the same region.
   * *   A vSwitch is created in the destination zone. This prerequisite must be met if the instance resides in a virtual private cloud (VPC). For more information about how to create a vSwitch, see [Work with vSwitches](https://help.aliyun.com/document_detail/65387.html).
   * 
   * @param request - MigrateAvailableZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateAvailableZoneResponse
   */
  async migrateAvailableZoneWithOptions(request: $_model.MigrateAvailableZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateAvailableZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.hiddenZoneId)) {
      query["HiddenZoneId"] = request.hiddenZoneId;
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

    if (!$dara.isNull(request.secondaryZoneId)) {
      query["SecondaryZoneId"] = request.secondaryZoneId;
    }

    if (!$dara.isNull(request.vswitch)) {
      query["Vswitch"] = request.vswitch;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MigrateAvailableZone",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateAvailableZoneResponse>(await this.callApi(params, req, runtime), new $_model.MigrateAvailableZoneResponse({}));
  }

  /**
   * Migrates an ApsaraDB for MongoDB instance to a specific zone.
   * 
   * @remarks
   *   This operation is available only for replica set instances that run MongoDB 4.2 or earlier and sharded cluster instances.
   * *   If you have applied for a public endpoint for the ApsaraDB for MongoDB instance, you must call the [ReleasePublicNetworkAddress](https://help.aliyun.com/document_detail/67604.html) operation to release the public endpoint before you call the MigrateAvailableZone operation.
   * *   Transparent data encryption (TDE) is disabled for the ApsaraDB for MongoDB instance.
   * *   The source zone and the destination zone belong to the same region.
   * *   A vSwitch is created in the destination zone. This prerequisite must be met if the instance resides in a virtual private cloud (VPC). For more information about how to create a vSwitch, see [Work with vSwitches](https://help.aliyun.com/document_detail/65387.html).
   * 
   * @param request - MigrateAvailableZoneRequest
   * @returns MigrateAvailableZoneResponse
   */
  async migrateAvailableZone(request: $_model.MigrateAvailableZoneRequest): Promise<$_model.MigrateAvailableZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.migrateAvailableZoneWithOptions(request, runtime);
  }

  /**
   * You can call this operation to migrate an ApsaraDB for MongoDB instance to another zone.
   * 
   * @remarks
   * This operation is applicable only to replica set instances, but not to standalone instances or sharded cluster instances.
   * >  If you have applied for a public endpoint of the instance, you must first call the [ReleasePublicNetworkAddress](https://help.aliyun.com/document_detail/67604.html) operation to release the public endpoint.
   * 
   * @param request - MigrateToOtherZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateToOtherZoneResponse
   */
  async migrateToOtherZoneWithOptions(request: $_model.MigrateToOtherZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateToOtherZoneResponse> {
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
      version: "2015-12-01",
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
   * You can call this operation to migrate an ApsaraDB for MongoDB instance to another zone.
   * 
   * @remarks
   * This operation is applicable only to replica set instances, but not to standalone instances or sharded cluster instances.
   * >  If you have applied for a public endpoint of the instance, you must first call the [ReleasePublicNetworkAddress](https://help.aliyun.com/document_detail/67604.html) operation to release the public endpoint.
   * 
   * @param request - MigrateToOtherZoneRequest
   * @returns MigrateToOtherZoneResponse
   */
  async migrateToOtherZone(request: $_model.MigrateToOtherZoneRequest): Promise<$_model.MigrateToOtherZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.migrateToOtherZoneWithOptions(request, runtime);
  }

  /**
   * Modifies the description of the root account in an ApsaraDB for MongoDB instance.
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

    if (!$dara.isNull(request.characterType)) {
      query["CharacterType"] = request.characterType;
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
      version: "2015-12-01",
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
   * Modifies the description of the root account in an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the switching time of scheduled O\\\\\\&M tasks for an ApsaraDB for MongoDB instance.
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
      action: "ModifyActiveOperationTasks",
      version: "2015-12-01",
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
   * Modifies the switching time of scheduled O\\\\\\&M tasks for an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyActiveOperationTasksRequest
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasks(request: $_model.ModifyActiveOperationTasksRequest): Promise<$_model.ModifyActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Queries the types of logs collected by the audit log feature of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the running state when you call this operation.
   * *   This operation is applicable only to **general-purpose local-disk** or **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - ModifyAuditLogFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAuditLogFilterResponse
   */
  async modifyAuditLogFilterWithOptions(request: $_model.ModifyAuditLogFilterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAuditLogFilterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
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

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAuditLogFilter",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAuditLogFilterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAuditLogFilterResponse({}));
  }

  /**
   * Queries the types of logs collected by the audit log feature of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the running state when you call this operation.
   * *   This operation is applicable only to **general-purpose local-disk** or **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - ModifyAuditLogFilterRequest
   * @returns ModifyAuditLogFilterResponse
   */
  async modifyAuditLogFilter(request: $_model.ModifyAuditLogFilterRequest): Promise<$_model.ModifyAuditLogFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAuditLogFilterWithOptions(request, runtime);
  }

  /**
   * Enables or disables the audit log feature or configures the log storage duration for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - ModifyAuditPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAuditPolicyResponse
   */
  async modifyAuditPolicyWithOptions(request: $_model.ModifyAuditPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAuditPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditLogSwitchSource)) {
      query["AuditLogSwitchSource"] = request.auditLogSwitchSource;
    }

    if (!$dara.isNull(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.storagePeriod)) {
      query["StoragePeriod"] = request.storagePeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAuditPolicy",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAuditPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAuditPolicyResponse({}));
  }

  /**
   * Enables or disables the audit log feature or configures the log storage duration for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - ModifyAuditPolicyRequest
   * @returns ModifyAuditPolicyResponse
   */
  async modifyAuditPolicy(request: $_model.ModifyAuditPolicyRequest): Promise<$_model.ModifyAuditPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAuditPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies a backup policy for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The cross-region backup feature is suitable only for replica set or sharded cluster instances that use cloud disks.
   * 
   * @param request - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(request: $_model.ModifyBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupInterval)) {
      query["BackupInterval"] = request.backupInterval;
    }

    if (!$dara.isNull(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!$dara.isNull(request.backupRetentionPolicyOnClusterDeletion)) {
      query["BackupRetentionPolicyOnClusterDeletion"] = request.backupRetentionPolicyOnClusterDeletion;
    }

    if (!$dara.isNull(request.crossBackupPeriod)) {
      query["CrossBackupPeriod"] = request.crossBackupPeriod;
    }

    if (!$dara.isNull(request.crossBackupType)) {
      query["CrossBackupType"] = request.crossBackupType;
    }

    if (!$dara.isNull(request.crossLogRetentionType)) {
      query["CrossLogRetentionType"] = request.crossLogRetentionType;
    }

    if (!$dara.isNull(request.crossLogRetentionValue)) {
      query["CrossLogRetentionValue"] = request.crossLogRetentionValue;
    }

    if (!$dara.isNull(request.crossRetentionType)) {
      query["CrossRetentionType"] = request.crossRetentionType;
    }

    if (!$dara.isNull(request.crossRetentionValue)) {
      query["CrossRetentionValue"] = request.crossRetentionValue;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.destRegion)) {
      query["DestRegion"] = request.destRegion;
    }

    if (!$dara.isNull(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!$dara.isNull(request.enableCrossLogBackup)) {
      query["EnableCrossLogBackup"] = request.enableCrossLogBackup;
    }

    if (!$dara.isNull(request.highFrequencyBackupRetention)) {
      query["HighFrequencyBackupRetention"] = request.highFrequencyBackupRetention;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
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

    if (!$dara.isNull(request.preserveOneEachHour)) {
      query["PreserveOneEachHour"] = request.preserveOneEachHour;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.snapshotBackupType)) {
      query["SnapshotBackupType"] = request.snapshotBackupType;
    }

    if (!$dara.isNull(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupPolicy",
      version: "2015-12-01",
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
   * Modifies a backup policy for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The cross-region backup feature is suitable only for replica set or sharded cluster instances that use cloud disks.
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDBInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceAttributeResponse
   */
  async modifyDBInstanceAttributeWithOptions(request: $_model.ModifyDBInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceReleaseProtection)) {
      query["DBInstanceReleaseProtection"] = request.DBInstanceReleaseProtection;
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
      action: "ModifyDBInstanceAttribute",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceAttributeResponse({}));
  }

  /**
   * @param request - ModifyDBInstanceAttributeRequest
   * @returns ModifyDBInstanceAttributeResponse
   */
  async modifyDBInstanceAttribute(request: $_model.ModifyDBInstanceAttributeRequest): Promise<$_model.ModifyDBInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 修改实例配置
   * 
   * @param request - ModifyDBInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceConfigResponse
   */
  async modifyDBInstanceConfigWithOptions(request: $_model.ModifyDBInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configName)) {
      query["ConfigName"] = request.configName;
    }

    if (!$dara.isNull(request.configValue)) {
      query["ConfigValue"] = request.configValue;
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
      action: "ModifyDBInstanceConfig",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceConfigResponse({}));
  }

  /**
   * 修改实例配置
   * 
   * @param request - ModifyDBInstanceConfigRequest
   * @returns ModifyDBInstanceConfigResponse
   */
  async modifyDBInstanceConfig(request: $_model.ModifyDBInstanceConfigRequest): Promise<$_model.ModifyDBInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the endpoint that is used to connect to an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can modify the connection strings and ports of the following instances:
   * *   You can modify the connection strings of instances that use local or cloud disks.
   * *   You can only modify the ports of instances that use cloud disks.
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

    if (!$dara.isNull(request.newConnectionString)) {
      query["NewConnectionString"] = request.newConnectionString;
    }

    if (!$dara.isNull(request.newPort)) {
      query["NewPort"] = request.newPort;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceConnectionString",
      version: "2015-12-01",
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
   * Modifies the endpoint that is used to connect to an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can modify the connection strings and ports of the following instances:
   * *   You can modify the connection strings of instances that use local or cloud disks.
   * *   You can only modify the ports of instances that use cloud disks.
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionString(request: $_model.ModifyDBInstanceConnectionStringRequest): Promise<$_model.ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  /**
   * Modifies the name of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyDBInstanceDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceDescriptionResponse
   */
  async modifyDBInstanceDescriptionWithOptions(request: $_model.ModifyDBInstanceDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

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
      action: "ModifyDBInstanceDescription",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceDescriptionResponse({}));
  }

  /**
   * Modifies the name of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyDBInstanceDescriptionRequest
   * @returns ModifyDBInstanceDescriptionResponse
   */
  async modifyDBInstanceDescription(request: $_model.ModifyDBInstanceDescriptionRequest): Promise<$_model.ModifyDBInstanceDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the disk type of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyDBInstanceDiskTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceDiskTypeResponse
   */
  async modifyDBInstanceDiskTypeWithOptions(request: $_model.ModifyDBInstanceDiskTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceDiskTypeResponse> {
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

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dbInstanceStorageType)) {
      query["DbInstanceStorageType"] = request.dbInstanceStorageType;
    }

    if (!$dara.isNull(request.extraParam)) {
      query["ExtraParam"] = request.extraParam;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.provisionedIops)) {
      query["ProvisionedIops"] = request.provisionedIops;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceDiskType",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceDiskTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceDiskTypeResponse({}));
  }

  /**
   * Modifies the disk type of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyDBInstanceDiskTypeRequest
   * @returns ModifyDBInstanceDiskTypeResponse
   */
  async modifyDBInstanceDiskType(request: $_model.ModifyDBInstanceDiskTypeRequest): Promise<$_model.ModifyDBInstanceDiskTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceDiskTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the maintenance window of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyDBInstanceMaintainTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceMaintainTimeResponse
   */
  async modifyDBInstanceMaintainTimeWithOptions(request: $_model.ModifyDBInstanceMaintainTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceMaintainTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceMaintainTime",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceMaintainTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceMaintainTimeResponse({}));
  }

  /**
   * Modifies the maintenance window of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyDBInstanceMaintainTimeRequest
   * @returns ModifyDBInstanceMaintainTimeResponse
   */
  async modifyDBInstanceMaintainTime(request: $_model.ModifyDBInstanceMaintainTimeRequest): Promise<$_model.ModifyDBInstanceMaintainTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceMaintainTimeWithOptions(request, runtime);
  }

  /**
   * You can call this operation to set the monitoring granularity for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  This operation is applicable only to the ApsaraDB for MongoDB console of the previous version due to the change in the feature of adjusting collection intervals of monitoring data.
   * Before you call this operation, make sure that the following requirements are met:
   * *   A replica set or sharded cluster instance is used.
   * *   MongoDB 3.4 (the latest minor version) or MongoDB 4.0 is selected.
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

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
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
      action: "ModifyDBInstanceMonitor",
      version: "2015-12-01",
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
   * You can call this operation to set the monitoring granularity for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  This operation is applicable only to the ApsaraDB for MongoDB console of the previous version due to the change in the feature of adjusting collection intervals of monitoring data.
   * Before you call this operation, make sure that the following requirements are met:
   * *   A replica set or sharded cluster instance is used.
   * *   MongoDB 3.4 (the latest minor version) or MongoDB 4.0 is selected.
   * 
   * @param request - ModifyDBInstanceMonitorRequest
   * @returns ModifyDBInstanceMonitorResponse
   */
  async modifyDBInstanceMonitor(request: $_model.ModifyDBInstanceMonitorRequest): Promise<$_model.ModifyDBInstanceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceMonitorWithOptions(request, runtime);
  }

  /**
   * Extends the retention period of the classic network endpoint of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is in the Running state.
   * *   The network of the instance is in hybrid access mode.
   * >  This operation is supported by replica set instances and sharded cluster instances. This operation is not supported by standalone instances.
   * 
   * @param request - ModifyDBInstanceNetExpireTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceNetExpireTimeResponse
   */
  async modifyDBInstanceNetExpireTimeWithOptions(request: $_model.ModifyDBInstanceNetExpireTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceNetExpireTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.classicExpendExpiredDays)) {
      query["ClassicExpendExpiredDays"] = request.classicExpendExpiredDays;
    }

    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
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
      action: "ModifyDBInstanceNetExpireTime",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceNetExpireTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceNetExpireTimeResponse({}));
  }

  /**
   * Extends the retention period of the classic network endpoint of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is in the Running state.
   * *   The network of the instance is in hybrid access mode.
   * >  This operation is supported by replica set instances and sharded cluster instances. This operation is not supported by standalone instances.
   * 
   * @param request - ModifyDBInstanceNetExpireTimeRequest
   * @returns ModifyDBInstanceNetExpireTimeResponse
   */
  async modifyDBInstanceNetExpireTime(request: $_model.ModifyDBInstanceNetExpireTimeRequest): Promise<$_model.ModifyDBInstanceNetExpireTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceNetExpireTimeWithOptions(request, runtime);
  }

  /**
   * Changes the network type of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to replica set instances and sharded cluster instances, but not standalone instances. You can call this operation to change the network of an instance from a classic network to a VPC.
   * 
   * @param request - ModifyDBInstanceNetworkTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceNetworkTypeResponse
   */
  async modifyDBInstanceNetworkTypeWithOptions(request: $_model.ModifyDBInstanceNetworkTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceNetworkTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.classicExpiredDays)) {
      query["ClassicExpiredDays"] = request.classicExpiredDays;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.retainClassic)) {
      query["RetainClassic"] = request.retainClassic;
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
      action: "ModifyDBInstanceNetworkType",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceNetworkTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceNetworkTypeResponse({}));
  }

  /**
   * Changes the network type of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to replica set instances and sharded cluster instances, but not standalone instances. You can call this operation to change the network of an instance from a classic network to a VPC.
   * 
   * @param request - ModifyDBInstanceNetworkTypeRequest
   * @returns ModifyDBInstanceNetworkTypeResponse
   */
  async modifyDBInstanceNetworkType(request: $_model.ModifyDBInstanceNetworkTypeRequest): Promise<$_model.ModifyDBInstanceNetworkTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceNetworkTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the SSL settings of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * ## Usage
   * Before you call this operation, make sure that the following requirements are met:
   * *   The instance is in the running state.
   * *   The instance is a replica set instance.
   * *   The engine version of the instance is 3.4 or 4.0.
   * >  When you enable or disable SSL encryption or update the SSL certificate, the instance restarts. We recommend that you call this operation during off-peak hours.
   * 
   * @param request - ModifyDBInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceSSLResponse
   */
  async modifyDBInstanceSSLWithOptions(request: $_model.ModifyDBInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceSSLResponse> {
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

    if (!$dara.isNull(request.SSLAction)) {
      query["SSLAction"] = request.SSLAction;
    }

    if (!$dara.isNull(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceSSL",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceSSLResponse({}));
  }

  /**
   * Modifies the SSL settings of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * ## Usage
   * Before you call this operation, make sure that the following requirements are met:
   * *   The instance is in the running state.
   * *   The instance is a replica set instance.
   * *   The engine version of the instance is 3.4 or 4.0.
   * >  When you enable or disable SSL encryption or update the SSL certificate, the instance restarts. We recommend that you call this operation during off-peak hours.
   * 
   * @param request - ModifyDBInstanceSSLRequest
   * @returns ModifyDBInstanceSSLResponse
   */
  async modifyDBInstanceSSL(request: $_model.ModifyDBInstanceSSLRequest): Promise<$_model.ModifyDBInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceSSLWithOptions(request, runtime);
  }

  /**
   * Modifies the specifications or storage space of an ApsaraDB for MongoDB standalone, replica set, or serverless instance. Serverless instances are available only on the China site (aliyun.com).
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB.
   * This operation applies only to standalone and replica set instances. To modify the specifications of sharded cluster instances, you can call the [ModifyNodeSpec](https://help.aliyun.com/document_detail/61911.html), [CreateNode](https://help.aliyun.com/document_detail/61922.html), [DeleteNode](https://help.aliyun.com/document_detail/61816.html), or [ModifyNodeSpecBatch](https://help.aliyun.com/document_detail/61923.html) operation.
   * 
   * @param request - ModifyDBInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceSpecResponse
   */
  async modifyDBInstanceSpecWithOptions(request: $_model.ModifyDBInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceSpecResponse> {
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

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceStorage)) {
      query["DBInstanceStorage"] = request.DBInstanceStorage;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.extraParam)) {
      query["ExtraParam"] = request.extraParam;
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

    if (!$dara.isNull(request.readonlyReplicas)) {
      query["ReadonlyReplicas"] = request.readonlyReplicas;
    }

    if (!$dara.isNull(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
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
      action: "ModifyDBInstanceSpec",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceSpecResponse({}));
  }

  /**
   * Modifies the specifications or storage space of an ApsaraDB for MongoDB standalone, replica set, or serverless instance. Serverless instances are available only on the China site (aliyun.com).
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB.
   * This operation applies only to standalone and replica set instances. To modify the specifications of sharded cluster instances, you can call the [ModifyNodeSpec](https://help.aliyun.com/document_detail/61911.html), [CreateNode](https://help.aliyun.com/document_detail/61922.html), [DeleteNode](https://help.aliyun.com/document_detail/61816.html), or [ModifyNodeSpecBatch](https://help.aliyun.com/document_detail/61923.html) operation.
   * 
   * @param request - ModifyDBInstanceSpecRequest
   * @returns ModifyDBInstanceSpecResponse
   */
  async modifyDBInstanceSpec(request: $_model.ModifyDBInstanceSpecRequest): Promise<$_model.ModifyDBInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Modifies the transparent data encryption (TDE) status of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * TDE allows you to perform real-time I/O encryption and decryption on data files. Data is encrypted before it is written to a disk and is decrypted when it is read from the disk to the memory. For more information, see [Configure TDE](https://help.aliyun.com/document_detail/131048.html).
   * >  TDE cannot be disabled after it is enabled.
   * Before you call this operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   A replica set or sharded cluster instance is used.
   * *   The storage engine of the instance is WiredTiger.
   * *   The instance uses local disks to store data.
   * *   The database engine version of the instance is 4.0 or 4.2. If the database engine version is earlier than 4.0, you can call the [UpgradeDBInstanceEngineVersion](https://help.aliyun.com/document_detail/67608.html) operation to upgrade the database engine.
   * 
   * @param request - ModifyDBInstanceTDERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceTDEResponse
   */
  async modifyDBInstanceTDEWithOptions(request: $_model.ModifyDBInstanceTDERequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceTDEResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!$dara.isNull(request.encryptorName)) {
      query["EncryptorName"] = request.encryptorName;
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

    if (!$dara.isNull(request.roleARN)) {
      query["RoleARN"] = request.roleARN;
    }

    if (!$dara.isNull(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    if (!$dara.isNull(request.TDEStatus)) {
      query["TDEStatus"] = request.TDEStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceTDE",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceTDEResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceTDEResponse({}));
  }

  /**
   * Modifies the transparent data encryption (TDE) status of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * TDE allows you to perform real-time I/O encryption and decryption on data files. Data is encrypted before it is written to a disk and is decrypted when it is read from the disk to the memory. For more information, see [Configure TDE](https://help.aliyun.com/document_detail/131048.html).
   * >  TDE cannot be disabled after it is enabled.
   * Before you call this operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   A replica set or sharded cluster instance is used.
   * *   The storage engine of the instance is WiredTiger.
   * *   The instance uses local disks to store data.
   * *   The database engine version of the instance is 4.0 or 4.2. If the database engine version is earlier than 4.0, you can call the [UpgradeDBInstanceEngineVersion](https://help.aliyun.com/document_detail/67608.html) operation to upgrade the database engine.
   * 
   * @param request - ModifyDBInstanceTDERequest
   * @returns ModifyDBInstanceTDEResponse
   */
  async modifyDBInstanceTDE(request: $_model.ModifyDBInstanceTDERequest): Promise<$_model.ModifyDBInstanceTDEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceTDEWithOptions(request, runtime);
  }

  /**
   * Modifies the global IP whitelist template associated with an ApsaraDB for MongoDB instance.
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
      action: "ModifyGlobalSecurityIPGroup",
      version: "2015-12-01",
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
   * Modifies the global IP whitelist template associated with an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyGlobalSecurityIPGroupRequest
   * @returns ModifyGlobalSecurityIPGroupResponse
   */
  async modifyGlobalSecurityIPGroup(request: $_model.ModifyGlobalSecurityIPGroupRequest): Promise<$_model.ModifyGlobalSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a global IP whitelist template associated with an ApsaraDB for MongoDB instance.
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
      action: "ModifyGlobalSecurityIPGroupName",
      version: "2015-12-01",
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
   * Modifies the name of a global IP whitelist template associated with an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyGlobalSecurityIPGroupNameRequest
   * @returns ModifyGlobalSecurityIPGroupNameResponse
   */
  async modifyGlobalSecurityIPGroupName(request: $_model.ModifyGlobalSecurityIPGroupNameRequest): Promise<$_model.ModifyGlobalSecurityIPGroupNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupNameWithOptions(request, runtime);
  }

  /**
   * Modifies the mapping between a global whitelist template and an ApsaraDB for MongoDB instance.
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
      action: "ModifyGlobalSecurityIPGroupRelation",
      version: "2015-12-01",
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
   * Modifies the mapping between a global whitelist template and an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyGlobalSecurityIPGroupRelationRequest
   * @returns ModifyGlobalSecurityIPGroupRelationResponse
   */
  async modifyGlobalSecurityIPGroupRelation(request: $_model.ModifyGlobalSecurityIPGroupRelationRequest): Promise<$_model.ModifyGlobalSecurityIPGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * Enables or disables auto-renewal for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * This operation is applicable to subscription instances.
   * >  When auto-renewal is enabled, your payment will be collected nine days before the expiration date of ApsaraDB for MongoDB. Ensure that your account has sufficient balance.
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
      action: "ModifyInstanceAutoRenewalAttribute",
      version: "2015-12-01",
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
   * Enables or disables auto-renewal for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * This operation is applicable to subscription instances.
   * >  When auto-renewal is enabled, your payment will be collected nine days before the expiration date of ApsaraDB for MongoDB. Ensure that your account has sufficient balance.
   * 
   * @param request - ModifyInstanceAutoRenewalAttributeRequest
   * @returns ModifyInstanceAutoRenewalAttributeResponse
   */
  async modifyInstanceAutoRenewalAttribute(request: $_model.ModifyInstanceAutoRenewalAttributeRequest): Promise<$_model.ModifyInstanceAutoRenewalAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  /**
   * Disables password-free access over Virtual Private Cloud (VPC) for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is a replica set or sharded cluster instance.
   * *   The database engine version of the instance is 4.0 (with the minor version of mongodb_20190408_3.0.11 or later) or 4.2. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to view the database engine version of the instance. If necessary, you can call the [UpgradeDBInstanceEngineVersion](https://help.aliyun.com/document_detail/67608.html) operation to upgrade the database engine version of the instance.
   * *   The network type of the instance must be VPC. If the network type of the instance is classic network, you must call the [ModifyDBInstanceNetworkType](https://help.aliyun.com/document_detail/62138.html) operation to change the network type to VPC.
   * *   You can only disable but not enable password-free access over VPC.
   * 
   * @param request - ModifyInstanceVpcAuthModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceVpcAuthModeResponse
   */
  async modifyInstanceVpcAuthModeWithOptions(request: $_model.ModifyInstanceVpcAuthModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceVpcAuthModeResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.vpcAuthMode)) {
      query["VpcAuthMode"] = request.vpcAuthMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceVpcAuthMode",
      version: "2015-12-01",
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
   * Disables password-free access over Virtual Private Cloud (VPC) for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is a replica set or sharded cluster instance.
   * *   The database engine version of the instance is 4.0 (with the minor version of mongodb_20190408_3.0.11 or later) or 4.2. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to view the database engine version of the instance. If necessary, you can call the [UpgradeDBInstanceEngineVersion](https://help.aliyun.com/document_detail/67608.html) operation to upgrade the database engine version of the instance.
   * *   The network type of the instance must be VPC. If the network type of the instance is classic network, you must call the [ModifyDBInstanceNetworkType](https://help.aliyun.com/document_detail/62138.html) operation to change the network type to VPC.
   * *   You can only disable but not enable password-free access over VPC.
   * 
   * @param request - ModifyInstanceVpcAuthModeRequest
   * @returns ModifyInstanceVpcAuthModeResponse
   */
  async modifyInstanceVpcAuthMode(request: $_model.ModifyInstanceVpcAuthModeRequest): Promise<$_model.ModifyInstanceVpcAuthModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceVpcAuthModeWithOptions(request, runtime);
  }

  /**
   * Changes the specifications and storage capacity of a node of an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB.
   * > This operation is applicable only to sharded cluster instances.
   * 
   * @param request - ModifyNodeSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodeSpecResponse
   */
  async modifyNodeSpecWithOptions(request: $_model.ModifyNodeSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNodeSpecResponse> {
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

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.fromApp)) {
      query["FromApp"] = request.fromApp;
    }

    if (!$dara.isNull(request.nodeClass)) {
      query["NodeClass"] = request.nodeClass;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.nodeStorage)) {
      query["NodeStorage"] = request.nodeStorage;
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

    if (!$dara.isNull(request.readonlyReplicas)) {
      query["ReadonlyReplicas"] = request.readonlyReplicas;
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
      action: "ModifyNodeSpec",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNodeSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNodeSpecResponse({}));
  }

  /**
   * Changes the specifications and storage capacity of a node of an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB.
   * > This operation is applicable only to sharded cluster instances.
   * 
   * @param request - ModifyNodeSpecRequest
   * @returns ModifyNodeSpecResponse
   */
  async modifyNodeSpec(request: $_model.ModifyNodeSpecRequest): Promise<$_model.ModifyNodeSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNodeSpecWithOptions(request, runtime);
  }

  /**
   * Changes the configurations of mongos or shard nodes in an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB before you call this operation.
   * This operation is applicable only to sharded cluster instances.
   * When you upgrade or downgrade the configurations of multiple sharded cluster instances in batches, the specifications of the instances are limited. For example, if you want to expand the storage capacity of the instances, the storage capacity of the instances after expansion must be greater than the current capacity. When the specifications of multiple sharded cluster instances are different, limits are defined based on the specifications of a random sharded cluster instance. In this case, you may be unable to upgrade or downgrade the configurations of the instances. In this case, we recommend that you call the ModifyNodeSpec operation to individually change the configurations of each sharded cluster instance.
   * 
   * @param request - ModifyNodeSpecBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodeSpecBatchResponse
   */
  async modifyNodeSpecBatchWithOptions(request: $_model.ModifyNodeSpecBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNodeSpecBatchResponse> {
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

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.nodesInfo)) {
      query["NodesInfo"] = request.nodesInfo;
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
      action: "ModifyNodeSpecBatch",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNodeSpecBatchResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNodeSpecBatchResponse({}));
  }

  /**
   * Changes the configurations of mongos or shard nodes in an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB before you call this operation.
   * This operation is applicable only to sharded cluster instances.
   * When you upgrade or downgrade the configurations of multiple sharded cluster instances in batches, the specifications of the instances are limited. For example, if you want to expand the storage capacity of the instances, the storage capacity of the instances after expansion must be greater than the current capacity. When the specifications of multiple sharded cluster instances are different, limits are defined based on the specifications of a random sharded cluster instance. In this case, you may be unable to upgrade or downgrade the configurations of the instances. In this case, we recommend that you call the ModifyNodeSpec operation to individually change the configurations of each sharded cluster instance.
   * 
   * @param request - ModifyNodeSpecBatchRequest
   * @returns ModifyNodeSpecBatchResponse
   */
  async modifyNodeSpecBatch(request: $_model.ModifyNodeSpecBatchRequest): Promise<$_model.ModifyNodeSpecBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNodeSpecBatchWithOptions(request, runtime);
  }

  /**
   * Modifies the parameters of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the Running state when you call this operation.
   * *   If you call this operation to modify specific instance parameters and the modification for part of the parameters can take effect only after an instance restart, the instance is automatically restarted after this operation is called. You can call the [DescribeParameterTemplates](https://help.aliyun.com/document_detail/67618.html) operation to query the parameters that take effect only after the instance is restarted.
   * 
   * @param request - ModifyParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyParametersResponse
   */
  async modifyParametersWithOptions(request: $_model.ModifyParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.characterType)) {
      query["CharacterType"] = request.characterType;
    }

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

    if (!$dara.isNull(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyParameters",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyParametersResponse>(await this.callApi(params, req, runtime), new $_model.ModifyParametersResponse({}));
  }

  /**
   * Modifies the parameters of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the Running state when you call this operation.
   * *   If you call this operation to modify specific instance parameters and the modification for part of the parameters can take effect only after an instance restart, the instance is automatically restarted after this operation is called. You can call the [DescribeParameterTemplates](https://help.aliyun.com/document_detail/67618.html) operation to query the parameters that take effect only after the instance is restarted.
   * 
   * @param request - ModifyParametersRequest
   * @returns ModifyParametersResponse
   */
  async modifyParameters(request: $_model.ModifyParametersRequest): Promise<$_model.ModifyParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyParametersWithOptions(request, runtime);
  }

  /**
   * Moves an ApsaraDB for MongoDB instance to a specified resource group.
   * 
   * @remarks
   * Resource Management allows you to build an organizational structure for resources based on your business requirements. You can use resource directories, folders, accounts, and resource groups to hierarchically organize and manage resources. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @param request - ModifyResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyResourceGroupResponse
   */
  async modifyResourceGroupWithOptions(request: $_model.ModifyResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyResourceGroupResponse> {
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
      version: "2015-12-01",
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
   * Moves an ApsaraDB for MongoDB instance to a specified resource group.
   * 
   * @remarks
   * Resource Management allows you to build an organizational structure for resources based on your business requirements. You can use resource directories, folders, accounts, and resource groups to hierarchically organize and manage resources. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @param request - ModifyResourceGroupRequest
   * @returns ModifyResourceGroupResponse
   */
  async modifyResourceGroup(request: $_model.ModifyResourceGroupRequest): Promise<$_model.ModifyResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyResourceGroupWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify an ECS Security group that is bound to an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  For a sharded cluster instance, the bound ECS security group takes effect only for mongos nodes.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityGroupConfiguration",
      version: "2015-12-01",
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
   * You can call this operation to modify an ECS Security group that is bound to an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  For a sharded cluster instance, the bound ECS security group takes effect only for mongos nodes.
   * 
   * @param request - ModifySecurityGroupConfigurationRequest
   * @returns ModifySecurityGroupConfigurationResponse
   */
  async modifySecurityGroupConfiguration(request: $_model.ModifySecurityGroupConfigurationRequest): Promise<$_model.ModifySecurityGroupConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityGroupConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelist of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifySecurityIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIpsWithOptions(request: $_model.ModifySecurityIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityIps",
      version: "2015-12-01",
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
   * Modifies the IP address whitelist of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifySecurityIpsRequest
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIps(request: $_model.ModifySecurityIpsRequest): Promise<$_model.ModifySecurityIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  /**
   * Modifies the information of a task in the task center for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The actions performed by this operation for a task vary based on the current state of the task. The supported actions for a task can be obtained from the value of the actionInfo parameter in the DescribeHistoryTasks operation.
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
      version: "2015-12-01",
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
   * Modifies the information of a task in the task center for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The actions performed by this operation for a task vary based on the current state of the task. The supported actions for a task can be obtained from the value of the actionInfo parameter in the DescribeHistoryTasks operation.
   * 
   * @param request - ModifyTaskInfoRequest
   * @returns ModifyTaskInfoResponse
   */
  async modifyTaskInfo(request: $_model.ModifyTaskInfoRequest): Promise<$_model.ModifyTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTaskInfoWithOptions(request, runtime);
  }

  /**
   * Releases the internal endpoint of a shard or Configserver node in a sharded cluster instance.
   * 
   * @remarks
   *   This operation can be used to release the internal endpoint of a shard or Configserver node in a sharded cluster instance. For more information, see [Release the endpoint of a shard or Configserver node](https://help.aliyun.com/document_detail/134067.html).
   * *   To release the public endpoint of a shard or Configserver node in a sharded cluster instance, you can call the [ReleasePublicNetworkAddress](https://help.aliyun.com/document_detail/67604.html) operation.
   * 
   * @param request - ReleaseNodePrivateNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseNodePrivateNetworkAddressResponse
   */
  async releaseNodePrivateNetworkAddressWithOptions(request: $_model.ReleaseNodePrivateNetworkAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseNodePrivateNetworkAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionType)) {
      query["ConnectionType"] = request.connectionType;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseNodePrivateNetworkAddress",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseNodePrivateNetworkAddressResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseNodePrivateNetworkAddressResponse({}));
  }

  /**
   * Releases the internal endpoint of a shard or Configserver node in a sharded cluster instance.
   * 
   * @remarks
   *   This operation can be used to release the internal endpoint of a shard or Configserver node in a sharded cluster instance. For more information, see [Release the endpoint of a shard or Configserver node](https://help.aliyun.com/document_detail/134067.html).
   * *   To release the public endpoint of a shard or Configserver node in a sharded cluster instance, you can call the [ReleasePublicNetworkAddress](https://help.aliyun.com/document_detail/67604.html) operation.
   * 
   * @param request - ReleaseNodePrivateNetworkAddressRequest
   * @returns ReleaseNodePrivateNetworkAddressResponse
   */
  async releaseNodePrivateNetworkAddress(request: $_model.ReleaseNodePrivateNetworkAddressRequest): Promise<$_model.ReleaseNodePrivateNetworkAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseNodePrivateNetworkAddressWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ReleasePublicNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleasePublicNetworkAddressResponse
   */
  async releasePublicNetworkAddressWithOptions(request: $_model.ReleasePublicNetworkAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleasePublicNetworkAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionType)) {
      query["ConnectionType"] = request.connectionType;
    }

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
      action: "ReleasePublicNetworkAddress",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleasePublicNetworkAddressResponse>(await this.callApi(params, req, runtime), new $_model.ReleasePublicNetworkAddressResponse({}));
  }

  /**
   * Releases the public endpoint of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ReleasePublicNetworkAddressRequest
   * @returns ReleasePublicNetworkAddressResponse
   */
  async releasePublicNetworkAddress(request: $_model.ReleasePublicNetworkAddressRequest): Promise<$_model.ReleasePublicNetworkAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releasePublicNetworkAddressWithOptions(request, runtime);
  }

  /**
   * Manually renews an ApsaraDB for MongoDB subscription instance.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and pricing of ApsaraDB for MongoDB before you call this operation. For more information about the pricing of ApsaraDB for MongoDB, visit the [pricing tab of the product buy page](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * This operation is only applicable to instances that use the subscription billing method.
   * 
   * @param request - RenewDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewDBInstanceResponse
   */
  async renewDBInstanceWithOptions(request: $_model.RenewDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewDBInstanceResponse> {
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

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
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
      action: "RenewDBInstance",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewDBInstanceResponse({}));
  }

  /**
   * Manually renews an ApsaraDB for MongoDB subscription instance.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and pricing of ApsaraDB for MongoDB before you call this operation. For more information about the pricing of ApsaraDB for MongoDB, visit the [pricing tab of the product buy page](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * This operation is only applicable to instances that use the subscription billing method.
   * 
   * @param request - RenewDBInstanceRequest
   * @returns RenewDBInstanceResponse
   */
  async renewDBInstance(request: $_model.RenewDBInstanceRequest): Promise<$_model.RenewDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewDBInstanceWithOptions(request, runtime);
  }

  /**
   * Resets the password of the root account in an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  This operation can be used to reset only the password of the root account of an instance.
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

    if (!$dara.isNull(request.characterType)) {
      query["CharacterType"] = request.characterType;
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
      version: "2015-12-01",
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
   * Resets the password of the root account in an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  This operation can be used to reset only the password of the root account of an instance.
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: $_model.ResetAccountPasswordRequest): Promise<$_model.ResetAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Restarts an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation can also be used to restart an instance, or restart a shard or mongos node in a sharded cluster instance.
   * 
   * @param request - RestartDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstanceWithOptions(request: $_model.RestartDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDBInstanceResponse> {
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
      action: "RestartDBInstance",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartDBInstanceResponse({}));
  }

  /**
   * Restarts an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation can also be used to restart an instance, or restart a shard or mongos node in a sharded cluster instance.
   * 
   * @param request - RestartDBInstanceRequest
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstance(request: $_model.RestartDBInstanceRequest): Promise<$_model.RestartDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  /**
   * Restarts a node in an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can call this operation to restart a node in a replica set instance or a child instance in a sharded cluster instance.
   * >  When you call this operation, the instance must meet the following requirements:
   * *   The instance is in the Running state.
   * *   The instance is a replica set or sharded cluster instance of the standard edition.
   * 
   * @param request - RestartNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartNodeResponse
   */
  async restartNodeWithOptions(request: $_model.RestartNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartNodeResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartNode",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartNodeResponse>(await this.callApi(params, req, runtime), new $_model.RestartNodeResponse({}));
  }

  /**
   * Restarts a node in an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can call this operation to restart a node in a replica set instance or a child instance in a sharded cluster instance.
   * >  When you call this operation, the instance must meet the following requirements:
   * *   The instance is in the Running state.
   * *   The instance is a replica set or sharded cluster instance of the standard edition.
   * 
   * @param request - RestartNodeRequest
   * @returns RestartNodeResponse
   */
  async restartNode(request: $_model.RestartNodeRequest): Promise<$_model.RestartNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartNodeWithOptions(request, runtime);
  }

  /**
   * Switches the primary and secondary nodes for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The instance must be running when you call this operation.
   * > 
   * *   This operation is applicable to replica set instances and sharded cluster instances, but cannot be performed on standalone instances.
   * *   On replica set instances, the switch is performed between instances. On sharded cluster instances, the switch is performed between shards.
   * 
   * @param request - SwitchDBInstanceHARequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchDBInstanceHAResponse
   */
  async switchDBInstanceHAWithOptions(request: $_model.SwitchDBInstanceHARequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchDBInstanceHAResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.roleIds)) {
      query["RoleIds"] = request.roleIds;
    }

    if (!$dara.isNull(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchDBInstanceHA",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchDBInstanceHAResponse>(await this.callApi(params, req, runtime), new $_model.SwitchDBInstanceHAResponse({}));
  }

  /**
   * Switches the primary and secondary nodes for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The instance must be running when you call this operation.
   * > 
   * *   This operation is applicable to replica set instances and sharded cluster instances, but cannot be performed on standalone instances.
   * *   On replica set instances, the switch is performed between instances. On sharded cluster instances, the switch is performed between shards.
   * 
   * @param request - SwitchDBInstanceHARequest
   * @returns SwitchDBInstanceHAResponse
   */
  async switchDBInstanceHA(request: $_model.SwitchDBInstanceHARequest): Promise<$_model.SwitchDBInstanceHAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchDBInstanceHAWithOptions(request, runtime);
  }

  /**
   * Binds tags to ApsaraDB for MongoDB instances.
   * 
   * @remarks
   * If you have a large number of instances, you can create multiple tags, bind the tags to the instances, and filter the instances by tag.
   * *   A tag consists of a key and a value. Each key must be unique in a region for an Alibaba Cloud account. Different keys can be mapped to the same value.
   * *   If the tag that you specify does not exist, this tag is automatically created and bound to the specified instance.
   * *   If a tag that has the same key is already bound to the instance, the new tag overwrites the existing tag.
   * *   You can bind up to 20 tags to each instance.
   * *   You can bind tags to up to 50 instances each time you call the operation.
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      version: "2015-12-01",
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
   * Binds tags to ApsaraDB for MongoDB instances.
   * 
   * @remarks
   * If you have a large number of instances, you can create multiple tags, bind the tags to the instances, and filter the instances by tag.
   * *   A tag consists of a key and a value. Each key must be unique in a region for an Alibaba Cloud account. Different keys can be mapped to the same value.
   * *   If the tag that you specify does not exist, this tag is automatically created and bound to the specified instance.
   * *   If a tag that has the same key is already bound to the instance, the new tag overwrites the existing tag.
   * *   You can bind up to 20 tags to each instance.
   * *   You can bind tags to up to 50 instances each time you call the operation.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Switches the backup mode of an ApsaraDB for MongoDB sharded cluster instance to the cluster backup mode. After the instance is switched to the cluster backup mode, the instance supports high-frequency backup.
   * 
   * @remarks
   *   The instance is an ApsaraDB for MongoDB sharded cluster instance that runs MongoDB 4.4 or later and uses enhanced SSDs (ESSDs) to store data.
   * *   You can call the TransferClusterBackup operation only for instances that are created before October 19, 2023 to switch the instances to the cluster backup mode. Cloud disk-based sharded cluster instances that are created on or after October 19, 2023 are set to the cluster backup mode by default.
   * 
   * @param request - TransferClusterBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferClusterBackupResponse
   */
  async transferClusterBackupWithOptions(request: $_model.TransferClusterBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferClusterBackupResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferClusterBackup",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferClusterBackupResponse>(await this.callApi(params, req, runtime), new $_model.TransferClusterBackupResponse({}));
  }

  /**
   * Switches the backup mode of an ApsaraDB for MongoDB sharded cluster instance to the cluster backup mode. After the instance is switched to the cluster backup mode, the instance supports high-frequency backup.
   * 
   * @remarks
   *   The instance is an ApsaraDB for MongoDB sharded cluster instance that runs MongoDB 4.4 or later and uses enhanced SSDs (ESSDs) to store data.
   * *   You can call the TransferClusterBackup operation only for instances that are created before October 19, 2023 to switch the instances to the cluster backup mode. Cloud disk-based sharded cluster instances that are created on or after October 19, 2023 are set to the cluster backup mode by default.
   * 
   * @param request - TransferClusterBackupRequest
   * @returns TransferClusterBackupResponse
   */
  async transferClusterBackup(request: $_model.TransferClusterBackupRequest): Promise<$_model.TransferClusterBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferClusterBackupWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of an instance from pay-as-you-go to subscription or from subscription to pay-as-you-go.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB
   * Before you call this API operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is in the Running state.
   * *   Your instance has no unpaid billing method change orders.
   * *   The instance type is available for purchase. For more information about unavailable instance types, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * > To change the billing method of an instance whose instance type is no longer available to purchase, call the [ModifyDBInstanceSpec](https://help.aliyun.com/document_detail/61816.html) or [ModifyNodeSpec](https://help.aliyun.com/document_detail/61923.html) operation to change the instance type first.
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

    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
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

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
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
      action: "TransformInstanceChargeType",
      version: "2015-12-01",
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
   * Changes the billing method of an instance from pay-as-you-go to subscription or from subscription to pay-as-you-go.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB
   * Before you call this API operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is in the Running state.
   * *   Your instance has no unpaid billing method change orders.
   * *   The instance type is available for purchase. For more information about unavailable instance types, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * > To change the billing method of an instance whose instance type is no longer available to purchase, call the [ModifyDBInstanceSpec](https://help.aliyun.com/document_detail/61816.html) or [ModifyNodeSpec](https://help.aliyun.com/document_detail/61923.html) operation to change the instance type first.
   * 
   * @param request - TransformInstanceChargeTypeRequest
   * @returns TransformInstanceChargeTypeResponse
   */
  async transformInstanceChargeType(request: $_model.TransformInstanceChargeTypeRequest): Promise<$_model.TransformInstanceChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transformInstanceChargeTypeWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of an ApsaraDB for MongoDB instance from pay-as-you-go to subscription.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * A subscription instance cannot be changed to a pay-as-you-go instance. To avoid wasting resources, proceed with caution.
   * Before you call this API operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is in the running state.
   * *   The billing method of the instance is pay-as-you-go.
   * *   The instance has no unpaid subscription orders.
   * *   The instance type is available for purchase. For more information about unavailable instance types, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * >  To change the billing method of an instance whose instance type is no longer available to subscription, call the [ModifyDBInstanceSpec](https://help.aliyun.com/document_detail/61816.html) or [ModifyNodeSpec](https://help.aliyun.com/document_detail/61923.html) operation to first change the instance type.
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

    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransformToPrePaid",
      version: "2015-12-01",
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
   * Changes the billing method of an ApsaraDB for MongoDB instance from pay-as-you-go to subscription.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * A subscription instance cannot be changed to a pay-as-you-go instance. To avoid wasting resources, proceed with caution.
   * Before you call this API operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is in the running state.
   * *   The billing method of the instance is pay-as-you-go.
   * *   The instance has no unpaid subscription orders.
   * *   The instance type is available for purchase. For more information about unavailable instance types, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * >  To change the billing method of an instance whose instance type is no longer available to subscription, call the [ModifyDBInstanceSpec](https://help.aliyun.com/document_detail/61816.html) or [ModifyNodeSpec](https://help.aliyun.com/document_detail/61923.html) operation to first change the instance type.
   * 
   * @param request - TransformToPrePaidRequest
   * @returns TransformToPrePaidResponse
   */
  async transformToPrePaid(request: $_model.TransformToPrePaidRequest): Promise<$_model.TransformToPrePaidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transformToPrePaidWithOptions(request, runtime);
  }

  /**
   * Removes a tag if the tag is not added to another instance.
   * 
   * @remarks
   * > 
   * *   You can remove up to 20 tags at a time.
   * *   If you remove a tag from all instances, the tag is automatically deleted.
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      version: "2015-12-01",
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
   * Removes a tag if the tag is not added to another instance.
   * 
   * @remarks
   * > 
   * *   You can remove up to 20 tags at a time.
   * *   If you remove a tag from all instances, the tag is automatically deleted.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Upgrades the database version of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The instance must be in the running state when you call this operation.
   * > * The available database versions depend on the storage engine used by the instance. For more information, see [Upgrades of MongoDB major versions](https://help.aliyun.com/document_detail/398673.html). You can also call the [DescribeAvailableEngineVersion](https://help.aliyun.com/document_detail/141355.html) operation to query the available database versions.
   * > * You cannot downgrade the MongoDB version of an instance after you upgrade it.
   * > * The instance is automatically restarted for two to three times during the upgrade process. Make sure that you upgrade the instance during off-peak hours.
   * 
   * @param request - UpgradeDBInstanceEngineVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBInstanceEngineVersionResponse
   */
  async upgradeDBInstanceEngineVersionWithOptions(request: $_model.UpgradeDBInstanceEngineVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBInstanceEngineVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeDBInstanceEngineVersion",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeDBInstanceEngineVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeDBInstanceEngineVersionResponse({}));
  }

  /**
   * Upgrades the database version of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The instance must be in the running state when you call this operation.
   * > * The available database versions depend on the storage engine used by the instance. For more information, see [Upgrades of MongoDB major versions](https://help.aliyun.com/document_detail/398673.html). You can also call the [DescribeAvailableEngineVersion](https://help.aliyun.com/document_detail/141355.html) operation to query the available database versions.
   * > * You cannot downgrade the MongoDB version of an instance after you upgrade it.
   * > * The instance is automatically restarted for two to three times during the upgrade process. Make sure that you upgrade the instance during off-peak hours.
   * 
   * @param request - UpgradeDBInstanceEngineVersionRequest
   * @returns UpgradeDBInstanceEngineVersionResponse
   */
  async upgradeDBInstanceEngineVersion(request: $_model.UpgradeDBInstanceEngineVersionRequest): Promise<$_model.UpgradeDBInstanceEngineVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBInstanceEngineVersionWithOptions(request, runtime);
  }

  /**
   * Upgrades the minor version of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * When you call the UpgradeDBInstanceKernelVersion operation, the instance must be in the Running state.
   * > * The UpgradeDBInstanceKernelVersion operation is applicable to replica set and sharded cluster instances, but not to standalone instances.
   * > * The instance will be restarted once during the upgrade. Call this operation during off-peak hours.
   * 
   * @param request - UpgradeDBInstanceKernelVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBInstanceKernelVersionResponse
   */
  async upgradeDBInstanceKernelVersionWithOptions(request: $_model.UpgradeDBInstanceKernelVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBInstanceKernelVersionResponse> {
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

    if (!$dara.isNull(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeDBInstanceKernelVersion",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeDBInstanceKernelVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeDBInstanceKernelVersionResponse({}));
  }

  /**
   * Upgrades the minor version of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * When you call the UpgradeDBInstanceKernelVersion operation, the instance must be in the Running state.
   * > * The UpgradeDBInstanceKernelVersion operation is applicable to replica set and sharded cluster instances, but not to standalone instances.
   * > * The instance will be restarted once during the upgrade. Call this operation during off-peak hours.
   * 
   * @param request - UpgradeDBInstanceKernelVersionRequest
   * @returns UpgradeDBInstanceKernelVersionResponse
   */
  async upgradeDBInstanceKernelVersion(request: $_model.UpgradeDBInstanceKernelVersionRequest): Promise<$_model.UpgradeDBInstanceKernelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBInstanceKernelVersionWithOptions(request, runtime);
  }

}
