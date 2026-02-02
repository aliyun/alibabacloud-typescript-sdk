// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ebs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a replication pair to a replication pair-consistent group. You can use a replication pair-consistent group to batch manage replication pairs. When you call this operation, you can specify parameters, such as ReplicaGroupId, ReplicaPairId, and ClientToken, in the request.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   A replication pair and a replication pair-consistent group replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). A replication pair can be added only to a replication pair-consistent group that replicates in the same direction as the replication pair.
   * *   Before you can add a replication pair to a replication pair-consistent group, make sure that the pair and the group are in the **Created** (`created`) or **Stopped** (`stopped`) state.
   * *   Up to 17 replication pairs can be added to a single replication pair-consistent group.
   * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs in place of their original RPOs.
   * 
   * @param request - AddDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDiskReplicaPairResponse
   */
  async addDiskReplicaPairWithOptions(request: $_model.AddDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new $_model.AddDiskReplicaPairResponse({}));
  }

  /**
   * Adds a replication pair to a replication pair-consistent group. You can use a replication pair-consistent group to batch manage replication pairs. When you call this operation, you can specify parameters, such as ReplicaGroupId, ReplicaPairId, and ClientToken, in the request.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   A replication pair and a replication pair-consistent group replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). A replication pair can be added only to a replication pair-consistent group that replicates in the same direction as the replication pair.
   * *   Before you can add a replication pair to a replication pair-consistent group, make sure that the pair and the group are in the **Created** (`created`) or **Stopped** (`stopped`) state.
   * *   Up to 17 replication pairs can be added to a single replication pair-consistent group.
   * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs in place of their original RPOs.
   * 
   * @param request - AddDiskReplicaPairRequest
   * @returns AddDiskReplicaPairResponse
   */
  async addDiskReplicaPair(request: $_model.AddDiskReplicaPairRequest): Promise<$_model.AddDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Enables CloudLens for EBS.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - ApplyLensServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyLensServiceResponse
   */
  async applyLensServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ApplyLensServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ApplyLensService",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyLensServiceResponse>(await this.callApi(params, req, runtime), new $_model.ApplyLensServiceResponse({}));
  }

  /**
   * Enables CloudLens for EBS.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * @returns ApplyLensServiceResponse
   */
  async applyLensService(): Promise<$_model.ApplyLensServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyLensServiceWithOptions(runtime);
  }

  /**
   * Bind disks into a enterprise-level snapshot policy.
   * 
   * @param request - BindEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindEnterpriseSnapshotPolicyResponse
   */
  async bindEnterpriseSnapshotPolicyWithOptions(request: $_model.BindEnterpriseSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindEnterpriseSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.diskTargets)) {
      query["DiskTargets"] = request.diskTargets;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.BindEnterpriseSnapshotPolicyResponse({}));
  }

  /**
   * Bind disks into a enterprise-level snapshot policy.
   * 
   * @param request - BindEnterpriseSnapshotPolicyRequest
   * @returns BindEnterpriseSnapshotPolicyResponse
   */
  async bindEnterpriseSnapshotPolicy(request: $_model.BindEnterpriseSnapshotPolicyRequest): Promise<$_model.BindEnterpriseSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Disables CloudLens for EBS.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - CancelLensServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelLensServiceResponse
   */
  async cancelLensServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.CancelLensServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "CancelLensService",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelLensServiceResponse>(await this.callApi(params, req, runtime), new $_model.CancelLensServiceResponse({}));
  }

  /**
   * Disables CloudLens for EBS.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * @returns CancelLensServiceResponse
   */
  async cancelLensService(): Promise<$_model.CancelLensServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelLensServiceWithOptions(runtime);
  }

  /**
   * Changes the resource group to which an Elastic Block Storage (EBS) resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      version: "2021-07-30",
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
   * Changes the resource group to which an Elastic Block Storage (EBS) resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Clears the disaster recovery drills that were initiated from the secondary disk of a replication pair and deletes the auto-created drill disks.
   * 
   * @param request - ClearPairDrillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearPairDrillResponse
   */
  async clearPairDrillWithOptions(request: $_model.ClearPairDrillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClearPairDrillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drillId)) {
      query["DrillId"] = request.drillId;
    }

    if (!$dara.isNull(request.pairId)) {
      query["PairId"] = request.pairId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearPairDrill",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearPairDrillResponse>(await this.callApi(params, req, runtime), new $_model.ClearPairDrillResponse({}));
  }

  /**
   * Clears the disaster recovery drills that were initiated from the secondary disk of a replication pair and deletes the auto-created drill disks.
   * 
   * @param request - ClearPairDrillRequest
   * @returns ClearPairDrillResponse
   */
  async clearPairDrill(request: $_model.ClearPairDrillRequest): Promise<$_model.ClearPairDrillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearPairDrillWithOptions(request, runtime);
  }

  /**
   * Clears the disaster recovery drills that were initiated from the secondary disks of a replication pair-consistent group and deletes the auto-created drill disks.
   * 
   * @param request - ClearReplicaGroupDrillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearReplicaGroupDrillResponse
   */
  async clearReplicaGroupDrillWithOptions(request: $_model.ClearReplicaGroupDrillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClearReplicaGroupDrillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drillId)) {
      query["DrillId"] = request.drillId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearReplicaGroupDrill",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearReplicaGroupDrillResponse>(await this.callApi(params, req, runtime), new $_model.ClearReplicaGroupDrillResponse({}));
  }

  /**
   * Clears the disaster recovery drills that were initiated from the secondary disks of a replication pair-consistent group and deletes the auto-created drill disks.
   * 
   * @param request - ClearReplicaGroupDrillRequest
   * @returns ClearReplicaGroupDrillResponse
   */
  async clearReplicaGroupDrill(request: $_model.ClearReplicaGroupDrillRequest): Promise<$_model.ClearReplicaGroupDrillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearReplicaGroupDrillWithOptions(request, runtime);
  }

  /**
   * 中心化角色：创建App
   * 
   * @param request - CreateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(request: $_model.CreateAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appTags)) {
      query["AppTags"] = request.appTags;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reportSendEnabled)) {
      query["ReportSendEnabled"] = request.reportSendEnabled;
    }

    if (!$dara.isNull(request.subscribePeriod)) {
      query["SubscribePeriod"] = request.subscribePeriod;
    }

    if (!$dara.isNull(request.subscribeStatus)) {
      query["SubscribeStatus"] = request.subscribeStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApp",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppResponse({}));
  }

  /**
   * 中心化角色：创建App
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: $_model.CreateAppRequest): Promise<$_model.CreateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * Creates a dedicated block storage cluster. When you call this operation, you can specify parameters, such as Azone, Capacity, Type, and PeriodUnit, in the request.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   Dedicated block storage clusters are physically isolated from public block storage clusters. The owner of each dedicated block storage cluster has exclusive access to all resources in the cluster.
   * *   Disks created in a dedicated block storage cluster can be attached only to Elastic Compute Service (ECS) instances that reside in the same zone as the cluster. Before you create a dedicated block storage cluster, decide the regions and zones in which to deploy your cloud resources.
   * *   Dedicated block storage clusters are classified into basic and performance types. When you create a dedicated block storage cluster, select a cluster type based on your business requirements.
   * *   You are charged for creating dedicated block storage clusters.
   * 
   * @param request - CreateDedicatedBlockStorageClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDedicatedBlockStorageClusterResponse
   */
  async createDedicatedBlockStorageClusterWithOptions(request: $_model.CreateDedicatedBlockStorageClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDedicatedBlockStorageClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.azone)) {
      query["Azone"] = request.azone;
    }

    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.dbscId)) {
      query["DbscId"] = request.dbscId;
    }

    if (!$dara.isNull(request.dbscName)) {
      query["DbscName"] = request.dbscName;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDedicatedBlockStorageCluster",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDedicatedBlockStorageClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateDedicatedBlockStorageClusterResponse({}));
  }

  /**
   * Creates a dedicated block storage cluster. When you call this operation, you can specify parameters, such as Azone, Capacity, Type, and PeriodUnit, in the request.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   Dedicated block storage clusters are physically isolated from public block storage clusters. The owner of each dedicated block storage cluster has exclusive access to all resources in the cluster.
   * *   Disks created in a dedicated block storage cluster can be attached only to Elastic Compute Service (ECS) instances that reside in the same zone as the cluster. Before you create a dedicated block storage cluster, decide the regions and zones in which to deploy your cloud resources.
   * *   Dedicated block storage clusters are classified into basic and performance types. When you create a dedicated block storage cluster, select a cluster type based on your business requirements.
   * *   You are charged for creating dedicated block storage clusters.
   * 
   * @param request - CreateDedicatedBlockStorageClusterRequest
   * @returns CreateDedicatedBlockStorageClusterResponse
   */
  async createDedicatedBlockStorageCluster(request: $_model.CreateDedicatedBlockStorageClusterRequest): Promise<$_model.CreateDedicatedBlockStorageClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDedicatedBlockStorageClusterWithOptions(request, runtime);
  }

  /**
   * Creates a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * The replication pair-consistent group feature allows you to batch manage multiple disks in disaster recovery scenarios. You can restore the data of all disks in the same replication pair-consistent group to the same point in time to allow for disaster recovery of instances.
   * Take note of the following items:
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Replication pair-consistent groups can be used to implement disaster recovery across zones within the same region and disaster recovery across regions.
   * *   A replication pair and a replication pair-consistent group can replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). A replication pair can be added to only a replication pair-consistent group that replicates in the same direction as the replication pair.
   * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs instead of their original RPOs.
   * 
   * @param request - CreateDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiskReplicaGroupResponse
   */
  async createDiskReplicaGroupWithOptions(request: $_model.CreateDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationRegionId)) {
      query["DestinationRegionId"] = request.destinationRegionId;
    }

    if (!$dara.isNull(request.destinationZoneId)) {
      query["DestinationZoneId"] = request.destinationZoneId;
    }

    if (!$dara.isNull(request.enableRtc)) {
      query["EnableRtc"] = request.enableRtc;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.RPO)) {
      query["RPO"] = request.RPO;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceZoneId)) {
      query["SourceZoneId"] = request.sourceZoneId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateDiskReplicaGroupResponse({}));
  }

  /**
   * Creates a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * The replication pair-consistent group feature allows you to batch manage multiple disks in disaster recovery scenarios. You can restore the data of all disks in the same replication pair-consistent group to the same point in time to allow for disaster recovery of instances.
   * Take note of the following items:
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Replication pair-consistent groups can be used to implement disaster recovery across zones within the same region and disaster recovery across regions.
   * *   A replication pair and a replication pair-consistent group can replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). A replication pair can be added to only a replication pair-consistent group that replicates in the same direction as the replication pair.
   * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs instead of their original RPOs.
   * 
   * @param request - CreateDiskReplicaGroupRequest
   * @returns CreateDiskReplicaGroupResponse
   */
  async createDiskReplicaGroup(request: $_model.CreateDiskReplicaGroupRequest): Promise<$_model.CreateDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Creates a replication pair to asynchronously replicate data between disks.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Async replication is a feature that protects data across regions by using the data replication capability of Elastic Block Storage (EBS). This feature can be used to asynchronously replicate data from a disk in one region to a disk in another region for disaster recovery purposes. You can use this feature to implement disaster recovery for critical business to protect data in your databases and improve business continuity. You are charged on a subscription basis for the bandwidth that is used by the async replication feature.
   * Currently, the async replication feature can asynchronously replicate data only between enhanced SSDs (ESSDs). The functionality of disks in replication pairs is limited.
   * Take note of the following items:
   * *   Make sure that the source disk (primary disk) from which to replicate data and the destination disk (secondary disk) to which to replicate data are created. You can call the [CreateDisk](https://help.aliyun.com/document_detail/25513.html) operation to create disks.
   * *   The secondary disk cannot reside in the same region as the primary disk. For information about the regions that support async replication, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   After you call this operation to create a replication pair for the primary disk and the secondary disk, you must call the [StartDiskReplicaPair](https://help.aliyun.com/document_detail/354205.html) operation to enable async replication to replicate data from the primary disk to the secondary disk cross regions on a periodic basis.
   * 
   * @param request - CreateDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiskReplicaPairResponse
   */
  async createDiskReplicaPairWithOptions(request: $_model.CreateDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationDiskId)) {
      query["DestinationDiskId"] = request.destinationDiskId;
    }

    if (!$dara.isNull(request.destinationRegionId)) {
      query["DestinationRegionId"] = request.destinationRegionId;
    }

    if (!$dara.isNull(request.destinationZoneId)) {
      query["DestinationZoneId"] = request.destinationZoneId;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.enableRtc)) {
      query["EnableRtc"] = request.enableRtc;
    }

    if (!$dara.isNull(request.pairName)) {
      query["PairName"] = request.pairName;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.RPO)) {
      query["RPO"] = request.RPO;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceZoneId)) {
      query["SourceZoneId"] = request.sourceZoneId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new $_model.CreateDiskReplicaPairResponse({}));
  }

  /**
   * Creates a replication pair to asynchronously replicate data between disks.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Async replication is a feature that protects data across regions by using the data replication capability of Elastic Block Storage (EBS). This feature can be used to asynchronously replicate data from a disk in one region to a disk in another region for disaster recovery purposes. You can use this feature to implement disaster recovery for critical business to protect data in your databases and improve business continuity. You are charged on a subscription basis for the bandwidth that is used by the async replication feature.
   * Currently, the async replication feature can asynchronously replicate data only between enhanced SSDs (ESSDs). The functionality of disks in replication pairs is limited.
   * Take note of the following items:
   * *   Make sure that the source disk (primary disk) from which to replicate data and the destination disk (secondary disk) to which to replicate data are created. You can call the [CreateDisk](https://help.aliyun.com/document_detail/25513.html) operation to create disks.
   * *   The secondary disk cannot reside in the same region as the primary disk. For information about the regions that support async replication, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   After you call this operation to create a replication pair for the primary disk and the secondary disk, you must call the [StartDiskReplicaPair](https://help.aliyun.com/document_detail/354205.html) operation to enable async replication to replicate data from the primary disk to the secondary disk cross regions on a periodic basis.
   * 
   * @param request - CreateDiskReplicaPairRequest
   * @returns CreateDiskReplicaPairResponse
   */
  async createDiskReplicaPair(request: $_model.CreateDiskReplicaPairRequest): Promise<$_model.CreateDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Create an enterprise-level snapshot policy
   * 
   * @param tmpReq - CreateEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnterpriseSnapshotPolicyResponse
   */
  async createEnterpriseSnapshotPolicyWithOptions(tmpReq: $_model.CreateEnterpriseSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnterpriseSnapshotPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEnterpriseSnapshotPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.crossRegionCopyInfo)) {
      request.crossRegionCopyInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.crossRegionCopyInfo, "CrossRegionCopyInfo", "json");
    }

    if (!$dara.isNull(tmpReq.retainRule)) {
      request.retainRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retainRule, "RetainRule", "json");
    }

    if (!$dara.isNull(tmpReq.schedule)) {
      request.scheduleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedule, "Schedule", "json");
    }

    if (!$dara.isNull(tmpReq.specialRetainRules)) {
      request.specialRetainRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.specialRetainRules, "SpecialRetainRules", "json");
    }

    if (!$dara.isNull(tmpReq.storageRule)) {
      request.storageRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storageRule, "StorageRule", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.crossRegionCopyInfoShrink)) {
      query["CrossRegionCopyInfo"] = request.crossRegionCopyInfoShrink;
    }

    if (!$dara.isNull(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.retainRuleShrink)) {
      query["RetainRule"] = request.retainRuleShrink;
    }

    if (!$dara.isNull(request.scheduleShrink)) {
      query["Schedule"] = request.scheduleShrink;
    }

    if (!$dara.isNull(request.specialRetainRulesShrink)) {
      query["SpecialRetainRules"] = request.specialRetainRulesShrink;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.storageRuleShrink)) {
      query["StorageRule"] = request.storageRuleShrink;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnterpriseSnapshotPolicyResponse({}));
  }

  /**
   * Create an enterprise-level snapshot policy
   * 
   * @param request - CreateEnterpriseSnapshotPolicyRequest
   * @returns CreateEnterpriseSnapshotPolicyResponse
   */
  async createEnterpriseSnapshotPolicy(request: $_model.CreateEnterpriseSnapshotPolicyRequest): Promise<$_model.CreateEnterpriseSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * 中心化角色：删除App
   * 
   * @param request - DeleteAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppResponse
   */
  async deleteAppWithOptions(request: $_model.DeleteAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApp",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppResponse({}));
  }

  /**
   * 中心化角色：删除App
   * 
   * @param request - DeleteAppRequest
   * @returns DeleteAppResponse
   */
  async deleteApp(request: $_model.DeleteAppRequest): Promise<$_model.DeleteAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  /**
   * Deletes a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Before you can delete a replication pair-consistent group, make sure that no replication pairs exist in the group.
   * *   The replication pair-consistent group that you want to delete must be in the **Created** (`created`), **Creation Failed** (`create_failed`), **Stopped** (`stopped`), **Failovered** (`failovered`), **Deleting** (`deleting`), **Deletion Failed** (`delete_failed`), or **Invalid** (`invalid`) state.
   * 
   * @param request - DeleteDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDiskReplicaGroupResponse
   */
  async deleteDiskReplicaGroupWithOptions(request: $_model.DeleteDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDiskReplicaGroupResponse({}));
  }

  /**
   * Deletes a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Before you can delete a replication pair-consistent group, make sure that no replication pairs exist in the group.
   * *   The replication pair-consistent group that you want to delete must be in the **Created** (`created`), **Creation Failed** (`create_failed`), **Stopped** (`stopped`), **Failovered** (`failovered`), **Deleting** (`deleting`), **Deletion Failed** (`delete_failed`), or **Invalid** (`invalid`) state.
   * 
   * @param request - DeleteDiskReplicaGroupRequest
   * @returns DeleteDiskReplicaGroupResponse
   */
  async deleteDiskReplicaGroup(request: $_model.DeleteDiskReplicaGroupRequest): Promise<$_model.DeleteDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Deletes replication pairs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Stopped** (`stopped`), **Invalid** (`invalid`), or **Failovered** (`failovered`) state can be deleted. This operation deletes only replication pairs. The primary and secondary disks in the deleted replication pairs are retained.
   * *   To delete a replication pair, you must call this operation in the region where the primary disk is located. After the replication pair is deleted, the functionality limits are lifted from the primary and secondary disks. For example, you can attach the secondary disk, resize the disk, or read data from or write data to the disk.
   * 
   * @param request - DeleteDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDiskReplicaPairResponse
   */
  async deleteDiskReplicaPairWithOptions(request: $_model.DeleteDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDiskReplicaPairResponse({}));
  }

  /**
   * Deletes replication pairs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Stopped** (`stopped`), **Invalid** (`invalid`), or **Failovered** (`failovered`) state can be deleted. This operation deletes only replication pairs. The primary and secondary disks in the deleted replication pairs are retained.
   * *   To delete a replication pair, you must call this operation in the region where the primary disk is located. After the replication pair is deleted, the functionality limits are lifted from the primary and secondary disks. For example, you can attach the secondary disk, resize the disk, or read data from or write data to the disk.
   * 
   * @param request - DeleteDiskReplicaPairRequest
   * @returns DeleteDiskReplicaPairResponse
   */
  async deleteDiskReplicaPair(request: $_model.DeleteDiskReplicaPairRequest): Promise<$_model.DeleteDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Delete a enterprise-level snapshot policy.
   * 
   * @param request - DeleteEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnterpriseSnapshotPolicyResponse
   */
  async deleteEnterpriseSnapshotPolicyWithOptions(request: $_model.DeleteEnterpriseSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnterpriseSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnterpriseSnapshotPolicyResponse({}));
  }

  /**
   * Delete a enterprise-level snapshot policy.
   * 
   * @param request - DeleteEnterpriseSnapshotPolicyRequest
   * @returns DeleteEnterpriseSnapshotPolicyResponse
   */
  async deleteEnterpriseSnapshotPolicy(request: $_model.DeleteEnterpriseSnapshotPolicyRequest): Promise<$_model.DeleteEnterpriseSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * 中心化角色：查询App信息
   * 
   * @param request - DescribeAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppsResponse
   */
  async describeAppsWithOptions(request: $_model.DescribeAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.appNames)) {
      query["AppNames"] = request.appNames;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApps",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppsResponse({}));
  }

  /**
   * 中心化角色：查询App信息
   * 
   * @param request - DescribeAppsRequest
   * @returns DescribeAppsResponse
   */
  async describeApps(request: $_model.DescribeAppsRequest): Promise<$_model.DescribeAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  /**
   * Queries the details of one or more disks in a dedicated block storage cluster.
   * 
   * @remarks
   *   You can use one of the following methods to check the responses:
   *     *   Method 1: Use `NextToken` to configure the query token. Set the value to the `NextToken` value that is returned in the last call to the DescribeDisks operation. Then, use `MaxResults` to specify the maximum number of entries to return on each page.
   *     *   Method 2: Use `PageSize` to specify the number of entries to return on each page and then use `PageNumber` to specify the number of the page to return.
   *         You can use only one of the preceding methods. If a large number of entries are to be returned, we recommend that you use method 1. When `NextToken` is specified, `PageSize` and `PageNumber` do not take effect and `TotalCount` in the response is invalid.
   * *   A disk that has the multi-attach feature enabled can be attached to multiple instances. You can query the attachment information of the disk based on the `Attachment` values in the response.
   * When you call an API operation by using Alibaba Cloud CLI, you must specify request parameter values of different data types in the required formats. For more information, see [Parameter format overview](https://help.aliyun.com/document_detail/110340.html).
   * 
   * @param request - DescribeDedicatedBlockStorageClusterDisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDedicatedBlockStorageClusterDisksResponse
   */
  async describeDedicatedBlockStorageClusterDisksWithOptions(request: $_model.DescribeDedicatedBlockStorageClusterDisksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDedicatedBlockStorageClusterDisksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbscId)) {
      query["DbscId"] = request.dbscId;
    }

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
      action: "DescribeDedicatedBlockStorageClusterDisks",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDedicatedBlockStorageClusterDisksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDedicatedBlockStorageClusterDisksResponse({}));
  }

  /**
   * Queries the details of one or more disks in a dedicated block storage cluster.
   * 
   * @remarks
   *   You can use one of the following methods to check the responses:
   *     *   Method 1: Use `NextToken` to configure the query token. Set the value to the `NextToken` value that is returned in the last call to the DescribeDisks operation. Then, use `MaxResults` to specify the maximum number of entries to return on each page.
   *     *   Method 2: Use `PageSize` to specify the number of entries to return on each page and then use `PageNumber` to specify the number of the page to return.
   *         You can use only one of the preceding methods. If a large number of entries are to be returned, we recommend that you use method 1. When `NextToken` is specified, `PageSize` and `PageNumber` do not take effect and `TotalCount` in the response is invalid.
   * *   A disk that has the multi-attach feature enabled can be attached to multiple instances. You can query the attachment information of the disk based on the `Attachment` values in the response.
   * When you call an API operation by using Alibaba Cloud CLI, you must specify request parameter values of different data types in the required formats. For more information, see [Parameter format overview](https://help.aliyun.com/document_detail/110340.html).
   * 
   * @param request - DescribeDedicatedBlockStorageClusterDisksRequest
   * @returns DescribeDedicatedBlockStorageClusterDisksResponse
   */
  async describeDedicatedBlockStorageClusterDisks(request: $_model.DescribeDedicatedBlockStorageClusterDisksRequest): Promise<$_model.DescribeDedicatedBlockStorageClusterDisksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDedicatedBlockStorageClusterDisksWithOptions(request, runtime);
  }

  /**
   * Queries the dedicated block storage clusters that are created.
   * 
   * @remarks
   * ## [](#)Usage notes
   * >  The Dedicated Block Storage Cluster feature is available only in the China (Heyuan), Indonesia (Jakarta), and China (Shenzhen) regions.
   * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are included in the filter conditions.
   * *   We recommend that you use NextToken and MaxResults to perform paged queries. We recommend that you use MaxResults to specify the maximum number of entries to return in each request. The return value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. When you call the DescribeDedicatedBlockStorageClusters operation to retrieve a new page of results, set NextToken to the NextToken value that is returned in the previous call and specify MaxResults to limit the number of entries returned.
   * 
   * @param request - DescribeDedicatedBlockStorageClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDedicatedBlockStorageClustersResponse
   */
  async describeDedicatedBlockStorageClustersWithOptions(request: $_model.DescribeDedicatedBlockStorageClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDedicatedBlockStorageClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dedicatedBlockStorageClusterId)) {
      query["DedicatedBlockStorageClusterId"] = request.dedicatedBlockStorageClusterId;
    }

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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.azoneId)) {
      body["AzoneId"] = request.azoneId;
    }

    if (!$dara.isNull(request.category)) {
      body["Category"] = request.category;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDedicatedBlockStorageClusters",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDedicatedBlockStorageClustersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDedicatedBlockStorageClustersResponse({}));
  }

  /**
   * Queries the dedicated block storage clusters that are created.
   * 
   * @remarks
   * ## [](#)Usage notes
   * >  The Dedicated Block Storage Cluster feature is available only in the China (Heyuan), Indonesia (Jakarta), and China (Shenzhen) regions.
   * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are included in the filter conditions.
   * *   We recommend that you use NextToken and MaxResults to perform paged queries. We recommend that you use MaxResults to specify the maximum number of entries to return in each request. The return value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. When you call the DescribeDedicatedBlockStorageClusters operation to retrieve a new page of results, set NextToken to the NextToken value that is returned in the previous call and specify MaxResults to limit the number of entries returned.
   * 
   * @param request - DescribeDedicatedBlockStorageClustersRequest
   * @returns DescribeDedicatedBlockStorageClustersResponse
   */
  async describeDedicatedBlockStorageClusters(request: $_model.DescribeDedicatedBlockStorageClustersRequest): Promise<$_model.DescribeDedicatedBlockStorageClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDedicatedBlockStorageClustersWithOptions(request, runtime);
  }

  /**
   * Queries the risk events of a disk.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeDiskEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskEventsResponse
   */
  async describeDiskEventsWithOptions(request: $_model.DescribeDiskEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiskEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskCategory)) {
      query["DiskCategory"] = request.diskCategory;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "DescribeDiskEvents",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiskEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiskEventsResponse({}));
  }

  /**
   * Queries the risk events of a disk.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeDiskEventsRequest
   * @returns DescribeDiskEventsResponse
   */
  async describeDiskEvents(request: $_model.DescribeDiskEventsRequest): Promise<$_model.DescribeDiskEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskEventsWithOptions(request, runtime);
  }

  /**
   * Queries the near real-time monitoring data of a disk.
   * 
   * @remarks
   * ## Usage notes
   * *   CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * *   Up to 400 monitoring data entries can be returned at a time. An error is returned if the value calculated based on the following formula is greater than 400: `(EndTime - StartTime)/Period`.
   * *   You can query the monitoring data collected in the last three days. An error is returned if the time specified by `StartTime` is more than three days prior to the current time.
   * 
   * @param request - DescribeDiskMonitorDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskMonitorDataResponse
   */
  async describeDiskMonitorDataWithOptions(request: $_model.DescribeDiskMonitorDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiskMonitorDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "DescribeDiskMonitorData",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiskMonitorDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiskMonitorDataResponse({}));
  }

  /**
   * Queries the near real-time monitoring data of a disk.
   * 
   * @remarks
   * ## Usage notes
   * *   CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * *   Up to 400 monitoring data entries can be returned at a time. An error is returned if the value calculated based on the following formula is greater than 400: `(EndTime - StartTime)/Period`.
   * *   You can query the monitoring data collected in the last three days. An error is returned if the time specified by `StartTime` is more than three days prior to the current time.
   * 
   * @param request - DescribeDiskMonitorDataRequest
   * @returns DescribeDiskMonitorDataResponse
   */
  async describeDiskMonitorData(request: $_model.DescribeDiskMonitorDataRequest): Promise<$_model.DescribeDiskMonitorDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskMonitorDataWithOptions(request, runtime);
  }

  /**
   * Queries the near real-time monitoring data of disks. You can query only the burst performance data of ESSD AutoPL disks. The data is aggregated by hour.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeDiskMonitorDataListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskMonitorDataListResponse
   */
  async describeDiskMonitorDataListWithOptions(request: $_model.DescribeDiskMonitorDataListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiskMonitorDataListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "DescribeDiskMonitorDataList",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiskMonitorDataListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiskMonitorDataListResponse({}));
  }

  /**
   * Queries the near real-time monitoring data of disks. You can query only the burst performance data of ESSD AutoPL disks. The data is aggregated by hour.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeDiskMonitorDataListRequest
   * @returns DescribeDiskMonitorDataListResponse
   */
  async describeDiskMonitorDataList(request: $_model.DescribeDiskMonitorDataListRequest): Promise<$_model.DescribeDiskMonitorDataListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskMonitorDataListWithOptions(request, runtime);
  }

  /**
   * Queries the details of replication pair-consistent groups in a specific region.
   * 
   * @remarks
   * ## [](#)Usage notes
   * To perform a paged query, specify the MaxResults and NextToken parameters.
   * During a paged query, when you call the DescribeDiskReplicaGroups operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaGroups operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
   * 
   * @param request - DescribeDiskReplicaGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskReplicaGroupsResponse
   */
  async describeDiskReplicaGroupsWithOptions(request: $_model.DescribeDiskReplicaGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiskReplicaGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.site)) {
      query["Site"] = request.site;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiskReplicaGroups",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiskReplicaGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiskReplicaGroupsResponse({}));
  }

  /**
   * Queries the details of replication pair-consistent groups in a specific region.
   * 
   * @remarks
   * ## [](#)Usage notes
   * To perform a paged query, specify the MaxResults and NextToken parameters.
   * During a paged query, when you call the DescribeDiskReplicaGroups operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaGroups operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
   * 
   * @param request - DescribeDiskReplicaGroupsRequest
   * @returns DescribeDiskReplicaGroupsResponse
   */
  async describeDiskReplicaGroups(request: $_model.DescribeDiskReplicaGroupsRequest): Promise<$_model.DescribeDiskReplicaGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskReplicaGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the replication progress of a replication pair.
   * 
   * @param request - DescribeDiskReplicaPairProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskReplicaPairProgressResponse
   */
  async describeDiskReplicaPairProgressWithOptions(request: $_model.DescribeDiskReplicaPairProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiskReplicaPairProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiskReplicaPairProgress",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiskReplicaPairProgressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiskReplicaPairProgressResponse({}));
  }

  /**
   * Queries the replication progress of a replication pair.
   * 
   * @param request - DescribeDiskReplicaPairProgressRequest
   * @returns DescribeDiskReplicaPairProgressResponse
   */
  async describeDiskReplicaPairProgress(request: $_model.DescribeDiskReplicaPairProgressRequest): Promise<$_model.DescribeDiskReplicaPairProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskReplicaPairProgressWithOptions(request, runtime);
  }

  /**
   * Queries information about replication pairs in a specific region.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   When you call this operation for a specific region, if the primary disk (source disk) or secondary disk (destination disk) of a replication pair resides in the region, information about the replication pair is displayed in the response.
   * *   If you want to perform a paged query, configure the `NextToken` and `MaxResults` parameters. During a paged query, when you call the DescribeDiskReplicaPairs operation to retrieve the first page of results, set `MaxResults` to limit the maximum number of entries to return in the call. The return value of NextToken is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaPairs operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
   * 
   * @param request - DescribeDiskReplicaPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskReplicaPairsResponse
   */
  async describeDiskReplicaPairsWithOptions(request: $_model.DescribeDiskReplicaPairsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiskReplicaPairsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.pairIds)) {
      query["PairIds"] = request.pairIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.site)) {
      query["Site"] = request.site;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiskReplicaPairs",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiskReplicaPairsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiskReplicaPairsResponse({}));
  }

  /**
   * Queries information about replication pairs in a specific region.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   When you call this operation for a specific region, if the primary disk (source disk) or secondary disk (destination disk) of a replication pair resides in the region, information about the replication pair is displayed in the response.
   * *   If you want to perform a paged query, configure the `NextToken` and `MaxResults` parameters. During a paged query, when you call the DescribeDiskReplicaPairs operation to retrieve the first page of results, set `MaxResults` to limit the maximum number of entries to return in the call. The return value of NextToken is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaPairs operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
   * 
   * @param request - DescribeDiskReplicaPairsRequest
   * @returns DescribeDiskReplicaPairsResponse
   */
  async describeDiskReplicaPairs(request: $_model.DescribeDiskReplicaPairsRequest): Promise<$_model.DescribeDiskReplicaPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskReplicaPairsWithOptions(request, runtime);
  }

  /**
   * Queries the information about enterprise-level snapshot policies. When you call this operation, you can specify parameters, such as PolicyIds, ResourceGroupId, and Tag, in the request.
   * 
   * @param request - DescribeEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnterpriseSnapshotPolicyResponse
   */
  async describeEnterpriseSnapshotPolicyWithOptions(request: $_model.DescribeEnterpriseSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnterpriseSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

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

    if (!$dara.isNull(request.policyIds)) {
      query["PolicyIds"] = request.policyIds;
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
      action: "DescribeEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnterpriseSnapshotPolicyResponse({}));
  }

  /**
   * Queries the information about enterprise-level snapshot policies. When you call this operation, you can specify parameters, such as PolicyIds, ResourceGroupId, and Tag, in the request.
   * 
   * @param request - DescribeEnterpriseSnapshotPolicyRequest
   * @returns DescribeEnterpriseSnapshotPolicyResponse
   */
  async describeEnterpriseSnapshotPolicy(request: $_model.DescribeEnterpriseSnapshotPolicyRequest): Promise<$_model.DescribeEnterpriseSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the risk events of a disk.
   * 
   * @param request - DescribeEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventsResponse
   */
  async describeEventsWithOptions(request: $_model.DescribeEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventLevel)) {
      query["EventLevel"] = request.eventLevel;
    }

    if (!$dara.isNull(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

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
      action: "DescribeEvents",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventsResponse({}));
  }

  /**
   * Queries the risk events of a disk.
   * 
   * @param request - DescribeEventsRequest
   * @returns DescribeEventsResponse
   */
  async describeEvents(request: $_model.DescribeEventsRequest): Promise<$_model.DescribeEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  /**
   * Queries one or more Elastic Block Storage (EBS) devices that you created.
   * 
   * @param request - DescribeLensMonitorDisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLensMonitorDisksResponse
   */
  async describeLensMonitorDisksWithOptions(request: $_model.DescribeLensMonitorDisksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLensMonitorDisksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskCategory)) {
      query["DiskCategory"] = request.diskCategory;
    }

    if (!$dara.isNull(request.diskIdPattern)) {
      query["DiskIdPattern"] = request.diskIdPattern;
    }

    if (!$dara.isNull(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

    if (!$dara.isNull(request.lensTags)) {
      query["LensTags"] = request.lensTags;
    }

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
      action: "DescribeLensMonitorDisks",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLensMonitorDisksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLensMonitorDisksResponse({}));
  }

  /**
   * Queries one or more Elastic Block Storage (EBS) devices that you created.
   * 
   * @param request - DescribeLensMonitorDisksRequest
   * @returns DescribeLensMonitorDisksResponse
   */
  async describeLensMonitorDisks(request: $_model.DescribeLensMonitorDisksRequest): Promise<$_model.DescribeLensMonitorDisksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLensMonitorDisksWithOptions(request, runtime);
  }

  /**
   * 查询用户开通ebs数据洞察服务状态
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeLensServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLensServiceStatusResponse
   */
  async describeLensServiceStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLensServiceStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLensServiceStatus",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLensServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLensServiceStatusResponse({}));
  }

  /**
   * 查询用户开通ebs数据洞察服务状态
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * @returns DescribeLensServiceStatusResponse
   */
  async describeLensServiceStatus(): Promise<$_model.DescribeLensServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLensServiceStatusWithOptions(runtime);
  }

  /**
   * Query single metric monitoring information
   * 
   * @param tmpReq - DescribeMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricDataResponse
   */
  async describeMetricDataWithOptions(tmpReq: $_model.DescribeMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricDataResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeMetricDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.groupByLabels)) {
      request.groupByLabelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupByLabels, "GroupByLabels", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.aggreOps)) {
      query["AggreOps"] = request.aggreOps;
    }

    if (!$dara.isNull(request.aggreOverLineOps)) {
      query["AggreOverLineOps"] = request.aggreOverLineOps;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupByLabelsShrink)) {
      query["GroupByLabels"] = request.groupByLabelsShrink;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
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
      action: "DescribeMetricData",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricDataResponse({}));
  }

  /**
   * Query single metric monitoring information
   * 
   * @param request - DescribeMetricDataRequest
   * @returns DescribeMetricDataResponse
   */
  async describeMetricData(request: $_model.DescribeMetricDataRequest): Promise<$_model.DescribeMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricDataWithOptions(request, runtime);
  }

  /**
   * Queries the disaster recovery drills that were performed on the replication pair whose secondary disk resides in a specific region.
   * 
   * @param request - DescribePairDrillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePairDrillsResponse
   */
  async describePairDrillsWithOptions(request: $_model.DescribePairDrillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePairDrillsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drillId)) {
      query["DrillId"] = request.drillId;
    }

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

    if (!$dara.isNull(request.pairId)) {
      query["PairId"] = request.pairId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePairDrills",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePairDrillsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePairDrillsResponse({}));
  }

  /**
   * Queries the disaster recovery drills that were performed on the replication pair whose secondary disk resides in a specific region.
   * 
   * @param request - DescribePairDrillsRequest
   * @returns DescribePairDrillsResponse
   */
  async describePairDrills(request: $_model.DescribePairDrillsRequest): Promise<$_model.DescribePairDrillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePairDrillsWithOptions(request, runtime);
  }

  /**
   * Queries the details of regions in which Elastic Block Storage (EBS) features (such as async replication, CloudLens for EBS, and Dedicated Block Storage Cluster) are supported.
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2021-07-30",
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
   * Queries the details of regions in which Elastic Block Storage (EBS) features (such as async replication, CloudLens for EBS, and Dedicated Block Storage Cluster) are supported.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the disaster recovery drills that were performed on the replication pair-consistent group whose secondary disk resides in a specific region.
   * 
   * @param request - DescribeReplicaGroupDrillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeReplicaGroupDrillsResponse
   */
  async describeReplicaGroupDrillsWithOptions(request: $_model.DescribeReplicaGroupDrillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeReplicaGroupDrillsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drillId)) {
      query["DrillId"] = request.drillId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeReplicaGroupDrills",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeReplicaGroupDrillsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeReplicaGroupDrillsResponse({}));
  }

  /**
   * Queries the disaster recovery drills that were performed on the replication pair-consistent group whose secondary disk resides in a specific region.
   * 
   * @param request - DescribeReplicaGroupDrillsRequest
   * @returns DescribeReplicaGroupDrillsResponse
   */
  async describeReplicaGroupDrills(request: $_model.DescribeReplicaGroupDrillsRequest): Promise<$_model.DescribeReplicaGroupDrillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeReplicaGroupDrillsWithOptions(request, runtime);
  }

  /**
   * 查询解决方案实例默认配置
   * 
   * @param request - DescribeSolutionInstanceConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSolutionInstanceConfigurationResponse
   */
  async describeSolutionInstanceConfigurationWithOptions(request: $_model.DescribeSolutionInstanceConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSolutionInstanceConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.solutionId)) {
      query["SolutionId"] = request.solutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSolutionInstanceConfiguration",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSolutionInstanceConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSolutionInstanceConfigurationResponse({}));
  }

  /**
   * 查询解决方案实例默认配置
   * 
   * @param request - DescribeSolutionInstanceConfigurationRequest
   * @returns DescribeSolutionInstanceConfigurationResponse
   */
  async describeSolutionInstanceConfiguration(request: $_model.DescribeSolutionInstanceConfigurationRequest): Promise<$_model.DescribeSolutionInstanceConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSolutionInstanceConfigurationWithOptions(request, runtime);
  }

  /**
   * Centralized Role: Query User Disk Snapshot tagKeys
   * 
   * @remarks
   * ## Interface Description
   * Query the tag key-value pairs of user\\"s cloud disk and snapshot. The search scope can be narrowed down by using filterTagKey.
   * 
   * @param request - DescribeUserTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserTagKeysResponse
   */
  async describeUserTagKeysWithOptions(request: $_model.DescribeUserTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserTagKeysResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tagFilterKey)) {
      body["TagFilterKey"] = request.tagFilterKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserTagKeys",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserTagKeysResponse({}));
  }

  /**
   * Centralized Role: Query User Disk Snapshot tagKeys
   * 
   * @remarks
   * ## Interface Description
   * Query the tag key-value pairs of user\\"s cloud disk and snapshot. The search scope can be narrowed down by using filterTagKey.
   * 
   * @param request - DescribeUserTagKeysRequest
   * @returns DescribeUserTagKeysResponse
   */
  async describeUserTagKeys(request: $_model.DescribeUserTagKeysRequest): Promise<$_model.DescribeUserTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserTagKeysWithOptions(request, runtime);
  }

  /**
   * Centralized Role: Query User Disk and Snapshot tagValues
   * 
   * @remarks
   * ## Interface Description
   * > The dedicated block storage cluster feature is currently supported in the following regions: South China 2 (Heyuan), Indonesia (Jakarta), and South China 1 (Shenzhen).
   * - The request parameters act as a filter, with a logical AND relationship. If any parameter is empty, the filter does not take effect.
   * - For paginated queries, it is recommended to use the MaxResults and NextToken parameters. Usage instructions: When querying the first page, set only MaxResults to limit the number of returned entries. The NextToken in the response will serve as the token for querying subsequent pages. When querying subsequent pages, set the NextToken parameter to the value obtained from the previous response, and set MaxResults to limit the number of returned entries.
   * 
   * @param request - DescribeUserTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserTagValuesResponse
   */
  async describeUserTagValuesWithOptions(request: $_model.DescribeUserTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserTagValuesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tagFilterValue)) {
      body["TagFilterValue"] = request.tagFilterValue;
    }

    if (!$dara.isNull(request.tagKey)) {
      body["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserTagValues",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserTagValuesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserTagValuesResponse({}));
  }

  /**
   * Centralized Role: Query User Disk and Snapshot tagValues
   * 
   * @remarks
   * ## Interface Description
   * > The dedicated block storage cluster feature is currently supported in the following regions: South China 2 (Heyuan), Indonesia (Jakarta), and South China 1 (Shenzhen).
   * - The request parameters act as a filter, with a logical AND relationship. If any parameter is empty, the filter does not take effect.
   * - For paginated queries, it is recommended to use the MaxResults and NextToken parameters. Usage instructions: When querying the first page, set only MaxResults to limit the number of returned entries. The NextToken in the response will serve as the token for querying subsequent pages. When querying subsequent pages, set the NextToken parameter to the value obtained from the previous response, and set MaxResults to limit the number of returned entries.
   * 
   * @param request - DescribeUserTagValuesRequest
   * @returns DescribeUserTagValuesResponse
   */
  async describeUserTagValues(request: $_model.DescribeUserTagValuesRequest): Promise<$_model.DescribeUserTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserTagValuesWithOptions(request, runtime);
  }

  /**
   * Enables the failover feature for replication pairs in a replication pair-consistent group. When the primary disks of specific replication pairs in a replication pair-consistent group fail, you can call this operation to enable the read and write permissions on the secondary disks.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), **Stopped** (`stopped`), **In Failover** (`failovering`), **Failover Failed** (`failover_failed`), or **Failovered** (`failovered`) state.
   * *   After a failover is performed, the replication pair-consistent group enters the **Failovered** (`failovered`) state.
   * *   Before you perform a failover, make sure that the first full data synchronization is completed between the primary site and secondary site.
   * 
   * @param request - FailoverDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FailoverDiskReplicaGroupResponse
   */
  async failoverDiskReplicaGroupWithOptions(request: $_model.FailoverDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FailoverDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FailoverDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FailoverDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new $_model.FailoverDiskReplicaGroupResponse({}));
  }

  /**
   * Enables the failover feature for replication pairs in a replication pair-consistent group. When the primary disks of specific replication pairs in a replication pair-consistent group fail, you can call this operation to enable the read and write permissions on the secondary disks.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), **Stopped** (`stopped`), **In Failover** (`failovering`), **Failover Failed** (`failover_failed`), or **Failovered** (`failovered`) state.
   * *   After a failover is performed, the replication pair-consistent group enters the **Failovered** (`failovered`) state.
   * *   Before you perform a failover, make sure that the first full data synchronization is completed between the primary site and secondary site.
   * 
   * @param request - FailoverDiskReplicaGroupRequest
   * @returns FailoverDiskReplicaGroupResponse
   */
  async failoverDiskReplicaGroup(request: $_model.FailoverDiskReplicaGroupRequest): Promise<$_model.FailoverDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.failoverDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Enables the failover feature for replication pairs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair for which you want to enable failover cannot be in the **Invalid** (`invalid`) or **Deleted** (`deleted`) state.
   * *   After a failover is performed, the replication pair enters the **Failovered** (`failovered`) state.
   * 
   * @param request - FailoverDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FailoverDiskReplicaPairResponse
   */
  async failoverDiskReplicaPairWithOptions(request: $_model.FailoverDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FailoverDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FailoverDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FailoverDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new $_model.FailoverDiskReplicaPairResponse({}));
  }

  /**
   * Enables the failover feature for replication pairs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair for which you want to enable failover cannot be in the **Invalid** (`invalid`) or **Deleted** (`deleted`) state.
   * *   After a failover is performed, the replication pair enters the **Failovered** (`failovered`) state.
   * 
   * @param request - FailoverDiskReplicaPairRequest
   * @returns FailoverDiskReplicaPairResponse
   */
  async failoverDiskReplicaPair(request: $_model.FailoverDiskReplicaPairRequest): Promise<$_model.FailoverDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.failoverDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Centralized Role: Obtain User Usage Report with reportId
   * 
   * @param request - GetReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReportResponse
   */
  async getReportWithOptions(request: $_model.GetReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.reportType)) {
      query["ReportType"] = request.reportType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reportId)) {
      body["ReportId"] = request.reportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReport",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReportResponse>(await this.callApi(params, req, runtime), new $_model.GetReportResponse({}));
  }

  /**
   * Centralized Role: Obtain User Usage Report with reportId
   * 
   * @param request - GetReportRequest
   * @returns GetReportResponse
   */
  async getReport(request: $_model.GetReportRequest): Promise<$_model.GetReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getReportWithOptions(request, runtime);
  }

  /**
   * 查询异步复制支持的目的地域和可用区
   * 
   * @param request - ListReplicaEdgeSupportedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReplicaEdgeSupportedResponse
   */
  async listReplicaEdgeSupportedWithOptions(request: $_model.ListReplicaEdgeSupportedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListReplicaEdgeSupportedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.azone)) {
      query["Azone"] = request.azone;
    }

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
      action: "ListReplicaEdgeSupported",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListReplicaEdgeSupportedResponse>(await this.callApi(params, req, runtime), new $_model.ListReplicaEdgeSupportedResponse({}));
  }

  /**
   * 查询异步复制支持的目的地域和可用区
   * 
   * @param request - ListReplicaEdgeSupportedRequest
   * @returns ListReplicaEdgeSupportedResponse
   */
  async listReplicaEdgeSupported(request: $_model.ListReplicaEdgeSupportedRequest): Promise<$_model.ListReplicaEdgeSupportedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listReplicaEdgeSupportedWithOptions(request, runtime);
  }

  /**
   * Centralized Role: Query Historical Reports
   * 
   * @param request - ListReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReportsResponse
   */
  async listReportsWithOptions(request: $_model.ListReportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListReports",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListReportsResponse>(await this.callApi(params, req, runtime), new $_model.ListReportsResponse({}));
  }

  /**
   * Centralized Role: Query Historical Reports
   * 
   * @param request - ListReportsRequest
   * @returns ListReportsResponse
   */
  async listReports(request: $_model.ListReportsRequest): Promise<$_model.ListReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listReportsWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to one or more Elastic Block Storage (EBS) resources, or queries the IDs and tags of resources in a specified non-default resource group.
   * 
   * @remarks
   * Specify at least one of the following parameters or parameter pairs in a request to determine a query object:
   * *   `ResourceId.N`
   * *   `Tag.N` parameter pair (`Tag.N.Key` and `Tag.N.Value`)
   * If you set `Tag.N` and `ResourceId.N` at the same time, the EBS resources that match both the parameters are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      version: "2021-07-30",
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
   * Queries the tags that are added to one or more Elastic Block Storage (EBS) resources, or queries the IDs and tags of resources in a specified non-default resource group.
   * 
   * @remarks
   * Specify at least one of the following parameters or parameter pairs in a request to determine a query object:
   * *   `ResourceId.N`
   * *   `Tag.N` parameter pair (`Tag.N.Key` and `Tag.N.Value`)
   * If you set `Tag.N` and `ResourceId.N` at the same time, the EBS resources that match both the parameters are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 中心化角色：修改App
   * 
   * @param request - ModifyAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppResponse
   */
  async modifyAppWithOptions(request: $_model.ModifyAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appTags)) {
      query["AppTags"] = request.appTags;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reportSendEnabled)) {
      query["ReportSendEnabled"] = request.reportSendEnabled;
    }

    if (!$dara.isNull(request.subscribePeriod)) {
      query["SubscribePeriod"] = request.subscribePeriod;
    }

    if (!$dara.isNull(request.subscribeStatus)) {
      query["SubscribeStatus"] = request.subscribeStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApp",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppResponse({}));
  }

  /**
   * 中心化角色：修改App
   * 
   * @param request - ModifyAppRequest
   * @returns ModifyAppResponse
   */
  async modifyApp(request: $_model.ModifyAppRequest): Promise<$_model.ModifyAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  /**
   * 修改专属集群属性OpenApi
   * 
   * @remarks
   * You can call this operation to modify the information of a dedicated block storage cluster. The information includes the name and description of the cluster.
   * 
   * @param request - ModifyDedicatedBlockStorageClusterAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDedicatedBlockStorageClusterAttributeResponse
   */
  async modifyDedicatedBlockStorageClusterAttributeWithOptions(request: $_model.ModifyDedicatedBlockStorageClusterAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDedicatedBlockStorageClusterAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dbscId)) {
      query["DbscId"] = request.dbscId;
    }

    if (!$dara.isNull(request.dbscName)) {
      query["DbscName"] = request.dbscName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDedicatedBlockStorageClusterAttribute",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDedicatedBlockStorageClusterAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDedicatedBlockStorageClusterAttributeResponse({}));
  }

  /**
   * 修改专属集群属性OpenApi
   * 
   * @remarks
   * You can call this operation to modify the information of a dedicated block storage cluster. The information includes the name and description of the cluster.
   * 
   * @param request - ModifyDedicatedBlockStorageClusterAttributeRequest
   * @returns ModifyDedicatedBlockStorageClusterAttributeResponse
   */
  async modifyDedicatedBlockStorageClusterAttribute(request: $_model.ModifyDedicatedBlockStorageClusterAttributeRequest): Promise<$_model.ModifyDedicatedBlockStorageClusterAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDedicatedBlockStorageClusterAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, or recovery point objective (RPO) of a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group must be in the **Created** (`created`) or **Stopped** (`stopped`) state.
   * 
   * @param request - ModifyDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskReplicaGroupResponse
   */
  async modifyDiskReplicaGroupWithOptions(request: $_model.ModifyDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableRtc)) {
      query["EnableRtc"] = request.enableRtc;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.RPO)) {
      query["RPO"] = request.RPO;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDiskReplicaGroupResponse({}));
  }

  /**
   * Modifies the name, description, or recovery point objective (RPO) of a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group must be in the **Created** (`created`) or **Stopped** (`stopped`) state.
   * 
   * @param request - ModifyDiskReplicaGroupRequest
   * @returns ModifyDiskReplicaGroupResponse
   */
  async modifyDiskReplicaGroup(request: $_model.ModifyDiskReplicaGroupRequest): Promise<$_model.ModifyDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Modifies a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Created** (`created`) or **Stopped** (`stopped`) state can have their names or descriptions modified.
   * 
   * @param request - ModifyDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskReplicaPairResponse
   */
  async modifyDiskReplicaPairWithOptions(request: $_model.ModifyDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableRtc)) {
      query["EnableRtc"] = request.enableRtc;
    }

    if (!$dara.isNull(request.pairName)) {
      query["PairName"] = request.pairName;
    }

    if (!$dara.isNull(request.RPO)) {
      query["RPO"] = request.RPO;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDiskReplicaPairResponse({}));
  }

  /**
   * Modifies a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Created** (`created`) or **Stopped** (`stopped`) state can have their names or descriptions modified.
   * 
   * @param request - ModifyDiskReplicaPairRequest
   * @returns ModifyDiskReplicaPairResponse
   */
  async modifyDiskReplicaPair(request: $_model.ModifyDiskReplicaPairRequest): Promise<$_model.ModifyDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Query the throughput status of a dedicated block storage cluster disk which has been set through the SetDedicatedBlockStorageClusterDiskThroughput API.
   * 
   * @param request - QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse
   */
  async queryDedicatedBlockStorageClusterDiskThroughputStatusWithOptions(request: $_model.QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qosRequestId)) {
      body["QosRequestId"] = request.qosRequestId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDedicatedBlockStorageClusterDiskThroughputStatus",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse({}));
  }

  /**
   * Query the throughput status of a dedicated block storage cluster disk which has been set through the SetDedicatedBlockStorageClusterDiskThroughput API.
   * 
   * @param request - QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest
   * @returns QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse
   */
  async queryDedicatedBlockStorageClusterDiskThroughputStatus(request: $_model.QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest): Promise<$_model.QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDedicatedBlockStorageClusterDiskThroughputStatusWithOptions(request, runtime);
  }

  /**
   * Query dedicated block storage cluster capacity trend data, includ available capacity size and total capacity size.
   * 
   * @remarks
   * Period is the time interval between data retrieval points. When set to 60 (minute interval), a maximum of 1440 data points can be returned; when set to 3600 (hour interval), a maximum of 744 data points can be returned; and when set to 86400 (day interval), a maximum of 366 data points can be returned.
   * 
   * @param request - QueryDedicatedBlockStorageClusterInventoryDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDedicatedBlockStorageClusterInventoryDataResponse
   */
  async queryDedicatedBlockStorageClusterInventoryDataWithOptions(request: $_model.QueryDedicatedBlockStorageClusterInventoryDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDedicatedBlockStorageClusterInventoryDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbscId)) {
      body["DbscId"] = request.dbscId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDedicatedBlockStorageClusterInventoryData",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDedicatedBlockStorageClusterInventoryDataResponse>(await this.callApi(params, req, runtime), new $_model.QueryDedicatedBlockStorageClusterInventoryDataResponse({}));
  }

  /**
   * Query dedicated block storage cluster capacity trend data, includ available capacity size and total capacity size.
   * 
   * @remarks
   * Period is the time interval between data retrieval points. When set to 60 (minute interval), a maximum of 1440 data points can be returned; when set to 3600 (hour interval), a maximum of 744 data points can be returned; and when set to 86400 (day interval), a maximum of 366 data points can be returned.
   * 
   * @param request - QueryDedicatedBlockStorageClusterInventoryDataRequest
   * @returns QueryDedicatedBlockStorageClusterInventoryDataResponse
   */
  async queryDedicatedBlockStorageClusterInventoryData(request: $_model.QueryDedicatedBlockStorageClusterInventoryDataRequest): Promise<$_model.QueryDedicatedBlockStorageClusterInventoryDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDedicatedBlockStorageClusterInventoryDataWithOptions(request, runtime);
  }

  /**
   * Removes a replication pair from a replication pair-consistent group. After a replication pair is removed from a replication pair-consistent group, the pair is disassociated from the group but is not deleted.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group from which you want to remove a replication pair must be in the **Created** (`created`), **Stopped** (`stopped`), or **Invalid** (`invalid`) state.
   * 
   * @param request - RemoveDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDiskReplicaPairResponse
   */
  async removeDiskReplicaPairWithOptions(request: $_model.RemoveDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new $_model.RemoveDiskReplicaPairResponse({}));
  }

  /**
   * Removes a replication pair from a replication pair-consistent group. After a replication pair is removed from a replication pair-consistent group, the pair is disassociated from the group but is not deleted.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group from which you want to remove a replication pair must be in the **Created** (`created`), **Stopped** (`stopped`), or **Invalid** (`invalid`) state.
   * 
   * @param request - RemoveDiskReplicaPairRequest
   * @returns RemoveDiskReplicaPairResponse
   */
  async removeDiskReplicaPair(request: $_model.RemoveDiskReplicaPairRequest): Promise<$_model.RemoveDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Enables the reverse replication feature for replication pairs that belong to a replication pair-consistent group. After reverse replication is enabled, data stored on the original secondary disks is replicated to the original primary disks. When a reverse replication is being performed, the primary and secondary sites of the replication pair-consistent group remain unchanged, but data is replicated from the secondary site to the primary site.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group for which you want to enable reverse replication must be in the **Failovered** (`failovered`) state. You can call the `FailoverDiskReplicaPair` operation to enable failover.
   * *   Before a reverse replication is performed, the primary disks must be detached from its associated Elastic Compute Service (ECS) instance and must be in the Unattached state. You can call the [DetachDisk](https://help.aliyun.com/document_detail/25516.html) operation to detach the disks.
   * *   After you enable reverse replication, you must call the `StartDiskReplicaPair` operation again to enable the async replication feature before data can be replicated from the original secondary disks to the original primary disks.
   * *   You can set the ReverseReplicate parameter to false to cancel the **Failovered** (`failovered`) state and restore the original replication direction.
   * 
   * @param request - ReprotectDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReprotectDiskReplicaGroupResponse
   */
  async reprotectDiskReplicaGroupWithOptions(request: $_model.ReprotectDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReprotectDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    if (!$dara.isNull(request.reverseReplicate)) {
      query["ReverseReplicate"] = request.reverseReplicate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReprotectDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReprotectDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new $_model.ReprotectDiskReplicaGroupResponse({}));
  }

  /**
   * Enables the reverse replication feature for replication pairs that belong to a replication pair-consistent group. After reverse replication is enabled, data stored on the original secondary disks is replicated to the original primary disks. When a reverse replication is being performed, the primary and secondary sites of the replication pair-consistent group remain unchanged, but data is replicated from the secondary site to the primary site.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group for which you want to enable reverse replication must be in the **Failovered** (`failovered`) state. You can call the `FailoverDiskReplicaPair` operation to enable failover.
   * *   Before a reverse replication is performed, the primary disks must be detached from its associated Elastic Compute Service (ECS) instance and must be in the Unattached state. You can call the [DetachDisk](https://help.aliyun.com/document_detail/25516.html) operation to detach the disks.
   * *   After you enable reverse replication, you must call the `StartDiskReplicaPair` operation again to enable the async replication feature before data can be replicated from the original secondary disks to the original primary disks.
   * *   You can set the ReverseReplicate parameter to false to cancel the **Failovered** (`failovered`) state and restore the original replication direction.
   * 
   * @param request - ReprotectDiskReplicaGroupRequest
   * @returns ReprotectDiskReplicaGroupResponse
   */
  async reprotectDiskReplicaGroup(request: $_model.ReprotectDiskReplicaGroupRequest): Promise<$_model.ReprotectDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reprotectDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Enables the reverse replication feature for a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair for which you want to enable reverse replication must be in the **Failovered** (`failovered`) state. You can call the [FailoverDiskReplicaPair](https://help.aliyun.com/document_detail/354358.html) operation to enable failover.
   * *   The primary disk must be detached from its associated Elastic Compute Service (ECS) instance and is in the Unattached state. You can call the [DetachDisk](https://help.aliyun.com/document_detail/25516.html) operation to detach the disk.
   * *   After you enable reverse replication, you must call the [StartDiskReplicaPair](https://help.aliyun.com/document_detail/354205.html) operation again to activate the replication pair before data can be replicated from the original secondary disk to the original primary disk.
   * *   You can set the ReverseReplicate parameter to false to cancel the **Failovered** (`failovered`) state and restore the original replication direction.
   * 
   * @param request - ReprotectDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReprotectDiskReplicaPairResponse
   */
  async reprotectDiskReplicaPairWithOptions(request: $_model.ReprotectDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReprotectDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    if (!$dara.isNull(request.reverseReplicate)) {
      query["ReverseReplicate"] = request.reverseReplicate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReprotectDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReprotectDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new $_model.ReprotectDiskReplicaPairResponse({}));
  }

  /**
   * Enables the reverse replication feature for a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair for which you want to enable reverse replication must be in the **Failovered** (`failovered`) state. You can call the [FailoverDiskReplicaPair](https://help.aliyun.com/document_detail/354358.html) operation to enable failover.
   * *   The primary disk must be detached from its associated Elastic Compute Service (ECS) instance and is in the Unattached state. You can call the [DetachDisk](https://help.aliyun.com/document_detail/25516.html) operation to detach the disk.
   * *   After you enable reverse replication, you must call the [StartDiskReplicaPair](https://help.aliyun.com/document_detail/354205.html) operation again to activate the replication pair before data can be replicated from the original secondary disk to the original primary disk.
   * *   You can set the ReverseReplicate parameter to false to cancel the **Failovered** (`failovered`) state and restore the original replication direction.
   * 
   * @param request - ReprotectDiskReplicaPairRequest
   * @returns ReprotectDiskReplicaPairResponse
   */
  async reprotectDiskReplicaPair(request: $_model.ReprotectDiskReplicaPairRequest): Promise<$_model.ReprotectDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reprotectDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * In the elastic type dedicated block storage cluster, you can easily achieve the specified throughput (Bps) for the target disk. You only need to set the cloud disk ID and the target throughput, simplifying the process of configuring.
   * 
   * @param request - SetDedicatedBlockStorageClusterDiskThroughputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDedicatedBlockStorageClusterDiskThroughputResponse
   */
  async setDedicatedBlockStorageClusterDiskThroughputWithOptions(request: $_model.SetDedicatedBlockStorageClusterDiskThroughputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDedicatedBlockStorageClusterDiskThroughputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bps)) {
      body["Bps"] = request.bps;
    }

    if (!$dara.isNull(request.diskId)) {
      body["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDedicatedBlockStorageClusterDiskThroughput",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDedicatedBlockStorageClusterDiskThroughputResponse>(await this.callApi(params, req, runtime), new $_model.SetDedicatedBlockStorageClusterDiskThroughputResponse({}));
  }

  /**
   * In the elastic type dedicated block storage cluster, you can easily achieve the specified throughput (Bps) for the target disk. You only need to set the cloud disk ID and the target throughput, simplifying the process of configuring.
   * 
   * @param request - SetDedicatedBlockStorageClusterDiskThroughputRequest
   * @returns SetDedicatedBlockStorageClusterDiskThroughputResponse
   */
  async setDedicatedBlockStorageClusterDiskThroughput(request: $_model.SetDedicatedBlockStorageClusterDiskThroughputRequest): Promise<$_model.SetDedicatedBlockStorageClusterDiskThroughputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDedicatedBlockStorageClusterDiskThroughputWithOptions(request, runtime);
  }

  /**
   * Enables the async replication feature for replication pairs that belong to a replication pair-consistent group. When the async replication feature is enabled for the pairs for the first time, the system first performs a full synchronization to synchronize all data from disks at the primary site (primary disks) to disks at the secondary site (secondary disks) and then periodically synchronizes incremental data based on the recovery point objective (RPO) of the replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   If you set the `OneShot` to `false`, the replication pair-consistent group must be in the **Created** (`created` ), **Synchronizing** (`syncing` ), **Normal** (`normal` ), or **Stopped** (`stopped`) state.
   * *   If you set `OneShot` to `true`, the replication pair-consistent group must be in the **Created** (`created` ), **One-time Syncing** (`manual_syncing` ), or **Stopped** (`stopped`) state. The time interval between two consecutive one-time synchronizations must be longer than one half of the recovery point objective (RPO).
   * *   After a replication pair-consistent group is activated, the group enters the **Initial Syncing** (`initial_syncing`) state and the system performs the first async replication to replicate all data from the primary disks to secondary disks.
   * 
   * @param request - StartDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDiskReplicaGroupResponse
   */
  async startDiskReplicaGroupWithOptions(request: $_model.StartDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.oneShot)) {
      query["OneShot"] = request.oneShot;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new $_model.StartDiskReplicaGroupResponse({}));
  }

  /**
   * Enables the async replication feature for replication pairs that belong to a replication pair-consistent group. When the async replication feature is enabled for the pairs for the first time, the system first performs a full synchronization to synchronize all data from disks at the primary site (primary disks) to disks at the secondary site (secondary disks) and then periodically synchronizes incremental data based on the recovery point objective (RPO) of the replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   If you set the `OneShot` to `false`, the replication pair-consistent group must be in the **Created** (`created` ), **Synchronizing** (`syncing` ), **Normal** (`normal` ), or **Stopped** (`stopped`) state.
   * *   If you set `OneShot` to `true`, the replication pair-consistent group must be in the **Created** (`created` ), **One-time Syncing** (`manual_syncing` ), or **Stopped** (`stopped`) state. The time interval between two consecutive one-time synchronizations must be longer than one half of the recovery point objective (RPO).
   * *   After a replication pair-consistent group is activated, the group enters the **Initial Syncing** (`initial_syncing`) state and the system performs the first async replication to replicate all data from the primary disks to secondary disks.
   * 
   * @param request - StartDiskReplicaGroupRequest
   * @returns StartDiskReplicaGroupResponse
   */
  async startDiskReplicaGroup(request: $_model.StartDiskReplicaGroupRequest): Promise<$_model.StartDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Activates a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Created** (`created`) or **Stopped** (`stopped`) state can be activated.
   * *   After a replication pair is activated, it enters the **Initial Syncing** (`initial_syncing`) state and the system performs the first asynchronous replication to replicate all data from the primary disk to the secondary disk.
   * 
   * @param request - StartDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDiskReplicaPairResponse
   */
  async startDiskReplicaPairWithOptions(request: $_model.StartDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.oneShot)) {
      query["OneShot"] = request.oneShot;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new $_model.StartDiskReplicaPairResponse({}));
  }

  /**
   * Activates a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Created** (`created`) or **Stopped** (`stopped`) state can be activated.
   * *   After a replication pair is activated, it enters the **Initial Syncing** (`initial_syncing`) state and the system performs the first asynchronous replication to replicate all data from the primary disk to the secondary disk.
   * 
   * @param request - StartDiskReplicaPairRequest
   * @returns StartDiskReplicaPairResponse
   */
  async startDiskReplicaPair(request: $_model.StartDiskReplicaPairRequest): Promise<$_model.StartDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Starts a disaster recovery drill to ensure the continued replication and clone the data from the last recovery point of the secondary disk to a new disk. This helps you test the completeness and correctness of applications that are deployed on the disaster recovery site on a regular basis.
   * 
   * @remarks
   * After the disaster recovery drill is complete on the secondary disk, a pay-as-you-go drill disk that has the same capacity and category as the secondary disk is created in the zone where the secondary disk resides. The drill disk contains last-recovery-point data that can be used to test the completeness and correctness of applications.
   * 
   * @param request - StartPairDrillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartPairDrillResponse
   */
  async startPairDrillWithOptions(request: $_model.StartPairDrillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartPairDrillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.pairId)) {
      query["PairId"] = request.pairId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartPairDrill",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartPairDrillResponse>(await this.callApi(params, req, runtime), new $_model.StartPairDrillResponse({}));
  }

  /**
   * Starts a disaster recovery drill to ensure the continued replication and clone the data from the last recovery point of the secondary disk to a new disk. This helps you test the completeness and correctness of applications that are deployed on the disaster recovery site on a regular basis.
   * 
   * @remarks
   * After the disaster recovery drill is complete on the secondary disk, a pay-as-you-go drill disk that has the same capacity and category as the secondary disk is created in the zone where the secondary disk resides. The drill disk contains last-recovery-point data that can be used to test the completeness and correctness of applications.
   * 
   * @param request - StartPairDrillRequest
   * @returns StartPairDrillResponse
   */
  async startPairDrill(request: $_model.StartPairDrillRequest): Promise<$_model.StartPairDrillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startPairDrillWithOptions(request, runtime);
  }

  /**
   * Starts a disaster recovery drill in a replication pair-consistent group to ensure the continued replication and restores data from the latest recovery point of secondary disks to new disks. This helps test the completeness and correctness of applications that are deployed on the disaster recovery site on a regular basis.
   * 
   * @remarks
   * After the disaster recovery drill is complete on secondary disks, a pay-as-you-go drill disk is created in the zone where the secondary disk of each replication pair resides. The latest-recovery-point data is restored to the drill disks to test the completeness and correctness of applications.
   * 
   * @param request - StartReplicaGroupDrillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartReplicaGroupDrillResponse
   */
  async startReplicaGroupDrillWithOptions(request: $_model.StartReplicaGroupDrillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartReplicaGroupDrillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartReplicaGroupDrill",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartReplicaGroupDrillResponse>(await this.callApi(params, req, runtime), new $_model.StartReplicaGroupDrillResponse({}));
  }

  /**
   * Starts a disaster recovery drill in a replication pair-consistent group to ensure the continued replication and restores data from the latest recovery point of secondary disks to new disks. This helps test the completeness and correctness of applications that are deployed on the disaster recovery site on a regular basis.
   * 
   * @remarks
   * After the disaster recovery drill is complete on secondary disks, a pay-as-you-go drill disk is created in the zone where the secondary disk of each replication pair resides. The latest-recovery-point data is restored to the drill disks to test the completeness and correctness of applications.
   * 
   * @param request - StartReplicaGroupDrillRequest
   * @returns StartReplicaGroupDrillResponse
   */
  async startReplicaGroupDrill(request: $_model.StartReplicaGroupDrillRequest): Promise<$_model.StartReplicaGroupDrillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startReplicaGroupDrillWithOptions(request, runtime);
  }

  /**
   * Stops a replication pair-consistent group. This operation stops all replication pairs in the replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group that you want to stop must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), or **Stopped** (`stopped`) state.
   * *   When a replication pair-consistent group is stopped, it enters the **Stopped** (`stopped`) state. If a replication pair-consistent group cannot be stopped, the state of the group remains unchanged or changes to **Stop Failed** (`stop_failed`). In this case, try again later.
   * 
   * @param request - StopDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDiskReplicaGroupResponse
   */
  async stopDiskReplicaGroupWithOptions(request: $_model.StopDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new $_model.StopDiskReplicaGroupResponse({}));
  }

  /**
   * Stops a replication pair-consistent group. This operation stops all replication pairs in the replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group that you want to stop must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), or **Stopped** (`stopped`) state.
   * *   When a replication pair-consistent group is stopped, it enters the **Stopped** (`stopped`) state. If a replication pair-consistent group cannot be stopped, the state of the group remains unchanged or changes to **Stop Failed** (`stop_failed`). In this case, try again later.
   * 
   * @param request - StopDiskReplicaGroupRequest
   * @returns StopDiskReplicaGroupResponse
   */
  async stopDiskReplicaGroup(request: $_model.StopDiskReplicaGroupRequest): Promise<$_model.StopDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Stops a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Initial Syncing** (`initial_syncing`), **Syncing** (`syncing`), **One-time Syncing** (`manual_syncing`), or **Normal** (`normal`) state can be stopped. When a replication pair is stopped, it enters the Stopped (`stopped`) state. The secondary disk rolls back to the point in time when the last async replication was complete and drops all the data that is being replicated from the primary disk.
   * 
   * @param request - StopDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDiskReplicaPairResponse
   */
  async stopDiskReplicaPairWithOptions(request: $_model.StopDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new $_model.StopDiskReplicaPairResponse({}));
  }

  /**
   * Stops a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Initial Syncing** (`initial_syncing`), **Syncing** (`syncing`), **One-time Syncing** (`manual_syncing`), or **Normal** (`normal`) state can be stopped. When a replication pair is stopped, it enters the Stopped (`stopped`) state. The secondary disk rolls back to the point in time when the last async replication was complete and drops all the data that is being replicated from the primary disk.
   * 
   * @param request - StopDiskReplicaPairRequest
   * @returns StopDiskReplicaPairResponse
   */
  async stopDiskReplicaPair(request: $_model.StopDiskReplicaPairRequest): Promise<$_model.StopDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Creates tags and adds the tags to Elastic Block Storage (EBS) resources.
   * 
   * @remarks
   * Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number of tags is reached, an error message is returned. For more information, see the "Tag limits" section in [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      action: "TagResources",
      version: "2021-07-30",
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
   * Creates tags and adds the tags to Elastic Block Storage (EBS) resources.
   * 
   * @remarks
   * Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number of tags is reached, an error message is returned. For more information, see the "Tag limits" section in [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Unbind disks from a enterprise-level snapshot policy.
   * 
   * @param request - UnbindEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindEnterpriseSnapshotPolicyResponse
   */
  async unbindEnterpriseSnapshotPolicyWithOptions(request: $_model.UnbindEnterpriseSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindEnterpriseSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.diskTargets)) {
      query["DiskTargets"] = request.diskTargets;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UnbindEnterpriseSnapshotPolicyResponse({}));
  }

  /**
   * Unbind disks from a enterprise-level snapshot policy.
   * 
   * @param request - UnbindEnterpriseSnapshotPolicyRequest
   * @returns UnbindEnterpriseSnapshotPolicyResponse
   */
  async unbindEnterpriseSnapshotPolicy(request: $_model.UnbindEnterpriseSnapshotPolicyRequest): Promise<$_model.UnbindEnterpriseSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Removes tags from specified Elastic Block Storage (EBS) resources.
   * 
   * @remarks
   *   You can remove up to 20 tags at a time.
   * *   After a tag is removed from an EBS resource, the tag is automatically deleted if the tag is not added to any instance.
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

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      version: "2021-07-30",
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
   * Removes tags from specified Elastic Block Storage (EBS) resources.
   * 
   * @remarks
   *   You can remove up to 20 tags at a time.
   * *   After a tag is removed from an EBS resource, the tag is automatically deleted if the tag is not added to any instance.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Search for a enterprise-level snapshot policy.
   * 
   * @param tmpReq - UpdateEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnterpriseSnapshotPolicyResponse
   */
  async updateEnterpriseSnapshotPolicyWithOptions(tmpReq: $_model.UpdateEnterpriseSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEnterpriseSnapshotPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateEnterpriseSnapshotPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.crossRegionCopyInfo)) {
      request.crossRegionCopyInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.crossRegionCopyInfo, "CrossRegionCopyInfo", "json");
    }

    if (!$dara.isNull(tmpReq.retainRule)) {
      request.retainRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retainRule, "RetainRule", "json");
    }

    if (!$dara.isNull(tmpReq.schedule)) {
      request.scheduleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedule, "Schedule", "json");
    }

    if (!$dara.isNull(tmpReq.specialRetainRules)) {
      request.specialRetainRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.specialRetainRules, "SpecialRetainRules", "json");
    }

    if (!$dara.isNull(tmpReq.storageRule)) {
      request.storageRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storageRule, "StorageRule", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.crossRegionCopyInfoShrink)) {
      query["CrossRegionCopyInfo"] = request.crossRegionCopyInfoShrink;
    }

    if (!$dara.isNull(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.retainRuleShrink)) {
      query["RetainRule"] = request.retainRuleShrink;
    }

    if (!$dara.isNull(request.scheduleShrink)) {
      query["Schedule"] = request.scheduleShrink;
    }

    if (!$dara.isNull(request.specialRetainRulesShrink)) {
      query["SpecialRetainRules"] = request.specialRetainRulesShrink;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.storageRuleShrink)) {
      query["StorageRule"] = request.storageRuleShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEnterpriseSnapshotPolicyResponse({}));
  }

  /**
   * Search for a enterprise-level snapshot policy.
   * 
   * @param request - UpdateEnterpriseSnapshotPolicyRequest
   * @returns UpdateEnterpriseSnapshotPolicyResponse
   */
  async updateEnterpriseSnapshotPolicy(request: $_model.UpdateEnterpriseSnapshotPolicyRequest): Promise<$_model.UpdateEnterpriseSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * 更新解决方案实例属性
   * 
   * @param request - UpdateSolutionInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSolutionInstanceAttributeResponse
   */
  async updateSolutionInstanceAttributeWithOptions(request: $_model.UpdateSolutionInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSolutionInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.solutionInstanceId)) {
      query["SolutionInstanceId"] = request.solutionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSolutionInstanceAttribute",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSolutionInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSolutionInstanceAttributeResponse({}));
  }

  /**
   * 更新解决方案实例属性
   * 
   * @param request - UpdateSolutionInstanceAttributeRequest
   * @returns UpdateSolutionInstanceAttributeResponse
   */
  async updateSolutionInstanceAttribute(request: $_model.UpdateSolutionInstanceAttributeRequest): Promise<$_model.UpdateSolutionInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSolutionInstanceAttributeWithOptions(request, runtime);
  }

}
