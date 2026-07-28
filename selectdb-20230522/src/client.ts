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
      'us-west-1': "selectdb.us-west-1.aliyuncs.com",
      'us-east-1': "selectdb.us-east-1.aliyuncs.com",
      'na-south-1': "selectdb.na-south-1.aliyuncs.com",
      'eu-west-1': "selectdb.eu-west-1.aliyuncs.com",
      'eu-central-1': "selectdb.eu-central-1.aliyuncs.com",
      'cn-zhangjiakou': "selectdb.cn-zhangjiakou.aliyuncs.com",
      'cn-wulanchabu': "selectdb.cn-wulanchabu.aliyuncs.com",
      'cn-shenzhen': "selectdb.cn-shenzhen.aliyuncs.com",
      'cn-shanghai-finance-1': "selectdb.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shanghai': "selectdb.cn-shanghai.aliyuncs.com",
      'cn-qingdao': "selectdb.cn-qingdao.aliyuncs.com",
      'cn-huhehaote': "selectdb.cn-huhehaote.aliyuncs.com",
      'cn-hongkong': "selectdb.cn-hongkong.aliyuncs.com",
      'cn-heyuan': "selectdb.aliyuncs.com",
      'cn-hangzhou': "selectdb.aliyuncs.com",
      'cn-guangzhou': "selectdb.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "selectdb.cn-chengdu.aliyuncs.com",
      'cn-beijing': "selectdb.cn-beijing.aliyuncs.com",
      'ap-southeast-7': "selectdb.aliyuncs.com",
      'ap-southeast-6': "selectdb.ap-southeast-6.aliyuncs.com",
      'ap-southeast-5': "selectdb.ap-southeast-5.aliyuncs.com",
      'ap-southeast-3': "selectdb.aliyuncs.com",
      'ap-southeast-1': "selectdb.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2': "selectdb.aliyuncs.com",
      'ap-northeast-1': "selectdb.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("selectdb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Applies for a public endpoint for an ApsaraDB for SelectDB instance.
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

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.netType)) {
      query["NetType"] = request.netType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateInstancePublicConnection",
      version: "2023-05-22",
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
   * Applies for a public endpoint for an ApsaraDB for SelectDB instance.
   * 
   * @param request - AllocateInstancePublicConnectionRequest
   * @returns AllocateInstancePublicConnectionResponse
   */
  async allocateInstancePublicConnection(request: $_model.AllocateInstancePublicConnectionRequest): Promise<$_model.AllocateInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Moves a specified database instance to a different resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      version: "2023-05-22",
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
   * Moves a specified database instance to a different resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Performs a precheck on the resources required to create an ApsaraDB for SelectDB instance.
   * 
   * @param request - CheckCreateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCreateDBInstanceResponse
   */
  async checkCreateDBInstanceWithOptions(request: $_model.CheckCreateDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCreateDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheSize)) {
      query["CacheSize"] = request.cacheSize;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
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

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
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
      action: "CheckCreateDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckCreateDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CheckCreateDBInstanceResponse({}));
  }

  /**
   * Performs a precheck on the resources required to create an ApsaraDB for SelectDB instance.
   * 
   * @param request - CheckCreateDBInstanceRequest
   * @returns CheckCreateDBInstanceResponse
   */
  async checkCreateDBInstance(request: $_model.CheckCreateDBInstanceRequest): Promise<$_model.CheckCreateDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCreateDBInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - CheckIpExistsInSecurityIpListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckIpExistsInSecurityIpListResponse
   */
  async checkIpExistsInSecurityIpListWithOptions(request: $_model.CheckIpExistsInSecurityIpListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckIpExistsInSecurityIpListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckIpExistsInSecurityIpList",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckIpExistsInSecurityIpListResponse>(await this.callApi(params, req, runtime), new $_model.CheckIpExistsInSecurityIpListResponse({}));
  }

  /**
   * @param request - CheckIpExistsInSecurityIpListRequest
   * @returns CheckIpExistsInSecurityIpListResponse
   */
  async checkIpExistsInSecurityIpList(request: $_model.CheckIpExistsInSecurityIpListRequest): Promise<$_model.CheckIpExistsInSecurityIpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkIpExistsInSecurityIpListWithOptions(request, runtime);
  }

  /**
   * Call this operation to check the service-linked role.
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

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceLinkedRole",
      version: "2023-05-22",
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
   * Call this operation to check the service-linked role.
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRole(request: $_model.CheckServiceLinkedRoleRequest): Promise<$_model.CheckServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Creates a cluster for a specified ApsaraDB for SelectDB instance.
   * 
   * @remarks
   * >Warning: 
   * Pay-as-you-go instances support only pay-as-you-go clusters. Subscription instances support both pay-as-you-go and subscription clusters.
   * 
   * @param request - CreateDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBClusterResponse
   */
  async createDBClusterWithOptions(request: $_model.CreateDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheSize)) {
      query["CacheSize"] = request.cacheSize;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clusterNodeCount)) {
      query["ClusterNodeCount"] = request.clusterNodeCount;
    }

    if (!$dara.isNull(request.clusterNodeType)) {
      query["ClusterNodeType"] = request.clusterNodeType;
    }

    if (!$dara.isNull(request.DBClusterClass)) {
      query["DBClusterClass"] = request.DBClusterClass;
    }

    if (!$dara.isNull(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      body["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBCluster",
      version: "2023-05-22",
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
   * Creates a cluster for a specified ApsaraDB for SelectDB instance.
   * 
   * @remarks
   * >Warning: 
   * Pay-as-you-go instances support only pay-as-you-go clusters. Subscription instances support both pay-as-you-go and subscription clusters.
   * 
   * @param request - CreateDBClusterRequest
   * @returns CreateDBClusterResponse
   */
  async createDBCluster(request: $_model.CreateDBClusterRequest): Promise<$_model.CreateDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBClusterWithOptions(request, runtime);
  }

  /**
   * Creates a binding relationship for clusters. If the zone-redundant storage (ZRS) deployment method is used, you can create a binding relationship between two clusters.
   * 
   * @remarks
   * This operation is supported only for instances that use the zone-redundant storage (ZRS) feature and meet the following requirements:
   * - The instance clusters reside in different zones.
   * - The billing method of the instance clusters is consistent.
   * 
   * @param request - CreateDBClusterBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBClusterBindingResponse
   */
  async createDBClusterBindingWithOptions(request: $_model.CreateDBClusterBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBClusterBindingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBClusterIdBak)) {
      query["DBClusterIdBak"] = request.DBClusterIdBak;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBClusterBinding",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBClusterBindingResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBClusterBindingResponse({}));
  }

  /**
   * Creates a binding relationship for clusters. If the zone-redundant storage (ZRS) deployment method is used, you can create a binding relationship between two clusters.
   * 
   * @remarks
   * This operation is supported only for instances that use the zone-redundant storage (ZRS) feature and meet the following requirements:
   * - The instance clusters reside in different zones.
   * - The billing method of the instance clusters is consistent.
   * 
   * @param request - CreateDBClusterBindingRequest
   * @returns CreateDBClusterBindingResponse
   */
  async createDBClusterBinding(request: $_model.CreateDBClusterBindingRequest): Promise<$_model.CreateDBClusterBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBClusterBindingWithOptions(request, runtime);
  }

  /**
   * Creates an ApsaraDB for SelectDB instance.
   * 
   * @remarks
   * Subscription instances cannot be deleted.
   * 
   * @param tmpReq - CreateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceResponse
   */
  async createDBInstanceWithOptions(tmpReq: $_model.CreateDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDBInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.multiZone)) {
      request.multiZoneShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.multiZone, "MultiZone", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.addVPCIPs)) {
      query["AddVPCIPs"] = request.addVPCIPs;
    }

    if (!$dara.isNull(request.cacheSize)) {
      query["CacheSize"] = request.cacheSize;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterNodeCount)) {
      query["ClusterNodeCount"] = request.clusterNodeCount;
    }

    if (!$dara.isNull(request.clusterNodeType)) {
      query["ClusterNodeType"] = request.clusterNodeType;
    }

    if (!$dara.isNull(request.configPatternType)) {
      query["ConfigPatternType"] = request.configPatternType;
    }

    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.deployScheme)) {
      query["DeployScheme"] = request.deployScheme;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.multiZoneShrink)) {
      query["MultiZone"] = request.multiZoneShrink;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBInstance",
      version: "2023-05-22",
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
   * Creates an ApsaraDB for SelectDB instance.
   * 
   * @remarks
   * Subscription instances cannot be deleted.
   * 
   * @param request - CreateDBInstanceRequest
   * @returns CreateDBInstanceResponse
   */
  async createDBInstance(request: $_model.CreateDBInstanceRequest): Promise<$_model.CreateDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a time-based scaling rule.
   * 
   * @param request - CreateElasticRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateElasticRuleResponse
   */
  async createElasticRuleWithOptions(request: $_model.CreateElasticRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateElasticRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterClass)) {
      query["ClusterClass"] = request.clusterClass;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.elasticRuleStartTime)) {
      query["ElasticRuleStartTime"] = request.elasticRuleStartTime;
    }

    if (!$dara.isNull(request.executionPeriod)) {
      query["ExecutionPeriod"] = request.executionPeriod;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateElasticRule",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateElasticRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateElasticRuleResponse({}));
  }

  /**
   * Creates a time-based scaling rule.
   * 
   * @param request - CreateElasticRuleRequest
   * @returns CreateElasticRuleResponse
   */
  async createElasticRule(request: $_model.CreateElasticRuleRequest): Promise<$_model.CreateElasticRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createElasticRuleWithOptions(request, runtime);
  }

  /**
   * Call this operation to create a service-linked role.
   * 
   * @param request - CreateServiceLinkedRoleForSelectDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleForSelectDBResponse
   */
  async createServiceLinkedRoleForSelectDBWithOptions(request: $_model.CreateServiceLinkedRoleForSelectDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceLinkedRoleForSelectDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceLinkedRoleForSelectDB",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceLinkedRoleForSelectDBResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceLinkedRoleForSelectDBResponse({}));
  }

  /**
   * Call this operation to create a service-linked role.
   * 
   * @param request - CreateServiceLinkedRoleForSelectDBRequest
   * @returns CreateServiceLinkedRoleForSelectDBResponse
   */
  async createServiceLinkedRoleForSelectDB(request: $_model.CreateServiceLinkedRoleForSelectDBRequest): Promise<$_model.CreateServiceLinkedRoleForSelectDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceLinkedRoleForSelectDBWithOptions(request, runtime);
  }

  /**
   * Creates a virtual cluster.
   * 
   * @remarks
   * This operation is supported only for instances that use zone-redundant storage. The following conditions must also be met:
   * - The minor engine version of the instance is 4.0.7 or later.
   * - The primary and standby clusters are in different zones.
   * 
   * @param request - CreateVirtualClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVirtualClusterResponse
   */
  async createVirtualClusterWithOptions(request: $_model.CreateVirtualClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVirtualClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activeClusterId)) {
      query["ActiveClusterId"] = request.activeClusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.standbyClusterId)) {
      query["StandbyClusterId"] = request.standbyClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVirtualCluster",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVirtualClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateVirtualClusterResponse({}));
  }

  /**
   * Creates a virtual cluster.
   * 
   * @remarks
   * This operation is supported only for instances that use zone-redundant storage. The following conditions must also be met:
   * - The minor engine version of the instance is 4.0.7 or later.
   * - The primary and standby clusters are in different zones.
   * 
   * @param request - CreateVirtualClusterRequest
   * @returns CreateVirtualClusterResponse
   */
  async createVirtualCluster(request: $_model.CreateVirtualClusterRequest): Promise<$_model.CreateVirtualClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVirtualClusterWithOptions(request, runtime);
  }

  /**
   * Deletes a cluster from an instance.
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      body["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBCluster",
      version: "2023-05-22",
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
   * Deletes a cluster from an instance.
   * 
   * @param request - DeleteDBClusterRequest
   * @returns DeleteDBClusterResponse
   */
  async deleteDBCluster(request: $_model.DeleteDBClusterRequest): Promise<$_model.DeleteDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  /**
   * Deletes the binding relationship between two clusters for mutual backup.
   * 
   * @param request - DeleteDBClusterBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBClusterBindingResponse
   */
  async deleteDBClusterBindingWithOptions(request: $_model.DeleteDBClusterBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBClusterBindingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBClusterIdBak)) {
      query["DBClusterIdBak"] = request.DBClusterIdBak;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBClusterBinding",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBClusterBindingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBClusterBindingResponse({}));
  }

  /**
   * Deletes the binding relationship between two clusters for mutual backup.
   * 
   * @param request - DeleteDBClusterBindingRequest
   * @returns DeleteDBClusterBindingResponse
   */
  async deleteDBClusterBinding(request: $_model.DeleteDBClusterBindingRequest): Promise<$_model.DeleteDBClusterBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBClusterBindingWithOptions(request, runtime);
  }

  /**
   * Deletes a specified ApsaraDB SelectDB instance.
   * 
   * @remarks
   * Subscription instances cannot be deleted.
   * 
   * @param request - DeleteDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstanceWithOptions(request: $_model.DeleteDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      body["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBInstance",
      version: "2023-05-22",
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
   * Deletes a specified ApsaraDB SelectDB instance.
   * 
   * @remarks
   * Subscription instances cannot be deleted.
   * 
   * @param request - DeleteDBInstanceRequest
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstance(request: $_model.DeleteDBInstanceRequest): Promise<$_model.DeleteDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a scheduled scaling rule.
   * 
   * @param request - DeleteElasticRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteElasticRuleResponse
   */
  async deleteElasticRuleWithOptions(request: $_model.DeleteElasticRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteElasticRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteElasticRule",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteElasticRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteElasticRuleResponse({}));
  }

  /**
   * Deletes a scheduled scaling rule.
   * 
   * @param request - DeleteElasticRuleRequest
   * @returns DeleteElasticRuleResponse
   */
  async deleteElasticRule(request: $_model.DeleteElasticRuleRequest): Promise<$_model.DeleteElasticRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteElasticRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a virtual cluster.
   * 
   * @remarks
   * > - This operation deletes only the virtual cluster. It **does not** delete the attached primary or secondary cluster.
   * 
   * @param request - DeleteVirtualClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVirtualClusterResponse
   */
  async deleteVirtualClusterWithOptions(request: $_model.DeleteVirtualClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVirtualClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVirtualCluster",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVirtualClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVirtualClusterResponse({}));
  }

  /**
   * Deletes a virtual cluster.
   * 
   * @remarks
   * > - This operation deletes only the virtual cluster. It **does not** delete the attached primary or secondary cluster.
   * 
   * @param request - DeleteVirtualClusterRequest
   * @returns DeleteVirtualClusterResponse
   */
  async deleteVirtualCluster(request: $_model.DeleteVirtualClusterRequest): Promise<$_model.DeleteVirtualClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVirtualClusterWithOptions(request, runtime);
  }

  /**
   * Retrieves all instance type information.
   * 
   * @param request - DescribeAllDBInstanceClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllDBInstanceClassResponse
   */
  async describeAllDBInstanceClassWithOptions(request: $_model.DescribeAllDBInstanceClassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAllDBInstanceClassResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAllDBInstanceClass",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAllDBInstanceClassResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAllDBInstanceClassResponse({}));
  }

  /**
   * Retrieves all instance type information.
   * 
   * @param request - DescribeAllDBInstanceClassRequest
   * @returns DescribeAllDBInstanceClassResponse
   */
  async describeAllDBInstanceClass(request: $_model.DescribeAllDBInstanceClassRequest): Promise<$_model.DescribeAllDBInstanceClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAllDBInstanceClassWithOptions(request, runtime);
  }

  /**
   * Queries the configuration information about a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeDBClusterConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterConfigResponse
   */
  async describeDBClusterConfigWithOptions(request: $_model.DescribeDBClusterConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configKey)) {
      query["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterConfig",
      version: "2023-05-22",
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
   * Queries the configuration information about a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeDBClusterConfigRequest
   * @returns DescribeDBClusterConfigResponse
   */
  async describeDBClusterConfig(request: $_model.DescribeDBClusterConfigRequest): Promise<$_model.DescribeDBClusterConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterConfigWithOptions(request, runtime);
  }

  /**
   * Queries the change logs for cluster configurations.
   * 
   * @param request - DescribeDBClusterConfigChangeLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterConfigChangeLogsResponse
   */
  async describeDBClusterConfigChangeLogsWithOptions(request: $_model.DescribeDBClusterConfigChangeLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterConfigChangeLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configKey)) {
      query["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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
      action: "DescribeDBClusterConfigChangeLogs",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterConfigChangeLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterConfigChangeLogsResponse({}));
  }

  /**
   * Queries the change logs for cluster configurations.
   * 
   * @param request - DescribeDBClusterConfigChangeLogsRequest
   * @returns DescribeDBClusterConfigChangeLogsResponse
   */
  async describeDBClusterConfigChangeLogs(request: $_model.DescribeDBClusterConfigChangeLogsRequest): Promise<$_model.DescribeDBClusterConfigChangeLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterConfigChangeLogsWithOptions(request, runtime);
  }

  /**
   * Queries the cache limits for each cluster specification.
   * 
   * @param request - DescribeDBClusterStorageLimitationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterStorageLimitationResponse
   */
  async describeDBClusterStorageLimitationWithOptions(request: $_model.DescribeDBClusterStorageLimitationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterStorageLimitationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterStorageLimitation",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterStorageLimitationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterStorageLimitationResponse({}));
  }

  /**
   * Queries the cache limits for each cluster specification.
   * 
   * @param request - DescribeDBClusterStorageLimitationRequest
   * @returns DescribeDBClusterStorageLimitationResponse
   */
  async describeDBClusterStorageLimitation(request: $_model.DescribeDBClusterStorageLimitationRequest): Promise<$_model.DescribeDBClusterStorageLimitationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterStorageLimitationWithOptions(request, runtime);
  }

  /**
   * Gets the details of a specified instance.
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceAttribute",
      version: "2023-05-22",
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
   * Gets the details of a specified instance.
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttribute(request: $_model.DescribeDBInstanceAttributeRequest): Promise<$_model.DescribeDBInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the network information of a specified ApsaraDB SelectDB instance.
   * 
   * @param request - DescribeDBInstanceNetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceNetInfoResponse
   */
  async describeDBInstanceNetInfoWithOptions(request: $_model.DescribeDBInstanceNetInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceNetInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceNetInfo",
      version: "2023-05-22",
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
   * Queries the network information of a specified ApsaraDB SelectDB instance.
   * 
   * @param request - DescribeDBInstanceNetInfoRequest
   * @returns DescribeDBInstanceNetInfoResponse
   */
  async describeDBInstanceNetInfo(request: $_model.DescribeDBInstanceNetInfoRequest): Promise<$_model.DescribeDBInstanceNetInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceNetInfoWithOptions(request, runtime);
  }

  /**
   * Queries instances.
   * 
   * @param tmpReq - DescribeDBInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstancesWithOptions(tmpReq: $_model.DescribeDBInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeDBInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.DBInstanceIds)) {
      query["DBInstanceIds"] = request.DBInstanceIds;
    }

    if (!$dara.isNull(request.DBInstanceStatus)) {
      query["DBInstanceStatus"] = request.DBInstanceStatus;
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
      action: "DescribeDBInstances",
      version: "2023-05-22",
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
   * Queries instances.
   * 
   * @param request - DescribeDBInstancesRequest
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstances(request: $_model.DescribeDBInstancesRequest): Promise<$_model.DescribeDBInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  /**
   * Queries scheduled scaling rules.
   * 
   * @param request - DescribeElasticRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticRulesResponse
   */
  async describeElasticRulesWithOptions(request: $_model.DescribeElasticRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElasticRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticRules",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElasticRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElasticRulesResponse({}));
  }

  /**
   * Queries scheduled scaling rules.
   * 
   * @param request - DescribeElasticRulesRequest
   * @returns DescribeElasticRulesResponse
   */
  async describeElasticRules(request: $_model.DescribeElasticRulesRequest): Promise<$_model.DescribeElasticRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticRulesWithOptions(request, runtime);
  }

  /**
   * Retrieves the Profile analysis for a query.
   * 
   * @remarks
   * We recommend using the visual interface to run a query and obtain its QueryID. For more information, see [query audit](https://help.aliyun.com/zh/selectdb/audit-queries).
   * >Notice: 
   * Version limitations
   * - Version 3.0 is not supported.
   * - This feature is not available for instances created before 2025-08-01. To enable this feature for an older instance, please submit a ticket.
   * 
   * @param request - DescribeProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProfileResponse
   */
  async describeProfileWithOptions(request: $_model.DescribeProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProfile",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProfileResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProfileResponse({}));
  }

  /**
   * Retrieves the Profile analysis for a query.
   * 
   * @remarks
   * We recommend using the visual interface to run a query and obtain its QueryID. For more information, see [query audit](https://help.aliyun.com/zh/selectdb/audit-queries).
   * >Notice: 
   * Version limitations
   * - Version 3.0 is not supported.
   * - This feature is not available for instances created before 2025-08-01. To enable this feature for an older instance, please submit a ticket.
   * 
   * @param request - DescribeProfileRequest
   * @returns DescribeProfileResponse
   */
  async describeProfile(request: $_model.DescribeProfileRequest): Promise<$_model.DescribeProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProfileWithOptions(request, runtime);
  }

  /**
   * Retrieves the execution plan (Explain) for a query.
   * 
   * @param request - DescribeQueryExplainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQueryExplainResponse
   */
  async describeQueryExplainWithOptions(request: $_model.DescribeQueryExplainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQueryExplainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQueryExplain",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQueryExplainResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQueryExplainResponse({}));
  }

  /**
   * Retrieves the execution plan (Explain) for a query.
   * 
   * @param request - DescribeQueryExplainRequest
   * @returns DescribeQueryExplainResponse
   */
  async describeQueryExplain(request: $_model.DescribeQueryExplainRequest): Promise<$_model.DescribeQueryExplainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQueryExplainWithOptions(request, runtime);
  }

  /**
   * Queries available regions and zones.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries available regions and zones.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the IP addresses in the whitelists of an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeSecurityIPListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityIPListResponse
   */
  async describeSecurityIPListWithOptions(request: $_model.DescribeSecurityIPListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityIPListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityIPList",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityIPListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityIPListResponse({}));
  }

  /**
   * Queries the IP addresses in the whitelists of an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeSecurityIPListRequest
   * @returns DescribeSecurityIPListResponse
   */
  async describeSecurityIPList(request: $_model.DescribeSecurityIPListRequest): Promise<$_model.DescribeSecurityIPListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityIPListWithOptions(request, runtime);
  }

  /**
   * Retrieve slow query statistics for a time range.
   * 
   * @param request - DescribeSlowQueryStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowQueryStatsResponse
   */
  async describeSlowQueryStatsWithOptions(request: $_model.DescribeSlowQueryStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowQueryStatsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.thresholdMs)) {
      query["ThresholdMs"] = request.thresholdMs;
    }

    if (!$dara.isNull(request.topN)) {
      query["TopN"] = request.topN;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowQueryStats",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlowQueryStatsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlowQueryStatsResponse({}));
  }

  /**
   * Retrieve slow query statistics for a time range.
   * 
   * @param request - DescribeSlowQueryStatsRequest
   * @returns DescribeSlowQueryStatsResponse
   */
  async describeSlowQueryStats(request: $_model.DescribeSlowQueryStatsRequest): Promise<$_model.DescribeSlowQueryStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowQueryStatsWithOptions(request, runtime);
  }

  /**
   * 获取表结构
   * 
   * @param request - DescribeTableSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableSchemaResponse
   */
  async describeTableSchemaWithOptions(request: $_model.DescribeTableSchemaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTableSchemaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.table)) {
      query["Table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTableSchema",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTableSchemaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTableSchemaResponse({}));
  }

  /**
   * 获取表结构
   * 
   * @param request - DescribeTableSchemaRequest
   * @returns DescribeTableSchemaResponse
   */
  async describeTableSchema(request: $_model.DescribeTableSchemaRequest): Promise<$_model.DescribeTableSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTableSchemaWithOptions(request, runtime);
  }

  /**
   * Queries vSwitches in a specified zone.
   * 
   * @param request - DescribeVSwitchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitchesWithOptions(request: $_model.DescribeVSwitchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVSwitchesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
      version: "2023-05-22",
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
   * Queries vSwitches in a specified zone.
   * 
   * @param request - DescribeVSwitchesRequest
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitches(request: $_model.DescribeVSwitchesRequest): Promise<$_model.DescribeVSwitchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  /**
   * Describes the available zones.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2023-05-22",
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
   * Describes the available zones.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Uses the scheduled scaling policy.
   * 
   * @param request - EnDisableScalingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnDisableScalingRulesResponse
   */
  async enDisableScalingRulesWithOptions(request: $_model.EnDisableScalingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnDisableScalingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingRulesEnable)) {
      query["ScalingRulesEnable"] = request.scalingRulesEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnDisableScalingRules",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnDisableScalingRulesResponse>(await this.callApi(params, req, runtime), new $_model.EnDisableScalingRulesResponse({}));
  }

  /**
   * Uses the scheduled scaling policy.
   * 
   * @param request - EnDisableScalingRulesRequest
   * @returns EnDisableScalingRulesResponse
   */
  async enDisableScalingRules(request: $_model.EnDisableScalingRulesRequest): Promise<$_model.EnDisableScalingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enDisableScalingRulesWithOptions(request, runtime);
  }

  /**
   * Queries pricing information for creating a new cluster in a SelectDB instance.
   * 
   * @param request - GetCreateBEClusterInquiryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCreateBEClusterInquiryResponse
   */
  async getCreateBEClusterInquiryWithOptions(request: $_model.GetCreateBEClusterInquiryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCreateBEClusterInquiryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCreateBEClusterInquiry",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCreateBEClusterInquiryResponse>(await this.callApi(params, req, runtime), new $_model.GetCreateBEClusterInquiryResponse({}));
  }

  /**
   * Queries pricing information for creating a new cluster in a SelectDB instance.
   * 
   * @param request - GetCreateBEClusterInquiryRequest
   * @returns GetCreateBEClusterInquiryResponse
   */
  async getCreateBEClusterInquiry(request: $_model.GetCreateBEClusterInquiryRequest): Promise<$_model.GetCreateBEClusterInquiryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCreateBEClusterInquiryWithOptions(request, runtime);
  }

  /**
   * Retrieves the pricing information for creating a new cluster in a specified ApsaraDB for SelectDB instance.
   * 
   * @param request - GetModifyBEClusterInquiryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModifyBEClusterInquiryResponse
   */
  async getModifyBEClusterInquiryWithOptions(request: $_model.GetModifyBEClusterInquiryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetModifyBEClusterInquiryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModifyBEClusterInquiry",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModifyBEClusterInquiryResponse>(await this.callApi(params, req, runtime), new $_model.GetModifyBEClusterInquiryResponse({}));
  }

  /**
   * Retrieves the pricing information for creating a new cluster in a specified ApsaraDB for SelectDB instance.
   * 
   * @param request - GetModifyBEClusterInquiryRequest
   * @returns GetModifyBEClusterInquiryResponse
   */
  async getModifyBEClusterInquiry(request: $_model.GetModifyBEClusterInquiryRequest): Promise<$_model.GetModifyBEClusterInquiryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getModifyBEClusterInquiryWithOptions(request, runtime);
  }

  /**
   * Modifies the cluster name of an ApsaraDB SelectDB instance.
   * 
   * @param request - ModifyBEClusterAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBEClusterAttributeResponse
   */
  async modifyBEClusterAttributeWithOptions(request: $_model.ModifyBEClusterAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBEClusterAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.instanceAttributeType)) {
      query["InstanceAttributeType"] = request.instanceAttributeType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBEClusterAttribute",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBEClusterAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBEClusterAttributeResponse({}));
  }

  /**
   * Modifies the cluster name of an ApsaraDB SelectDB instance.
   * 
   * @param request - ModifyBEClusterAttributeRequest
   * @returns ModifyBEClusterAttributeResponse
   */
  async modifyBEClusterAttribute(request: $_model.ModifyBEClusterAttributeRequest): Promise<$_model.ModifyBEClusterAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBEClusterAttributeWithOptions(request, runtime);
  }

  /**
   * Scales out or in a specified ApsaraDB for SelectDB cluster.
   * 
   * @param request - ModifyDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterResponse
   */
  async modifyDBClusterWithOptions(request: $_model.ModifyDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheSize)) {
      query["CacheSize"] = request.cacheSize;
    }

    if (!$dara.isNull(request.clusterNodeCount)) {
      query["ClusterNodeCount"] = request.clusterNodeCount;
    }

    if (!$dara.isNull(request.clusterNodeType)) {
      query["ClusterNodeType"] = request.clusterNodeType;
    }

    if (!$dara.isNull(request.DBClusterClass)) {
      query["DBClusterClass"] = request.DBClusterClass;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBCluster",
      version: "2023-05-22",
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
   * Scales out or in a specified ApsaraDB for SelectDB cluster.
   * 
   * @param request - ModifyDBClusterRequest
   * @returns ModifyDBClusterResponse
   */
  async modifyDBCluster(request: $_model.ModifyDBClusterRequest): Promise<$_model.ModifyDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the cluster configuration.
   * 
   * @param request - ModifyDBClusterConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterConfigResponse
   */
  async modifyDBClusterConfigWithOptions(request: $_model.ModifyDBClusterConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configKey)) {
      query["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.parallelOperation)) {
      query["ParallelOperation"] = request.parallelOperation;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterConfig",
      version: "2023-05-22",
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
   * Modifies the cluster configuration.
   * 
   * @param request - ModifyDBClusterConfigRequest
   * @returns ModifyDBClusterConfigResponse
   */
  async modifyDBClusterConfig(request: $_model.ModifyDBClusterConfigRequest): Promise<$_model.ModifyDBClusterConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the maintenance window or description of an ApsaraDB for SelectDB instance.
   * 
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

    if (!$dara.isNull(request.instanceAttributeType)) {
      query["InstanceAttributeType"] = request.instanceAttributeType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceAttribute",
      version: "2023-05-22",
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
   * Modifies the maintenance window or description of an ApsaraDB for SelectDB instance.
   * 
   * @param request - ModifyDBInstanceAttributeRequest
   * @returns ModifyDBInstanceAttributeResponse
   */
  async modifyDBInstanceAttribute(request: $_model.ModifyDBInstanceAttributeRequest): Promise<$_model.ModifyDBInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies a scheduled scaling rule.
   * 
   * @param request - ModifyElasticRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyElasticRuleResponse
   */
  async modifyElasticRuleWithOptions(request: $_model.ModifyElasticRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyElasticRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterClass)) {
      query["ClusterClass"] = request.clusterClass;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.elasticRuleStartTime)) {
      query["ElasticRuleStartTime"] = request.elasticRuleStartTime;
    }

    if (!$dara.isNull(request.executionPeriod)) {
      query["ExecutionPeriod"] = request.executionPeriod;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyElasticRule",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyElasticRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyElasticRuleResponse({}));
  }

  /**
   * Modifies a scheduled scaling rule.
   * 
   * @param request - ModifyElasticRuleRequest
   * @returns ModifyElasticRuleResponse
   */
  async modifyElasticRule(request: $_model.ModifyElasticRuleRequest): Promise<$_model.ModifyElasticRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyElasticRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the IP addresses in a whitelist of an ApsaraDB for SelectDB instance.
   * 
   * @param request - ModifySecurityIPListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityIPListResponse
   */
  async modifySecurityIPListWithOptions(request: $_model.ModifySecurityIPListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityIPListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityIPList",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySecurityIPListResponse>(await this.callApi(params, req, runtime), new $_model.ModifySecurityIPListResponse({}));
  }

  /**
   * Modifies the IP addresses in a whitelist of an ApsaraDB for SelectDB instance.
   * 
   * @param request - ModifySecurityIPListRequest
   * @returns ModifySecurityIPListResponse
   */
  async modifySecurityIPList(request: $_model.ModifySecurityIPListRequest): Promise<$_model.ModifySecurityIPListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityIPListWithOptions(request, runtime);
  }

  /**
   * Modifies a virtual cluster.
   * 
   * @remarks
   * - You can modify the primary cluster independently.
   * - You can modify the standby cluster independently.
   * - You can switch between the primary and standby clusters.
   * >Warning: 
   * You cannot modify both the primary and standby clusters in the same operation.
   * 
   * @param request - ModifyVirtualClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVirtualClusterResponse
   */
  async modifyVirtualClusterWithOptions(request: $_model.ModifyVirtualClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVirtualClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activeClusterId)) {
      query["ActiveClusterId"] = request.activeClusterId;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.standbyClusterId)) {
      query["StandbyClusterId"] = request.standbyClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVirtualCluster",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVirtualClusterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVirtualClusterResponse({}));
  }

  /**
   * Modifies a virtual cluster.
   * 
   * @remarks
   * - You can modify the primary cluster independently.
   * - You can modify the standby cluster independently.
   * - You can switch between the primary and standby clusters.
   * >Warning: 
   * You cannot modify both the primary and standby clusters in the same operation.
   * 
   * @param request - ModifyVirtualClusterRequest
   * @returns ModifyVirtualClusterResponse
   */
  async modifyVirtualCluster(request: $_model.ModifyVirtualClusterRequest): Promise<$_model.ModifyVirtualClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVirtualClusterWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of an ApsaraDB for SelectDB instance.
   * 
   * @param request - ReleaseInstancePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstancePublicConnectionResponse
   */
  async releaseInstancePublicConnectionWithOptions(request: $_model.ReleaseInstancePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstancePublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstancePublicConnection",
      version: "2023-05-22",
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
   * Releases the public endpoint of an ApsaraDB for SelectDB instance.
   * 
   * @param request - ReleaseInstancePublicConnectionRequest
   * @returns ReleaseInstancePublicConnectionResponse
   */
  async releaseInstancePublicConnection(request: $_model.ReleaseInstancePublicConnectionRequest): Promise<$_model.ReleaseInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Resets the password for a database account in an ApsaraDB for SelectDB instance.
   * 
   * @param request - ResetAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPasswordWithOptions(request: $_model.ResetAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAccountPasswordResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAccountPassword",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetAccountPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetAccountPasswordResponse({}));
  }

  /**
   * Resets the password for a database account in an ApsaraDB for SelectDB instance.
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: $_model.ResetAccountPasswordRequest): Promise<$_model.ResetAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Restarts the cluster of a specified ApsaraDB for SelectDB instance.
   * 
   * @param request - RestartDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDBClusterResponse
   */
  async restartDBClusterWithOptions(request: $_model.RestartDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.parallelOperation)) {
      query["ParallelOperation"] = request.parallelOperation;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      body["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartDBCluster",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartDBClusterResponse>(await this.callApi(params, req, runtime), new $_model.RestartDBClusterResponse({}));
  }

  /**
   * Restarts the cluster of a specified ApsaraDB for SelectDB instance.
   * 
   * @param request - RestartDBClusterRequest
   * @returns RestartDBClusterResponse
   */
  async restartDBCluster(request: $_model.RestartDBClusterRequest): Promise<$_model.RestartDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDBClusterWithOptions(request, runtime);
  }

  /**
   * Starts a specified ApsaraDB SelectDB cluster.
   * 
   * @param request - StartBEClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartBEClusterResponse
   */
  async startBEClusterWithOptions(request: $_model.StartBEClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartBEClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartBECluster",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartBEClusterResponse>(await this.callApi(params, req, runtime), new $_model.StartBEClusterResponse({}));
  }

  /**
   * Starts a specified ApsaraDB SelectDB cluster.
   * 
   * @param request - StartBEClusterRequest
   * @returns StartBEClusterResponse
   */
  async startBECluster(request: $_model.StartBEClusterRequest): Promise<$_model.StartBEClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startBEClusterWithOptions(request, runtime);
  }

  /**
   * Stops a specified ApsaraDB SelectDB cluster.
   * 
   * @param request - StopBEClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopBEClusterResponse
   */
  async stopBEClusterWithOptions(request: $_model.StopBEClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopBEClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopBECluster",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopBEClusterResponse>(await this.callApi(params, req, runtime), new $_model.StopBEClusterResponse({}));
  }

  /**
   * Stops a specified ApsaraDB SelectDB cluster.
   * 
   * @param request - StopBEClusterRequest
   * @returns StopBEClusterResponse
   */
  async stopBECluster(request: $_model.StopBEClusterRequest): Promise<$_model.StopBEClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopBEClusterWithOptions(request, runtime);
  }

  /**
   * Adds tags to one or more instances.
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
      version: "2023-05-22",
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
   * Adds tags to one or more instances.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from instances.
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
      version: "2023-05-22",
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
   * Removes tags from instances.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Upgrades a locally redundant instance to a zone-redundant instance.
   * 
   * @remarks
   * When an instance is upgraded to a zone-redundant architecture, its storage is also upgraded to be zone-redundant. The unit price for storage changes. For more information, see [Billing items and pricing](https://help.aliyun.com/zh/selectdb/product-overview/billing-item-new-version).
   * > Version requirements
   * >
   * > - The minor version of the instance must be 4.0.4 or later.
   * 
   * @param tmpReq - UpgradeDBInstanceDeploySchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBInstanceDeploySchemeResponse
   */
  async upgradeDBInstanceDeploySchemeWithOptions(tmpReq: $_model.UpgradeDBInstanceDeploySchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBInstanceDeploySchemeResponse> {
    tmpReq.validate();
    let request = new $_model.UpgradeDBInstanceDeploySchemeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.multiZone)) {
      request.multiZoneShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.multiZone, "MultiZone", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.multiZoneShrink)) {
      query["MultiZone"] = request.multiZoneShrink;
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
      action: "UpgradeDBInstanceDeployScheme",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeDBInstanceDeploySchemeResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeDBInstanceDeploySchemeResponse({}));
  }

  /**
   * Upgrades a locally redundant instance to a zone-redundant instance.
   * 
   * @remarks
   * When an instance is upgraded to a zone-redundant architecture, its storage is also upgraded to be zone-redundant. The unit price for storage changes. For more information, see [Billing items and pricing](https://help.aliyun.com/zh/selectdb/product-overview/billing-item-new-version).
   * > Version requirements
   * >
   * > - The minor version of the instance must be 4.0.4 or later.
   * 
   * @param request - UpgradeDBInstanceDeploySchemeRequest
   * @returns UpgradeDBInstanceDeploySchemeResponse
   */
  async upgradeDBInstanceDeployScheme(request: $_model.UpgradeDBInstanceDeploySchemeRequest): Promise<$_model.UpgradeDBInstanceDeploySchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBInstanceDeploySchemeWithOptions(request, runtime);
  }

  /**
   * Upgrades the database version of a specified ApsaraDB SelectDB instance.
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

    if (!$dara.isNull(request.parallelOperation)) {
      query["ParallelOperation"] = request.parallelOperation;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeDBInstanceEngineVersion",
      version: "2023-05-22",
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
   * Upgrades the database version of a specified ApsaraDB SelectDB instance.
   * 
   * @param request - UpgradeDBInstanceEngineVersionRequest
   * @returns UpgradeDBInstanceEngineVersionResponse
   */
  async upgradeDBInstanceEngineVersion(request: $_model.UpgradeDBInstanceEngineVersionRequest): Promise<$_model.UpgradeDBInstanceEngineVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBInstanceEngineVersionWithOptions(request, runtime);
  }

}
