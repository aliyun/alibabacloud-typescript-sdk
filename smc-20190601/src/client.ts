// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("smc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Associates multiple migration sources with a workgroup.
   * 
   * @remarks
   * A migration source can be associated with only one workgroup.
   * 
   * @param request - AssociateSourceServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateSourceServersResponse
   */
  async associateSourceServersWithOptions(request: $_model.AssociateSourceServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateSourceServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.workgroupId)) {
      query["WorkgroupId"] = request.workgroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateSourceServers",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateSourceServersResponse>(await this.callApi(params, req, runtime), new $_model.AssociateSourceServersResponse({}));
  }

  /**
   * Associates multiple migration sources with a workgroup.
   * 
   * @remarks
   * A migration source can be associated with only one workgroup.
   * 
   * @param request - AssociateSourceServersRequest
   * @returns AssociateSourceServersResponse
   */
  async associateSourceServers(request: $_model.AssociateSourceServersRequest): Promise<$_model.AssociateSourceServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateSourceServersWithOptions(request, runtime);
  }

  /**
   * Creates an activation code.
   * 
   * @remarks
   * If you want to import the information of migration sources by using an activation code, you can call this operation to create one.
   * 
   * @param request - CreateAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessTokenResponse
   */
  async createAccessTokenWithOptions(request: $_model.CreateAccessTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.timeToLiveInDays)) {
      query["TimeToLiveInDays"] = request.timeToLiveInDays;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessToken",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessTokenResponse({}));
  }

  /**
   * Creates an activation code.
   * 
   * @remarks
   * If you want to import the information of migration sources by using an activation code, you can call this operation to create one.
   * 
   * @param request - CreateAccessTokenRequest
   * @returns CreateAccessTokenResponse
   */
  async createAccessToken(request: $_model.CreateAccessTokenRequest): Promise<$_model.CreateAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessTokenWithOptions(request, runtime);
  }

  /**
   * Server Migration Center (SMC) allows you to migrate Alibaba Cloud ECS instances across zones in the same region. You can also change the instance type (vCPU and memory) within the same instance family to meet your business requirements. You can use this API to create a cross-zone migration job.
   * 
   * @remarks
   * For more information about the limits and impacts of cross-zone migration, see [Cross-zone ECS instance migration](https://help.aliyun.com/document_detail/476797.html).
   * 
   * @param request - CreateCrossZoneMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCrossZoneMigrationJobResponse
   */
  async createCrossZoneMigrationJobWithOptions(request: $_model.CreateCrossZoneMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCrossZoneMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.disk)) {
      query["Disk"] = request.disk;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.targetInstanceType)) {
      query["TargetInstanceType"] = request.targetInstanceType;
    }

    if (!$dara.isNull(request.targetVSwitchId)) {
      query["TargetVSwitchId"] = request.targetVSwitchId;
    }

    if (!$dara.isNull(request.targetZoneId)) {
      query["TargetZoneId"] = request.targetZoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCrossZoneMigrationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCrossZoneMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateCrossZoneMigrationJobResponse({}));
  }

  /**
   * Server Migration Center (SMC) allows you to migrate Alibaba Cloud ECS instances across zones in the same region. You can also change the instance type (vCPU and memory) within the same instance family to meet your business requirements. You can use this API to create a cross-zone migration job.
   * 
   * @remarks
   * For more information about the limits and impacts of cross-zone migration, see [Cross-zone ECS instance migration](https://help.aliyun.com/document_detail/476797.html).
   * 
   * @param request - CreateCrossZoneMigrationJobRequest
   * @returns CreateCrossZoneMigrationJobResponse
   */
  async createCrossZoneMigrationJob(request: $_model.CreateCrossZoneMigrationJobRequest): Promise<$_model.CreateCrossZoneMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCrossZoneMigrationJobWithOptions(request, runtime);
  }

  /**
   * Creates a migration job for a source server.
   * 
   * @remarks
   * ## Usage notes
   * *   You can create migration jobs only for source servers that are in the Available state.
   * *   Each source server can be associated with only one migration job that is in the Ready, Running, Stopped, Waiting, InError, or Expired state.
   * *   You can create a maximum of 1,000 migration jobs within each Alibaba Cloud account.
   * *   If you migrate a source server to an image, you must specify the ImageName, SystemDiskSize, and DataDisk parameters.
   * *   If you use a virtual private cloud (VPC) to migrate data, the VSwitchId parameter is required and the VpcId parameter is optional.
   * *   Server Migration Center (SMC) allows you to migrate source servers to Docker container images. This allows you to migrate containerized applications in a cost-effective way.
   * 
   * @param request - CreateReplicationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReplicationJobResponse
   */
  async createReplicationJobWithOptions(request: $_model.CreateReplicationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReplicationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.containerNamespace)) {
      query["ContainerNamespace"] = request.containerNamespace;
    }

    if (!$dara.isNull(request.containerRepository)) {
      query["ContainerRepository"] = request.containerRepository;
    }

    if (!$dara.isNull(request.containerTag)) {
      query["ContainerTag"] = request.containerTag;
    }

    if (!$dara.isNull(request.dataDisk)) {
      query["DataDisk"] = request.dataDisk;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.disks)) {
      query["Disks"] = request.disks;
    }

    if (!$dara.isNull(request.frequency)) {
      query["Frequency"] = request.frequency;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceRamRole)) {
      query["InstanceRamRole"] = request.instanceRamRole;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.launchTemplateId)) {
      query["LaunchTemplateId"] = request.launchTemplateId;
    }

    if (!$dara.isNull(request.launchTemplateVersion)) {
      query["LaunchTemplateVersion"] = request.launchTemplateVersion;
    }

    if (!$dara.isNull(request.licenseType)) {
      query["LicenseType"] = request.licenseType;
    }

    if (!$dara.isNull(request.maxNumberOfImageToKeep)) {
      query["MaxNumberOfImageToKeep"] = request.maxNumberOfImageToKeep;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.netMode)) {
      query["NetMode"] = request.netMode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicationParameters)) {
      query["ReplicationParameters"] = request.replicationParameters;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.runOnce)) {
      query["RunOnce"] = request.runOnce;
    }

    if (!$dara.isNull(request.scheduledStartTime)) {
      query["ScheduledStartTime"] = request.scheduledStartTime;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.systemDiskPart)) {
      query["SystemDiskPart"] = request.systemDiskPart;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.validTime)) {
      query["ValidTime"] = request.validTime;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateReplicationJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateReplicationJobResponse({}));
  }

  /**
   * Creates a migration job for a source server.
   * 
   * @remarks
   * ## Usage notes
   * *   You can create migration jobs only for source servers that are in the Available state.
   * *   Each source server can be associated with only one migration job that is in the Ready, Running, Stopped, Waiting, InError, or Expired state.
   * *   You can create a maximum of 1,000 migration jobs within each Alibaba Cloud account.
   * *   If you migrate a source server to an image, you must specify the ImageName, SystemDiskSize, and DataDisk parameters.
   * *   If you use a virtual private cloud (VPC) to migrate data, the VSwitchId parameter is required and the VpcId parameter is optional.
   * *   Server Migration Center (SMC) allows you to migrate source servers to Docker container images. This allows you to migrate containerized applications in a cost-effective way.
   * 
   * @param request - CreateReplicationJobRequest
   * @returns CreateReplicationJobResponse
   */
  async createReplicationJob(request: $_model.CreateReplicationJobRequest): Promise<$_model.CreateReplicationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createReplicationJobWithOptions(request, runtime);
  }

  /**
   * Creates a workgroup. You can create a workgroup to manage the lifecycles of multiple migration tasks at a time. This is suitable for scenarios in which multiple servers are migrated.
   * 
   * @remarks
   *   You can create up to 50 workgroups within an Alibaba Cloud account.
   * *   A workgroup can be associated with a maximum of 50 migration sources.
   * *   A migration source can be associated with only one workgroup.
   * 
   * @param request - CreateWorkgroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkgroupResponse
   */
  async createWorkgroupWithOptions(request: $_model.CreateWorkgroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkgroupResponse> {
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkgroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkgroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkgroupResponse({}));
  }

  /**
   * Creates a workgroup. You can create a workgroup to manage the lifecycles of multiple migration tasks at a time. This is suitable for scenarios in which multiple servers are migrated.
   * 
   * @remarks
   *   You can create up to 50 workgroups within an Alibaba Cloud account.
   * *   A workgroup can be associated with a maximum of 50 migration sources.
   * *   A migration source can be associated with only one workgroup.
   * 
   * @param request - CreateWorkgroupRequest
   * @returns CreateWorkgroupResponse
   */
  async createWorkgroup(request: $_model.CreateWorkgroupRequest): Promise<$_model.CreateWorkgroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkgroupWithOptions(request, runtime);
  }

  /**
   * Stops an incremental migration job that periodically runs. After you call this operation to stop an incremental migration job, the migration job is complete.
   * 
   * @remarks
   * ## Usage notes
   * *   The incremental migration job must be in the Waiting state.
   * *   After you call this operation, the incremental migration job no longer periodically runs. In the meantime, Server Migration Center (SMC) determines whether to perform a full data migration for the last time based on the value of the `SyncData` parameter. If you set the SyncData parameter to `false`, SMC releases intermediate resources without data migration before the migration job is complete. If you set the SyncData parameter to `true`, SMC performs a full data migration and releases intermediate resources before the migration job is complete.
   * 
   * @param request - CutOverReplicationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CutOverReplicationJobResponse
   */
  async cutOverReplicationJobWithOptions(request: $_model.CutOverReplicationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CutOverReplicationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.syncData)) {
      query["SyncData"] = request.syncData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CutOverReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CutOverReplicationJobResponse>(await this.callApi(params, req, runtime), new $_model.CutOverReplicationJobResponse({}));
  }

  /**
   * Stops an incremental migration job that periodically runs. After you call this operation to stop an incremental migration job, the migration job is complete.
   * 
   * @remarks
   * ## Usage notes
   * *   The incremental migration job must be in the Waiting state.
   * *   After you call this operation, the incremental migration job no longer periodically runs. In the meantime, Server Migration Center (SMC) determines whether to perform a full data migration for the last time based on the value of the `SyncData` parameter. If you set the SyncData parameter to `false`, SMC releases intermediate resources without data migration before the migration job is complete. If you set the SyncData parameter to `true`, SMC performs a full data migration and releases intermediate resources before the migration job is complete.
   * 
   * @param request - CutOverReplicationJobRequest
   * @returns CutOverReplicationJobResponse
   */
  async cutOverReplicationJob(request: $_model.CutOverReplicationJobRequest): Promise<$_model.CutOverReplicationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cutOverReplicationJobWithOptions(request, runtime);
  }

  /**
   * Deletes an activation code.
   * 
   * @remarks
   * You can call this operation to delete an activation code if you no longer need to import the information about migration sources by using the activation code or if the activation code has expired.
   * 
   * @param request - DeleteAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessTokenResponse
   */
  async deleteAccessTokenWithOptions(request: $_model.DeleteAccessTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessTokenId)) {
      query["AccessTokenId"] = request.accessTokenId;
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
      action: "DeleteAccessToken",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessTokenResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessTokenResponse({}));
  }

  /**
   * Deletes an activation code.
   * 
   * @remarks
   * You can call this operation to delete an activation code if you no longer need to import the information about migration sources by using the activation code or if the activation code has expired.
   * 
   * @param request - DeleteAccessTokenRequest
   * @returns DeleteAccessTokenResponse
   */
  async deleteAccessToken(request: $_model.DeleteAccessTokenRequest): Promise<$_model.DeleteAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessTokenWithOptions(request, runtime);
  }

  /**
   * Deletes a migration job.
   * 
   * @remarks
   * ## Usage notes
   * *   Deleted migration jobs cannot be restored.
   * *   After a migration job is deleted, associated resources, such as the intermediate instance, are automatically released.
   * 
   * @param request - DeleteReplicationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteReplicationJobResponse
   */
  async deleteReplicationJobWithOptions(request: $_model.DeleteReplicationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteReplicationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
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
      action: "DeleteReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteReplicationJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteReplicationJobResponse({}));
  }

  /**
   * Deletes a migration job.
   * 
   * @remarks
   * ## Usage notes
   * *   Deleted migration jobs cannot be restored.
   * *   After a migration job is deleted, associated resources, such as the intermediate instance, are automatically released.
   * 
   * @param request - DeleteReplicationJobRequest
   * @returns DeleteReplicationJobResponse
   */
  async deleteReplicationJob(request: $_model.DeleteReplicationJobRequest): Promise<$_model.DeleteReplicationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteReplicationJobWithOptions(request, runtime);
  }

  /**
   * Deletes a migration source.
   * 
   * @remarks
   * ## Usage notes
   * *   If a migration job is created for the migration source and the migration job is in the Running state, the migration source cannot be deleted.
   * *   If a migration job is created for the migration source but the migration job is not in the Running state, you can set the `Force` parameter to true to delete the migration source.
   * 
   * @param request - DeleteSourceServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSourceServerResponse
   */
  async deleteSourceServerWithOptions(request: $_model.DeleteSourceServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSourceServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSourceServer",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSourceServerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSourceServerResponse({}));
  }

  /**
   * Deletes a migration source.
   * 
   * @remarks
   * ## Usage notes
   * *   If a migration job is created for the migration source and the migration job is in the Running state, the migration source cannot be deleted.
   * *   If a migration job is created for the migration source but the migration job is not in the Running state, you can set the `Force` parameter to true to delete the migration source.
   * 
   * @param request - DeleteSourceServerRequest
   * @returns DeleteSourceServerResponse
   */
  async deleteSourceServer(request: $_model.DeleteSourceServerRequest): Promise<$_model.DeleteSourceServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSourceServerWithOptions(request, runtime);
  }

  /**
   * Deletes a workgroup.
   * 
   * @remarks
   * To delete a workgroup, you must delete or dissociate the migration source that is associated with the workgroup. For more information, see [DeleteSourceServer](https://help.aliyun.com/document_detail/2402124.html).
   * 
   * @param request - DeleteWorkgroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkgroupResponse
   */
  async deleteWorkgroupWithOptions(request: $_model.DeleteWorkgroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkgroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.workgroupId)) {
      query["WorkgroupId"] = request.workgroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkgroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkgroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkgroupResponse({}));
  }

  /**
   * Deletes a workgroup.
   * 
   * @remarks
   * To delete a workgroup, you must delete or dissociate the migration source that is associated with the workgroup. For more information, see [DeleteSourceServer](https://help.aliyun.com/document_detail/2402124.html).
   * 
   * @param request - DeleteWorkgroupRequest
   * @returns DeleteWorkgroupResponse
   */
  async deleteWorkgroup(request: $_model.DeleteWorkgroupRequest): Promise<$_model.DeleteWorkgroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkgroupWithOptions(request, runtime);
  }

  /**
   * Queries the details of migration jobs.
   * 
   * @remarks
   * ## Usage notes
   * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are used as filter conditions.
   * *   Server Migration Center (SMC) allows you to migrate source servers to Docker container images. You can use SMC to migrate containerized applications in a cost-effective way. For more information, see [Terms](https://help.aliyun.com/document_detail/60744.html).
   * 
   * @param request - DescribeReplicationJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeReplicationJobsResponse
   */
  async describeReplicationJobsWithOptions(request: $_model.DescribeReplicationJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeReplicationJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessStatus)) {
      query["BusinessStatus"] = request.businessStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeReplicationJobs",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeReplicationJobsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeReplicationJobsResponse({}));
  }

  /**
   * Queries the details of migration jobs.
   * 
   * @remarks
   * ## Usage notes
   * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are used as filter conditions.
   * *   Server Migration Center (SMC) allows you to migrate source servers to Docker container images. You can use SMC to migrate containerized applications in a cost-effective way. For more information, see [Terms](https://help.aliyun.com/document_detail/60744.html).
   * 
   * @param request - DescribeReplicationJobsRequest
   * @returns DescribeReplicationJobsResponse
   */
  async describeReplicationJobs(request: $_model.DescribeReplicationJobsRequest): Promise<$_model.DescribeReplicationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeReplicationJobsWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more source servers.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You can specify multiple request parameters to filter instances. Specified parameters have logical AND relations. Only the specified parameters are used as filter conditions.
   * 
   * @param request - DescribeSourceServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSourceServersResponse
   */
  async describeSourceServersWithOptions(request: $_model.DescribeSourceServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSourceServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.relatedJobType)) {
      query["RelatedJobType"] = request.relatedJobType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.workgroupId)) {
      query["WorkgroupId"] = request.workgroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSourceServers",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSourceServersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSourceServersResponse({}));
  }

  /**
   * Queries the information about one or more source servers.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You can specify multiple request parameters to filter instances. Specified parameters have logical AND relations. Only the specified parameters are used as filter conditions.
   * 
   * @param request - DescribeSourceServersRequest
   * @returns DescribeSourceServersResponse
   */
  async describeSourceServers(request: $_model.DescribeSourceServersRequest): Promise<$_model.DescribeSourceServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSourceServersWithOptions(request, runtime);
  }

  /**
   * Queries the information about workgroups. After you create a workgroup, you can query the information about the workgroup, such as the name, description, and alert information.
   * 
   * @param request - DescribeWorkgroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWorkgroupsResponse
   */
  async describeWorkgroupsWithOptions(request: $_model.DescribeWorkgroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWorkgroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.workgroupId)) {
      query["WorkgroupId"] = request.workgroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWorkgroups",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWorkgroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWorkgroupsResponse({}));
  }

  /**
   * Queries the information about workgroups. After you create a workgroup, you can query the information about the workgroup, such as the name, description, and alert information.
   * 
   * @param request - DescribeWorkgroupsRequest
   * @returns DescribeWorkgroupsResponse
   */
  async describeWorkgroups(request: $_model.DescribeWorkgroupsRequest): Promise<$_model.DescribeWorkgroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWorkgroupsWithOptions(request, runtime);
  }

  /**
   * Disables an activation code.
   * 
   * @remarks
   * To prevent an activation code from being leaked, you can call this operation to disable the activation code. Disabled activation codes can no longer be used to import the information about migration sources. However, migration sources whose information has been imported are not affected.
   * 
   * @param request - DisableAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAccessTokenResponse
   */
  async disableAccessTokenWithOptions(request: $_model.DisableAccessTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAccessTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessTokenId)) {
      query["AccessTokenId"] = request.accessTokenId;
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
      action: "DisableAccessToken",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAccessTokenResponse>(await this.callApi(params, req, runtime), new $_model.DisableAccessTokenResponse({}));
  }

  /**
   * Disables an activation code.
   * 
   * @remarks
   * To prevent an activation code from being leaked, you can call this operation to disable the activation code. Disabled activation codes can no longer be used to import the information about migration sources. However, migration sources whose information has been imported are not affected.
   * 
   * @param request - DisableAccessTokenRequest
   * @returns DisableAccessTokenResponse
   */
  async disableAccessToken(request: $_model.DisableAccessTokenRequest): Promise<$_model.DisableAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAccessTokenWithOptions(request, runtime);
  }

  /**
   * Disassociates migration sources from a workgroup. If you do not need to use a workgroup to migrate migration sources, you can disassociate the migration sources from the workgroup.
   * 
   * @param request - DisassociateSourceServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateSourceServersResponse
   */
  async disassociateSourceServersWithOptions(request: $_model.DisassociateSourceServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisassociateSourceServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.workgroupId)) {
      query["WorkgroupId"] = request.workgroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateSourceServers",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociateSourceServersResponse>(await this.callApi(params, req, runtime), new $_model.DisassociateSourceServersResponse({}));
  }

  /**
   * Disassociates migration sources from a workgroup. If you do not need to use a workgroup to migrate migration sources, you can disassociate the migration sources from the workgroup.
   * 
   * @param request - DisassociateSourceServersRequest
   * @returns DisassociateSourceServersResponse
   */
  async disassociateSourceServers(request: $_model.DisassociateSourceServersRequest): Promise<$_model.DisassociateSourceServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateSourceServersWithOptions(request, runtime);
  }

  /**
   * Queries activation codes and the usage details of the activation codes.
   * 
   * @remarks
   * You can call this operation to query activation codes and the usage details of the activation codes. An activation code can be in the activated, unactivated, or expired state.
   * 
   * @param request - ListAccessTokensRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessTokensResponse
   */
  async listAccessTokensWithOptions(request: $_model.ListAccessTokensRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessTokensResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessTokenId)) {
      query["AccessTokenId"] = request.accessTokenId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccessTokens",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccessTokensResponse>(await this.callApi(params, req, runtime), new $_model.ListAccessTokensResponse({}));
  }

  /**
   * Queries activation codes and the usage details of the activation codes.
   * 
   * @remarks
   * You can call this operation to query activation codes and the usage details of the activation codes. An activation code can be in the activated, unactivated, or expired state.
   * 
   * @param request - ListAccessTokensRequest
   * @returns ListAccessTokensResponse
   */
  async listAccessTokens(request: $_model.ListAccessTokensRequest): Promise<$_model.ListAccessTokensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccessTokensWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are attached to Server Migration Center (SMC) resources. SMC resources include migration sources and migration jobs.
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
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
      version: "2019-06-01",
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
   * Queries the tags that are attached to Server Migration Center (SMC) resources. SMC resources include migration sources and migration jobs.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the parameters of a migration job.
   * 
   * @remarks
   * ## Usage notes
   * Before you modify the parameters of a migration job, take note of the following information:
   * *   The `Name` and `Description` parameters can be modified during the lifecycle of the migration job.
   * *   The `Frequency` and `MaxNumberOfImageToKeep` parameters can be modified only before the migration job is executed or when the migration job is in the `Waiting` state.
   * *   Other parameters can be modified only before the migration job is executed.
   * 
   * @param request - ModifyReplicationJobAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyReplicationJobAttributeResponse
   */
  async modifyReplicationJobAttributeWithOptions(request: $_model.ModifyReplicationJobAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyReplicationJobAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.containerNamespace)) {
      query["ContainerNamespace"] = request.containerNamespace;
    }

    if (!$dara.isNull(request.containerRepository)) {
      query["ContainerRepository"] = request.containerRepository;
    }

    if (!$dara.isNull(request.containerTag)) {
      query["ContainerTag"] = request.containerTag;
    }

    if (!$dara.isNull(request.dataDisk)) {
      query["DataDisk"] = request.dataDisk;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.frequency)) {
      query["Frequency"] = request.frequency;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceRamRole)) {
      query["InstanceRamRole"] = request.instanceRamRole;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.launchTemplateId)) {
      query["LaunchTemplateId"] = request.launchTemplateId;
    }

    if (!$dara.isNull(request.launchTemplateVersion)) {
      query["LaunchTemplateVersion"] = request.launchTemplateVersion;
    }

    if (!$dara.isNull(request.maxNumberOfImageToKeep)) {
      query["MaxNumberOfImageToKeep"] = request.maxNumberOfImageToKeep;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.netMode)) {
      query["NetMode"] = request.netMode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.replicationParameters)) {
      query["ReplicationParameters"] = request.replicationParameters;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scheduledStartTime)) {
      query["ScheduledStartTime"] = request.scheduledStartTime;
    }

    if (!$dara.isNull(request.systemDiskPart)) {
      query["SystemDiskPart"] = request.systemDiskPart;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.validTime)) {
      query["ValidTime"] = request.validTime;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyReplicationJobAttribute",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyReplicationJobAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyReplicationJobAttributeResponse({}));
  }

  /**
   * Modifies the parameters of a migration job.
   * 
   * @remarks
   * ## Usage notes
   * Before you modify the parameters of a migration job, take note of the following information:
   * *   The `Name` and `Description` parameters can be modified during the lifecycle of the migration job.
   * *   The `Frequency` and `MaxNumberOfImageToKeep` parameters can be modified only before the migration job is executed or when the migration job is in the `Waiting` state.
   * *   Other parameters can be modified only before the migration job is executed.
   * 
   * @param request - ModifyReplicationJobAttributeRequest
   * @returns ModifyReplicationJobAttributeResponse
   */
  async modifyReplicationJobAttribute(request: $_model.ModifyReplicationJobAttributeRequest): Promise<$_model.ModifyReplicationJobAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyReplicationJobAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a migration source.
   * 
   * @remarks
   * ## Usage notes
   * You can call this operation regardless of the status of the migration source.
   * 
   * @param request - ModifySourceServerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySourceServerAttributeResponse
   */
  async modifySourceServerAttributeWithOptions(request: $_model.ModifySourceServerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySourceServerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySourceServerAttribute",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySourceServerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifySourceServerAttributeResponse({}));
  }

  /**
   * Modifies the name and description of a migration source.
   * 
   * @remarks
   * ## Usage notes
   * You can call this operation regardless of the status of the migration source.
   * 
   * @param request - ModifySourceServerAttributeRequest
   * @returns ModifySourceServerAttributeResponse
   */
  async modifySourceServerAttribute(request: $_model.ModifySourceServerAttributeRequest): Promise<$_model.ModifySourceServerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySourceServerAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a workgroup.
   * 
   * @param request - ModifyWorkgroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWorkgroupAttributeResponse
   */
  async modifyWorkgroupAttributeWithOptions(request: $_model.ModifyWorkgroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWorkgroupAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.workgroupId)) {
      query["WorkgroupId"] = request.workgroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWorkgroupAttribute",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWorkgroupAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWorkgroupAttributeResponse({}));
  }

  /**
   * Modifies the name and description of a workgroup.
   * 
   * @param request - ModifyWorkgroupAttributeRequest
   * @returns ModifyWorkgroupAttributeResponse
   */
  async modifyWorkgroupAttribute(request: $_model.ModifyWorkgroupAttributeRequest): Promise<$_model.ModifyWorkgroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWorkgroupAttributeWithOptions(request, runtime);
  }

  /**
   * Starts a migration job.
   * 
   * @remarks
   * ## Usage notes
   * This operation can only be used to start the migration jobs that are in the Ready, Stopped, or InError state.
   * 
   * @param request - StartReplicationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartReplicationJobResponse
   */
  async startReplicationJobWithOptions(request: $_model.StartReplicationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartReplicationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
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
      action: "StartReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartReplicationJobResponse>(await this.callApi(params, req, runtime), new $_model.StartReplicationJobResponse({}));
  }

  /**
   * Starts a migration job.
   * 
   * @remarks
   * ## Usage notes
   * This operation can only be used to start the migration jobs that are in the Ready, Stopped, or InError state.
   * 
   * @param request - StartReplicationJobRequest
   * @returns StartReplicationJobResponse
   */
  async startReplicationJob(request: $_model.StartReplicationJobRequest): Promise<$_model.StartReplicationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startReplicationJobWithOptions(request, runtime);
  }

  /**
   * Pauses a migration job.
   * 
   * @remarks
   * ## Usage notes
   * You can call this operation to pause only a migration job whose primary status is Running and business status is Syncing.
   * 
   * @param request - StopReplicationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopReplicationJobResponse
   */
  async stopReplicationJobWithOptions(request: $_model.StopReplicationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopReplicationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
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
      action: "StopReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopReplicationJobResponse>(await this.callApi(params, req, runtime), new $_model.StopReplicationJobResponse({}));
  }

  /**
   * Pauses a migration job.
   * 
   * @remarks
   * ## Usage notes
   * You can call this operation to pause only a migration job whose primary status is Running and business status is Syncing.
   * 
   * @param request - StopReplicationJobRequest
   * @returns StopReplicationJobResponse
   */
  async stopReplicationJob(request: $_model.StopReplicationJobRequest): Promise<$_model.StopReplicationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopReplicationJobWithOptions(request, runtime);
  }

  /**
   * Creates tags and adds them to Server Migration Center (SMC) resources. The SMC resources include migration sources and jobs.
   * 
   * @remarks
   * ## Usage notes
   * Up to 20 tags can be added to each SMC resource.
   * Before you add tags to an SMC resource, Alibaba Cloud checks the number of the tags that have been added to the resource. If the maximum number is reached, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
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
      version: "2019-06-01",
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
   * Creates tags and adds them to Server Migration Center (SMC) resources. The SMC resources include migration sources and jobs.
   * 
   * @remarks
   * ## Usage notes
   * Up to 20 tags can be added to each SMC resource.
   * Before you add tags to an SMC resource, Alibaba Cloud checks the number of the tags that have been added to the resource. If the maximum number is reached, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags that are added to Server Migration Center (SMC) resources. The SMC resources include migration sources and jobs.
   * 
   * @remarks
   * You can call this operation to remove tags that are added to one or more SMC resources and delete the tags if the tags are no longer used.
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
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
      version: "2019-06-01",
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
   * Removes tags that are added to Server Migration Center (SMC) resources. The SMC resources include migration sources and jobs.
   * 
   * @remarks
   * You can call this operation to remove tags that are added to one or more SMC resources and delete the tags if the tags are no longer used.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
