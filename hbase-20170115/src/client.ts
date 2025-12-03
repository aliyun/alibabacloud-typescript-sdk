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
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
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
      action: "AddUserHdfsInfo",
      version: "2017-01-15",
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
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

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
      version: "2017-01-15",
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
   * @param request - CheckVersionsOfComponentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckVersionsOfComponentsResponse
   */
  async checkVersionsOfComponentsWithOptions(request: $_model.CheckVersionsOfComponentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckVersionsOfComponentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.components)) {
      query["Components"] = request.components;
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
      action: "CheckVersionsOfComponents",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckVersionsOfComponentsResponse>(await this.callApi(params, req, runtime), new $_model.CheckVersionsOfComponentsResponse({}));
  }

  /**
   * @param request - CheckVersionsOfComponentsRequest
   * @returns CheckVersionsOfComponentsResponse
   */
  async checkVersionsOfComponents(request: $_model.CheckVersionsOfComponentsRequest): Promise<$_model.CheckVersionsOfComponentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkVersionsOfComponentsWithOptions(request, runtime);
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
      action: "CloseBackup",
      version: "2017-01-15",
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
   * @param request - ConvertClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertClusterResponse
   */
  async convertClusterWithOptions(request: $_model.ConvertClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      action: "ConvertCluster",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConvertClusterResponse>(await this.callApi(params, req, runtime), new $_model.ConvertClusterResponse({}));
  }

  /**
   * @param request - ConvertClusterRequest
   * @returns ConvertClusterResponse
   */
  async convertCluster(request: $_model.ConvertClusterRequest): Promise<$_model.ConvertClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.convertClusterWithOptions(request, runtime);
  }

  /**
   * 创建实例
   * 
   * @param request - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(request: $_model.CreateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cloudType)) {
      query["CloudType"] = request.cloudType;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.coldStorageSize)) {
      query["ColdStorageSize"] = request.coldStorageSize;
    }

    if (!$dara.isNull(request.coreDiskQuantity)) {
      query["CoreDiskQuantity"] = request.coreDiskQuantity;
    }

    if (!$dara.isNull(request.coreDiskSize)) {
      query["CoreDiskSize"] = request.coreDiskSize;
    }

    if (!$dara.isNull(request.coreDiskType)) {
      query["CoreDiskType"] = request.coreDiskType;
    }

    if (!$dara.isNull(request.coreInstanceQuantity)) {
      query["CoreInstanceQuantity"] = request.coreInstanceQuantity;
    }

    if (!$dara.isNull(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!$dara.isNull(request.dbInstanceConnType)) {
      query["DbInstanceConnType"] = request.dbInstanceConnType;
    }

    if (!$dara.isNull(request.dbInstanceType)) {
      query["DbInstanceType"] = request.dbInstanceType;
    }

    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.depMode)) {
      query["DepMode"] = request.depMode;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.isColdStorage)) {
      query["IsColdStorage"] = request.isColdStorage;
    }

    if (!$dara.isNull(request.masterInstanceType)) {
      query["MasterInstanceType"] = request.masterInstanceType;
    }

    if (!$dara.isNull(request.netType)) {
      query["NetType"] = request.netType;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.srcDBInstanceId)) {
      query["SrcDBInstanceId"] = request.srcDBInstanceId;
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
      version: "2017-01-15",
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
   * 创建实例
   * 
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
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
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

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGlobalResource",
      version: "2017-01-15",
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
   * @param request - CreateHbaseSlbServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHbaseSlbServerResponse
   */
  async createHbaseSlbServerWithOptions(request: $_model.CreateHbaseSlbServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHbaseSlbServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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

    if (!$dara.isNull(request.slbServer)) {
      query["SlbServer"] = request.slbServer;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHbaseSlbServer",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHbaseSlbServerResponse>(await this.callApi(params, req, runtime), new $_model.CreateHbaseSlbServerResponse({}));
  }

  /**
   * @param request - CreateHbaseSlbServerRequest
   * @returns CreateHbaseSlbServerResponse
   */
  async createHbaseSlbServer(request: $_model.CreateHbaseSlbServerRequest): Promise<$_model.CreateHbaseSlbServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHbaseSlbServerWithOptions(request, runtime);
  }

  /**
   * 创建订阅
   * 
   * @param request - CreateSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubscriptionResponse
   */
  async createSubscriptionWithOptions(request: $_model.CreateSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSubscriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationInstanceId)) {
      query["DestinationInstanceId"] = request.destinationInstanceId;
    }

    if (!$dara.isNull(request.destinationInstanceRegionId)) {
      query["DestinationInstanceRegionId"] = request.destinationInstanceRegionId;
    }

    if (!$dara.isNull(request.extraContext)) {
      query["ExtraContext"] = request.extraContext;
    }

    if (!$dara.isNull(request.mapping)) {
      query["Mapping"] = request.mapping;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.slbServer)) {
      query["SlbServer"] = request.slbServer;
    }

    if (!$dara.isNull(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!$dara.isNull(request.sourceInstanceRegionId)) {
      query["SourceInstanceRegionId"] = request.sourceInstanceRegionId;
    }

    if (!$dara.isNull(request.subscriptionDescription)) {
      query["SubscriptionDescription"] = request.subscriptionDescription;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSubscription",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.CreateSubscriptionResponse({}));
  }

  /**
   * 创建订阅
   * 
   * @param request - CreateSubscriptionRequest
   * @returns CreateSubscriptionResponse
   */
  async createSubscription(request: $_model.CreateSubscriptionRequest): Promise<$_model.CreateSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSubscriptionWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: $_model.DeleteClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "DeleteCluster",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterResponse({}));
  }

  /**
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: $_model.DeleteClusterRequest): Promise<$_model.DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
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

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGlobalResource",
      version: "2017-01-15",
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
   * @param request - DeleteHbaseSlbServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHbaseSlbServerResponse
   */
  async deleteHbaseSlbServerWithOptions(request: $_model.DeleteHbaseSlbServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHbaseSlbServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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

    if (!$dara.isNull(request.slbServer)) {
      query["SlbServer"] = request.slbServer;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHbaseSlbServer",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHbaseSlbServerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHbaseSlbServerResponse({}));
  }

  /**
   * @param request - DeleteHbaseSlbServerRequest
   * @returns DeleteHbaseSlbServerResponse
   */
  async deleteHbaseSlbServer(request: $_model.DeleteHbaseSlbServerRequest): Promise<$_model.DeleteHbaseSlbServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHbaseSlbServerWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteServerlessInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServerlessInstanceResponse
   */
  async deleteServerlessInstanceWithOptions(request: $_model.DeleteServerlessInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServerlessInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DeleteServerlessInstance",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServerlessInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServerlessInstanceResponse({}));
  }

  /**
   * @param request - DeleteServerlessInstanceRequest
   * @returns DeleteServerlessInstanceResponse
   */
  async deleteServerlessInstance(request: $_model.DeleteServerlessInstanceRequest): Promise<$_model.DeleteServerlessInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServerlessInstanceWithOptions(request, runtime);
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
      action: "DeleteUserHdfsInfo",
      version: "2017-01-15",
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
      action: "DescribeBackupPolicy",
      version: "2017-01-15",
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

    if (!$dara.isNull(request.startTimeUTC)) {
      query["StartTimeUTC"] = request.startTimeUTC;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackups",
      version: "2017-01-15",
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
   * @param request - DescribeClusterAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAttributeResponse
   */
  async describeClusterAttributeWithOptions(request: $_model.DescribeClusterAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "DescribeClusterAttribute",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterAttributeResponse({}));
  }

  /**
   * @param request - DescribeClusterAttributeRequest
   * @returns DescribeClusterAttributeResponse
   */
  async describeClusterAttribute(request: $_model.DescribeClusterAttributeRequest): Promise<$_model.DescribeClusterAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterAttributeWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeClusterConnectAddrsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterConnectAddrsResponse
   */
  async describeClusterConnectAddrsWithOptions(request: $_model.DescribeClusterConnectAddrsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterConnectAddrsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "DescribeClusterConnectAddrs",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterConnectAddrsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterConnectAddrsResponse({}));
  }

  /**
   * @param request - DescribeClusterConnectAddrsRequest
   * @returns DescribeClusterConnectAddrsResponse
   */
  async describeClusterConnectAddrs(request: $_model.DescribeClusterConnectAddrsRequest): Promise<$_model.DescribeClusterConnectAddrsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterConnectAddrsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeClusterListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterListResponse
   */
  async describeClusterListWithOptions(request: $_model.DescribeClusterListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterListResponse> {
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

    if (!$dara.isNull(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterList",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterListResponse({}));
  }

  /**
   * @param request - DescribeClusterListRequest
   * @returns DescribeClusterListResponse
   */
  async describeClusterList(request: $_model.DescribeClusterListRequest): Promise<$_model.DescribeClusterListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeClusterModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterModelResponse
   */
  async describeClusterModelWithOptions(request: $_model.DescribeClusterModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "DescribeClusterModel",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterModelResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterModelResponse({}));
  }

  /**
   * @param request - DescribeClusterModelRequest
   * @returns DescribeClusterModelResponse
   */
  async describeClusterModel(request: $_model.DescribeClusterModelRequest): Promise<$_model.DescribeClusterModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterModelWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeClusterWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterWhiteListResponse
   */
  async describeClusterWhiteListWithOptions(request: $_model.DescribeClusterWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "DescribeClusterWhiteList",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterWhiteListResponse({}));
  }

  /**
   * @param request - DescribeClusterWhiteListRequest
   * @returns DescribeClusterWhiteListResponse
   */
  async describeClusterWhiteList(request: $_model.DescribeClusterWhiteListRequest): Promise<$_model.DescribeClusterWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterWhiteListWithOptions(request, runtime);
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
      action: "DescribeColdStorage",
      version: "2017-01-15",
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
   * @param request - DescribeMultiModDbAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMultiModDbAttributeResponse
   */
  async describeMultiModDbAttributeWithOptions(request: $_model.DescribeMultiModDbAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMultiModDbAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "DescribeMultiModDbAttribute",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMultiModDbAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMultiModDbAttributeResponse({}));
  }

  /**
   * @param request - DescribeMultiModDbAttributeRequest
   * @returns DescribeMultiModDbAttributeResponse
   */
  async describeMultiModDbAttribute(request: $_model.DescribeMultiModDbAttributeRequest): Promise<$_model.DescribeMultiModDbAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMultiModDbAttributeWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRdsVSwitchsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdsVSwitchsResponse
   */
  async describeRdsVSwitchsWithOptions(request: $_model.DescribeRdsVSwitchsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRdsVSwitchsResponse> {
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
      action: "DescribeRdsVSwitchs",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRdsVSwitchsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRdsVSwitchsResponse({}));
  }

  /**
   * @param request - DescribeRdsVSwitchsRequest
   * @returns DescribeRdsVSwitchsResponse
   */
  async describeRdsVSwitchs(request: $_model.DescribeRdsVSwitchsRequest): Promise<$_model.DescribeRdsVSwitchsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdsVSwitchsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeRegions",
      version: "2017-01-15",
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
   * @param request - DescribeServerlessInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServerlessInstanceResponse
   */
  async describeServerlessInstanceWithOptions(request: $_model.DescribeServerlessInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServerlessInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeServerlessInstance",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServerlessInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServerlessInstanceResponse({}));
  }

  /**
   * @param request - DescribeServerlessInstanceRequest
   * @returns DescribeServerlessInstanceResponse
   */
  async describeServerlessInstance(request: $_model.DescribeServerlessInstanceRequest): Promise<$_model.DescribeServerlessInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServerlessInstanceWithOptions(request, runtime);
  }

  /**
   * 查询订阅进度
   * 
   * @param request - DescribeSubscriptionInitializeProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubscriptionInitializeProgressResponse
   */
  async describeSubscriptionInitializeProgressWithOptions(request: $_model.DescribeSubscriptionInitializeProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubscriptionInitializeProgressResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.subscriptionId)) {
      query["SubscriptionId"] = request.subscriptionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubscriptionInitializeProgress",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubscriptionInitializeProgressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubscriptionInitializeProgressResponse({}));
  }

  /**
   * 查询订阅进度
   * 
   * @param request - DescribeSubscriptionInitializeProgressRequest
   * @returns DescribeSubscriptionInitializeProgressResponse
   */
  async describeSubscriptionInitializeProgress(request: $_model.DescribeSubscriptionInitializeProgressRequest): Promise<$_model.DescribeSubscriptionInitializeProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubscriptionInitializeProgressWithOptions(request, runtime);
  }

  /**
   * 查询订阅
   * 
   * @param request - DescribeSubscriptionPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubscriptionPerformanceResponse
   */
  async describeSubscriptionPerformanceWithOptions(request: $_model.DescribeSubscriptionPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubscriptionPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
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

    if (!$dara.isNull(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.subscriptionId)) {
      query["SubscriptionId"] = request.subscriptionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubscriptionPerformance",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubscriptionPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubscriptionPerformanceResponse({}));
  }

  /**
   * 查询订阅
   * 
   * @param request - DescribeSubscriptionPerformanceRequest
   * @returns DescribeSubscriptionPerformanceResponse
   */
  async describeSubscriptionPerformance(request: $_model.DescribeSubscriptionPerformanceRequest): Promise<$_model.DescribeSubscriptionPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubscriptionPerformanceWithOptions(request, runtime);
  }

  /**
   * 查询订阅权限
   * 
   * @param request - DescribeSubscriptionPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubscriptionPermissionResponse
   */
  async describeSubscriptionPermissionWithOptions(request: $_model.DescribeSubscriptionPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubscriptionPermissionResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeSubscriptionPermission",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubscriptionPermissionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubscriptionPermissionResponse({}));
  }

  /**
   * 查询订阅权限
   * 
   * @param request - DescribeSubscriptionPermissionRequest
   * @returns DescribeSubscriptionPermissionResponse
   */
  async describeSubscriptionPermission(request: $_model.DescribeSubscriptionPermissionRequest): Promise<$_model.DescribeSubscriptionPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubscriptionPermissionWithOptions(request, runtime);
  }

  /**
   * 查询订阅列表
   * 
   * @param request - DescribeSubscriptionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubscriptionsResponse
   */
  async describeSubscriptionsWithOptions(request: $_model.DescribeSubscriptionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubscriptionsResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.subscriptionId)) {
      query["SubscriptionId"] = request.subscriptionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubscriptions",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubscriptionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubscriptionsResponse({}));
  }

  /**
   * 查询订阅列表
   * 
   * @param request - DescribeSubscriptionsRequest
   * @returns DescribeSubscriptionsResponse
   */
  async describeSubscriptions(request: $_model.DescribeSubscriptionsRequest): Promise<$_model.DescribeSubscriptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubscriptionsWithOptions(request, runtime);
  }

  /**
   * @param request - EnableServerlessPublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableServerlessPublicConnectionResponse
   */
  async enableServerlessPublicConnectionWithOptions(request: $_model.EnableServerlessPublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableServerlessPublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "EnableServerlessPublicConnection",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableServerlessPublicConnectionResponse>(await this.callApi(params, req, runtime), new $_model.EnableServerlessPublicConnectionResponse({}));
  }

  /**
   * @param request - EnableServerlessPublicConnectionRequest
   * @returns EnableServerlessPublicConnectionResponse
   */
  async enableServerlessPublicConnection(request: $_model.EnableServerlessPublicConnectionRequest): Promise<$_model.EnableServerlessPublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableServerlessPublicConnectionWithOptions(request, runtime);
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
      action: "GetMultimodeCmsUrl",
      version: "2017-01-15",
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
   * @param request - ListClusterServiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterServiceConfigResponse
   */
  async listClusterServiceConfigWithOptions(request: $_model.ListClusterServiceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterServiceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "ListClusterServiceConfig",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterServiceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterServiceConfigResponse({}));
  }

  /**
   * @param request - ListClusterServiceConfigRequest
   * @returns ListClusterServiceConfigResponse
   */
  async listClusterServiceConfig(request: $_model.ListClusterServiceConfigRequest): Promise<$_model.ListClusterServiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterServiceConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ListClusterServiceConfigHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterServiceConfigHistoryResponse
   */
  async listClusterServiceConfigHistoryWithOptions(request: $_model.ListClusterServiceConfigHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterServiceConfigHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterServiceConfigHistory",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterServiceConfigHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterServiceConfigHistoryResponse({}));
  }

  /**
   * @param request - ListClusterServiceConfigHistoryRequest
   * @returns ListClusterServiceConfigHistoryResponse
   */
  async listClusterServiceConfigHistory(request: $_model.ListClusterServiceConfigHistoryRequest): Promise<$_model.ListClusterServiceConfigHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterServiceConfigHistoryWithOptions(request, runtime);
  }

  /**
   * 查询hbase实例列表
   * 
   * @param request - ListHbaseInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHbaseInstancesResponse
   */
  async listHbaseInstancesWithOptions(request: $_model.ListHbaseInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHbaseInstancesResponse> {
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
      action: "ListHbaseInstances",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHbaseInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListHbaseInstancesResponse({}));
  }

  /**
   * 查询hbase实例列表
   * 
   * @param request - ListHbaseInstancesRequest
   * @returns ListHbaseInstancesResponse
   */
  async listHbaseInstances(request: $_model.ListHbaseInstancesRequest): Promise<$_model.ListHbaseInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHbaseInstancesWithOptions(request, runtime);
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
      version: "2017-01-15",
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
   * @param request - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(request: $_model.ModifyBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      action: "ModifyBackupPolicy",
      version: "2017-01-15",
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
   * @param request - ModifyClusterNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterNameResponse
   */
  async modifyClusterNameWithOptions(request: $_model.ModifyClusterNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
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
      action: "ModifyClusterName",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterNameResponse({}));
  }

  /**
   * @param request - ModifyClusterNameRequest
   * @returns ModifyClusterNameResponse
   */
  async modifyClusterName(request: $_model.ModifyClusterNameRequest): Promise<$_model.ModifyClusterNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyClusterNameWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyClusterNetTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterNetTypeResponse
   */
  async modifyClusterNetTypeWithOptions(request: $_model.ModifyClusterNetTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterNetTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.netType)) {
      query["NetType"] = request.netType;
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
      action: "ModifyClusterNetType",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterNetTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterNetTypeResponse({}));
  }

  /**
   * @param request - ModifyClusterNetTypeRequest
   * @returns ModifyClusterNetTypeResponse
   */
  async modifyClusterNetType(request: $_model.ModifyClusterNetTypeRequest): Promise<$_model.ModifyClusterNetTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyClusterNetTypeWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyClusterSecurityIpListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterSecurityIpListResponse
   */
  async modifyClusterSecurityIpListWithOptions(request: $_model.ModifyClusterSecurityIpListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterSecurityIpListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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

    if (!$dara.isNull(request.securityIpList)) {
      query["SecurityIpList"] = request.securityIpList;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterSecurityIpList",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterSecurityIpListResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterSecurityIpListResponse({}));
  }

  /**
   * @param request - ModifyClusterSecurityIpListRequest
   * @returns ModifyClusterSecurityIpListResponse
   */
  async modifyClusterSecurityIpList(request: $_model.ModifyClusterSecurityIpListRequest): Promise<$_model.ModifyClusterSecurityIpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyClusterSecurityIpListWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyClusterServiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterServiceConfigResponse
   */
  async modifyClusterServiceConfigWithOptions(request: $_model.ModifyClusterServiceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterServiceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.restart)) {
      query["Restart"] = request.restart;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterServiceConfig",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterServiceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterServiceConfigResponse({}));
  }

  /**
   * @param request - ModifyClusterServiceConfigRequest
   * @returns ModifyClusterServiceConfigResponse
   */
  async modifyClusterServiceConfig(request: $_model.ModifyClusterServiceConfigRequest): Promise<$_model.ModifyClusterServiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyClusterServiceConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyHasRootPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHasRootPasswordResponse
   */
  async modifyHasRootPasswordWithOptions(request: $_model.ModifyHasRootPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHasRootPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.hasPassword)) {
      query["HasPassword"] = request.hasPassword;
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
      action: "ModifyHasRootPassword",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHasRootPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHasRootPasswordResponse({}));
  }

  /**
   * @param request - ModifyHasRootPasswordRequest
   * @returns ModifyHasRootPasswordResponse
   */
  async modifyHasRootPassword(request: $_model.ModifyHasRootPasswordRequest): Promise<$_model.ModifyHasRootPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHasRootPasswordWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyRestartClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRestartClusterResponse
   */
  async modifyRestartClusterWithOptions(request: $_model.ModifyRestartClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRestartClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.components)) {
      query["Components"] = request.components;
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
      action: "ModifyRestartCluster",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRestartClusterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRestartClusterResponse({}));
  }

  /**
   * @param request - ModifyRestartClusterRequest
   * @returns ModifyRestartClusterResponse
   */
  async modifyRestartCluster(request: $_model.ModifyRestartClusterRequest): Promise<$_model.ModifyRestartClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRestartClusterWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyRollbackHasForHbaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRollbackHasForHbaseResponse
   */
  async modifyRollbackHasForHbaseWithOptions(request: $_model.ModifyRollbackHasForHbaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRollbackHasForHbaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "ModifyRollbackHasForHbase",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRollbackHasForHbaseResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRollbackHasForHbaseResponse({}));
  }

  /**
   * @param request - ModifyRollbackHasForHbaseRequest
   * @returns ModifyRollbackHasForHbaseResponse
   */
  async modifyRollbackHasForHbase(request: $_model.ModifyRollbackHasForHbaseRequest): Promise<$_model.ModifyRollbackHasForHbaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRollbackHasForHbaseWithOptions(request, runtime);
  }

  /**
   * 更新订阅描述
   * 
   * @param request - ModifySubscriptionDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySubscriptionDescriptionResponse
   */
  async modifySubscriptionDescriptionWithOptions(request: $_model.ModifySubscriptionDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySubscriptionDescriptionResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.subscriptionDescription)) {
      query["SubscriptionDescription"] = request.subscriptionDescription;
    }

    if (!$dara.isNull(request.subscriptionId)) {
      query["SubscriptionId"] = request.subscriptionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySubscriptionDescription",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySubscriptionDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifySubscriptionDescriptionResponse({}));
  }

  /**
   * 更新订阅描述
   * 
   * @param request - ModifySubscriptionDescriptionRequest
   * @returns ModifySubscriptionDescriptionResponse
   */
  async modifySubscriptionDescription(request: $_model.ModifySubscriptionDescriptionRequest): Promise<$_model.ModifySubscriptionDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySubscriptionDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新订阅
   * 
   * @param request - ModifySubscriptionMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySubscriptionMappingResponse
   */
  async modifySubscriptionMappingWithOptions(request: $_model.ModifySubscriptionMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySubscriptionMappingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mapping)) {
      query["Mapping"] = request.mapping;
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

    if (!$dara.isNull(request.subscriptionId)) {
      query["SubscriptionId"] = request.subscriptionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySubscriptionMapping",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySubscriptionMappingResponse>(await this.callApi(params, req, runtime), new $_model.ModifySubscriptionMappingResponse({}));
  }

  /**
   * 更新订阅
   * 
   * @param request - ModifySubscriptionMappingRequest
   * @returns ModifySubscriptionMappingResponse
   */
  async modifySubscriptionMapping(request: $_model.ModifySubscriptionMappingRequest): Promise<$_model.ModifySubscriptionMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySubscriptionMappingWithOptions(request, runtime);
  }

  /**
   * 更新订阅权限
   * 
   * @param request - ModifySubscriptionPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySubscriptionPermissionResponse
   */
  async modifySubscriptionPermissionWithOptions(request: $_model.ModifySubscriptionPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySubscriptionPermissionResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySubscriptionPermission",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySubscriptionPermissionResponse>(await this.callApi(params, req, runtime), new $_model.ModifySubscriptionPermissionResponse({}));
  }

  /**
   * 更新订阅权限
   * 
   * @param request - ModifySubscriptionPermissionRequest
   * @returns ModifySubscriptionPermissionResponse
   */
  async modifySubscriptionPermission(request: $_model.ModifySubscriptionPermissionRequest): Promise<$_model.ModifySubscriptionPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySubscriptionPermissionWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyUIProxyAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUIProxyAccountPasswordResponse
   */
  async modifyUIProxyAccountPasswordWithOptions(request: $_model.ModifyUIProxyAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUIProxyAccountPasswordResponse> {
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
      action: "ModifyUIProxyAccountPassword",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUIProxyAccountPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUIProxyAccountPasswordResponse({}));
  }

  /**
   * @param request - ModifyUIProxyAccountPasswordRequest
   * @returns ModifyUIProxyAccountPasswordResponse
   */
  async modifyUIProxyAccountPassword(request: $_model.ModifyUIProxyAccountPasswordRequest): Promise<$_model.ModifyUIProxyAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUIProxyAccountPasswordWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyUpgradeToHasForHbaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUpgradeToHasForHbaseResponse
   */
  async modifyUpgradeToHasForHbaseWithOptions(request: $_model.ModifyUpgradeToHasForHbaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUpgradeToHasForHbaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.hasPassword)) {
      query["HasPassword"] = request.hasPassword;
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
      action: "ModifyUpgradeToHasForHbase",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUpgradeToHasForHbaseResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUpgradeToHasForHbaseResponse({}));
  }

  /**
   * @param request - ModifyUpgradeToHasForHbaseRequest
   * @returns ModifyUpgradeToHasForHbaseResponse
   */
  async modifyUpgradeToHasForHbase(request: $_model.ModifyUpgradeToHasForHbaseRequest): Promise<$_model.ModifyUpgradeToHasForHbaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUpgradeToHasForHbaseWithOptions(request, runtime);
  }

  /**
   * @param request - MultimodAddComponentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MultimodAddComponentsResponse
   */
  async multimodAddComponentsWithOptions(request: $_model.MultimodAddComponentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MultimodAddComponentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.components)) {
      query["Components"] = request.components;
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
      action: "MultimodAddComponents",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MultimodAddComponentsResponse>(await this.callApi(params, req, runtime), new $_model.MultimodAddComponentsResponse({}));
  }

  /**
   * @param request - MultimodAddComponentsRequest
   * @returns MultimodAddComponentsResponse
   */
  async multimodAddComponents(request: $_model.MultimodAddComponentsRequest): Promise<$_model.MultimodAddComponentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.multimodAddComponentsWithOptions(request, runtime);
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
      action: "OpenBackup",
      version: "2017-01-15",
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
   * @param request - QueryHBaseHaDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHBaseHaDBResponse
   */
  async queryHBaseHaDBWithOptions(request: $_model.QueryHBaseHaDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryHBaseHaDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "QueryHBaseHaDB",
      version: "2017-01-15",
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
   * @param request - QuerySparkRelateHBaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySparkRelateHBaseResponse
   */
  async querySparkRelateHBaseWithOptions(request: $_model.QuerySparkRelateHBaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySparkRelateHBaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "QuerySparkRelateHBase",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySparkRelateHBaseResponse>(await this.callApi(params, req, runtime), new $_model.QuerySparkRelateHBaseResponse({}));
  }

  /**
   * @param request - QuerySparkRelateHBaseRequest
   * @returns QuerySparkRelateHBaseResponse
   */
  async querySparkRelateHBase(request: $_model.QuerySparkRelateHBaseRequest): Promise<$_model.QuerySparkRelateHBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySparkRelateHBaseWithOptions(request, runtime);
  }

  /**
   * @param request - QueryXpackRelatedDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryXpackRelatedDBResponse
   */
  async queryXpackRelatedDBWithOptions(request: $_model.QueryXpackRelatedDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryXpackRelatedDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.relateDbType)) {
      query["RelateDbType"] = request.relateDbType;
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
      action: "QueryXpackRelatedDB",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryXpackRelatedDBResponse>(await this.callApi(params, req, runtime), new $_model.QueryXpackRelatedDBResponse({}));
  }

  /**
   * @param request - QueryXpackRelatedDBRequest
   * @returns QueryXpackRelatedDBResponse
   */
  async queryXpackRelatedDB(request: $_model.QueryXpackRelatedDBRequest): Promise<$_model.QueryXpackRelatedDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryXpackRelatedDBWithOptions(request, runtime);
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
      action: "RelateDbForHBaseHa",
      version: "2017-01-15",
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
      version: "2017-01-15",
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
   * 是否订阅
   * 
   * @param request - ReleaseSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseSubscriptionResponse
   */
  async releaseSubscriptionWithOptions(request: $_model.ReleaseSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseSubscriptionResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.subscriptionId)) {
      query["SubscriptionId"] = request.subscriptionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseSubscription",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseSubscriptionResponse({}));
  }

  /**
   * 是否订阅
   * 
   * @param request - ReleaseSubscriptionRequest
   * @returns ReleaseSubscriptionResponse
   */
  async releaseSubscription(request: $_model.ReleaseSubscriptionRequest): Promise<$_model.ReleaseSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseSubscriptionWithOptions(request, runtime);
  }

  /**
   * @param request - RenewClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewClusterResponse
   */
  async renewClusterWithOptions(request: $_model.RenewClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      action: "RenewCluster",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewClusterResponse>(await this.callApi(params, req, runtime), new $_model.RenewClusterResponse({}));
  }

  /**
   * @param request - RenewClusterRequest
   * @returns RenewClusterResponse
   */
  async renewCluster(request: $_model.RenewClusterRequest): Promise<$_model.RenewClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewClusterWithOptions(request, runtime);
  }

  /**
   * @param request - ResizeClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeClusterResponse
   */
  async resizeClusterWithOptions(request: $_model.ResizeClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResizeClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cloudType)) {
      query["CloudType"] = request.cloudType;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.coldStorageSize)) {
      query["ColdStorageSize"] = request.coldStorageSize;
    }

    if (!$dara.isNull(request.coreDiskQuantity)) {
      query["CoreDiskQuantity"] = request.coreDiskQuantity;
    }

    if (!$dara.isNull(request.coreDiskSize)) {
      query["CoreDiskSize"] = request.coreDiskSize;
    }

    if (!$dara.isNull(request.coreDiskType)) {
      query["CoreDiskType"] = request.coreDiskType;
    }

    if (!$dara.isNull(request.coreInstanceQuantity)) {
      query["CoreInstanceQuantity"] = request.coreInstanceQuantity;
    }

    if (!$dara.isNull(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.isColdStorage)) {
      query["IsColdStorage"] = request.isColdStorage;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.upgradeType)) {
      query["UpgradeType"] = request.upgradeType;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResizeCluster",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResizeClusterResponse>(await this.callApi(params, req, runtime), new $_model.ResizeClusterResponse({}));
  }

  /**
   * @param request - ResizeClusterRequest
   * @returns ResizeClusterResponse
   */
  async resizeCluster(request: $_model.ResizeClusterRequest): Promise<$_model.ResizeClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resizeClusterWithOptions(request, runtime);
  }

  /**
   * @param request - SparkRelateHBaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SparkRelateHBaseResponse
   */
  async sparkRelateHBaseWithOptions(request: $_model.SparkRelateHBaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SparkRelateHBaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.HBaseClusterIds)) {
      query["HBaseClusterIds"] = request.HBaseClusterIds;
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
      action: "SparkRelateHBase",
      version: "2017-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SparkRelateHBaseResponse>(await this.callApi(params, req, runtime), new $_model.SparkRelateHBaseResponse({}));
  }

  /**
   * @param request - SparkRelateHBaseRequest
   * @returns SparkRelateHBaseResponse
   */
  async sparkRelateHBase(request: $_model.SparkRelateHBaseRequest): Promise<$_model.SparkRelateHBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sparkRelateHBaseWithOptions(request, runtime);
  }

  /**
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
      version: "2017-01-15",
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
      version: "2017-01-15",
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
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - UpgradeMinorVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeMinorVersionResponse
   */
  async upgradeMinorVersionWithOptions(request: $_model.UpgradeMinorVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeMinorVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.components)) {
      query["Components"] = request.components;
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

    if (!$dara.isNull(request.upgradeVersion)) {
      query["UpgradeVersion"] = request.upgradeVersion;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeMinorVersion",
      version: "2017-01-15",
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.relateDbType)) {
      query["RelateDbType"] = request.relateDbType;
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
      action: "XpackRelateDB",
      version: "2017-01-15",
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
