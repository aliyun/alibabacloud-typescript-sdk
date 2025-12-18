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
      'ap-northeast-2-pop': "clickhouse.aliyuncs.com",
      'ap-southeast-1': "clickhouse.aliyuncs.com",
      'cn-beijing': "clickhouse.aliyuncs.com",
      'cn-beijing-finance-1': "clickhouse.aliyuncs.com",
      'cn-beijing-finance-pop': "clickhouse.aliyuncs.com",
      'cn-beijing-gov-1': "clickhouse.aliyuncs.com",
      'cn-beijing-nu16-b01': "clickhouse.aliyuncs.com",
      'cn-edge-1': "clickhouse.aliyuncs.com",
      'cn-fujian': "clickhouse.aliyuncs.com",
      'cn-haidian-cm12-c01': "clickhouse.aliyuncs.com",
      'cn-hangzhou': "clickhouse.aliyuncs.com",
      'cn-hangzhou-bj-b01': "clickhouse.aliyuncs.com",
      'cn-hangzhou-finance': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "clickhouse.aliyuncs.com",
      'cn-hangzhou-test-306': "clickhouse.aliyuncs.com",
      'cn-hongkong': "clickhouse.aliyuncs.com",
      'cn-hongkong-finance-pop': "clickhouse.aliyuncs.com",
      'cn-north-2-gov-1': "clickhouse.aliyuncs.com",
      'cn-qingdao': "clickhouse.aliyuncs.com",
      'cn-qingdao-nebula': "clickhouse.aliyuncs.com",
      'cn-shanghai': "clickhouse.aliyuncs.com",
      'cn-shanghai-et15-b01': "clickhouse.aliyuncs.com",
      'cn-shanghai-et2-b01': "clickhouse.aliyuncs.com",
      'cn-shanghai-finance-1': "clickhouse.aliyuncs.com",
      'cn-shanghai-inner': "clickhouse.aliyuncs.com",
      'cn-shanghai-internal-test-1': "clickhouse.aliyuncs.com",
      'cn-shenzhen': "clickhouse.aliyuncs.com",
      'cn-shenzhen-finance-1': "clickhouse.aliyuncs.com",
      'cn-shenzhen-inner': "clickhouse.aliyuncs.com",
      'cn-shenzhen-st4-d01': "clickhouse.aliyuncs.com",
      'cn-shenzhen-su18-b01': "clickhouse.aliyuncs.com",
      'cn-wuhan': "clickhouse.aliyuncs.com",
      'cn-yushanfang': "clickhouse.aliyuncs.com",
      'cn-zhangbei-na61-b01': "clickhouse.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "clickhouse.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "clickhouse.aliyuncs.com",
      'eu-west-1-oxs': "clickhouse.aliyuncs.com",
      'me-east-1': "clickhouse.aliyuncs.com",
      'rus-west-1-pop': "clickhouse.aliyuncs.com",
      'us-east-1': "clickhouse.aliyuncs.com",
      'us-west-1': "clickhouse.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("clickhouse", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a public endpoint for an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Creates a public endpoint for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - AllocateClusterPublicConnectionRequest
   * @returns AllocateClusterPublicConnectionResponse
   */
  async allocateClusterPublicConnection(request: $_model.AllocateClusterPublicConnectionRequest): Promise<$_model.AllocateClusterPublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateClusterPublicConnectionWithOptions(request, runtime);
  }

  /**
   * 取消运维事件任务
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
      version: "2019-11-11",
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
   * 取消运维事件任务
   * 
   * @param request - CancelActiveOperationTasksRequest
   * @returns CancelActiveOperationTasksResponse
   */
  async cancelActiveOperationTasks(request: $_model.CancelActiveOperationTasksRequest): Promise<$_model.CancelActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * 取消预约Zookeeper切主
   * 
   * @param request - CancelAppointmentElectZookeeperLeaderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAppointmentElectZookeeperLeaderResponse
   */
  async cancelAppointmentElectZookeeperLeaderWithOptions(request: $_model.CancelAppointmentElectZookeeperLeaderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAppointmentElectZookeeperLeaderResponse> {
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
      action: "CancelAppointmentElectZookeeperLeader",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAppointmentElectZookeeperLeaderResponse>(await this.callApi(params, req, runtime), new $_model.CancelAppointmentElectZookeeperLeaderResponse({}));
  }

  /**
   * 取消预约Zookeeper切主
   * 
   * @param request - CancelAppointmentElectZookeeperLeaderRequest
   * @returns CancelAppointmentElectZookeeperLeaderResponse
   */
  async cancelAppointmentElectZookeeperLeader(request: $_model.CancelAppointmentElectZookeeperLeaderRequest): Promise<$_model.CancelAppointmentElectZookeeperLeaderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAppointmentElectZookeeperLeaderWithOptions(request, runtime);
  }

  /**
   * 取消预约重启节点列表
   * 
   * @param request - CancelAppointmentRestartInstanceNodeListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAppointmentRestartInstanceNodeListResponse
   */
  async cancelAppointmentRestartInstanceNodeListWithOptions(request: $_model.CancelAppointmentRestartInstanceNodeListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAppointmentRestartInstanceNodeListResponse> {
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
      action: "CancelAppointmentRestartInstanceNodeList",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAppointmentRestartInstanceNodeListResponse>(await this.callApi(params, req, runtime), new $_model.CancelAppointmentRestartInstanceNodeListResponse({}));
  }

  /**
   * 取消预约重启节点列表
   * 
   * @param request - CancelAppointmentRestartInstanceNodeListRequest
   * @returns CancelAppointmentRestartInstanceNodeListResponse
   */
  async cancelAppointmentRestartInstanceNodeList(request: $_model.CancelAppointmentRestartInstanceNodeListRequest): Promise<$_model.CancelAppointmentRestartInstanceNodeListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAppointmentRestartInstanceNodeListWithOptions(request, runtime);
  }

  /**
   * 取消预约重启
   * 
   * @param request - CancelRestartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRestartInstanceResponse
   */
  async cancelRestartInstanceWithOptions(request: $_model.CancelRestartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelRestartInstanceResponse> {
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

    if (!$dara.isNull(request.restartTime)) {
      query["RestartTime"] = request.restartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRestartInstance",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelRestartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CancelRestartInstanceResponse({}));
  }

  /**
   * 取消预约重启
   * 
   * @param request - CancelRestartInstanceRequest
   * @returns CancelRestartInstanceResponse
   */
  async cancelRestartInstance(request: $_model.CancelRestartInstanceRequest): Promise<$_model.CancelRestartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelRestartInstanceWithOptions(request, runtime);
  }

  /**
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2019-11-11",
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
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Checks the connectivity between an ApsaraDB for ClickHouse cluster and an ApsaraDB RDS for MySQL instance.
   * 
   * @param request - CheckClickhouseToRDSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckClickhouseToRDSResponse
   */
  async checkClickhouseToRDSWithOptions(request: $_model.CheckClickhouseToRDSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckClickhouseToRDSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ckPassword)) {
      query["CkPassword"] = request.ckPassword;
    }

    if (!$dara.isNull(request.ckUserName)) {
      query["CkUserName"] = request.ckUserName;
    }

    if (!$dara.isNull(request.clickhousePort)) {
      query["ClickhousePort"] = request.clickhousePort;
    }

    if (!$dara.isNull(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.rdsId)) {
      query["RdsId"] = request.rdsId;
    }

    if (!$dara.isNull(request.rdsPassword)) {
      query["RdsPassword"] = request.rdsPassword;
    }

    if (!$dara.isNull(request.rdsPort)) {
      query["RdsPort"] = request.rdsPort;
    }

    if (!$dara.isNull(request.rdsUserName)) {
      query["RdsUserName"] = request.rdsUserName;
    }

    if (!$dara.isNull(request.rdsVpcId)) {
      query["RdsVpcId"] = request.rdsVpcId;
    }

    if (!$dara.isNull(request.rdsVpcUrl)) {
      query["RdsVpcUrl"] = request.rdsVpcUrl;
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
      action: "CheckClickhouseToRDS",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckClickhouseToRDSResponse>(await this.callApi(params, req, runtime), new $_model.CheckClickhouseToRDSResponse({}));
  }

  /**
   * Checks the connectivity between an ApsaraDB for ClickHouse cluster and an ApsaraDB RDS for MySQL instance.
   * 
   * @param request - CheckClickhouseToRDSRequest
   * @returns CheckClickhouseToRDSResponse
   */
  async checkClickhouseToRDS(request: $_model.CheckClickhouseToRDSRequest): Promise<$_model.CheckClickhouseToRDSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkClickhouseToRDSWithOptions(request, runtime);
  }

  /**
   * Queries whether an ApsaraDB for ClickHouse cluster needs to be restarted after you change the values of the configuration parameters in XML mode.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - CheckModifyConfigNeedRestartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckModifyConfigNeedRestartResponse
   */
  async checkModifyConfigNeedRestartWithOptions(request: $_model.CheckModifyConfigNeedRestartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckModifyConfigNeedRestartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckModifyConfigNeedRestart",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckModifyConfigNeedRestartResponse>(await this.callApi(params, req, runtime), new $_model.CheckModifyConfigNeedRestartResponse({}));
  }

  /**
   * Queries whether an ApsaraDB for ClickHouse cluster needs to be restarted after you change the values of the configuration parameters in XML mode.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - CheckModifyConfigNeedRestartRequest
   * @returns CheckModifyConfigNeedRestartResponse
   */
  async checkModifyConfigNeedRestart(request: $_model.CheckModifyConfigNeedRestartRequest): Promise<$_model.CheckModifyConfigNeedRestartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkModifyConfigNeedRestartWithOptions(request, runtime);
  }

  /**
   * Checks whether the monitoring and alerting feature that is provided by Application Real-Time Monitoring Service (ARMS) is enabled for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CheckMonitorAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckMonitorAlertResponse
   */
  async checkMonitorAlertWithOptions(request: $_model.CheckMonitorAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckMonitorAlertResponse> {
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
      action: "CheckMonitorAlert",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckMonitorAlertResponse>(await this.callApi(params, req, runtime), new $_model.CheckMonitorAlertResponse({}));
  }

  /**
   * Checks whether the monitoring and alerting feature that is provided by Application Real-Time Monitoring Service (ARMS) is enabled for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CheckMonitorAlertRequest
   * @returns CheckMonitorAlertResponse
   */
  async checkMonitorAlert(request: $_model.CheckMonitorAlertRequest): Promise<$_model.CheckMonitorAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkMonitorAlertWithOptions(request, runtime);
  }

  /**
   * Performs migration and scale-out detection on an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CheckScaleOutBalancedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckScaleOutBalancedResponse
   */
  async checkScaleOutBalancedWithOptions(request: $_model.CheckScaleOutBalancedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckScaleOutBalancedResponse> {
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
      action: "CheckScaleOutBalanced",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckScaleOutBalancedResponse>(await this.callApi(params, req, runtime), new $_model.CheckScaleOutBalancedResponse({}));
  }

  /**
   * Performs migration and scale-out detection on an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CheckScaleOutBalancedRequest
   * @returns CheckScaleOutBalancedResponse
   */
  async checkScaleOutBalanced(request: $_model.CheckScaleOutBalancedRequest): Promise<$_model.CheckScaleOutBalancedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkScaleOutBalancedWithOptions(request, runtime);
  }

  /**
   * Queries the service-linked role of ApsaraDB for ClickHouse.
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
      version: "2019-11-11",
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
   * Queries the service-linked role of ApsaraDB for ClickHouse.
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRole(request: $_model.CheckServiceLinkedRoleRequest): Promise<$_model.CheckServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Creates a database account for an ApsaraDB for ClickHouse cluster.
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
      action: "CreateAccount",
      version: "2019-11-11",
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
   * Creates a database account for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Creates an account and grants permissions to the account.
   * 
   * @param request - CreateAccountAndAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountAndAuthorityResponse
   */
  async createAccountAndAuthorityWithOptions(request: $_model.CreateAccountAndAuthorityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccountAndAuthorityResponse> {
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

    if (!$dara.isNull(request.allowDatabases)) {
      query["AllowDatabases"] = request.allowDatabases;
    }

    if (!$dara.isNull(request.allowDictionaries)) {
      query["AllowDictionaries"] = request.allowDictionaries;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ddlAuthority)) {
      query["DdlAuthority"] = request.ddlAuthority;
    }

    if (!$dara.isNull(request.dmlAuthority)) {
      query["DmlAuthority"] = request.dmlAuthority;
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

    if (!$dara.isNull(request.totalDatabases)) {
      query["TotalDatabases"] = request.totalDatabases;
    }

    if (!$dara.isNull(request.totalDictionaries)) {
      query["TotalDictionaries"] = request.totalDictionaries;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccountAndAuthority",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccountAndAuthorityResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccountAndAuthorityResponse({}));
  }

  /**
   * Creates an account and grants permissions to the account.
   * 
   * @param request - CreateAccountAndAuthorityRequest
   * @returns CreateAccountAndAuthorityResponse
   */
  async createAccountAndAuthority(request: $_model.CreateAccountAndAuthorityRequest): Promise<$_model.CreateAccountAndAuthorityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountAndAuthorityWithOptions(request, runtime);
  }

  /**
   * Creates a backup policy.
   * 
   * @remarks
   * >  This operation is available only for the ApsaraDB for ClickHouse clusters of versions 20.3, 20.8, and 21.8.
   * 
   * @param request - CreateBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupPolicyResponse
   */
  async createBackupPolicyWithOptions(request: $_model.CreateBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
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

    if (!$dara.isNull(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackupPolicy",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateBackupPolicyResponse({}));
  }

  /**
   * Creates a backup policy.
   * 
   * @remarks
   * >  This operation is available only for the ApsaraDB for ClickHouse clusters of versions 20.3, 20.8, and 21.8.
   * 
   * @param request - CreateBackupPolicyRequest
   * @returns CreateBackupPolicyResponse
   */
  async createBackupPolicy(request: $_model.CreateBackupPolicyRequest): Promise<$_model.CreateBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Creates an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the billing methods and [pricing](https://help.aliyun.com/document_detail/167450.html) of ApsaraDB for ClickHouse.
   * 
   * @param request - CreateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceResponse
   */
  async createDBInstanceWithOptions(request: $_model.CreateDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.backupSetID)) {
      query["BackupSetID"] = request.backupSetID;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!$dara.isNull(request.dbNodeStorageType)) {
      query["DbNodeStorageType"] = request.dbNodeStorageType;
    }

    if (!$dara.isNull(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!$dara.isNull(request.encryptionType)) {
      query["EncryptionType"] = request.encryptionType;
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

    if (!$dara.isNull(request.sourceDBClusterId)) {
      query["SourceDBClusterId"] = request.sourceDBClusterId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!$dara.isNull(request.vSwitchBak)) {
      query["VSwitchBak"] = request.vSwitchBak;
    }

    if (!$dara.isNull(request.vSwitchBak2)) {
      query["VSwitchBak2"] = request.vSwitchBak2;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.zondIdBak2)) {
      query["ZondIdBak2"] = request.zondIdBak2;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.zoneIdBak)) {
      query["ZoneIdBak"] = request.zoneIdBak;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBInstance",
      version: "2019-11-11",
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
   * Creates an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the billing methods and [pricing](https://help.aliyun.com/document_detail/167450.html) of ApsaraDB for ClickHouse.
   * 
   * @param request - CreateDBInstanceRequest
   * @returns CreateDBInstanceResponse
   */
  async createDBInstance(request: $_model.CreateDBInstanceRequest): Promise<$_model.CreateDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a monitoring data report for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CreateMonitorDataReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorDataReportResponse
   */
  async createMonitorDataReportWithOptions(request: $_model.CreateMonitorDataReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorDataReportResponse> {
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
      action: "CreateMonitorDataReport",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorDataReportResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorDataReportResponse({}));
  }

  /**
   * Creates a monitoring data report for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CreateMonitorDataReportRequest
   * @returns CreateMonitorDataReportResponse
   */
  async createMonitorDataReport(request: $_model.CreateMonitorDataReportRequest): Promise<$_model.CreateMonitorDataReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMonitorDataReportWithOptions(request, runtime);
  }

  /**
   * Creates a storage task for cold data.
   * 
   * @remarks
   * Only an ApsaraDB for ClickHouse cluster of V20.8 or later supports tiered storage of hot data and cold data. If your data is in an ApsaraDB for ClickHouse cluster of a version earlier than V20.8 and you want to use tiered storage of hot data and cold data to store the data, you can migrate the data to an ApsaraDB for ClickHouse cluster of V20.8 or later and use tiered storage of hot data and cold data. For more information about how to migrate data between ApsaraDB for ClickHouse clusters, see [Migrate data between ApsaraDB for ClickHouse clusters](https://help.aliyun.com/document_detail/276926.html).
   * 
   * @param request - CreateOSSStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOSSStorageResponse
   */
  async createOSSStorageWithOptions(request: $_model.CreateOSSStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOSSStorageResponse> {
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
      action: "CreateOSSStorage",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOSSStorageResponse>(await this.callApi(params, req, runtime), new $_model.CreateOSSStorageResponse({}));
  }

  /**
   * Creates a storage task for cold data.
   * 
   * @remarks
   * Only an ApsaraDB for ClickHouse cluster of V20.8 or later supports tiered storage of hot data and cold data. If your data is in an ApsaraDB for ClickHouse cluster of a version earlier than V20.8 and you want to use tiered storage of hot data and cold data to store the data, you can migrate the data to an ApsaraDB for ClickHouse cluster of V20.8 or later and use tiered storage of hot data and cold data. For more information about how to migrate data between ApsaraDB for ClickHouse clusters, see [Migrate data between ApsaraDB for ClickHouse clusters](https://help.aliyun.com/document_detail/276926.html).
   * 
   * @param request - CreateOSSStorageRequest
   * @returns CreateOSSStorageResponse
   */
  async createOSSStorage(request: $_model.CreateOSSStorageRequest): Promise<$_model.CreateOSSStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOSSStorageWithOptions(request, runtime);
  }

  /**
   * Enables the MySQL port for an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  For an ApsaraDB for ClickHouse cluster of V20.8 or later that was created before December 1, 2021, you must manually enable the MySQL port. For an ApsaraDB for ClickHouse cluster of V20.8 or later that was created after December 1, 2021, the MySQL port is automatically enabled.
   * 
   * @param request - CreatePortsForClickHouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePortsForClickHouseResponse
   */
  async createPortsForClickHouseWithOptions(request: $_model.CreatePortsForClickHouseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePortsForClickHouseResponse> {
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

    if (!$dara.isNull(request.portType)) {
      query["PortType"] = request.portType;
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
      action: "CreatePortsForClickHouse",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePortsForClickHouseResponse>(await this.callApi(params, req, runtime), new $_model.CreatePortsForClickHouseResponse({}));
  }

  /**
   * Enables the MySQL port for an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  For an ApsaraDB for ClickHouse cluster of V20.8 or later that was created before December 1, 2021, you must manually enable the MySQL port. For an ApsaraDB for ClickHouse cluster of V20.8 or later that was created after December 1, 2021, the MySQL port is automatically enabled.
   * 
   * @param request - CreatePortsForClickHouseRequest
   * @returns CreatePortsForClickHouseResponse
   */
  async createPortsForClickHouse(request: $_model.CreatePortsForClickHouseRequest): Promise<$_model.CreatePortsForClickHouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPortsForClickHouseWithOptions(request, runtime);
  }

  /**
   * Creates a task to synchronize data from an ApsaraDB RDS for MySQL instance to an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is only applicable to ApsaraDB for ClickHouse clusters.
   * 
   * @param request - CreateRDSToClickhouseDbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRDSToClickhouseDbResponse
   */
  async createRDSToClickhouseDbWithOptions(request: $_model.CreateRDSToClickhouseDbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRDSToClickhouseDbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ckPassword)) {
      query["CkPassword"] = request.ckPassword;
    }

    if (!$dara.isNull(request.ckUserName)) {
      query["CkUserName"] = request.ckUserName;
    }

    if (!$dara.isNull(request.clickhousePort)) {
      query["ClickhousePort"] = request.clickhousePort;
    }

    if (!$dara.isNull(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!$dara.isNull(request.limitUpper)) {
      query["LimitUpper"] = request.limitUpper;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.rdsId)) {
      query["RdsId"] = request.rdsId;
    }

    if (!$dara.isNull(request.rdsPassword)) {
      query["RdsPassword"] = request.rdsPassword;
    }

    if (!$dara.isNull(request.rdsPort)) {
      query["RdsPort"] = request.rdsPort;
    }

    if (!$dara.isNull(request.rdsUserName)) {
      query["RdsUserName"] = request.rdsUserName;
    }

    if (!$dara.isNull(request.rdsVpcId)) {
      query["RdsVpcId"] = request.rdsVpcId;
    }

    if (!$dara.isNull(request.rdsVpcUrl)) {
      query["RdsVpcUrl"] = request.rdsVpcUrl;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.skipUnsupported)) {
      query["SkipUnsupported"] = request.skipUnsupported;
    }

    if (!$dara.isNull(request.synDbTables)) {
      query["SynDbTables"] = request.synDbTables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRDSToClickhouseDb",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRDSToClickhouseDbResponse>(await this.callApi(params, req, runtime), new $_model.CreateRDSToClickhouseDbResponse({}));
  }

  /**
   * Creates a task to synchronize data from an ApsaraDB RDS for MySQL instance to an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is only applicable to ApsaraDB for ClickHouse clusters.
   * 
   * @param request - CreateRDSToClickhouseDbRequest
   * @returns CreateRDSToClickhouseDbResponse
   */
  async createRDSToClickhouseDb(request: $_model.CreateRDSToClickhouseDbRequest): Promise<$_model.CreateRDSToClickhouseDbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRDSToClickhouseDbWithOptions(request, runtime);
  }

  /**
   * Mounts a Server Load Balancer (SLB) instance to an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * ## [](#)Description
   * An ApsaraDB for ClickHouse cluster is dependent on an SLB instance at the network layer. You can bind a domain name to the IP address of an ApsaraDB for ClickHouse node to provide external connectivity service and provide failover capabilities. The SLB instance forwards requests to the nodes in the ApsaraDB for ClickHouse cluster and balances the request traffic among the nodes. The SLB instance checks the availability of backend nodes. If the SLB instance detects that a node is unavailable by checking the health status of all nodes, the SLB instance automatically isolates the unavailable node. This ensures that the request traffic is balanced among available nodes.
   * 
   * @param request - CreateSLBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSLBResponse
   */
  async createSLBWithOptions(request: $_model.CreateSLBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSLBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSLB",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSLBResponse>(await this.callApi(params, req, runtime), new $_model.CreateSLBResponse({}));
  }

  /**
   * Mounts a Server Load Balancer (SLB) instance to an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * ## [](#)Description
   * An ApsaraDB for ClickHouse cluster is dependent on an SLB instance at the network layer. You can bind a domain name to the IP address of an ApsaraDB for ClickHouse node to provide external connectivity service and provide failover capabilities. The SLB instance forwards requests to the nodes in the ApsaraDB for ClickHouse cluster and balances the request traffic among the nodes. The SLB instance checks the availability of backend nodes. If the SLB instance detects that a node is unavailable by checking the health status of all nodes, the SLB instance automatically isolates the unavailable node. This ensures that the request traffic is balanced among available nodes.
   * 
   * @param request - CreateSLBRequest
   * @returns CreateSLBResponse
   */
  async createSLB(request: $_model.CreateSLBRequest): Promise<$_model.CreateSLBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSLBWithOptions(request, runtime);
  }

  /**
   * Creates a privileged account or a standard account for an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is applicable only to ApsaraDB for ClickHouse clusters of V20.8 or later that were created after December 1, 2021,
   * 
   * @param request - CreateSQLAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSQLAccountResponse
   */
  async createSQLAccountWithOptions(request: $_model.CreateSQLAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSQLAccountResponse> {
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
      action: "CreateSQLAccount",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSQLAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateSQLAccountResponse({}));
  }

  /**
   * Creates a privileged account or a standard account for an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is applicable only to ApsaraDB for ClickHouse clusters of V20.8 or later that were created after December 1, 2021,
   * 
   * @param request - CreateSQLAccountRequest
   * @returns CreateSQLAccountResponse
   */
  async createSQLAccount(request: $_model.CreateSQLAccountRequest): Promise<$_model.CreateSQLAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSQLAccountWithOptions(request, runtime);
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
      version: "2019-11-11",
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
   * Deletes a database account of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  After you delete a database account, you cannot use the account to log on to the ApsaraDB for ClickHouse cluster. Exercise caution when performing this operation.
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
      version: "2019-11-11",
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
   * Deletes a database account of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  After you delete a database account, you cannot use the account to log on to the ApsaraDB for ClickHouse cluster. Exercise caution when performing this operation.
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * 删除备份策略
   * 
   * @param request - DeleteBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupPolicyResponse
   */
  async deleteBackupPolicyWithOptions(request: $_model.DeleteBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackupPolicy",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupPolicyResponse({}));
  }

  /**
   * 删除备份策略
   * 
   * @param request - DeleteBackupPolicyRequest
   * @returns DeleteBackupPolicyResponse
   */
  async deleteBackupPolicy(request: $_model.DeleteBackupPolicyRequest): Promise<$_model.DeleteBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Releases a pay-as-you-go ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * *Warning** After an ApsaraDB for ClickHouse cluster is deleted, all data in the cluster is deleted and cannot be recovered. Exercise caution when performing this operation.
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
      version: "2019-11-11",
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
   * Releases a pay-as-you-go ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * *Warning** After an ApsaraDB for ClickHouse cluster is deleted, all data in the cluster is deleted and cannot be recovered. Exercise caution when performing this operation.
   * 
   * @param request - DeleteDBClusterRequest
   * @returns DeleteDBClusterResponse
   */
  async deleteDBCluster(request: $_model.DeleteDBClusterRequest): Promise<$_model.DeleteDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  /**
   * Removes a Server Load Balancer (SLB) instance from an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * ## [](#)Description
   * After an SLB instance is released, simple load balancing is performed on inbound traffic based on the domain name. The health status of all nodes is no longer checked. As a result, unavailable nodes may fail to be detected, and normal requests may be routed to the unavailable nodes. This causes the failures of some read and write requests.
   * 
   * @param request - DeleteSLBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSLBResponse
   */
  async deleteSLBWithOptions(request: $_model.DeleteSLBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSLBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSLB",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSLBResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSLBResponse({}));
  }

  /**
   * Removes a Server Load Balancer (SLB) instance from an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * ## [](#)Description
   * After an SLB instance is released, simple load balancing is performed on inbound traffic based on the domain name. The health status of all nodes is no longer checked. As a result, unavailable nodes may fail to be detected, and normal requests may be routed to the unavailable nodes. This causes the failures of some read and write requests.
   * 
   * @param request - DeleteSLBRequest
   * @returns DeleteSLBResponse
   */
  async deleteSLB(request: $_model.DeleteSLBRequest): Promise<$_model.DeleteSLBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSLBWithOptions(request, runtime);
  }

  /**
   * Deletes a database used for data synchronization.
   * 
   * @param request - DeleteSyndbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSyndbResponse
   */
  async deleteSyndbWithOptions(request: $_model.DeleteSyndbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSyndbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.synDb)) {
      query["SynDb"] = request.synDb;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSyndb",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSyndbResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSyndbResponse({}));
  }

  /**
   * Deletes a database used for data synchronization.
   * 
   * @param request - DeleteSyndbRequest
   * @returns DeleteSyndbResponse
   */
  async deleteSyndb(request: $_model.DeleteSyndbRequest): Promise<$_model.DeleteSyndbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSyndbWithOptions(request, runtime);
  }

  /**
   * Queries the permissions of an account.
   * 
   * @param request - DescribeAccountAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountAuthorityResponse
   */
  async describeAccountAuthorityWithOptions(request: $_model.DescribeAccountAuthorityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountAuthorityResponse> {
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
      action: "DescribeAccountAuthority",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountAuthorityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountAuthorityResponse({}));
  }

  /**
   * Queries the permissions of an account.
   * 
   * @param request - DescribeAccountAuthorityRequest
   * @returns DescribeAccountAuthorityResponse
   */
  async describeAccountAuthority(request: $_model.DescribeAccountAuthorityRequest): Promise<$_model.DescribeAccountAuthorityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountAuthorityWithOptions(request, runtime);
  }

  /**
   * Queries the information about the database accounts of an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Queries the information about the database accounts of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: $_model.DescribeAccountsRequest): Promise<$_model.DescribeAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * 主动运维
   * 
   * @param request - DescribeActiveOperationMaintainConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationMaintainConfResponse
   */
  async describeActiveOperationMaintainConfWithOptions(request: $_model.DescribeActiveOperationMaintainConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationMaintainConfResponse> {
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
      action: "DescribeActiveOperationMaintainConf",
      version: "2019-11-11",
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
   * 主动运维
   * 
   * @param request - DescribeActiveOperationMaintainConfRequest
   * @returns DescribeActiveOperationMaintainConfResponse
   */
  async describeActiveOperationMaintainConf(request: $_model.DescribeActiveOperationMaintainConfRequest): Promise<$_model.DescribeActiveOperationMaintainConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationMaintainConfWithOptions(request, runtime);
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
      version: "2019-11-11",
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
   * Queries a list of databases, tables, and columns in an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Queries a list of databases, tables, and columns in an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeAllDataSourceRequest
   * @returns DescribeAllDataSourceResponse
   */
  async describeAllDataSource(request: $_model.DescribeAllDataSourceRequest): Promise<$_model.DescribeAllDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAllDataSourceWithOptions(request, runtime);
  }

  /**
   * Queries the data sources of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeAllDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllDataSourcesResponse
   */
  async describeAllDataSourcesWithOptions(request: $_model.DescribeAllDataSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAllDataSourcesResponse> {
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
      action: "DescribeAllDataSources",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAllDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAllDataSourcesResponse({}));
  }

  /**
   * Queries the data sources of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeAllDataSourcesRequest
   * @returns DescribeAllDataSourcesResponse
   */
  async describeAllDataSources(request: $_model.DescribeAllDataSourcesRequest): Promise<$_model.DescribeAllDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAllDataSourcesWithOptions(request, runtime);
  }

  /**
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
      version: "2019-11-11",
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
   * @param request - DescribeAutoRenewAttributeRequest
   * @returns DescribeAutoRenewAttributeResponse
   */
  async describeAutoRenewAttribute(request: $_model.DescribeAutoRenewAttributeRequest): Promise<$_model.DescribeAutoRenewAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the backup settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is available only for the ApsaraDB for ClickHouse clusters of versions 20.3, 20.8, and 21.8.
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
      version: "2019-11-11",
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
   * Queries the backup settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is available only for the ApsaraDB for ClickHouse clusters of versions 20.3, 20.8, and 21.8.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the backup sets of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is available only for ApsaraDB for ClickHouse clusters of version 21.8 and later.
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
      version: "2019-11-11",
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
   * Queries the backup sets of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is available only for ApsaraDB for ClickHouse clusters of version 21.8 and later.
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: $_model.DescribeBackupsRequest): Promise<$_model.DescribeBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * Queries information about columns.
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
      version: "2019-11-11",
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
   * Queries information about columns.
   * 
   * @param request - DescribeColumnsRequest
   * @returns DescribeColumnsResponse
   */
  async describeColumns(request: $_model.DescribeColumnsRequest): Promise<$_model.DescribeColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  /**
   * Queries the change records of the configuration parameters of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - DescribeConfigHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConfigHistoryResponse
   */
  async describeConfigHistoryWithOptions(request: $_model.DescribeConfigHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConfigHistoryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConfigHistory",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConfigHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConfigHistoryResponse({}));
  }

  /**
   * Queries the change records of the configuration parameters of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - DescribeConfigHistoryRequest
   * @returns DescribeConfigHistoryResponse
   */
  async describeConfigHistory(request: $_model.DescribeConfigHistoryRequest): Promise<$_model.DescribeConfigHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConfigHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the values of the configuration parameters of an ApsaraDB for ClickHouse cluster before and after the values of the configuration parameters are changed.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - DescribeConfigVersionDifferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConfigVersionDifferenceResponse
   */
  async describeConfigVersionDifferenceWithOptions(request: $_model.DescribeConfigVersionDifferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConfigVersionDifferenceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConfigVersionDifference",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConfigVersionDifferenceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConfigVersionDifferenceResponse({}));
  }

  /**
   * Queries the values of the configuration parameters of an ApsaraDB for ClickHouse cluster before and after the values of the configuration parameters are changed.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - DescribeConfigVersionDifferenceRequest
   * @returns DescribeConfigVersionDifferenceResponse
   */
  async describeConfigVersionDifference(request: $_model.DescribeConfigVersionDifferenceRequest): Promise<$_model.DescribeConfigVersionDifferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConfigVersionDifferenceWithOptions(request, runtime);
  }

  /**
   * Queries the IP address whitelist of an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Queries the IP address whitelist of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBClusterAccessWhiteListRequest
   * @returns DescribeDBClusterAccessWhiteListResponse
   */
  async describeDBClusterAccessWhiteList(request: $_model.DescribeDBClusterAccessWhiteListRequest): Promise<$_model.DescribeDBClusterAccessWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterAccessWhiteListWithOptions(request, runtime);
  }

  /**
   * Queries the information about an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Queries the information about an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBClusterAttributeRequest
   * @returns DescribeDBClusterAttributeResponse
   */
  async describeDBClusterAttribute(request: $_model.DescribeDBClusterAttributeRequest): Promise<$_model.DescribeDBClusterAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterAttributeWithOptions(request, runtime);
  }

  /**
   * Queries information about the parameter settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBClusterConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterConfigResponse
   */
  async describeDBClusterConfigWithOptions(request: $_model.DescribeDBClusterConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterConfigResponse> {
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
      action: "DescribeDBClusterConfig",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterConfigResponse({}));
  }

  /**
   * Queries information about the parameter settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBClusterConfigRequest
   * @returns DescribeDBClusterConfigResponse
   */
  async describeDBClusterConfig(request: $_model.DescribeDBClusterConfigRequest): Promise<$_model.DescribeDBClusterConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterConfigWithOptions(request, runtime);
  }

  /**
   * Queries the values of the configuration parameters in the config.xml file of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - DescribeDBClusterConfigInXMLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterConfigInXMLResponse
   */
  async describeDBClusterConfigInXMLWithOptions(request: $_model.DescribeDBClusterConfigInXMLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterConfigInXMLResponse> {
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
      action: "DescribeDBClusterConfigInXML",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterConfigInXMLResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterConfigInXMLResponse({}));
  }

  /**
   * Queries the values of the configuration parameters in the config.xml file of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - DescribeDBClusterConfigInXMLRequest
   * @returns DescribeDBClusterConfigInXMLResponse
   */
  async describeDBClusterConfigInXML(request: $_model.DescribeDBClusterConfigInXMLRequest): Promise<$_model.DescribeDBClusterConfigInXMLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterConfigInXMLWithOptions(request, runtime);
  }

  /**
   * Queries the network information about an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBClusterNetInfoItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterNetInfoItemsResponse
   */
  async describeDBClusterNetInfoItemsWithOptions(request: $_model.DescribeDBClusterNetInfoItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterNetInfoItemsResponse> {
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
      action: "DescribeDBClusterNetInfoItems",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterNetInfoItemsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterNetInfoItemsResponse({}));
  }

  /**
   * Queries the network information about an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBClusterNetInfoItemsRequest
   * @returns DescribeDBClusterNetInfoItemsResponse
   */
  async describeDBClusterNetInfoItems(request: $_model.DescribeDBClusterNetInfoItemsRequest): Promise<$_model.DescribeDBClusterNetInfoItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterNetInfoItemsWithOptions(request, runtime);
  }

  /**
   * 获取实例节点信息
   * 
   * @param request - DescribeDBClusterNodeInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterNodeInfosResponse
   */
  async describeDBClusterNodeInfosWithOptions(request: $_model.DescribeDBClusterNodeInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterNodeInfosResponse> {
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
      action: "DescribeDBClusterNodeInfos",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterNodeInfosResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterNodeInfosResponse({}));
  }

  /**
   * 获取实例节点信息
   * 
   * @param request - DescribeDBClusterNodeInfosRequest
   * @returns DescribeDBClusterNodeInfosResponse
   */
  async describeDBClusterNodeInfos(request: $_model.DescribeDBClusterNodeInfosRequest): Promise<$_model.DescribeDBClusterNodeInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterNodeInfosWithOptions(request, runtime);
  }

  /**
   * Queries performance data about an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * You can query the performance data of a specified cluster over a specific time range based on the performance metrics. The data is collected every 30 seconds.
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created before December 1, 2021.
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
      action: "DescribeDBClusterPerformance",
      version: "2019-11-11",
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
   * Queries performance data about an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * You can query the performance data of a specified cluster over a specific time range based on the performance metrics. The data is collected every 30 seconds.
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created before December 1, 2021.
   * 
   * @param request - DescribeDBClusterPerformanceRequest
   * @returns DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformance(request: $_model.DescribeDBClusterPerformanceRequest): Promise<$_model.DescribeDBClusterPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDBClusterStatusSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterStatusSetResponse
   */
  async describeDBClusterStatusSetWithOptions(request: $_model.DescribeDBClusterStatusSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterStatusSetResponse> {
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
      action: "DescribeDBClusterStatusSet",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterStatusSetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterStatusSetResponse({}));
  }

  /**
   * @param request - DescribeDBClusterStatusSetRequest
   * @returns DescribeDBClusterStatusSetResponse
   */
  async describeDBClusterStatusSet(request: $_model.DescribeDBClusterStatusSetRequest): Promise<$_model.DescribeDBClusterStatusSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterStatusSetWithOptions(request, runtime);
  }

  /**
   * Queries the information about ApsaraDB for ClickHouse clusters in a region.
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
      version: "2019-11-11",
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
   * Queries the information about ApsaraDB for ClickHouse clusters in a region.
   * 
   * @param request - DescribeDBClustersRequest
   * @returns DescribeDBClustersResponse
   */
  async describeDBClusters(request: $_model.DescribeDBClustersRequest): Promise<$_model.DescribeDBClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClustersWithOptions(request, runtime);
  }

  /**
   * Queries configuration information about an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBConfigResponse
   */
  async describeDBConfigWithOptions(request: $_model.DescribeDBConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBConfigResponse> {
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
      action: "DescribeDBConfig",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBConfigResponse({}));
  }

  /**
   * Queries configuration information about an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBConfigRequest
   * @returns DescribeDBConfigResponse
   */
  async describeDBConfig(request: $_model.DescribeDBConfigRequest): Promise<$_model.DescribeDBConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBConfigWithOptions(request, runtime);
  }

  /**
   * DescribeEventMetaInfo
   * 
   * @param request - DescribeEventMetaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventMetaInfoResponse
   */
  async describeEventMetaInfoWithOptions(request: $_model.DescribeEventMetaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventMetaInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sourceCode)) {
      query["SourceCode"] = request.sourceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventMetaInfo",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventMetaInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventMetaInfoResponse({}));
  }

  /**
   * DescribeEventMetaInfo
   * 
   * @param request - DescribeEventMetaInfoRequest
   * @returns DescribeEventMetaInfoResponse
   */
  async describeEventMetaInfo(request: $_model.DescribeEventMetaInfoRequest): Promise<$_model.DescribeEventMetaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventMetaInfoWithOptions(request, runtime);
  }

  /**
   * Queries the storage of cold data.
   * 
   * @param request - DescribeOSSStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOSSStorageResponse
   */
  async describeOSSStorageWithOptions(request: $_model.DescribeOSSStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOSSStorageResponse> {
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
      action: "DescribeOSSStorage",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOSSStorageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOSSStorageResponse({}));
  }

  /**
   * Queries the storage of cold data.
   * 
   * @param request - DescribeOSSStorageRequest
   * @returns DescribeOSSStorageResponse
   */
  async describeOSSStorage(request: $_model.DescribeOSSStorageRequest): Promise<$_model.DescribeOSSStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOSSStorageWithOptions(request, runtime);
  }

  /**
   * Queries the details of queries that are being executed in an ApsaraDB for ClickHouse cluster.
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

    if (!$dara.isNull(request.initialQueryId)) {
      query["InitialQueryId"] = request.initialQueryId;
    }

    if (!$dara.isNull(request.initialUser)) {
      query["InitialUser"] = request.initialUser;
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

    if (!$dara.isNull(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
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
      action: "DescribeProcessList",
      version: "2019-11-11",
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
   * Queries the details of queries that are being executed in an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeProcessListRequest
   * @returns DescribeProcessListResponse
   */
  async describeProcessList(request: $_model.DescribeProcessListRequest): Promise<$_model.DescribeProcessListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProcessListWithOptions(request, runtime);
  }

  /**
   * Queries the information about all regions and zones of ApsaraDB for ClickHouse clusters.
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
      version: "2019-11-11",
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
   * Queries the information about all regions and zones of ApsaraDB for ClickHouse clusters.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of all databases in an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Queries a list of all databases in an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeSchemasRequest
   * @returns DescribeSchemasResponse
   */
  async describeSchemas(request: $_model.DescribeSchemasRequest): Promise<$_model.DescribeSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSchemasWithOptions(request, runtime);
  }

  /**
   * Queries the details about slow query logs.
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

    if (!$dara.isNull(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
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
      action: "DescribeSlowLogRecords",
      version: "2019-11-11",
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
   * Queries the details about slow query logs.
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: $_model.DescribeSlowLogRecordsRequest): Promise<$_model.DescribeSlowLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSlowLogTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogTrendResponse
   */
  async describeSlowLogTrendWithOptions(request: $_model.DescribeSlowLogTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogTrendResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
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
      action: "DescribeSlowLogTrend",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlowLogTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlowLogTrendResponse({}));
  }

  /**
   * @param request - DescribeSlowLogTrendRequest
   * @returns DescribeSlowLogTrendResponse
   */
  async describeSlowLogTrend(request: $_model.DescribeSlowLogTrendRequest): Promise<$_model.DescribeSlowLogTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogTrendWithOptions(request, runtime);
  }

  /**
   * Queries information about tables that are synchronized from an ApsaraDB RDS for MySQL instance to an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeSynDbTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynDbTablesResponse
   */
  async describeSynDbTablesWithOptions(request: $_model.DescribeSynDbTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynDbTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.synDb)) {
      query["SynDb"] = request.synDb;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSynDbTables",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynDbTablesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynDbTablesResponse({}));
  }

  /**
   * Queries information about tables that are synchronized from an ApsaraDB RDS for MySQL instance to an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeSynDbTablesRequest
   * @returns DescribeSynDbTablesResponse
   */
  async describeSynDbTables(request: $_model.DescribeSynDbTablesRequest): Promise<$_model.DescribeSynDbTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynDbTablesWithOptions(request, runtime);
  }

  /**
   * Queries the information about data synchronization between an ApsaraDB for ClickHouse cluster and an ApsaraDB RDS for MySQL instance.
   * 
   * @param request - DescribeSynDbsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynDbsResponse
   */
  async describeSynDbsWithOptions(request: $_model.DescribeSynDbsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynDbsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
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
      action: "DescribeSynDbs",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynDbsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynDbsResponse({}));
  }

  /**
   * Queries the information about data synchronization between an ApsaraDB for ClickHouse cluster and an ApsaraDB RDS for MySQL instance.
   * 
   * @param request - DescribeSynDbsRequest
   * @returns DescribeSynDbsResponse
   */
  async describeSynDbs(request: $_model.DescribeSynDbsRequest): Promise<$_model.DescribeSynDbsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynDbsWithOptions(request, runtime);
  }

  /**
   * Queries the information about tables in a database of an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Queries the information about tables in a database of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeTablesRequest
   * @returns DescribeTablesResponse
   */
  async describeTables(request: $_model.DescribeTablesRequest): Promise<$_model.DescribeTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  /**
   * Queries information about data migration from an ApsaraDB for ClickHouse cluster of an earlier version to an ApsaraDB for ClickHouse cluster of a later version
   * 
   * @remarks
   * >  You can call this operation to query information about only data migration from an ApsaraDB for ClickHouse cluster of an earlier version to an ApsaraDB for ClickHouse cluster of a later version.
   * 
   * @param request - DescribeTransferHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTransferHistoryResponse
   */
  async describeTransferHistoryWithOptions(request: $_model.DescribeTransferHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTransferHistoryResponse> {
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
      action: "DescribeTransferHistory",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTransferHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTransferHistoryResponse({}));
  }

  /**
   * Queries information about data migration from an ApsaraDB for ClickHouse cluster of an earlier version to an ApsaraDB for ClickHouse cluster of a later version
   * 
   * @remarks
   * >  You can call this operation to query information about only data migration from an ApsaraDB for ClickHouse cluster of an earlier version to an ApsaraDB for ClickHouse cluster of a later version.
   * 
   * @param request - DescribeTransferHistoryRequest
   * @returns DescribeTransferHistoryResponse
   */
  async describeTransferHistory(request: $_model.DescribeTransferHistoryRequest): Promise<$_model.DescribeTransferHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTransferHistoryWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeUserEncryptionKeyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserEncryptionKeyListResponse
   */
  async describeUserEncryptionKeyListWithOptions(request: $_model.DescribeUserEncryptionKeyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserEncryptionKeyListResponse> {
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
      action: "DescribeUserEncryptionKeyList",
      version: "2019-11-11",
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
   * Zookeeper主动切主
   * 
   * @param request - ElectZookeeperLeaderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ElectZookeeperLeaderResponse
   */
  async electZookeeperLeaderWithOptions(request: $_model.ElectZookeeperLeaderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ElectZookeeperLeaderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.disableWrite)) {
      query["DisableWrite"] = request.disableWrite;
    }

    if (!$dara.isNull(request.electTime)) {
      query["ElectTime"] = request.electTime;
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
      action: "ElectZookeeperLeader",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ElectZookeeperLeaderResponse>(await this.callApi(params, req, runtime), new $_model.ElectZookeeperLeaderResponse({}));
  }

  /**
   * Zookeeper主动切主
   * 
   * @param request - ElectZookeeperLeaderRequest
   * @returns ElectZookeeperLeaderResponse
   */
  async electZookeeperLeader(request: $_model.ElectZookeeperLeaderRequest): Promise<$_model.ElectZookeeperLeaderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.electZookeeperLeaderWithOptions(request, runtime);
  }

  /**
   * Terminates an ongoing task.
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

    if (!$dara.isNull(request.initialQueryId)) {
      query["InitialQueryId"] = request.initialQueryId;
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
      action: "KillProcess",
      version: "2019-11-11",
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
   * Terminates an ongoing task.
   * 
   * @param request - KillProcessRequest
   * @returns KillProcessResponse
   */
  async killProcess(request: $_model.KillProcessRequest): Promise<$_model.KillProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.killProcessWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to ApsaraDB for ClickHouse clusters.
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
      version: "2019-11-11",
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
   * Queries the tags that are added to ApsaraDB for ClickHouse clusters.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the permissions of an account.
   * 
   * @param request - ModifyAccountAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountAuthorityResponse
   */
  async modifyAccountAuthorityWithOptions(request: $_model.ModifyAccountAuthorityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountAuthorityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.allowDatabases)) {
      query["AllowDatabases"] = request.allowDatabases;
    }

    if (!$dara.isNull(request.allowDictionaries)) {
      query["AllowDictionaries"] = request.allowDictionaries;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ddlAuthority)) {
      query["DdlAuthority"] = request.ddlAuthority;
    }

    if (!$dara.isNull(request.dmlAuthority)) {
      query["DmlAuthority"] = request.dmlAuthority;
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

    if (!$dara.isNull(request.totalDatabases)) {
      query["TotalDatabases"] = request.totalDatabases;
    }

    if (!$dara.isNull(request.totalDictionaries)) {
      query["TotalDictionaries"] = request.totalDictionaries;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountAuthority",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountAuthorityResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountAuthorityResponse({}));
  }

  /**
   * Modifies the permissions of an account.
   * 
   * @param request - ModifyAccountAuthorityRequest
   * @returns ModifyAccountAuthorityResponse
   */
  async modifyAccountAuthority(request: $_model.ModifyAccountAuthorityRequest): Promise<$_model.ModifyAccountAuthorityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountAuthorityWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a database account of an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Modifies the description of a database account of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * 修改主动运维设置
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
      version: "2019-11-11",
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
   * 修改主动运维设置
   * 
   * @param request - ModifyActiveOperationMaintainConfRequest
   * @returns ModifyActiveOperationMaintainConfResponse
   */
  async modifyActiveOperationMaintainConf(request: $_model.ModifyActiveOperationMaintainConfRequest): Promise<$_model.ModifyActiveOperationMaintainConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationMaintainConfWithOptions(request, runtime);
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
      version: "2019-11-11",
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
      version: "2019-11-11",
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
   * @param request - ModifyAutoRenewAttributeRequest
   * @returns ModifyAutoRenewAttributeResponse
   */
  async modifyAutoRenewAttribute(request: $_model.ModifyAutoRenewAttributeRequest): Promise<$_model.ModifyAutoRenewAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the backup settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is available only for the ApsaraDB for ClickHouse clusters of versions 20.3, 20.8, and 21.8.
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
      version: "2019-11-11",
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
   * Modifies the backup settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is available only for the ApsaraDB for ClickHouse clusters of versions 20.3, 20.8, and 21.8.
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Upgrades or downgrades an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterResponse
   */
  async modifyDBClusterWithOptions(request: $_model.ModifyDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterClass)) {
      query["DBClusterClass"] = request.DBClusterClass;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNodeGroupCount)) {
      query["DBNodeGroupCount"] = request.DBNodeGroupCount;
    }

    if (!$dara.isNull(request.DBNodeStorage)) {
      query["DBNodeStorage"] = request.DBNodeStorage;
    }

    if (!$dara.isNull(request.dbNodeStorageType)) {
      query["DbNodeStorageType"] = request.dbNodeStorageType;
    }

    if (!$dara.isNull(request.disableWriteWindows)) {
      query["DisableWriteWindows"] = request.disableWriteWindows;
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
      action: "ModifyDBCluster",
      version: "2019-11-11",
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
   * Upgrades or downgrades an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBClusterRequest
   * @returns ModifyDBClusterResponse
   */
  async modifyDBCluster(request: $_model.ModifyDBClusterRequest): Promise<$_model.ModifyDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelist of an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Modifies the IP address whitelist of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBClusterAccessWhiteListRequest
   * @returns ModifyDBClusterAccessWhiteListResponse
   */
  async modifyDBClusterAccessWhiteList(request: $_model.ModifyDBClusterAccessWhiteListRequest): Promise<$_model.ModifyDBClusterAccessWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterAccessWhiteListWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBClusterConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterConfigResponse
   */
  async modifyDBClusterConfigWithOptions(request: $_model.ModifyDBClusterConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterConfigResponse> {
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

    if (!$dara.isNull(request.reason)) {
      query["Reason"] = request.reason;
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

    if (!$dara.isNull(request.userConfig)) {
      query["UserConfig"] = request.userConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterConfig",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterConfigResponse({}));
  }

  /**
   * Modifies the configurations of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBClusterConfigRequest
   * @returns ModifyDBClusterConfigResponse
   */
  async modifyDBClusterConfig(request: $_model.ModifyDBClusterConfigRequest): Promise<$_model.ModifyDBClusterConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterConfigWithOptions(request, runtime);
  }

  /**
   * Changes the configuration parameters of an ApsaraDB for ClickHouse cluster that runs Community-compatible Edition.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - ModifyDBClusterConfigInXMLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterConfigInXMLResponse
   */
  async modifyDBClusterConfigInXMLWithOptions(request: $_model.ModifyDBClusterConfigInXMLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterConfigInXMLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterConfigInXML",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterConfigInXMLResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterConfigInXMLResponse({}));
  }

  /**
   * Changes the configuration parameters of an ApsaraDB for ClickHouse cluster that runs Community-compatible Edition.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - ModifyDBClusterConfigInXMLRequest
   * @returns ModifyDBClusterConfigInXMLResponse
   */
  async modifyDBClusterConfigInXML(request: $_model.ModifyDBClusterConfigInXMLRequest): Promise<$_model.ModifyDBClusterConfigInXMLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterConfigInXMLWithOptions(request, runtime);
  }

  /**
   * Changes the name of an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Changes the name of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBClusterDescriptionRequest
   * @returns ModifyDBClusterDescriptionResponse
   */
  async modifyDBClusterDescription(request: $_model.ModifyDBClusterDescriptionRequest): Promise<$_model.ModifyDBClusterDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the maintenance window of an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Modifies the maintenance window of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBClusterMaintainTimeRequest
   * @returns ModifyDBClusterMaintainTimeResponse
   */
  async modifyDBClusterMaintainTime(request: $_model.ModifyDBClusterMaintainTimeRequest): Promise<$_model.ModifyDBClusterMaintainTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterMaintainTimeWithOptions(request, runtime);
  }

  /**
   * Modifies the dictionary configuration of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBConfigResponse
   */
  async modifyDBConfigWithOptions(request: $_model.ModifyDBConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
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
      action: "ModifyDBConfig",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBConfigResponse({}));
  }

  /**
   * Modifies the dictionary configuration of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBConfigRequest
   * @returns ModifyDBConfigResponse
   */
  async modifyDBConfig(request: $_model.ModifyDBConfigRequest): Promise<$_model.ModifyDBConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the type of a minor version update in ApsaraDB for ClickHouse.
   * 
   * @param request - ModifyMinorVersionGreadeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMinorVersionGreadeTypeResponse
   */
  async modifyMinorVersionGreadeTypeWithOptions(request: $_model.ModifyMinorVersionGreadeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMinorVersionGreadeTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.maintainAutoType)) {
      query["MaintainAutoType"] = request.maintainAutoType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

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
      action: "ModifyMinorVersionGreadeType",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMinorVersionGreadeTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMinorVersionGreadeTypeResponse({}));
  }

  /**
   * Modifies the type of a minor version update in ApsaraDB for ClickHouse.
   * 
   * @param request - ModifyMinorVersionGreadeTypeRequest
   * @returns ModifyMinorVersionGreadeTypeResponse
   */
  async modifyMinorVersionGreadeType(request: $_model.ModifyMinorVersionGreadeTypeRequest): Promise<$_model.ModifyMinorVersionGreadeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMinorVersionGreadeTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the synchronization task of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is applicable only to ApsaraDB for ClickHouse clusters.
   * 
   * @param request - ModifyRDSToClickhouseDbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRDSToClickhouseDbResponse
   */
  async modifyRDSToClickhouseDbWithOptions(request: $_model.ModifyRDSToClickhouseDbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRDSToClickhouseDbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ckPassword)) {
      query["CkPassword"] = request.ckPassword;
    }

    if (!$dara.isNull(request.ckUserName)) {
      query["CkUserName"] = request.ckUserName;
    }

    if (!$dara.isNull(request.clickhousePort)) {
      query["ClickhousePort"] = request.clickhousePort;
    }

    if (!$dara.isNull(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!$dara.isNull(request.limitUpper)) {
      query["LimitUpper"] = request.limitUpper;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.rdsId)) {
      query["RdsId"] = request.rdsId;
    }

    if (!$dara.isNull(request.rdsPassword)) {
      query["RdsPassword"] = request.rdsPassword;
    }

    if (!$dara.isNull(request.rdsPort)) {
      query["RdsPort"] = request.rdsPort;
    }

    if (!$dara.isNull(request.rdsSynDb)) {
      query["RdsSynDb"] = request.rdsSynDb;
    }

    if (!$dara.isNull(request.rdsSynTables)) {
      query["RdsSynTables"] = request.rdsSynTables;
    }

    if (!$dara.isNull(request.rdsUserName)) {
      query["RdsUserName"] = request.rdsUserName;
    }

    if (!$dara.isNull(request.rdsVpcId)) {
      query["RdsVpcId"] = request.rdsVpcId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.skipUnsupported)) {
      query["SkipUnsupported"] = request.skipUnsupported;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRDSToClickhouseDb",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRDSToClickhouseDbResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRDSToClickhouseDbResponse({}));
  }

  /**
   * Modifies the synchronization task of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is applicable only to ApsaraDB for ClickHouse clusters.
   * 
   * @param request - ModifyRDSToClickhouseDbRequest
   * @returns ModifyRDSToClickhouseDbResponse
   */
  async modifyRDSToClickhouseDb(request: $_model.ModifyRDSToClickhouseDbRequest): Promise<$_model.ModifyRDSToClickhouseDbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRDSToClickhouseDbWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Releases the public endpoint of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ReleaseClusterPublicConnectionRequest
   * @returns ReleaseClusterPublicConnectionResponse
   */
  async releaseClusterPublicConnection(request: $_model.ReleaseClusterPublicConnectionRequest): Promise<$_model.ReleaseClusterPublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseClusterPublicConnectionWithOptions(request, runtime);
  }

  /**
   * Resets the password of a database account for an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Resets the password of a database account for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: $_model.ResetAccountPasswordRequest): Promise<$_model.ResetAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Restarts an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - RestartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(request: $_model.RestartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstanceResponse> {
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

    if (!$dara.isNull(request.restartTime)) {
      query["RestartTime"] = request.restartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartInstance",
      version: "2019-11-11",
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
   * Restarts an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - RestartInstanceRequest
   * @returns RestartInstanceResponse
   */
  async restartInstance(request: $_model.RestartInstanceRequest): Promise<$_model.RestartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  /**
   * 批量重启实例节点
   * 
   * @param tmpReq - RestartInstanceNodeListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceNodeListResponse
   */
  async restartInstanceNodeListWithOptions(tmpReq: $_model.RestartInstanceNodeListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstanceNodeListResponse> {
    tmpReq.validate();
    let request = new $_model.RestartInstanceNodeListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeList)) {
      request.nodeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeList, "NodeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.nodeListShrink)) {
      query["NodeList"] = request.nodeListShrink;
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

    if (!$dara.isNull(request.restartTime)) {
      query["RestartTime"] = request.restartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartInstanceNodeList",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartInstanceNodeListResponse>(await this.callApi(params, req, runtime), new $_model.RestartInstanceNodeListResponse({}));
  }

  /**
   * 批量重启实例节点
   * 
   * @param request - RestartInstanceNodeListRequest
   * @returns RestartInstanceNodeListResponse
   */
  async restartInstanceNodeList(request: $_model.RestartInstanceNodeListRequest): Promise<$_model.RestartInstanceNodeListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartInstanceNodeListWithOptions(request, runtime);
  }

  /**
   * Creates tags for ApsaraDB for ClickHouse clusters and adds the tags to the ApsaraDB for ClickHouse clusters.
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
      version: "2019-11-11",
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
   * Creates tags for ApsaraDB for ClickHouse clusters and adds the tags to the ApsaraDB for ClickHouse clusters.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Migrates the data of a source ApsaraDB for ClickHouse cluster to a destination ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * ## [](#)Prerequisites
   * *   The IP address of the source ApsaraDB for ClickHouse cluster is added to the IP address whitelist of the destination ApsaraDB for ClickHouse cluster.
   * *   The IP address of the destination ApsaraDB for ClickHouse cluster is added to the IP address whitelist of the source ApsaraDB for ClickHouse cluster.
   * >  You can execute the `select * from system.clusters;` statement to query the IP address of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - TransferVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferVersionResponse
   */
  async transferVersionWithOptions(request: $_model.TransferVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.disableWriteWindows)) {
      query["DisableWriteWindows"] = request.disableWriteWindows;
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

    if (!$dara.isNull(request.sourceAccount)) {
      query["SourceAccount"] = request.sourceAccount;
    }

    if (!$dara.isNull(request.sourceClusterName)) {
      query["SourceClusterName"] = request.sourceClusterName;
    }

    if (!$dara.isNull(request.sourcePassword)) {
      query["SourcePassword"] = request.sourcePassword;
    }

    if (!$dara.isNull(request.sourceShards)) {
      query["SourceShards"] = request.sourceShards;
    }

    if (!$dara.isNull(request.targetAccount)) {
      query["TargetAccount"] = request.targetAccount;
    }

    if (!$dara.isNull(request.targetDbClusterId)) {
      query["TargetDbClusterId"] = request.targetDbClusterId;
    }

    if (!$dara.isNull(request.targetPassword)) {
      query["TargetPassword"] = request.targetPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferVersion",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferVersionResponse>(await this.callApi(params, req, runtime), new $_model.TransferVersionResponse({}));
  }

  /**
   * Migrates the data of a source ApsaraDB for ClickHouse cluster to a destination ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * ## [](#)Prerequisites
   * *   The IP address of the source ApsaraDB for ClickHouse cluster is added to the IP address whitelist of the destination ApsaraDB for ClickHouse cluster.
   * *   The IP address of the destination ApsaraDB for ClickHouse cluster is added to the IP address whitelist of the source ApsaraDB for ClickHouse cluster.
   * >  You can execute the `select * from system.clusters;` statement to query the IP address of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - TransferVersionRequest
   * @returns TransferVersionResponse
   */
  async transferVersion(request: $_model.TransferVersionRequest): Promise<$_model.TransferVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferVersionWithOptions(request, runtime);
  }

  /**
   * Removes tags from ApsaraDB for ClickHouse clusters.
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
      version: "2019-11-11",
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
   * Removes tags from ApsaraDB for ClickHouse clusters.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the minor engine version of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were purchased after December 1, 2021.
   * 
   * @param request - UpgradeMinorVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeMinorVersionResponse
   */
  async upgradeMinorVersionWithOptions(request: $_model.UpgradeMinorVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeMinorVersionResponse> {
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

    if (!$dara.isNull(request.upgradeImmediately)) {
      query["UpgradeImmediately"] = request.upgradeImmediately;
    }

    if (!$dara.isNull(request.upgradeTime)) {
      query["UpgradeTime"] = request.upgradeTime;
    }

    if (!$dara.isNull(request.upgradeVersion)) {
      query["UpgradeVersion"] = request.upgradeVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeMinorVersion",
      version: "2019-11-11",
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
   * Updates the minor engine version of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were purchased after December 1, 2021.
   * 
   * @param request - UpgradeMinorVersionRequest
   * @returns UpgradeMinorVersionResponse
   */
  async upgradeMinorVersion(request: $_model.UpgradeMinorVersionRequest): Promise<$_model.UpgradeMinorVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeMinorVersionWithOptions(request, runtime);
  }

}
