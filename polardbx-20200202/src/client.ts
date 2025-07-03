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
      'ap-northeast-1': "polardbx.aliyuncs.com",
      'ap-northeast-2-pop': "polardbx.aliyuncs.com",
      'ap-south-1': "polardbx.aliyuncs.com",
      'ap-southeast-2': "polardbx.aliyuncs.com",
      'ap-southeast-3': "polardbx.aliyuncs.com",
      'ap-southeast-5': "polardbx.aliyuncs.com",
      'cn-beijing-finance-1': "polardbx.aliyuncs.com",
      'cn-beijing-finance-pop': "polardbx.aliyuncs.com",
      'cn-beijing-gov-1': "polardbx.aliyuncs.com",
      'cn-beijing-nu16-b01': "polardbx.aliyuncs.com",
      'cn-edge-1': "polardbx.aliyuncs.com",
      'cn-fujian': "polardbx.aliyuncs.com",
      'cn-haidian-cm12-c01': "polardbx.aliyuncs.com",
      'cn-hangzhou-bj-b01': "polardbx.aliyuncs.com",
      'cn-hangzhou-finance': "polardbx.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "polardbx.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "polardbx.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "polardbx.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "polardbx.aliyuncs.com",
      'cn-hangzhou-test-306': "polardbx.aliyuncs.com",
      'cn-hongkong-finance-pop': "polardbx.aliyuncs.com",
      'cn-huhehaote-nebula-1': "polardbx.aliyuncs.com",
      'cn-north-2-gov-1': "polardbx.aliyuncs.com",
      'cn-qingdao-nebula': "polardbx.aliyuncs.com",
      'cn-shanghai-et15-b01': "polardbx.aliyuncs.com",
      'cn-shanghai-et2-b01': "polardbx.aliyuncs.com",
      'cn-shanghai-finance-1': "polardbx.aliyuncs.com",
      'cn-shanghai-inner': "polardbx.aliyuncs.com",
      'cn-shanghai-internal-test-1': "polardbx.aliyuncs.com",
      'cn-shenzhen-finance-1': "polardbx.aliyuncs.com",
      'cn-shenzhen-inner': "polardbx.aliyuncs.com",
      'cn-shenzhen-st4-d01': "polardbx.aliyuncs.com",
      'cn-shenzhen-su18-b01': "polardbx.aliyuncs.com",
      'cn-wuhan': "polardbx.aliyuncs.com",
      'cn-wulanchabu': "polardbx.aliyuncs.com",
      'cn-yushanfang': "polardbx.aliyuncs.com",
      'cn-zhangbei': "polardbx.aliyuncs.com",
      'cn-zhangbei-na61-b01': "polardbx.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "polardbx.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "polardbx.aliyuncs.com",
      'eu-central-1': "polardbx.aliyuncs.com",
      'eu-west-1': "polardbx.aliyuncs.com",
      'eu-west-1-oxs': "polardbx.aliyuncs.com",
      'me-east-1': "polardbx.aliyuncs.com",
      'rus-west-1-pop': "polardbx.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("polardbx", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AlignStoragePrimaryAzoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AlignStoragePrimaryAzoneResponse
   */
  async alignStoragePrimaryAzoneWithOptions(request: $_model.AlignStoragePrimaryAzoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AlignStoragePrimaryAzoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.storageInstanceName)) {
      query["StorageInstanceName"] = request.storageInstanceName;
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
      action: "AlignStoragePrimaryAzone",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AlignStoragePrimaryAzoneResponse>(await this.callApi(params, req, runtime), new $_model.AlignStoragePrimaryAzoneResponse({}));
  }

  /**
   * @param request - AlignStoragePrimaryAzoneRequest
   * @returns AlignStoragePrimaryAzoneResponse
   */
  async alignStoragePrimaryAzone(request: $_model.AlignStoragePrimaryAzoneRequest): Promise<$_model.AlignStoragePrimaryAzoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.alignStoragePrimaryAzoneWithOptions(request, runtime);
  }

  /**
   * 开通冷存储
   * 
   * @param request - AllocateColdDataVolumeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateColdDataVolumeResponse
   */
  async allocateColdDataVolumeWithOptions(request: $_model.AllocateColdDataVolumeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateColdDataVolumeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateColdDataVolume",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocateColdDataVolumeResponse>(await this.callApi(params, req, runtime), new $_model.AllocateColdDataVolumeResponse({}));
  }

  /**
   * 开通冷存储
   * 
   * @param request - AllocateColdDataVolumeRequest
   * @returns AllocateColdDataVolumeResponse
   */
  async allocateColdDataVolume(request: $_model.AllocateColdDataVolumeRequest): Promise<$_model.AllocateColdDataVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateColdDataVolumeWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
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
      action: "AllocateInstancePublicConnection",
      version: "2020-02-02",
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
   * @param request - AllocateInstancePublicConnectionRequest
   * @returns AllocateInstancePublicConnectionResponse
   */
  async allocateInstancePublicConnection(request: $_model.AllocateInstancePublicConnectionRequest): Promise<$_model.AllocateInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
   * 取消主动运维任务
   * 
   * @param request - CancelActiveOperationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelActiveOperationTasksResponse
   */
  async cancelActiveOperationTasksWithOptions(request: $_model.CancelActiveOperationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelActiveOperationTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelActiveOperationTasks",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new $_model.CancelActiveOperationTasksResponse({}));
  }

  /**
   * 取消主动运维任务
   * 
   * @param request - CancelActiveOperationTasksRequest
   * @returns CancelActiveOperationTasksResponse
   */
  async cancelActiveOperationTasks(request: $_model.CancelActiveOperationTasksRequest): Promise<$_model.CancelActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * 修改实例所在资源组.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2020-02-02",
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
   * 修改实例所在资源组.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - CheckCloudResourceAuthorizedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCloudResourceAuthorizedResponse
   */
  async checkCloudResourceAuthorizedWithOptions(request: $_model.CheckCloudResourceAuthorizedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCloudResourceAuthorizedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckCloudResourceAuthorized",
      version: "2020-02-02",
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
   * @param request - CheckCloudResourceAuthorizedRequest
   * @returns CheckCloudResourceAuthorizedResponse
   */
  async checkCloudResourceAuthorized(request: $_model.CheckCloudResourceAuthorizedRequest): Promise<$_model.CheckCloudResourceAuthorizedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCloudResourceAuthorizedWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityAccountName)) {
      query["SecurityAccountName"] = request.securityAccountName;
    }

    if (!$dara.isNull(request.securityAccountPassword)) {
      query["SecurityAccountPassword"] = request.securityAccountPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccount",
      version: "2020-02-02",
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
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * @param request - CreateBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupResponse
   */
  async createBackupWithOptions(request: $_model.CreateBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackup",
      version: "2020-02-02",
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
   * @param request - CreateBackupRequest
   * @returns CreateBackupResponse
   */
  async createBackup(request: $_model.CreateBackupRequest): Promise<$_model.CreateBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBResponse
   */
  async createDBWithOptions(request: $_model.CreateDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPrivilege)) {
      query["AccountPrivilege"] = request.accountPrivilege;
    }

    if (!$dara.isNull(request.charset)) {
      query["Charset"] = request.charset;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.dbDescription)) {
      query["DbDescription"] = request.dbDescription;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityAccountName)) {
      query["SecurityAccountName"] = request.securityAccountName;
    }

    if (!$dara.isNull(request.securityAccountPassword)) {
      query["SecurityAccountPassword"] = request.securityAccountPassword;
    }

    if (!$dara.isNull(request.storagePoolName)) {
      query["StoragePoolName"] = request.storagePoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDB",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBResponse({}));
  }

  /**
   * @param request - CreateDBRequest
   * @returns CreateDBResponse
   */
  async createDB(request: $_model.CreateDBRequest): Promise<$_model.CreateDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBWithOptions(request, runtime);
  }

  /**
   * 创建实例
   * 
   * @param tmpReq - CreateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceResponse
   */
  async createDBInstanceWithOptions(tmpReq: $_model.CreateDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDBInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extraParams)) {
      request.extraParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extraParams, "ExtraParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.CNNodeCount)) {
      query["CNNodeCount"] = request.CNNodeCount;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cnClass)) {
      query["CnClass"] = request.cnClass;
    }

    if (!$dara.isNull(request.DBNodeClass)) {
      query["DBNodeClass"] = request.DBNodeClass;
    }

    if (!$dara.isNull(request.DBNodeCount)) {
      query["DBNodeCount"] = request.DBNodeCount;
    }

    if (!$dara.isNull(request.DNNodeCount)) {
      query["DNNodeCount"] = request.DNNodeCount;
    }

    if (!$dara.isNull(request.dnClass)) {
      query["DnClass"] = request.dnClass;
    }

    if (!$dara.isNull(request.dnStorageSpace)) {
      query["DnStorageSpace"] = request.dnStorageSpace;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.extraParamsShrink)) {
      query["ExtraParams"] = request.extraParamsShrink;
    }

    if (!$dara.isNull(request.isColumnarReadDBInstance)) {
      query["IsColumnarReadDBInstance"] = request.isColumnarReadDBInstance;
    }

    if (!$dara.isNull(request.isReadDBInstance)) {
      query["IsReadDBInstance"] = request.isReadDBInstance;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.primaryDBInstanceName)) {
      query["PrimaryDBInstanceName"] = request.primaryDBInstanceName;
    }

    if (!$dara.isNull(request.primaryZone)) {
      query["PrimaryZone"] = request.primaryZone;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.secondaryZone)) {
      query["SecondaryZone"] = request.secondaryZone;
    }

    if (!$dara.isNull(request.series)) {
      query["Series"] = request.series;
    }

    if (!$dara.isNull(request.tertiaryZone)) {
      query["TertiaryZone"] = request.tertiaryZone;
    }

    if (!$dara.isNull(request.topologyType)) {
      query["TopologyType"] = request.topologyType;
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
      action: "CreateDBInstance",
      version: "2020-02-02",
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
   * 创建实例
   * 
   * @param request - CreateDBInstanceRequest
   * @returns CreateDBInstanceResponse
   */
  async createDBInstance(request: $_model.CreateDBInstanceRequest): Promise<$_model.CreateDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSuperAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSuperAccountResponse
   */
  async createSuperAccountWithOptions(request: $_model.CreateSuperAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSuperAccountResponse> {
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

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSuperAccount",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSuperAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateSuperAccountResponse({}));
  }

  /**
   * @param request - CreateSuperAccountRequest
   * @returns CreateSuperAccountResponse
   */
  async createSuperAccount(request: $_model.CreateSuperAccountRequest): Promise<$_model.CreateSuperAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSuperAccountWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityAccountName)) {
      query["SecurityAccountName"] = request.securityAccountName;
    }

    if (!$dara.isNull(request.securityAccountPassword)) {
      query["SecurityAccountPassword"] = request.securityAccountPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccount",
      version: "2020-02-02",
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
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBResponse
   */
  async deleteDBWithOptions(request: $_model.DeleteDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDB",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBResponse({}));
  }

  /**
   * @param request - DeleteDBRequest
   * @returns DeleteDBResponse
   */
  async deleteDB(request: $_model.DeleteDBRequest): Promise<$_model.DeleteDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstanceWithOptions(request: $_model.DeleteDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBInstance",
      version: "2020-02-02",
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
   * @param request - DeleteDBInstanceRequest
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstance(request: $_model.DeleteDBInstanceRequest): Promise<$_model.DeleteDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAccountListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountListResponse
   */
  async describeAccountListWithOptions(request: $_model.DescribeAccountListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccountList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountListResponse({}));
  }

  /**
   * @param request - DescribeAccountListRequest
   * @returns DescribeAccountListResponse
   */
  async describeAccountList(request: $_model.DescribeAccountListRequest): Promise<$_model.DescribeAccountListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountListWithOptions(request, runtime);
  }

  /**
   * 展示全局运维窗口配置
   * 
   * @param request - DescribeActiveOperationMaintainConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationMaintainConfResponse
   */
  async describeActiveOperationMaintainConfWithOptions(request: $_model.DescribeActiveOperationMaintainConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationMaintainConfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeActiveOperationMaintainConf",
      version: "2020-02-02",
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
   * 展示全局运维窗口配置
   * 
   * @param request - DescribeActiveOperationMaintainConfRequest
   * @returns DescribeActiveOperationMaintainConfResponse
   */
  async describeActiveOperationMaintainConf(request: $_model.DescribeActiveOperationMaintainConfRequest): Promise<$_model.DescribeActiveOperationMaintainConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationMaintainConfWithOptions(request, runtime);
  }

  /**
   * 获取主动运维任务数量
   * 
   * @param request - DescribeActiveOperationTaskCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationTaskCountResponse
   */
  async describeActiveOperationTaskCountWithOptions(request: $_model.DescribeActiveOperationTaskCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationTaskCountResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeActiveOperationTaskCount",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActiveOperationTaskCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActiveOperationTaskCountResponse({}));
  }

  /**
   * 获取主动运维任务数量
   * 
   * @param request - DescribeActiveOperationTaskCountRequest
   * @returns DescribeActiveOperationTaskCountResponse
   */
  async describeActiveOperationTaskCount(request: $_model.DescribeActiveOperationTaskCountRequest): Promise<$_model.DescribeActiveOperationTaskCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTaskCountWithOptions(request, runtime);
  }

  /**
   * 获取待执行自动运维任务列表
   * 
   * @param request - DescribeActiveOperationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasksWithOptions(request: $_model.DescribeActiveOperationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeActiveOperationTasks",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActiveOperationTasksResponse({}));
  }

  /**
   * 获取待执行自动运维任务列表
   * 
   * @param request - DescribeActiveOperationTasksRequest
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasks(request: $_model.DescribeActiveOperationTasksRequest): Promise<$_model.DescribeActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * 冷存储表列表
   * 
   * @param request - DescribeArchiveTableListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeArchiveTableListResponse
   */
  async describeArchiveTableListWithOptions(request: $_model.DescribeArchiveTableListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeArchiveTableListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeArchiveTableList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeArchiveTableListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeArchiveTableListResponse({}));
  }

  /**
   * 冷存储表列表
   * 
   * @param request - DescribeArchiveTableListRequest
   * @returns DescribeArchiveTableListResponse
   */
  async describeArchiveTableList(request: $_model.DescribeArchiveTableListRequest): Promise<$_model.DescribeArchiveTableListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeArchiveTableListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: $_model.DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPolicy",
      version: "2020-02-02",
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
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * 备份集详情
   * 
   * @param request - DescribeBackupSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupSetResponse
   */
  async describeBackupSetWithOptions(request: $_model.DescribeBackupSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.destCrossRegion)) {
      query["DestCrossRegion"] = request.destCrossRegion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupSet",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupSetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupSetResponse({}));
  }

  /**
   * 备份集详情
   * 
   * @param request - DescribeBackupSetRequest
   * @returns DescribeBackupSetResponse
   */
  async describeBackupSet(request: $_model.DescribeBackupSetRequest): Promise<$_model.DescribeBackupSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupSetWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupSetListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupSetListResponse
   */
  async describeBackupSetListWithOptions(request: $_model.DescribeBackupSetListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupSetListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupSetList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupSetListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupSetListResponse({}));
  }

  /**
   * @param request - DescribeBackupSetListRequest
   * @returns DescribeBackupSetListResponse
   */
  async describeBackupSetList(request: $_model.DescribeBackupSetListRequest): Promise<$_model.DescribeBackupSetListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupSetListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBinaryLogListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBinaryLogListResponse
   */
  async describeBinaryLogListWithOptions(request: $_model.DescribeBinaryLogListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBinaryLogListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBinaryLogList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBinaryLogListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBinaryLogListResponse({}));
  }

  /**
   * @param request - DescribeBinaryLogListRequest
   * @returns DescribeBinaryLogListResponse
   */
  async describeBinaryLogList(request: $_model.DescribeBinaryLogListRequest): Promise<$_model.DescribeBinaryLogListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBinaryLogListWithOptions(request, runtime);
  }

  /**
   * 查询CDC信息
   * 
   * @param request - DescribeCdcInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdcInfoResponse
   */
  async describeCdcInfoWithOptions(request: $_model.DescribeCdcInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdcInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdcInfo",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdcInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdcInfoResponse({}));
  }

  /**
   * 查询CDC信息
   * 
   * @param request - DescribeCdcInfoRequest
   * @returns DescribeCdcInfoResponse
   */
  async describeCdcInfo(request: $_model.DescribeCdcInfoRequest): Promise<$_model.DescribeCdcInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdcInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeCharacterSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCharacterSetResponse
   */
  async describeCharacterSetWithOptions(request: $_model.DescribeCharacterSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCharacterSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCharacterSet",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCharacterSetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCharacterSetResponse({}));
  }

  /**
   * @param request - DescribeCharacterSetRequest
   * @returns DescribeCharacterSetResponse
   */
  async describeCharacterSet(request: $_model.DescribeCharacterSetRequest): Promise<$_model.DescribeCharacterSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCharacterSetWithOptions(request, runtime);
  }

  /**
   * 冷存储基础信息
   * 
   * @param request - DescribeColdDataBasicInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeColdDataBasicInfoResponse
   */
  async describeColdDataBasicInfoWithOptions(request: $_model.DescribeColdDataBasicInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeColdDataBasicInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeColdDataBasicInfo",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeColdDataBasicInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeColdDataBasicInfoResponse({}));
  }

  /**
   * 冷存储基础信息
   * 
   * @param request - DescribeColdDataBasicInfoRequest
   * @returns DescribeColdDataBasicInfoResponse
   */
  async describeColdDataBasicInfo(request: $_model.DescribeColdDataBasicInfoRequest): Promise<$_model.DescribeColdDataBasicInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeColdDataBasicInfoWithOptions(request, runtime);
  }

  /**
   * 获取实例详情
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttributeWithOptions(request: $_model.DescribeDBInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceAttribute",
      version: "2020-02-02",
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
   * 获取实例详情
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttribute(request: $_model.DescribeDBInstanceAttributeRequest): Promise<$_model.DescribeDBInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 查询实例配置信息
   * 
   * @param request - DescribeDBInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceConfigResponse
   */
  async describeDBInstanceConfigWithOptions(request: $_model.DescribeDBInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configName)) {
      query["ConfigName"] = request.configName;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceConfig",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceConfigResponse({}));
  }

  /**
   * 查询实例配置信息
   * 
   * @param request - DescribeDBInstanceConfigRequest
   * @returns DescribeDBInstanceConfigResponse
   */
  async describeDBInstanceConfig(request: $_model.DescribeDBInstanceConfigRequest): Promise<$_model.DescribeDBInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceConfigWithOptions(request, runtime);
  }

  /**
   * 查询实例的HA信息
   * 
   * @param request - DescribeDBInstanceHARequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceHAResponse
   */
  async describeDBInstanceHAWithOptions(request: $_model.DescribeDBInstanceHARequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceHAResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceHA",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceHAResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceHAResponse({}));
  }

  /**
   * 查询实例的HA信息
   * 
   * @param request - DescribeDBInstanceHARequest
   * @returns DescribeDBInstanceHAResponse
   */
  async describeDBInstanceHA(request: $_model.DescribeDBInstanceHARequest): Promise<$_model.DescribeDBInstanceHAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceHAWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDBInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceSSLResponse
   */
  async describeDBInstanceSSLWithOptions(request: $_model.DescribeDBInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceSSL",
      version: "2020-02-02",
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
   * @param request - DescribeDBInstanceSSLRequest
   * @returns DescribeDBInstanceSSLResponse
   */
  async describeDBInstanceSSL(request: $_model.DescribeDBInstanceSSLRequest): Promise<$_model.DescribeDBInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceSSLWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDBInstanceTDERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceTDEResponse
   */
  async describeDBInstanceTDEWithOptions(request: $_model.DescribeDBInstanceTDERequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceTDEResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceTDE",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceTDEResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceTDEResponse({}));
  }

  /**
   * @param request - DescribeDBInstanceTDERequest
   * @returns DescribeDBInstanceTDEResponse
   */
  async describeDBInstanceTDE(request: $_model.DescribeDBInstanceTDERequest): Promise<$_model.DescribeDBInstanceTDEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceTDEWithOptions(request, runtime);
  }

  /**
   * 查询实例拓扑
   * 
   * @param request - DescribeDBInstanceTopologyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceTopologyResponse
   */
  async describeDBInstanceTopologyWithOptions(request: $_model.DescribeDBInstanceTopologyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceTopologyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.minuteSimple)) {
      query["MinuteSimple"] = request.minuteSimple;
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
      action: "DescribeDBInstanceTopology",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceTopologyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceTopologyResponse({}));
  }

  /**
   * 查询实例拓扑
   * 
   * @param request - DescribeDBInstanceTopologyRequest
   * @returns DescribeDBInstanceTopologyResponse
   */
  async describeDBInstanceTopology(request: $_model.DescribeDBInstanceTopologyRequest): Promise<$_model.DescribeDBInstanceTopologyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceTopologyWithOptions(request, runtime);
  }

  /**
   * 通过Endpoint查询实例
   * 
   * @param request - DescribeDBInstanceViaEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceViaEndpointResponse
   */
  async describeDBInstanceViaEndpointWithOptions(request: $_model.DescribeDBInstanceViaEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceViaEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceViaEndpoint",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceViaEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceViaEndpointResponse({}));
  }

  /**
   * 通过Endpoint查询实例
   * 
   * @param request - DescribeDBInstanceViaEndpointRequest
   * @returns DescribeDBInstanceViaEndpointResponse
   */
  async describeDBInstanceViaEndpoint(request: $_model.DescribeDBInstanceViaEndpointRequest): Promise<$_model.DescribeDBInstanceViaEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceViaEndpointWithOptions(request, runtime);
  }

  /**
   * 获取PolarDB-X实例列表
   * 
   * @param request - DescribeDBInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstancesWithOptions(request: $_model.DescribeDBInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbVersion)) {
      query["DbVersion"] = request.dbVersion;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mustHasCdc)) {
      query["MustHasCdc"] = request.mustHasCdc;
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

    if (!$dara.isNull(request.series)) {
      query["Series"] = request.series;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstances",
      version: "2020-02-02",
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
   * 获取PolarDB-X实例列表
   * 
   * @param request - DescribeDBInstancesRequest
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstances(request: $_model.DescribeDBInstancesRequest): Promise<$_model.DescribeDBInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  /**
   * 性能监控数据接口
   * 
   * @param request - DescribeDBNodePerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBNodePerformanceResponse
   */
  async describeDBNodePerformanceWithOptions(request: $_model.DescribeDBNodePerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBNodePerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.characterType)) {
      query["CharacterType"] = request.characterType;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.DBNodeIds)) {
      query["DBNodeIds"] = request.DBNodeIds;
    }

    if (!$dara.isNull(request.DBNodeRole)) {
      query["DBNodeRole"] = request.DBNodeRole;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
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
      action: "DescribeDBNodePerformance",
      version: "2020-02-02",
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
   * 性能监控数据接口
   * 
   * @param request - DescribeDBNodePerformanceRequest
   * @returns DescribeDBNodePerformanceResponse
   */
  async describeDBNodePerformance(request: $_model.DescribeDBNodePerformanceRequest): Promise<$_model.DescribeDBNodePerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBNodePerformanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDbListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDbListResponse
   */
  async describeDbListWithOptions(request: $_model.DescribeDbListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDbListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDbList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDbListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDbListResponse({}));
  }

  /**
   * @param request - DescribeDbListRequest
   * @returns DescribeDbListResponse
   */
  async describeDbList(request: $_model.DescribeDbListRequest): Promise<$_model.DescribeDbListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDbListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDistributeTableListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDistributeTableListResponse
   */
  async describeDistributeTableListWithOptions(request: $_model.DescribeDistributeTableListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDistributeTableListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDistributeTableList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDistributeTableListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDistributeTableListResponse({}));
  }

  /**
   * @param request - DescribeDistributeTableListRequest
   * @returns DescribeDistributeTableListResponse
   */
  async describeDistributeTableList(request: $_model.DescribeDistributeTableListRequest): Promise<$_model.DescribeDistributeTableListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDistributeTableListWithOptions(request, runtime);
  }

  /**
   * 历史事件
   * 
   * @param request - DescribeEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventsResponse
   */
  async describeEventsWithOptions(request: $_model.DescribeEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEvents",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventsResponse({}));
  }

  /**
   * 历史事件
   * 
   * @param request - DescribeEventsRequest
   * @returns DescribeEventsResponse
   */
  async describeEvents(request: $_model.DescribeEventsRequest): Promise<$_model.DescribeEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  /**
   * 获取GDN实例列表
   * 
   * @param request - DescribeGdnInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGdnInstancesResponse
   */
  async describeGdnInstancesWithOptions(request: $_model.DescribeGdnInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGdnInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filterType)) {
      query["FilterType"] = request.filterType;
    }

    if (!$dara.isNull(request.filterValue)) {
      query["FilterValue"] = request.filterValue;
    }

    if (!$dara.isNull(request.GDNId)) {
      query["GDNId"] = request.GDNId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGdnInstances",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGdnInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGdnInstancesResponse({}));
  }

  /**
   * 获取GDN实例列表
   * 
   * @param request - DescribeGdnInstancesRequest
   * @returns DescribeGdnInstancesResponse
   */
  async describeGdnInstances(request: $_model.DescribeGdnInstancesRequest): Promise<$_model.DescribeGdnInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGdnInstancesWithOptions(request, runtime);
  }

  /**
   * 开放商业备份集
   * 
   * @param request - DescribeOpenBackupSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOpenBackupSetResponse
   */
  async describeOpenBackupSetWithOptions(request: $_model.DescribeOpenBackupSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOpenBackupSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOpenBackupSet",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOpenBackupSetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOpenBackupSetResponse({}));
  }

  /**
   * 开放商业备份集
   * 
   * @param request - DescribeOpenBackupSetRequest
   * @returns DescribeOpenBackupSetResponse
   */
  async describeOpenBackupSet(request: $_model.DescribeOpenBackupSetRequest): Promise<$_model.DescribeOpenBackupSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOpenBackupSetWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeParameterTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterTemplatesResponse
   */
  async describeParameterTemplatesWithOptions(request: $_model.DescribeParameterTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.paramLevel)) {
      query["ParamLevel"] = request.paramLevel;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParameterTemplates",
      version: "2020-02-02",
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
   * @param request - DescribeParameterTemplatesRequest
   * @returns DescribeParameterTemplatesResponse
   */
  async describeParameterTemplates(request: $_model.DescribeParameterTemplatesRequest): Promise<$_model.DescribeParameterTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterTemplatesWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.paramLevel)) {
      query["ParamLevel"] = request.paramLevel;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParameters",
      version: "2020-02-02",
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
   * @param request - DescribeParametersRequest
   * @returns DescribeParametersResponse
   */
  async describeParameters(request: $_model.DescribeParametersRequest): Promise<$_model.DescribeParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2020-02-02",
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
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * @param request - DescribeScaleOutMigrateTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScaleOutMigrateTaskListResponse
   */
  async describeScaleOutMigrateTaskListWithOptions(request: $_model.DescribeScaleOutMigrateTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScaleOutMigrateTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
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
      action: "DescribeScaleOutMigrateTaskList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScaleOutMigrateTaskListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScaleOutMigrateTaskListResponse({}));
  }

  /**
   * @param request - DescribeScaleOutMigrateTaskListRequest
   * @returns DescribeScaleOutMigrateTaskListResponse
   */
  async describeScaleOutMigrateTaskList(request: $_model.DescribeScaleOutMigrateTaskListRequest): Promise<$_model.DescribeScaleOutMigrateTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScaleOutMigrateTaskListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSecurityIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityIpsResponse
   */
  async describeSecurityIpsWithOptions(request: $_model.DescribeSecurityIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityIps",
      version: "2020-02-02",
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
   * @param request - DescribeSecurityIpsRequest
   * @returns DescribeSecurityIpsResponse
   */
  async describeSecurityIps(request: $_model.DescribeSecurityIpsRequest): Promise<$_model.DescribeSecurityIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityIpsWithOptions(request, runtime);
  }

  /**
   * 慢SQL明细
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecordsWithOptions(request: $_model.DescribeSlowLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.characterType)) {
      query["CharacterType"] = request.characterType;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.DBNodeIds)) {
      query["DBNodeIds"] = request.DBNodeIds;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowLogRecords",
      version: "2020-02-02",
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
   * 慢SQL明细
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: $_model.DescribeSlowLogRecordsRequest): Promise<$_model.DescribeSlowLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * 标签列表查询
   * 
   * @param request - DescribeTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsResponse
   */
  async describeTagsWithOptions(request: $_model.DescribeTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTags",
      version: "2020-02-02",
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
   * 标签列表查询
   * 
   * @param request - DescribeTagsRequest
   * @returns DescribeTagsResponse
   */
  async describeTags(request: $_model.DescribeTagsRequest): Promise<$_model.DescribeTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTasksResponse
   */
  async describeTasksWithOptions(request: $_model.DescribeTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeTasks",
      version: "2020-02-02",
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
   * @param request - DescribeTasksRequest
   * @returns DescribeTasksResponse
   */
  async describeTasks(request: $_model.DescribeTasksRequest): Promise<$_model.DescribeTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeUserEncryptionKeyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserEncryptionKeyListResponse
   */
  async describeUserEncryptionKeyListWithOptions(request: $_model.DescribeUserEncryptionKeyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserEncryptionKeyListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserEncryptionKeyList",
      version: "2020-02-02",
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
   * @param request - DescribeUserEncryptionKeyListRequest
   * @returns DescribeUserEncryptionKeyListResponse
   */
  async describeUserEncryptionKeyList(request: $_model.DescribeUserEncryptionKeyListRequest): Promise<$_model.DescribeUserEncryptionKeyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserEncryptionKeyListWithOptions(request, runtime);
  }

  /**
   * @param request - DisableRightsSeparationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableRightsSeparationResponse
   */
  async disableRightsSeparationWithOptions(request: $_model.DisableRightsSeparationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableRightsSeparationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.dbaAccountName)) {
      query["DbaAccountName"] = request.dbaAccountName;
    }

    if (!$dara.isNull(request.dbaAccountPassword)) {
      query["DbaAccountPassword"] = request.dbaAccountPassword;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableRightsSeparation",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableRightsSeparationResponse>(await this.callApi(params, req, runtime), new $_model.DisableRightsSeparationResponse({}));
  }

  /**
   * @param request - DisableRightsSeparationRequest
   * @returns DisableRightsSeparationResponse
   */
  async disableRightsSeparation(request: $_model.DisableRightsSeparationRequest): Promise<$_model.DisableRightsSeparationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableRightsSeparationWithOptions(request, runtime);
  }

  /**
   * 开启三权分立
   * 
   * @param request - EnableRightsSeparationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableRightsSeparationResponse
   */
  async enableRightsSeparationWithOptions(request: $_model.EnableRightsSeparationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableRightsSeparationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditAccountDescription)) {
      query["AuditAccountDescription"] = request.auditAccountDescription;
    }

    if (!$dara.isNull(request.auditAccountName)) {
      query["AuditAccountName"] = request.auditAccountName;
    }

    if (!$dara.isNull(request.auditAccountPassword)) {
      query["AuditAccountPassword"] = request.auditAccountPassword;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityAccountDescription)) {
      query["SecurityAccountDescription"] = request.securityAccountDescription;
    }

    if (!$dara.isNull(request.securityAccountName)) {
      query["SecurityAccountName"] = request.securityAccountName;
    }

    if (!$dara.isNull(request.securityAccountPassword)) {
      query["SecurityAccountPassword"] = request.securityAccountPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableRightsSeparation",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableRightsSeparationResponse>(await this.callApi(params, req, runtime), new $_model.EnableRightsSeparationResponse({}));
  }

  /**
   * 开启三权分立
   * 
   * @param request - EnableRightsSeparationRequest
   * @returns EnableRightsSeparationResponse
   */
  async enableRightsSeparation(request: $_model.EnableRightsSeparationRequest): Promise<$_model.EnableRightsSeparationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableRightsSeparationWithOptions(request, runtime);
  }

  /**
   * 查标签接口
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2020-02-02",
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
   * 查标签接口
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountDescription",
      version: "2020-02-02",
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
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyAccountPrivilegeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountPrivilegeResponse
   */
  async modifyAccountPrivilegeWithOptions(request: $_model.ModifyAccountPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountPrivilegeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPrivilege)) {
      query["AccountPrivilege"] = request.accountPrivilege;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityAccountName)) {
      query["SecurityAccountName"] = request.securityAccountName;
    }

    if (!$dara.isNull(request.securityAccountPassword)) {
      query["SecurityAccountPassword"] = request.securityAccountPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountPrivilege",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountPrivilegeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountPrivilegeResponse({}));
  }

  /**
   * @param request - ModifyAccountPrivilegeRequest
   * @returns ModifyAccountPrivilegeResponse
   */
  async modifyAccountPrivilege(request: $_model.ModifyAccountPrivilegeRequest): Promise<$_model.ModifyAccountPrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountPrivilegeWithOptions(request, runtime);
  }

  /**
   * 修改全局运维窗口信息
   * 
   * @param request - ModifyActiveOperationMaintainConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyActiveOperationMaintainConfResponse
   */
  async modifyActiveOperationMaintainConfWithOptions(request: $_model.ModifyActiveOperationMaintainConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyActiveOperationMaintainConfResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyActiveOperationMaintainConf",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyActiveOperationMaintainConfResponse>(await this.callApi(params, req, runtime), new $_model.ModifyActiveOperationMaintainConfResponse({}));
  }

  /**
   * 修改全局运维窗口信息
   * 
   * @param request - ModifyActiveOperationMaintainConfRequest
   * @returns ModifyActiveOperationMaintainConfResponse
   */
  async modifyActiveOperationMaintainConf(request: $_model.ModifyActiveOperationMaintainConfRequest): Promise<$_model.ModifyActiveOperationMaintainConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationMaintainConfWithOptions(request, runtime);
  }

  /**
   * 修改主动运维任务
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyActiveOperationTasks",
      version: "2020-02-02",
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
   * 修改主动运维任务
   * 
   * @param request - ModifyActiveOperationTasksRequest
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasks(request: $_model.ModifyActiveOperationTasksRequest): Promise<$_model.ModifyActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDBInstanceClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceClassResponse
   */
  async modifyDBInstanceClassWithOptions(request: $_model.ModifyDBInstanceClassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceClassResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cnClass)) {
      query["CnClass"] = request.cnClass;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.dnClass)) {
      query["DnClass"] = request.dnClass;
    }

    if (!$dara.isNull(request.dnStorageSpace)) {
      query["DnStorageSpace"] = request.dnStorageSpace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.specifiedDNScale)) {
      query["SpecifiedDNScale"] = request.specifiedDNScale;
    }

    if (!$dara.isNull(request.specifiedDNSpecMapJson)) {
      query["SpecifiedDNSpecMapJson"] = request.specifiedDNSpecMapJson;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!$dara.isNull(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    if (!$dara.isNull(request.targetDBInstanceClass)) {
      query["TargetDBInstanceClass"] = request.targetDBInstanceClass;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceClass",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceClassResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceClassResponse({}));
  }

  /**
   * @param request - ModifyDBInstanceClassRequest
   * @returns ModifyDBInstanceClassResponse
   */
  async modifyDBInstanceClass(request: $_model.ModifyDBInstanceClassRequest): Promise<$_model.ModifyDBInstanceClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceClassWithOptions(request, runtime);
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

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceConfig",
      version: "2020-02-02",
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
   * 修改实例链接串
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionStringWithOptions(request: $_model.ModifyDBInstanceConnectionStringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceConnectionStringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.newPort)) {
      query["NewPort"] = request.newPort;
    }

    if (!$dara.isNull(request.newPrefix)) {
      query["NewPrefix"] = request.newPrefix;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceConnectionString",
      version: "2020-02-02",
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
   * 修改实例链接串
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionString(request: $_model.ModifyDBInstanceConnectionStringRequest): Promise<$_model.ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceDescription",
      version: "2020-02-02",
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
   * @param request - ModifyDBInstanceDescriptionRequest
   * @returns ModifyDBInstanceDescriptionResponse
   */
  async modifyDBInstanceDescription(request: $_model.ModifyDBInstanceDescriptionRequest): Promise<$_model.ModifyDBInstanceDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDatabaseDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDatabaseDescriptionResponse
   */
  async modifyDatabaseDescriptionWithOptions(request: $_model.ModifyDatabaseDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDatabaseDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.dbDescription)) {
      query["DbDescription"] = request.dbDescription;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDatabaseDescription",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDatabaseDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDatabaseDescriptionResponse({}));
  }

  /**
   * @param request - ModifyDatabaseDescriptionRequest
   * @returns ModifyDatabaseDescriptionResponse
   */
  async modifyDatabaseDescription(request: $_model.ModifyDatabaseDescriptionRequest): Promise<$_model.ModifyDatabaseDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDatabaseDescriptionWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyParameterResponse
   */
  async modifyParameterWithOptions(request: $_model.ModifyParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.paramLevel)) {
      query["ParamLevel"] = request.paramLevel;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyParameter",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyParameterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyParameterResponse({}));
  }

  /**
   * @param request - ModifyParameterRequest
   * @returns ModifyParameterResponse
   */
  async modifyParameter(request: $_model.ModifyParameterRequest): Promise<$_model.ModifyParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyParameterWithOptions(request, runtime);
  }

  /**
   * @param request - ModifySecurityIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIpsWithOptions(request: $_model.ModifySecurityIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityIps",
      version: "2020-02-02",
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
   * @param request - ModifySecurityIpsRequest
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIps(request: $_model.ModifySecurityIpsRequest): Promise<$_model.ModifySecurityIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  /**
   * 关闭冷存储
   * 
   * @param request - ReleaseColdDataVolumeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseColdDataVolumeResponse
   */
  async releaseColdDataVolumeWithOptions(request: $_model.ReleaseColdDataVolumeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseColdDataVolumeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseColdDataVolume",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseColdDataVolumeResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseColdDataVolumeResponse({}));
  }

  /**
   * 关闭冷存储
   * 
   * @param request - ReleaseColdDataVolumeRequest
   * @returns ReleaseColdDataVolumeResponse
   */
  async releaseColdDataVolume(request: $_model.ReleaseColdDataVolumeRequest): Promise<$_model.ReleaseColdDataVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseColdDataVolumeWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstancePublicConnection",
      version: "2020-02-02",
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
   * @param request - ReleaseInstancePublicConnectionRequest
   * @returns ReleaseInstancePublicConnectionResponse
   */
  async releaseInstancePublicConnection(request: $_model.ReleaseInstancePublicConnectionRequest): Promise<$_model.ReleaseInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityAccountName)) {
      query["SecurityAccountName"] = request.securityAccountName;
    }

    if (!$dara.isNull(request.securityAccountPassword)) {
      query["SecurityAccountPassword"] = request.securityAccountPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAccountPassword",
      version: "2020-02-02",
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
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: $_model.ResetAccountPasswordRequest): Promise<$_model.ResetAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * @param request - RestartDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstanceWithOptions(request: $_model.RestartDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartDBInstance",
      version: "2020-02-02",
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
   * @param request - RestartDBInstanceRequest
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstance(request: $_model.RestartDBInstanceRequest): Promise<$_model.RestartDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - SwitchDBInstanceHARequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchDBInstanceHAResponse
   */
  async switchDBInstanceHAWithOptions(request: $_model.SwitchDBInstanceHARequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchDBInstanceHAResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!$dara.isNull(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    if (!$dara.isNull(request.targetPrimaryAzoneId)) {
      query["TargetPrimaryAzoneId"] = request.targetPrimaryAzoneId;
    }

    if (!$dara.isNull(request.targetPrimaryRegionId)) {
      query["TargetPrimaryRegionId"] = request.targetPrimaryRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchDBInstanceHA",
      version: "2020-02-02",
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
   * @param request - SwitchDBInstanceHARequest
   * @returns SwitchDBInstanceHAResponse
   */
  async switchDBInstanceHA(request: $_model.SwitchDBInstanceHARequest): Promise<$_model.SwitchDBInstanceHAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchDBInstanceHAWithOptions(request, runtime);
  }

  /**
   * GDN主备切换
   * 
   * @param request - SwitchGdnMemberRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchGdnMemberRoleResponse
   */
  async switchGdnMemberRoleWithOptions(request: $_model.SwitchGdnMemberRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchGdnMemberRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    if (!$dara.isNull(request.taskTimeout)) {
      query["TaskTimeout"] = request.taskTimeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchGdnMemberRole",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchGdnMemberRoleResponse>(await this.callApi(params, req, runtime), new $_model.SwitchGdnMemberRoleResponse({}));
  }

  /**
   * GDN主备切换
   * 
   * @param request - SwitchGdnMemberRoleRequest
   * @returns SwitchGdnMemberRoleResponse
   */
  async switchGdnMemberRole(request: $_model.SwitchGdnMemberRoleRequest): Promise<$_model.SwitchGdnMemberRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchGdnMemberRoleWithOptions(request, runtime);
  }

  /**
   * 打标签接口
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2020-02-02",
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
   * 打标签接口
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 删标签接口
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2020-02-02",
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
   * 删标签接口
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBackupPolicyResponse
   */
  async updateBackupPolicyWithOptions(request: $_model.UpdateBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPeriod)) {
      query["BackupPeriod"] = request.backupPeriod;
    }

    if (!$dara.isNull(request.backupPlanBegin)) {
      query["BackupPlanBegin"] = request.backupPlanBegin;
    }

    if (!$dara.isNull(request.backupSetRetention)) {
      query["BackupSetRetention"] = request.backupSetRetention;
    }

    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!$dara.isNull(request.backupWay)) {
      query["BackupWay"] = request.backupWay;
    }

    if (!$dara.isNull(request.coldDataBackupInterval)) {
      query["ColdDataBackupInterval"] = request.coldDataBackupInterval;
    }

    if (!$dara.isNull(request.coldDataBackupRetention)) {
      query["ColdDataBackupRetention"] = request.coldDataBackupRetention;
    }

    if (!$dara.isNull(request.crossRegionDataBackupRetention)) {
      query["CrossRegionDataBackupRetention"] = request.crossRegionDataBackupRetention;
    }

    if (!$dara.isNull(request.crossRegionLogBackupRetention)) {
      query["CrossRegionLogBackupRetention"] = request.crossRegionLogBackupRetention;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.destCrossRegion)) {
      query["DestCrossRegion"] = request.destCrossRegion;
    }

    if (!$dara.isNull(request.forceCleanOnHighSpaceUsage)) {
      query["ForceCleanOnHighSpaceUsage"] = request.forceCleanOnHighSpaceUsage;
    }

    if (!$dara.isNull(request.isCrossRegionDataBackupEnabled)) {
      query["IsCrossRegionDataBackupEnabled"] = request.isCrossRegionDataBackupEnabled;
    }

    if (!$dara.isNull(request.isCrossRegionLogBackupEnabled)) {
      query["IsCrossRegionLogBackupEnabled"] = request.isCrossRegionLogBackupEnabled;
    }

    if (!$dara.isNull(request.isEnabled)) {
      query["IsEnabled"] = request.isEnabled;
    }

    if (!$dara.isNull(request.localLogRetention)) {
      query["LocalLogRetention"] = request.localLogRetention;
    }

    if (!$dara.isNull(request.localLogRetentionNumber)) {
      query["LocalLogRetentionNumber"] = request.localLogRetentionNumber;
    }

    if (!$dara.isNull(request.logLocalRetentionSpace)) {
      query["LogLocalRetentionSpace"] = request.logLocalRetentionSpace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.removeLogRetention)) {
      query["RemoveLogRetention"] = request.removeLogRetention;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBackupPolicy",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBackupPolicyResponse({}));
  }

  /**
   * @param request - UpdateBackupPolicyRequest
   * @returns UpdateBackupPolicyResponse
   */
  async updateBackupPolicy(request: $_model.UpdateBackupPolicyRequest): Promise<$_model.UpdateBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBackupPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateDBInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDBInstanceSSLResponse
   */
  async updateDBInstanceSSLWithOptions(request: $_model.UpdateDBInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDBInstanceSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certCommonName)) {
      query["CertCommonName"] = request.certCommonName;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.enableSSL)) {
      query["EnableSSL"] = request.enableSSL;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDBInstanceSSL",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDBInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDBInstanceSSLResponse({}));
  }

  /**
   * @param request - UpdateDBInstanceSSLRequest
   * @returns UpdateDBInstanceSSLResponse
   */
  async updateDBInstanceSSL(request: $_model.UpdateDBInstanceSSLRequest): Promise<$_model.UpdateDBInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDBInstanceSSLWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateDBInstanceTDERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDBInstanceTDEResponse
   */
  async updateDBInstanceTDEWithOptions(request: $_model.UpdateDBInstanceTDERequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDBInstanceTDEResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "UpdateDBInstanceTDE",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDBInstanceTDEResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDBInstanceTDEResponse({}));
  }

  /**
   * @param request - UpdateDBInstanceTDERequest
   * @returns UpdateDBInstanceTDEResponse
   */
  async updateDBInstanceTDE(request: $_model.UpdateDBInstanceTDERequest): Promise<$_model.UpdateDBInstanceTDEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDBInstanceTDEWithOptions(request, runtime);
  }

  /**
   * 扩缩容实例节点数
   * 
   * @param request - UpdatePolarDBXInstanceNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolarDBXInstanceNodeResponse
   */
  async updatePolarDBXInstanceNodeWithOptions(request: $_model.UpdatePolarDBXInstanceNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolarDBXInstanceNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addDNSpec)) {
      query["AddDNSpec"] = request.addDNSpec;
    }

    if (!$dara.isNull(request.CNNodeCount)) {
      query["CNNodeCount"] = request.CNNodeCount;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.DNNodeCount)) {
      query["DNNodeCount"] = request.DNNodeCount;
    }

    if (!$dara.isNull(request.dbInstanceNodeCount)) {
      query["DbInstanceNodeCount"] = request.dbInstanceNodeCount;
    }

    if (!$dara.isNull(request.deleteDNIds)) {
      query["DeleteDNIds"] = request.deleteDNIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.storagePoolName)) {
      query["StoragePoolName"] = request.storagePoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePolarDBXInstanceNode",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePolarDBXInstanceNodeResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePolarDBXInstanceNodeResponse({}));
  }

  /**
   * 扩缩容实例节点数
   * 
   * @param request - UpdatePolarDBXInstanceNodeRequest
   * @returns UpdatePolarDBXInstanceNodeResponse
   */
  async updatePolarDBXInstanceNode(request: $_model.UpdatePolarDBXInstanceNodeRequest): Promise<$_model.UpdatePolarDBXInstanceNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePolarDBXInstanceNodeWithOptions(request, runtime);
  }

  /**
   * @param request - UpgradeDBInstanceKernelVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBInstanceKernelVersionResponse
   */
  async upgradeDBInstanceKernelVersionWithOptions(request: $_model.UpgradeDBInstanceKernelVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBInstanceKernelVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.minorVersion)) {
      query["MinorVersion"] = request.minorVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeDBInstanceKernelVersion",
      version: "2020-02-02",
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
   * @param request - UpgradeDBInstanceKernelVersionRequest
   * @returns UpgradeDBInstanceKernelVersionResponse
   */
  async upgradeDBInstanceKernelVersion(request: $_model.UpgradeDBInstanceKernelVersionRequest): Promise<$_model.UpgradeDBInstanceKernelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBInstanceKernelVersionWithOptions(request, runtime);
  }

}
