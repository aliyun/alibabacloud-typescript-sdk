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
      'ap-northeast-2-pop': "hbase.aliyuncs.com",
      'ap-south-1': "hbase.aliyuncs.com",
      'ap-southeast-2': "hbase.aliyuncs.com",
      'cn-beijing-finance-1': "hbase.aliyuncs.com",
      'cn-beijing-finance-pop': "hbase.aliyuncs.com",
      'cn-beijing-gov-1': "hbase.aliyuncs.com",
      'cn-beijing-nu16-b01': "hbase.aliyuncs.com",
      'cn-edge-1': "hbase.aliyuncs.com",
      'cn-fujian': "hbase.aliyuncs.com",
      'cn-haidian-cm12-c01': "hbase.aliyuncs.com",
      'cn-hangzhou-bj-b01': "hbase.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "hbase.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "hbase.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "hbase.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "hbase.aliyuncs.com",
      'cn-hangzhou-test-306': "hbase.aliyuncs.com",
      'cn-hongkong-finance-pop': "hbase.aliyuncs.com",
      'cn-qingdao-nebula': "hbase.aliyuncs.com",
      'cn-shanghai-et15-b01': "hbase.aliyuncs.com",
      'cn-shanghai-et2-b01': "hbase.aliyuncs.com",
      'cn-shanghai-inner': "hbase.aliyuncs.com",
      'cn-shanghai-internal-test-1': "hbase.aliyuncs.com",
      'cn-shenzhen-inner': "hbase.aliyuncs.com",
      'cn-shenzhen-st4-d01': "hbase.aliyuncs.com",
      'cn-shenzhen-su18-b01': "hbase.aliyuncs.com",
      'cn-wuhan': "hbase.aliyuncs.com",
      'cn-wulanchabu': "hbase.aliyuncs.com",
      'cn-yushanfang': "hbase.aliyuncs.com",
      'cn-zhangbei': "hbase.aliyuncs.com",
      'cn-zhangbei-na61-b01': "hbase.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "hbase.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "hbase.aliyuncs.com",
      'eu-west-1-oxs': "hbase.aliyuncs.com",
      'rus-west-1-pop': "hbase.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hbase", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AddUserHdfsInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserHdfsInfoResponse
   */
  async addUserHdfsInfoWithOptions(request: $_model.AddUserHdfsInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserHdfsInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserHdfsInfo",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserHdfsInfoResponse>(await this.callApi(params, req, runtime), new $_model.AddUserHdfsInfoResponse({}));
  }

  /**
   * @param request - AddUserHdfsInfoRequest
   * @returns AddUserHdfsInfoResponse
   */
  async addUserHdfsInfo(request: $_model.AddUserHdfsInfoRequest): Promise<$_model.AddUserHdfsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserHdfsInfoWithOptions(request, runtime);
  }

  /**
   * @param request - AllocatePublicNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocatePublicNetworkAddressResponse
   */
  async allocatePublicNetworkAddressWithOptions(request: $_model.AllocatePublicNetworkAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocatePublicNetworkAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocatePublicNetworkAddress",
      version: "2019-01-01",
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
   * @param request - AllocatePublicNetworkAddressRequest
   * @returns AllocatePublicNetworkAddressResponse
   */
  async allocatePublicNetworkAddress(request: $_model.AllocatePublicNetworkAddressRequest): Promise<$_model.AllocatePublicNetworkAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocatePublicNetworkAddressWithOptions(request, runtime);
  }

  /**
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
      version: "2019-01-01",
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
   * @param request - CancelActiveOperationTasksRequest
   * @returns CancelActiveOperationTasksResponse
   */
  async cancelActiveOperationTasks(request: $_model.CancelActiveOperationTasksRequest): Promise<$_model.CancelActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * @param request - CheckComponentsVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckComponentsVersionResponse
   */
  async checkComponentsVersionWithOptions(request: $_model.CheckComponentsVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckComponentsVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.components)) {
      query["Components"] = request.components;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckComponentsVersion",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckComponentsVersionResponse>(await this.callApi(params, req, runtime), new $_model.CheckComponentsVersionResponse({}));
  }

  /**
   * @param request - CheckComponentsVersionRequest
   * @returns CheckComponentsVersionResponse
   */
  async checkComponentsVersion(request: $_model.CheckComponentsVersionRequest): Promise<$_model.CheckComponentsVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkComponentsVersionWithOptions(request, runtime);
  }

  /**
   * @param request - CloseBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseBackupResponse
   */
  async closeBackupWithOptions(request: $_model.CloseBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseBackup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseBackupResponse>(await this.callApi(params, req, runtime), new $_model.CloseBackupResponse({}));
  }

  /**
   * @param request - CloseBackupRequest
   * @returns CloseBackupResponse
   */
  async closeBackup(request: $_model.CloseBackupRequest): Promise<$_model.CloseBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeBackupWithOptions(request, runtime);
  }

  /**
   * @param request - ConvertInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertInstanceResponse
   */
  async convertInstanceWithOptions(request: $_model.ConvertInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertInstance",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConvertInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ConvertInstanceResponse({}));
  }

  /**
   * @param request - ConvertInstanceRequest
   * @returns ConvertInstanceResponse
   */
  async convertInstance(request: $_model.ConvertInstanceRequest): Promise<$_model.ConvertInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.convertInstanceWithOptions(request, runtime);
  }

  /**
   * 新建账户
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

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccount",
      version: "2019-01-01",
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
   * 新建账户
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * @param request - CreateBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupPlanResponse
   */
  async createBackupPlanWithOptions(request: $_model.CreateBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackupPlan",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateBackupPlanResponse({}));
  }

  /**
   * @param request - CreateBackupPlanRequest
   * @returns CreateBackupPlanResponse
   */
  async createBackupPlan(request: $_model.CreateBackupPlanRequest): Promise<$_model.CreateBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupPlanWithOptions(request, runtime);
  }

  /**
   * @param request - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(request: $_model.CreateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.coldStorageSize)) {
      query["ColdStorageSize"] = request.coldStorageSize;
    }

    if (!$dara.isNull(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
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

    if (!$dara.isNull(request.masterInstanceType)) {
      query["MasterInstanceType"] = request.masterInstanceType;
    }

    if (!$dara.isNull(request.nodeCount)) {
      query["NodeCount"] = request.nodeCount;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
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
      action: "CreateCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterResponse({}));
  }

  /**
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: $_model.CreateClusterRequest): Promise<$_model.CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * @param request - CreateGlobalResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGlobalResourceResponse
   */
  async createGlobalResourceWithOptions(request: $_model.CreateGlobalResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGlobalResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGlobalResource",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGlobalResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateGlobalResourceResponse({}));
  }

  /**
   * @param request - CreateGlobalResourceRequest
   * @returns CreateGlobalResourceResponse
   */
  async createGlobalResource(request: $_model.CreateGlobalResourceRequest): Promise<$_model.CreateGlobalResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGlobalResourceWithOptions(request, runtime);
  }

  /**
   * @param request - CreateHBaseSlbServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHBaseSlbServerResponse
   */
  async createHBaseSlbServerWithOptions(request: $_model.CreateHBaseSlbServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHBaseSlbServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.slbServer)) {
      query["SlbServer"] = request.slbServer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHBaseSlbServer",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHBaseSlbServerResponse>(await this.callApi(params, req, runtime), new $_model.CreateHBaseSlbServerResponse({}));
  }

  /**
   * @param request - CreateHBaseSlbServerRequest
   * @returns CreateHBaseSlbServerResponse
   */
  async createHBaseSlbServer(request: $_model.CreateHBaseSlbServerRequest): Promise<$_model.CreateHBaseSlbServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHBaseSlbServerWithOptions(request, runtime);
  }

  /**
   * @param request - CreateHbaseHaSlbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHbaseHaSlbResponse
   */
  async createHbaseHaSlbWithOptions(request: $_model.CreateHbaseHaSlbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHbaseHaSlbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bdsId)) {
      query["BdsId"] = request.bdsId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.haId)) {
      query["HaId"] = request.haId;
    }

    if (!$dara.isNull(request.haTypes)) {
      query["HaTypes"] = request.haTypes;
    }

    if (!$dara.isNull(request.hbaseType)) {
      query["HbaseType"] = request.hbaseType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHbaseHaSlb",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHbaseHaSlbResponse>(await this.callApi(params, req, runtime), new $_model.CreateHbaseHaSlbResponse({}));
  }

  /**
   * @param request - CreateHbaseHaSlbRequest
   * @returns CreateHbaseHaSlbResponse
   */
  async createHbaseHaSlb(request: $_model.CreateHbaseHaSlbRequest): Promise<$_model.CreateHbaseHaSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHbaseHaSlbWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMultiZoneClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMultiZoneClusterResponse
   */
  async createMultiZoneClusterWithOptions(request: $_model.CreateMultiZoneClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMultiZoneClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.arbiterVSwitchId)) {
      query["ArbiterVSwitchId"] = request.arbiterVSwitchId;
    }

    if (!$dara.isNull(request.arbiterZoneId)) {
      query["ArbiterZoneId"] = request.arbiterZoneId;
    }

    if (!$dara.isNull(request.archVersion)) {
      query["ArchVersion"] = request.archVersion;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.coreDiskSize)) {
      query["CoreDiskSize"] = request.coreDiskSize;
    }

    if (!$dara.isNull(request.coreDiskType)) {
      query["CoreDiskType"] = request.coreDiskType;
    }

    if (!$dara.isNull(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!$dara.isNull(request.coreNodeCount)) {
      query["CoreNodeCount"] = request.coreNodeCount;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.logDiskSize)) {
      query["LogDiskSize"] = request.logDiskSize;
    }

    if (!$dara.isNull(request.logDiskType)) {
      query["LogDiskType"] = request.logDiskType;
    }

    if (!$dara.isNull(request.logInstanceType)) {
      query["LogInstanceType"] = request.logInstanceType;
    }

    if (!$dara.isNull(request.logNodeCount)) {
      query["LogNodeCount"] = request.logNodeCount;
    }

    if (!$dara.isNull(request.masterInstanceType)) {
      query["MasterInstanceType"] = request.masterInstanceType;
    }

    if (!$dara.isNull(request.multiZoneCombination)) {
      query["MultiZoneCombination"] = request.multiZoneCombination;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.primaryVSwitchId)) {
      query["PrimaryVSwitchId"] = request.primaryVSwitchId;
    }

    if (!$dara.isNull(request.primaryZoneId)) {
      query["PrimaryZoneId"] = request.primaryZoneId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.standbyVSwitchId)) {
      query["StandbyVSwitchId"] = request.standbyVSwitchId;
    }

    if (!$dara.isNull(request.standbyZoneId)) {
      query["StandbyZoneId"] = request.standbyZoneId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMultiZoneCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMultiZoneClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateMultiZoneClusterResponse({}));
  }

  /**
   * @param request - CreateMultiZoneClusterRequest
   * @returns CreateMultiZoneClusterResponse
   */
  async createMultiZoneCluster(request: $_model.CreateMultiZoneClusterRequest): Promise<$_model.CreateMultiZoneClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMultiZoneClusterWithOptions(request, runtime);
  }

  /**
   * @param request - CreateRestorePlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRestorePlanResponse
   */
  async createRestorePlanWithOptions(request: $_model.CreateRestorePlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRestorePlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.restoreAllTable)) {
      query["RestoreAllTable"] = request.restoreAllTable;
    }

    if (!$dara.isNull(request.restoreByCopy)) {
      query["RestoreByCopy"] = request.restoreByCopy;
    }

    if (!$dara.isNull(request.restoreToDate)) {
      query["RestoreToDate"] = request.restoreToDate;
    }

    if (!$dara.isNull(request.tables)) {
      query["Tables"] = request.tables;
    }

    if (!$dara.isNull(request.targetClusterId)) {
      query["TargetClusterId"] = request.targetClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRestorePlan",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRestorePlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateRestorePlanResponse({}));
  }

  /**
   * @param request - CreateRestorePlanRequest
   * @returns CreateRestorePlanResponse
   */
  async createRestorePlan(request: $_model.CreateRestorePlanRequest): Promise<$_model.CreateRestorePlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRestorePlanWithOptions(request, runtime);
  }

  /**
   * @param request - CreateServerlessClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServerlessClusterResponse
   */
  async createServerlessClusterWithOptions(request: $_model.CreateServerlessClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServerlessClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serverlessCapability)) {
      query["ServerlessCapability"] = request.serverlessCapability;
    }

    if (!$dara.isNull(request.serverlessSpec)) {
      query["ServerlessSpec"] = request.serverlessSpec;
    }

    if (!$dara.isNull(request.serverlessStorage)) {
      query["ServerlessStorage"] = request.serverlessStorage;
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
      action: "CreateServerlessCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServerlessClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateServerlessClusterResponse({}));
  }

  /**
   * @param request - CreateServerlessClusterRequest
   * @returns CreateServerlessClusterResponse
   */
  async createServerlessCluster(request: $_model.CreateServerlessClusterRequest): Promise<$_model.CreateServerlessClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServerlessClusterWithOptions(request, runtime);
  }

  /**
   * 删除账户
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

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccount",
      version: "2019-01-01",
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
   * 删除账户
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteGlobalResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGlobalResourceResponse
   */
  async deleteGlobalResourceWithOptions(request: $_model.DeleteGlobalResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGlobalResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGlobalResource",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGlobalResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGlobalResourceResponse({}));
  }

  /**
   * @param request - DeleteGlobalResourceRequest
   * @returns DeleteGlobalResourceResponse
   */
  async deleteGlobalResource(request: $_model.DeleteGlobalResourceRequest): Promise<$_model.DeleteGlobalResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGlobalResourceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteHBaseHaDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHBaseHaDBResponse
   */
  async deleteHBaseHaDBWithOptions(request: $_model.DeleteHBaseHaDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHBaseHaDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bdsId)) {
      query["BdsId"] = request.bdsId;
    }

    if (!$dara.isNull(request.haId)) {
      query["HaId"] = request.haId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHBaseHaDB",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHBaseHaDBResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHBaseHaDBResponse({}));
  }

  /**
   * @param request - DeleteHBaseHaDBRequest
   * @returns DeleteHBaseHaDBResponse
   */
  async deleteHBaseHaDB(request: $_model.DeleteHBaseHaDBRequest): Promise<$_model.DeleteHBaseHaDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHBaseHaDBWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteHBaseSlbServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHBaseSlbServerResponse
   */
  async deleteHBaseSlbServerWithOptions(request: $_model.DeleteHBaseSlbServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHBaseSlbServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.slbServer)) {
      query["SlbServer"] = request.slbServer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHBaseSlbServer",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHBaseSlbServerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHBaseSlbServerResponse({}));
  }

  /**
   * @param request - DeleteHBaseSlbServerRequest
   * @returns DeleteHBaseSlbServerResponse
   */
  async deleteHBaseSlbServer(request: $_model.DeleteHBaseSlbServerRequest): Promise<$_model.DeleteHBaseSlbServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHBaseSlbServerWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteHbaseHaSlbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHbaseHaSlbResponse
   */
  async deleteHbaseHaSlbWithOptions(request: $_model.DeleteHbaseHaSlbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHbaseHaSlbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bdsId)) {
      query["BdsId"] = request.bdsId;
    }

    if (!$dara.isNull(request.haId)) {
      query["HaId"] = request.haId;
    }

    if (!$dara.isNull(request.haTypes)) {
      query["HaTypes"] = request.haTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHbaseHaSlb",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHbaseHaSlbResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHbaseHaSlbResponse({}));
  }

  /**
   * @param request - DeleteHbaseHaSlbRequest
   * @returns DeleteHbaseHaSlbResponse
   */
  async deleteHbaseHaSlb(request: $_model.DeleteHbaseHaSlbRequest): Promise<$_model.DeleteHbaseHaSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHbaseHaSlbWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.immediateDeleteFlag)) {
      query["ImmediateDeleteFlag"] = request.immediateDeleteFlag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2019-01-01",
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
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMultiZoneClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMultiZoneClusterResponse
   */
  async deleteMultiZoneClusterWithOptions(request: $_model.DeleteMultiZoneClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMultiZoneClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.immediateDeleteFlag)) {
      query["ImmediateDeleteFlag"] = request.immediateDeleteFlag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMultiZoneCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMultiZoneClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMultiZoneClusterResponse({}));
  }

  /**
   * @param request - DeleteMultiZoneClusterRequest
   * @returns DeleteMultiZoneClusterResponse
   */
  async deleteMultiZoneCluster(request: $_model.DeleteMultiZoneClusterRequest): Promise<$_model.DeleteMultiZoneClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMultiZoneClusterWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteServerlessClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServerlessClusterResponse
   */
  async deleteServerlessClusterWithOptions(request: $_model.DeleteServerlessClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServerlessClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServerlessCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServerlessClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServerlessClusterResponse({}));
  }

  /**
   * @param request - DeleteServerlessClusterRequest
   * @returns DeleteServerlessClusterResponse
   */
  async deleteServerlessCluster(request: $_model.DeleteServerlessClusterRequest): Promise<$_model.DeleteServerlessClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServerlessClusterWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteUserHdfsInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserHdfsInfoResponse
   */
  async deleteUserHdfsInfoWithOptions(request: $_model.DeleteUserHdfsInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserHdfsInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nameService)) {
      query["NameService"] = request.nameService;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserHdfsInfo",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserHdfsInfoResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserHdfsInfoResponse({}));
  }

  /**
   * @param request - DeleteUserHdfsInfoRequest
   * @returns DeleteUserHdfsInfoResponse
   */
  async deleteUserHdfsInfo(request: $_model.DeleteUserHdfsInfoRequest): Promise<$_model.DeleteUserHdfsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserHdfsInfoWithOptions(request, runtime);
  }

  /**
   * 查询账户列表
   * 
   * @param request - DescribeAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountsResponse
   */
  async describeAccountsWithOptions(request: $_model.DescribeAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccounts",
      version: "2019-01-01",
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
   * 查询账户列表
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: $_model.DescribeAccountsRequest): Promise<$_model.DescribeAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
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
      action: "DescribeActiveOperationTaskType",
      version: "2019-01-01",
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
   * @param request - DescribeActiveOperationTaskTypeRequest
   * @returns DescribeActiveOperationTaskTypeResponse
   */
  async describeActiveOperationTaskType(request: $_model.DescribeActiveOperationTaskTypeRequest): Promise<$_model.DescribeActiveOperationTaskTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTaskTypeWithOptions(request, runtime);
  }

  /**
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
      version: "2019-01-01",
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
   * @param request - DescribeActiveOperationTasksRequest
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasks(request: $_model.DescribeActiveOperationTasksRequest): Promise<$_model.DescribeActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResourceWithOptions(request: $_model.DescribeAvailableResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableResource",
      version: "2019-01-01",
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
   * @param request - DescribeAvailableResourceRequest
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResource(request: $_model.DescribeAvailableResourceRequest): Promise<$_model.DescribeAvailableResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupPlanConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPlanConfigResponse
   */
  async describeBackupPlanConfigWithOptions(request: $_model.DescribeBackupPlanConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPlanConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPlanConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupPlanConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupPlanConfigResponse({}));
  }

  /**
   * @param request - DescribeBackupPlanConfigRequest
   * @returns DescribeBackupPlanConfigResponse
   */
  async describeBackupPlanConfig(request: $_model.DescribeBackupPlanConfigRequest): Promise<$_model.DescribeBackupPlanConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPlanConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: $_model.DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPolicy",
      version: "2019-01-01",
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
   * @param request - DescribeBackupStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupStatusResponse
   */
  async describeBackupStatusWithOptions(request: $_model.DescribeBackupStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupStatus",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupStatusResponse({}));
  }

  /**
   * @param request - DescribeBackupStatusRequest
   * @returns DescribeBackupStatusResponse
   */
  async describeBackupStatus(request: $_model.DescribeBackupStatusRequest): Promise<$_model.DescribeBackupStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupStatusWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupSummaryResponse
   */
  async describeBackupSummaryWithOptions(request: $_model.DescribeBackupSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "DescribeBackupSummary",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupSummaryResponse({}));
  }

  /**
   * @param request - DescribeBackupSummaryRequest
   * @returns DescribeBackupSummaryResponse
   */
  async describeBackupSummary(request: $_model.DescribeBackupSummaryRequest): Promise<$_model.DescribeBackupSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupSummaryWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupTablesResponse
   */
  async describeBackupTablesWithOptions(request: $_model.DescribeBackupTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupRecordId)) {
      query["BackupRecordId"] = request.backupRecordId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "DescribeBackupTables",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupTablesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupTablesResponse({}));
  }

  /**
   * @param request - DescribeBackupTablesRequest
   * @returns DescribeBackupTablesResponse
   */
  async describeBackupTables(request: $_model.DescribeBackupTablesRequest): Promise<$_model.DescribeBackupTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupTablesWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endTimeUTC)) {
      query["EndTimeUTC"] = request.endTimeUTC;
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

    if (!$dara.isNull(request.startTimeUTC)) {
      query["StartTimeUTC"] = request.startTimeUTC;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackups",
      version: "2019-01-01",
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
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: $_model.DescribeBackupsRequest): Promise<$_model.DescribeBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeClusterConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterConnectionResponse
   */
  async describeClusterConnectionWithOptions(request: $_model.DescribeClusterConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterConnection",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterConnectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterConnectionResponse({}));
  }

  /**
   * @param request - DescribeClusterConnectionRequest
   * @returns DescribeClusterConnectionResponse
   */
  async describeClusterConnection(request: $_model.DescribeClusterConnectionRequest): Promise<$_model.DescribeClusterConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterConnectionWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeColdStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeColdStorageResponse
   */
  async describeColdStorageWithOptions(request: $_model.DescribeColdStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeColdStorageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeColdStorage",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeColdStorageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeColdStorageResponse({}));
  }

  /**
   * @param request - DescribeColdStorageRequest
   * @returns DescribeColdStorageResponse
   */
  async describeColdStorage(request: $_model.DescribeColdStorageRequest): Promise<$_model.DescribeColdStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeColdStorageWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDBInstanceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceUsageResponse
   */
  async describeDBInstanceUsageWithOptions(request: $_model.DescribeDBInstanceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceUsage",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceUsageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceUsageResponse({}));
  }

  /**
   * @param request - DescribeDBInstanceUsageRequest
   * @returns DescribeDBInstanceUsageResponse
   */
  async describeDBInstanceUsage(request: $_model.DescribeDBInstanceUsageRequest): Promise<$_model.DescribeDBInstanceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceUsageWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDeletedInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeletedInstancesResponse
   */
  async describeDeletedInstancesWithOptions(request: $_model.DescribeDeletedInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeletedInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
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
      action: "DescribeDeletedInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeletedInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeletedInstancesResponse({}));
  }

  /**
   * @param request - DescribeDeletedInstancesRequest
   * @returns DescribeDeletedInstancesResponse
   */
  async describeDeletedInstances(request: $_model.DescribeDeletedInstancesRequest): Promise<$_model.DescribeDeletedInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeletedInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDiskWarningLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskWarningLineResponse
   */
  async describeDiskWarningLineWithOptions(request: $_model.DescribeDiskWarningLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiskWarningLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiskWarningLine",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiskWarningLineResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiskWarningLineResponse({}));
  }

  /**
   * @param request - DescribeDiskWarningLineRequest
   * @returns DescribeDiskWarningLineResponse
   */
  async describeDiskWarningLine(request: $_model.DescribeDiskWarningLineRequest): Promise<$_model.DescribeDiskWarningLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskWarningLineWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndpointsResponse
   */
  async describeEndpointsWithOptions(request: $_model.DescribeEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEndpoints",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEndpointsResponse({}));
  }

  /**
   * @param request - DescribeEndpointsRequest
   * @returns DescribeEndpointsResponse
   */
  async describeEndpoints(request: $_model.DescribeEndpointsRequest): Promise<$_model.DescribeEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEndpointsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: $_model.DescribeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstance",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceResponse({}));
  }

  /**
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: $_model.DescribeInstanceRequest): Promise<$_model.DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstanceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceTypeResponse
   */
  async describeInstanceTypeWithOptions(request: $_model.DescribeInstanceTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceType",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceTypeResponse({}));
  }

  /**
   * @param request - DescribeInstanceTypeRequest
   * @returns DescribeInstanceTypeResponse
   */
  async describeInstanceType(request: $_model.DescribeInstanceTypeRequest): Promise<$_model.DescribeInstanceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceTypeWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: $_model.DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2019-01-01",
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
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeIpWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpWhitelistResponse
   */
  async describeIpWhitelistWithOptions(request: $_model.DescribeIpWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIpWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpWhitelist",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIpWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIpWhitelistResponse({}));
  }

  /**
   * @param request - DescribeIpWhitelistRequest
   * @returns DescribeIpWhitelistResponse
   */
  async describeIpWhitelist(request: $_model.DescribeIpWhitelistRequest): Promise<$_model.DescribeIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpWhitelistWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeMultiZoneAvailableRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMultiZoneAvailableRegionsResponse
   */
  async describeMultiZoneAvailableRegionsWithOptions(request: $_model.DescribeMultiZoneAvailableRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMultiZoneAvailableRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMultiZoneAvailableRegions",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMultiZoneAvailableRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMultiZoneAvailableRegionsResponse({}));
  }

  /**
   * @param request - DescribeMultiZoneAvailableRegionsRequest
   * @returns DescribeMultiZoneAvailableRegionsResponse
   */
  async describeMultiZoneAvailableRegions(request: $_model.DescribeMultiZoneAvailableRegionsRequest): Promise<$_model.DescribeMultiZoneAvailableRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMultiZoneAvailableRegionsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeMultiZoneAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMultiZoneAvailableResourceResponse
   */
  async describeMultiZoneAvailableResourceWithOptions(request: $_model.DescribeMultiZoneAvailableResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMultiZoneAvailableResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneCombination)) {
      query["ZoneCombination"] = request.zoneCombination;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMultiZoneAvailableResource",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMultiZoneAvailableResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMultiZoneAvailableResourceResponse({}));
  }

  /**
   * @param request - DescribeMultiZoneAvailableResourceRequest
   * @returns DescribeMultiZoneAvailableResourceResponse
   */
  async describeMultiZoneAvailableResource(request: $_model.DescribeMultiZoneAvailableResourceRequest): Promise<$_model.DescribeMultiZoneAvailableResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMultiZoneAvailableResourceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeMultiZoneClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMultiZoneClusterResponse
   */
  async describeMultiZoneClusterWithOptions(request: $_model.DescribeMultiZoneClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMultiZoneClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMultiZoneCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMultiZoneClusterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMultiZoneClusterResponse({}));
  }

  /**
   * @param request - DescribeMultiZoneClusterRequest
   * @returns DescribeMultiZoneClusterResponse
   */
  async describeMultiZoneCluster(request: $_model.DescribeMultiZoneClusterRequest): Promise<$_model.DescribeMultiZoneClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMultiZoneClusterWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRecoverableTimeRangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecoverableTimeRangeResponse
   */
  async describeRecoverableTimeRangeWithOptions(request: $_model.DescribeRecoverableTimeRangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecoverableTimeRangeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecoverableTimeRange",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecoverableTimeRangeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecoverableTimeRangeResponse({}));
  }

  /**
   * @param request - DescribeRecoverableTimeRangeRequest
   * @returns DescribeRecoverableTimeRangeResponse
   */
  async describeRecoverableTimeRange(request: $_model.DescribeRecoverableTimeRangeRequest): Promise<$_model.DescribeRecoverableTimeRangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecoverableTimeRangeWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2019-01-01",
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
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRestoreFullDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreFullDetailsResponse
   */
  async describeRestoreFullDetailsWithOptions(request: $_model.DescribeRestoreFullDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRestoreFullDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.restoreRecordId)) {
      query["RestoreRecordId"] = request.restoreRecordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRestoreFullDetails",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRestoreFullDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRestoreFullDetailsResponse({}));
  }

  /**
   * @param request - DescribeRestoreFullDetailsRequest
   * @returns DescribeRestoreFullDetailsResponse
   */
  async describeRestoreFullDetails(request: $_model.DescribeRestoreFullDetailsRequest): Promise<$_model.DescribeRestoreFullDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRestoreFullDetailsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRestoreIncrDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreIncrDetailResponse
   */
  async describeRestoreIncrDetailWithOptions(request: $_model.DescribeRestoreIncrDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRestoreIncrDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.restoreRecordId)) {
      query["RestoreRecordId"] = request.restoreRecordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRestoreIncrDetail",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRestoreIncrDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRestoreIncrDetailResponse({}));
  }

  /**
   * @param request - DescribeRestoreIncrDetailRequest
   * @returns DescribeRestoreIncrDetailResponse
   */
  async describeRestoreIncrDetail(request: $_model.DescribeRestoreIncrDetailRequest): Promise<$_model.DescribeRestoreIncrDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRestoreIncrDetailWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRestoreSchemaDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreSchemaDetailsResponse
   */
  async describeRestoreSchemaDetailsWithOptions(request: $_model.DescribeRestoreSchemaDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRestoreSchemaDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.restoreRecordId)) {
      query["RestoreRecordId"] = request.restoreRecordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRestoreSchemaDetails",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRestoreSchemaDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRestoreSchemaDetailsResponse({}));
  }

  /**
   * @param request - DescribeRestoreSchemaDetailsRequest
   * @returns DescribeRestoreSchemaDetailsResponse
   */
  async describeRestoreSchemaDetails(request: $_model.DescribeRestoreSchemaDetailsRequest): Promise<$_model.DescribeRestoreSchemaDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRestoreSchemaDetailsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRestoreSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreSummaryResponse
   */
  async describeRestoreSummaryWithOptions(request: $_model.DescribeRestoreSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRestoreSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "DescribeRestoreSummary",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRestoreSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRestoreSummaryResponse({}));
  }

  /**
   * @param request - DescribeRestoreSummaryRequest
   * @returns DescribeRestoreSummaryResponse
   */
  async describeRestoreSummary(request: $_model.DescribeRestoreSummaryRequest): Promise<$_model.DescribeRestoreSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRestoreSummaryWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRestoreTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreTablesResponse
   */
  async describeRestoreTablesWithOptions(request: $_model.DescribeRestoreTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRestoreTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.restoreRecordId)) {
      query["RestoreRecordId"] = request.restoreRecordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRestoreTables",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRestoreTablesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRestoreTablesResponse({}));
  }

  /**
   * @param request - DescribeRestoreTablesRequest
   * @returns DescribeRestoreTablesResponse
   */
  async describeRestoreTables(request: $_model.DescribeRestoreTablesRequest): Promise<$_model.DescribeRestoreTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRestoreTablesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityGroupsResponse
   */
  async describeSecurityGroupsWithOptions(request: $_model.DescribeSecurityGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityGroups",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityGroupsResponse({}));
  }

  /**
   * @param request - DescribeSecurityGroupsRequest
   * @returns DescribeSecurityGroupsResponse
   */
  async describeSecurityGroups(request: $_model.DescribeSecurityGroupsRequest): Promise<$_model.DescribeSecurityGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeServerlessClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServerlessClusterResponse
   */
  async describeServerlessClusterWithOptions(request: $_model.DescribeServerlessClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServerlessClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServerlessCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServerlessClusterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServerlessClusterResponse({}));
  }

  /**
   * @param request - DescribeServerlessClusterRequest
   * @returns DescribeServerlessClusterResponse
   */
  async describeServerlessCluster(request: $_model.DescribeServerlessClusterRequest): Promise<$_model.DescribeServerlessClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServerlessClusterWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSubDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubDomainResponse
   */
  async describeSubDomainWithOptions(request: $_model.DescribeSubDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubDomain",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubDomainResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubDomainResponse({}));
  }

  /**
   * @param request - DescribeSubDomainRequest
   * @returns DescribeSubDomainResponse
   */
  async describeSubDomain(request: $_model.DescribeSubDomainRequest): Promise<$_model.DescribeSubDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubDomainWithOptions(request, runtime);
  }

  /**
   * @param request - EnableHBaseueBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableHBaseueBackupResponse
   */
  async enableHBaseueBackupWithOptions(request: $_model.EnableHBaseueBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableHBaseueBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.coldStorageSize)) {
      query["ColdStorageSize"] = request.coldStorageSize;
    }

    if (!$dara.isNull(request.hbaseueClusterId)) {
      query["HbaseueClusterId"] = request.hbaseueClusterId;
    }

    if (!$dara.isNull(request.nodeCount)) {
      query["NodeCount"] = request.nodeCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableHBaseueBackup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableHBaseueBackupResponse>(await this.callApi(params, req, runtime), new $_model.EnableHBaseueBackupResponse({}));
  }

  /**
   * @param request - EnableHBaseueBackupRequest
   * @returns EnableHBaseueBackupResponse
   */
  async enableHBaseueBackup(request: $_model.EnableHBaseueBackupRequest): Promise<$_model.EnableHBaseueBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableHBaseueBackupWithOptions(request, runtime);
  }

  /**
   * @param request - EnableHBaseueModuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableHBaseueModuleResponse
   */
  async enableHBaseueModuleWithOptions(request: $_model.EnableHBaseueModuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableHBaseueModuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.bdsId)) {
      query["BdsId"] = request.bdsId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.hbaseueClusterId)) {
      query["HbaseueClusterId"] = request.hbaseueClusterId;
    }

    if (!$dara.isNull(request.masterInstanceType)) {
      query["MasterInstanceType"] = request.masterInstanceType;
    }

    if (!$dara.isNull(request.moduleClusterName)) {
      query["ModuleClusterName"] = request.moduleClusterName;
    }

    if (!$dara.isNull(request.moduleTypeName)) {
      query["ModuleTypeName"] = request.moduleTypeName;
    }

    if (!$dara.isNull(request.nodeCount)) {
      query["NodeCount"] = request.nodeCount;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableHBaseueModule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableHBaseueModuleResponse>(await this.callApi(params, req, runtime), new $_model.EnableHBaseueModuleResponse({}));
  }

  /**
   * @param request - EnableHBaseueModuleRequest
   * @returns EnableHBaseueModuleResponse
   */
  async enableHBaseueModule(request: $_model.EnableHBaseueModuleRequest): Promise<$_model.EnableHBaseueModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableHBaseueModuleWithOptions(request, runtime);
  }

  /**
   * @param request - EvaluateMultiZoneResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvaluateMultiZoneResourceResponse
   */
  async evaluateMultiZoneResourceWithOptions(request: $_model.EvaluateMultiZoneResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EvaluateMultiZoneResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.arbiterVSwitchId)) {
      query["ArbiterVSwitchId"] = request.arbiterVSwitchId;
    }

    if (!$dara.isNull(request.arbiterZoneId)) {
      query["ArbiterZoneId"] = request.arbiterZoneId;
    }

    if (!$dara.isNull(request.archVersion)) {
      query["ArchVersion"] = request.archVersion;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.coreDiskSize)) {
      query["CoreDiskSize"] = request.coreDiskSize;
    }

    if (!$dara.isNull(request.coreDiskType)) {
      query["CoreDiskType"] = request.coreDiskType;
    }

    if (!$dara.isNull(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!$dara.isNull(request.coreNodeCount)) {
      query["CoreNodeCount"] = request.coreNodeCount;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.logDiskSize)) {
      query["LogDiskSize"] = request.logDiskSize;
    }

    if (!$dara.isNull(request.logDiskType)) {
      query["LogDiskType"] = request.logDiskType;
    }

    if (!$dara.isNull(request.logInstanceType)) {
      query["LogInstanceType"] = request.logInstanceType;
    }

    if (!$dara.isNull(request.logNodeCount)) {
      query["LogNodeCount"] = request.logNodeCount;
    }

    if (!$dara.isNull(request.masterInstanceType)) {
      query["MasterInstanceType"] = request.masterInstanceType;
    }

    if (!$dara.isNull(request.multiZoneCombination)) {
      query["MultiZoneCombination"] = request.multiZoneCombination;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.primaryVSwitchId)) {
      query["PrimaryVSwitchId"] = request.primaryVSwitchId;
    }

    if (!$dara.isNull(request.primaryZoneId)) {
      query["PrimaryZoneId"] = request.primaryZoneId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.standbyVSwitchId)) {
      query["StandbyVSwitchId"] = request.standbyVSwitchId;
    }

    if (!$dara.isNull(request.standbyZoneId)) {
      query["StandbyZoneId"] = request.standbyZoneId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EvaluateMultiZoneResource",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EvaluateMultiZoneResourceResponse>(await this.callApi(params, req, runtime), new $_model.EvaluateMultiZoneResourceResponse({}));
  }

  /**
   * @param request - EvaluateMultiZoneResourceRequest
   * @returns EvaluateMultiZoneResourceResponse
   */
  async evaluateMultiZoneResource(request: $_model.EvaluateMultiZoneResourceRequest): Promise<$_model.EvaluateMultiZoneResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.evaluateMultiZoneResourceWithOptions(request, runtime);
  }

  /**
   * @param request - GetMultimodeCmsUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultimodeCmsUrlResponse
   */
  async getMultimodeCmsUrlWithOptions(request: $_model.GetMultimodeCmsUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultimodeCmsUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultimodeCmsUrl",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultimodeCmsUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetMultimodeCmsUrlResponse({}));
  }

  /**
   * @param request - GetMultimodeCmsUrlRequest
   * @returns GetMultimodeCmsUrlResponse
   */
  async getMultimodeCmsUrl(request: $_model.GetMultimodeCmsUrlRequest): Promise<$_model.GetMultimodeCmsUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMultimodeCmsUrlWithOptions(request, runtime);
  }

  /**
   * 授权账户权限
   * 
   * @param request - GrantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantResponse
   */
  async grantWithOptions(request: $_model.GrantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.aclActions)) {
      query["AclActions"] = request.aclActions;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Grant",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantResponse>(await this.callApi(params, req, runtime), new $_model.GrantResponse({}));
  }

  /**
   * 授权账户权限
   * 
   * @param request - GrantRequest
   * @returns GrantResponse
   */
  async grant(request: $_model.GrantRequest): Promise<$_model.GrantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantWithOptions(request, runtime);
  }

  /**
   * @param request - ListHBaseInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHBaseInstancesResponse
   */
  async listHBaseInstancesWithOptions(request: $_model.ListHBaseInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHBaseInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHBaseInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHBaseInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListHBaseInstancesResponse({}));
  }

  /**
   * @param request - ListHBaseInstancesRequest
   * @returns ListHBaseInstancesResponse
   */
  async listHBaseInstances(request: $_model.ListHBaseInstancesRequest): Promise<$_model.ListHBaseInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHBaseInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - ListInstanceServiceConfigHistoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceServiceConfigHistoriesResponse
   */
  async listInstanceServiceConfigHistoriesWithOptions(request: $_model.ListInstanceServiceConfigHistoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceServiceConfigHistoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "ListInstanceServiceConfigHistories",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceServiceConfigHistoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceServiceConfigHistoriesResponse({}));
  }

  /**
   * @param request - ListInstanceServiceConfigHistoriesRequest
   * @returns ListInstanceServiceConfigHistoriesResponse
   */
  async listInstanceServiceConfigHistories(request: $_model.ListInstanceServiceConfigHistoriesRequest): Promise<$_model.ListInstanceServiceConfigHistoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceServiceConfigHistoriesWithOptions(request, runtime);
  }

  /**
   * @param request - ListInstanceServiceConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceServiceConfigurationsResponse
   */
  async listInstanceServiceConfigurationsWithOptions(request: $_model.ListInstanceServiceConfigurationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceServiceConfigurationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "ListInstanceServiceConfigurations",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceServiceConfigurationsResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceServiceConfigurationsResponse({}));
  }

  /**
   * @param request - ListInstanceServiceConfigurationsRequest
   * @returns ListInstanceServiceConfigurationsResponse
   */
  async listInstanceServiceConfigurations(request: $_model.ListInstanceServiceConfigurationsRequest): Promise<$_model.ListInstanceServiceConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceServiceConfigurationsWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2019-01-01",
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
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - ListTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsResponse
   */
  async listTagsWithOptions(request: $_model.ListTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTags",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListTagsResponse({}));
  }

  /**
   * @param request - ListTagsRequest
   * @returns ListTagsResponse
   */
  async listTags(request: $_model.ListTagsRequest): Promise<$_model.ListTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagsWithOptions(request, runtime);
  }

  /**
   * 更改账户密码
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

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.newAccountPassword)) {
      query["NewAccountPassword"] = request.newAccountPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountPassword",
      version: "2019-01-01",
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
   * 更改账户密码
   * 
   * @param request - ModifyAccountPasswordRequest
   * @returns ModifyAccountPasswordResponse
   */
  async modifyAccountPassword(request: $_model.ModifyAccountPasswordRequest): Promise<$_model.ModifyAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountPasswordWithOptions(request, runtime);
  }

  /**
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
      version: "2019-01-01",
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
   * @param request - ModifyActiveOperationTasksRequest
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasks(request: $_model.ModifyActiveOperationTasksRequest): Promise<$_model.ModifyActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyBackupPlanConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPlanConfigResponse
   */
  async modifyBackupPlanConfigWithOptions(request: $_model.ModifyBackupPlanConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPlanConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.fullBackupCycle)) {
      query["FullBackupCycle"] = request.fullBackupCycle;
    }

    if (!$dara.isNull(request.minHFileBackupCount)) {
      query["MinHFileBackupCount"] = request.minHFileBackupCount;
    }

    if (!$dara.isNull(request.nextFullBackupDate)) {
      query["NextFullBackupDate"] = request.nextFullBackupDate;
    }

    if (!$dara.isNull(request.tables)) {
      query["Tables"] = request.tables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupPlanConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackupPlanConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackupPlanConfigResponse({}));
  }

  /**
   * @param request - ModifyBackupPlanConfigRequest
   * @returns ModifyBackupPlanConfigResponse
   */
  async modifyBackupPlanConfig(request: $_model.ModifyBackupPlanConfigRequest): Promise<$_model.ModifyBackupPlanConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPlanConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(request: $_model.ModifyBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.preferredBackupEndTimeUTC)) {
      query["PreferredBackupEndTimeUTC"] = request.preferredBackupEndTimeUTC;
    }

    if (!$dara.isNull(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!$dara.isNull(request.preferredBackupStartTimeUTC)) {
      query["PreferredBackupStartTimeUTC"] = request.preferredBackupStartTimeUTC;
    }

    if (!$dara.isNull(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupPolicy",
      version: "2019-01-01",
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
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyClusterDeletionProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterDeletionProtectionResponse
   */
  async modifyClusterDeletionProtectionWithOptions(request: $_model.ModifyClusterDeletionProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterDeletionProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.protection)) {
      query["Protection"] = request.protection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterDeletionProtection",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterDeletionProtectionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterDeletionProtectionResponse({}));
  }

  /**
   * @param request - ModifyClusterDeletionProtectionRequest
   * @returns ModifyClusterDeletionProtectionResponse
   */
  async modifyClusterDeletionProtection(request: $_model.ModifyClusterDeletionProtectionRequest): Promise<$_model.ModifyClusterDeletionProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyClusterDeletionProtectionWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDiskWarningLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskWarningLineResponse
   */
  async modifyDiskWarningLineWithOptions(request: $_model.ModifyDiskWarningLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDiskWarningLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.warningLine)) {
      query["WarningLine"] = request.warningLine;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDiskWarningLine",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDiskWarningLineResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDiskWarningLineResponse({}));
  }

  /**
   * @param request - ModifyDiskWarningLineRequest
   * @returns ModifyDiskWarningLineResponse
   */
  async modifyDiskWarningLine(request: $_model.ModifyDiskWarningLineRequest): Promise<$_model.ModifyDiskWarningLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDiskWarningLineWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyInstanceMaintainTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceMaintainTimeResponse
   */
  async modifyInstanceMaintainTimeWithOptions(request: $_model.ModifyInstanceMaintainTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceMaintainTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.maintainEndTime)) {
      query["MaintainEndTime"] = request.maintainEndTime;
    }

    if (!$dara.isNull(request.maintainStartTime)) {
      query["MaintainStartTime"] = request.maintainStartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceMaintainTime",
      version: "2019-01-01",
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
   * @param request - ModifyInstanceMaintainTimeRequest
   * @returns ModifyInstanceMaintainTimeResponse
   */
  async modifyInstanceMaintainTime(request: $_model.ModifyInstanceMaintainTimeRequest): Promise<$_model.ModifyInstanceMaintainTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceMaintainTimeWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyInstanceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceNameResponse
   */
  async modifyInstanceNameWithOptions(request: $_model.ModifyInstanceNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceName",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceNameResponse({}));
  }

  /**
   * @param request - ModifyInstanceNameRequest
   * @returns ModifyInstanceNameResponse
   */
  async modifyInstanceName(request: $_model.ModifyInstanceNameRequest): Promise<$_model.ModifyInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceNameWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyInstanceServiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceServiceConfigResponse
   */
  async modifyInstanceServiceConfigWithOptions(request: $_model.ModifyInstanceServiceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceServiceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.configureName)) {
      query["ConfigureName"] = request.configureName;
    }

    if (!$dara.isNull(request.configureValue)) {
      query["ConfigureValue"] = request.configureValue;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.restart)) {
      query["Restart"] = request.restart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceServiceConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceServiceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceServiceConfigResponse({}));
  }

  /**
   * @param request - ModifyInstanceServiceConfigRequest
   * @returns ModifyInstanceServiceConfigResponse
   */
  async modifyInstanceServiceConfig(request: $_model.ModifyInstanceServiceConfigRequest): Promise<$_model.ModifyInstanceServiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceServiceConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyInstanceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceTypeResponse
   */
  async modifyInstanceTypeWithOptions(request: $_model.ModifyInstanceTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!$dara.isNull(request.masterInstanceType)) {
      query["MasterInstanceType"] = request.masterInstanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceType",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceTypeResponse({}));
  }

  /**
   * @param request - ModifyInstanceTypeRequest
   * @returns ModifyInstanceTypeResponse
   */
  async modifyInstanceType(request: $_model.ModifyInstanceTypeRequest): Promise<$_model.ModifyInstanceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceTypeWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyIpWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIpWhitelistResponse
   */
  async modifyIpWhitelistWithOptions(request: $_model.ModifyIpWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyIpWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIpWhitelist",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyIpWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.ModifyIpWhitelistResponse({}));
  }

  /**
   * @param request - ModifyIpWhitelistRequest
   * @returns ModifyIpWhitelistResponse
   */
  async modifyIpWhitelist(request: $_model.ModifyIpWhitelistRequest): Promise<$_model.ModifyIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyIpWhitelistWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyMultiZoneClusterNodeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMultiZoneClusterNodeTypeResponse
   */
  async modifyMultiZoneClusterNodeTypeWithOptions(request: $_model.ModifyMultiZoneClusterNodeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMultiZoneClusterNodeTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!$dara.isNull(request.logInstanceType)) {
      query["LogInstanceType"] = request.logInstanceType;
    }

    if (!$dara.isNull(request.masterInstanceType)) {
      query["MasterInstanceType"] = request.masterInstanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMultiZoneClusterNodeType",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMultiZoneClusterNodeTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMultiZoneClusterNodeTypeResponse({}));
  }

  /**
   * @param request - ModifyMultiZoneClusterNodeTypeRequest
   * @returns ModifyMultiZoneClusterNodeTypeResponse
   */
  async modifyMultiZoneClusterNodeType(request: $_model.ModifyMultiZoneClusterNodeTypeRequest): Promise<$_model.ModifyMultiZoneClusterNodeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMultiZoneClusterNodeTypeWithOptions(request, runtime);
  }

  /**
   * @param request - ModifySecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityGroupsResponse
   */
  async modifySecurityGroupsWithOptions(request: $_model.ModifySecurityGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityGroups",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySecurityGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ModifySecurityGroupsResponse({}));
  }

  /**
   * @param request - ModifySecurityGroupsRequest
   * @returns ModifySecurityGroupsResponse
   */
  async modifySecurityGroups(request: $_model.ModifySecurityGroupsRequest): Promise<$_model.ModifySecurityGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyUIAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUIAccountPasswordResponse
   */
  async modifyUIAccountPasswordWithOptions(request: $_model.ModifyUIAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUIAccountPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUIAccountPassword",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUIAccountPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUIAccountPasswordResponse({}));
  }

  /**
   * @param request - ModifyUIAccountPasswordRequest
   * @returns ModifyUIAccountPasswordResponse
   */
  async modifyUIAccountPassword(request: $_model.ModifyUIAccountPasswordRequest): Promise<$_model.ModifyUIAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUIAccountPasswordWithOptions(request, runtime);
  }

  /**
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: $_model.MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResourceGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.MoveResourceGroupResponse({}));
  }

  /**
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - OpenBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenBackupResponse
   */
  async openBackupWithOptions(request: $_model.OpenBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenBackup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenBackupResponse>(await this.callApi(params, req, runtime), new $_model.OpenBackupResponse({}));
  }

  /**
   * @param request - OpenBackupRequest
   * @returns OpenBackupResponse
   */
  async openBackup(request: $_model.OpenBackupRequest): Promise<$_model.OpenBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openBackupWithOptions(request, runtime);
  }

  /**
   * @param request - PurgeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PurgeInstanceResponse
   */
  async purgeInstanceWithOptions(request: $_model.PurgeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PurgeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PurgeInstance",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PurgeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.PurgeInstanceResponse({}));
  }

  /**
   * @param request - PurgeInstanceRequest
   * @returns PurgeInstanceResponse
   */
  async purgeInstance(request: $_model.PurgeInstanceRequest): Promise<$_model.PurgeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.purgeInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - QueryHBaseHaDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHBaseHaDBResponse
   */
  async queryHBaseHaDBWithOptions(request: $_model.QueryHBaseHaDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryHBaseHaDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bdsId)) {
      query["BdsId"] = request.bdsId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryHBaseHaDB",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryHBaseHaDBResponse>(await this.callApi(params, req, runtime), new $_model.QueryHBaseHaDBResponse({}));
  }

  /**
   * @param request - QueryHBaseHaDBRequest
   * @returns QueryHBaseHaDBResponse
   */
  async queryHBaseHaDB(request: $_model.QueryHBaseHaDBRequest): Promise<$_model.QueryHBaseHaDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryHBaseHaDBWithOptions(request, runtime);
  }

  /**
   * @param request - QueryXpackRelateDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryXpackRelateDBResponse
   */
  async queryXpackRelateDBWithOptions(request: $_model.QueryXpackRelateDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryXpackRelateDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.hasSingleNode)) {
      query["HasSingleNode"] = request.hasSingleNode;
    }

    if (!$dara.isNull(request.relateDbType)) {
      query["RelateDbType"] = request.relateDbType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryXpackRelateDB",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryXpackRelateDBResponse>(await this.callApi(params, req, runtime), new $_model.QueryXpackRelateDBResponse({}));
  }

  /**
   * @param request - QueryXpackRelateDBRequest
   * @returns QueryXpackRelateDBResponse
   */
  async queryXpackRelateDB(request: $_model.QueryXpackRelateDBRequest): Promise<$_model.QueryXpackRelateDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryXpackRelateDBWithOptions(request, runtime);
  }

  /**
   * @param request - RelateDbForHBaseHaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RelateDbForHBaseHaResponse
   */
  async relateDbForHBaseHaWithOptions(request: $_model.RelateDbForHBaseHaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RelateDbForHBaseHaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.haActive)) {
      query["HaActive"] = request.haActive;
    }

    if (!$dara.isNull(request.haActiveClusterKey)) {
      query["HaActiveClusterKey"] = request.haActiveClusterKey;
    }

    if (!$dara.isNull(request.haActiveDBType)) {
      query["HaActiveDBType"] = request.haActiveDBType;
    }

    if (!$dara.isNull(request.haActiveHbaseFsDir)) {
      query["HaActiveHbaseFsDir"] = request.haActiveHbaseFsDir;
    }

    if (!$dara.isNull(request.haActiveHdfsUri)) {
      query["HaActiveHdfsUri"] = request.haActiveHdfsUri;
    }

    if (!$dara.isNull(request.haActivePassword)) {
      query["HaActivePassword"] = request.haActivePassword;
    }

    if (!$dara.isNull(request.haActiveUser)) {
      query["HaActiveUser"] = request.haActiveUser;
    }

    if (!$dara.isNull(request.haActiveVersion)) {
      query["HaActiveVersion"] = request.haActiveVersion;
    }

    if (!$dara.isNull(request.haMigrateType)) {
      query["HaMigrateType"] = request.haMigrateType;
    }

    if (!$dara.isNull(request.haStandby)) {
      query["HaStandby"] = request.haStandby;
    }

    if (!$dara.isNull(request.haStandbyClusterKey)) {
      query["HaStandbyClusterKey"] = request.haStandbyClusterKey;
    }

    if (!$dara.isNull(request.haStandbyDBType)) {
      query["HaStandbyDBType"] = request.haStandbyDBType;
    }

    if (!$dara.isNull(request.haStandbyHbaseFsDir)) {
      query["HaStandbyHbaseFsDir"] = request.haStandbyHbaseFsDir;
    }

    if (!$dara.isNull(request.haStandbyHdfsUri)) {
      query["HaStandbyHdfsUri"] = request.haStandbyHdfsUri;
    }

    if (!$dara.isNull(request.haStandbyPassword)) {
      query["HaStandbyPassword"] = request.haStandbyPassword;
    }

    if (!$dara.isNull(request.haStandbyUser)) {
      query["HaStandbyUser"] = request.haStandbyUser;
    }

    if (!$dara.isNull(request.haStandbyVersion)) {
      query["HaStandbyVersion"] = request.haStandbyVersion;
    }

    if (!$dara.isNull(request.haTables)) {
      query["HaTables"] = request.haTables;
    }

    if (!$dara.isNull(request.isActiveStandard)) {
      query["IsActiveStandard"] = request.isActiveStandard;
    }

    if (!$dara.isNull(request.isStandbyStandard)) {
      query["IsStandbyStandard"] = request.isStandbyStandard;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RelateDbForHBaseHa",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RelateDbForHBaseHaResponse>(await this.callApi(params, req, runtime), new $_model.RelateDbForHBaseHaResponse({}));
  }

  /**
   * @param request - RelateDbForHBaseHaRequest
   * @returns RelateDbForHBaseHaResponse
   */
  async relateDbForHBaseHa(request: $_model.RelateDbForHBaseHaRequest): Promise<$_model.RelateDbForHBaseHaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.relateDbForHBaseHaWithOptions(request, runtime);
  }

  /**
   * @param request - ReleasePublicNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleasePublicNetworkAddressResponse
   */
  async releasePublicNetworkAddressWithOptions(request: $_model.ReleasePublicNetworkAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleasePublicNetworkAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleasePublicNetworkAddress",
      version: "2019-01-01",
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
   * @param request - ReleasePublicNetworkAddressRequest
   * @returns ReleasePublicNetworkAddressResponse
   */
  async releasePublicNetworkAddress(request: $_model.ReleasePublicNetworkAddressRequest): Promise<$_model.ReleasePublicNetworkAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releasePublicNetworkAddressWithOptions(request, runtime);
  }

  /**
   * @param request - RenewInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(request: $_model.RenewInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewInstance",
      version: "2019-01-01",
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
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - ResizeColdStorageSizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeColdStorageSizeResponse
   */
  async resizeColdStorageSizeWithOptions(request: $_model.ResizeColdStorageSizeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResizeColdStorageSizeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.coldStorageSize)) {
      query["ColdStorageSize"] = request.coldStorageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResizeColdStorageSize",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResizeColdStorageSizeResponse>(await this.callApi(params, req, runtime), new $_model.ResizeColdStorageSizeResponse({}));
  }

  /**
   * @param request - ResizeColdStorageSizeRequest
   * @returns ResizeColdStorageSizeResponse
   */
  async resizeColdStorageSize(request: $_model.ResizeColdStorageSizeRequest): Promise<$_model.ResizeColdStorageSizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resizeColdStorageSizeWithOptions(request, runtime);
  }

  /**
   * @param request - ResizeDiskSizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeDiskSizeResponse
   */
  async resizeDiskSizeWithOptions(request: $_model.ResizeDiskSizeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResizeDiskSizeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodeDiskSize)) {
      query["NodeDiskSize"] = request.nodeDiskSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResizeDiskSize",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResizeDiskSizeResponse>(await this.callApi(params, req, runtime), new $_model.ResizeDiskSizeResponse({}));
  }

  /**
   * @param request - ResizeDiskSizeRequest
   * @returns ResizeDiskSizeResponse
   */
  async resizeDiskSize(request: $_model.ResizeDiskSizeRequest): Promise<$_model.ResizeDiskSizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resizeDiskSizeWithOptions(request, runtime);
  }

  /**
   * @param request - ResizeMultiZoneClusterDiskSizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeMultiZoneClusterDiskSizeResponse
   */
  async resizeMultiZoneClusterDiskSizeWithOptions(request: $_model.ResizeMultiZoneClusterDiskSizeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResizeMultiZoneClusterDiskSizeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.coreDiskSize)) {
      query["CoreDiskSize"] = request.coreDiskSize;
    }

    if (!$dara.isNull(request.logDiskSize)) {
      query["LogDiskSize"] = request.logDiskSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResizeMultiZoneClusterDiskSize",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResizeMultiZoneClusterDiskSizeResponse>(await this.callApi(params, req, runtime), new $_model.ResizeMultiZoneClusterDiskSizeResponse({}));
  }

  /**
   * @param request - ResizeMultiZoneClusterDiskSizeRequest
   * @returns ResizeMultiZoneClusterDiskSizeResponse
   */
  async resizeMultiZoneClusterDiskSize(request: $_model.ResizeMultiZoneClusterDiskSizeRequest): Promise<$_model.ResizeMultiZoneClusterDiskSizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resizeMultiZoneClusterDiskSizeWithOptions(request, runtime);
  }

  /**
   * @param request - ResizeMultiZoneClusterNodeCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeMultiZoneClusterNodeCountResponse
   */
  async resizeMultiZoneClusterNodeCountWithOptions(request: $_model.ResizeMultiZoneClusterNodeCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResizeMultiZoneClusterNodeCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.arbiterVSwitchId)) {
      query["ArbiterVSwitchId"] = request.arbiterVSwitchId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.coreNodeCount)) {
      query["CoreNodeCount"] = request.coreNodeCount;
    }

    if (!$dara.isNull(request.logNodeCount)) {
      query["LogNodeCount"] = request.logNodeCount;
    }

    if (!$dara.isNull(request.primaryCoreNodeCount)) {
      query["PrimaryCoreNodeCount"] = request.primaryCoreNodeCount;
    }

    if (!$dara.isNull(request.primaryVSwitchId)) {
      query["PrimaryVSwitchId"] = request.primaryVSwitchId;
    }

    if (!$dara.isNull(request.standbyCoreNodeCount)) {
      query["StandbyCoreNodeCount"] = request.standbyCoreNodeCount;
    }

    if (!$dara.isNull(request.standbyVSwitchId)) {
      query["StandbyVSwitchId"] = request.standbyVSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResizeMultiZoneClusterNodeCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResizeMultiZoneClusterNodeCountResponse>(await this.callApi(params, req, runtime), new $_model.ResizeMultiZoneClusterNodeCountResponse({}));
  }

  /**
   * @param request - ResizeMultiZoneClusterNodeCountRequest
   * @returns ResizeMultiZoneClusterNodeCountResponse
   */
  async resizeMultiZoneClusterNodeCount(request: $_model.ResizeMultiZoneClusterNodeCountRequest): Promise<$_model.ResizeMultiZoneClusterNodeCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resizeMultiZoneClusterNodeCountWithOptions(request, runtime);
  }

  /**
   * @param request - ResizeNodeCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeNodeCountResponse
   */
  async resizeNodeCountWithOptions(request: $_model.ResizeNodeCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResizeNodeCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodeCount)) {
      query["NodeCount"] = request.nodeCount;
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
      action: "ResizeNodeCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResizeNodeCountResponse>(await this.callApi(params, req, runtime), new $_model.ResizeNodeCountResponse({}));
  }

  /**
   * @param request - ResizeNodeCountRequest
   * @returns ResizeNodeCountResponse
   */
  async resizeNodeCount(request: $_model.ResizeNodeCountRequest): Promise<$_model.ResizeNodeCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resizeNodeCountWithOptions(request, runtime);
  }

  /**
   * @param request - RestartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(request: $_model.RestartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.components)) {
      query["Components"] = request.components;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartInstance",
      version: "2019-01-01",
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
   * @param request - RestartInstanceRequest
   * @returns RestartInstanceResponse
   */
  async restartInstance(request: $_model.RestartInstanceRequest): Promise<$_model.RestartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  /**
   * 回收账户权限
   * 
   * @param request - RevokeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeResponse
   */
  async revokeWithOptions(request: $_model.RevokeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.aclActions)) {
      query["AclActions"] = request.aclActions;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Revoke",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeResponse>(await this.callApi(params, req, runtime), new $_model.RevokeResponse({}));
  }

  /**
   * 回收账户权限
   * 
   * @param request - RevokeRequest
   * @returns RevokeResponse
   */
  async revoke(request: $_model.RevokeRequest): Promise<$_model.RevokeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeWithOptions(request, runtime);
  }

  /**
   * @param request - SwitchHbaseHaSlbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchHbaseHaSlbResponse
   */
  async switchHbaseHaSlbWithOptions(request: $_model.SwitchHbaseHaSlbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchHbaseHaSlbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bdsId)) {
      query["BdsId"] = request.bdsId;
    }

    if (!$dara.isNull(request.haId)) {
      query["HaId"] = request.haId;
    }

    if (!$dara.isNull(request.haTypes)) {
      query["HaTypes"] = request.haTypes;
    }

    if (!$dara.isNull(request.hbaseType)) {
      query["HbaseType"] = request.hbaseType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchHbaseHaSlb",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchHbaseHaSlbResponse>(await this.callApi(params, req, runtime), new $_model.SwitchHbaseHaSlbResponse({}));
  }

  /**
   * @param request - SwitchHbaseHaSlbRequest
   * @returns SwitchHbaseHaSlbResponse
   */
  async switchHbaseHaSlb(request: $_model.SwitchHbaseHaSlbRequest): Promise<$_model.SwitchHbaseHaSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchHbaseHaSlbWithOptions(request, runtime);
  }

  /**
   * 开通/关闭 扩展服务
   * 
   * @param request - SwitchServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchServiceResponse
   */
  async switchServiceWithOptions(request: $_model.SwitchServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.operate)) {
      query["Operate"] = request.operate;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchService",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchServiceResponse>(await this.callApi(params, req, runtime), new $_model.SwitchServiceResponse({}));
  }

  /**
   * 开通/关闭 扩展服务
   * 
   * @param request - SwitchServiceRequest
   * @returns SwitchServiceResponse
   */
  async switchService(request: $_model.SwitchServiceRequest): Promise<$_model.SwitchServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchServiceWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2019-01-01",
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
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - UnTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnTagResourcesResponse
   */
  async unTagResourcesWithOptions(request: $_model.UnTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnTagResourcesResponse> {
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

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnTagResources",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UnTagResourcesResponse({}));
  }

  /**
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: $_model.UnTagResourcesRequest): Promise<$_model.UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - UpgradeMinorVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeMinorVersionResponse
   */
  async upgradeMinorVersionWithOptions(request: $_model.UpgradeMinorVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeMinorVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.components)) {
      query["Components"] = request.components;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeMinorVersion",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeMinorVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeMinorVersionResponse({}));
  }

  /**
   * @param request - UpgradeMinorVersionRequest
   * @returns UpgradeMinorVersionResponse
   */
  async upgradeMinorVersion(request: $_model.UpgradeMinorVersionRequest): Promise<$_model.UpgradeMinorVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeMinorVersionWithOptions(request, runtime);
  }

  /**
   * @param request - UpgradeMultiZoneClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeMultiZoneClusterResponse
   */
  async upgradeMultiZoneClusterWithOptions(request: $_model.UpgradeMultiZoneClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeMultiZoneClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.components)) {
      query["Components"] = request.components;
    }

    if (!$dara.isNull(request.restartComponents)) {
      query["RestartComponents"] = request.restartComponents;
    }

    if (!$dara.isNull(request.runMode)) {
      query["RunMode"] = request.runMode;
    }

    if (!$dara.isNull(request.upgradeInsName)) {
      query["UpgradeInsName"] = request.upgradeInsName;
    }

    if (!$dara.isNull(request.versions)) {
      query["Versions"] = request.versions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeMultiZoneCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeMultiZoneClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeMultiZoneClusterResponse({}));
  }

  /**
   * @param request - UpgradeMultiZoneClusterRequest
   * @returns UpgradeMultiZoneClusterResponse
   */
  async upgradeMultiZoneCluster(request: $_model.UpgradeMultiZoneClusterRequest): Promise<$_model.UpgradeMultiZoneClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeMultiZoneClusterWithOptions(request, runtime);
  }

  /**
   * @param request - XpackRelateDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns XpackRelateDBResponse
   */
  async xpackRelateDBWithOptions(request: $_model.XpackRelateDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.XpackRelateDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dbClusterIds)) {
      query["DbClusterIds"] = request.dbClusterIds;
    }

    if (!$dara.isNull(request.relateDbType)) {
      query["RelateDbType"] = request.relateDbType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "XpackRelateDB",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.XpackRelateDBResponse>(await this.callApi(params, req, runtime), new $_model.XpackRelateDBResponse({}));
  }

  /**
   * @param request - XpackRelateDBRequest
   * @returns XpackRelateDBResponse
   */
  async xpackRelateDB(request: $_model.XpackRelateDBRequest): Promise<$_model.XpackRelateDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.xpackRelateDBWithOptions(request, runtime);
  }

}
