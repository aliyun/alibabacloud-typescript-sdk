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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hitsdb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Changes a resource group to another.
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
      version: "2020-06-15",
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
   * Changes a resource group to another.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - CheckLdpsColumnarIndexStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckLdpsColumnarIndexStatusResponse
   */
  async checkLdpsColumnarIndexStatusWithOptions(request: $_model.CheckLdpsColumnarIndexStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckLdpsColumnarIndexStatusResponse> {
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
      action: "CheckLdpsColumnarIndexStatus",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckLdpsColumnarIndexStatusResponse>(await this.callApi(params, req, runtime), new $_model.CheckLdpsColumnarIndexStatusResponse({}));
  }

  /**
   * @param request - CheckLdpsColumnarIndexStatusRequest
   * @returns CheckLdpsColumnarIndexStatusResponse
   */
  async checkLdpsColumnarIndexStatus(request: $_model.CheckLdpsColumnarIndexStatusRequest): Promise<$_model.CheckLdpsColumnarIndexStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkLdpsColumnarIndexStatusWithOptions(request, runtime);
  }

  /**
   * 创建弹性伸缩配置
   * 
   * @param tmpReq - CreateAutoScalingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoScalingConfigResponse
   */
  async createAutoScalingConfigWithOptions(tmpReq: $_model.CreateAutoScalingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAutoScalingConfigResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAutoScalingConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.scaleRuleList)) {
      request.scaleRuleListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scaleRuleList, "ScaleRuleList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.configName)) {
      query["ConfigName"] = request.configName;
    }

    if (!$dara.isNull(request.effectiveTimeEnd)) {
      query["EffectiveTimeEnd"] = request.effectiveTimeEnd;
    }

    if (!$dara.isNull(request.effectiveTimeStart)) {
      query["EffectiveTimeStart"] = request.effectiveTimeStart;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodesMax)) {
      query["NodesMax"] = request.nodesMax;
    }

    if (!$dara.isNull(request.nodesMin)) {
      query["NodesMin"] = request.nodesMin;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scaleRuleListShrink)) {
      query["ScaleRuleList"] = request.scaleRuleListShrink;
    }

    if (!$dara.isNull(request.scaleType)) {
      query["ScaleType"] = request.scaleType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.specId)) {
      query["SpecId"] = request.specId;
    }

    if (!$dara.isNull(request.storageCapacityMax)) {
      query["StorageCapacityMax"] = request.storageCapacityMax;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAutoScalingConfig",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAutoScalingConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateAutoScalingConfigResponse({}));
  }

  /**
   * 创建弹性伸缩配置
   * 
   * @param request - CreateAutoScalingConfigRequest
   * @returns CreateAutoScalingConfigResponse
   */
  async createAutoScalingConfig(request: $_model.CreateAutoScalingConfigRequest): Promise<$_model.CreateAutoScalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAutoScalingConfigWithOptions(request, runtime);
  }

  /**
   * 创建弹性伸缩规则
   * 
   * @param request - CreateAutoScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoScalingRuleResponse
   */
  async createAutoScalingRuleWithOptions(request: $_model.CreateAutoScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAutoScalingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.observationWindow)) {
      query["ObservationWindow"] = request.observationWindow;
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

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.scaleInStep)) {
      query["ScaleInStep"] = request.scaleInStep;
    }

    if (!$dara.isNull(request.scaleOutStep)) {
      query["ScaleOutStep"] = request.scaleOutStep;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.targetMetric)) {
      query["TargetMetric"] = request.targetMetric;
    }

    if (!$dara.isNull(request.targetNodes)) {
      query["TargetNodes"] = request.targetNodes;
    }

    if (!$dara.isNull(request.thresholdLower)) {
      query["ThresholdLower"] = request.thresholdLower;
    }

    if (!$dara.isNull(request.thresholdUpper)) {
      query["ThresholdUpper"] = request.thresholdUpper;
    }

    if (!$dara.isNull(request.triggerCronExpr)) {
      query["TriggerCronExpr"] = request.triggerCronExpr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAutoScalingRule",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAutoScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateAutoScalingRuleResponse({}));
  }

  /**
   * 创建弹性伸缩规则
   * 
   * @param request - CreateAutoScalingRuleRequest
   * @returns CreateAutoScalingRuleResponse
   */
  async createAutoScalingRule(request: $_model.CreateAutoScalingRuleRequest): Promise<$_model.CreateAutoScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAutoScalingRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateLdpsComputeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLdpsComputeGroupResponse
   */
  async createLdpsComputeGroupWithOptions(request: $_model.CreateLdpsComputeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLdpsComputeGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
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

    if (!$dara.isNull(request.properties)) {
      query["Properties"] = request.properties;
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
      action: "CreateLdpsComputeGroup",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLdpsComputeGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateLdpsComputeGroupResponse({}));
  }

  /**
   * @param request - CreateLdpsComputeGroupRequest
   * @returns CreateLdpsComputeGroupResponse
   */
  async createLdpsComputeGroup(request: $_model.CreateLdpsComputeGroupRequest): Promise<$_model.CreateLdpsComputeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLdpsComputeGroupWithOptions(request, runtime);
  }

  /**
   * Creates a Lindorm instance.
   * 
   * @remarks
   * You must select at least one engine when you create a Lindorm instance. For more information about how to select the storage type and engine type when you create a Lindorm instance, see [Select engine types](https://help.aliyun.com/document_detail/181971.html) and [Select storage types](https://help.aliyun.com/document_detail/174643.html).
   * 
   * @param request - CreateLindormInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLindormInstanceResponse
   */
  async createLindormInstanceWithOptions(request: $_model.CreateLindormInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLindormInstanceResponse> {
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

    if (!$dara.isNull(request.autoRenewDuration)) {
      query["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!$dara.isNull(request.autoRenewal)) {
      query["AutoRenewal"] = request.autoRenewal;
    }

    if (!$dara.isNull(request.coldStorage)) {
      query["ColdStorage"] = request.coldStorage;
    }

    if (!$dara.isNull(request.coreSingleStorage)) {
      query["CoreSingleStorage"] = request.coreSingleStorage;
    }

    if (!$dara.isNull(request.coreSpec)) {
      query["CoreSpec"] = request.coreSpec;
    }

    if (!$dara.isNull(request.diskCategory)) {
      query["DiskCategory"] = request.diskCategory;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.filestoreNum)) {
      query["FilestoreNum"] = request.filestoreNum;
    }

    if (!$dara.isNull(request.filestoreSpec)) {
      query["FilestoreSpec"] = request.filestoreSpec;
    }

    if (!$dara.isNull(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
    }

    if (!$dara.isNull(request.instanceStorage)) {
      query["InstanceStorage"] = request.instanceStorage;
    }

    if (!$dara.isNull(request.lindormNum)) {
      query["LindormNum"] = request.lindormNum;
    }

    if (!$dara.isNull(request.lindormSpec)) {
      query["LindormSpec"] = request.lindormSpec;
    }

    if (!$dara.isNull(request.logDiskCategory)) {
      query["LogDiskCategory"] = request.logDiskCategory;
    }

    if (!$dara.isNull(request.logNum)) {
      query["LogNum"] = request.logNum;
    }

    if (!$dara.isNull(request.logSingleStorage)) {
      query["LogSingleStorage"] = request.logSingleStorage;
    }

    if (!$dara.isNull(request.logSpec)) {
      query["LogSpec"] = request.logSpec;
    }

    if (!$dara.isNull(request.ltsNum)) {
      query["LtsNum"] = request.ltsNum;
    }

    if (!$dara.isNull(request.ltsSpec)) {
      query["LtsSpec"] = request.ltsSpec;
    }

    if (!$dara.isNull(request.multiZoneCombination)) {
      query["MultiZoneCombination"] = request.multiZoneCombination;
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

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.solrNum)) {
      query["SolrNum"] = request.solrNum;
    }

    if (!$dara.isNull(request.solrSpec)) {
      query["SolrSpec"] = request.solrSpec;
    }

    if (!$dara.isNull(request.standbyVSwitchId)) {
      query["StandbyVSwitchId"] = request.standbyVSwitchId;
    }

    if (!$dara.isNull(request.standbyZoneId)) {
      query["StandbyZoneId"] = request.standbyZoneId;
    }

    if (!$dara.isNull(request.streamNum)) {
      query["StreamNum"] = request.streamNum;
    }

    if (!$dara.isNull(request.streamSpec)) {
      query["StreamSpec"] = request.streamSpec;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.tsdbNum)) {
      query["TsdbNum"] = request.tsdbNum;
    }

    if (!$dara.isNull(request.tsdbSpec)) {
      query["TsdbSpec"] = request.tsdbSpec;
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
      action: "CreateLindormInstance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLindormInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateLindormInstanceResponse({}));
  }

  /**
   * Creates a Lindorm instance.
   * 
   * @remarks
   * You must select at least one engine when you create a Lindorm instance. For more information about how to select the storage type and engine type when you create a Lindorm instance, see [Select engine types](https://help.aliyun.com/document_detail/181971.html) and [Select storage types](https://help.aliyun.com/document_detail/174643.html).
   * 
   * @param request - CreateLindormInstanceRequest
   * @returns CreateLindormInstanceResponse
   */
  async createLindormInstance(request: $_model.CreateLindormInstanceRequest): Promise<$_model.CreateLindormInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLindormInstanceWithOptions(request, runtime);
  }

  /**
   * 创建Lindorm实例
   * 
   * @param request - CreateLindormV2InstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLindormV2InstanceResponse
   */
  async createLindormV2InstanceWithOptions(request: $_model.CreateLindormV2InstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLindormV2InstanceResponse> {
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

    if (!$dara.isNull(request.autoRenewDuration)) {
      query["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!$dara.isNull(request.autoRenewal)) {
      query["AutoRenewal"] = request.autoRenewal;
    }

    if (!$dara.isNull(request.capacityStorageSize)) {
      query["CapacityStorageSize"] = request.capacityStorageSize;
    }

    if (!$dara.isNull(request.cloudStorageSize)) {
      query["CloudStorageSize"] = request.cloudStorageSize;
    }

    if (!$dara.isNull(request.cloudStorageType)) {
      query["CloudStorageType"] = request.cloudStorageType;
    }

    if (!$dara.isNull(request.clusterMode)) {
      query["ClusterMode"] = request.clusterMode;
    }

    if (!$dara.isNull(request.clusterPattern)) {
      query["ClusterPattern"] = request.clusterPattern;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.enableCapacityStorage)) {
      query["EnableCapacityStorage"] = request.enableCapacityStorage;
    }

    if (!$dara.isNull(request.engineList)) {
      query["EngineList"] = request.engineList;
    }

    if (!$dara.isNull(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
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

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.standbyVSwitchId)) {
      query["StandbyVSwitchId"] = request.standbyVSwitchId;
    }

    if (!$dara.isNull(request.standbyZoneId)) {
      query["StandbyZoneId"] = request.standbyZoneId;
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
      action: "CreateLindormV2Instance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLindormV2InstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateLindormV2InstanceResponse({}));
  }

  /**
   * 创建Lindorm实例
   * 
   * @param request - CreateLindormV2InstanceRequest
   * @returns CreateLindormV2InstanceResponse
   */
  async createLindormV2Instance(request: $_model.CreateLindormV2InstanceRequest): Promise<$_model.CreateLindormV2InstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLindormV2InstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAutoScalingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoScalingConfigResponse
   */
  async deleteAutoScalingConfigWithOptions(request: $_model.DeleteAutoScalingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAutoScalingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
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
      action: "DeleteAutoScalingConfig",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAutoScalingConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAutoScalingConfigResponse({}));
  }

  /**
   * @param request - DeleteAutoScalingConfigRequest
   * @returns DeleteAutoScalingConfigResponse
   */
  async deleteAutoScalingConfig(request: $_model.DeleteAutoScalingConfigRequest): Promise<$_model.DeleteAutoScalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoScalingConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAutoScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoScalingRuleResponse
   */
  async deleteAutoScalingRuleWithOptions(request: $_model.DeleteAutoScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAutoScalingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
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

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAutoScalingRule",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAutoScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAutoScalingRuleResponse({}));
  }

  /**
   * @param request - DeleteAutoScalingRuleRequest
   * @returns DeleteAutoScalingRuleResponse
   */
  async deleteAutoScalingRule(request: $_model.DeleteAutoScalingRuleRequest): Promise<$_model.DeleteAutoScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoScalingRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteCustomResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomResourceResponse
   */
  async deleteCustomResourceWithOptions(request: $_model.DeleteCustomResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DeleteCustomResource",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomResourceResponse({}));
  }

  /**
   * @param request - DeleteCustomResourceRequest
   * @returns DeleteCustomResourceResponse
   */
  async deleteCustomResource(request: $_model.DeleteCustomResourceRequest): Promise<$_model.DeleteCustomResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomResourceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteLdpsComputeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLdpsComputeGroupResponse
   */
  async deleteLdpsComputeGroupWithOptions(request: $_model.DeleteLdpsComputeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLdpsComputeGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
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
      action: "DeleteLdpsComputeGroup",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLdpsComputeGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLdpsComputeGroupResponse({}));
  }

  /**
   * @param request - DeleteLdpsComputeGroupRequest
   * @returns DeleteLdpsComputeGroupResponse
   */
  async deleteLdpsComputeGroup(request: $_model.DeleteLdpsComputeGroupRequest): Promise<$_model.DeleteLdpsComputeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLdpsComputeGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DeployLdpsSemiManagedComponentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployLdpsSemiManagedComponentResponse
   */
  async deployLdpsSemiManagedComponentWithOptions(request: $_model.DeployLdpsSemiManagedComponentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeployLdpsSemiManagedComponentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.componentName)) {
      query["ComponentName"] = request.componentName;
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
      action: "DeployLdpsSemiManagedComponent",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployLdpsSemiManagedComponentResponse>(await this.callApi(params, req, runtime), new $_model.DeployLdpsSemiManagedComponentResponse({}));
  }

  /**
   * @param request - DeployLdpsSemiManagedComponentRequest
   * @returns DeployLdpsSemiManagedComponentResponse
   */
  async deployLdpsSemiManagedComponent(request: $_model.DeployLdpsSemiManagedComponentRequest): Promise<$_model.DeployLdpsSemiManagedComponentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployLdpsSemiManagedComponentWithOptions(request, runtime);
  }

  /**
   * Obtains the regions supported by Lindorm.
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
      version: "2020-06-15",
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
   * Obtains the regions supported by Lindorm.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * @param request - GetAutoScalingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoScalingConfigResponse
   */
  async getAutoScalingConfigWithOptions(request: $_model.GetAutoScalingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAutoScalingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
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
      action: "GetAutoScalingConfig",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAutoScalingConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetAutoScalingConfigResponse({}));
  }

  /**
   * @param request - GetAutoScalingConfigRequest
   * @returns GetAutoScalingConfigResponse
   */
  async getAutoScalingConfig(request: $_model.GetAutoScalingConfigRequest): Promise<$_model.GetAutoScalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoScalingConfigWithOptions(request, runtime);
  }

  /**
   * @param request - GetAutoScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoScalingRuleResponse
   */
  async getAutoScalingRuleWithOptions(request: $_model.GetAutoScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAutoScalingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
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

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoScalingRule",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAutoScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetAutoScalingRuleResponse({}));
  }

  /**
   * @param request - GetAutoScalingRuleRequest
   * @returns GetAutoScalingRuleResponse
   */
  async getAutoScalingRule(request: $_model.GetAutoScalingRuleRequest): Promise<$_model.GetAutoScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoScalingRuleWithOptions(request, runtime);
  }

  /**
   * @param request - GetClientSourceIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClientSourceIpResponse
   */
  async getClientSourceIpWithOptions(request: $_model.GetClientSourceIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClientSourceIpResponse> {
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
      action: "GetClientSourceIp",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClientSourceIpResponse>(await this.callApi(params, req, runtime), new $_model.GetClientSourceIpResponse({}));
  }

  /**
   * @param request - GetClientSourceIpRequest
   * @returns GetClientSourceIpResponse
   */
  async getClientSourceIp(request: $_model.GetClientSourceIpRequest): Promise<$_model.GetClientSourceIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClientSourceIpWithOptions(request, runtime);
  }

  /**
   * @param request - GetEngineDefaultAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEngineDefaultAuthResponse
   */
  async getEngineDefaultAuthWithOptions(request: $_model.GetEngineDefaultAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEngineDefaultAuthResponse> {
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
      action: "GetEngineDefaultAuth",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEngineDefaultAuthResponse>(await this.callApi(params, req, runtime), new $_model.GetEngineDefaultAuthResponse({}));
  }

  /**
   * @param request - GetEngineDefaultAuthRequest
   * @returns GetEngineDefaultAuthResponse
   */
  async getEngineDefaultAuth(request: $_model.GetEngineDefaultAuthRequest): Promise<$_model.GetEngineDefaultAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEngineDefaultAuthWithOptions(request, runtime);
  }

  /**
   * Queries the whitelists configured for a Lindorm instance.
   * 
   * @param request - GetInstanceIpWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceIpWhiteListResponse
   */
  async getInstanceIpWhiteListWithOptions(request: $_model.GetInstanceIpWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceIpWhiteListResponse> {
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
      action: "GetInstanceIpWhiteList",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceIpWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceIpWhiteListResponse({}));
  }

  /**
   * Queries the whitelists configured for a Lindorm instance.
   * 
   * @param request - GetInstanceIpWhiteListRequest
   * @returns GetInstanceIpWhiteListResponse
   */
  async getInstanceIpWhiteList(request: $_model.GetInstanceIpWhiteListRequest): Promise<$_model.GetInstanceIpWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceIpWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - GetInstanceSecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceSecurityGroupsResponse
   */
  async getInstanceSecurityGroupsWithOptions(request: $_model.GetInstanceSecurityGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceSecurityGroupsResponse> {
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
      action: "GetInstanceSecurityGroups",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceSecurityGroupsResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceSecurityGroupsResponse({}));
  }

  /**
   * @param request - GetInstanceSecurityGroupsRequest
   * @returns GetInstanceSecurityGroupsResponse
   */
  async getInstanceSecurityGroups(request: $_model.GetInstanceSecurityGroupsRequest): Promise<$_model.GetInstanceSecurityGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceSecurityGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - GetInstanceSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceSummaryResponse
   */
  async getInstanceSummaryWithOptions(request: $_model.GetInstanceSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceSummaryResponse> {
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
      action: "GetInstanceSummary",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceSummaryResponse({}));
  }

  /**
   * @param request - GetInstanceSummaryRequest
   * @returns GetInstanceSummaryResponse
   */
  async getInstanceSummary(request: $_model.GetInstanceSummaryRequest): Promise<$_model.GetInstanceSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceSummaryWithOptions(request, runtime);
  }

  /**
   * @param request - GetLdpsComputeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLdpsComputeGroupResponse
   */
  async getLdpsComputeGroupWithOptions(request: $_model.GetLdpsComputeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLdpsComputeGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
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
      action: "GetLdpsComputeGroup",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLdpsComputeGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetLdpsComputeGroupResponse({}));
  }

  /**
   * @param request - GetLdpsComputeGroupRequest
   * @returns GetLdpsComputeGroupResponse
   */
  async getLdpsComputeGroup(request: $_model.GetLdpsComputeGroupRequest): Promise<$_model.GetLdpsComputeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLdpsComputeGroupWithOptions(request, runtime);
  }

  /**
   * @param request - GetLdpsNamespacedQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLdpsNamespacedQuotaResponse
   */
  async getLdpsNamespacedQuotaWithOptions(request: $_model.GetLdpsNamespacedQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLdpsNamespacedQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
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
      action: "GetLdpsNamespacedQuota",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLdpsNamespacedQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetLdpsNamespacedQuotaResponse({}));
  }

  /**
   * @param request - GetLdpsNamespacedQuotaRequest
   * @returns GetLdpsNamespacedQuotaResponse
   */
  async getLdpsNamespacedQuota(request: $_model.GetLdpsNamespacedQuotaRequest): Promise<$_model.GetLdpsNamespacedQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLdpsNamespacedQuotaWithOptions(request, runtime);
  }

  /**
   * @param request - GetLdpsResourceCostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLdpsResourceCostResponse
   */
  async getLdpsResourceCostWithOptions(request: $_model.GetLdpsResourceCostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLdpsResourceCostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLdpsResourceCost",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLdpsResourceCostResponse>(await this.callApi(params, req, runtime), new $_model.GetLdpsResourceCostResponse({}));
  }

  /**
   * @param request - GetLdpsResourceCostRequest
   * @returns GetLdpsResourceCostResponse
   */
  async getLdpsResourceCost(request: $_model.GetLdpsResourceCostRequest): Promise<$_model.GetLdpsResourceCostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLdpsResourceCostWithOptions(request, runtime);
  }

  /**
   * 获取Lindorm引擎配置
   * 
   * @param request - GetLindormEngineConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLindormEngineConfigResponse
   */
  async getLindormEngineConfigWithOptions(request: $_model.GetLindormEngineConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLindormEngineConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
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
      action: "GetLindormEngineConfig",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLindormEngineConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetLindormEngineConfigResponse({}));
  }

  /**
   * 获取Lindorm引擎配置
   * 
   * @param request - GetLindormEngineConfigRequest
   * @returns GetLindormEngineConfigResponse
   */
  async getLindormEngineConfig(request: $_model.GetLindormEngineConfigRequest): Promise<$_model.GetLindormEngineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLindormEngineConfigWithOptions(request, runtime);
  }

  /**
   * Queries the details of each storage type in a Lindorm instance.
   * 
   * @remarks
   * If the version of the underlying storage engine in a Lindorm cluster is 4.1.9 or later, the storage usage values returned for the LStorageUsageList parameter prevail.
   * 
   * @param request - GetLindormFsUsedDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLindormFsUsedDetailResponse
   */
  async getLindormFsUsedDetailWithOptions(request: $_model.GetLindormFsUsedDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLindormFsUsedDetailResponse> {
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
      action: "GetLindormFsUsedDetail",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLindormFsUsedDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetLindormFsUsedDetailResponse({}));
  }

  /**
   * Queries the details of each storage type in a Lindorm instance.
   * 
   * @remarks
   * If the version of the underlying storage engine in a Lindorm cluster is 4.1.9 or later, the storage usage values returned for the LStorageUsageList parameter prevail.
   * 
   * @param request - GetLindormFsUsedDetailRequest
   * @returns GetLindormFsUsedDetailResponse
   */
  async getLindormFsUsedDetail(request: $_model.GetLindormFsUsedDetailRequest): Promise<$_model.GetLindormFsUsedDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLindormFsUsedDetailWithOptions(request, runtime);
  }

  /**
   * Obtains the detailed information about a Lindorm instance, including the instance type, billing method, and VPC.
   * 
   * @param request - GetLindormInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLindormInstanceResponse
   */
  async getLindormInstanceWithOptions(request: $_model.GetLindormInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLindormInstanceResponse> {
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
      action: "GetLindormInstance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLindormInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetLindormInstanceResponse({}));
  }

  /**
   * Obtains the detailed information about a Lindorm instance, including the instance type, billing method, and VPC.
   * 
   * @param request - GetLindormInstanceRequest
   * @returns GetLindormInstanceResponse
   */
  async getLindormInstance(request: $_model.GetLindormInstanceRequest): Promise<$_model.GetLindormInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLindormInstanceWithOptions(request, runtime);
  }

  /**
   * Obtains the engine types supported by the specified Lindorm instance.
   * 
   * @param request - GetLindormInstanceEngineListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLindormInstanceEngineListResponse
   */
  async getLindormInstanceEngineListWithOptions(request: $_model.GetLindormInstanceEngineListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLindormInstanceEngineListResponse> {
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
      action: "GetLindormInstanceEngineList",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLindormInstanceEngineListResponse>(await this.callApi(params, req, runtime), new $_model.GetLindormInstanceEngineListResponse({}));
  }

  /**
   * Obtains the engine types supported by the specified Lindorm instance.
   * 
   * @param request - GetLindormInstanceEngineListRequest
   * @returns GetLindormInstanceEngineListResponse
   */
  async getLindormInstanceEngineList(request: $_model.GetLindormInstanceEngineListRequest): Promise<$_model.GetLindormInstanceEngineListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLindormInstanceEngineListWithOptions(request, runtime);
  }

  /**
   * Queries the instances that meet the specified conditions.
   * 
   * @param request - GetLindormInstanceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLindormInstanceListResponse
   */
  async getLindormInstanceListWithOptions(request: $_model.GetLindormInstanceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLindormInstanceListResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.queryStr)) {
      query["QueryStr"] = request.queryStr;
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

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.supportEngine)) {
      query["SupportEngine"] = request.supportEngine;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLindormInstanceList",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLindormInstanceListResponse>(await this.callApi(params, req, runtime), new $_model.GetLindormInstanceListResponse({}));
  }

  /**
   * Queries the instances that meet the specified conditions.
   * 
   * @param request - GetLindormInstanceListRequest
   * @returns GetLindormInstanceListResponse
   */
  async getLindormInstanceList(request: $_model.GetLindormInstanceListRequest): Promise<$_model.GetLindormInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLindormInstanceListWithOptions(request, runtime);
  }

  /**
   * 查询实例详情
   * 
   * @param request - GetLindormV2InstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLindormV2InstanceResponse
   */
  async getLindormV2InstanceWithOptions(request: $_model.GetLindormV2InstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLindormV2InstanceResponse> {
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
      action: "GetLindormV2Instance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLindormV2InstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetLindormV2InstanceResponse({}));
  }

  /**
   * 查询实例详情
   * 
   * @param request - GetLindormV2InstanceRequest
   * @returns GetLindormV2InstanceResponse
   */
  async getLindormV2Instance(request: $_model.GetLindormV2InstanceRequest): Promise<$_model.GetLindormV2InstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLindormV2InstanceWithOptions(request, runtime);
  }

  /**
   * 查询新架构实例详情
   * 
   * @param request - GetLindormV2InstanceDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLindormV2InstanceDetailsResponse
   */
  async getLindormV2InstanceDetailsWithOptions(request: $_model.GetLindormV2InstanceDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLindormV2InstanceDetailsResponse> {
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
      action: "GetLindormV2InstanceDetails",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLindormV2InstanceDetailsResponse>(await this.callApi(params, req, runtime), new $_model.GetLindormV2InstanceDetailsResponse({}));
  }

  /**
   * 查询新架构实例详情
   * 
   * @param request - GetLindormV2InstanceDetailsRequest
   * @returns GetLindormV2InstanceDetailsResponse
   */
  async getLindormV2InstanceDetails(request: $_model.GetLindormV2InstanceDetailsRequest): Promise<$_model.GetLindormV2InstanceDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLindormV2InstanceDetailsWithOptions(request, runtime);
  }

  /**
   * @param request - GetLindormV2InstanceEngineListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLindormV2InstanceEngineListResponse
   */
  async getLindormV2InstanceEngineListWithOptions(request: $_model.GetLindormV2InstanceEngineListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLindormV2InstanceEngineListResponse> {
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
      action: "GetLindormV2InstanceEngineList",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLindormV2InstanceEngineListResponse>(await this.callApi(params, req, runtime), new $_model.GetLindormV2InstanceEngineListResponse({}));
  }

  /**
   * @param request - GetLindormV2InstanceEngineListRequest
   * @returns GetLindormV2InstanceEngineListResponse
   */
  async getLindormV2InstanceEngineList(request: $_model.GetLindormV2InstanceEngineListRequest): Promise<$_model.GetLindormV2InstanceEngineListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLindormV2InstanceEngineListWithOptions(request, runtime);
  }

  /**
   * 查询新架构实例详情
   * 
   * @param request - GetLindormV2InstanceForTerraformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLindormV2InstanceForTerraformResponse
   */
  async getLindormV2InstanceForTerraformWithOptions(request: $_model.GetLindormV2InstanceForTerraformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLindormV2InstanceForTerraformResponse> {
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
      action: "GetLindormV2InstanceForTerraform",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLindormV2InstanceForTerraformResponse>(await this.callApi(params, req, runtime), new $_model.GetLindormV2InstanceForTerraformResponse({}));
  }

  /**
   * 查询新架构实例详情
   * 
   * @param request - GetLindormV2InstanceForTerraformRequest
   * @returns GetLindormV2InstanceForTerraformResponse
   */
  async getLindormV2InstanceForTerraform(request: $_model.GetLindormV2InstanceForTerraformRequest): Promise<$_model.GetLindormV2InstanceForTerraformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLindormV2InstanceForTerraformWithOptions(request, runtime);
  }

  /**
   * 查询新架构实例安全组信息
   * 
   * @param request - GetLindormV2InstanceSecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLindormV2InstanceSecurityGroupsResponse
   */
  async getLindormV2InstanceSecurityGroupsWithOptions(request: $_model.GetLindormV2InstanceSecurityGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLindormV2InstanceSecurityGroupsResponse> {
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
      action: "GetLindormV2InstanceSecurityGroups",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLindormV2InstanceSecurityGroupsResponse>(await this.callApi(params, req, runtime), new $_model.GetLindormV2InstanceSecurityGroupsResponse({}));
  }

  /**
   * 查询新架构实例安全组信息
   * 
   * @param request - GetLindormV2InstanceSecurityGroupsRequest
   * @returns GetLindormV2InstanceSecurityGroupsResponse
   */
  async getLindormV2InstanceSecurityGroups(request: $_model.GetLindormV2InstanceSecurityGroupsRequest): Promise<$_model.GetLindormV2InstanceSecurityGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLindormV2InstanceSecurityGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - GetLindormV2StorageUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLindormV2StorageUsageResponse
   */
  async getLindormV2StorageUsageWithOptions(request: $_model.GetLindormV2StorageUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLindormV2StorageUsageResponse> {
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
      action: "GetLindormV2StorageUsage",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLindormV2StorageUsageResponse>(await this.callApi(params, req, runtime), new $_model.GetLindormV2StorageUsageResponse({}));
  }

  /**
   * @param request - GetLindormV2StorageUsageRequest
   * @returns GetLindormV2StorageUsageResponse
   */
  async getLindormV2StorageUsage(request: $_model.GetLindormV2StorageUsageRequest): Promise<$_model.GetLindormV2StorageUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLindormV2StorageUsageWithOptions(request, runtime);
  }

  /**
   * 获取流引擎信息
   * 
   * @param request - GetLindormV2StreamEngineInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLindormV2StreamEngineInfoResponse
   */
  async getLindormV2StreamEngineInfoWithOptions(request: $_model.GetLindormV2StreamEngineInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLindormV2StreamEngineInfoResponse> {
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
      action: "GetLindormV2StreamEngineInfo",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLindormV2StreamEngineInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetLindormV2StreamEngineInfoResponse({}));
  }

  /**
   * 获取流引擎信息
   * 
   * @param request - GetLindormV2StreamEngineInfoRequest
   * @returns GetLindormV2StreamEngineInfoResponse
   */
  async getLindormV2StreamEngineInfo(request: $_model.GetLindormV2StreamEngineInfoRequest): Promise<$_model.GetLindormV2StreamEngineInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLindormV2StreamEngineInfoWithOptions(request, runtime);
  }

  /**
   * 查询弹性伸缩配置
   * 
   * @param tmpReq - ListAutoScalingConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAutoScalingConfigsResponse
   */
  async listAutoScalingConfigsWithOptions(tmpReq: $_model.ListAutoScalingConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAutoScalingConfigsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAutoScalingConfigsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.scaleTypes)) {
      request.scaleTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scaleTypes, "ScaleTypes", "json");
    }

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

    if (!$dara.isNull(request.scaleTypesShrink)) {
      query["ScaleTypes"] = request.scaleTypesShrink;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAutoScalingConfigs",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAutoScalingConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListAutoScalingConfigsResponse({}));
  }

  /**
   * 查询弹性伸缩配置
   * 
   * @param request - ListAutoScalingConfigsRequest
   * @returns ListAutoScalingConfigsResponse
   */
  async listAutoScalingConfigs(request: $_model.ListAutoScalingConfigsRequest): Promise<$_model.ListAutoScalingConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAutoScalingConfigsWithOptions(request, runtime);
  }

  /**
   * 查询伸缩记录
   * 
   * @param tmpReq - ListAutoScalingRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAutoScalingRecordsResponse
   */
  async listAutoScalingRecordsWithOptions(tmpReq: $_model.ListAutoScalingRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAutoScalingRecordsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAutoScalingRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.scaleTypes)) {
      request.scaleTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scaleTypes, "ScaleTypes", "json");
    }

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

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
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

    if (!$dara.isNull(request.scaleTypesShrink)) {
      query["ScaleTypes"] = request.scaleTypesShrink;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAutoScalingRecords",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAutoScalingRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListAutoScalingRecordsResponse({}));
  }

  /**
   * 查询伸缩记录
   * 
   * @param request - ListAutoScalingRecordsRequest
   * @returns ListAutoScalingRecordsResponse
   */
  async listAutoScalingRecords(request: $_model.ListAutoScalingRecordsRequest): Promise<$_model.ListAutoScalingRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAutoScalingRecordsWithOptions(request, runtime);
  }

  /**
   * @param request - ListAutoScalingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAutoScalingRulesResponse
   */
  async listAutoScalingRulesWithOptions(request: $_model.ListAutoScalingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAutoScalingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
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
      action: "ListAutoScalingRules",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAutoScalingRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListAutoScalingRulesResponse({}));
  }

  /**
   * @param request - ListAutoScalingRulesRequest
   * @returns ListAutoScalingRulesResponse
   */
  async listAutoScalingRules(request: $_model.ListAutoScalingRulesRequest): Promise<$_model.ListAutoScalingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAutoScalingRulesWithOptions(request, runtime);
  }

  /**
   * 获取计算引擎资源组列表
   * 
   * @param request - ListLdpsComputeGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLdpsComputeGroupsResponse
   */
  async listLdpsComputeGroupsWithOptions(request: $_model.ListLdpsComputeGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLdpsComputeGroupsResponse> {
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
      action: "ListLdpsComputeGroups",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLdpsComputeGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListLdpsComputeGroupsResponse({}));
  }

  /**
   * 获取计算引擎资源组列表
   * 
   * @param request - ListLdpsComputeGroupsRequest
   * @returns ListLdpsComputeGroupsResponse
   */
  async listLdpsComputeGroups(request: $_model.ListLdpsComputeGroupsRequest): Promise<$_model.ListLdpsComputeGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLdpsComputeGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the tags associated with the specified Lindorm instance.
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2020-06-15",
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
   * Queries the tags associated with the specified Lindorm instance.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 单可用区迁移多可用区基础版
   * 
   * @param request - MigrateSingleZoneToMultiZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateSingleZoneToMultiZoneResponse
   */
  async migrateSingleZoneToMultiZoneWithOptions(request: $_model.MigrateSingleZoneToMultiZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateSingleZoneToMultiZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.arbitraryVSwitchId)) {
      query["ArbitraryVSwitchId"] = request.arbitraryVSwitchId;
    }

    if (!$dara.isNull(request.arbitraryZoneId)) {
      query["ArbitraryZoneId"] = request.arbitraryZoneId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
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

    if (!$dara.isNull(request.standbyVSwitchId)) {
      query["StandbyVSwitchId"] = request.standbyVSwitchId;
    }

    if (!$dara.isNull(request.standbyZoneId)) {
      query["StandbyZoneId"] = request.standbyZoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MigrateSingleZoneToMultiZone",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateSingleZoneToMultiZoneResponse>(await this.callApi(params, req, runtime), new $_model.MigrateSingleZoneToMultiZoneResponse({}));
  }

  /**
   * 单可用区迁移多可用区基础版
   * 
   * @param request - MigrateSingleZoneToMultiZoneRequest
   * @returns MigrateSingleZoneToMultiZoneResponse
   */
  async migrateSingleZoneToMultiZone(request: $_model.MigrateSingleZoneToMultiZoneRequest): Promise<$_model.MigrateSingleZoneToMultiZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.migrateSingleZoneToMultiZoneWithOptions(request, runtime);
  }

  /**
   * 修改弹性伸缩配置
   * 
   * @param tmpReq - ModifyAutoScalingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAutoScalingConfigResponse
   */
  async modifyAutoScalingConfigWithOptions(tmpReq: $_model.ModifyAutoScalingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAutoScalingConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyAutoScalingConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.scaleRuleList)) {
      request.scaleRuleListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scaleRuleList, "ScaleRuleList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.configName)) {
      query["ConfigName"] = request.configName;
    }

    if (!$dara.isNull(request.effectiveTimeEnd)) {
      query["EffectiveTimeEnd"] = request.effectiveTimeEnd;
    }

    if (!$dara.isNull(request.effectiveTimeStart)) {
      query["EffectiveTimeStart"] = request.effectiveTimeStart;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodesMax)) {
      query["NodesMax"] = request.nodesMax;
    }

    if (!$dara.isNull(request.nodesMin)) {
      query["NodesMin"] = request.nodesMin;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scaleRuleListShrink)) {
      query["ScaleRuleList"] = request.scaleRuleListShrink;
    }

    if (!$dara.isNull(request.scaleType)) {
      query["ScaleType"] = request.scaleType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.specId)) {
      query["SpecId"] = request.specId;
    }

    if (!$dara.isNull(request.storageCapacityMax)) {
      query["StorageCapacityMax"] = request.storageCapacityMax;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAutoScalingConfig",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAutoScalingConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAutoScalingConfigResponse({}));
  }

  /**
   * 修改弹性伸缩配置
   * 
   * @param request - ModifyAutoScalingConfigRequest
   * @returns ModifyAutoScalingConfigResponse
   */
  async modifyAutoScalingConfig(request: $_model.ModifyAutoScalingConfigRequest): Promise<$_model.ModifyAutoScalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAutoScalingConfigWithOptions(request, runtime);
  }

  /**
   * 修改弹性伸缩规则
   * 
   * @param request - ModifyAutoScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAutoScalingRuleResponse
   */
  async modifyAutoScalingRuleWithOptions(request: $_model.ModifyAutoScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAutoScalingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.observationWindow)) {
      query["ObservationWindow"] = request.observationWindow;
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

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.scaleInStep)) {
      query["ScaleInStep"] = request.scaleInStep;
    }

    if (!$dara.isNull(request.scaleOutStep)) {
      query["ScaleOutStep"] = request.scaleOutStep;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.targetMetric)) {
      query["TargetMetric"] = request.targetMetric;
    }

    if (!$dara.isNull(request.targetNodes)) {
      query["TargetNodes"] = request.targetNodes;
    }

    if (!$dara.isNull(request.thresholdLower)) {
      query["ThresholdLower"] = request.thresholdLower;
    }

    if (!$dara.isNull(request.thresholdUpper)) {
      query["ThresholdUpper"] = request.thresholdUpper;
    }

    if (!$dara.isNull(request.triggerCronExpr)) {
      query["TriggerCronExpr"] = request.triggerCronExpr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAutoScalingRule",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAutoScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAutoScalingRuleResponse({}));
  }

  /**
   * 修改弹性伸缩规则
   * 
   * @param request - ModifyAutoScalingRuleRequest
   * @returns ModifyAutoScalingRuleResponse
   */
  async modifyAutoScalingRule(request: $_model.ModifyAutoScalingRuleRequest): Promise<$_model.ModifyAutoScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAutoScalingRuleWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of the specified Lindorm instance.
   * 
   * @remarks
   * You can call this operation to change the billing method of an instance to subscription or pay-as-you-go.
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/en/pricing-calculator?spm=a2c63.p38356.0.0.2b024c2adcHeXL&_p_lc=1#/commodity/hitsdb_lindormpre_public_intl) of Lindorm. Published on only international site (alibabacloud.com).
   * 
   * @param request - ModifyInstancePayTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstancePayTypeResponse
   */
  async modifyInstancePayTypeWithOptions(request: $_model.ModifyInstancePayTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstancePayTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
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

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstancePayType",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstancePayTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstancePayTypeResponse({}));
  }

  /**
   * Changes the billing method of the specified Lindorm instance.
   * 
   * @remarks
   * You can call this operation to change the billing method of an instance to subscription or pay-as-you-go.
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/en/pricing-calculator?spm=a2c63.p38356.0.0.2b024c2adcHeXL&_p_lc=1#/commodity/hitsdb_lindormpre_public_intl) of Lindorm. Published on only international site (alibabacloud.com).
   * 
   * @param request - ModifyInstancePayTypeRequest
   * @returns ModifyInstancePayTypeResponse
   */
  async modifyInstancePayType(request: $_model.ModifyInstancePayTypeRequest): Promise<$_model.ModifyInstancePayTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstancePayTypeWithOptions(request, runtime);
  }

  /**
   * 变配实例
   * 
   * @param request - ModifyLindormV2InstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLindormV2InstanceResponse
   */
  async modifyLindormV2InstanceWithOptions(request: $_model.ModifyLindormV2InstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLindormV2InstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudStorageSize)) {
      query["CloudStorageSize"] = request.cloudStorageSize;
    }

    if (!$dara.isNull(request.cloudStorageType)) {
      query["CloudStorageType"] = request.cloudStorageType;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupList)) {
      query["NodeGroupList"] = request.nodeGroupList;
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

    if (!$dara.isNull(request.upgradeType)) {
      query["UpgradeType"] = request.upgradeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLindormV2Instance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLindormV2InstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLindormV2InstanceResponse({}));
  }

  /**
   * 变配实例
   * 
   * @param request - ModifyLindormV2InstanceRequest
   * @returns ModifyLindormV2InstanceResponse
   */
  async modifyLindormV2Instance(request: $_model.ModifyLindormV2InstanceRequest): Promise<$_model.ModifyLindormV2InstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLindormV2InstanceWithOptions(request, runtime);
  }

  /**
   * 新架构修改安全组接口
   * 
   * @param request - ModifyLindormV2InstanceSecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLindormV2InstanceSecurityGroupsResponse
   */
  async modifyLindormV2InstanceSecurityGroupsWithOptions(request: $_model.ModifyLindormV2InstanceSecurityGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLindormV2InstanceSecurityGroupsResponse> {
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

    if (!$dara.isNull(request.securityGroups)) {
      query["SecurityGroups"] = request.securityGroups;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLindormV2InstanceSecurityGroups",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLindormV2InstanceSecurityGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLindormV2InstanceSecurityGroupsResponse({}));
  }

  /**
   * 新架构修改安全组接口
   * 
   * @param request - ModifyLindormV2InstanceSecurityGroupsRequest
   * @returns ModifyLindormV2InstanceSecurityGroupsResponse
   */
  async modifyLindormV2InstanceSecurityGroups(request: $_model.ModifyLindormV2InstanceSecurityGroupsRequest): Promise<$_model.ModifyLindormV2InstanceSecurityGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLindormV2InstanceSecurityGroupsWithOptions(request, runtime);
  }

  /**
   * 修改Lindorm新版实例白名单
   * 
   * @param request - ModifyLindormV2WhiteIpListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLindormV2WhiteIpListResponse
   */
  async modifyLindormV2WhiteIpListWithOptions(request: $_model.ModifyLindormV2WhiteIpListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLindormV2WhiteIpListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteGroup)) {
      query["DeleteGroup"] = request.deleteGroup;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.whiteIpList)) {
      query["WhiteIpList"] = request.whiteIpList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLindormV2WhiteIpList",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLindormV2WhiteIpListResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLindormV2WhiteIpListResponse({}));
  }

  /**
   * 修改Lindorm新版实例白名单
   * 
   * @param request - ModifyLindormV2WhiteIpListRequest
   * @returns ModifyLindormV2WhiteIpListResponse
   */
  async modifyLindormV2WhiteIpList(request: $_model.ModifyLindormV2WhiteIpListRequest): Promise<$_model.ModifyLindormV2WhiteIpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLindormV2WhiteIpListWithOptions(request, runtime);
  }

  /**
   * 开通计算引擎
   * 
   * @param request - OpenComputeEngineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenComputeEngineResponse
   */
  async openComputeEngineWithOptions(request: $_model.OpenComputeEngineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenComputeEngineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cpuLimit)) {
      query["CpuLimit"] = request.cpuLimit;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memoryLimit)) {
      query["MemoryLimit"] = request.memoryLimit;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

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
      action: "OpenComputeEngine",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenComputeEngineResponse>(await this.callApi(params, req, runtime), new $_model.OpenComputeEngineResponse({}));
  }

  /**
   * 开通计算引擎
   * 
   * @param request - OpenComputeEngineRequest
   * @returns OpenComputeEngineResponse
   */
  async openComputeEngine(request: $_model.OpenComputeEngineRequest): Promise<$_model.OpenComputeEngineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openComputeEngineWithOptions(request, runtime);
  }

  /**
   * 开通计算引擎前置校验
   * 
   * @param request - OpenComputePreCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenComputePreCheckResponse
   */
  async openComputePreCheckWithOptions(request: $_model.OpenComputePreCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenComputePreCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cpuLimit)) {
      query["CpuLimit"] = request.cpuLimit;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memoryLimit)) {
      query["MemoryLimit"] = request.memoryLimit;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

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
      action: "OpenComputePreCheck",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenComputePreCheckResponse>(await this.callApi(params, req, runtime), new $_model.OpenComputePreCheckResponse({}));
  }

  /**
   * 开通计算引擎前置校验
   * 
   * @param request - OpenComputePreCheckRequest
   * @returns OpenComputePreCheckResponse
   */
  async openComputePreCheck(request: $_model.OpenComputePreCheckRequest): Promise<$_model.OpenComputePreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openComputePreCheckWithOptions(request, runtime);
  }

  /**
   * 开通列存索引
   * 
   * @param request - OpenLdpsColumnarIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenLdpsColumnarIndexResponse
   */
  async openLdpsColumnarIndexWithOptions(request: $_model.OpenLdpsColumnarIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenLdpsColumnarIndexResponse> {
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
      action: "OpenLdpsColumnarIndex",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenLdpsColumnarIndexResponse>(await this.callApi(params, req, runtime), new $_model.OpenLdpsColumnarIndexResponse({}));
  }

  /**
   * 开通列存索引
   * 
   * @param request - OpenLdpsColumnarIndexRequest
   * @returns OpenLdpsColumnarIndexResponse
   */
  async openLdpsColumnarIndex(request: $_model.OpenLdpsColumnarIndexRequest): Promise<$_model.OpenLdpsColumnarIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openLdpsColumnarIndexWithOptions(request, runtime);
  }

  /**
   * Releases a Lindorm instance.
   * 
   * @param request - ReleaseLindormInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseLindormInstanceResponse
   */
  async releaseLindormInstanceWithOptions(request: $_model.ReleaseLindormInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseLindormInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.immediately)) {
      query["Immediately"] = request.immediately;
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
      action: "ReleaseLindormInstance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseLindormInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseLindormInstanceResponse({}));
  }

  /**
   * Releases a Lindorm instance.
   * 
   * @param request - ReleaseLindormInstanceRequest
   * @returns ReleaseLindormInstanceResponse
   */
  async releaseLindormInstance(request: $_model.ReleaseLindormInstanceRequest): Promise<$_model.ReleaseLindormInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseLindormInstanceWithOptions(request, runtime);
  }

  /**
   * 释放实例
   * 
   * @param request - ReleaseLindormV2InstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseLindormV2InstanceResponse
   */
  async releaseLindormV2InstanceWithOptions(request: $_model.ReleaseLindormV2InstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseLindormV2InstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.immediately)) {
      query["Immediately"] = request.immediately;
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
      action: "ReleaseLindormV2Instance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseLindormV2InstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseLindormV2InstanceResponse({}));
  }

  /**
   * 释放实例
   * 
   * @param request - ReleaseLindormV2InstanceRequest
   * @returns ReleaseLindormV2InstanceResponse
   */
  async releaseLindormV2Instance(request: $_model.ReleaseLindormV2InstanceRequest): Promise<$_model.ReleaseLindormV2InstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseLindormV2InstanceWithOptions(request, runtime);
  }

  /**
   * Renews a subscription Lindorm instance.
   * 
   * @remarks
   * You can call this operation to renew a subscription Lindorm instance for 1 to 9 months or 1 to 3 years.
   * Before you call this operation, make sure that you fully understand the billing methods and pricing of Lindorm.
   * 
   * @param request - RenewLindormInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewLindormInstanceResponse
   */
  async renewLindormInstanceWithOptions(request: $_model.RenewLindormInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewLindormInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
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

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
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
      action: "RenewLindormInstance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewLindormInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewLindormInstanceResponse({}));
  }

  /**
   * Renews a subscription Lindorm instance.
   * 
   * @remarks
   * You can call this operation to renew a subscription Lindorm instance for 1 to 9 months or 1 to 3 years.
   * Before you call this operation, make sure that you fully understand the billing methods and pricing of Lindorm.
   * 
   * @param request - RenewLindormInstanceRequest
   * @returns RenewLindormInstanceResponse
   */
  async renewLindormInstance(request: $_model.RenewLindormInstanceRequest): Promise<$_model.RenewLindormInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewLindormInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - RestartLdpsComputeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartLdpsComputeGroupResponse
   */
  async restartLdpsComputeGroupWithOptions(request: $_model.RestartLdpsComputeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartLdpsComputeGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
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
      action: "RestartLdpsComputeGroup",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartLdpsComputeGroupResponse>(await this.callApi(params, req, runtime), new $_model.RestartLdpsComputeGroupResponse({}));
  }

  /**
   * @param request - RestartLdpsComputeGroupRequest
   * @returns RestartLdpsComputeGroupResponse
   */
  async restartLdpsComputeGroup(request: $_model.RestartLdpsComputeGroupRequest): Promise<$_model.RestartLdpsComputeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartLdpsComputeGroupWithOptions(request, runtime);
  }

  /**
   * @param request - SetDefaultOlapComputeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultOlapComputeGroupResponse
   */
  async setDefaultOlapComputeGroupWithOptions(request: $_model.SetDefaultOlapComputeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultOlapComputeGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isDefault)) {
      query["IsDefault"] = request.isDefault;
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
      action: "SetDefaultOlapComputeGroup",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultOlapComputeGroupResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultOlapComputeGroupResponse({}));
  }

  /**
   * @param request - SetDefaultOlapComputeGroupRequest
   * @returns SetDefaultOlapComputeGroupResponse
   */
  async setDefaultOlapComputeGroup(request: $_model.SetDefaultOlapComputeGroupRequest): Promise<$_model.SetDefaultOlapComputeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultOlapComputeGroupWithOptions(request, runtime);
  }

  /**
   * Enables or disables the MySQL compatibility feature for a Lindorm instance.
   * 
   * @remarks
   * Prerequisites
   * *   The LindormTable version of your instance is 2.6.0 or later.
   * *   The LindormTable of your instance supports LindormSQL V3. The value of the EnableLsqlVersionV3 parameter in the response of the GetLindormInstance operation is true for Lindorm instances purchased after Oct 24, 2023, which indicates that LindormSQL is supported by these instances by default. If you want to enable LindormSQL for instances purchased before Oct 24, 2023, contact the on-duty technical support.
   * You can enable the MySQL compatibility feature for a Lindorm instance only when the instance meets the preceding requirements.
   * 
   * @param request - SwitchLSQLV3MySQLServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchLSQLV3MySQLServiceResponse
   */
  async switchLSQLV3MySQLServiceWithOptions(request: $_model.SwitchLSQLV3MySQLServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchLSQLV3MySQLServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
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
      action: "SwitchLSQLV3MySQLService",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchLSQLV3MySQLServiceResponse>(await this.callApi(params, req, runtime), new $_model.SwitchLSQLV3MySQLServiceResponse({}));
  }

  /**
   * Enables or disables the MySQL compatibility feature for a Lindorm instance.
   * 
   * @remarks
   * Prerequisites
   * *   The LindormTable version of your instance is 2.6.0 or later.
   * *   The LindormTable of your instance supports LindormSQL V3. The value of the EnableLsqlVersionV3 parameter in the response of the GetLindormInstance operation is true for Lindorm instances purchased after Oct 24, 2023, which indicates that LindormSQL is supported by these instances by default. If you want to enable LindormSQL for instances purchased before Oct 24, 2023, contact the on-duty technical support.
   * You can enable the MySQL compatibility feature for a Lindorm instance only when the instance meets the preceding requirements.
   * 
   * @param request - SwitchLSQLV3MySQLServiceRequest
   * @returns SwitchLSQLV3MySQLServiceResponse
   */
  async switchLSQLV3MySQLService(request: $_model.SwitchLSQLV3MySQLServiceRequest): Promise<$_model.SwitchLSQLV3MySQLServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchLSQLV3MySQLServiceWithOptions(request, runtime);
  }

  /**
   * Associates tags with a single or multiple Lindorm instances.
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2020-06-15",
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
   * Associates tags with a single or multiple Lindorm instances.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from a Lindorm instance.
   * 
   * @remarks
   * If a tag is not added to any Lindorm instance, it is deleted.
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2020-06-15",
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
   * Removes tags from a Lindorm instance.
   * 
   * @remarks
   * If a tag is not added to any Lindorm instance, it is deleted.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Configures an IP address whitelist for a Lindorm instance.
   * 
   * @param request - UpdateInstanceIpWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceIpWhiteListResponse
   */
  async updateInstanceIpWhiteListWithOptions(request: $_model.UpdateInstanceIpWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceIpWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.delete)) {
      query["Delete"] = request.delete;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
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

    if (!$dara.isNull(request.securityIpList)) {
      query["SecurityIpList"] = request.securityIpList;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceIpWhiteList",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceIpWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceIpWhiteListResponse({}));
  }

  /**
   * Configures an IP address whitelist for a Lindorm instance.
   * 
   * @param request - UpdateInstanceIpWhiteListRequest
   * @returns UpdateInstanceIpWhiteListResponse
   */
  async updateInstanceIpWhiteList(request: $_model.UpdateInstanceIpWhiteListRequest): Promise<$_model.UpdateInstanceIpWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceIpWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateInstanceSecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceSecurityGroupsResponse
   */
  async updateInstanceSecurityGroupsWithOptions(request: $_model.UpdateInstanceSecurityGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceSecurityGroupsResponse> {
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

    if (!$dara.isNull(request.securityGroups)) {
      query["SecurityGroups"] = request.securityGroups;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceSecurityGroups",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceSecurityGroupsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceSecurityGroupsResponse({}));
  }

  /**
   * @param request - UpdateInstanceSecurityGroupsRequest
   * @returns UpdateInstanceSecurityGroupsResponse
   */
  async updateInstanceSecurityGroups(request: $_model.UpdateInstanceSecurityGroupsRequest): Promise<$_model.UpdateInstanceSecurityGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceSecurityGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateLdpsComputeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLdpsComputeGroupResponse
   */
  async updateLdpsComputeGroupWithOptions(request: $_model.UpdateLdpsComputeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLdpsComputeGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
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

    if (!$dara.isNull(request.properties)) {
      query["Properties"] = request.properties;
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
      action: "UpdateLdpsComputeGroup",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLdpsComputeGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLdpsComputeGroupResponse({}));
  }

  /**
   * @param request - UpdateLdpsComputeGroupRequest
   * @returns UpdateLdpsComputeGroupResponse
   */
  async updateLdpsComputeGroup(request: $_model.UpdateLdpsComputeGroupRequest): Promise<$_model.UpdateLdpsComputeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLdpsComputeGroupWithOptions(request, runtime);
  }

  /**
   * 更新实例名称或删除保护
   * 
   * @param request - UpdateLindormInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLindormInstanceAttributeResponse
   */
  async updateLindormInstanceAttributeWithOptions(request: $_model.UpdateLindormInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLindormInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
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
      action: "UpdateLindormInstanceAttribute",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLindormInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLindormInstanceAttributeResponse({}));
  }

  /**
   * 更新实例名称或删除保护
   * 
   * @param request - UpdateLindormInstanceAttributeRequest
   * @returns UpdateLindormInstanceAttributeResponse
   */
  async updateLindormInstanceAttribute(request: $_model.UpdateLindormInstanceAttributeRequest): Promise<$_model.UpdateLindormInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLindormInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 更新LindormV2Instance
   * 
   * @param request - UpdateLindormV2InstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLindormV2InstanceResponse
   */
  async updateLindormV2InstanceWithOptions(request: $_model.UpdateLindormV2InstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLindormV2InstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.capacityStorageSize)) {
      query["CapacityStorageSize"] = request.capacityStorageSize;
    }

    if (!$dara.isNull(request.cloudStorageSize)) {
      query["CloudStorageSize"] = request.cloudStorageSize;
    }

    if (!$dara.isNull(request.cloudStorageType)) {
      query["CloudStorageType"] = request.cloudStorageType;
    }

    if (!$dara.isNull(request.enableCapacityStorage)) {
      query["EnableCapacityStorage"] = request.enableCapacityStorage;
    }

    if (!$dara.isNull(request.engineList)) {
      query["EngineList"] = request.engineList;
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
      action: "UpdateLindormV2Instance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLindormV2InstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLindormV2InstanceResponse({}));
  }

  /**
   * 更新LindormV2Instance
   * 
   * @param request - UpdateLindormV2InstanceRequest
   * @returns UpdateLindormV2InstanceResponse
   */
  async updateLindormV2Instance(request: $_model.UpdateLindormV2InstanceRequest): Promise<$_model.UpdateLindormV2InstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLindormV2InstanceWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateLindormV2InstanceParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLindormV2InstanceParameterResponse
   */
  async updateLindormV2InstanceParameterWithOptions(request: $_model.UpdateLindormV2InstanceParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLindormV2InstanceParameterResponse> {
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

    if (!$dara.isNull(request.parameterKey)) {
      query["ParameterKey"] = request.parameterKey;
    }

    if (!$dara.isNull(request.parameterValue)) {
      query["ParameterValue"] = request.parameterValue;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.updateType)) {
      query["UpdateType"] = request.updateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLindormV2InstanceParameter",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLindormV2InstanceParameterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLindormV2InstanceParameterResponse({}));
  }

  /**
   * @param request - UpdateLindormV2InstanceParameterRequest
   * @returns UpdateLindormV2InstanceParameterResponse
   */
  async updateLindormV2InstanceParameter(request: $_model.UpdateLindormV2InstanceParameterRequest): Promise<$_model.UpdateLindormV2InstanceParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLindormV2InstanceParameterWithOptions(request, runtime);
  }

  /**
   * 修改Lindorm新版实例白名单分组列表
   * 
   * @param request - UpdateLindormV2WhiteIpListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLindormV2WhiteIpListResponse
   */
  async updateLindormV2WhiteIpListWithOptions(request: $_model.UpdateLindormV2WhiteIpListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLindormV2WhiteIpListResponse> {
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

    if (!$dara.isNull(request.whiteIpGroupList)) {
      query["WhiteIpGroupList"] = request.whiteIpGroupList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLindormV2WhiteIpList",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLindormV2WhiteIpListResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLindormV2WhiteIpListResponse({}));
  }

  /**
   * 修改Lindorm新版实例白名单分组列表
   * 
   * @param request - UpdateLindormV2WhiteIpListRequest
   * @returns UpdateLindormV2WhiteIpListResponse
   */
  async updateLindormV2WhiteIpList(request: $_model.UpdateLindormV2WhiteIpListRequest): Promise<$_model.UpdateLindormV2WhiteIpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLindormV2WhiteIpListWithOptions(request, runtime);
  }

  /**
   * Upgrades, scales up, or enable cold storage for a Lindorm instance.
   * 
   * @remarks
   * For more information about how to select the storage type and engine type when you create a Lindorm instance, see [Select engine typpes](https://help.aliyun.com/document_detail/181971.html) and [Select storage types](https://help.aliyun.com/document_detail/174643.html).
   * 
   * @param request - UpgradeLindormInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeLindormInstanceResponse
   */
  async upgradeLindormInstanceWithOptions(request: $_model.UpgradeLindormInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeLindormInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterStorage)) {
      query["ClusterStorage"] = request.clusterStorage;
    }

    if (!$dara.isNull(request.coldStorage)) {
      query["ColdStorage"] = request.coldStorage;
    }

    if (!$dara.isNull(request.coreSingleStorage)) {
      query["CoreSingleStorage"] = request.coreSingleStorage;
    }

    if (!$dara.isNull(request.filestoreNum)) {
      query["FilestoreNum"] = request.filestoreNum;
    }

    if (!$dara.isNull(request.filestoreSpec)) {
      query["FilestoreSpec"] = request.filestoreSpec;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lindormNum)) {
      query["LindormNum"] = request.lindormNum;
    }

    if (!$dara.isNull(request.lindormSpec)) {
      query["LindormSpec"] = request.lindormSpec;
    }

    if (!$dara.isNull(request.logNum)) {
      query["LogNum"] = request.logNum;
    }

    if (!$dara.isNull(request.logSingleStorage)) {
      query["LogSingleStorage"] = request.logSingleStorage;
    }

    if (!$dara.isNull(request.logSpec)) {
      query["LogSpec"] = request.logSpec;
    }

    if (!$dara.isNull(request.ltsCoreNum)) {
      query["LtsCoreNum"] = request.ltsCoreNum;
    }

    if (!$dara.isNull(request.ltsCoreSpec)) {
      query["LtsCoreSpec"] = request.ltsCoreSpec;
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

    if (!$dara.isNull(request.solrNum)) {
      query["SolrNum"] = request.solrNum;
    }

    if (!$dara.isNull(request.solrSpec)) {
      query["SolrSpec"] = request.solrSpec;
    }

    if (!$dara.isNull(request.streamNum)) {
      query["StreamNum"] = request.streamNum;
    }

    if (!$dara.isNull(request.streamSpec)) {
      query["StreamSpec"] = request.streamSpec;
    }

    if (!$dara.isNull(request.tsdbNum)) {
      query["TsdbNum"] = request.tsdbNum;
    }

    if (!$dara.isNull(request.tsdbSpec)) {
      query["TsdbSpec"] = request.tsdbSpec;
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
      action: "UpgradeLindormInstance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeLindormInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeLindormInstanceResponse({}));
  }

  /**
   * Upgrades, scales up, or enable cold storage for a Lindorm instance.
   * 
   * @remarks
   * For more information about how to select the storage type and engine type when you create a Lindorm instance, see [Select engine typpes](https://help.aliyun.com/document_detail/181971.html) and [Select storage types](https://help.aliyun.com/document_detail/174643.html).
   * 
   * @param request - UpgradeLindormInstanceRequest
   * @returns UpgradeLindormInstanceResponse
   */
  async upgradeLindormInstance(request: $_model.UpgradeLindormInstanceRequest): Promise<$_model.UpgradeLindormInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeLindormInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - UpgradeLindormV2StreamEngineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeLindormV2StreamEngineResponse
   */
  async upgradeLindormV2StreamEngineWithOptions(request: $_model.UpgradeLindormV2StreamEngineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeLindormV2StreamEngineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customConfig)) {
      query["CustomConfig"] = request.customConfig;
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

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.spec)) {
      query["Spec"] = request.spec;
    }

    if (!$dara.isNull(request.specId)) {
      query["SpecId"] = request.specId;
    }

    if (!$dara.isNull(request.upgradeType)) {
      query["UpgradeType"] = request.upgradeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeLindormV2StreamEngine",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeLindormV2StreamEngineResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeLindormV2StreamEngineResponse({}));
  }

  /**
   * @param request - UpgradeLindormV2StreamEngineRequest
   * @returns UpgradeLindormV2StreamEngineResponse
   */
  async upgradeLindormV2StreamEngine(request: $_model.UpgradeLindormV2StreamEngineRequest): Promise<$_model.UpgradeLindormV2StreamEngineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeLindormV2StreamEngineWithOptions(request, runtime);
  }

}
