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
      'cn-qingdao': "rds.aliyuncs.com",
      'cn-beijing': "rds.aliyuncs.com",
      'cn-hangzhou': "rds.aliyuncs.com",
      'cn-shanghai': "rds.aliyuncs.com",
      'cn-shenzhen': "rds.aliyuncs.com",
      'cn-heyuan': "rds.aliyuncs.com",
      'cn-hongkong': "rds.aliyuncs.com",
      'ap-southeast-1': "rds.aliyuncs.com",
      'us-west-1': "rds.aliyuncs.com",
      'us-east-1': "rds.aliyuncs.com",
      'cn-shanghai-finance-1': "rds.aliyuncs.com",
      'cn-shenzhen-finance-1': "rds.aliyuncs.com",
      'cn-north-2-gov-1': "rds.aliyuncs.com",
      'ap-northeast-2-pop': "rds.aliyuncs.com",
      'cn-beijing-finance-1': "rds.aliyuncs.com",
      'cn-beijing-finance-pop': "rds.aliyuncs.com",
      'cn-beijing-gov-1': "rds.aliyuncs.com",
      'cn-beijing-nu16-b01': "rds.aliyuncs.com",
      'cn-edge-1': "rds.aliyuncs.com",
      'cn-fujian': "rds.aliyuncs.com",
      'cn-haidian-cm12-c01': "rds.aliyuncs.com",
      'cn-hangzhou-bj-b01': "rds.aliyuncs.com",
      'cn-hangzhou-finance': "rds-vpc.cn-hangzhou-finance.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "rds.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "rds.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "rds.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "rds.aliyuncs.com",
      'cn-hangzhou-test-306': "rds.aliyuncs.com",
      'cn-hongkong-finance-pop': "rds.aliyuncs.com",
      'cn-qingdao-nebula': "rds.aliyuncs.com",
      'cn-shanghai-et15-b01': "rds.aliyuncs.com",
      'cn-shanghai-et2-b01': "rds.aliyuncs.com",
      'cn-shanghai-inner': "rds.aliyuncs.com",
      'cn-shanghai-internal-test-1': "rds.aliyuncs.com",
      'cn-shenzhen-inner': "rds.aliyuncs.com",
      'cn-shenzhen-st4-d01': "rds.aliyuncs.com",
      'cn-shenzhen-su18-b01': "rds.aliyuncs.com",
      'cn-wuhan': "rds.aliyuncs.com",
      'cn-yushanfang': "rds.aliyuncs.com",
      'cn-zhangbei': "rds.aliyuncs.com",
      'cn-zhangbei-na61-b01': "rds.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "rds.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "rds.aliyuncs.com",
      'eu-west-1-oxs': "rds.aliyuncs.com",
      'rus-west-1-pop': "rds.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("rds", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 接受并授权执行系统事件操作
   * 
   * @param request - AcceptRCInquiredSystemEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptRCInquiredSystemEventResponse
   */
  async acceptRCInquiredSystemEventWithOptions(request: $_model.AcceptRCInquiredSystemEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AcceptRCInquiredSystemEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AcceptRCInquiredSystemEvent",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AcceptRCInquiredSystemEventResponse>(await this.callApi(params, req, runtime), new $_model.AcceptRCInquiredSystemEventResponse({}));
  }

  /**
   * 接受并授权执行系统事件操作
   * 
   * @param request - AcceptRCInquiredSystemEventRequest
   * @returns AcceptRCInquiredSystemEventResponse
   */
  async acceptRCInquiredSystemEvent(request: $_model.AcceptRCInquiredSystemEventRequest): Promise<$_model.AcceptRCInquiredSystemEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptRCInquiredSystemEventWithOptions(request, runtime);
  }

  /**
   * 激活迁移上云目标端实例
   * 
   * @param request - ActivateMigrationTargetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateMigrationTargetInstanceResponse
   */
  async activateMigrationTargetInstanceWithOptions(request: $_model.ActivateMigrationTargetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateMigrationTargetInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.forceSwitch)) {
      query["ForceSwitch"] = request.forceSwitch;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      action: "ActivateMigrationTargetInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateMigrationTargetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ActivateMigrationTargetInstanceResponse({}));
  }

  /**
   * 激活迁移上云目标端实例
   * 
   * @param request - ActivateMigrationTargetInstanceRequest
   * @returns ActivateMigrationTargetInstanceResponse
   */
  async activateMigrationTargetInstance(request: $_model.ActivateMigrationTargetInstanceRequest): Promise<$_model.ActivateMigrationTargetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateMigrationTargetInstanceWithOptions(request, runtime);
  }

  /**
   * 在RDS资源上添加标签信息
   * 
   * @param request - AddTagsToResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTagsToResourceResponse
   */
  async addTagsToResourceWithOptions(request: $_model.AddTagsToResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTagsToResourceResponse> {
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.proxyId)) {
      query["proxyId"] = request.proxyId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTagsToResource",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTagsToResourceResponse>(await this.callApi(params, req, runtime), new $_model.AddTagsToResourceResponse({}));
  }

  /**
   * 在RDS资源上添加标签信息
   * 
   * @param request - AddTagsToResourceRequest
   * @returns AddTagsToResourceResponse
   */
  async addTagsToResource(request: $_model.AddTagsToResourceRequest): Promise<$_model.AddTagsToResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTagsToResourceWithOptions(request, runtime);
  }

  /**
   * 为RDS实例分配公网链接地址
   * 
   * @param request - AllocateInstancePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateInstancePublicConnectionResponse
   */
  async allocateInstancePublicConnectionWithOptions(request: $_model.AllocateInstancePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateInstancePublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.babelfishPort)) {
      query["BabelfishPort"] = request.babelfishPort;
    }

    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.generalGroupName)) {
      query["GeneralGroupName"] = request.generalGroupName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.PGBouncerPort)) {
      query["PGBouncerPort"] = request.PGBouncerPort;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateInstancePublicConnection",
      version: "2014-08-15",
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
   * 为RDS实例分配公网链接地址
   * 
   * @param request - AllocateInstancePublicConnectionRequest
   * @returns AllocateInstancePublicConnectionResponse
   */
  async allocateInstancePublicConnection(request: $_model.AllocateInstancePublicConnectionRequest): Promise<$_model.AllocateInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
   * 申请读写分离链接地址
   * 
   * @param request - AllocateReadWriteSplittingConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateReadWriteSplittingConnectionResponse
   */
  async allocateReadWriteSplittingConnectionWithOptions(request: $_model.AllocateReadWriteSplittingConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateReadWriteSplittingConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.distributionType)) {
      query["DistributionType"] = request.distributionType;
    }

    if (!$dara.isNull(request.maxDelayTime)) {
      query["MaxDelayTime"] = request.maxDelayTime;
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

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateReadWriteSplittingConnection",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocateReadWriteSplittingConnectionResponse>(await this.callApi(params, req, runtime), new $_model.AllocateReadWriteSplittingConnectionResponse({}));
  }

  /**
   * 申请读写分离链接地址
   * 
   * @param request - AllocateReadWriteSplittingConnectionRequest
   * @returns AllocateReadWriteSplittingConnectionResponse
   */
  async allocateReadWriteSplittingConnection(request: $_model.AllocateReadWriteSplittingConnectionRequest): Promise<$_model.AllocateReadWriteSplittingConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateReadWriteSplittingConnectionWithOptions(request, runtime);
  }

  /**
   * 绑定弹性网卡到RDS Custom实例
   * 
   * @param request - AssociateEipAddressWithRCInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateEipAddressWithRCInstanceResponse
   */
  async associateEipAddressWithRCInstanceWithOptions(request: $_model.AssociateEipAddressWithRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateEipAddressWithRCInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allocationId)) {
      query["AllocationId"] = request.allocationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateEipAddressWithRCInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateEipAddressWithRCInstanceResponse>(await this.callApi(params, req, runtime), new $_model.AssociateEipAddressWithRCInstanceResponse({}));
  }

  /**
   * 绑定弹性网卡到RDS Custom实例
   * 
   * @param request - AssociateEipAddressWithRCInstanceRequest
   * @returns AssociateEipAddressWithRCInstanceResponse
   */
  async associateEipAddressWithRCInstance(request: $_model.AssociateEipAddressWithRCInstanceRequest): Promise<$_model.AssociateEipAddressWithRCInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateEipAddressWithRCInstanceWithOptions(request, runtime);
  }

  /**
   * Invoke the AttachRCDisk API to mount a pay-as-you-go data disk or a system disk to an RDS Custom instance. The instance and the disk must be in the same zone.
   * 
   * @remarks
   * When invoking this API, note the following:
   * - The disk status must be Available (ready to mount).
   * - When mounting a data disk:
   *   - The target RDS Custom instance must be in the running or stopped state.
   *   - If the disk was purchased separately, its metering method must be pay-as-you-go.
   *   - When a system disk previously detached from an RDS Custom instance is mounted as a data disk, there is no restriction on its metering method.
   *   - An elastic ephemeral disk, once unmounted, can only be remounted to its original instance.
   * - When mounting a system disk:
   *   - The target RDS Custom instance must be the source instance from which the system disk was originally unmounted.
   *   - The target RDS Custom instance must be in the stopped state.
   *   - You must configure logon credentials for the instance.
   *   - Elastic ephemeral disks cannot be mounted as system disks.
   * 
   * @param request - AttachRCDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachRCDiskResponse
   */
  async attachRCDiskWithOptions(request: $_model.AttachRCDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachRCDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteWithInstance)) {
      query["DeleteWithInstance"] = request.deleteWithInstance;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachRCDisk",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachRCDiskResponse>(await this.callApi(params, req, runtime), new $_model.AttachRCDiskResponse({}));
  }

  /**
   * Invoke the AttachRCDisk API to mount a pay-as-you-go data disk or a system disk to an RDS Custom instance. The instance and the disk must be in the same zone.
   * 
   * @remarks
   * When invoking this API, note the following:
   * - The disk status must be Available (ready to mount).
   * - When mounting a data disk:
   *   - The target RDS Custom instance must be in the running or stopped state.
   *   - If the disk was purchased separately, its metering method must be pay-as-you-go.
   *   - When a system disk previously detached from an RDS Custom instance is mounted as a data disk, there is no restriction on its metering method.
   *   - An elastic ephemeral disk, once unmounted, can only be remounted to its original instance.
   * - When mounting a system disk:
   *   - The target RDS Custom instance must be the source instance from which the system disk was originally unmounted.
   *   - The target RDS Custom instance must be in the stopped state.
   *   - You must configure logon credentials for the instance.
   *   - Elastic ephemeral disks cannot be mounted as system disks.
   * 
   * @param request - AttachRCDiskRequest
   * @returns AttachRCDiskResponse
   */
  async attachRCDisk(request: $_model.AttachRCDiskRequest): Promise<$_model.AttachRCDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachRCDiskWithOptions(request, runtime);
  }

  /**
   * 添加实例到集群
   * 
   * @param tmpReq - AttachRCInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachRCInstancesResponse
   */
  async attachRCInstancesWithOptions(tmpReq: $_model.AttachRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachRCInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.AttachRCInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.keyPair)) {
      query["KeyPair"] = request.keyPair;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachRCInstances",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachRCInstancesResponse>(await this.callApi(params, req, runtime), new $_model.AttachRCInstancesResponse({}));
  }

  /**
   * 添加实例到集群
   * 
   * @param request - AttachRCInstancesRequest
   * @returns AttachRCInstancesResponse
   */
  async attachRCInstances(request: $_model.AttachRCInstancesRequest): Promise<$_model.AttachRCInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachRCInstancesWithOptions(request, runtime);
  }

  /**
   * 白名单模板关联实例
   * 
   * @param request - AttachWhitelistTemplateToInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachWhitelistTemplateToInstanceResponse
   */
  async attachWhitelistTemplateToInstanceWithOptions(request: $_model.AttachWhitelistTemplateToInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachWhitelistTemplateToInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.insName)) {
      query["InsName"] = request.insName;
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

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachWhitelistTemplateToInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachWhitelistTemplateToInstanceResponse>(await this.callApi(params, req, runtime), new $_model.AttachWhitelistTemplateToInstanceResponse({}));
  }

  /**
   * 白名单模板关联实例
   * 
   * @param request - AttachWhitelistTemplateToInstanceRequest
   * @returns AttachWhitelistTemplateToInstanceResponse
   */
  async attachWhitelistTemplateToInstance(request: $_model.AttachWhitelistTemplateToInstanceRequest): Promise<$_model.AttachWhitelistTemplateToInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachWhitelistTemplateToInstanceWithOptions(request, runtime);
  }

  /**
   * 检查备份加密信息
   * 
   * @param request - AuthorizeBackupEncryptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeBackupEncryptionResponse
   */
  async authorizeBackupEncryptionWithOptions(request: $_model.AuthorizeBackupEncryptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeBackupEncryptionResponse> {
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
      action: "AuthorizeBackupEncryption",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeBackupEncryptionResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeBackupEncryptionResponse({}));
  }

  /**
   * 检查备份加密信息
   * 
   * @param request - AuthorizeBackupEncryptionRequest
   * @returns AuthorizeBackupEncryptionResponse
   */
  async authorizeBackupEncryption(request: $_model.AuthorizeBackupEncryptionRequest): Promise<$_model.AuthorizeBackupEncryptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeBackupEncryptionWithOptions(request, runtime);
  }

  /**
   * Adds rules to the specified security group.
   * 
   * @param tmpReq - AuthorizeRCSecurityGroupPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeRCSecurityGroupPermissionResponse
   */
  async authorizeRCSecurityGroupPermissionWithOptions(tmpReq: $_model.AuthorizeRCSecurityGroupPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeRCSecurityGroupPermissionResponse> {
    tmpReq.validate();
    let request = new $_model.AuthorizeRCSecurityGroupPermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.securityGroupPermissions)) {
      request.securityGroupPermissionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityGroupPermissions, "SecurityGroupPermissions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.securityGroupPermissionsShrink)) {
      query["SecurityGroupPermissions"] = request.securityGroupPermissionsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeRCSecurityGroupPermission",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeRCSecurityGroupPermissionResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeRCSecurityGroupPermissionResponse({}));
  }

  /**
   * Adds rules to the specified security group.
   * 
   * @param request - AuthorizeRCSecurityGroupPermissionRequest
   * @returns AuthorizeRCSecurityGroupPermissionResponse
   */
  async authorizeRCSecurityGroupPermission(request: $_model.AuthorizeRCSecurityGroupPermissionRequest): Promise<$_model.AuthorizeRCSecurityGroupPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeRCSecurityGroupPermissionWithOptions(request, runtime);
  }

  /**
   * 查询共享代理实例下各节点的读写权重值
   * 
   * @param request - CalculateDBInstanceWeightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CalculateDBInstanceWeightResponse
   */
  async calculateDBInstanceWeightWithOptions(request: $_model.CalculateDBInstanceWeightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CalculateDBInstanceWeightResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CalculateDBInstanceWeight",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CalculateDBInstanceWeightResponse>(await this.callApi(params, req, runtime), new $_model.CalculateDBInstanceWeightResponse({}));
  }

  /**
   * 查询共享代理实例下各节点的读写权重值
   * 
   * @param request - CalculateDBInstanceWeightRequest
   * @returns CalculateDBInstanceWeightResponse
   */
  async calculateDBInstanceWeight(request: $_model.CalculateDBInstanceWeightRequest): Promise<$_model.CalculateDBInstanceWeightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.calculateDBInstanceWeightWithOptions(request, runtime);
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
      version: "2014-08-15",
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
   * 检查可用的账号名称
   * 
   * @param request - CheckAccountNameAvailableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAccountNameAvailableResponse
   */
  async checkAccountNameAvailableWithOptions(request: $_model.CheckAccountNameAvailableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAccountNameAvailableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckAccountNameAvailable",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckAccountNameAvailableResponse>(await this.callApi(params, req, runtime), new $_model.CheckAccountNameAvailableResponse({}));
  }

  /**
   * 检查可用的账号名称
   * 
   * @param request - CheckAccountNameAvailableRequest
   * @returns CheckAccountNameAvailableResponse
   */
  async checkAccountNameAvailable(request: $_model.CheckAccountNameAvailableRequest): Promise<$_model.CheckAccountNameAvailableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAccountNameAvailableWithOptions(request, runtime);
  }

  /**
   * 检查备份加密授权
   * 
   * @param request - CheckBackupEncryptionAuthorizedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckBackupEncryptionAuthorizedResponse
   */
  async checkBackupEncryptionAuthorizedWithOptions(request: $_model.CheckBackupEncryptionAuthorizedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckBackupEncryptionAuthorizedResponse> {
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
      action: "CheckBackupEncryptionAuthorized",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckBackupEncryptionAuthorizedResponse>(await this.callApi(params, req, runtime), new $_model.CheckBackupEncryptionAuthorizedResponse({}));
  }

  /**
   * 检查备份加密授权
   * 
   * @param request - CheckBackupEncryptionAuthorizedRequest
   * @returns CheckBackupEncryptionAuthorizedResponse
   */
  async checkBackupEncryptionAuthorized(request: $_model.CheckBackupEncryptionAuthorizedRequest): Promise<$_model.CheckBackupEncryptionAuthorizedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkBackupEncryptionAuthorizedWithOptions(request, runtime);
  }

  /**
   * 检查云资源授权
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

    if (!$dara.isNull(request.targetRegionId)) {
      query["TargetRegionId"] = request.targetRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckCloudResourceAuthorized",
      version: "2014-08-15",
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
   * 检查云资源授权
   * 
   * @param request - CheckCloudResourceAuthorizedRequest
   * @returns CheckCloudResourceAuthorizedResponse
   */
  async checkCloudResourceAuthorized(request: $_model.CheckCloudResourceAuthorizedRequest): Promise<$_model.CheckCloudResourceAuthorizedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCloudResourceAuthorizedWithOptions(request, runtime);
  }

  /**
   * 预检查某RDS实例是否可以用跨地域备份集进行跨地域恢复
   * 
   * @param request - CheckCreateDdrDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCreateDdrDBInstanceResponse
   */
  async checkCreateDdrDBInstanceWithOptions(request: $_model.CheckCreateDdrDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCreateDdrDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceStorage)) {
      query["DBInstanceStorage"] = request.DBInstanceStorage;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
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

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!$dara.isNull(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!$dara.isNull(request.sourceDBInstanceName)) {
      query["SourceDBInstanceName"] = request.sourceDBInstanceName;
    }

    if (!$dara.isNull(request.sourceRegion)) {
      query["SourceRegion"] = request.sourceRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckCreateDdrDBInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckCreateDdrDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CheckCreateDdrDBInstanceResponse({}));
  }

  /**
   * 预检查某RDS实例是否可以用跨地域备份集进行跨地域恢复
   * 
   * @param request - CheckCreateDdrDBInstanceRequest
   * @returns CheckCreateDdrDBInstanceResponse
   */
  async checkCreateDdrDBInstance(request: $_model.CheckCreateDdrDBInstanceRequest): Promise<$_model.CheckCreateDdrDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCreateDdrDBInstanceWithOptions(request, runtime);
  }

  /**
   * 检查数据库名是否可用
   * 
   * @param request - CheckDBNameAvailableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDBNameAvailableResponse
   */
  async checkDBNameAvailableWithOptions(request: $_model.CheckDBNameAvailableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDBNameAvailableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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
      action: "CheckDBNameAvailable",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDBNameAvailableResponse>(await this.callApi(params, req, runtime), new $_model.CheckDBNameAvailableResponse({}));
  }

  /**
   * 检查数据库名是否可用
   * 
   * @param request - CheckDBNameAvailableRequest
   * @returns CheckDBNameAvailableResponse
   */
  async checkDBNameAvailable(request: $_model.CheckDBNameAvailableRequest): Promise<$_model.CheckDBNameAvailableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDBNameAvailableWithOptions(request, runtime);
  }

  /**
   * 检查实例是否存在
   * 
   * @param request - CheckInstanceExistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckInstanceExistResponse
   */
  async checkInstanceExistWithOptions(request: $_model.CheckInstanceExistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckInstanceExistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "CheckInstanceExist",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckInstanceExistResponse>(await this.callApi(params, req, runtime), new $_model.CheckInstanceExistResponse({}));
  }

  /**
   * 检查实例是否存在
   * 
   * @param request - CheckInstanceExistRequest
   * @returns CheckInstanceExistResponse
   */
  async checkInstanceExist(request: $_model.CheckInstanceExistRequest): Promise<$_model.CheckInstanceExistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkInstanceExistWithOptions(request, runtime);
  }

  /**
   * 查看是否已创建服务关联角色（SLR）和是否开租
   * 
   * @param request - CheckRdsCustomInitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckRdsCustomInitResponse
   */
  async checkRdsCustomInitWithOptions(request: $_model.CheckRdsCustomInitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckRdsCustomInitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceLinkedRole)) {
      query["ServiceLinkedRole"] = request.serviceLinkedRole;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckRdsCustomInit",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckRdsCustomInitResponse>(await this.callApi(params, req, runtime), new $_model.CheckRdsCustomInitResponse({}));
  }

  /**
   * 查看是否已创建服务关联角色（SLR）和是否开租
   * 
   * @param request - CheckRdsCustomInitRequest
   * @returns CheckRdsCustomInitResponse
   */
  async checkRdsCustomInit(request: $_model.CheckRdsCustomInitRequest): Promise<$_model.CheckRdsCustomInitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkRdsCustomInitWithOptions(request, runtime);
  }

  /**
   * 检查地域是否支持备份加密
   * 
   * @param request - CheckRegionSupportBackupEncryptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckRegionSupportBackupEncryptionResponse
   */
  async checkRegionSupportBackupEncryptionWithOptions(request: $_model.CheckRegionSupportBackupEncryptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckRegionSupportBackupEncryptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceID)) {
      query["DBInstanceID"] = request.DBInstanceID;
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
      action: "CheckRegionSupportBackupEncryption",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckRegionSupportBackupEncryptionResponse>(await this.callApi(params, req, runtime), new $_model.CheckRegionSupportBackupEncryptionResponse({}));
  }

  /**
   * 检查地域是否支持备份加密
   * 
   * @param request - CheckRegionSupportBackupEncryptionRequest
   * @returns CheckRegionSupportBackupEncryptionResponse
   */
  async checkRegionSupportBackupEncryption(request: $_model.CheckRegionSupportBackupEncryptionRequest): Promise<$_model.CheckRegionSupportBackupEncryptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkRegionSupportBackupEncryptionWithOptions(request, runtime);
  }

  /**
   * 查看是否已创建服务关联角色（SLR）
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRoleWithOptions(request: $_model.CheckServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckServiceLinkedRoleResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.serviceLinkedRole)) {
      query["ServiceLinkedRole"] = request.serviceLinkedRole;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceLinkedRole",
      version: "2014-08-15",
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
   * 查看是否已创建服务关联角色（SLR）
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRole(request: $_model.CheckServiceLinkedRoleRequest): Promise<$_model.CheckServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * This API is used to restore historical data to a new instance (referred to as a clone instance).
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the function documentation to fully understand the prerequisites for using the API and the impact of its usage before performing any operation.
   * - [RDS MySQL Data Restoration](https://help.aliyun.com/document_detail/96147.html)
   * - [RDS PostgreSQL Data Restoration](https://help.aliyun.com/document_detail/96776.html)
   * - [RDS SQL Server Data Restoration](https://help.aliyun.com/document_detail/95722.html)
   * - [RDS MariaDB Data Restoration](https://help.aliyun.com/document_detail/97151.html)
   * 
   * @param tmpReq - CloneDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneDBInstanceResponse
   */
  async cloneDBInstanceWithOptions(tmpReq: $_model.CloneDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloneDBInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CloneDBInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serverlessConfig)) {
      request.serverlessConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverlessConfig, "ServerlessConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!$dara.isNull(request.bpeEnabled)) {
      query["BpeEnabled"] = request.bpeEnabled;
    }

    if (!$dara.isNull(request.burstingEnabled)) {
      query["BurstingEnabled"] = request.burstingEnabled;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.customExtraInfo)) {
      query["CustomExtraInfo"] = request.customExtraInfo;
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

    if (!$dara.isNull(request.DBInstanceStorage)) {
      query["DBInstanceStorage"] = request.DBInstanceStorage;
    }

    if (!$dara.isNull(request.DBInstanceStorageType)) {
      query["DBInstanceStorageType"] = request.DBInstanceStorageType;
    }

    if (!$dara.isNull(request.dbNames)) {
      query["DbNames"] = request.dbNames;
    }

    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
    }

    if (!$dara.isNull(request.ioAccelerationEnabled)) {
      query["IoAccelerationEnabled"] = request.ioAccelerationEnabled;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.restoreTable)) {
      query["RestoreTable"] = request.restoreTable;
    }

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!$dara.isNull(request.serverlessConfigShrink)) {
      query["ServerlessConfig"] = request.serverlessConfigShrink;
    }

    if (!$dara.isNull(request.tableMeta)) {
      query["TableMeta"] = request.tableMeta;
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

    if (!$dara.isNull(request.zoneIdSlave1)) {
      query["ZoneIdSlave1"] = request.zoneIdSlave1;
    }

    if (!$dara.isNull(request.zoneIdSlave2)) {
      query["ZoneIdSlave2"] = request.zoneIdSlave2;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneDBInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CloneDBInstanceResponse({}));
  }

  /**
   * This API is used to restore historical data to a new instance (referred to as a clone instance).
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the function documentation to fully understand the prerequisites for using the API and the impact of its usage before performing any operation.
   * - [RDS MySQL Data Restoration](https://help.aliyun.com/document_detail/96147.html)
   * - [RDS PostgreSQL Data Restoration](https://help.aliyun.com/document_detail/96776.html)
   * - [RDS SQL Server Data Restoration](https://help.aliyun.com/document_detail/95722.html)
   * - [RDS MariaDB Data Restoration](https://help.aliyun.com/document_detail/97151.html)
   * 
   * @param request - CloneDBInstanceRequest
   * @returns CloneDBInstanceResponse
   */
  async cloneDBInstance(request: $_model.CloneDBInstanceRequest): Promise<$_model.CloneDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloneDBInstanceWithOptions(request, runtime);
  }

  /**
   * 克隆参数组
   * 
   * @param request - CloneParameterGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneParameterGroupResponse
   */
  async cloneParameterGroupWithOptions(request: $_model.CloneParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloneParameterGroupResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.targetRegionId)) {
      query["TargetRegionId"] = request.targetRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneParameterGroup",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneParameterGroupResponse>(await this.callApi(params, req, runtime), new $_model.CloneParameterGroupResponse({}));
  }

  /**
   * 克隆参数组
   * 
   * @param request - CloneParameterGroupRequest
   * @returns CloneParameterGroupResponse
   */
  async cloneParameterGroup(request: $_model.CloneParameterGroupRequest): Promise<$_model.CloneParameterGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloneParameterGroupWithOptions(request, runtime);
  }

  /**
   * 通知消息确认
   * 
   * @param tmpReq - ConfirmNotifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmNotifyResponse
   */
  async confirmNotifyWithOptions(tmpReq: $_model.ConfirmNotifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfirmNotifyResponse> {
    tmpReq.validate();
    let request = new $_model.ConfirmNotifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notifyIdList)) {
      request.notifyIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notifyIdList, "NotifyIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.confirmor)) {
      body["Confirmor"] = request.confirmor;
    }

    if (!$dara.isNull(request.notifyIdListShrink)) {
      body["NotifyIdList"] = request.notifyIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfirmNotify",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfirmNotifyResponse>(await this.callApi(params, req, runtime), new $_model.ConfirmNotifyResponse({}));
  }

  /**
   * 通知消息确认
   * 
   * @param request - ConfirmNotifyRequest
   * @returns ConfirmNotifyResponse
   */
  async confirmNotify(request: $_model.ConfirmNotifyRequest): Promise<$_model.ConfirmNotifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.confirmNotifyWithOptions(request, runtime);
  }

  /**
   * 在实例间拷贝数据库
   * 
   * @param request - CopyDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyDatabaseResponse
   */
  async copyDatabaseWithOptions(request: $_model.CopyDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.dstDBName)) {
      query["DstDBName"] = request.dstDBName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.reserveAccount)) {
      query["ReserveAccount"] = request.reserveAccount;
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

    if (!$dara.isNull(request.srcDBName)) {
      query["SrcDBName"] = request.srcDBName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyDatabase",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.CopyDatabaseResponse({}));
  }

  /**
   * 在实例间拷贝数据库
   * 
   * @param request - CopyDatabaseRequest
   * @returns CopyDatabaseResponse
   */
  async copyDatabase(request: $_model.CopyDatabaseRequest): Promise<$_model.CopyDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyDatabaseWithOptions(request, runtime);
  }

  /**
   * 在同一账号下不同实例间复制数据库
   * 
   * @param request - CopyDatabaseBetweenInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyDatabaseBetweenInstancesResponse
   */
  async copyDatabaseBetweenInstancesWithOptions(request: $_model.CopyDatabaseBetweenInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyDatabaseBetweenInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dbNames)) {
      query["DbNames"] = request.dbNames;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!$dara.isNull(request.syncUserPrivilege)) {
      query["SyncUserPrivilege"] = request.syncUserPrivilege;
    }

    if (!$dara.isNull(request.targetDBInstanceId)) {
      query["TargetDBInstanceId"] = request.targetDBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyDatabaseBetweenInstances",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyDatabaseBetweenInstancesResponse>(await this.callApi(params, req, runtime), new $_model.CopyDatabaseBetweenInstancesResponse({}));
  }

  /**
   * 在同一账号下不同实例间复制数据库
   * 
   * @param request - CopyDatabaseBetweenInstancesRequest
   * @returns CopyDatabaseBetweenInstancesResponse
   */
  async copyDatabaseBetweenInstances(request: $_model.CopyDatabaseBetweenInstancesRequest): Promise<$_model.CopyDatabaseBetweenInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyDatabaseBetweenInstancesWithOptions(request, runtime);
  }

  /**
   * 在RDS实例中创建账号
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

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.checkPolicy)) {
      query["CheckPolicy"] = request.checkPolicy;
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
      version: "2014-08-15",
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
   * 在RDS实例中创建账号
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * This API is used to create a backup set for an RDS instance.
   * 
   * @remarks
   * ### Supported Engines  
   * - RDS MySQL  
   * - RDS PostgreSQL  
   * - RDS SQL Server  
   * - RDS MariaDB  
   * ### Feature Description  
   * This API invokes the built-in backup feature of RDS. You can also use DBS. For more information, <props="china">see [DBS API Overview](https://help.aliyun.com/document_detail/2841997.html)<props="intl">see [DBS API Overview](https://help.aliyun.com/document_detail/2402073.html).  
   * ### Notes  
   * When invoking this API, the instance must meet the following conditions; otherwise, the operation will fail:  
   * - The instance status is **running**.  
   * - No backup job is currently running.  
   * - The number of backup sets that can be created for a single instance per day does not exceed 20.  
   * ### Related Function Documentation  
   * - [Back Up Data for RDS MySQL](https://help.aliyun.com/document_detail/378074.html)  
   * - [Back Up Data for RDS PostgreSQL](https://help.aliyun.com/document_detail/96772.html)  
   * - [Back Up Data for RDS SQL Server](https://help.aliyun.com/document_detail/95717.html)  
   * - [Back Up Data for RDS MariaDB](https://help.aliyun.com/document_detail/97147.html)
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

    if (!$dara.isNull(request.backupStrategy)) {
      query["BackupStrategy"] = request.backupStrategy;
    }

    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackup",
      version: "2014-08-15",
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
   * This API is used to create a backup set for an RDS instance.
   * 
   * @remarks
   * ### Supported Engines  
   * - RDS MySQL  
   * - RDS PostgreSQL  
   * - RDS SQL Server  
   * - RDS MariaDB  
   * ### Feature Description  
   * This API invokes the built-in backup feature of RDS. You can also use DBS. For more information, <props="china">see [DBS API Overview](https://help.aliyun.com/document_detail/2841997.html)<props="intl">see [DBS API Overview](https://help.aliyun.com/document_detail/2402073.html).  
   * ### Notes  
   * When invoking this API, the instance must meet the following conditions; otherwise, the operation will fail:  
   * - The instance status is **running**.  
   * - No backup job is currently running.  
   * - The number of backup sets that can be created for a single instance per day does not exceed 20.  
   * ### Related Function Documentation  
   * - [Back Up Data for RDS MySQL](https://help.aliyun.com/document_detail/378074.html)  
   * - [Back Up Data for RDS PostgreSQL](https://help.aliyun.com/document_detail/96772.html)  
   * - [Back Up Data for RDS SQL Server](https://help.aliyun.com/document_detail/95717.html)  
   * - [Back Up Data for RDS MariaDB](https://help.aliyun.com/document_detail/97147.html)
   * 
   * @param request - CreateBackupRequest
   * @returns CreateBackupResponse
   */
  async createBackup(request: $_model.CreateBackupRequest): Promise<$_model.CreateBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  /**
   * 创建迁移检查任务
   * 
   * @param request - CreateCloudMigrationPrecheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudMigrationPrecheckTaskResponse
   */
  async createCloudMigrationPrecheckTaskWithOptions(request: $_model.CreateCloudMigrationPrecheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudMigrationPrecheckTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceAccount)) {
      query["SourceAccount"] = request.sourceAccount;
    }

    if (!$dara.isNull(request.sourceCategory)) {
      query["SourceCategory"] = request.sourceCategory;
    }

    if (!$dara.isNull(request.sourceIpAddress)) {
      query["SourceIpAddress"] = request.sourceIpAddress;
    }

    if (!$dara.isNull(request.sourcePassword)) {
      query["SourcePassword"] = request.sourcePassword;
    }

    if (!$dara.isNull(request.sourcePort)) {
      query["SourcePort"] = request.sourcePort;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudMigrationPrecheckTask",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudMigrationPrecheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudMigrationPrecheckTaskResponse({}));
  }

  /**
   * 创建迁移检查任务
   * 
   * @param request - CreateCloudMigrationPrecheckTaskRequest
   * @returns CreateCloudMigrationPrecheckTaskResponse
   */
  async createCloudMigrationPrecheckTask(request: $_model.CreateCloudMigrationPrecheckTaskRequest): Promise<$_model.CreateCloudMigrationPrecheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudMigrationPrecheckTaskWithOptions(request, runtime);
  }

  /**
   * 创建迁移上云任务
   * 
   * @param request - CreateCloudMigrationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudMigrationTaskResponse
   */
  async createCloudMigrationTaskWithOptions(request: $_model.CreateCloudMigrationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudMigrationTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceAccount)) {
      query["SourceAccount"] = request.sourceAccount;
    }

    if (!$dara.isNull(request.sourceCategory)) {
      query["SourceCategory"] = request.sourceCategory;
    }

    if (!$dara.isNull(request.sourceIpAddress)) {
      query["SourceIpAddress"] = request.sourceIpAddress;
    }

    if (!$dara.isNull(request.sourcePassword)) {
      query["SourcePassword"] = request.sourcePassword;
    }

    if (!$dara.isNull(request.sourcePort)) {
      query["SourcePort"] = request.sourcePort;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudMigrationTask",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudMigrationTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudMigrationTaskResponse({}));
  }

  /**
   * 创建迁移上云任务
   * 
   * @param request - CreateCloudMigrationTaskRequest
   * @returns CreateCloudMigrationTaskResponse
   */
  async createCloudMigrationTask(request: $_model.CreateCloudMigrationTaskRequest): Promise<$_model.CreateCloudMigrationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudMigrationTaskWithOptions(request, runtime);
  }

  /**
   * This API is used to create an RDS instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * ### Related Function Documentation
   * >Warning: This API operation incurs a Fee. Carefully read the related Function Documentation before performing this operation.
   * If an error occurs when you invoke the API, you can search for the error message to View the cause of the fault.
   * - [Create an RDS MySQL instance](https://help.aliyun.com/document_detail/148036.html)
   * - [Create a Serverless ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/412231.html)
   * - [Create an RDS PostgreSQL instance](https://help.aliyun.com/document_detail/148038.html)
   * - [Create a Serverless ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/607753.html)
   * - [Create a Babelfish for RDS PostgreSQL instance](https://help.aliyun.com/document_detail/428615.html)
   * - [Create an RDS SQL Server instance](https://help.aliyun.com/document_detail/148037.html)
   * - [Create a Serverless ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/603465.html)
   * - [Create an RDS MariaDB instance](https://help.aliyun.com/document_detail/148040.html)
   * 
   * @param tmpReq - CreateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceResponse
   */
  async createDBInstanceWithOptions(tmpReq: $_model.CreateDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDBInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serverlessConfig)) {
      request.serverlessConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverlessConfig, "ServerlessConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.autoCreateProxy)) {
      query["AutoCreateProxy"] = request.autoCreateProxy;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.babelfishConfig)) {
      query["BabelfishConfig"] = request.babelfishConfig;
    }

    if (!$dara.isNull(request.bpeEnabled)) {
      query["BpeEnabled"] = request.bpeEnabled;
    }

    if (!$dara.isNull(request.burstingEnabled)) {
      query["BurstingEnabled"] = request.burstingEnabled;
    }

    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.coldDataEnabled)) {
      query["ColdDataEnabled"] = request.coldDataEnabled;
    }

    if (!$dara.isNull(request.connectionMode)) {
      query["ConnectionMode"] = request.connectionMode;
    }

    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.createStrategy)) {
      query["CreateStrategy"] = request.createStrategy;
    }

    if (!$dara.isNull(request.customExtraInfo)) {
      query["CustomExtraInfo"] = request.customExtraInfo;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.DBInstanceNetType)) {
      query["DBInstanceNetType"] = request.DBInstanceNetType;
    }

    if (!$dara.isNull(request.DBInstanceStorage)) {
      query["DBInstanceStorage"] = request.DBInstanceStorage;
    }

    if (!$dara.isNull(request.DBInstanceStorageType)) {
      query["DBInstanceStorageType"] = request.DBInstanceStorageType;
    }

    if (!$dara.isNull(request.DBIsIgnoreCase)) {
      query["DBIsIgnoreCase"] = request.DBIsIgnoreCase;
    }

    if (!$dara.isNull(request.DBParamGroupId)) {
      query["DBParamGroupId"] = request.DBParamGroupId;
    }

    if (!$dara.isNull(request.DBTimeZone)) {
      query["DBTimeZone"] = request.DBTimeZone;
    }

    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
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

    if (!$dara.isNull(request.externalReplication)) {
      query["ExternalReplication"] = request.externalReplication;
    }

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
    }

    if (!$dara.isNull(request.ioAccelerationEnabled)) {
      query["IoAccelerationEnabled"] = request.ioAccelerationEnabled;
    }

    if (!$dara.isNull(request.optimizedWrites)) {
      query["OptimizedWrites"] = request.optimizedWrites;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
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

    if (!$dara.isNull(request.promotionCode)) {
      query["PromotionCode"] = request.promotionCode;
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

    if (!$dara.isNull(request.roleARN)) {
      query["RoleARN"] = request.roleARN;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.serverlessConfigShrink)) {
      query["ServerlessConfig"] = request.serverlessConfigShrink;
    }

    if (!$dara.isNull(request.storageAutoScale)) {
      query["StorageAutoScale"] = request.storageAutoScale;
    }

    if (!$dara.isNull(request.storageThreshold)) {
      query["StorageThreshold"] = request.storageThreshold;
    }

    if (!$dara.isNull(request.storageUpperBound)) {
      query["StorageUpperBound"] = request.storageUpperBound;
    }

    if (!$dara.isNull(request.systemDBCharset)) {
      query["SystemDBCharset"] = request.systemDBCharset;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetDedicatedHostIdForLog)) {
      query["TargetDedicatedHostIdForLog"] = request.targetDedicatedHostIdForLog;
    }

    if (!$dara.isNull(request.targetDedicatedHostIdForMaster)) {
      query["TargetDedicatedHostIdForMaster"] = request.targetDedicatedHostIdForMaster;
    }

    if (!$dara.isNull(request.targetDedicatedHostIdForSlave)) {
      query["TargetDedicatedHostIdForSlave"] = request.targetDedicatedHostIdForSlave;
    }

    if (!$dara.isNull(request.targetMinorVersion)) {
      query["TargetMinorVersion"] = request.targetMinorVersion;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.userBackupId)) {
      query["UserBackupId"] = request.userBackupId;
    }

    if (!$dara.isNull(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.whitelistTemplateList)) {
      query["WhitelistTemplateList"] = request.whitelistTemplateList;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.zoneIdSlave1)) {
      query["ZoneIdSlave1"] = request.zoneIdSlave1;
    }

    if (!$dara.isNull(request.zoneIdSlave2)) {
      query["ZoneIdSlave2"] = request.zoneIdSlave2;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBInstance",
      version: "2014-08-15",
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
   * This API is used to create an RDS instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * ### Related Function Documentation
   * >Warning: This API operation incurs a Fee. Carefully read the related Function Documentation before performing this operation.
   * If an error occurs when you invoke the API, you can search for the error message to View the cause of the fault.
   * - [Create an RDS MySQL instance](https://help.aliyun.com/document_detail/148036.html)
   * - [Create a Serverless ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/412231.html)
   * - [Create an RDS PostgreSQL instance](https://help.aliyun.com/document_detail/148038.html)
   * - [Create a Serverless ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/607753.html)
   * - [Create a Babelfish for RDS PostgreSQL instance](https://help.aliyun.com/document_detail/428615.html)
   * - [Create an RDS SQL Server instance](https://help.aliyun.com/document_detail/148037.html)
   * - [Create a Serverless ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/603465.html)
   * - [Create an RDS MariaDB instance](https://help.aliyun.com/document_detail/148040.html)
   * 
   * @param request - CreateDBInstanceRequest
   * @returns CreateDBInstanceResponse
   */
  async createDBInstance(request: $_model.CreateDBInstanceRequest): Promise<$_model.CreateDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  /**
   * 创建实例的Endpoint
   * 
   * @param tmpReq - CreateDBInstanceEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceEndpointResponse
   */
  async createDBInstanceEndpointWithOptions(tmpReq: $_model.CreateDBInstanceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceEndpointResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDBInstanceEndpointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeItems)) {
      request.nodeItemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeItems, "NodeItems", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBInstanceEndpointDescription)) {
      query["DBInstanceEndpointDescription"] = request.DBInstanceEndpointDescription;
    }

    if (!$dara.isNull(request.DBInstanceEndpointType)) {
      query["DBInstanceEndpointType"] = request.DBInstanceEndpointType;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.nodeItemsShrink)) {
      query["NodeItems"] = request.nodeItemsShrink;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBInstanceEndpoint",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBInstanceEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBInstanceEndpointResponse({}));
  }

  /**
   * 创建实例的Endpoint
   * 
   * @param request - CreateDBInstanceEndpointRequest
   * @returns CreateDBInstanceEndpointResponse
   */
  async createDBInstanceEndpoint(request: $_model.CreateDBInstanceEndpointRequest): Promise<$_model.CreateDBInstanceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceEndpointWithOptions(request, runtime);
  }

  /**
   * 创建实例的Endpoint连接地址
   * 
   * @param request - CreateDBInstanceEndpointAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceEndpointAddressResponse
   */
  async createDBInstanceEndpointAddressWithOptions(request: $_model.CreateDBInstanceEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceEndpointAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBInstanceEndpointId)) {
      query["DBInstanceEndpointId"] = request.DBInstanceEndpointId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ipType)) {
      query["IpType"] = request.ipType;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBInstanceEndpointAddress",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBInstanceEndpointAddressResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBInstanceEndpointAddressResponse({}));
  }

  /**
   * 创建实例的Endpoint连接地址
   * 
   * @param request - CreateDBInstanceEndpointAddressRequest
   * @returns CreateDBInstanceEndpointAddressResponse
   */
  async createDBInstanceEndpointAddress(request: $_model.CreateDBInstanceEndpointAddressRequest): Promise<$_model.CreateDBInstanceEndpointAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceEndpointAddressWithOptions(request, runtime);
  }

  /**
   * rds重建实例openapi
   * 
   * @param request - CreateDBInstanceForRebuildRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceForRebuildResponse
   */
  async createDBInstanceForRebuildWithOptions(request: $_model.CreateDBInstanceForRebuildRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceForRebuildResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceNetType)) {
      query["DBInstanceNetType"] = request.DBInstanceNetType;
    }

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
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

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
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

    if (!$dara.isNull(request.zoneIdSlave1)) {
      query["ZoneIdSlave1"] = request.zoneIdSlave1;
    }

    if (!$dara.isNull(request.zoneIdSlave2)) {
      query["ZoneIdSlave2"] = request.zoneIdSlave2;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBInstanceForRebuild",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBInstanceForRebuildResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBInstanceForRebuildResponse({}));
  }

  /**
   * rds重建实例openapi
   * 
   * @param request - CreateDBInstanceForRebuildRequest
   * @returns CreateDBInstanceForRebuildResponse
   */
  async createDBInstanceForRebuild(request: $_model.CreateDBInstanceForRebuildRequest): Promise<$_model.CreateDBInstanceForRebuildResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceForRebuildWithOptions(request, runtime);
  }

  /**
   * Create a replication channel for a native replication instance
   * 
   * @param request - CreateDBInstanceReplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceReplicationResponse
   */
  async createDBInstanceReplicationWithOptions(request: $_model.CreateDBInstanceReplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceReplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.masterHost)) {
      query["MasterHost"] = request.masterHost;
    }

    if (!$dara.isNull(request.masterPassword)) {
      query["MasterPassword"] = request.masterPassword;
    }

    if (!$dara.isNull(request.masterPort)) {
      query["MasterPort"] = request.masterPort;
    }

    if (!$dara.isNull(request.masterUser)) {
      query["MasterUser"] = request.masterUser;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBInstanceReplication",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBInstanceReplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBInstanceReplicationResponse({}));
  }

  /**
   * Create a replication channel for a native replication instance
   * 
   * @param request - CreateDBInstanceReplicationRequest
   * @returns CreateDBInstanceReplicationResponse
   */
  async createDBInstanceReplication(request: $_model.CreateDBInstanceReplicationRequest): Promise<$_model.CreateDBInstanceReplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceReplicationWithOptions(request, runtime);
  }

  /**
   * 创建实例主机安全组规则
   * 
   * @param request - CreateDBInstanceSecurityGroupRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceSecurityGroupRuleResponse
   */
  async createDBInstanceSecurityGroupRuleWithOptions(request: $_model.CreateDBInstanceSecurityGroupRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceSecurityGroupRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBInstanceSecurityGroupRule",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBInstanceSecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBInstanceSecurityGroupRuleResponse({}));
  }

  /**
   * 创建实例主机安全组规则
   * 
   * @param request - CreateDBInstanceSecurityGroupRuleRequest
   * @returns CreateDBInstanceSecurityGroupRuleResponse
   */
  async createDBInstanceSecurityGroupRule(request: $_model.CreateDBInstanceSecurityGroupRuleRequest): Promise<$_model.CreateDBInstanceSecurityGroupRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceSecurityGroupRuleWithOptions(request, runtime);
  }

  /**
   * category cluster add node
   * 
   * @param tmpReq - CreateDBNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBNodesResponse
   */
  async createDBNodesWithOptions(tmpReq: $_model.CreateDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBNodesResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDBNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.DBNode)) {
      request.DBNodeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBNode, "DBNode", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBNodeShrink)) {
      query["DBNode"] = request.DBNodeShrink;
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
      action: "CreateDBNodes",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBNodesResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBNodesResponse({}));
  }

  /**
   * category cluster add node
   * 
   * @param request - CreateDBNodesRequest
   * @returns CreateDBNodesResponse
   */
  async createDBNodes(request: $_model.CreateDBNodesRequest): Promise<$_model.CreateDBNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBNodesWithOptions(request, runtime);
  }

  /**
   * 创建RDS实例数据库代理的连接地址
   * 
   * @param request - CreateDBProxyEndpointAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBProxyEndpointAddressResponse
   */
  async createDBProxyEndpointAddressWithOptions(request: $_model.CreateDBProxyEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBProxyEndpointAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBProxyConnectStringNetType)) {
      query["DBProxyConnectStringNetType"] = request.DBProxyConnectStringNetType;
    }

    if (!$dara.isNull(request.DBProxyEndpointId)) {
      query["DBProxyEndpointId"] = request.DBProxyEndpointId;
    }

    if (!$dara.isNull(request.DBProxyEngineType)) {
      query["DBProxyEngineType"] = request.DBProxyEngineType;
    }

    if (!$dara.isNull(request.DBProxyNewConnectStringPort)) {
      query["DBProxyNewConnectStringPort"] = request.DBProxyNewConnectStringPort;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBProxyEndpointAddress",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBProxyEndpointAddressResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBProxyEndpointAddressResponse({}));
  }

  /**
   * 创建RDS实例数据库代理的连接地址
   * 
   * @param request - CreateDBProxyEndpointAddressRequest
   * @returns CreateDBProxyEndpointAddressResponse
   */
  async createDBProxyEndpointAddress(request: $_model.CreateDBProxyEndpointAddressRequest): Promise<$_model.CreateDBProxyEndpointAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBProxyEndpointAddressWithOptions(request, runtime);
  }

  /**
   * 为指定RDS示例创建DB
   * 
   * @param request - CreateDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatabaseResponse
   */
  async createDatabaseWithOptions(request: $_model.CreateDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.characterSetName)) {
      query["CharacterSetName"] = request.characterSetName;
    }

    if (!$dara.isNull(request.DBDescription)) {
      query["DBDescription"] = request.DBDescription;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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
      action: "CreateDatabase",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatabaseResponse({}));
  }

  /**
   * 为指定RDS示例创建DB
   * 
   * @param request - CreateDatabaseRequest
   * @returns CreateDatabaseResponse
   */
  async createDatabase(request: $_model.CreateDatabaseRequest): Promise<$_model.CreateDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDatabaseWithOptions(request, runtime);
  }

  /**
   * 创建Ddr实例
   * 
   * @param request - CreateDdrInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDdrInstanceResponse
   */
  async createDdrInstanceWithOptions(request: $_model.CreateDdrInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDdrInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.backupSetRegion)) {
      query["BackupSetRegion"] = request.backupSetRegion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionMode)) {
      query["ConnectionMode"] = request.connectionMode;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.DBInstanceNetType)) {
      query["DBInstanceNetType"] = request.DBInstanceNetType;
    }

    if (!$dara.isNull(request.DBInstanceStorage)) {
      query["DBInstanceStorage"] = request.DBInstanceStorage;
    }

    if (!$dara.isNull(request.DBInstanceStorageType)) {
      query["DBInstanceStorageType"] = request.DBInstanceStorageType;
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

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
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

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
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

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!$dara.isNull(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!$dara.isNull(request.roleARN)) {
      query["RoleARN"] = request.roleARN;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.sourceDBInstanceName)) {
      query["SourceDBInstanceName"] = request.sourceDBInstanceName;
    }

    if (!$dara.isNull(request.sourceRegion)) {
      query["SourceRegion"] = request.sourceRegion;
    }

    if (!$dara.isNull(request.systemDBCharset)) {
      query["SystemDBCharset"] = request.systemDBCharset;
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
      action: "CreateDdrInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDdrInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDdrInstanceResponse({}));
  }

  /**
   * 创建Ddr实例
   * 
   * @param request - CreateDdrInstanceRequest
   * @returns CreateDdrInstanceResponse
   */
  async createDdrInstance(request: $_model.CreateDdrInstanceRequest): Promise<$_model.CreateDdrInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDdrInstanceWithOptions(request, runtime);
  }

  /**
   * 创建全球多活数据库集群
   * 
   * @param request - CreateGADInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGADInstanceResponse
   */
  async createGADInstanceWithOptions(request: $_model.CreateGADInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGADInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.centralDBInstanceId)) {
      query["CentralDBInstanceId"] = request.centralDBInstanceId;
    }

    if (!$dara.isNull(request.centralRdsDtsAdminAccount)) {
      query["CentralRdsDtsAdminAccount"] = request.centralRdsDtsAdminAccount;
    }

    if (!$dara.isNull(request.centralRdsDtsAdminPassword)) {
      query["CentralRdsDtsAdminPassword"] = request.centralRdsDtsAdminPassword;
    }

    if (!$dara.isNull(request.centralRegionId)) {
      query["CentralRegionId"] = request.centralRegionId;
    }

    if (!$dara.isNull(request.DBList)) {
      query["DBList"] = request.DBList;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.unitNode)) {
      query["UnitNode"] = request.unitNode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGADInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGADInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateGADInstanceResponse({}));
  }

  /**
   * 创建全球多活数据库集群
   * 
   * @param request - CreateGADInstanceRequest
   * @returns CreateGADInstanceResponse
   */
  async createGADInstance(request: $_model.CreateGADInstanceRequest): Promise<$_model.CreateGADInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGADInstanceWithOptions(request, runtime);
  }

  /**
   * 增加Gad节点
   * 
   * @param request - CreateGadInstanceMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGadInstanceMemberResponse
   */
  async createGadInstanceMemberWithOptions(request: $_model.CreateGadInstanceMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGadInstanceMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.centralDBInstanceId)) {
      query["CentralDBInstanceId"] = request.centralDBInstanceId;
    }

    if (!$dara.isNull(request.centralRdsDtsAdminAccount)) {
      query["CentralRdsDtsAdminAccount"] = request.centralRdsDtsAdminAccount;
    }

    if (!$dara.isNull(request.centralRdsDtsAdminPassword)) {
      query["CentralRdsDtsAdminPassword"] = request.centralRdsDtsAdminPassword;
    }

    if (!$dara.isNull(request.centralRegionId)) {
      query["CentralRegionId"] = request.centralRegionId;
    }

    if (!$dara.isNull(request.DBList)) {
      query["DBList"] = request.DBList;
    }

    if (!$dara.isNull(request.gadInstanceId)) {
      query["GadInstanceId"] = request.gadInstanceId;
    }

    if (!$dara.isNull(request.unitNode)) {
      query["UnitNode"] = request.unitNode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGadInstanceMember",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGadInstanceMemberResponse>(await this.callApi(params, req, runtime), new $_model.CreateGadInstanceMemberResponse({}));
  }

  /**
   * 增加Gad节点
   * 
   * @param request - CreateGadInstanceMemberRequest
   * @returns CreateGadInstanceMemberResponse
   */
  async createGadInstanceMember(request: $_model.CreateGadInstanceMemberRequest): Promise<$_model.CreateGadInstanceMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGadInstanceMemberWithOptions(request, runtime);
  }

  /**
   * Create a Data Import Job
   * 
   * @remarks
   * Create a Data Import Job for importing data into an RDS MySQL instance with native replication
   * 
   * @param request - CreateImportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImportTaskResponse
   */
  async createImportTaskWithOptions(request: $_model.CreateImportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.estimatedSize)) {
      query["EstimatedSize"] = request.estimatedSize;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!$dara.isNull(request.sourcePlatform)) {
      query["SourcePlatform"] = request.sourcePlatform;
    }

    if (!$dara.isNull(request.streamPort)) {
      query["StreamPort"] = request.streamPort;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    if (!$dara.isNull(request.xtrabackupPath)) {
      query["XtrabackupPath"] = request.xtrabackupPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImportTask",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateImportTaskResponse({}));
  }

  /**
   * Create a Data Import Job
   * 
   * @remarks
   * Create a Data Import Job for importing data into an RDS MySQL instance with native replication
   * 
   * @param request - CreateImportTaskRequest
   * @returns CreateImportTaskResponse
   */
  async createImportTask(request: $_model.CreateImportTaskRequest): Promise<$_model.CreateImportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImportTaskWithOptions(request, runtime);
  }

  /**
   * 创建全密态规则
   * 
   * @remarks
   * ## Request Description
   * - Before using this API, ensure that you have enabled the column encryption service in DAS Security Center.
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and enable the column encryption service before using it again.
   * 
   * @param tmpReq - CreateMaskingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMaskingRulesResponse
   */
  async createMaskingRulesWithOptions(tmpReq: $_model.CreateMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMaskingRulesResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMaskingRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ruleConfig)) {
      request.ruleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ruleConfig, "RuleConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.defaultAlgo)) {
      query["DefaultAlgo"] = request.defaultAlgo;
    }

    if (!$dara.isNull(request.maskingAlgo)) {
      query["MaskingAlgo"] = request.maskingAlgo;
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

    if (!$dara.isNull(request.ruleConfigShrink)) {
      query["RuleConfig"] = request.ruleConfigShrink;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMaskingRules",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMaskingRulesResponse>(await this.callApi(params, req, runtime), new $_model.CreateMaskingRulesResponse({}));
  }

  /**
   * 创建全密态规则
   * 
   * @remarks
   * ## Request Description
   * - Before using this API, ensure that you have enabled the column encryption service in DAS Security Center.
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and enable the column encryption service before using it again.
   * 
   * @param request - CreateMaskingRulesRequest
   * @returns CreateMaskingRulesResponse
   */
  async createMaskingRules(request: $_model.CreateMaskingRulesRequest): Promise<$_model.CreateMaskingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMaskingRulesWithOptions(request, runtime);
  }

  /**
   * 将OSS上的备份文件还原到RDS SQL Server实例，实现数据上云
   * 
   * @param request - CreateMigrateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMigrateTaskResponse
   */
  async createMigrateTaskWithOptions(request: $_model.CreateMigrateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMigrateTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.checkDBMode)) {
      query["CheckDBMode"] = request.checkDBMode;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.isOnlineDB)) {
      query["IsOnlineDB"] = request.isOnlineDB;
    }

    if (!$dara.isNull(request.migrateTaskId)) {
      query["MigrateTaskId"] = request.migrateTaskId;
    }

    if (!$dara.isNull(request.OSSUrls)) {
      query["OSSUrls"] = request.OSSUrls;
    }

    if (!$dara.isNull(request.ossObjectPositions)) {
      query["OssObjectPositions"] = request.ossObjectPositions;
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
      action: "CreateMigrateTask",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMigrateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateMigrateTaskResponse({}));
  }

  /**
   * 将OSS上的备份文件还原到RDS SQL Server实例，实现数据上云
   * 
   * @param request - CreateMigrateTaskRequest
   * @returns CreateMigrateTaskResponse
   */
  async createMigrateTask(request: $_model.CreateMigrateTaskRequest): Promise<$_model.CreateMigrateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMigrateTaskWithOptions(request, runtime);
  }

  /**
   * 打开RDS SQL Server备份数据上云任务的数据库
   * 
   * @param request - CreateOnlineDatabaseTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOnlineDatabaseTaskResponse
   */
  async createOnlineDatabaseTaskWithOptions(request: $_model.CreateOnlineDatabaseTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOnlineDatabaseTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkDBMode)) {
      query["CheckDBMode"] = request.checkDBMode;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.migrateTaskId)) {
      query["MigrateTaskId"] = request.migrateTaskId;
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
      action: "CreateOnlineDatabaseTask",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOnlineDatabaseTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateOnlineDatabaseTaskResponse({}));
  }

  /**
   * 打开RDS SQL Server备份数据上云任务的数据库
   * 
   * @param request - CreateOnlineDatabaseTaskRequest
   * @returns CreateOnlineDatabaseTaskResponse
   */
  async createOnlineDatabaseTask(request: $_model.CreateOnlineDatabaseTaskRequest): Promise<$_model.CreateOnlineDatabaseTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOnlineDatabaseTaskWithOptions(request, runtime);
  }

  /**
   * 创建删除节点订单
   * 
   * @param tmpReq - CreateOrderForDeleteDBNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderForDeleteDBNodesResponse
   */
  async createOrderForDeleteDBNodesWithOptions(tmpReq: $_model.CreateOrderForDeleteDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrderForDeleteDBNodesResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOrderForDeleteDBNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.DBNodeId)) {
      request.DBNodeIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBNodeId, "DBNodeId", "json");
    }

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

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBNodeIdShrink)) {
      query["DBNodeId"] = request.DBNodeIdShrink;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.promotionCode)) {
      query["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
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

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrderForDeleteDBNodes",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrderForDeleteDBNodesResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrderForDeleteDBNodesResponse({}));
  }

  /**
   * 创建删除节点订单
   * 
   * @param request - CreateOrderForDeleteDBNodesRequest
   * @returns CreateOrderForDeleteDBNodesResponse
   */
  async createOrderForDeleteDBNodes(request: $_model.CreateOrderForDeleteDBNodesRequest): Promise<$_model.CreateOrderForDeleteDBNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrderForDeleteDBNodesWithOptions(request, runtime);
  }

  /**
   * 创建参数模板
   * 
   * @param request - CreateParameterGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateParameterGroupResponse
   */
  async createParameterGroupWithOptions(request: $_model.CreateParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateParameterGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
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
      action: "CreateParameterGroup",
      version: "2014-08-15",
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
   * 创建参数模板
   * 
   * @param request - CreateParameterGroupRequest
   * @returns CreateParameterGroupResponse
   */
  async createParameterGroup(request: $_model.CreateParameterGroupRequest): Promise<$_model.CreateParameterGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createParameterGroupWithOptions(request, runtime);
  }

  /**
   * 创建插件
   * 
   * @param request - CreatePostgresExtensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePostgresExtensionsResponse
   */
  async createPostgresExtensionsWithOptions(request: $_model.CreatePostgresExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePostgresExtensionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBNames)) {
      query["DBNames"] = request.DBNames;
    }

    if (!$dara.isNull(request.extensions)) {
      query["Extensions"] = request.extensions;
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

    if (!$dara.isNull(request.riskConfirmed)) {
      query["RiskConfirmed"] = request.riskConfirmed;
    }

    if (!$dara.isNull(request.sourceDatabase)) {
      query["SourceDatabase"] = request.sourceDatabase;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePostgresExtensions",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePostgresExtensionsResponse>(await this.callApi(params, req, runtime), new $_model.CreatePostgresExtensionsResponse({}));
  }

  /**
   * 创建插件
   * 
   * @param request - CreatePostgresExtensionsRequest
   * @returns CreatePostgresExtensionsResponse
   */
  async createPostgresExtensions(request: $_model.CreatePostgresExtensionsRequest): Promise<$_model.CreatePostgresExtensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPostgresExtensionsWithOptions(request, runtime);
  }

  /**
   * 创建RDS CUSTOM部署集
   * 
   * @param request - CreateRCDeploymentSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRCDeploymentSetResponse
   */
  async createRCDeploymentSetWithOptions(request: $_model.CreateRCDeploymentSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRCDeploymentSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deploymentSetName)) {
      query["DeploymentSetName"] = request.deploymentSetName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupCount)) {
      query["GroupCount"] = request.groupCount;
    }

    if (!$dara.isNull(request.onUnableToRedeployFailedInstance)) {
      query["OnUnableToRedeployFailedInstance"] = request.onUnableToRedeployFailedInstance;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.strategy)) {
      query["Strategy"] = request.strategy;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRCDeploymentSet",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRCDeploymentSetResponse>(await this.callApi(params, req, runtime), new $_model.CreateRCDeploymentSetResponse({}));
  }

  /**
   * 创建RDS CUSTOM部署集
   * 
   * @param request - CreateRCDeploymentSetRequest
   * @returns CreateRCDeploymentSetResponse
   */
  async createRCDeploymentSet(request: $_model.CreateRCDeploymentSetRequest): Promise<$_model.CreateRCDeploymentSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRCDeploymentSetWithOptions(request, runtime);
  }

  /**
   * 创建RC云盘
   * 
   * @param request - CreateRCDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRCDiskResponse
   */
  async createRCDiskWithOptions(request: $_model.CreateRCDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRCDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.diskCategory)) {
      query["DiskCategory"] = request.diskCategory;
    }

    if (!$dara.isNull(request.diskName)) {
      query["DiskName"] = request.diskName;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.performanceLevel)) {
      query["PerformanceLevel"] = request.performanceLevel;
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

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
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
      action: "CreateRCDisk",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRCDiskResponse>(await this.callApi(params, req, runtime), new $_model.CreateRCDiskResponse({}));
  }

  /**
   * 创建RC云盘
   * 
   * @param request - CreateRCDiskRequest
   * @returns CreateRCDiskResponse
   */
  async createRCDisk(request: $_model.CreateRCDiskRequest): Promise<$_model.CreateRCDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRCDiskWithOptions(request, runtime);
  }

  /**
   * 创建RDS Custom实例的镜像
   * 
   * @param request - CreateRCImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRCImageResponse
   */
  async createRCImageWithOptions(request: $_model.CreateRCImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRCImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRCImage",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRCImageResponse>(await this.callApi(params, req, runtime), new $_model.CreateRCImageResponse({}));
  }

  /**
   * 创建RDS Custom实例的镜像
   * 
   * @param request - CreateRCImageRequest
   * @returns CreateRCImageResponse
   */
  async createRCImage(request: $_model.CreateRCImageRequest): Promise<$_model.CreateRCImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRCImageWithOptions(request, runtime);
  }

  /**
   * 创建RC节点池模版
   * 
   * @param tmpReq - CreateRCNodePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRCNodePoolResponse
   */
  async createRCNodePoolWithOptions(tmpReq: $_model.CreateRCNodePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRCNodePoolResponse> {
    tmpReq.validate();
    let request = new $_model.CreateRCNodePoolShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataDisk)) {
      request.dataDiskShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataDisk, "DataDisk", "json");
    }

    if (!$dara.isNull(tmpReq.systemDisk)) {
      request.systemDiskShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.systemDisk, "SystemDisk", "json");
    }

    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.createMode)) {
      query["CreateMode"] = request.createMode;
    }

    if (!$dara.isNull(request.dataDiskShrink)) {
      query["DataDisk"] = request.dataDiskShrink;
    }

    if (!$dara.isNull(request.deploymentSetId)) {
      query["DeploymentSetId"] = request.deploymentSetId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.internetMaxBandwidthOut)) {
      query["InternetMaxBandwidthOut"] = request.internetMaxBandwidthOut;
    }

    if (!$dara.isNull(request.ioOptimized)) {
      query["IoOptimized"] = request.ioOptimized;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.nodePoolName)) {
      query["NodePoolName"] = request.nodePoolName;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
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

    if (!$dara.isNull(request.securityEnhancementStrategy)) {
      query["SecurityEnhancementStrategy"] = request.securityEnhancementStrategy;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!$dara.isNull(request.supportCase)) {
      query["SupportCase"] = request.supportCase;
    }

    if (!$dara.isNull(request.systemDiskShrink)) {
      query["SystemDisk"] = request.systemDiskShrink;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
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
      action: "CreateRCNodePool",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRCNodePoolResponse>(await this.callApi(params, req, runtime), new $_model.CreateRCNodePoolResponse({}));
  }

  /**
   * 创建RC节点池模版
   * 
   * @param request - CreateRCNodePoolRequest
   * @returns CreateRCNodePoolResponse
   */
  async createRCNodePool(request: $_model.CreateRCNodePoolRequest): Promise<$_model.CreateRCNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRCNodePoolWithOptions(request, runtime);
  }

  /**
   * Create a snapshot for a disk.
   * 
   * @remarks
   * You cannot create a snapshot for the specified disk in the following scenarios:
   * - The number of retained manual snapshots for the disk has reached 256.
   * - The previous snapshot creation has not completed.
   * - The instance to which the disk is mounted has never been started.
   * - The instance to which the disk is mounted is not in the **Stopped** or **running** state.
   * When creating a snapshot, note the following:
   * - If snapshot creation has not completed, the snapshot cannot be used to create a custom image (CreateImage).
   * - If the disk is attached to an RDS Custom instance, do not change the instance status during snapshot creation.
   * - You can create snapshots for disks in the **expired** state. If the disk reaches its expiration and release time while a snapshot is being created, the disk will be released and the snapshot in the **Creating** state will be deleted simultaneously.
   * 
   * @param request - CreateRCSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRCSnapshotResponse
   */
  async createRCSnapshotWithOptions(request: $_model.CreateRCSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRCSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.instantAccess)) {
      query["InstantAccess"] = request.instantAccess;
    }

    if (!$dara.isNull(request.instantAccessRetentionDays)) {
      query["InstantAccessRetentionDays"] = request.instantAccessRetentionDays;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
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
      action: "CreateRCSnapshot",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRCSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.CreateRCSnapshotResponse({}));
  }

  /**
   * Create a snapshot for a disk.
   * 
   * @remarks
   * You cannot create a snapshot for the specified disk in the following scenarios:
   * - The number of retained manual snapshots for the disk has reached 256.
   * - The previous snapshot creation has not completed.
   * - The instance to which the disk is mounted has never been started.
   * - The instance to which the disk is mounted is not in the **Stopped** or **running** state.
   * When creating a snapshot, note the following:
   * - If snapshot creation has not completed, the snapshot cannot be used to create a custom image (CreateImage).
   * - If the disk is attached to an RDS Custom instance, do not change the instance status during snapshot creation.
   * - You can create snapshots for disks in the **expired** state. If the disk reaches its expiration and release time while a snapshot is being created, the disk will be released and the snapshot in the **Creating** state will be deleted simultaneously.
   * 
   * @param request - CreateRCSnapshotRequest
   * @returns CreateRCSnapshotResponse
   */
  async createRCSnapshot(request: $_model.CreateRCSnapshotRequest): Promise<$_model.CreateRCSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRCSnapshotWithOptions(request, runtime);
  }

  /**
   * This API is used to create a read-only instance for an RDS instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the Function Documentation to fully understand the prerequisites and potential impacts of using this API before proceeding with any operation.
   * - [Create a Read-Only Instance for RDS MySQL](https://help.aliyun.com/document_detail/56991.html)
   * - [Create a DuckDB Analytic Instance for RDS MySQL](https://help.aliyun.com/document_detail/2950002.html)
   * - [Create a Read-Only Instance for RDS PostgreSQL](https://help.aliyun.com/document_detail/108959.html)
   * - [Create a DuckDB Analytic Instance for RDS PostgreSQL](https://help.aliyun.com/document_detail/2977241.html)
   * - [Create a Read-Only Instance for RDS SQL Server](https://help.aliyun.com/document_detail/99005.html)
   * 
   * @param request - CreateReadOnlyDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReadOnlyDBInstanceResponse
   */
  async createReadOnlyDBInstanceWithOptions(request: $_model.CreateReadOnlyDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReadOnlyDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoCreateProxy)) {
      query["AutoCreateProxy"] = request.autoCreateProxy;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.bpeEnabled)) {
      query["BpeEnabled"] = request.bpeEnabled;
    }

    if (!$dara.isNull(request.burstingEnabled)) {
      query["BurstingEnabled"] = request.burstingEnabled;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.customExtraInfo)) {
      query["CustomExtraInfo"] = request.customExtraInfo;
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

    if (!$dara.isNull(request.DBInstanceStorage)) {
      query["DBInstanceStorage"] = request.DBInstanceStorage;
    }

    if (!$dara.isNull(request.DBInstanceStorageType)) {
      query["DBInstanceStorageType"] = request.DBInstanceStorageType;
    }

    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.gdnInstanceName)) {
      query["GdnInstanceName"] = request.gdnInstanceName;
    }

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
    }

    if (!$dara.isNull(request.instructionSetArch)) {
      query["InstructionSetArch"] = request.instructionSetArch;
    }

    if (!$dara.isNull(request.ioAccelerationEnabled)) {
      query["IoAccelerationEnabled"] = request.ioAccelerationEnabled;
    }

    if (!$dara.isNull(request.isAnalyticReadOnlyIns)) {
      query["IsAnalyticReadOnlyIns"] = request.isAnalyticReadOnlyIns;
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

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.promotionCode)) {
      query["PromotionCode"] = request.promotionCode;
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

    if (!$dara.isNull(request.targetDedicatedHostIdForMaster)) {
      query["TargetDedicatedHostIdForMaster"] = request.targetDedicatedHostIdForMaster;
    }

    if (!$dara.isNull(request.tddlBizType)) {
      query["TddlBizType"] = request.tddlBizType;
    }

    if (!$dara.isNull(request.tddlRegionConfig)) {
      query["TddlRegionConfig"] = request.tddlRegionConfig;
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
      action: "CreateReadOnlyDBInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateReadOnlyDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateReadOnlyDBInstanceResponse({}));
  }

  /**
   * This API is used to create a read-only instance for an RDS instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the Function Documentation to fully understand the prerequisites and potential impacts of using this API before proceeding with any operation.
   * - [Create a Read-Only Instance for RDS MySQL](https://help.aliyun.com/document_detail/56991.html)
   * - [Create a DuckDB Analytic Instance for RDS MySQL](https://help.aliyun.com/document_detail/2950002.html)
   * - [Create a Read-Only Instance for RDS PostgreSQL](https://help.aliyun.com/document_detail/108959.html)
   * - [Create a DuckDB Analytic Instance for RDS PostgreSQL](https://help.aliyun.com/document_detail/2977241.html)
   * - [Create a Read-Only Instance for RDS SQL Server](https://help.aliyun.com/document_detail/99005.html)
   * 
   * @param request - CreateReadOnlyDBInstanceRequest
   * @returns CreateReadOnlyDBInstanceResponse
   */
  async createReadOnlyDBInstance(request: $_model.CreateReadOnlyDBInstanceRequest): Promise<$_model.CreateReadOnlyDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createReadOnlyDBInstanceWithOptions(request, runtime);
  }

  /**
   * 创建复制链路
   * 
   * @param request - CreateReplicationLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReplicationLinkResponse
   */
  async createReplicationLinkWithOptions(request: $_model.CreateReplicationLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReplicationLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.replicatorAccount)) {
      query["ReplicatorAccount"] = request.replicatorAccount;
    }

    if (!$dara.isNull(request.replicatorPassword)) {
      query["ReplicatorPassword"] = request.replicatorPassword;
    }

    if (!$dara.isNull(request.sourceAddress)) {
      query["SourceAddress"] = request.sourceAddress;
    }

    if (!$dara.isNull(request.sourceCategory)) {
      query["SourceCategory"] = request.sourceCategory;
    }

    if (!$dara.isNull(request.sourceInstanceName)) {
      query["SourceInstanceName"] = request.sourceInstanceName;
    }

    if (!$dara.isNull(request.sourceInstanceRegionId)) {
      query["SourceInstanceRegionId"] = request.sourceInstanceRegionId;
    }

    if (!$dara.isNull(request.sourcePort)) {
      query["SourcePort"] = request.sourcePort;
    }

    if (!$dara.isNull(request.targetAddress)) {
      query["TargetAddress"] = request.targetAddress;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateReplicationLink",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateReplicationLinkResponse>(await this.callApi(params, req, runtime), new $_model.CreateReplicationLinkResponse({}));
  }

  /**
   * 创建复制链路
   * 
   * @param request - CreateReplicationLinkRequest
   * @returns CreateReplicationLinkResponse
   */
  async createReplicationLink(request: $_model.CreateReplicationLinkRequest): Promise<$_model.CreateReplicationLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createReplicationLinkWithOptions(request, runtime);
  }

  /**
   * 创建DataAPI用户凭证
   * 
   * @param request - CreateSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecretResponse
   */
  async createSecretWithOptions(request: $_model.CreateSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.dbNames)) {
      query["DbNames"] = request.dbNames;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
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

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecret",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecretResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecretResponse({}));
  }

  /**
   * 创建DataAPI用户凭证
   * 
   * @param request - CreateSecretRequest
   * @returns CreateSecretResponse
   */
  async createSecret(request: $_model.CreateSecretRequest): Promise<$_model.CreateSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecretWithOptions(request, runtime);
  }

  /**
   * 创建服务关联角色
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRoleWithOptions(request: $_model.CreateServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceLinkedRoleResponse> {
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

    if (!$dara.isNull(request.serviceLinkedRole)) {
      query["ServiceLinkedRole"] = request.serviceLinkedRole;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceLinkedRole",
      version: "2014-08-15",
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
   * 创建服务关联角色
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(request: $_model.CreateServiceLinkedRoleRequest): Promise<$_model.CreateServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * 创建临时实例
   * 
   * @param request - CreateTempDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTempDBInstanceResponse
   */
  async createTempDBInstanceWithOptions(request: $_model.CreateTempDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTempDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTempDBInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTempDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateTempDBInstanceResponse({}));
  }

  /**
   * 创建临时实例
   * 
   * @param request - CreateTempDBInstanceRequest
   * @returns CreateTempDBInstanceResponse
   */
  async createTempDBInstance(request: $_model.CreateTempDBInstanceRequest): Promise<$_model.CreateTempDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTempDBInstanceWithOptions(request, runtime);
  }

  /**
   * This API is used to claim a coupon.
   * 
   * @param request - CreateYouhuiForOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateYouhuiForOrderResponse
   */
  async createYouhuiForOrderWithOptions(request: $_model.CreateYouhuiForOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateYouhuiForOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
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
      action: "CreateYouhuiForOrder",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateYouhuiForOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateYouhuiForOrderResponse({}));
  }

  /**
   * This API is used to claim a coupon.
   * 
   * @param request - CreateYouhuiForOrderRequest
   * @returns CreateYouhuiForOrderResponse
   */
  async createYouhuiForOrder(request: $_model.CreateYouhuiForOrderRequest): Promise<$_model.CreateYouhuiForOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createYouhuiForOrderWithOptions(request, runtime);
  }

  /**
   * 将当前RDS SQL Server实例退出所在域
   * 
   * @param request - DeleteADSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteADSettingResponse
   */
  async deleteADSettingWithOptions(request: $_model.DeleteADSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteADSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DeleteADSetting",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteADSettingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteADSettingResponse({}));
  }

  /**
   * 将当前RDS SQL Server实例退出所在域
   * 
   * @param request - DeleteADSettingRequest
   * @returns DeleteADSettingResponse
   */
  async deleteADSetting(request: $_model.DeleteADSettingRequest): Promise<$_model.DeleteADSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteADSettingWithOptions(request, runtime);
  }

  /**
   * 删除指定账号
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
      action: "DeleteAccount",
      version: "2014-08-15",
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
   * 删除指定账号
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * 删除实例备份
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
      action: "DeleteBackup",
      version: "2014-08-15",
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
   * 删除实例备份
   * 
   * @param request - DeleteBackupRequest
   * @returns DeleteBackupResponse
   */
  async deleteBackup(request: $_model.DeleteBackupRequest): Promise<$_model.DeleteBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupWithOptions(request, runtime);
  }

  /**
   * 删除备份文件
   * 
   * @param request - DeleteBackupFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupFileResponse
   */
  async deleteBackupFileWithOptions(request: $_model.DeleteBackupFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupTime)) {
      query["BackupTime"] = request.backupTime;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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
      action: "DeleteBackupFile",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupFileResponse({}));
  }

  /**
   * 删除备份文件
   * 
   * @param request - DeleteBackupFileRequest
   * @returns DeleteBackupFileResponse
   */
  async deleteBackupFile(request: $_model.DeleteBackupFileRequest): Promise<$_model.DeleteBackupFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupFileWithOptions(request, runtime);
  }

  /**
   * 释放RDS实例
   * 
   * @param request - DeleteDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstanceWithOptions(request: $_model.DeleteDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceResponse> {
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

    if (!$dara.isNull(request.releasedKeepPolicy)) {
      query["ReleasedKeepPolicy"] = request.releasedKeepPolicy;
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
      version: "2014-08-15",
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
   * 释放RDS实例
   * 
   * @param request - DeleteDBInstanceRequest
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstance(request: $_model.DeleteDBInstanceRequest): Promise<$_model.DeleteDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  /**
   * 删除实例的Endpoint
   * 
   * @param request - DeleteDBInstanceEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceEndpointResponse
   */
  async deleteDBInstanceEndpointWithOptions(request: $_model.DeleteDBInstanceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceEndpointId)) {
      query["DBInstanceEndpointId"] = request.DBInstanceEndpointId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBInstanceEndpoint",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBInstanceEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBInstanceEndpointResponse({}));
  }

  /**
   * 删除实例的Endpoint
   * 
   * @param request - DeleteDBInstanceEndpointRequest
   * @returns DeleteDBInstanceEndpointResponse
   */
  async deleteDBInstanceEndpoint(request: $_model.DeleteDBInstanceEndpointRequest): Promise<$_model.DeleteDBInstanceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBInstanceEndpointWithOptions(request, runtime);
  }

  /**
   * 删除实例的Endpoint连接地址
   * 
   * @param request - DeleteDBInstanceEndpointAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceEndpointAddressResponse
   */
  async deleteDBInstanceEndpointAddressWithOptions(request: $_model.DeleteDBInstanceEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceEndpointAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.connectionString)) {
      body["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceEndpointId)) {
      body["DBInstanceEndpointId"] = request.DBInstanceEndpointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBInstanceEndpointAddress",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBInstanceEndpointAddressResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBInstanceEndpointAddressResponse({}));
  }

  /**
   * 删除实例的Endpoint连接地址
   * 
   * @param request - DeleteDBInstanceEndpointAddressRequest
   * @returns DeleteDBInstanceEndpointAddressResponse
   */
  async deleteDBInstanceEndpointAddress(request: $_model.DeleteDBInstanceEndpointAddressRequest): Promise<$_model.DeleteDBInstanceEndpointAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBInstanceEndpointAddressWithOptions(request, runtime);
  }

  /**
   * Delete a replication link from a native replication instance
   * 
   * @param request - DeleteDBInstanceReplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceReplicationResponse
   */
  async deleteDBInstanceReplicationWithOptions(request: $_model.DeleteDBInstanceReplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceReplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBInstanceReplication",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBInstanceReplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBInstanceReplicationResponse({}));
  }

  /**
   * Delete a replication link from a native replication instance
   * 
   * @param request - DeleteDBInstanceReplicationRequest
   * @returns DeleteDBInstanceReplicationResponse
   */
  async deleteDBInstanceReplication(request: $_model.DeleteDBInstanceReplicationRequest): Promise<$_model.DeleteDBInstanceReplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBInstanceReplicationWithOptions(request, runtime);
  }

  /**
   * 删除实例主机安全组规则
   * 
   * @param request - DeleteDBInstanceSecurityGroupRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceSecurityGroupRuleResponse
   */
  async deleteDBInstanceSecurityGroupRuleWithOptions(request: $_model.DeleteDBInstanceSecurityGroupRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceSecurityGroupRuleResponse> {
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityGroupRuleIds)) {
      query["SecurityGroupRuleIds"] = request.securityGroupRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBInstanceSecurityGroupRule",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBInstanceSecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBInstanceSecurityGroupRuleResponse({}));
  }

  /**
   * 删除实例主机安全组规则
   * 
   * @param request - DeleteDBInstanceSecurityGroupRuleRequest
   * @returns DeleteDBInstanceSecurityGroupRuleResponse
   */
  async deleteDBInstanceSecurityGroupRule(request: $_model.DeleteDBInstanceSecurityGroupRuleRequest): Promise<$_model.DeleteDBInstanceSecurityGroupRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBInstanceSecurityGroupRuleWithOptions(request, runtime);
  }

  /**
   * category cluster delete node
   * 
   * @param tmpReq - DeleteDBNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBNodesResponse
   */
  async deleteDBNodesWithOptions(tmpReq: $_model.DeleteDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBNodesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteDBNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.DBNodeId)) {
      request.DBNodeIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBNodeId, "DBNodeId", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBNodeIdShrink)) {
      query["DBNodeId"] = request.DBNodeIdShrink;
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
      action: "DeleteDBNodes",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBNodesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBNodesResponse({}));
  }

  /**
   * category cluster delete node
   * 
   * @param request - DeleteDBNodesRequest
   * @returns DeleteDBNodesResponse
   */
  async deleteDBNodes(request: $_model.DeleteDBNodesRequest): Promise<$_model.DeleteDBNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBNodesWithOptions(request, runtime);
  }

  /**
   * 删除RDS实例数据库代理的连接地址
   * 
   * @param request - DeleteDBProxyEndpointAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBProxyEndpointAddressResponse
   */
  async deleteDBProxyEndpointAddressWithOptions(request: $_model.DeleteDBProxyEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBProxyEndpointAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBProxyConnectStringNetType)) {
      query["DBProxyConnectStringNetType"] = request.DBProxyConnectStringNetType;
    }

    if (!$dara.isNull(request.DBProxyEndpointId)) {
      query["DBProxyEndpointId"] = request.DBProxyEndpointId;
    }

    if (!$dara.isNull(request.DBProxyEngineType)) {
      query["DBProxyEngineType"] = request.DBProxyEngineType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBProxyEndpointAddress",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBProxyEndpointAddressResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBProxyEndpointAddressResponse({}));
  }

  /**
   * 删除RDS实例数据库代理的连接地址
   * 
   * @param request - DeleteDBProxyEndpointAddressRequest
   * @returns DeleteDBProxyEndpointAddressResponse
   */
  async deleteDBProxyEndpointAddress(request: $_model.DeleteDBProxyEndpointAddressRequest): Promise<$_model.DeleteDBProxyEndpointAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBProxyEndpointAddressWithOptions(request, runtime);
  }

  /**
   * 删除指定DB
   * 
   * @param request - DeleteDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatabaseResponse
   */
  async deleteDatabaseWithOptions(request: $_model.DeleteDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatabase",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatabaseResponse({}));
  }

  /**
   * 删除指定DB
   * 
   * @param request - DeleteDatabaseRequest
   * @returns DeleteDatabaseResponse
   */
  async deleteDatabase(request: $_model.DeleteDatabaseRequest): Promise<$_model.DeleteDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDatabaseWithOptions(request, runtime);
  }

  /**
   * DeleteGadInstance
   * 
   * @param request - DeleteGadInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGadInstanceResponse
   */
  async deleteGadInstanceWithOptions(request: $_model.DeleteGadInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGadInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gadInstanceName)) {
      query["GadInstanceName"] = request.gadInstanceName;
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
      action: "DeleteGadInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGadInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGadInstanceResponse({}));
  }

  /**
   * DeleteGadInstance
   * 
   * @param request - DeleteGadInstanceRequest
   * @returns DeleteGadInstanceResponse
   */
  async deleteGadInstance(request: $_model.DeleteGadInstanceRequest): Promise<$_model.DeleteGadInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGadInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes the encryption or desensitization rule for a specified instance.
   * 
   * @remarks
   * ## Request Description
   * - Before using this API, ensure that you have activated the column encryption service in DAS Security Center.
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and activate the column encryption service before using this API again.
   * 
   * @param request - DeleteMaskingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMaskingRulesResponse
   */
  async deleteMaskingRulesWithOptions(request: $_model.DeleteMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMaskingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMaskingRules",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMaskingRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMaskingRulesResponse({}));
  }

  /**
   * Deletes the encryption or desensitization rule for a specified instance.
   * 
   * @remarks
   * ## Request Description
   * - Before using this API, ensure that you have activated the column encryption service in DAS Security Center.
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and activate the column encryption service before using this API again.
   * 
   * @param request - DeleteMaskingRulesRequest
   * @returns DeleteMaskingRulesResponse
   */
  async deleteMaskingRules(request: $_model.DeleteMaskingRulesRequest): Promise<$_model.DeleteMaskingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMaskingRulesWithOptions(request, runtime);
  }

  /**
   * 删除指定参数模板
   * 
   * @param request - DeleteParameterGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteParameterGroupResponse
   */
  async deleteParameterGroupWithOptions(request: $_model.DeleteParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteParameterGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
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
      action: "DeleteParameterGroup",
      version: "2014-08-15",
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
   * 删除指定参数模板
   * 
   * @param request - DeleteParameterGroupRequest
   * @returns DeleteParameterGroupResponse
   */
  async deleteParameterGroup(request: $_model.DeleteParameterGroupRequest): Promise<$_model.DeleteParameterGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteParameterGroupWithOptions(request, runtime);
  }

  /**
   * Delete a scheduled task for modifying instance parameters.
   * 
   * @remarks
   * ### Applicable Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the Function Documentation to fully understand the prerequisites for using the API and the Impact of its use before performing any operation.
   * - [Set Instance Parameters for RDS MySQL](https://help.aliyun.com/document_detail/96063.html)
   * - [Set Instance Parameters for RDS PostgreSQL](https://help.aliyun.com/document_detail/96751.html)
   * 
   * @param request - DeleteParameterTimedScheduleTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteParameterTimedScheduleTaskResponse
   */
  async deleteParameterTimedScheduleTaskWithOptions(request: $_model.DeleteParameterTimedScheduleTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteParameterTimedScheduleTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteParameterTimedScheduleTask",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteParameterTimedScheduleTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteParameterTimedScheduleTaskResponse({}));
  }

  /**
   * Delete a scheduled task for modifying instance parameters.
   * 
   * @remarks
   * ### Applicable Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the Function Documentation to fully understand the prerequisites for using the API and the Impact of its use before performing any operation.
   * - [Set Instance Parameters for RDS MySQL](https://help.aliyun.com/document_detail/96063.html)
   * - [Set Instance Parameters for RDS PostgreSQL](https://help.aliyun.com/document_detail/96751.html)
   * 
   * @param request - DeleteParameterTimedScheduleTaskRequest
   * @returns DeleteParameterTimedScheduleTaskResponse
   */
  async deleteParameterTimedScheduleTask(request: $_model.DeleteParameterTimedScheduleTaskRequest): Promise<$_model.DeleteParameterTimedScheduleTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteParameterTimedScheduleTaskWithOptions(request, runtime);
  }

  /**
   * 删除插件
   * 
   * @param request - DeletePostgresExtensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePostgresExtensionsResponse
   */
  async deletePostgresExtensionsWithOptions(request: $_model.DeletePostgresExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePostgresExtensionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBNames)) {
      query["DBNames"] = request.DBNames;
    }

    if (!$dara.isNull(request.extensions)) {
      query["Extensions"] = request.extensions;
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
      action: "DeletePostgresExtensions",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePostgresExtensionsResponse>(await this.callApi(params, req, runtime), new $_model.DeletePostgresExtensionsResponse({}));
  }

  /**
   * 删除插件
   * 
   * @param request - DeletePostgresExtensionsRequest
   * @returns DeletePostgresExtensionsResponse
   */
  async deletePostgresExtensions(request: $_model.DeletePostgresExtensionsRequest): Promise<$_model.DeletePostgresExtensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePostgresExtensionsWithOptions(request, runtime);
  }

  /**
   * 移除集群中的节点
   * 
   * @param tmpReq - DeleteRCClusterNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRCClusterNodesResponse
   */
  async deleteRCClusterNodesWithOptions(tmpReq: $_model.DeleteRCClusterNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCClusterNodesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteRCClusterNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "simple");
    }

    if (!$dara.isNull(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "Nodes", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.nodesShrink)) {
      query["Nodes"] = request.nodesShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRCClusterNodes",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRCClusterNodesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRCClusterNodesResponse({}));
  }

  /**
   * 移除集群中的节点
   * 
   * @param request - DeleteRCClusterNodesRequest
   * @returns DeleteRCClusterNodesResponse
   */
  async deleteRCClusterNodes(request: $_model.DeleteRCClusterNodesRequest): Promise<$_model.DeleteRCClusterNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRCClusterNodesWithOptions(request, runtime);
  }

  /**
   * 删除RDS CUSTOM部署集
   * 
   * @param request - DeleteRCDeploymentSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRCDeploymentSetResponse
   */
  async deleteRCDeploymentSetWithOptions(request: $_model.DeleteRCDeploymentSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCDeploymentSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deploymentSetId)) {
      query["DeploymentSetId"] = request.deploymentSetId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRCDeploymentSet",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRCDeploymentSetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRCDeploymentSetResponse({}));
  }

  /**
   * 删除RDS CUSTOM部署集
   * 
   * @param request - DeleteRCDeploymentSetRequest
   * @returns DeleteRCDeploymentSetResponse
   */
  async deleteRCDeploymentSet(request: $_model.DeleteRCDeploymentSetRequest): Promise<$_model.DeleteRCDeploymentSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRCDeploymentSetWithOptions(request, runtime);
  }

  /**
   * 删除RC云盘
   * 
   * @param request - DeleteRCDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRCDiskResponse
   */
  async deleteRCDiskWithOptions(request: $_model.DeleteRCDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRCDisk",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRCDiskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRCDiskResponse({}));
  }

  /**
   * 删除RC云盘
   * 
   * @param request - DeleteRCDiskRequest
   * @returns DeleteRCDiskResponse
   */
  async deleteRCDisk(request: $_model.DeleteRCDiskRequest): Promise<$_model.DeleteRCDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRCDiskWithOptions(request, runtime);
  }

  /**
   * 删除RDS用户专属主机实例
   * 
   * @param request - DeleteRCInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRCInstanceResponse
   */
  async deleteRCInstanceWithOptions(request: $_model.DeleteRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRCInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRCInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRCInstanceResponse({}));
  }

  /**
   * 删除RDS用户专属主机实例
   * 
   * @param request - DeleteRCInstanceRequest
   * @returns DeleteRCInstanceResponse
   */
  async deleteRCInstance(request: $_model.DeleteRCInstanceRequest): Promise<$_model.DeleteRCInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRCInstanceWithOptions(request, runtime);
  }

  /**
   * 批量删除RDS用户专属主机实例
   * 
   * @param tmpReq - DeleteRCInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRCInstancesResponse
   */
  async deleteRCInstancesWithOptions(tmpReq: $_model.DeleteRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteRCInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceId)) {
      request.instanceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceId, "InstanceId", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.instanceIdShrink)) {
      query["InstanceId"] = request.instanceIdShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.terminateSubscription)) {
      query["TerminateSubscription"] = request.terminateSubscription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRCInstances",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRCInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRCInstancesResponse({}));
  }

  /**
   * 批量删除RDS用户专属主机实例
   * 
   * @param request - DeleteRCInstancesRequest
   * @returns DeleteRCInstancesResponse
   */
  async deleteRCInstances(request: $_model.DeleteRCInstancesRequest): Promise<$_model.DeleteRCInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRCInstancesWithOptions(request, runtime);
  }

  /**
   * 删除RC模版
   * 
   * @param request - DeleteRCNodePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRCNodePoolResponse
   */
  async deleteRCNodePoolWithOptions(request: $_model.DeleteRCNodePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCNodePoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodePoolId)) {
      query["NodePoolId"] = request.nodePoolId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRCNodePool",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRCNodePoolResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRCNodePoolResponse({}));
  }

  /**
   * 删除RC模版
   * 
   * @param request - DeleteRCNodePoolRequest
   * @returns DeleteRCNodePoolResponse
   */
  async deleteRCNodePool(request: $_model.DeleteRCNodePoolRequest): Promise<$_model.DeleteRCNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRCNodePoolWithOptions(request, runtime);
  }

  /**
   * Deletes a cloud disk snapshot.
   * 
   * @param request - DeleteRCSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRCSnapshotResponse
   */
  async deleteRCSnapshotWithOptions(request: $_model.DeleteRCSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRCSnapshot",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRCSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRCSnapshotResponse({}));
  }

  /**
   * Deletes a cloud disk snapshot.
   * 
   * @param request - DeleteRCSnapshotRequest
   * @returns DeleteRCSnapshotResponse
   */
  async deleteRCSnapshot(request: $_model.DeleteRCSnapshotRequest): Promise<$_model.DeleteRCSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRCSnapshotWithOptions(request, runtime);
  }

  /**
   * RCVCluster删除接口
   * 
   * @param request - DeleteRCVClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRCVClusterResponse
   */
  async deleteRCVClusterWithOptions(request: $_model.DeleteRCVClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCVClusterResponse> {
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
      action: "DeleteRCVCluster",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRCVClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRCVClusterResponse({}));
  }

  /**
   * RCVCluster删除接口
   * 
   * @param request - DeleteRCVClusterRequest
   * @returns DeleteRCVClusterResponse
   */
  async deleteRCVCluster(request: $_model.DeleteRCVClusterRequest): Promise<$_model.DeleteRCVClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRCVClusterWithOptions(request, runtime);
  }

  /**
   * 删除复制链路
   * 
   * @param request - DeleteReplicationLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteReplicationLinkResponse
   */
  async deleteReplicationLinkWithOptions(request: $_model.DeleteReplicationLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteReplicationLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.promoteToMaster)) {
      query["PromoteToMaster"] = request.promoteToMaster;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteReplicationLink",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteReplicationLinkResponse>(await this.callApi(params, req, runtime), new $_model.DeleteReplicationLinkResponse({}));
  }

  /**
   * 删除复制链路
   * 
   * @param request - DeleteReplicationLinkRequest
   * @returns DeleteReplicationLinkResponse
   */
  async deleteReplicationLink(request: $_model.DeleteReplicationLinkRequest): Promise<$_model.DeleteReplicationLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteReplicationLinkWithOptions(request, runtime);
  }

  /**
   * 删除Data API的用户凭证
   * 
   * @param request - DeleteSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecretResponse
   */
  async deleteSecretWithOptions(request: $_model.DeleteSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
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

    if (!$dara.isNull(request.secretArn)) {
      query["SecretArn"] = request.secretArn;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecret",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecretResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecretResponse({}));
  }

  /**
   * 删除Data API的用户凭证
   * 
   * @param request - DeleteSecretRequest
   * @returns DeleteSecretResponse
   */
  async deleteSecret(request: $_model.DeleteSecretRequest): Promise<$_model.DeleteSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecretWithOptions(request, runtime);
  }

  /**
   * 删除实例复制槽
   * 
   * @param request - DeleteSlotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSlotResponse
   */
  async deleteSlotWithOptions(request: $_model.DeleteSlotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSlotResponse> {
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.slotName)) {
      query["SlotName"] = request.slotName;
    }

    if (!$dara.isNull(request.slotStatus)) {
      query["SlotStatus"] = request.slotStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSlot",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSlotResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSlotResponse({}));
  }

  /**
   * 删除实例复制槽
   * 
   * @param request - DeleteSlotRequest
   * @returns DeleteSlotResponse
   */
  async deleteSlot(request: $_model.DeleteSlotRequest): Promise<$_model.DeleteSlotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSlotWithOptions(request, runtime);
  }

  /**
   * 删除目标用户备份
   * 
   * @param request - DeleteUserBackupFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserBackupFileResponse
   */
  async deleteUserBackupFileWithOptions(request: $_model.DeleteUserBackupFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserBackupFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
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
      action: "DeleteUserBackupFile",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserBackupFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserBackupFileResponse({}));
  }

  /**
   * 删除目标用户备份
   * 
   * @param request - DeleteUserBackupFileRequest
   * @returns DeleteUserBackupFileResponse
   */
  async deleteUserBackupFile(request: $_model.DeleteUserBackupFileRequest): Promise<$_model.DeleteUserBackupFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserBackupFileWithOptions(request, runtime);
  }

  /**
   * 查询数据库迁移列表
   * 
   * @param request - DescibeImportsFromDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescibeImportsFromDatabaseResponse
   */
  async descibeImportsFromDatabaseWithOptions(request: $_model.DescibeImportsFromDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescibeImportsFromDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.importId)) {
      query["ImportId"] = request.importId;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescibeImportsFromDatabase",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescibeImportsFromDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.DescibeImportsFromDatabaseResponse({}));
  }

  /**
   * 查询数据库迁移列表
   * 
   * @param request - DescibeImportsFromDatabaseRequest
   * @returns DescibeImportsFromDatabaseResponse
   */
  async descibeImportsFromDatabase(request: $_model.DescibeImportsFromDatabaseRequest): Promise<$_model.DescibeImportsFromDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.descibeImportsFromDatabaseWithOptions(request, runtime);
  }

  /**
   * 查询当前实例域相关信息, 包括是否已经加入域、域名称、所使用账号等
   * 
   * @param request - DescribeADInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeADInfoResponse
   */
  async describeADInfoWithOptions(request: $_model.DescribeADInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeADInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeADInfo",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeADInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeADInfoResponse({}));
  }

  /**
   * 查询当前实例域相关信息, 包括是否已经加入域、域名称、所使用账号等
   * 
   * @param request - DescribeADInfoRequest
   * @returns DescribeADInfoResponse
   */
  async describeADInfo(request: $_model.DescribeADInfoRequest): Promise<$_model.DescribeADInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeADInfoWithOptions(request, runtime);
  }

  /**
   * Query the encryption or data masking permission configuration of an account in a specified instance.
   * 
   * @remarks
   * ## Request Description
   * - Before invoking this API, ensure that you have activated the column encryption service in DAS Security Center.
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and activate the column encryption service before using it.
   * 
   * @param request - DescribeAccountMaskingPrivilegeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountMaskingPrivilegeResponse
   */
  async describeAccountMaskingPrivilegeWithOptions(request: $_model.DescribeAccountMaskingPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountMaskingPrivilegeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccountMaskingPrivilege",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountMaskingPrivilegeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountMaskingPrivilegeResponse({}));
  }

  /**
   * Query the encryption or data masking permission configuration of an account in a specified instance.
   * 
   * @remarks
   * ## Request Description
   * - Before invoking this API, ensure that you have activated the column encryption service in DAS Security Center.
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and activate the column encryption service before using it.
   * 
   * @param request - DescribeAccountMaskingPrivilegeRequest
   * @returns DescribeAccountMaskingPrivilegeResponse
   */
  async describeAccountMaskingPrivilege(request: $_model.DescribeAccountMaskingPrivilegeRequest): Promise<$_model.DescribeAccountMaskingPrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountMaskingPrivilegeWithOptions(request, runtime);
  }

  /**
   * 查询实例的账号列表
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
      version: "2014-08-15",
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
   * 查询实例的账号列表
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: $_model.DescribeAccountsRequest): Promise<$_model.DescribeAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * 查询RDS历史事件功能是否开启
   * 
   * @param request - DescribeActionEventPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActionEventPolicyResponse
   */
  async describeActionEventPolicyWithOptions(request: $_model.DescribeActionEventPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActionEventPolicyResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeActionEventPolicy",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActionEventPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActionEventPolicyResponse({}));
  }

  /**
   * 查询RDS历史事件功能是否开启
   * 
   * @param request - DescribeActionEventPolicyRequest
   * @returns DescribeActionEventPolicyResponse
   */
  async describeActionEventPolicy(request: $_model.DescribeActionEventPolicyRequest): Promise<$_model.DescribeActionEventPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActionEventPolicyWithOptions(request, runtime);
  }

  /**
   * Obtain the user\\"s O\\&M configuration information, which currently includes scheduled management event time window information.
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
      version: "2014-08-15",
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
   * Obtain the user\\"s O\\&M configuration information, which currently includes scheduled management event time window information.
   * 
   * @param request - DescribeActiveOperationMaintainConfRequest
   * @returns DescribeActiveOperationMaintainConfResponse
   */
  async describeActiveOperationMaintainConf(request: $_model.DescribeActiveOperationMaintainConfRequest): Promise<$_model.DescribeActiveOperationMaintainConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationMaintainConfWithOptions(request, runtime);
  }

  /**
   * 查询主动运维任务列表
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
      version: "2014-08-15",
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
   * 查询主动运维任务列表
   * 
   * @param request - DescribeActiveOperationTasksRequest
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasks(request: $_model.DescribeActiveOperationTasksRequest): Promise<$_model.DescribeActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * 批量获取白名单模板
   * 
   * @param request - DescribeAllWhitelistTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllWhitelistTemplateResponse
   */
  async describeAllWhitelistTemplateWithOptions(request: $_model.DescribeAllWhitelistTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAllWhitelistTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fuzzySearch)) {
      query["FuzzySearch"] = request.fuzzySearch;
    }

    if (!$dara.isNull(request.maxRecordsPerPage)) {
      query["MaxRecordsPerPage"] = request.maxRecordsPerPage;
    }

    if (!$dara.isNull(request.pageNumbers)) {
      query["PageNumbers"] = request.pageNumbers;
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

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAllWhitelistTemplate",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAllWhitelistTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAllWhitelistTemplateResponse({}));
  }

  /**
   * 批量获取白名单模板
   * 
   * @param request - DescribeAllWhitelistTemplateRequest
   * @returns DescribeAllWhitelistTemplateResponse
   */
  async describeAllWhitelistTemplate(request: $_model.DescribeAllWhitelistTemplateRequest): Promise<$_model.DescribeAllWhitelistTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAllWhitelistTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the number of analytic instances that are associated with an ApsaraDB RDS for MySQL instance.
   * 
   * @remarks
   * ### 适用引擎
   * RDS MySQL
   * ### 相关功能文档
   * <props="china">[创建和查看MySQL分析实例](https://help.aliyun.com/document_detail/155180.html)
   * 
   * @param request - DescribeAnalyticdbByPrimaryDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAnalyticdbByPrimaryDBInstanceResponse
   */
  async describeAnalyticdbByPrimaryDBInstanceWithOptions(request: $_model.DescribeAnalyticdbByPrimaryDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAnalyticdbByPrimaryDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeAnalyticdbByPrimaryDBInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAnalyticdbByPrimaryDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAnalyticdbByPrimaryDBInstanceResponse({}));
  }

  /**
   * Queries the number of analytic instances that are associated with an ApsaraDB RDS for MySQL instance.
   * 
   * @remarks
   * ### 适用引擎
   * RDS MySQL
   * ### 相关功能文档
   * <props="china">[创建和查看MySQL分析实例](https://help.aliyun.com/document_detail/155180.html)
   * 
   * @param request - DescribeAnalyticdbByPrimaryDBInstanceRequest
   * @returns DescribeAnalyticdbByPrimaryDBInstanceResponse
   */
  async describeAnalyticdbByPrimaryDBInstance(request: $_model.DescribeAnalyticdbByPrimaryDBInstanceRequest): Promise<$_model.DescribeAnalyticdbByPrimaryDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAnalyticdbByPrimaryDBInstanceWithOptions(request, runtime);
  }

  /**
   * 查询实例可购买规格，包括规格代码和存储空间
   * 
   * @param request - DescribeAvailableClassesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableClassesResponse
   */
  async describeAvailableClassesWithOptions(request: $_model.DescribeAvailableClassesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableClassesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceStorageType)) {
      query["DBInstanceStorageType"] = request.DBInstanceStorageType;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "DescribeAvailableClasses",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableClassesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableClassesResponse({}));
  }

  /**
   * 查询实例可购买规格，包括规格代码和存储空间
   * 
   * @param request - DescribeAvailableClassesRequest
   * @returns DescribeAvailableClassesResponse
   */
  async describeAvailableClasses(request: $_model.DescribeAvailableClassesRequest): Promise<$_model.DescribeAvailableClassesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableClassesWithOptions(request, runtime);
  }

  /**
   * 查询可用的跨地域信息
   * 
   * @param request - DescribeAvailableCrossRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableCrossRegionResponse
   */
  async describeAvailableCrossRegionWithOptions(request: $_model.DescribeAvailableCrossRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableCrossRegionResponse> {
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
      action: "DescribeAvailableCrossRegion",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableCrossRegionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableCrossRegionResponse({}));
  }

  /**
   * 查询可用的跨地域信息
   * 
   * @param request - DescribeAvailableCrossRegionRequest
   * @returns DescribeAvailableCrossRegionResponse
   */
  async describeAvailableCrossRegion(request: $_model.DescribeAvailableCrossRegionRequest): Promise<$_model.DescribeAvailableCrossRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableCrossRegionWithOptions(request, runtime);
  }

  /**
   * 查询可用的指标
   * 
   * @param request - DescribeAvailableMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableMetricsResponse
   */
  async describeAvailableMetricsWithOptions(request: $_model.DescribeAvailableMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableMetricsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableMetrics",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableMetricsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableMetricsResponse({}));
  }

  /**
   * 查询可用的指标
   * 
   * @param request - DescribeAvailableMetricsRequest
   * @returns DescribeAvailableMetricsResponse
   */
  async describeAvailableMetrics(request: $_model.DescribeAvailableMetricsRequest): Promise<$_model.DescribeAvailableMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableMetricsWithOptions(request, runtime);
  }

  /**
   * 查询某跨地域备份文件可恢复哪个时间段的数据
   * 
   * @param request - DescribeAvailableRecoveryTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableRecoveryTimeResponse
   */
  async describeAvailableRecoveryTimeWithOptions(request: $_model.DescribeAvailableRecoveryTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableRecoveryTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossBackupId)) {
      query["CrossBackupId"] = request.crossBackupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeAvailableRecoveryTime",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableRecoveryTimeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableRecoveryTimeResponse({}));
  }

  /**
   * 查询某跨地域备份文件可恢复哪个时间段的数据
   * 
   * @param request - DescribeAvailableRecoveryTimeRequest
   * @returns DescribeAvailableRecoveryTimeResponse
   */
  async describeAvailableRecoveryTime(request: $_model.DescribeAvailableRecoveryTimeRequest): Promise<$_model.DescribeAvailableRecoveryTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableRecoveryTimeWithOptions(request, runtime);
  }

  /**
   * 查询可用区列表
   * 
   * @param request - DescribeAvailableZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableZonesResponse
   */
  async describeAvailableZonesWithOptions(request: $_model.DescribeAvailableZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.dispenseMode)) {
      query["DispenseMode"] = request.dispenseMode;
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
      action: "DescribeAvailableZones",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableZonesResponse({}));
  }

  /**
   * 查询可用区列表
   * 
   * @param request - DescribeAvailableZonesRequest
   * @returns DescribeAvailableZonesResponse
   */
  async describeAvailableZones(request: $_model.DescribeAvailableZonesRequest): Promise<$_model.DescribeAvailableZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableZonesWithOptions(request, runtime);
  }

  /**
   * 查询数据库备份
   * 
   * @param request - DescribeBackupDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupDatabaseResponse
   */
  async describeBackupDatabaseWithOptions(request: $_model.DescribeBackupDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeBackupDatabase",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupDatabaseResponse({}));
  }

  /**
   * 查询数据库备份
   * 
   * @param request - DescribeBackupDatabaseRequest
   * @returns DescribeBackupDatabaseResponse
   */
  async describeBackupDatabase(request: $_model.DescribeBackupDatabaseRequest): Promise<$_model.DescribeBackupDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupDatabaseWithOptions(request, runtime);
  }

  /**
   * 查询实例备份设置
   * 
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: $_model.DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPolicyMode)) {
      query["BackupPolicyMode"] = request.backupPolicyMode;
    }

    if (!$dara.isNull(request.compressType)) {
      query["CompressType"] = request.compressType;
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

    if (!$dara.isNull(request.releasedKeepPolicy)) {
      query["ReleasedKeepPolicy"] = request.releasedKeepPolicy;
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
      version: "2014-08-15",
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
   * 查询实例备份设置
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * 查询备份任务列表
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

    if (!$dara.isNull(request.backupJobStatus)) {
      query["BackupJobStatus"] = request.backupJobStatus;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.flag)) {
      query["Flag"] = request.flag;
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
      action: "DescribeBackupTasks",
      version: "2014-08-15",
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
   * 查询备份任务列表
   * 
   * @param request - DescribeBackupTasksRequest
   * @returns DescribeBackupTasksResponse
   */
  async describeBackupTasks(request: $_model.DescribeBackupTasksRequest): Promise<$_model.DescribeBackupTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupTasksWithOptions(request, runtime);
  }

  /**
   * This API is used to view the backup set list of an RDS instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
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

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.backupStatus)) {
      query["BackupStatus"] = request.backupStatus;
    }

    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

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
      action: "DescribeBackups",
      version: "2014-08-15",
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
   * This API is used to view the backup set list of an RDS instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: $_model.DescribeBackupsRequest): Promise<$_model.DescribeBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * 查询binlog文件
   * 
   * @param request - DescribeBinlogFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBinlogFilesResponse
   */
  async describeBinlogFilesWithOptions(request: $_model.DescribeBinlogFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBinlogFilesResponse> {
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
      action: "DescribeBinlogFiles",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBinlogFilesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBinlogFilesResponse({}));
  }

  /**
   * 查询binlog文件
   * 
   * @param request - DescribeBinlogFilesRequest
   * @returns DescribeBinlogFilesResponse
   */
  async describeBinlogFiles(request: $_model.DescribeBinlogFilesRequest): Promise<$_model.DescribeBinlogFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBinlogFilesWithOptions(request, runtime);
  }

  /**
   * 查询字符集名称
   * 
   * @param request - DescribeCharacterSetNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCharacterSetNameResponse
   */
  async describeCharacterSetNameWithOptions(request: $_model.DescribeCharacterSetNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCharacterSetNameResponse> {
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
      action: "DescribeCharacterSetName",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCharacterSetNameResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCharacterSetNameResponse({}));
  }

  /**
   * 查询字符集名称
   * 
   * @param request - DescribeCharacterSetNameRequest
   * @returns DescribeCharacterSetNameResponse
   */
  async describeCharacterSetName(request: $_model.DescribeCharacterSetNameRequest): Promise<$_model.DescribeCharacterSetNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCharacterSetNameWithOptions(request, runtime);
  }

  /**
   * 查询规格详情
   * 
   * @param request - DescribeClassDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClassDetailsResponse
   */
  async describeClassDetailsWithOptions(request: $_model.DescribeClassDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClassDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.classCode)) {
      query["ClassCode"] = request.classCode;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
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
      action: "DescribeClassDetails",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClassDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClassDetailsResponse({}));
  }

  /**
   * 查询规格详情
   * 
   * @param request - DescribeClassDetailsRequest
   * @returns DescribeClassDetailsResponse
   */
  async describeClassDetails(request: $_model.DescribeClassDetailsRequest): Promise<$_model.DescribeClassDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClassDetailsWithOptions(request, runtime);
  }

  /**
   * 查询迁移上云检查任务
   * 
   * @param request - DescribeCloudMigrationPrecheckResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudMigrationPrecheckResultResponse
   */
  async describeCloudMigrationPrecheckResultWithOptions(request: $_model.DescribeCloudMigrationPrecheckResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudMigrationPrecheckResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
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

    if (!$dara.isNull(request.sourceIpAddress)) {
      query["SourceIpAddress"] = request.sourceIpAddress;
    }

    if (!$dara.isNull(request.sourcePort)) {
      query["SourcePort"] = request.sourcePort;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudMigrationPrecheckResult",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudMigrationPrecheckResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudMigrationPrecheckResultResponse({}));
  }

  /**
   * 查询迁移上云检查任务
   * 
   * @param request - DescribeCloudMigrationPrecheckResultRequest
   * @returns DescribeCloudMigrationPrecheckResultResponse
   */
  async describeCloudMigrationPrecheckResult(request: $_model.DescribeCloudMigrationPrecheckResultRequest): Promise<$_model.DescribeCloudMigrationPrecheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudMigrationPrecheckResultWithOptions(request, runtime);
  }

  /**
   * 查询迁移上云任务
   * 
   * @param request - DescribeCloudMigrationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudMigrationResultResponse
   */
  async describeCloudMigrationResultWithOptions(request: $_model.DescribeCloudMigrationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudMigrationResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
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

    if (!$dara.isNull(request.sourceIpAddress)) {
      query["SourceIpAddress"] = request.sourceIpAddress;
    }

    if (!$dara.isNull(request.sourcePort)) {
      query["SourcePort"] = request.sourcePort;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudMigrationResult",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudMigrationResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudMigrationResultResponse({}));
  }

  /**
   * 查询迁移上云任务
   * 
   * @param request - DescribeCloudMigrationResultRequest
   * @returns DescribeCloudMigrationResultResponse
   */
  async describeCloudMigrationResult(request: $_model.DescribeCloudMigrationResultRequest): Promise<$_model.DescribeCloudMigrationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudMigrationResultWithOptions(request, runtime);
  }

  /**
   * 查询排序条目时区
   * 
   * @param request - DescribeCollationTimeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCollationTimeZonesResponse
   */
  async describeCollationTimeZonesWithOptions(request: $_model.DescribeCollationTimeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCollationTimeZonesResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeCollationTimeZones",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCollationTimeZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCollationTimeZonesResponse({}));
  }

  /**
   * 查询排序条目时区
   * 
   * @param request - DescribeCollationTimeZonesRequest
   * @returns DescribeCollationTimeZonesResponse
   */
  async describeCollationTimeZones(request: $_model.DescribeCollationTimeZonesRequest): Promise<$_model.DescribeCollationTimeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCollationTimeZonesWithOptions(request, runtime);
  }

  /**
   * Queries the settings of assured serverless.
   * 
   * @remarks
   * ### 适用引擎
   * RDS PostgreSQL
   * ### 相关功能文档
   * [承诺型Serverless](https://help.aliyun.com/document_detail/2928780.html)
   * 
   * @param request - DescribeComputeBurstConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComputeBurstConfigResponse
   */
  async describeComputeBurstConfigWithOptions(request: $_model.DescribeComputeBurstConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeComputeBurstConfigResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComputeBurstConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeComputeBurstConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeComputeBurstConfigResponse({}));
  }

  /**
   * Queries the settings of assured serverless.
   * 
   * @remarks
   * ### 适用引擎
   * RDS PostgreSQL
   * ### 相关功能文档
   * [承诺型Serverless](https://help.aliyun.com/document_detail/2928780.html)
   * 
   * @param request - DescribeComputeBurstConfigRequest
   * @returns DescribeComputeBurstConfigResponse
   */
  async describeComputeBurstConfig(request: $_model.DescribeComputeBurstConfigRequest): Promise<$_model.DescribeComputeBurstConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeComputeBurstConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeCrossBackupMetaListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCrossBackupMetaListResponse
   */
  async describeCrossBackupMetaListWithOptions(request: $_model.DescribeCrossBackupMetaListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCrossBackupMetaListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.getDbName)) {
      query["GetDbName"] = request.getDbName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pattern)) {
      query["Pattern"] = request.pattern;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCrossBackupMetaList",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCrossBackupMetaListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCrossBackupMetaListResponse({}));
  }

  /**
   * @param request - DescribeCrossBackupMetaListRequest
   * @returns DescribeCrossBackupMetaListResponse
   */
  async describeCrossBackupMetaList(request: $_model.DescribeCrossBackupMetaListRequest): Promise<$_model.DescribeCrossBackupMetaListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCrossBackupMetaListWithOptions(request, runtime);
  }

  /**
   * 查询所选地域的哪些实例开启了跨地域备份，以及这些实例的跨地域备份设置
   * 
   * @param request - DescribeCrossRegionBackupDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCrossRegionBackupDBInstanceResponse
   */
  async describeCrossRegionBackupDBInstanceWithOptions(request: $_model.DescribeCrossRegionBackupDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCrossRegionBackupDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeCrossRegionBackupDBInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCrossRegionBackupDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCrossRegionBackupDBInstanceResponse({}));
  }

  /**
   * 查询所选地域的哪些实例开启了跨地域备份，以及这些实例的跨地域备份设置
   * 
   * @param request - DescribeCrossRegionBackupDBInstanceRequest
   * @returns DescribeCrossRegionBackupDBInstanceResponse
   */
  async describeCrossRegionBackupDBInstance(request: $_model.DescribeCrossRegionBackupDBInstanceRequest): Promise<$_model.DescribeCrossRegionBackupDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCrossRegionBackupDBInstanceWithOptions(request, runtime);
  }

  /**
   * 查询某RDS实例跨地域数据备份文件列表
   * 
   * @param request - DescribeCrossRegionBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCrossRegionBackupsResponse
   */
  async describeCrossRegionBackupsWithOptions(request: $_model.DescribeCrossRegionBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCrossRegionBackupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.crossBackupId)) {
      query["CrossBackupId"] = request.crossBackupId;
    }

    if (!$dara.isNull(request.crossBackupRegion)) {
      query["CrossBackupRegion"] = request.crossBackupRegion;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCrossRegionBackups",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCrossRegionBackupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCrossRegionBackupsResponse({}));
  }

  /**
   * 查询某RDS实例跨地域数据备份文件列表
   * 
   * @param request - DescribeCrossRegionBackupsRequest
   * @returns DescribeCrossRegionBackupsResponse
   */
  async describeCrossRegionBackups(request: $_model.DescribeCrossRegionBackupsRequest): Promise<$_model.DescribeCrossRegionBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCrossRegionBackupsWithOptions(request, runtime);
  }

  /**
   * 查询跨地域日志备份文件列表
   * 
   * @param request - DescribeCrossRegionLogBackupFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCrossRegionLogBackupFilesResponse
   */
  async describeCrossRegionLogBackupFilesWithOptions(request: $_model.DescribeCrossRegionLogBackupFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCrossRegionLogBackupFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossBackupRegion)) {
      query["CrossBackupRegion"] = request.crossBackupRegion;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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
      action: "DescribeCrossRegionLogBackupFiles",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCrossRegionLogBackupFilesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCrossRegionLogBackupFilesResponse({}));
  }

  /**
   * 查询跨地域日志备份文件列表
   * 
   * @param request - DescribeCrossRegionLogBackupFilesRequest
   * @returns DescribeCrossRegionLogBackupFilesResponse
   */
  async describeCrossRegionLogBackupFiles(request: $_model.DescribeCrossRegionLogBackupFilesRequest): Promise<$_model.DescribeCrossRegionLogBackupFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCrossRegionLogBackupFilesWithOptions(request, runtime);
  }

  /**
   * Query the latest upgrade/downgrade order of an instance
   * 
   * @param request - DescribeCurrentModifyOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCurrentModifyOrderResponse
   */
  async describeCurrentModifyOrderWithOptions(request: $_model.DescribeCurrentModifyOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCurrentModifyOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
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
      action: "DescribeCurrentModifyOrder",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCurrentModifyOrderResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCurrentModifyOrderResponse({}));
  }

  /**
   * Query the latest upgrade/downgrade order of an instance
   * 
   * @param request - DescribeCurrentModifyOrderRequest
   * @returns DescribeCurrentModifyOrderResponse
   */
  async describeCurrentModifyOrder(request: $_model.DescribeCurrentModifyOrderRequest): Promise<$_model.DescribeCurrentModifyOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCurrentModifyOrderWithOptions(request, runtime);
  }

  /**
   * Query instance resource usage
   * 
   * @param request - DescribeCustinsResourceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustinsResourceInfoResponse
   */
  async describeCustinsResourceInfoWithOptions(request: $_model.DescribeCustinsResourceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustinsResourceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceIds)) {
      query["DBInstanceIds"] = request.DBInstanceIds;
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
      action: "DescribeCustinsResourceInfo",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustinsResourceInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustinsResourceInfoResponse({}));
  }

  /**
   * Query instance resource usage
   * 
   * @param request - DescribeCustinsResourceInfoRequest
   * @returns DescribeCustinsResourceInfoResponse
   */
  async describeCustinsResourceInfo(request: $_model.DescribeCustinsResourceInfoRequest): Promise<$_model.DescribeCustinsResourceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustinsResourceInfoWithOptions(request, runtime);
  }

  /**
   * This API is used to query the details of an RDS instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
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

    if (!$dara.isNull(request.expired)) {
      query["Expired"] = request.expired;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceAttribute",
      version: "2014-08-15",
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
   * This API is used to query the details of an RDS instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttribute(request: $_model.DescribeDBInstanceAttributeRequest): Promise<$_model.DescribeDBInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 获取实例绑定的标签信息
   * 
   * @param request - DescribeDBInstanceByTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceByTagsResponse
   */
  async describeDBInstanceByTagsWithOptions(request: $_model.DescribeDBInstanceByTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceByTagsResponse> {
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

    if (!$dara.isNull(request.proxyId)) {
      query["proxyId"] = request.proxyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceByTags",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceByTagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceByTagsResponse({}));
  }

  /**
   * 获取实例绑定的标签信息
   * 
   * @param request - DescribeDBInstanceByTagsRequest
   * @returns DescribeDBInstanceByTagsResponse
   */
  async describeDBInstanceByTags(request: $_model.DescribeDBInstanceByTagsRequest): Promise<$_model.DescribeDBInstanceByTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceByTagsWithOptions(request, runtime);
  }

  /**
   * Query the column encryption algorithm configuration information of a specified instance.
   * 
   * @remarks
   * ## Request Description
   * - Before using this API, ensure that you have activated the column encryption service in the DAS Security Center.
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and activate the column encryption service before using it again.
   * 
   * @param request - DescribeDBInstanceCLSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceCLSResponse
   */
  async describeDBInstanceCLSWithOptions(request: $_model.DescribeDBInstanceCLSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceCLSResponse> {
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
      action: "DescribeDBInstanceCLS",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceCLSResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceCLSResponse({}));
  }

  /**
   * Query the column encryption algorithm configuration information of a specified instance.
   * 
   * @remarks
   * ## Request Description
   * - Before using this API, ensure that you have activated the column encryption service in the DAS Security Center.
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and activate the column encryption service before using it again.
   * 
   * @param request - DescribeDBInstanceCLSRequest
   * @returns DescribeDBInstanceCLSResponse
   */
  async describeDBInstanceCLS(request: $_model.DescribeDBInstanceCLSRequest): Promise<$_model.DescribeDBInstanceCLSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceCLSWithOptions(request, runtime);
  }

  /**
   * Obtain instance ingest endpoint diagnosis information
   * 
   * @param request - DescribeDBInstanceConnectivityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceConnectivityResponse
   */
  async describeDBInstanceConnectivityWithOptions(request: $_model.DescribeDBInstanceConnectivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceConnectivityResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceConnectivity",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceConnectivityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceConnectivityResponse({}));
  }

  /**
   * Obtain instance ingest endpoint diagnosis information
   * 
   * @param request - DescribeDBInstanceConnectivityRequest
   * @returns DescribeDBInstanceConnectivityResponse
   */
  async describeDBInstanceConnectivity(request: $_model.DescribeDBInstanceConnectivityRequest): Promise<$_model.DescribeDBInstanceConnectivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceConnectivityWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDBInstanceDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceDetailResponse
   */
  async describeDBInstanceDetailWithOptions(request: $_model.DescribeDBInstanceDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeDBInstanceDetail",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceDetailResponse({}));
  }

  /**
   * @param request - DescribeDBInstanceDetailRequest
   * @returns DescribeDBInstanceDetailResponse
   */
  async describeDBInstanceDetail(request: $_model.DescribeDBInstanceDetailRequest): Promise<$_model.DescribeDBInstanceDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceDetailWithOptions(request, runtime);
  }

  /**
   * 查询RDS实例是否开启了云盘加密，以及密钥详情
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

    if (!$dara.isNull(request.targetRegionId)) {
      query["TargetRegionId"] = request.targetRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceEncryptionKey",
      version: "2014-08-15",
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
   * 查询RDS实例是否开启了云盘加密，以及密钥详情
   * 
   * @param request - DescribeDBInstanceEncryptionKeyRequest
   * @returns DescribeDBInstanceEncryptionKeyResponse
   */
  async describeDBInstanceEncryptionKey(request: $_model.DescribeDBInstanceEncryptionKeyRequest): Promise<$_model.DescribeDBInstanceEncryptionKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceEncryptionKeyWithOptions(request, runtime);
  }

  /**
   * 查询实例的Endpoint
   * 
   * @param request - DescribeDBInstanceEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceEndpointsResponse
   */
  async describeDBInstanceEndpointsWithOptions(request: $_model.DescribeDBInstanceEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceEndpointId)) {
      query["DBInstanceEndpointId"] = request.DBInstanceEndpointId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceEndpoints",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceEndpointsResponse({}));
  }

  /**
   * 查询实例的Endpoint
   * 
   * @param request - DescribeDBInstanceEndpointsRequest
   * @returns DescribeDBInstanceEndpointsResponse
   */
  async describeDBInstanceEndpoints(request: $_model.DescribeDBInstanceEndpointsRequest): Promise<$_model.DescribeDBInstanceEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceEndpointsWithOptions(request, runtime);
  }

  /**
   * 查询RDS实例高可用模式和数据复制方式
   * 
   * @param request - DescribeDBInstanceHAConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceHAConfigResponse
   */
  async describeDBInstanceHAConfigWithOptions(request: $_model.DescribeDBInstanceHAConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceHAConfigResponse> {
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
      action: "DescribeDBInstanceHAConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceHAConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceHAConfigResponse({}));
  }

  /**
   * 查询RDS实例高可用模式和数据复制方式
   * 
   * @param request - DescribeDBInstanceHAConfigRequest
   * @returns DescribeDBInstanceHAConfigResponse
   */
  async describeDBInstanceHAConfig(request: $_model.DescribeDBInstanceHAConfigRequest): Promise<$_model.DescribeDBInstanceHAConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceHAConfigWithOptions(request, runtime);
  }

  /**
   * 查询RDS实例IP白名单
   * 
   * @param request - DescribeDBInstanceIPArrayListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceIPArrayListResponse
   */
  async describeDBInstanceIPArrayListWithOptions(request: $_model.DescribeDBInstanceIPArrayListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceIPArrayListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.whitelistNetworkType)) {
      query["WhitelistNetworkType"] = request.whitelistNetworkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceIPArrayList",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceIPArrayListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceIPArrayListResponse({}));
  }

  /**
   * 查询RDS实例IP白名单
   * 
   * @param request - DescribeDBInstanceIPArrayListRequest
   * @returns DescribeDBInstanceIPArrayListResponse
   */
  async describeDBInstanceIPArrayList(request: $_model.DescribeDBInstanceIPArrayListRequest): Promise<$_model.DescribeDBInstanceIPArrayListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceIPArrayListWithOptions(request, runtime);
  }

  /**
   * 查询RDS实例的底层ECS实例的hostname
   * 
   * @param request - DescribeDBInstanceIpHostnameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceIpHostnameResponse
   */
  async describeDBInstanceIpHostnameWithOptions(request: $_model.DescribeDBInstanceIpHostnameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceIpHostnameResponse> {
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
      action: "DescribeDBInstanceIpHostname",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceIpHostnameResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceIpHostnameResponse({}));
  }

  /**
   * 查询RDS实例的底层ECS实例的hostname
   * 
   * @param request - DescribeDBInstanceIpHostnameRequest
   * @returns DescribeDBInstanceIpHostnameResponse
   */
  async describeDBInstanceIpHostname(request: $_model.DescribeDBInstanceIpHostnameRequest): Promise<$_model.DescribeDBInstanceIpHostnameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceIpHostnameWithOptions(request, runtime);
  }

  /**
   * 查询RDS PostgreSQL实例已开启展示的增强指标
   * 
   * @param request - DescribeDBInstanceMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceMetricsResponse
   */
  async describeDBInstanceMetricsWithOptions(request: $_model.DescribeDBInstanceMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceMetricsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceMetrics",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceMetricsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceMetricsResponse({}));
  }

  /**
   * 查询RDS PostgreSQL实例已开启展示的增强指标
   * 
   * @param request - DescribeDBInstanceMetricsRequest
   * @returns DescribeDBInstanceMetricsResponse
   */
  async describeDBInstanceMetrics(request: $_model.DescribeDBInstanceMetricsRequest): Promise<$_model.DescribeDBInstanceMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceMetricsWithOptions(request, runtime);
  }

  /**
   * 查询监控频率
   * 
   * @param request - DescribeDBInstanceMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceMonitorResponse
   */
  async describeDBInstanceMonitorWithOptions(request: $_model.DescribeDBInstanceMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceMonitorResponse> {
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
      action: "DescribeDBInstanceMonitor",
      version: "2014-08-15",
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
   * 查询监控频率
   * 
   * @param request - DescribeDBInstanceMonitorRequest
   * @returns DescribeDBInstanceMonitorResponse
   */
  async describeDBInstanceMonitor(request: $_model.DescribeDBInstanceMonitorRequest): Promise<$_model.DescribeDBInstanceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceMonitorWithOptions(request, runtime);
  }

  /**
   * 查询实例的所有连接地址信息
   * 
   * @param request - DescribeDBInstanceNetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceNetInfoResponse
   */
  async describeDBInstanceNetInfoWithOptions(request: $_model.DescribeDBInstanceNetInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceNetInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceNetRWSplitType)) {
      query["DBInstanceNetRWSplitType"] = request.DBInstanceNetRWSplitType;
    }

    if (!$dara.isNull(request.flag)) {
      query["Flag"] = request.flag;
    }

    if (!$dara.isNull(request.generalGroupName)) {
      query["GeneralGroupName"] = request.generalGroupName;
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
      action: "DescribeDBInstanceNetInfo",
      version: "2014-08-15",
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
   * 查询实例的所有连接地址信息
   * 
   * @param request - DescribeDBInstanceNetInfoRequest
   * @returns DescribeDBInstanceNetInfoResponse
   */
  async describeDBInstanceNetInfo(request: $_model.DescribeDBInstanceNetInfoRequest): Promise<$_model.DescribeDBInstanceNetInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceNetInfoWithOptions(request, runtime);
  }

  /**
   * 查询内部实例网络信息
   * 
   * @param request - DescribeDBInstanceNetInfoForChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceNetInfoForChannelResponse
   */
  async describeDBInstanceNetInfoForChannelWithOptions(request: $_model.DescribeDBInstanceNetInfoForChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceNetInfoForChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceNetRWSplitType)) {
      query["DBInstanceNetRWSplitType"] = request.DBInstanceNetRWSplitType;
    }

    if (!$dara.isNull(request.flag)) {
      query["Flag"] = request.flag;
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
      action: "DescribeDBInstanceNetInfoForChannel",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceNetInfoForChannelResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceNetInfoForChannelResponse({}));
  }

  /**
   * 查询内部实例网络信息
   * 
   * @param request - DescribeDBInstanceNetInfoForChannelRequest
   * @returns DescribeDBInstanceNetInfoForChannelResponse
   */
  async describeDBInstanceNetInfoForChannel(request: $_model.DescribeDBInstanceNetInfoForChannelRequest): Promise<$_model.DescribeDBInstanceNetInfoForChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceNetInfoForChannelWithOptions(request, runtime);
  }

  /**
   * 查询实例性能数据
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

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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
      action: "DescribeDBInstancePerformance",
      version: "2014-08-15",
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
   * 查询实例性能数据
   * 
   * @param request - DescribeDBInstancePerformanceRequest
   * @returns DescribeDBInstancePerformanceResponse
   */
  async describeDBInstancePerformance(request: $_model.DescribeDBInstancePerformanceRequest): Promise<$_model.DescribeDBInstancePerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancePerformanceWithOptions(request, runtime);
  }

  /**
   * 查询数据库实例提升状态操作
   * 
   * @deprecated OpenAPI DescribeDBInstancePromoteActivity is deprecated
   * 
   * @param request - DescribeDBInstancePromoteActivityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancePromoteActivityResponse
   */
  async describeDBInstancePromoteActivityWithOptions(request: $_model.DescribeDBInstancePromoteActivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancePromoteActivityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.dbInstanceName)) {
      query["DbInstanceName"] = request.dbInstanceName;
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
      action: "DescribeDBInstancePromoteActivity",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstancePromoteActivityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstancePromoteActivityResponse({}));
  }

  /**
   * 查询数据库实例提升状态操作
   * 
   * @deprecated OpenAPI DescribeDBInstancePromoteActivity is deprecated
   * 
   * @param request - DescribeDBInstancePromoteActivityRequest
   * @returns DescribeDBInstancePromoteActivityResponse
   */
  // Deprecated
  async describeDBInstancePromoteActivity(request: $_model.DescribeDBInstancePromoteActivityRequest): Promise<$_model.DescribeDBInstancePromoteActivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancePromoteActivityWithOptions(request, runtime);
  }

  /**
   * 查询数据库实例代理配置
   * 
   * @param request - DescribeDBInstanceProxyConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceProxyConfigurationResponse
   */
  async describeDBInstanceProxyConfigurationWithOptions(request: $_model.DescribeDBInstanceProxyConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceProxyConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeDBInstanceProxyConfiguration",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceProxyConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceProxyConfigurationResponse({}));
  }

  /**
   * 查询数据库实例代理配置
   * 
   * @param request - DescribeDBInstanceProxyConfigurationRequest
   * @returns DescribeDBInstanceProxyConfigurationResponse
   */
  async describeDBInstanceProxyConfiguration(request: $_model.DescribeDBInstanceProxyConfigurationRequest): Promise<$_model.DescribeDBInstanceProxyConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceProxyConfigurationWithOptions(request, runtime);
  }

  /**
   * This API is used to query the status and configuration of a native replication instance.
   * 
   * @remarks
   * ### Applicable Engine
   * RDS MySQL
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the Function Documentation to ensure you fully understand the prerequisites for using the API and the Impact of its use before performing any operation.
   * 
   * @param request - DescribeDBInstanceReplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceReplicationResponse
   */
  async describeDBInstanceReplicationWithOptions(request: $_model.DescribeDBInstanceReplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceReplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeDBInstanceReplication",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceReplicationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceReplicationResponse({}));
  }

  /**
   * This API is used to query the status and configuration of a native replication instance.
   * 
   * @remarks
   * ### Applicable Engine
   * RDS MySQL
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the Function Documentation to ensure you fully understand the prerequisites for using the API and the Impact of its use before performing any operation.
   * 
   * @param request - DescribeDBInstanceReplicationRequest
   * @returns DescribeDBInstanceReplicationResponse
   */
  async describeDBInstanceReplication(request: $_model.DescribeDBInstanceReplicationRequest): Promise<$_model.DescribeDBInstanceReplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceReplicationWithOptions(request, runtime);
  }

  /**
   * 查询RDS实例的SSL配置
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
      version: "2014-08-15",
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
   * 查询RDS实例的SSL配置
   * 
   * @param request - DescribeDBInstanceSSLRequest
   * @returns DescribeDBInstanceSSLResponse
   */
  async describeDBInstanceSSL(request: $_model.DescribeDBInstanceSSLRequest): Promise<$_model.DescribeDBInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceSSLWithOptions(request, runtime);
  }

  /**
   * 描述实例主机安全组规则
   * 
   * @param request - DescribeDBInstanceSecurityGroupRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceSecurityGroupRuleResponse
   */
  async describeDBInstanceSecurityGroupRuleWithOptions(request: $_model.DescribeDBInstanceSecurityGroupRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceSecurityGroupRuleResponse> {
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
      action: "DescribeDBInstanceSecurityGroupRule",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceSecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceSecurityGroupRuleResponse({}));
  }

  /**
   * 描述实例主机安全组规则
   * 
   * @param request - DescribeDBInstanceSecurityGroupRuleRequest
   * @returns DescribeDBInstanceSecurityGroupRuleResponse
   */
  async describeDBInstanceSecurityGroupRule(request: $_model.DescribeDBInstanceSecurityGroupRuleRequest): Promise<$_model.DescribeDBInstanceSecurityGroupRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceSecurityGroupRuleWithOptions(request, runtime);
  }

  /**
   * 查询RDS实例的TDE配置信息
   * 
   * @param request - DescribeDBInstanceTDERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceTDEResponse
   */
  async describeDBInstanceTDEWithOptions(request: $_model.DescribeDBInstanceTDERequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceTDEResponse> {
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
      action: "DescribeDBInstanceTDE",
      version: "2014-08-15",
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
   * 查询RDS实例的TDE配置信息
   * 
   * @param request - DescribeDBInstanceTDERequest
   * @returns DescribeDBInstanceTDEResponse
   */
  async describeDBInstanceTDE(request: $_model.DescribeDBInstanceTDERequest): Promise<$_model.DescribeDBInstanceTDEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceTDEWithOptions(request, runtime);
  }

  /**
   * This API is used to query the list of RDS instances.
   * 
   * @remarks
   * ### Supported Engines  
   * - RDS MySQL  
   * - RDS PostgreSQL  
   * - RDS SQL Server  
   * - RDS MariaDB
   * 
   * @param request - DescribeDBInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstancesWithOptions(request: $_model.DescribeDBInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionMode)) {
      query["ConnectionMode"] = request.connectionMode;
    }

    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
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

    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!$dara.isNull(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.expired)) {
      query["Expired"] = request.expired;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceLevel)) {
      query["InstanceLevel"] = request.instanceLevel;
    }

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.queryAutoRenewal)) {
      query["QueryAutoRenewal"] = request.queryAutoRenewal;
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
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

    if (!$dara.isNull(request.proxyId)) {
      query["proxyId"] = request.proxyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstances",
      version: "2014-08-15",
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
   * This API is used to query the list of RDS instances.
   * 
   * @remarks
   * ### Supported Engines  
   * - RDS MySQL  
   * - RDS PostgreSQL  
   * - RDS SQL Server  
   * - RDS MariaDB
   * 
   * @param request - DescribeDBInstancesRequest
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstances(request: $_model.DescribeDBInstancesRequest): Promise<$_model.DescribeDBInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  /**
   * 以CSV的方式查询实例列表
   * 
   * @deprecated OpenAPI DescribeDBInstancesAsCsv is deprecated, please use Rds::2014-08-15::DescribeDBInstances instead.
   * 
   * @param request - DescribeDBInstancesAsCsvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesAsCsvResponse
   */
  async describeDBInstancesAsCsvWithOptions(request: $_model.DescribeDBInstancesAsCsvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesAsCsvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cachedAsync)) {
      query["CachedAsync"] = request.cachedAsync;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.exportKey)) {
      query["ExportKey"] = request.exportKey;
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
      action: "DescribeDBInstancesAsCsv",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstancesAsCsvResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstancesAsCsvResponse({}));
  }

  /**
   * 以CSV的方式查询实例列表
   * 
   * @deprecated OpenAPI DescribeDBInstancesAsCsv is deprecated, please use Rds::2014-08-15::DescribeDBInstances instead.
   * 
   * @param request - DescribeDBInstancesAsCsvRequest
   * @returns DescribeDBInstancesAsCsvResponse
   */
  // Deprecated
  async describeDBInstancesAsCsv(request: $_model.DescribeDBInstancesAsCsvRequest): Promise<$_model.DescribeDBInstancesAsCsvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancesAsCsvWithOptions(request, runtime);
  }

  /**
   * 查询到期数据库实例
   * 
   * @param request - DescribeDBInstancesByExpireTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesByExpireTimeResponse
   */
  async describeDBInstancesByExpireTimeWithOptions(request: $_model.DescribeDBInstancesByExpireTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesByExpireTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expirePeriod)) {
      query["ExpirePeriod"] = request.expirePeriod;
    }

    if (!$dara.isNull(request.expired)) {
      query["Expired"] = request.expired;
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.proxyId)) {
      query["proxyId"] = request.proxyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstancesByExpireTime",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstancesByExpireTimeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstancesByExpireTimeResponse({}));
  }

  /**
   * 查询到期数据库实例
   * 
   * @param request - DescribeDBInstancesByExpireTimeRequest
   * @returns DescribeDBInstancesByExpireTimeResponse
   */
  async describeDBInstancesByExpireTime(request: $_model.DescribeDBInstancesByExpireTimeRequest): Promise<$_model.DescribeDBInstancesByExpireTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancesByExpireTimeWithOptions(request, runtime);
  }

  /**
   * 查询数据库实例性能
   * 
   * @param request - DescribeDBInstancesByPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesByPerformanceResponse
   */
  async describeDBInstancesByPerformanceWithOptions(request: $_model.DescribeDBInstancesByPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesByPerformanceResponse> {
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sortKey)) {
      query["SortKey"] = request.sortKey;
    }

    if (!$dara.isNull(request.sortMethod)) {
      query["SortMethod"] = request.sortMethod;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.proxyId)) {
      query["proxyId"] = request.proxyId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstancesByPerformance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstancesByPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstancesByPerformanceResponse({}));
  }

  /**
   * 查询数据库实例性能
   * 
   * @param request - DescribeDBInstancesByPerformanceRequest
   * @returns DescribeDBInstancesByPerformanceResponse
   */
  async describeDBInstancesByPerformance(request: $_model.DescribeDBInstancesByPerformanceRequest): Promise<$_model.DescribeDBInstancesByPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancesByPerformanceWithOptions(request, runtime);
  }

  /**
   * 查询克隆的数据库实例
   * 
   * @deprecated OpenAPI DescribeDBInstancesForClone is deprecated, please use Rds::2014-08-15::DescribeDBInstances instead.
   * 
   * @param request - DescribeDBInstancesForCloneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesForCloneResponse
   */
  async describeDBInstancesForCloneWithOptions(request: $_model.DescribeDBInstancesForCloneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesForCloneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionMode)) {
      query["ConnectionMode"] = request.connectionMode;
    }

    if (!$dara.isNull(request.currentInstanceId)) {
      query["CurrentInstanceId"] = request.currentInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
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

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.expired)) {
      query["Expired"] = request.expired;
    }

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
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

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
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

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.proxyId)) {
      query["proxyId"] = request.proxyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstancesForClone",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstancesForCloneResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstancesForCloneResponse({}));
  }

  /**
   * 查询克隆的数据库实例
   * 
   * @deprecated OpenAPI DescribeDBInstancesForClone is deprecated, please use Rds::2014-08-15::DescribeDBInstances instead.
   * 
   * @param request - DescribeDBInstancesForCloneRequest
   * @returns DescribeDBInstancesForCloneResponse
   */
  // Deprecated
  async describeDBInstancesForClone(request: $_model.DescribeDBInstancesForCloneRequest): Promise<$_model.DescribeDBInstancesForCloneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancesForCloneWithOptions(request, runtime);
  }

  /**
   * 查询数据库实例小版本信息
   * 
   * @param request - DescribeDBMiniEngineVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBMiniEngineVersionsResponse
   */
  async describeDBMiniEngineVersionsWithOptions(request: $_model.DescribeDBMiniEngineVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBMiniEngineVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.minorVersionTag)) {
      query["MinorVersionTag"] = request.minorVersionTag;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBMiniEngineVersions",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBMiniEngineVersionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBMiniEngineVersionsResponse({}));
  }

  /**
   * 查询数据库实例小版本信息
   * 
   * @param request - DescribeDBMiniEngineVersionsRequest
   * @returns DescribeDBMiniEngineVersionsResponse
   */
  async describeDBMiniEngineVersions(request: $_model.DescribeDBMiniEngineVersionsRequest): Promise<$_model.DescribeDBMiniEngineVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBMiniEngineVersionsWithOptions(request, runtime);
  }

  /**
   * This API is used to query the PolarProxy settings of an RDS instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * 
   * @param request - DescribeDBProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBProxyResponse
   */
  async describeDBProxyWithOptions(request: $_model.DescribeDBProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBProxyEngineType)) {
      query["DBProxyEngineType"] = request.DBProxyEngineType;
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
      action: "DescribeDBProxy",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBProxyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBProxyResponse({}));
  }

  /**
   * This API is used to query the PolarProxy settings of an RDS instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * 
   * @param request - DescribeDBProxyRequest
   * @returns DescribeDBProxyResponse
   */
  async describeDBProxy(request: $_model.DescribeDBProxyRequest): Promise<$_model.DescribeDBProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBProxyWithOptions(request, runtime);
  }

  /**
   * 查询RDS实例数据库代理的连接地址信息
   * 
   * @param request - DescribeDBProxyEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBProxyEndpointResponse
   */
  async describeDBProxyEndpointWithOptions(request: $_model.DescribeDBProxyEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBProxyEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBProxyConnectString)) {
      query["DBProxyConnectString"] = request.DBProxyConnectString;
    }

    if (!$dara.isNull(request.DBProxyEndpointId)) {
      query["DBProxyEndpointId"] = request.DBProxyEndpointId;
    }

    if (!$dara.isNull(request.DBProxyEngineType)) {
      query["DBProxyEngineType"] = request.DBProxyEngineType;
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
      action: "DescribeDBProxyEndpoint",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBProxyEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBProxyEndpointResponse({}));
  }

  /**
   * 查询RDS实例数据库代理的连接地址信息
   * 
   * @param request - DescribeDBProxyEndpointRequest
   * @returns DescribeDBProxyEndpointResponse
   */
  async describeDBProxyEndpoint(request: $_model.DescribeDBProxyEndpointRequest): Promise<$_model.DescribeDBProxyEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBProxyEndpointWithOptions(request, runtime);
  }

  /**
   * This API is used to query the performance data of the database proxy for an ApsaraDB RDS instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * > Starting from October 17, 2023, ApsaraDB RDS MySQL Cluster Edition gradually provides one free dedicated database proxy per instance in each edge zone. For more information, see [Offer: One Free Dedicated Database Proxy for RDS MySQL Cluster Edition](https://help.aliyun.com/document_detail/2555466.html).  
   * ### Related Function Documentation  
   * >Notice: Before using this API, carefully read the function documentation to fully understand the prerequisites and potential impacts of using this API before performing any operation.
   * - [View Monitoring Data for RDS MySQL](https://help.aliyun.com/document_detail/194241.html)
   * - [View Monitoring Data for RDS PostgreSQL](https://help.aliyun.com/document_detail/418275.html)
   * 
   * @param request - DescribeDBProxyPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBProxyPerformanceResponse
   */
  async describeDBProxyPerformanceWithOptions(request: $_model.DescribeDBProxyPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBProxyPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBProxyEngineType)) {
      query["DBProxyEngineType"] = request.DBProxyEngineType;
    }

    if (!$dara.isNull(request.DBProxyInstanceType)) {
      query["DBProxyInstanceType"] = request.DBProxyInstanceType;
    }

    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricsName)) {
      query["MetricsName"] = request.metricsName;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBProxyPerformance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBProxyPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBProxyPerformanceResponse({}));
  }

  /**
   * This API is used to query the performance data of the database proxy for an ApsaraDB RDS instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * > Starting from October 17, 2023, ApsaraDB RDS MySQL Cluster Edition gradually provides one free dedicated database proxy per instance in each edge zone. For more information, see [Offer: One Free Dedicated Database Proxy for RDS MySQL Cluster Edition](https://help.aliyun.com/document_detail/2555466.html).  
   * ### Related Function Documentation  
   * >Notice: Before using this API, carefully read the function documentation to fully understand the prerequisites and potential impacts of using this API before performing any operation.
   * - [View Monitoring Data for RDS MySQL](https://help.aliyun.com/document_detail/194241.html)
   * - [View Monitoring Data for RDS PostgreSQL](https://help.aliyun.com/document_detail/418275.html)
   * 
   * @param request - DescribeDBProxyPerformanceRequest
   * @returns DescribeDBProxyPerformanceResponse
   */
  async describeDBProxyPerformance(request: $_model.DescribeDBProxyPerformanceRequest): Promise<$_model.DescribeDBProxyPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBProxyPerformanceWithOptions(request, runtime);
  }

  /**
   * 查询SQLServer的DTC安全主机IP
   * 
   * @param request - DescribeDTCSecurityIpHostsForSQLServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDTCSecurityIpHostsForSQLServerResponse
   */
  async describeDTCSecurityIpHostsForSQLServerWithOptions(request: $_model.DescribeDTCSecurityIpHostsForSQLServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDTCSecurityIpHostsForSQLServerResponse> {
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDTCSecurityIpHostsForSQLServer",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDTCSecurityIpHostsForSQLServerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDTCSecurityIpHostsForSQLServerResponse({}));
  }

  /**
   * 查询SQLServer的DTC安全主机IP
   * 
   * @param request - DescribeDTCSecurityIpHostsForSQLServerRequest
   * @returns DescribeDTCSecurityIpHostsForSQLServerResponse
   */
  async describeDTCSecurityIpHostsForSQLServer(request: $_model.DescribeDTCSecurityIpHostsForSQLServerRequest): Promise<$_model.DescribeDTCSecurityIpHostsForSQLServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDTCSecurityIpHostsForSQLServerWithOptions(request, runtime);
  }

  /**
   * 查询实例中数据库列表
   * 
   * @param request - DescribeDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabasesResponse
   */
  async describeDatabasesWithOptions(request: $_model.DescribeDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatabasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.DBStatus)) {
      query["DBStatus"] = request.DBStatus;
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
      action: "DescribeDatabases",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDatabasesResponse({}));
  }

  /**
   * 查询实例中数据库列表
   * 
   * @param request - DescribeDatabasesRequest
   * @returns DescribeDatabasesResponse
   */
  async describeDatabases(request: $_model.DescribeDatabasesRequest): Promise<$_model.DescribeDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabasesWithOptions(request, runtime);
  }

  /**
   * 查询专用主机组
   * 
   * @param request - DescribeDedicatedHostGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDedicatedHostGroupsResponse
   */
  async describeDedicatedHostGroupsWithOptions(request: $_model.DescribeDedicatedHostGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDedicatedHostGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!$dara.isNull(request.imageCategory)) {
      query["ImageCategory"] = request.imageCategory;
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
      action: "DescribeDedicatedHostGroups",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDedicatedHostGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDedicatedHostGroupsResponse({}));
  }

  /**
   * 查询专用主机组
   * 
   * @param request - DescribeDedicatedHostGroupsRequest
   * @returns DescribeDedicatedHostGroupsResponse
   */
  async describeDedicatedHostGroups(request: $_model.DescribeDedicatedHostGroupsRequest): Promise<$_model.DescribeDedicatedHostGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDedicatedHostGroupsWithOptions(request, runtime);
  }

  /**
   * 查询专属集群内的主机信息
   * 
   * @param request - DescribeDedicatedHostsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDedicatedHostsResponse
   */
  async describeDedicatedHostsWithOptions(request: $_model.DescribeDedicatedHostsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDedicatedHostsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allocationStatus)) {
      query["AllocationStatus"] = request.allocationStatus;
    }

    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!$dara.isNull(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
    }

    if (!$dara.isNull(request.hostStatus)) {
      query["HostStatus"] = request.hostStatus;
    }

    if (!$dara.isNull(request.hostType)) {
      query["HostType"] = request.hostType;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
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
      action: "DescribeDedicatedHosts",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDedicatedHostsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDedicatedHostsResponse({}));
  }

  /**
   * 查询专属集群内的主机信息
   * 
   * @param request - DescribeDedicatedHostsRequest
   * @returns DescribeDedicatedHostsResponse
   */
  async describeDedicatedHosts(request: $_model.DescribeDedicatedHostsRequest): Promise<$_model.DescribeDedicatedHostsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDedicatedHostsWithOptions(request, runtime);
  }

  /**
   * 查询已完成的备份
   * 
   * @param request - DescribeDetachedBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDetachedBackupsResponse
   */
  async describeDetachedBackupsWithOptions(request: $_model.DescribeDetachedBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDetachedBackupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.backupStatus)) {
      query["BackupStatus"] = request.backupStatus;
    }

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

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "DescribeDetachedBackups",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDetachedBackupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDetachedBackupsResponse({}));
  }

  /**
   * 查询已完成的备份
   * 
   * @param request - DescribeDetachedBackupsRequest
   * @returns DescribeDetachedBackupsResponse
   */
  async describeDetachedBackups(request: $_model.DescribeDetachedBackupsRequest): Promise<$_model.DescribeDetachedBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDetachedBackupsWithOptions(request, runtime);
  }

  /**
   * This API queries the error logs of an instance within a specified period.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * 
   * @param request - DescribeErrorLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeErrorLogsResponse
   */
  async describeErrorLogsWithOptions(request: $_model.DescribeErrorLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeErrorLogsResponse> {
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
      action: "DescribeErrorLogs",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeErrorLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeErrorLogsResponse({}));
  }

  /**
   * This API queries the error logs of an instance within a specified period.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * 
   * @param request - DescribeErrorLogsRequest
   * @returns DescribeErrorLogsResponse
   */
  async describeErrorLogs(request: $_model.DescribeErrorLogsRequest): Promise<$_model.DescribeErrorLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeErrorLogsWithOptions(request, runtime);
  }

  /**
   * 查询实例事件
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
      action: "DescribeEvents",
      version: "2014-08-15",
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
   * 查询实例事件
   * 
   * @param request - DescribeEventsRequest
   * @returns DescribeEventsResponse
   */
  async describeEvents(request: $_model.DescribeEventsRequest): Promise<$_model.DescribeEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  /**
   * DescribeGadInstances
   * 
   * @param request - DescribeGadInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGadInstancesResponse
   */
  async describeGadInstancesWithOptions(request: $_model.DescribeGadInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGadInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gadInstanceName)) {
      query["GadInstanceName"] = request.gadInstanceName;
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
      action: "DescribeGadInstances",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGadInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGadInstancesResponse({}));
  }

  /**
   * DescribeGadInstances
   * 
   * @param request - DescribeGadInstancesRequest
   * @returns DescribeGadInstancesResponse
   */
  async describeGadInstances(request: $_model.DescribeGadInstancesRequest): Promise<$_model.DescribeGadInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGadInstancesWithOptions(request, runtime);
  }

  /**
   * 查询RDS实例的可用性检测方式
   * 
   * @param request - DescribeHADiagnoseConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHADiagnoseConfigResponse
   */
  async describeHADiagnoseConfigWithOptions(request: $_model.DescribeHADiagnoseConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHADiagnoseConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeHADiagnoseConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHADiagnoseConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHADiagnoseConfigResponse({}));
  }

  /**
   * 查询RDS实例的可用性检测方式
   * 
   * @param request - DescribeHADiagnoseConfigRequest
   * @returns DescribeHADiagnoseConfigResponse
   */
  async describeHADiagnoseConfig(request: $_model.DescribeHADiagnoseConfigRequest): Promise<$_model.DescribeHADiagnoseConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHADiagnoseConfigWithOptions(request, runtime);
  }

  /**
   * 查询HA切换配置
   * 
   * @param request - DescribeHASwitchConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHASwitchConfigResponse
   */
  async describeHASwitchConfigWithOptions(request: $_model.DescribeHASwitchConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHASwitchConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeHASwitchConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHASwitchConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHASwitchConfigResponse({}));
  }

  /**
   * 查询HA切换配置
   * 
   * @param request - DescribeHASwitchConfigRequest
   * @returns DescribeHASwitchConfigResponse
   */
  async describeHASwitchConfig(request: $_model.DescribeHASwitchConfigRequest): Promise<$_model.DescribeHASwitchConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHASwitchConfigWithOptions(request, runtime);
  }

  /**
   * 事件中心事件列表
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
      version: "2014-08-15",
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
   * 事件中心事件列表
   * 
   * @param request - DescribeHistoryEventsRequest
   * @returns DescribeHistoryEventsResponse
   */
  async describeHistoryEvents(request: $_model.DescribeHistoryEventsRequest): Promise<$_model.DescribeHistoryEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryEventsWithOptions(request, runtime);
  }

  /**
   * 事件中心事件统计
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      version: "2014-08-15",
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
   * 事件中心事件统计
   * 
   * @param request - DescribeHistoryEventsStatRequest
   * @returns DescribeHistoryEventsStatResponse
   */
  async describeHistoryEventsStat(request: $_model.DescribeHistoryEventsStatRequest): Promise<$_model.DescribeHistoryEventsStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryEventsStatWithOptions(request, runtime);
  }

  /**
   * 任务中心任务列表
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
      version: "2014-08-15",
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
   * 任务中心任务列表
   * 
   * @param request - DescribeHistoryTasksRequest
   * @returns DescribeHistoryTasksResponse
   */
  async describeHistoryTasks(request: $_model.DescribeHistoryTasksRequest): Promise<$_model.DescribeHistoryTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryTasksWithOptions(request, runtime);
  }

  /**
   * 任务中心任务统计
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
      version: "2014-08-15",
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
   * 任务中心任务统计
   * 
   * @param request - DescribeHistoryTasksStatRequest
   * @returns DescribeHistoryTasksStatResponse
   */
  async describeHistoryTasksStat(request: $_model.DescribeHistoryTasksStatRequest): Promise<$_model.DescribeHistoryTasksStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryTasksStatWithOptions(request, runtime);
  }

  /**
   * Query the elasticity policy parameters of a host group
   * 
   * @param request - DescribeHostGroupElasticStrategyParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHostGroupElasticStrategyParametersResponse
   */
  async describeHostGroupElasticStrategyParametersWithOptions(request: $_model.DescribeHostGroupElasticStrategyParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHostGroupElasticStrategyParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedHostGroupName)) {
      query["DedicatedHostGroupName"] = request.dedicatedHostGroupName;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHostGroupElasticStrategyParameters",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHostGroupElasticStrategyParametersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHostGroupElasticStrategyParametersResponse({}));
  }

  /**
   * Query the elasticity policy parameters of a host group
   * 
   * @param request - DescribeHostGroupElasticStrategyParametersRequest
   * @returns DescribeHostGroupElasticStrategyParametersResponse
   */
  async describeHostGroupElasticStrategyParameters(request: $_model.DescribeHostGroupElasticStrategyParametersRequest): Promise<$_model.DescribeHostGroupElasticStrategyParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHostGroupElasticStrategyParametersWithOptions(request, runtime);
  }

  /**
   * 查询实例的WebShell信息
   * 
   * @param request - DescribeHostWebShellRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHostWebShellResponse
   */
  async describeHostWebShellWithOptions(request: $_model.DescribeHostWebShellRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHostWebShellResponse> {
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

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionID)) {
      query["RegionID"] = request.regionID;
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
      action: "DescribeHostWebShell",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHostWebShellResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHostWebShellResponse({}));
  }

  /**
   * 查询实例的WebShell信息
   * 
   * @param request - DescribeHostWebShellRequest
   * @returns DescribeHostWebShellResponse
   */
  async describeHostWebShell(request: $_model.DescribeHostWebShellRequest): Promise<$_model.DescribeHostWebShellResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHostWebShellWithOptions(request, runtime);
  }

  /**
   * RDS native replication instance, query data import job details
   * 
   * @remarks
   * Query the details of an import job
   * 
   * @param request - DescribeImportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImportTaskResponse
   */
  async describeImportTaskWithOptions(request: $_model.DescribeImportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImportTask",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImportTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImportTaskResponse({}));
  }

  /**
   * RDS native replication instance, query data import job details
   * 
   * @remarks
   * Query the details of an import job
   * 
   * @param request - DescribeImportTaskRequest
   * @returns DescribeImportTaskResponse
   */
  async describeImportTask(request: $_model.DescribeImportTaskRequest): Promise<$_model.DescribeImportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImportTaskWithOptions(request, runtime);
  }

  /**
   * Queries the details of a precheck for an import job and returns specific precheck items and their results.
   * 
   * @remarks
   * Queries the details of a precheck for an import job.
   * 
   * @param request - DescribeImportTaskValidationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImportTaskValidationResponse
   */
  async describeImportTaskValidationWithOptions(request: $_model.DescribeImportTaskValidationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImportTaskValidationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImportTaskValidation",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImportTaskValidationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImportTaskValidationResponse({}));
  }

  /**
   * Queries the details of a precheck for an import job and returns specific precheck items and their results.
   * 
   * @remarks
   * Queries the details of a precheck for an import job.
   * 
   * @param request - DescribeImportTaskValidationRequest
   * @returns DescribeImportTaskValidationResponse
   */
  async describeImportTaskValidation(request: $_model.DescribeImportTaskValidationRequest): Promise<$_model.DescribeImportTaskValidationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImportTaskValidationWithOptions(request, runtime);
  }

  /**
   * 查询实例自动续费属性
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

    if (!$dara.isNull(request.proxyId)) {
      query["proxyId"] = request.proxyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAutoRenewalAttribute",
      version: "2014-08-15",
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
   * 查询实例自动续费属性
   * 
   * @param request - DescribeInstanceAutoRenewalAttributeRequest
   * @returns DescribeInstanceAutoRenewalAttributeResponse
   */
  async describeInstanceAutoRenewalAttribute(request: $_model.DescribeInstanceAutoRenewalAttributeRequest): Promise<$_model.DescribeInstanceAutoRenewalAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  /**
   * 查询实例跨备份策略
   * 
   * @param request - DescribeInstanceCrossBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceCrossBackupPolicyResponse
   */
  async describeInstanceCrossBackupPolicyWithOptions(request: $_model.DescribeInstanceCrossBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceCrossBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeInstanceCrossBackupPolicy",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceCrossBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceCrossBackupPolicyResponse({}));
  }

  /**
   * 查询实例跨备份策略
   * 
   * @param request - DescribeInstanceCrossBackupPolicyRequest
   * @returns DescribeInstanceCrossBackupPolicyResponse
   */
  async describeInstanceCrossBackupPolicy(request: $_model.DescribeInstanceCrossBackupPolicyRequest): Promise<$_model.DescribeInstanceCrossBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceCrossBackupPolicyWithOptions(request, runtime);
  }

  /**
   * 查询RDS实例的保留关键字，即创建数据库或账号时禁用的关键字
   * 
   * @param request - DescribeInstanceKeywordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceKeywordsResponse
   */
  async describeInstanceKeywordsWithOptions(request: $_model.DescribeInstanceKeywordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceKeywordsResponse> {
    request.validate();
    let query = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceKeywords",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceKeywordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceKeywordsResponse({}));
  }

  /**
   * 查询RDS实例的保留关键字，即创建数据库或账号时禁用的关键字
   * 
   * @param request - DescribeInstanceKeywordsRequest
   * @returns DescribeInstanceKeywordsResponse
   */
  async describeInstanceKeywords(request: $_model.DescribeInstanceKeywordsRequest): Promise<$_model.DescribeInstanceKeywordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceKeywordsWithOptions(request, runtime);
  }

  /**
   * 查询实例关联白名单模板
   * 
   * @param request - DescribeInstanceLinkedWhitelistTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceLinkedWhitelistTemplateResponse
   */
  async describeInstanceLinkedWhitelistTemplateWithOptions(request: $_model.DescribeInstanceLinkedWhitelistTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceLinkedWhitelistTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.insName)) {
      query["InsName"] = request.insName;
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
      action: "DescribeInstanceLinkedWhitelistTemplate",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceLinkedWhitelistTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceLinkedWhitelistTemplateResponse({}));
  }

  /**
   * 查询实例关联白名单模板
   * 
   * @param request - DescribeInstanceLinkedWhitelistTemplateRequest
   * @returns DescribeInstanceLinkedWhitelistTemplateResponse
   */
  async describeInstanceLinkedWhitelistTemplate(request: $_model.DescribeInstanceLinkedWhitelistTemplateRequest): Promise<$_model.DescribeInstanceLinkedWhitelistTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceLinkedWhitelistTemplateWithOptions(request, runtime);
  }

  /**
   * 检测kms资源是否关联rds实例
   * 
   * @param request - DescribeKmsAssociateResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKmsAssociateResourcesResponse
   */
  async describeKmsAssociateResourcesWithOptions(request: $_model.DescribeKmsAssociateResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKmsAssociateResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.kmsResourceId)) {
      query["KmsResourceId"] = request.kmsResourceId;
    }

    if (!$dara.isNull(request.kmsResourceRegionId)) {
      query["KmsResourceRegionId"] = request.kmsResourceRegionId;
    }

    if (!$dara.isNull(request.kmsResourceType)) {
      query["KmsResourceType"] = request.kmsResourceType;
    }

    if (!$dara.isNull(request.kmsResourceUser)) {
      query["KmsResourceUser"] = request.kmsResourceUser;
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
      action: "DescribeKmsAssociateResources",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKmsAssociateResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKmsAssociateResourcesResponse({}));
  }

  /**
   * 检测kms资源是否关联rds实例
   * 
   * @param request - DescribeKmsAssociateResourcesRequest
   * @returns DescribeKmsAssociateResourcesResponse
   */
  async describeKmsAssociateResources(request: $_model.DescribeKmsAssociateResourcesRequest): Promise<$_model.DescribeKmsAssociateResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKmsAssociateResourcesWithOptions(request, runtime);
  }

  /**
   * 查询本地可用恢复时间
   * 
   * @param request - DescribeLocalAvailableRecoveryTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLocalAvailableRecoveryTimeResponse
   */
  async describeLocalAvailableRecoveryTimeWithOptions(request: $_model.DescribeLocalAvailableRecoveryTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLocalAvailableRecoveryTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLocalAvailableRecoveryTime",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLocalAvailableRecoveryTimeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLocalAvailableRecoveryTimeResponse({}));
  }

  /**
   * 查询本地可用恢复时间
   * 
   * @param request - DescribeLocalAvailableRecoveryTimeRequest
   * @returns DescribeLocalAvailableRecoveryTimeResponse
   */
  async describeLocalAvailableRecoveryTime(request: $_model.DescribeLocalAvailableRecoveryTimeRequest): Promise<$_model.DescribeLocalAvailableRecoveryTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLocalAvailableRecoveryTimeWithOptions(request, runtime);
  }

  /**
   * 查询日志备份文件
   * 
   * @param request - DescribeLogBackupFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogBackupFilesResponse
   */
  async describeLogBackupFilesWithOptions(request: $_model.DescribeLogBackupFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogBackupFilesResponse> {
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
      action: "DescribeLogBackupFiles",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogBackupFilesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogBackupFilesResponse({}));
  }

  /**
   * 查询日志备份文件
   * 
   * @param request - DescribeLogBackupFilesRequest
   * @returns DescribeLogBackupFilesResponse
   */
  async describeLogBackupFiles(request: $_model.DescribeLogBackupFilesRequest): Promise<$_model.DescribeLogBackupFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogBackupFilesWithOptions(request, runtime);
  }

  /**
   * Obtain information about instances pending upgrade in the RDS Marketing project
   * 
   * @param request - DescribeMarketingActivityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMarketingActivityResponse
   */
  async describeMarketingActivityWithOptions(request: $_model.DescribeMarketingActivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMarketingActivityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!$dara.isNull(request.upgradeCode)) {
      query["UpgradeCode"] = request.upgradeCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMarketingActivity",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMarketingActivityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMarketingActivityResponse({}));
  }

  /**
   * Obtain information about instances pending upgrade in the RDS Marketing project
   * 
   * @param request - DescribeMarketingActivityRequest
   * @returns DescribeMarketingActivityResponse
   */
  async describeMarketingActivity(request: $_model.DescribeMarketingActivityRequest): Promise<$_model.DescribeMarketingActivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMarketingActivityWithOptions(request, runtime);
  }

  /**
   * Query the list of encryption or desensitization rules for a specified instance.
   * 
   * @remarks
   * ## Request Description  
   * - Before using this API, ensure that you have enabled the column encryption service in the DAS Security Center.  
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and enable the column encryption service before using it again.
   * 
   * @param request - DescribeMaskingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMaskingRulesResponse
   */
  async describeMaskingRulesWithOptions(request: $_model.DescribeMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMaskingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMaskingRules",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMaskingRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMaskingRulesResponse({}));
  }

  /**
   * Query the list of encryption or desensitization rules for a specified instance.
   * 
   * @remarks
   * ## Request Description  
   * - Before using this API, ensure that you have enabled the column encryption service in the DAS Security Center.  
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and enable the column encryption service before using it again.
   * 
   * @param request - DescribeMaskingRulesRequest
   * @returns DescribeMaskingRulesResponse
   */
  async describeMaskingRules(request: $_model.DescribeMaskingRulesRequest): Promise<$_model.DescribeMaskingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMaskingRulesWithOptions(request, runtime);
  }

  /**
   * 查询目标备份集中可恢复的库表信息
   * 
   * @param request - DescribeMetaListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetaListResponse
   */
  async describeMetaListWithOptions(request: $_model.DescribeMetaListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetaListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupSetID)) {
      query["BackupSetID"] = request.backupSetID;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.getDbName)) {
      query["GetDbName"] = request.getDbName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pattern)) {
      query["Pattern"] = request.pattern;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetaList",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetaListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetaListResponse({}));
  }

  /**
   * 查询目标备份集中可恢复的库表信息
   * 
   * @param request - DescribeMetaListRequest
   * @returns DescribeMetaListResponse
   */
  async describeMetaList(request: $_model.DescribeMetaListRequest): Promise<$_model.DescribeMetaListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetaListWithOptions(request, runtime);
  }

  /**
   * 通过迁移任务id查询迁移任务
   * 
   * @param request - DescribeMigrateTaskByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMigrateTaskByIdResponse
   */
  async describeMigrateTaskByIdWithOptions(request: $_model.DescribeMigrateTaskByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrateTaskByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.migrateTaskId)) {
      query["MigrateTaskId"] = request.migrateTaskId;
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
      action: "DescribeMigrateTaskById",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMigrateTaskByIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMigrateTaskByIdResponse({}));
  }

  /**
   * 通过迁移任务id查询迁移任务
   * 
   * @param request - DescribeMigrateTaskByIdRequest
   * @returns DescribeMigrateTaskByIdResponse
   */
  async describeMigrateTaskById(request: $_model.DescribeMigrateTaskByIdRequest): Promise<$_model.DescribeMigrateTaskByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMigrateTaskByIdWithOptions(request, runtime);
  }

  /**
   * 查询迁移任务
   * 
   * @param request - DescribeMigrateTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMigrateTasksResponse
   */
  async describeMigrateTasksWithOptions(request: $_model.DescribeMigrateTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrateTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMigrateTasks",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMigrateTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMigrateTasksResponse({}));
  }

  /**
   * 查询迁移任务
   * 
   * @param request - DescribeMigrateTasksRequest
   * @returns DescribeMigrateTasksResponse
   */
  async describeMigrateTasks(request: $_model.DescribeMigrateTasksRequest): Promise<$_model.DescribeMigrateTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMigrateTasksWithOptions(request, runtime);
  }

  /**
   * 查询PostgreSQL实例Hba配置变更日志
   * 
   * @param request - DescribeModifyPGHbaConfigLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModifyPGHbaConfigLogResponse
   */
  async describeModifyPGHbaConfigLogWithOptions(request: $_model.DescribeModifyPGHbaConfigLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModifyPGHbaConfigLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      action: "DescribeModifyPGHbaConfigLog",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModifyPGHbaConfigLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModifyPGHbaConfigLogResponse({}));
  }

  /**
   * 查询PostgreSQL实例Hba配置变更日志
   * 
   * @param request - DescribeModifyPGHbaConfigLogRequest
   * @returns DescribeModifyPGHbaConfigLogResponse
   */
  async describeModifyPGHbaConfigLog(request: $_model.DescribeModifyPGHbaConfigLogRequest): Promise<$_model.DescribeModifyPGHbaConfigLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModifyPGHbaConfigLogWithOptions(request, runtime);
  }

  /**
   * 查询变更参数模板日志
   * 
   * @param request - DescribeModifyParameterLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModifyParameterLogResponse
   */
  async describeModifyParameterLogWithOptions(request: $_model.DescribeModifyParameterLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModifyParameterLogResponse> {
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
      action: "DescribeModifyParameterLog",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModifyParameterLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModifyParameterLogResponse({}));
  }

  /**
   * 查询变更参数模板日志
   * 
   * @param request - DescribeModifyParameterLogRequest
   * @returns DescribeModifyParameterLogResponse
   */
  async describeModifyParameterLog(request: $_model.DescribeModifyParameterLogRequest): Promise<$_model.DescribeModifyParameterLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModifyParameterLogWithOptions(request, runtime);
  }

  /**
   * 查询OSS下载
   * 
   * @param request - DescribeOssDownloadsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssDownloadsResponse
   */
  async describeOssDownloadsWithOptions(request: $_model.DescribeOssDownloadsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOssDownloadsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.migrateTaskId)) {
      query["MigrateTaskId"] = request.migrateTaskId;
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
      action: "DescribeOssDownloads",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOssDownloadsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOssDownloadsResponse({}));
  }

  /**
   * 查询OSS下载
   * 
   * @param request - DescribeOssDownloadsRequest
   * @returns DescribeOssDownloadsResponse
   */
  async describeOssDownloads(request: $_model.DescribeOssDownloadsRequest): Promise<$_model.DescribeOssDownloadsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssDownloadsWithOptions(request, runtime);
  }

  /**
   * 查询PostgreSQL实例HBA配置
   * 
   * @param request - DescribePGHbaConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePGHbaConfigResponse
   */
  async describePGHbaConfigWithOptions(request: $_model.DescribePGHbaConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePGHbaConfigResponse> {
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
      action: "DescribePGHbaConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePGHbaConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribePGHbaConfigResponse({}));
  }

  /**
   * 查询PostgreSQL实例HBA配置
   * 
   * @param request - DescribePGHbaConfigRequest
   * @returns DescribePGHbaConfigResponse
   */
  async describePGHbaConfig(request: $_model.DescribePGHbaConfigRequest): Promise<$_model.DescribePGHbaConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePGHbaConfigWithOptions(request, runtime);
  }

  /**
   * 查询目标参数模板详情
   * 
   * @param request - DescribeParameterGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterGroupResponse
   */
  async describeParameterGroupWithOptions(request: $_model.DescribeParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterGroupResponse> {
    request.validate();
    let query = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParameterGroup",
      version: "2014-08-15",
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
   * 查询目标参数模板详情
   * 
   * @param request - DescribeParameterGroupRequest
   * @returns DescribeParameterGroupResponse
   */
  async describeParameterGroup(request: $_model.DescribeParameterGroupRequest): Promise<$_model.DescribeParameterGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterGroupWithOptions(request, runtime);
  }

  /**
   * 查看目标地域的参数模板列表
   * 
   * @param request - DescribeParameterGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterGroupsResponse
   */
  async describeParameterGroupsWithOptions(request: $_model.DescribeParameterGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableDetail)) {
      query["EnableDetail"] = request.enableDetail;
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
      action: "DescribeParameterGroups",
      version: "2014-08-15",
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
   * 查看目标地域的参数模板列表
   * 
   * @param request - DescribeParameterGroupsRequest
   * @returns DescribeParameterGroupsResponse
   */
  async describeParameterGroups(request: $_model.DescribeParameterGroupsRequest): Promise<$_model.DescribeParameterGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterGroupsWithOptions(request, runtime);
  }

  /**
   * 查询参数模板列表
   * 
   * @param request - DescribeParameterTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterTemplatesResponse
   */
  async describeParameterTemplatesWithOptions(request: $_model.DescribeParameterTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      action: "DescribeParameterTemplates",
      version: "2014-08-15",
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
   * 查询参数模板列表
   * 
   * @param request - DescribeParameterTemplatesRequest
   * @returns DescribeParameterTemplatesResponse
   */
  async describeParameterTemplates(request: $_model.DescribeParameterTemplatesRequest): Promise<$_model.DescribeParameterTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterTemplatesWithOptions(request, runtime);
  }

  /**
   * Query the details of a scheduled task for modifying instance parameters.
   * 
   * @remarks
   * ### Applicable Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the function documentation to ensure you fully understand the prerequisites for using the API and the impact it may cause after use, and then perform the operation.
   * - [Set Instance Parameters for RDS MySQL](https://help.aliyun.com/document_detail/96063.html)
   * - [Set Instance Parameters for RDS PostgreSQL](https://help.aliyun.com/document_detail/96751.html)
   * 
   * @param request - DescribeParameterTimedScheduleTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterTimedScheduleTaskResponse
   */
  async describeParameterTimedScheduleTaskWithOptions(request: $_model.DescribeParameterTimedScheduleTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterTimedScheduleTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParameterTimedScheduleTask",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParameterTimedScheduleTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParameterTimedScheduleTaskResponse({}));
  }

  /**
   * Query the details of a scheduled task for modifying instance parameters.
   * 
   * @remarks
   * ### Applicable Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the function documentation to ensure you fully understand the prerequisites for using the API and the impact it may cause after use, and then perform the operation.
   * - [Set Instance Parameters for RDS MySQL](https://help.aliyun.com/document_detail/96063.html)
   * - [Set Instance Parameters for RDS PostgreSQL](https://help.aliyun.com/document_detail/96751.html)
   * 
   * @param request - DescribeParameterTimedScheduleTaskRequest
   * @returns DescribeParameterTimedScheduleTaskResponse
   */
  async describeParameterTimedScheduleTask(request: $_model.DescribeParameterTimedScheduleTaskRequest): Promise<$_model.DescribeParameterTimedScheduleTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterTimedScheduleTaskWithOptions(request, runtime);
  }

  /**
   * 查询RDS实例参数
   * 
   * @param request - DescribeParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParametersResponse
   */
  async describeParametersWithOptions(request: $_model.DescribeParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParametersResponse> {
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
      action: "DescribeParameters",
      version: "2014-08-15",
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
   * 查询RDS实例参数
   * 
   * @param request - DescribeParametersRequest
   * @returns DescribeParametersResponse
   */
  async describeParameters(request: $_model.DescribeParametersRequest): Promise<$_model.DescribeParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  /**
   * 获取插件信息
   * 
   * @param request - DescribePostgresExtensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePostgresExtensionsResponse
   */
  async describePostgresExtensionsWithOptions(request: $_model.DescribePostgresExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePostgresExtensionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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
      action: "DescribePostgresExtensions",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePostgresExtensionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePostgresExtensionsResponse({}));
  }

  /**
   * 获取插件信息
   * 
   * @param request - DescribePostgresExtensionsRequest
   * @returns DescribePostgresExtensionsResponse
   */
  async describePostgresExtensions(request: $_model.DescribePostgresExtensionsRequest): Promise<$_model.DescribePostgresExtensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePostgresExtensionsWithOptions(request, runtime);
  }

  /**
   * 查询价格
   * 
   * @param tmpReq - DescribePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePriceResponse
   */
  async describePriceWithOptions(tmpReq: $_model.DescribePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePriceResponse> {
    tmpReq.validate();
    let request = new $_model.DescribePriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.DBNode)) {
      request.DBNodeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBNode, "DBNode", "json");
    }

    if (!$dara.isNull(tmpReq.serverlessConfig)) {
      request.serverlessConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverlessConfig, "ServerlessConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
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

    if (!$dara.isNull(request.DBInstanceStorageType)) {
      query["DBInstanceStorageType"] = request.DBInstanceStorageType;
    }

    if (!$dara.isNull(request.DBNodeShrink)) {
      query["DBNode"] = request.DBNodeShrink;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.instanceUsedType)) {
      query["InstanceUsedType"] = request.instanceUsedType;
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

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
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

    if (!$dara.isNull(request.serverlessConfigShrink)) {
      query["ServerlessConfig"] = request.serverlessConfigShrink;
    }

    if (!$dara.isNull(request.timeType)) {
      query["TimeType"] = request.timeType;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrice",
      version: "2014-08-15",
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
   * 查询价格
   * 
   * @param request - DescribePriceRequest
   * @returns DescribePriceResponse
   */
  async describePrice(request: $_model.DescribePriceRequest): Promise<$_model.DescribePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  /**
   * Query RDS quick sale configuration
   * 
   * @param request - DescribeQuickSaleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQuickSaleConfigResponse
   */
  async describeQuickSaleConfigWithOptions(request: $_model.DescribeQuickSaleConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQuickSaleConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQuickSaleConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQuickSaleConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQuickSaleConfigResponse({}));
  }

  /**
   * Query RDS quick sale configuration
   * 
   * @param request - DescribeQuickSaleConfigRequest
   * @returns DescribeQuickSaleConfigResponse
   */
  async describeQuickSaleConfig(request: $_model.DescribeQuickSaleConfigRequest): Promise<$_model.DescribeQuickSaleConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQuickSaleConfigWithOptions(request, runtime);
  }

  /**
   * 查询可用区的资源库存
   * 
   * @param request - DescribeRCAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCAvailableResourceResponse
   */
  async describeRCAvailableResourceWithOptions(request: $_model.DescribeRCAvailableResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCAvailableResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cores)) {
      query["Cores"] = request.cores;
    }

    if (!$dara.isNull(request.dataDiskCategory)) {
      query["DataDiskCategory"] = request.dataDiskCategory;
    }

    if (!$dara.isNull(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
    }

    if (!$dara.isNull(request.destinationResource)) {
      query["DestinationResource"] = request.destinationResource;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ioOptimized)) {
      query["IoOptimized"] = request.ioOptimized;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.networkCategory)) {
      query["NetworkCategory"] = request.networkCategory;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.spotDuration)) {
      query["SpotDuration"] = request.spotDuration;
    }

    if (!$dara.isNull(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!$dara.isNull(request.systemDiskCategory)) {
      query["SystemDiskCategory"] = request.systemDiskCategory;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCAvailableResource",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCAvailableResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCAvailableResourceResponse({}));
  }

  /**
   * 查询可用区的资源库存
   * 
   * @param request - DescribeRCAvailableResourceRequest
   * @returns DescribeRCAvailableResourceResponse
   */
  async describeRCAvailableResource(request: $_model.DescribeRCAvailableResourceRequest): Promise<$_model.DescribeRCAvailableResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCAvailableResourceWithOptions(request, runtime);
  }

  /**
   * 查询云助手安装状态
   * 
   * @param tmpReq - DescribeRCCloudAssistantStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCCloudAssistantStatusResponse
   */
  async describeRCCloudAssistantStatusWithOptions(tmpReq: $_model.DescribeRCCloudAssistantStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCCloudAssistantStatusResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeRCCloudAssistantStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.OSType)) {
      query["OSType"] = request.OSType;
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
      action: "DescribeRCCloudAssistantStatus",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCCloudAssistantStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCCloudAssistantStatusResponse({}));
  }

  /**
   * 查询云助手安装状态
   * 
   * @param request - DescribeRCCloudAssistantStatusRequest
   * @returns DescribeRCCloudAssistantStatusResponse
   */
  async describeRCCloudAssistantStatus(request: $_model.DescribeRCCloudAssistantStatusRequest): Promise<$_model.DescribeRCCloudAssistantStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCCloudAssistantStatusWithOptions(request, runtime);
  }

  /**
   * Queries the kubeconfig file of a Container Service for Kubernetes (ACK) cluster in which an RDS Custom instance resides.
   * 
   * @param request - DescribeRCClusterConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCClusterConfigResponse
   */
  async describeRCClusterConfigWithOptions(request: $_model.DescribeRCClusterConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCClusterConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.temporaryDurationMinutes)) {
      query["TemporaryDurationMinutes"] = request.temporaryDurationMinutes;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCClusterConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCClusterConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCClusterConfigResponse({}));
  }

  /**
   * Queries the kubeconfig file of a Container Service for Kubernetes (ACK) cluster in which an RDS Custom instance resides.
   * 
   * @param request - DescribeRCClusterConfigRequest
   * @returns DescribeRCClusterConfigResponse
   */
  async describeRCClusterConfig(request: $_model.DescribeRCClusterConfigRequest): Promise<$_model.DescribeRCClusterConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCClusterConfigWithOptions(request, runtime);
  }

  /**
   * Queries the RDS custom nodes in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DescribeRCClusterNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCClusterNodesResponse
   */
  async describeRCClusterNodesWithOptions(request: $_model.DescribeRCClusterNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCClusterNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodePoolId)) {
      query["NodePoolId"] = request.nodePoolId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCClusterNodes",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCClusterNodesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCClusterNodesResponse({}));
  }

  /**
   * Queries the RDS custom nodes in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DescribeRCClusterNodesRequest
   * @returns DescribeRCClusterNodesResponse
   */
  async describeRCClusterNodes(request: $_model.DescribeRCClusterNodesRequest): Promise<$_model.DescribeRCClusterNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCClusterNodesWithOptions(request, runtime);
  }

  /**
   * 查询RDS Custom集群列表
   * 
   * @param request - DescribeRCClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCClustersResponse
   */
  async describeRCClustersWithOptions(request: $_model.DescribeRCClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.profile)) {
      query["Profile"] = request.profile;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCClusters",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCClustersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCClustersResponse({}));
  }

  /**
   * 查询RDS Custom集群列表
   * 
   * @param request - DescribeRCClustersRequest
   * @returns DescribeRCClustersResponse
   */
  async describeRCClusters(request: $_model.DescribeRCClustersRequest): Promise<$_model.DescribeRCClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCClustersWithOptions(request, runtime);
  }

  /**
   * 描述RDS CUSTOM部署集
   * 
   * @param request - DescribeRCDeploymentSetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCDeploymentSetsResponse
   */
  async describeRCDeploymentSetsWithOptions(request: $_model.DescribeRCDeploymentSetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCDeploymentSetsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCDeploymentSets",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCDeploymentSetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCDeploymentSetsResponse({}));
  }

  /**
   * 描述RDS CUSTOM部署集
   * 
   * @param request - DescribeRCDeploymentSetsRequest
   * @returns DescribeRCDeploymentSetsResponse
   */
  async describeRCDeploymentSets(request: $_model.DescribeRCDeploymentSetsRequest): Promise<$_model.DescribeRCDeploymentSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCDeploymentSetsWithOptions(request, runtime);
  }

  /**
   * Invoke the DescribeRCDisks API to view disk information of RDS Custom instances.
   * 
   * @param request - DescribeRCDisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCDisksResponse
   */
  async describeRCDisksWithOptions(request: $_model.DescribeRCDisksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCDisksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCDisks",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCDisksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCDisksResponse({}));
  }

  /**
   * Invoke the DescribeRCDisks API to view disk information of RDS Custom instances.
   * 
   * @param request - DescribeRCDisksRequest
   * @returns DescribeRCDisksResponse
   */
  async describeRCDisks(request: $_model.DescribeRCDisksRequest): Promise<$_model.DescribeRCDisksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCDisksWithOptions(request, runtime);
  }

  /**
   * 查询RDS用户专属主机实例
   * 
   * @param request - DescribeRCElasticScalingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCElasticScalingResponse
   */
  async describeRCElasticScalingWithOptions(request: $_model.DescribeRCElasticScalingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCElasticScalingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.supportCase)) {
      query["SupportCase"] = request.supportCase;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCElasticScaling",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCElasticScalingResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCElasticScalingResponse({}));
  }

  /**
   * 查询RDS用户专属主机实例
   * 
   * @param request - DescribeRCElasticScalingRequest
   * @returns DescribeRCElasticScalingResponse
   */
  async describeRCElasticScaling(request: $_model.DescribeRCElasticScalingRequest): Promise<$_model.DescribeRCElasticScalingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCElasticScalingWithOptions(request, runtime);
  }

  /**
   * Invoke the DescribeRCImageList API and specify parameters such as RegionId to query the list of custom images that can be used to create RDS Custom instances.
   * 
   * @param request - DescribeRCImageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCImageListResponse
   */
  async describeRCImageListWithOptions(request: $_model.DescribeRCImageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCImageListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCImageList",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCImageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCImageListResponse({}));
  }

  /**
   * Invoke the DescribeRCImageList API and specify parameters such as RegionId to query the list of custom images that can be used to create RDS Custom instances.
   * 
   * @param request - DescribeRCImageListRequest
   * @returns DescribeRCImageListResponse
   */
  async describeRCImageList(request: $_model.DescribeRCImageListRequest): Promise<$_model.DescribeRCImageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCImageListWithOptions(request, runtime);
  }

  /**
   * Invoke the DescribeRCInstanceAttribute API to query the details of a single RDS Custom instance.
   * 
   * @param request - DescribeRCInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCInstanceAttributeResponse
   */
  async describeRCInstanceAttributeWithOptions(request: $_model.DescribeRCInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.maxDisksResults)) {
      query["MaxDisksResults"] = request.maxDisksResults;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCInstanceAttribute",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCInstanceAttributeResponse({}));
  }

  /**
   * Invoke the DescribeRCInstanceAttribute API to query the details of a single RDS Custom instance.
   * 
   * @param request - DescribeRCInstanceAttributeRequest
   * @returns DescribeRCInstanceAttributeResponse
   */
  async describeRCInstanceAttribute(request: $_model.DescribeRCInstanceAttributeRequest): Promise<$_model.DescribeRCInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 查询RDS Custom实例被DDos攻击的数量
   * 
   * @param request - DescribeRCInstanceDdosCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCInstanceDdosCountResponse
   */
  async describeRCInstanceDdosCountWithOptions(request: $_model.DescribeRCInstanceDdosCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceDdosCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCInstanceDdosCount",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCInstanceDdosCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCInstanceDdosCountResponse({}));
  }

  /**
   * 查询RDS Custom实例被DDos攻击的数量
   * 
   * @param request - DescribeRCInstanceDdosCountRequest
   * @returns DescribeRCInstanceDdosCountResponse
   */
  async describeRCInstanceDdosCount(request: $_model.DescribeRCInstanceDdosCountRequest): Promise<$_model.DescribeRCInstanceDdosCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCInstanceDdosCountWithOptions(request, runtime);
  }

  /**
   * 查询指定实例系统事件信息
   * 
   * @param request - DescribeRCInstanceHistoryEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCInstanceHistoryEventsResponse
   */
  async describeRCInstanceHistoryEventsWithOptions(request: $_model.DescribeRCInstanceHistoryEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceHistoryEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventCycleStatus)) {
      query["EventCycleStatus"] = request.eventCycleStatus;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.impactLevel)) {
      query["ImpactLevel"] = request.impactLevel;
    }

    if (!$dara.isNull(request.instanceEventCycleStatus)) {
      query["InstanceEventCycleStatus"] = request.instanceEventCycleStatus;
    }

    if (!$dara.isNull(request.instanceEventType)) {
      query["InstanceEventType"] = request.instanceEventType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
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

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.eventPublishTime)) {
      query["EventPublishTime"] = request.eventPublishTime;
    }

    if (!$dara.isNull(request.notBefore)) {
      query["NotBefore"] = request.notBefore;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCInstanceHistoryEvents",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCInstanceHistoryEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCInstanceHistoryEventsResponse({}));
  }

  /**
   * 查询指定实例系统事件信息
   * 
   * @param request - DescribeRCInstanceHistoryEventsRequest
   * @returns DescribeRCInstanceHistoryEventsResponse
   */
  async describeRCInstanceHistoryEvents(request: $_model.DescribeRCInstanceHistoryEventsRequest): Promise<$_model.DescribeRCInstanceHistoryEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCInstanceHistoryEventsWithOptions(request, runtime);
  }

  /**
   * 查询RDS Custom实例的公网IP
   * 
   * @param request - DescribeRCInstanceIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCInstanceIpAddressResponse
   */
  async describeRCInstanceIpAddressWithOptions(request: $_model.DescribeRCInstanceIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceIpAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.ddosStatus)) {
      query["DdosStatus"] = request.ddosStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIp)) {
      query["InstanceIp"] = request.instanceIp;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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
      action: "DescribeRCInstanceIpAddress",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCInstanceIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCInstanceIpAddressResponse({}));
  }

  /**
   * 查询RDS Custom实例的公网IP
   * 
   * @param request - DescribeRCInstanceIpAddressRequest
   * @returns DescribeRCInstanceIpAddressResponse
   */
  async describeRCInstanceIpAddress(request: $_model.DescribeRCInstanceIpAddressRequest): Promise<$_model.DescribeRCInstanceIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCInstanceIpAddressWithOptions(request, runtime);
  }

  /**
   * 查询rds_custom实例规格族列表
   * 
   * @param request - DescribeRCInstanceTypeFamiliesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCInstanceTypeFamiliesResponse
   */
  async describeRCInstanceTypeFamiliesWithOptions(request: $_model.DescribeRCInstanceTypeFamiliesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceTypeFamiliesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCInstanceTypeFamilies",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCInstanceTypeFamiliesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCInstanceTypeFamiliesResponse({}));
  }

  /**
   * 查询rds_custom实例规格族列表
   * 
   * @param request - DescribeRCInstanceTypeFamiliesRequest
   * @returns DescribeRCInstanceTypeFamiliesResponse
   */
  async describeRCInstanceTypeFamilies(request: $_model.DescribeRCInstanceTypeFamiliesRequest): Promise<$_model.DescribeRCInstanceTypeFamiliesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCInstanceTypeFamiliesWithOptions(request, runtime);
  }

  /**
   * 查询RDS Custom规格信息
   * 
   * @param tmpReq - DescribeRCInstanceTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCInstanceTypesResponse
   */
  async describeRCInstanceTypesWithOptions(tmpReq: $_model.DescribeRCInstanceTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceTypesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeRCInstanceTypesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceType)) {
      request.instanceTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceType, "InstanceType", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceTypeShrink)) {
      query["InstanceType"] = request.instanceTypeShrink;
    }

    if (!$dara.isNull(request.instanceTypeFamily)) {
      query["InstanceTypeFamily"] = request.instanceTypeFamily;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCInstanceTypes",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCInstanceTypesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCInstanceTypesResponse({}));
  }

  /**
   * 查询RDS Custom规格信息
   * 
   * @param request - DescribeRCInstanceTypesRequest
   * @returns DescribeRCInstanceTypesResponse
   */
  async describeRCInstanceTypes(request: $_model.DescribeRCInstanceTypesRequest): Promise<$_model.DescribeRCInstanceTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCInstanceTypesWithOptions(request, runtime);
  }

  /**
   * 获取主机vnc地址
   * 
   * @param request - DescribeRCInstanceVncUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCInstanceVncUrlResponse
   */
  async describeRCInstanceVncUrlWithOptions(request: $_model.DescribeRCInstanceVncUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceVncUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCInstanceVncUrl",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCInstanceVncUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCInstanceVncUrlResponse({}));
  }

  /**
   * 获取主机vnc地址
   * 
   * @param request - DescribeRCInstanceVncUrlRequest
   * @returns DescribeRCInstanceVncUrlResponse
   */
  async describeRCInstanceVncUrl(request: $_model.DescribeRCInstanceVncUrlRequest): Promise<$_model.DescribeRCInstanceVncUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCInstanceVncUrlWithOptions(request, runtime);
  }

  /**
   * You can invoke the DescribeRCInstances API to query the list of specified RDS Custom instances. If no instance ID (InstanceId) is specified, the API returns the list of all RDS Custom instances in the destination region.
   * 
   * @param request - DescribeRCInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCInstancesResponse
   */
  async describeRCInstancesWithOptions(request: $_model.DescribeRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.hostIp)) {
      query["HostIp"] = request.hostIp;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
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

    if (!$dara.isNull(request.publicIp)) {
      query["PublicIp"] = request.publicIp;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCInstances",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCInstancesResponse({}));
  }

  /**
   * You can invoke the DescribeRCInstances API to query the list of specified RDS Custom instances. If no instance ID (InstanceId) is specified, the API returns the list of all RDS Custom instances in the destination region.
   * 
   * @param request - DescribeRCInstancesRequest
   * @returns DescribeRCInstancesResponse
   */
  async describeRCInstances(request: $_model.DescribeRCInstancesRequest): Promise<$_model.DescribeRCInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCInstancesWithOptions(request, runtime);
  }

  /**
   * 查询云助手命令执行结果
   * 
   * @param tmpReq - DescribeRCInvocationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCInvocationResultsResponse
   */
  async describeRCInvocationResultsWithOptions(tmpReq: $_model.DescribeRCInvocationResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInvocationResultsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeRCInvocationResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.contentEncoding)) {
      query["ContentEncoding"] = request.contentEncoding;
    }

    if (!$dara.isNull(request.includeHistory)) {
      query["IncludeHistory"] = request.includeHistory;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.invokeRecordStatus)) {
      query["InvokeRecordStatus"] = request.invokeRecordStatus;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCInvocationResults",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCInvocationResultsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCInvocationResultsResponse({}));
  }

  /**
   * 查询云助手命令执行结果
   * 
   * @param request - DescribeRCInvocationResultsRequest
   * @returns DescribeRCInvocationResultsResponse
   */
  async describeRCInvocationResults(request: $_model.DescribeRCInvocationResultsRequest): Promise<$_model.DescribeRCInvocationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCInvocationResultsWithOptions(request, runtime);
  }

  /**
   * This API is used to query the monitoring data of a specified metric for a target RDS Custom instance.
   * 
   * @param request - DescribeRCMetricListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCMetricListResponse
   */
  async describeRCMetricListWithOptions(request: $_model.DescribeRCMetricListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCMetricListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCMetricList",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCMetricListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCMetricListResponse({}));
  }

  /**
   * This API is used to query the monitoring data of a specified metric for a target RDS Custom instance.
   * 
   * @param request - DescribeRCMetricListRequest
   * @returns DescribeRCMetricListResponse
   */
  async describeRCMetricList(request: $_model.DescribeRCMetricListRequest): Promise<$_model.DescribeRCMetricListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCMetricListWithOptions(request, runtime);
  }

  /**
   * DescribeRCNetworkInterfaces
   * 
   * @param request - DescribeRCNetworkInterfacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCNetworkInterfacesResponse
   */
  async describeRCNetworkInterfacesWithOptions(request: $_model.DescribeRCNetworkInterfacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCNetworkInterfacesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCNetworkInterfaces",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCNetworkInterfacesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCNetworkInterfacesResponse({}));
  }

  /**
   * DescribeRCNetworkInterfaces
   * 
   * @param request - DescribeRCNetworkInterfacesRequest
   * @returns DescribeRCNetworkInterfacesResponse
   */
  async describeRCNetworkInterfaces(request: $_model.DescribeRCNetworkInterfacesRequest): Promise<$_model.DescribeRCNetworkInterfacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCNetworkInterfacesWithOptions(request, runtime);
  }

  /**
   * 描述RC模版
   * 
   * @param request - DescribeRCNodePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCNodePoolResponse
   */
  async describeRCNodePoolWithOptions(request: $_model.DescribeRCNodePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCNodePoolResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCNodePool",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCNodePoolResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCNodePoolResponse({}));
  }

  /**
   * 描述RC模版
   * 
   * @param request - DescribeRCNodePoolRequest
   * @returns DescribeRCNodePoolResponse
   */
  async describeRCNodePool(request: $_model.DescribeRCNodePoolRequest): Promise<$_model.DescribeRCNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCNodePoolWithOptions(request, runtime);
  }

  /**
   * 变更实例规格或系统盘类型之前，查询某一可用区下实例规格或系统盘的库存情况
   * 
   * @param tmpReq - DescribeRCResourcesModificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCResourcesModificationResponse
   */
  async describeRCResourcesModificationWithOptions(tmpReq: $_model.DescribeRCResourcesModificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCResourcesModificationResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeRCResourcesModificationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.conditionss)) {
      request.conditionssShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.conditionss, "Conditionss", "json");
    }

    let query = { };
    if (!$dara.isNull(request.conditionssShrink)) {
      query["Conditionss"] = request.conditionssShrink;
    }

    if (!$dara.isNull(request.cores)) {
      query["Cores"] = request.cores;
    }

    if (!$dara.isNull(request.destinationResource)) {
      query["DestinationResource"] = request.destinationResource;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
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
      action: "DescribeRCResourcesModification",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCResourcesModificationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCResourcesModificationResponse({}));
  }

  /**
   * 变更实例规格或系统盘类型之前，查询某一可用区下实例规格或系统盘的库存情况
   * 
   * @param request - DescribeRCResourcesModificationRequest
   * @returns DescribeRCResourcesModificationResponse
   */
  async describeRCResourcesModification(request: $_model.DescribeRCResourcesModificationRequest): Promise<$_model.DescribeRCResourcesModificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCResourcesModificationWithOptions(request, runtime);
  }

  /**
   * Queries the security groups of RDS Custom instances.
   * 
   * @param request - DescribeRCSecurityGroupListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCSecurityGroupListResponse
   */
  async describeRCSecurityGroupListWithOptions(request: $_model.DescribeRCSecurityGroupListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCSecurityGroupListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCSecurityGroupList",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCSecurityGroupListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCSecurityGroupListResponse({}));
  }

  /**
   * Queries the security groups of RDS Custom instances.
   * 
   * @param request - DescribeRCSecurityGroupListRequest
   * @returns DescribeRCSecurityGroupListResponse
   */
  async describeRCSecurityGroupList(request: $_model.DescribeRCSecurityGroupListRequest): Promise<$_model.DescribeRCSecurityGroupListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCSecurityGroupListWithOptions(request, runtime);
  }

  /**
   * 描述RC安全组规则
   * 
   * @param request - DescribeRCSecurityGroupPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCSecurityGroupPermissionResponse
   */
  async describeRCSecurityGroupPermissionWithOptions(request: $_model.DescribeRCSecurityGroupPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCSecurityGroupPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCSecurityGroupPermission",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCSecurityGroupPermissionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCSecurityGroupPermissionResponse({}));
  }

  /**
   * 描述RC安全组规则
   * 
   * @param request - DescribeRCSecurityGroupPermissionRequest
   * @returns DescribeRCSecurityGroupPermissionResponse
   */
  async describeRCSecurityGroupPermission(request: $_model.DescribeRCSecurityGroupPermissionRequest): Promise<$_model.DescribeRCSecurityGroupPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCSecurityGroupPermissionWithOptions(request, runtime);
  }

  /**
   * This API is used to query snapshot list information, such as snapshot status, the remaining time for a snapshot being created to complete, and the number of days automatic snapshots are retained.
   * 
   * @param request - DescribeRCSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCSnapshotsResponse
   */
  async describeRCSnapshotsWithOptions(request: $_model.DescribeRCSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRCSnapshots",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCSnapshotsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCSnapshotsResponse({}));
  }

  /**
   * This API is used to query snapshot list information, such as snapshot status, the remaining time for a snapshot being created to complete, and the number of days automatic snapshots are retained.
   * 
   * @param request - DescribeRCSnapshotsRequest
   * @returns DescribeRCSnapshotsResponse
   */
  async describeRCSnapshots(request: $_model.DescribeRCSnapshotsRequest): Promise<$_model.DescribeRCSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCSnapshotsWithOptions(request, runtime);
  }

  /**
   * 描述vCluster
   * 
   * @param request - DescribeRCVClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRCVClusterResponse
   */
  async describeRCVClusterWithOptions(request: $_model.DescribeRCVClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCVClusterResponse> {
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
      action: "DescribeRCVCluster",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRCVClusterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRCVClusterResponse({}));
  }

  /**
   * 描述vCluster
   * 
   * @param request - DescribeRCVClusterRequest
   * @returns DescribeRCVClusterResponse
   */
  async describeRCVCluster(request: $_model.DescribeRCVClusterRequest): Promise<$_model.DescribeRCVClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRCVClusterWithOptions(request, runtime);
  }

  /**
   * Obtains the notification settings for instance resources. This operation can still be called but is no longer maintained.
   * 
   * @remarks
   * 该接口已停止维护：接口仍可以正常调用，但阿里云不再维护该接口。
   * 
   * @deprecated OpenAPI DescribeRdsResourceSettings is deprecated
   * 
   * @param request - DescribeRdsResourceSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdsResourceSettingsResponse
   */
  async describeRdsResourceSettingsWithOptions(request: $_model.DescribeRdsResourceSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRdsResourceSettingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceNiche)) {
      query["ResourceNiche"] = request.resourceNiche;
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
      action: "DescribeRdsResourceSettings",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRdsResourceSettingsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRdsResourceSettingsResponse({}));
  }

  /**
   * Obtains the notification settings for instance resources. This operation can still be called but is no longer maintained.
   * 
   * @remarks
   * 该接口已停止维护：接口仍可以正常调用，但阿里云不再维护该接口。
   * 
   * @deprecated OpenAPI DescribeRdsResourceSettings is deprecated
   * 
   * @param request - DescribeRdsResourceSettingsRequest
   * @returns DescribeRdsResourceSettingsResponse
   */
  // Deprecated
  async describeRdsResourceSettings(request: $_model.DescribeRdsResourceSettingsRequest): Promise<$_model.DescribeRdsResourceSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdsResourceSettingsWithOptions(request, runtime);
  }

  /**
   * 查询只读实例复制延迟
   * 
   * @param request - DescribeReadDBInstanceDelayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeReadDBInstanceDelayResponse
   */
  async describeReadDBInstanceDelayWithOptions(request: $_model.DescribeReadDBInstanceDelayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeReadDBInstanceDelayResponse> {
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

    if (!$dara.isNull(request.readInstanceId)) {
      query["ReadInstanceId"] = request.readInstanceId;
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
      action: "DescribeReadDBInstanceDelay",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeReadDBInstanceDelayResponse>(await this.callApi(params, req, runtime), new $_model.DescribeReadDBInstanceDelayResponse({}));
  }

  /**
   * 查询只读实例复制延迟
   * 
   * @param request - DescribeReadDBInstanceDelayRequest
   * @returns DescribeReadDBInstanceDelayResponse
   */
  async describeReadDBInstanceDelay(request: $_model.DescribeReadDBInstanceDelayRequest): Promise<$_model.DescribeReadDBInstanceDelayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeReadDBInstanceDelayWithOptions(request, runtime);
  }

  /**
   * 查询日志信息
   * 
   * @param request - DescribeRegionInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionInfosResponse
   */
  async describeRegionInfosWithOptions(request: $_model.DescribeRegionInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      action: "DescribeRegionInfos",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionInfosResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionInfosResponse({}));
  }

  /**
   * 查询日志信息
   * 
   * @param request - DescribeRegionInfosRequest
   * @returns DescribeRegionInfosResponse
   */
  async describeRegionInfos(request: $_model.DescribeRegionInfosRequest): Promise<$_model.DescribeRegionInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionInfosWithOptions(request, runtime);
  }

  /**
   * 查询地域列表
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

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2014-08-15",
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
   * 查询地域列表
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 查询重建实例价格
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

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
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

    if (!$dara.isNull(request.timeType)) {
      query["TimeType"] = request.timeType;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRenewalPrice",
      version: "2014-08-15",
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
   * 查询重建实例价格
   * 
   * @param request - DescribeRenewalPriceRequest
   * @returns DescribeRenewalPriceResponse
   */
  async describeRenewalPrice(request: $_model.DescribeRenewalPriceRequest): Promise<$_model.DescribeRenewalPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRenewalPriceWithOptions(request, runtime);
  }

  /**
   * 查询复制链路操作日志
   * 
   * @param request - DescribeReplicationLinkLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeReplicationLinkLogsResponse
   */
  async describeReplicationLinkLogsWithOptions(request: $_model.DescribeReplicationLinkLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeReplicationLinkLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeReplicationLinkLogs",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeReplicationLinkLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeReplicationLinkLogsResponse({}));
  }

  /**
   * 查询复制链路操作日志
   * 
   * @param request - DescribeReplicationLinkLogsRequest
   * @returns DescribeReplicationLinkLogsResponse
   */
  async describeReplicationLinkLogs(request: $_model.DescribeReplicationLinkLogsRequest): Promise<$_model.DescribeReplicationLinkLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeReplicationLinkLogsWithOptions(request, runtime);
  }

  /**
   * Resource details on the overview page
   * 
   * @param request - DescribeResourceDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceDetailsResponse
   */
  async describeResourceDetailsWithOptions(request: $_model.DescribeResourceDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeResourceDetails",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceDetailsResponse({}));
  }

  /**
   * Resource details on the overview page
   * 
   * @param request - DescribeResourceDetailsRequest
   * @returns DescribeResourceDetailsResponse
   */
  async describeResourceDetails(request: $_model.DescribeResourceDetailsRequest): Promise<$_model.DescribeResourceDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceDetailsWithOptions(request, runtime);
  }

  /**
   * 查询资源使用情况
   * 
   * @param request - DescribeResourceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceUsageResponse
   */
  async describeResourceUsageWithOptions(request: $_model.DescribeResourceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceUsageResponse> {
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
      action: "DescribeResourceUsage",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceUsageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceUsageResponse({}));
  }

  /**
   * 查询资源使用情况
   * 
   * @param request - DescribeResourceUsageRequest
   * @returns DescribeResourceUsageResponse
   */
  async describeResourceUsage(request: $_model.DescribeResourceUsageRequest): Promise<$_model.DescribeResourceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceUsageWithOptions(request, runtime);
  }

  /**
   * 查询RDS实例的SQL洞察（SQL审计）功能是否开启
   * 
   * @param request - DescribeSQLCollectorPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLCollectorPolicyResponse
   */
  async describeSQLCollectorPolicyWithOptions(request: $_model.DescribeSQLCollectorPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLCollectorPolicyResponse> {
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
      action: "DescribeSQLCollectorPolicy",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLCollectorPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLCollectorPolicyResponse({}));
  }

  /**
   * 查询RDS实例的SQL洞察（SQL审计）功能是否开启
   * 
   * @param request - DescribeSQLCollectorPolicyRequest
   * @returns DescribeSQLCollectorPolicyResponse
   */
  async describeSQLCollectorPolicy(request: $_model.DescribeSQLCollectorPolicyRequest): Promise<$_model.DescribeSQLCollectorPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLCollectorPolicyWithOptions(request, runtime);
  }

  /**
   * 查询RDS实例的SQL洞察日志保存时长
   * 
   * @param request - DescribeSQLCollectorRetentionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLCollectorRetentionResponse
   */
  async describeSQLCollectorRetentionWithOptions(request: $_model.DescribeSQLCollectorRetentionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLCollectorRetentionResponse> {
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
      action: "DescribeSQLCollectorRetention",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLCollectorRetentionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLCollectorRetentionResponse({}));
  }

  /**
   * 查询RDS实例的SQL洞察日志保存时长
   * 
   * @param request - DescribeSQLCollectorRetentionRequest
   * @returns DescribeSQLCollectorRetentionResponse
   */
  async describeSQLCollectorRetention(request: $_model.DescribeSQLCollectorRetentionRequest): Promise<$_model.DescribeSQLCollectorRetentionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLCollectorRetentionWithOptions(request, runtime);
  }

  /**
   * 查询SQL日志文件
   * 
   * @param request - DescribeSQLLogFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLLogFilesResponse
   */
  async describeSQLLogFilesWithOptions(request: $_model.DescribeSQLLogFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLLogFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
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
      action: "DescribeSQLLogFiles",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLLogFilesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLLogFilesResponse({}));
  }

  /**
   * 查询SQL日志文件
   * 
   * @param request - DescribeSQLLogFilesRequest
   * @returns DescribeSQLLogFilesResponse
   */
  async describeSQLLogFiles(request: $_model.DescribeSQLLogFilesRequest): Promise<$_model.DescribeSQLLogFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLLogFilesWithOptions(request, runtime);
  }

  /**
   * 查询SQL日志记录
   * 
   * @param request - DescribeSQLLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLLogRecordsResponse
   */
  async describeSQLLogRecordsWithOptions(request: $_model.DescribeSQLLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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

    if (!$dara.isNull(request.SQLId)) {
      query["SQLId"] = request.SQLId;
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
      action: "DescribeSQLLogRecords",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLLogRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLLogRecordsResponse({}));
  }

  /**
   * 查询SQL日志记录
   * 
   * @param request - DescribeSQLLogRecordsRequest
   * @returns DescribeSQLLogRecordsResponse
   */
  async describeSQLLogRecords(request: $_model.DescribeSQLLogRecordsRequest): Promise<$_model.DescribeSQLLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLLogRecordsWithOptions(request, runtime);
  }

  /**
   * 查询SQL日志列表
   * 
   * @param request - DescribeSQLLogReportListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLLogReportListResponse
   */
  async describeSQLLogReportListWithOptions(request: $_model.DescribeSQLLogReportListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLLogReportListResponse> {
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
      action: "DescribeSQLLogReportList",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLLogReportListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLLogReportListResponse({}));
  }

  /**
   * 查询SQL日志列表
   * 
   * @param request - DescribeSQLLogReportListRequest
   * @returns DescribeSQLLogReportListResponse
   */
  async describeSQLLogReportList(request: $_model.DescribeSQLLogReportListRequest): Promise<$_model.DescribeSQLLogReportListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLLogReportListWithOptions(request, runtime);
  }

  /**
   * 查询SQLServer升级版本
   * 
   * @remarks
   * Supported engine:  
   * * SQL Server (supports only 2016 and earlier versions)
   * 
   * @param request - DescribeSQLServerUpgradeVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLServerUpgradeVersionsResponse
   */
  async describeSQLServerUpgradeVersionsWithOptions(request: $_model.DescribeSQLServerUpgradeVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLServerUpgradeVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
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
      action: "DescribeSQLServerUpgradeVersions",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLServerUpgradeVersionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLServerUpgradeVersionsResponse({}));
  }

  /**
   * 查询SQLServer升级版本
   * 
   * @remarks
   * Supported engine:  
   * * SQL Server (supports only 2016 and earlier versions)
   * 
   * @param request - DescribeSQLServerUpgradeVersionsRequest
   * @returns DescribeSQLServerUpgradeVersionsResponse
   */
  async describeSQLServerUpgradeVersions(request: $_model.DescribeSQLServerUpgradeVersionsRequest): Promise<$_model.DescribeSQLServerUpgradeVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLServerUpgradeVersionsWithOptions(request, runtime);
  }

  /**
   * 列举描述Data Api 用户凭证
   * 
   * @param request - DescribeSecretsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecretsResponse
   */
  async describeSecretsWithOptions(request: $_model.DescribeSecretsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecretsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecrets",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecretsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecretsResponse({}));
  }

  /**
   * 列举描述Data Api 用户凭证
   * 
   * @param request - DescribeSecretsRequest
   * @returns DescribeSecretsResponse
   */
  async describeSecrets(request: $_model.DescribeSecretsRequest): Promise<$_model.DescribeSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecretsWithOptions(request, runtime);
  }

  /**
   * Queries ECS security groups to which an instance is added.
   * 
   * @remarks
   * ### 适用引擎
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * ### 相关功能文档
   * >Notice: 使用该接口前，请仔细阅读功能文档，确保完全了解使用接口的前提条件及使用后造成的影响后，再进行操作。
   * - [RDS MySQL设置安全组](https://help.aliyun.com/document_detail/201042.html)
   * - [RDS PostgreSQL设置安全组](https://help.aliyun.com/document_detail/206310.html)
   * - [RDS SQL Server设置安全组](https://help.aliyun.com/document_detail/2392322.html)
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
      version: "2014-08-15",
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
   * Queries ECS security groups to which an instance is added.
   * 
   * @remarks
   * ### 适用引擎
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * ### 相关功能文档
   * >Notice: 使用该接口前，请仔细阅读功能文档，确保完全了解使用接口的前提条件及使用后造成的影响后，再进行操作。
   * - [RDS MySQL设置安全组](https://help.aliyun.com/document_detail/201042.html)
   * - [RDS PostgreSQL设置安全组](https://help.aliyun.com/document_detail/206310.html)
   * - [RDS SQL Server设置安全组](https://help.aliyun.com/document_detail/2392322.html)
   * 
   * @param request - DescribeSecurityGroupConfigurationRequest
   * @returns DescribeSecurityGroupConfigurationResponse
   */
  async describeSecurityGroupConfiguration(request: $_model.DescribeSecurityGroupConfigurationRequest): Promise<$_model.DescribeSecurityGroupConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityGroupConfigurationWithOptions(request, runtime);
  }

  /**
   * 获取实例所有复制槽相关信息
   * 
   * @param request - DescribeSlotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlotsResponse
   */
  async describeSlotsWithOptions(request: $_model.DescribeSlotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlotsResponse> {
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
      action: "DescribeSlots",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlotsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlotsResponse({}));
  }

  /**
   * 获取实例所有复制槽相关信息
   * 
   * @param request - DescribeSlotsRequest
   * @returns DescribeSlotsResponse
   */
  async describeSlots(request: $_model.DescribeSlotsRequest): Promise<$_model.DescribeSlotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlotsWithOptions(request, runtime);
  }

  /**
   * This API is used to view the slow query log details of an instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * ### Notes
   * - The response parameters of this API are updated once per minute.
   * - When you invoke this API to pull data, a certain latency will occur. Please wait patiently for the response.
   * - Starting from September 1, 2024, due to optimization of the SQL templating algorithm, the value of the SQLHash field will change when you call this API. For more information, see [【Notifications】Optimization of the Templating Algorithm for Slow SQL Statements](https://help.aliyun.com/document_detail/2845725.html).
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

    if (!$dara.isNull(request.SQLHASH)) {
      query["SQLHASH"] = request.SQLHASH;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowLogRecords",
      version: "2014-08-15",
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
   * This API is used to view the slow query log details of an instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * ### Notes
   * - The response parameters of this API are updated once per minute.
   * - When you invoke this API to pull data, a certain latency will occur. Please wait patiently for the response.
   * - Starting from September 1, 2024, due to optimization of the SQL templating algorithm, the value of the SQLHash field will change when you call this API. For more information, see [【Notifications】Optimization of the Templating Algorithm for Slow SQL Statements](https://help.aliyun.com/document_detail/2845725.html).
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: $_model.DescribeSlowLogRecordsRequest): Promise<$_model.DescribeSlowLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * 查询慢日志列表
   * 
   * @param request - DescribeSlowLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogsResponse
   */
  async describeSlowLogsWithOptions(request: $_model.DescribeSlowLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogsResponse> {
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

    if (!$dara.isNull(request.sortKey)) {
      query["SortKey"] = request.sortKey;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowLogs",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlowLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlowLogsResponse({}));
  }

  /**
   * 查询慢日志列表
   * 
   * @param request - DescribeSlowLogsRequest
   * @returns DescribeSlowLogsResponse
   */
  async describeSlowLogs(request: $_model.DescribeSlowLogsRequest): Promise<$_model.DescribeSlowLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogsWithOptions(request, runtime);
  }

  /**
   * 查询是否支持在线扩盘
   * 
   * @param request - DescribeSupportOnlineResizeDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSupportOnlineResizeDiskResponse
   */
  async describeSupportOnlineResizeDiskWithOptions(request: $_model.DescribeSupportOnlineResizeDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSupportOnlineResizeDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSupportOnlineResizeDisk",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSupportOnlineResizeDiskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSupportOnlineResizeDiskResponse({}));
  }

  /**
   * 查询是否支持在线扩盘
   * 
   * @param request - DescribeSupportOnlineResizeDiskRequest
   * @returns DescribeSupportOnlineResizeDiskResponse
   */
  async describeSupportOnlineResizeDisk(request: $_model.DescribeSupportOnlineResizeDiskRequest): Promise<$_model.DescribeSupportOnlineResizeDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSupportOnlineResizeDiskWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsResponse
   */
  async describeTagsWithOptions(request: $_model.DescribeTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsResponse> {
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.proxyId)) {
      query["proxyId"] = request.proxyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTags",
      version: "2014-08-15",
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
   * @param request - DescribeTagsRequest
   * @returns DescribeTagsResponse
   */
  async describeTags(request: $_model.DescribeTagsRequest): Promise<$_model.DescribeTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  /**
   * 查询任务列表
   * 
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskAction)) {
      query["TaskAction"] = request.taskAction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTasks",
      version: "2014-08-15",
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
   * 查询任务列表
   * 
   * @param request - DescribeTasksRequest
   * @returns DescribeTasksResponse
   */
  async describeTasks(request: $_model.DescribeTasksRequest): Promise<$_model.DescribeTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  /**
   * Queries the check report for a major engine version upgrade of an ApsaraDB RDS for MySQL instance or ApsaraDB RDS for PostgreSQL instance.
   * 
   * @remarks
   * ### 适用引擎
   * RDS MySQL
   * RDS PostgreSQL
   * ### 相关功能文档
   * >Notice: 使用该接口前，请仔细阅读功能文档，确保完全了解使用接口的前提条件及使用后造成的影响后，再进行操作。
   * - [RDS MySQL大版本升级检查报告](https://help.aliyun.com/document_detail/2794383.html)
   * - [RDS PostgreSQL升级数据库大版本](https://help.aliyun.com/document_detail/203309.html)
   * - [解读RDS PostgreSQL大版本升级检查报告](https://help.aliyun.com/document_detail/218391.html)
   * 
   * @param request - DescribeUpgradeMajorVersionPrecheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUpgradeMajorVersionPrecheckTaskResponse
   */
  async describeUpgradeMajorVersionPrecheckTaskWithOptions(request: $_model.DescribeUpgradeMajorVersionPrecheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUpgradeMajorVersionPrecheckTaskResponse> {
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

    if (!$dara.isNull(request.targetMajorVersion)) {
      query["TargetMajorVersion"] = request.targetMajorVersion;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUpgradeMajorVersionPrecheckTask",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUpgradeMajorVersionPrecheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUpgradeMajorVersionPrecheckTaskResponse({}));
  }

  /**
   * Queries the check report for a major engine version upgrade of an ApsaraDB RDS for MySQL instance or ApsaraDB RDS for PostgreSQL instance.
   * 
   * @remarks
   * ### 适用引擎
   * RDS MySQL
   * RDS PostgreSQL
   * ### 相关功能文档
   * >Notice: 使用该接口前，请仔细阅读功能文档，确保完全了解使用接口的前提条件及使用后造成的影响后，再进行操作。
   * - [RDS MySQL大版本升级检查报告](https://help.aliyun.com/document_detail/2794383.html)
   * - [RDS PostgreSQL升级数据库大版本](https://help.aliyun.com/document_detail/203309.html)
   * - [解读RDS PostgreSQL大版本升级检查报告](https://help.aliyun.com/document_detail/218391.html)
   * 
   * @param request - DescribeUpgradeMajorVersionPrecheckTaskRequest
   * @returns DescribeUpgradeMajorVersionPrecheckTaskResponse
   */
  async describeUpgradeMajorVersionPrecheckTask(request: $_model.DescribeUpgradeMajorVersionPrecheckTaskRequest): Promise<$_model.DescribeUpgradeMajorVersionPrecheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUpgradeMajorVersionPrecheckTaskWithOptions(request, runtime);
  }

  /**
   * This API is used to query the history of major version upgrade jobs for RDS PostgreSQL instances.
   * 
   * @remarks
   * ### Applicable Engine  
   * RDS PostgreSQL
   * 
   * @param request - DescribeUpgradeMajorVersionTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUpgradeMajorVersionTasksResponse
   */
  async describeUpgradeMajorVersionTasksWithOptions(request: $_model.DescribeUpgradeMajorVersionTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUpgradeMajorVersionTasksResponse> {
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

    if (!$dara.isNull(request.targetMajorVersion)) {
      query["TargetMajorVersion"] = request.targetMajorVersion;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUpgradeMajorVersionTasks",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUpgradeMajorVersionTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUpgradeMajorVersionTasksResponse({}));
  }

  /**
   * This API is used to query the history of major version upgrade jobs for RDS PostgreSQL instances.
   * 
   * @remarks
   * ### Applicable Engine  
   * RDS PostgreSQL
   * 
   * @param request - DescribeUpgradeMajorVersionTasksRequest
   * @returns DescribeUpgradeMajorVersionTasksResponse
   */
  async describeUpgradeMajorVersionTasks(request: $_model.DescribeUpgradeMajorVersionTasksRequest): Promise<$_model.DescribeUpgradeMajorVersionTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUpgradeMajorVersionTasksWithOptions(request, runtime);
  }

  /**
   * 查询交换机列表
   * 
   * @param request - DescribeVSwitchListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVSwitchListResponse
   */
  async describeVSwitchListWithOptions(request: $_model.DescribeVSwitchListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVSwitchListResponse> {
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

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVSwitchList",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVSwitchListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVSwitchListResponse({}));
  }

  /**
   * 查询交换机列表
   * 
   * @param request - DescribeVSwitchListRequest
   * @returns DescribeVSwitchListResponse
   */
  async describeVSwitchList(request: $_model.DescribeVSwitchListRequest): Promise<$_model.DescribeVSwitchListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVSwitchListWithOptions(request, runtime);
  }

  /**
   * 查询交换机
   * 
   * @param request - DescribeVSwitchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitchesWithOptions(request: $_model.DescribeVSwitchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVSwitchesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
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
      action: "DescribeVSwitches",
      version: "2014-08-15",
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
   * 查询交换机
   * 
   * @param request - DescribeVSwitchesRequest
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitches(request: $_model.DescribeVSwitchesRequest): Promise<$_model.DescribeVSwitchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  /**
   * 查询VPC列表
   * 
   * @param request - DescribeVpcsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcsResponse
   */
  async describeVpcsWithOptions(request: $_model.DescribeVpcsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcsResponse> {
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

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
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
      action: "DescribeVpcs",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcsResponse({}));
  }

  /**
   * 查询VPC列表
   * 
   * @param request - DescribeVpcsRequest
   * @returns DescribeVpcsResponse
   */
  async describeVpcs(request: $_model.DescribeVpcsRequest): Promise<$_model.DescribeVpcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcsWithOptions(request, runtime);
  }

  /**
   * 查询白名单模板列表
   * 
   * @param request - DescribeWhitelistTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWhitelistTemplateResponse
   */
  async describeWhitelistTemplateWithOptions(request: $_model.DescribeWhitelistTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWhitelistTemplateResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWhitelistTemplate",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWhitelistTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWhitelistTemplateResponse({}));
  }

  /**
   * 查询白名单模板列表
   * 
   * @param request - DescribeWhitelistTemplateRequest
   * @returns DescribeWhitelistTemplateResponse
   */
  async describeWhitelistTemplate(request: $_model.DescribeWhitelistTemplateRequest): Promise<$_model.DescribeWhitelistTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWhitelistTemplateWithOptions(request, runtime);
  }

  /**
   * 查询白名单模板关联实例
   * 
   * @param request - DescribeWhitelistTemplateLinkedInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWhitelistTemplateLinkedInstanceResponse
   */
  async describeWhitelistTemplateLinkedInstanceWithOptions(request: $_model.DescribeWhitelistTemplateLinkedInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWhitelistTemplateLinkedInstanceResponse> {
    request.validate();
    let query = { };
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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWhitelistTemplateLinkedInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWhitelistTemplateLinkedInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWhitelistTemplateLinkedInstanceResponse({}));
  }

  /**
   * 查询白名单模板关联实例
   * 
   * @param request - DescribeWhitelistTemplateLinkedInstanceRequest
   * @returns DescribeWhitelistTemplateLinkedInstanceResponse
   */
  async describeWhitelistTemplateLinkedInstance(request: $_model.DescribeWhitelistTemplateLinkedInstanceRequest): Promise<$_model.DescribeWhitelistTemplateLinkedInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWhitelistTemplateLinkedInstanceWithOptions(request, runtime);
  }

  /**
   * 销毁实例
   * 
   * @param request - DestroyDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DestroyDBInstanceResponse
   */
  async destroyDBInstanceWithOptions(request: $_model.DestroyDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DestroyDBInstanceResponse> {
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
      action: "DestroyDBInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DestroyDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DestroyDBInstanceResponse({}));
  }

  /**
   * 销毁实例
   * 
   * @param request - DestroyDBInstanceRequest
   * @returns DestroyDBInstanceResponse
   */
  async destroyDBInstance(request: $_model.DestroyDBInstanceRequest): Promise<$_model.DestroyDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.destroyDBInstanceWithOptions(request, runtime);
  }

  /**
   * DetachGadInstanceMember
   * 
   * @param request - DetachGadInstanceMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachGadInstanceMemberResponse
   */
  async detachGadInstanceMemberWithOptions(request: $_model.DetachGadInstanceMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachGadInstanceMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gadInstanceName)) {
      query["GadInstanceName"] = request.gadInstanceName;
    }

    if (!$dara.isNull(request.memberInstanceName)) {
      query["MemberInstanceName"] = request.memberInstanceName;
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
      action: "DetachGadInstanceMember",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachGadInstanceMemberResponse>(await this.callApi(params, req, runtime), new $_model.DetachGadInstanceMemberResponse({}));
  }

  /**
   * DetachGadInstanceMember
   * 
   * @param request - DetachGadInstanceMemberRequest
   * @returns DetachGadInstanceMemberResponse
   */
  async detachGadInstanceMember(request: $_model.DetachGadInstanceMemberRequest): Promise<$_model.DetachGadInstanceMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachGadInstanceMemberWithOptions(request, runtime);
  }

  /**
   * 卸载RC云盘
   * 
   * @param request - DetachRCDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachRCDiskResponse
   */
  async detachRCDiskWithOptions(request: $_model.DetachRCDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachRCDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteWithInstance)) {
      query["DeleteWithInstance"] = request.deleteWithInstance;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachRCDisk",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachRCDiskResponse>(await this.callApi(params, req, runtime), new $_model.DetachRCDiskResponse({}));
  }

  /**
   * 卸载RC云盘
   * 
   * @param request - DetachRCDiskRequest
   * @returns DetachRCDiskResponse
   */
  async detachRCDisk(request: $_model.DetachRCDiskRequest): Promise<$_model.DetachRCDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachRCDiskWithOptions(request, runtime);
  }

  /**
   * 接触实例关联白名单模板
   * 
   * @param request - DetachWhitelistTemplateToInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachWhitelistTemplateToInstanceResponse
   */
  async detachWhitelistTemplateToInstanceWithOptions(request: $_model.DetachWhitelistTemplateToInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachWhitelistTemplateToInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.insName)) {
      query["InsName"] = request.insName;
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

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachWhitelistTemplateToInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachWhitelistTemplateToInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DetachWhitelistTemplateToInstanceResponse({}));
  }

  /**
   * 接触实例关联白名单模板
   * 
   * @param request - DetachWhitelistTemplateToInstanceRequest
   * @returns DetachWhitelistTemplateToInstanceResponse
   */
  async detachWhitelistTemplateToInstance(request: $_model.DetachWhitelistTemplateToInstanceRequest): Promise<$_model.DetachWhitelistTemplateToInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachWhitelistTemplateToInstanceWithOptions(request, runtime);
  }

  /**
   * 开启备份加密
   * 
   * @param request - EnableBackupEncryptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableBackupEncryptionResponse
   */
  async enableBackupEncryptionWithOptions(request: $_model.EnableBackupEncryptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableBackupEncryptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableBackupEncryption",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableBackupEncryptionResponse>(await this.callApi(params, req, runtime), new $_model.EnableBackupEncryptionResponse({}));
  }

  /**
   * 开启备份加密
   * 
   * @param request - EnableBackupEncryptionRequest
   * @returns EnableBackupEncryptionResponse
   */
  async enableBackupEncryption(request: $_model.EnableBackupEncryptionRequest): Promise<$_model.EnableBackupEncryptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableBackupEncryptionWithOptions(request, runtime);
  }

  /**
   * Evaluate the available disk space for emergency local disk scale-out and unlock.
   * 
   * @param request - EvaluateLocalExtendDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvaluateLocalExtendDiskResponse
   */
  async evaluateLocalExtendDiskWithOptions(request: $_model.EvaluateLocalExtendDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EvaluateLocalExtendDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
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

    if (!$dara.isNull(request.storage)) {
      query["Storage"] = request.storage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EvaluateLocalExtendDisk",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EvaluateLocalExtendDiskResponse>(await this.callApi(params, req, runtime), new $_model.EvaluateLocalExtendDiskResponse({}));
  }

  /**
   * Evaluate the available disk space for emergency local disk scale-out and unlock.
   * 
   * @param request - EvaluateLocalExtendDiskRequest
   * @returns EvaluateLocalExtendDiskResponse
   */
  async evaluateLocalExtendDisk(request: $_model.EvaluateLocalExtendDiskRequest): Promise<$_model.EvaluateLocalExtendDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.evaluateLocalExtendDiskWithOptions(request, runtime);
  }

  /**
   * 获取实例拓扑
   * 
   * @param request - GetDBInstanceTopologyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDBInstanceTopologyResponse
   */
  async getDBInstanceTopologyWithOptions(request: $_model.GetDBInstanceTopologyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDBInstanceTopologyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDBInstanceTopology",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDBInstanceTopologyResponse>(await this.callApi(params, req, runtime), new $_model.GetDBInstanceTopologyResponse({}));
  }

  /**
   * 获取实例拓扑
   * 
   * @param request - GetDBInstanceTopologyRequest
   * @returns GetDBInstanceTopologyResponse
   */
  async getDBInstanceTopology(request: $_model.GetDBInstanceTopologyRequest): Promise<$_model.GetDBInstanceTopologyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDBInstanceTopologyWithOptions(request, runtime);
  }

  /**
   * 查询RDS实例数据库代理连接地址SSL加密信息
   * 
   * @param request - GetDbProxyInstanceSslRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDbProxyInstanceSslResponse
   */
  async getDbProxyInstanceSslWithOptions(request: $_model.GetDbProxyInstanceSslRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDbProxyInstanceSslResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBProxyEngineType)) {
      query["DBProxyEngineType"] = request.DBProxyEngineType;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDbProxyInstanceSsl",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDbProxyInstanceSslResponse>(await this.callApi(params, req, runtime), new $_model.GetDbProxyInstanceSslResponse({}));
  }

  /**
   * 查询RDS实例数据库代理连接地址SSL加密信息
   * 
   * @param request - GetDbProxyInstanceSslRequest
   * @returns GetDbProxyInstanceSslResponse
   */
  async getDbProxyInstanceSsl(request: $_model.GetDbProxyInstanceSslRequest): Promise<$_model.GetDbProxyInstanceSslResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDbProxyInstanceSslWithOptions(request, runtime);
  }

  /**
   * This API is used to grant a specified database account access permissions to one or more databases.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the function documentation to fully understand the prerequisites and the impact of using this API before performing any operation.
   * - [Modify Account Permissions for RDS MySQL](https://help.aliyun.com/document_detail/96101.html)
   * - [Modify Account Permissions for RDS SQL Server](https://help.aliyun.com/document_detail/95692.html)
   * - [Modify Account Permissions for RDS MariaDB](https://help.aliyun.com/document_detail/97134.html)
   * - [Permission Details for RDS PostgreSQL](https://help.aliyun.com/document_detail/257684.html)
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

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantAccountPrivilege",
      version: "2014-08-15",
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
   * This API is used to grant a specified database account access permissions to one or more databases.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the function documentation to fully understand the prerequisites and the impact of using this API before performing any operation.
   * - [Modify Account Permissions for RDS MySQL](https://help.aliyun.com/document_detail/96101.html)
   * - [Modify Account Permissions for RDS SQL Server](https://help.aliyun.com/document_detail/95692.html)
   * - [Modify Account Permissions for RDS MariaDB](https://help.aliyun.com/document_detail/97134.html)
   * - [Permission Details for RDS PostgreSQL](https://help.aliyun.com/document_detail/257684.html)
   * 
   * @param request - GrantAccountPrivilegeRequest
   * @returns GrantAccountPrivilegeResponse
   */
  async grantAccountPrivilege(request: $_model.GrantAccountPrivilegeRequest): Promise<$_model.GrantAccountPrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantAccountPrivilegeWithOptions(request, runtime);
  }

  /**
   * 授权操作人权限
   * 
   * @param request - GrantOperatorPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantOperatorPermissionResponse
   */
  async grantOperatorPermissionWithOptions(request: $_model.GrantOperatorPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantOperatorPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.privileges)) {
      query["Privileges"] = request.privileges;
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
      action: "GrantOperatorPermission",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantOperatorPermissionResponse>(await this.callApi(params, req, runtime), new $_model.GrantOperatorPermissionResponse({}));
  }

  /**
   * 授权操作人权限
   * 
   * @param request - GrantOperatorPermissionRequest
   * @returns GrantOperatorPermissionResponse
   */
  async grantOperatorPermission(request: $_model.GrantOperatorPermissionRequest): Promise<$_model.GrantOperatorPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantOperatorPermissionWithOptions(request, runtime);
  }

  /**
   * This API is used to import backup data from a self-managed MySQL 5.7 database into RDS.
   * 
   * @remarks
   * ### Supported Engine
   * - RDS MySQL
   * ### Feature Description
   * User backups refer to full backup data from a self-managed MySQL database. You can recover user backups to the cloud.
   * ### Notes
   * **To invoke this API, you must meet the following conditions:**
   * * You have backed up your self-managed MySQL 5.7 or 8.0 database using XtraBackup, and the backup file name ends with `_qp.xb`. For more information, see [Migrate Full Backup Data from Self-Managed MySQL 5.7 or 8.0 Databases to the Cloud](https://help.aliyun.com/document_detail/251779.html).
   * * You have uploaded the backup files of your self-managed MySQL 5.7 or 8.0 database to an OSS bucket in the corresponding Region. For more information, see [Migrate Full Backup Data from Self-Managed MySQL 5.7 or 8.0 Databases to the Cloud](https://help.aliyun.com/document_detail/251779.html).
   * 
   * @param request - ImportUserBackupFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportUserBackupFileResponse
   */
  async importUserBackupFileWithOptions(request: $_model.ImportUserBackupFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportUserBackupFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupFile)) {
      query["BackupFile"] = request.backupFile;
    }

    if (!$dara.isNull(request.bucketRegion)) {
      query["BucketRegion"] = request.bucketRegion;
    }

    if (!$dara.isNull(request.buildReplication)) {
      query["BuildReplication"] = request.buildReplication;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.masterInfo)) {
      query["MasterInfo"] = request.masterInfo;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
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

    if (!$dara.isNull(request.restoreSize)) {
      query["RestoreSize"] = request.restoreSize;
    }

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!$dara.isNull(request.sourceInfo)) {
      query["SourceInfo"] = request.sourceInfo;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportUserBackupFile",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportUserBackupFileResponse>(await this.callApi(params, req, runtime), new $_model.ImportUserBackupFileResponse({}));
  }

  /**
   * This API is used to import backup data from a self-managed MySQL 5.7 database into RDS.
   * 
   * @remarks
   * ### Supported Engine
   * - RDS MySQL
   * ### Feature Description
   * User backups refer to full backup data from a self-managed MySQL database. You can recover user backups to the cloud.
   * ### Notes
   * **To invoke this API, you must meet the following conditions:**
   * * You have backed up your self-managed MySQL 5.7 or 8.0 database using XtraBackup, and the backup file name ends with `_qp.xb`. For more information, see [Migrate Full Backup Data from Self-Managed MySQL 5.7 or 8.0 Databases to the Cloud](https://help.aliyun.com/document_detail/251779.html).
   * * You have uploaded the backup files of your self-managed MySQL 5.7 or 8.0 database to an OSS bucket in the corresponding Region. For more information, see [Migrate Full Backup Data from Self-Managed MySQL 5.7 or 8.0 Databases to the Cloud](https://help.aliyun.com/document_detail/251779.html).
   * 
   * @param request - ImportUserBackupFileRequest
   * @returns ImportUserBackupFileResponse
   */
  async importUserBackupFile(request: $_model.ImportUserBackupFileRequest): Promise<$_model.ImportUserBackupFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importUserBackupFileWithOptions(request, runtime);
  }

  /**
   * 为实例安装云助手Agent
   * 
   * @param tmpReq - InstallRCCloudAssistantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallRCCloudAssistantResponse
   */
  async installRCCloudAssistantWithOptions(tmpReq: $_model.InstallRCCloudAssistantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallRCCloudAssistantResponse> {
    tmpReq.validate();
    let request = new $_model.InstallRCCloudAssistantShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallRCCloudAssistant",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallRCCloudAssistantResponse>(await this.callApi(params, req, runtime), new $_model.InstallRCCloudAssistantResponse({}));
  }

  /**
   * 为实例安装云助手Agent
   * 
   * @param request - InstallRCCloudAssistantRequest
   * @returns InstallRCCloudAssistantResponse
   */
  async installRCCloudAssistant(request: $_model.InstallRCCloudAssistantRequest): Promise<$_model.InstallRCCloudAssistantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installRCCloudAssistantWithOptions(request, runtime);
  }

  /**
   * 查询实例规格列表
   * 
   * @param request - ListClassesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClassesResponse
   */
  async listClassesWithOptions(request: $_model.ListClassesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClassesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
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
      action: "ListClasses",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClassesResponse>(await this.callApi(params, req, runtime), new $_model.ListClassesResponse({}));
  }

  /**
   * 查询实例规格列表
   * 
   * @param request - ListClassesRequest
   * @returns ListClassesResponse
   */
  async listClasses(request: $_model.ListClassesRequest): Promise<$_model.ListClassesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClassesWithOptions(request, runtime);
  }

  /**
   * List and query native replication data import jobs.
   * 
   * @remarks
   * List and query native replication instance data import jobs.
   * 
   * @param request - ListImportTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImportTasksResponse
   */
  async listImportTasksWithOptions(request: $_model.ListImportTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListImportTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImportTasks",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListImportTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListImportTasksResponse({}));
  }

  /**
   * List and query native replication data import jobs.
   * 
   * @remarks
   * List and query native replication instance data import jobs.
   * 
   * @param request - ListImportTasksRequest
   * @returns ListImportTasksResponse
   */
  async listImportTasks(request: $_model.ListImportTasksRequest): Promise<$_model.ListImportTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImportTasksWithOptions(request, runtime);
  }

  /**
   * RCVCluster列表接口
   * 
   * @param request - ListRCVClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRCVClustersResponse
   */
  async listRCVClustersWithOptions(request: $_model.ListRCVClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRCVClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRCVClusters",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRCVClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListRCVClustersResponse({}));
  }

  /**
   * RCVCluster列表接口
   * 
   * @param request - ListRCVClustersRequest
   * @returns ListRCVClustersResponse
   */
  async listRCVClusters(request: $_model.ListRCVClustersRequest): Promise<$_model.ListRCVClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRCVClustersWithOptions(request, runtime);
  }

  /**
   * 查询RDS资源已绑定的标签列表
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
      version: "2014-08-15",
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
   * 查询RDS资源已绑定的标签列表
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 查询所有已导入至RDS的用户备份的详情
   * 
   * @param request - ListUserBackupFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserBackupFilesResponse
   */
  async listUserBackupFilesWithOptions(request: $_model.ListUserBackupFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserBackupFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.ossUrl)) {
      query["OssUrl"] = request.ossUrl;
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserBackupFiles",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserBackupFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserBackupFilesResponse({}));
  }

  /**
   * 查询所有已导入至RDS的用户备份的详情
   * 
   * @param request - ListUserBackupFilesRequest
   * @returns ListUserBackupFilesResponse
   */
  async listUserBackupFiles(request: $_model.ListUserBackupFilesRequest): Promise<$_model.ListUserBackupFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserBackupFilesWithOptions(request, runtime);
  }

  /**
   * 锁定账号
   * 
   * @param request - LockAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LockAccountResponse
   */
  async lockAccountWithOptions(request: $_model.LockAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LockAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "LockAccount",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LockAccountResponse>(await this.callApi(params, req, runtime), new $_model.LockAccountResponse({}));
  }

  /**
   * 锁定账号
   * 
   * @param request - LockAccountRequest
   * @returns LockAccountResponse
   */
  async lockAccount(request: $_model.LockAccountRequest): Promise<$_model.LockAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lockAccountWithOptions(request, runtime);
  }

  /**
   * 迁移实例链接到其他可用区
   * 
   * @param request - MigrateConnectionToOtherZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateConnectionToOtherZoneResponse
   */
  async migrateConnectionToOtherZoneWithOptions(request: $_model.MigrateConnectionToOtherZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateConnectionToOtherZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      action: "MigrateConnectionToOtherZone",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateConnectionToOtherZoneResponse>(await this.callApi(params, req, runtime), new $_model.MigrateConnectionToOtherZoneResponse({}));
  }

  /**
   * 迁移实例链接到其他可用区
   * 
   * @param request - MigrateConnectionToOtherZoneRequest
   * @returns MigrateConnectionToOtherZoneResponse
   */
  async migrateConnectionToOtherZone(request: $_model.MigrateConnectionToOtherZoneRequest): Promise<$_model.MigrateConnectionToOtherZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.migrateConnectionToOtherZoneWithOptions(request, runtime);
  }

  /**
   * 迁移RDS实例
   * 
   * @param request - MigrateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateDBInstanceResponse
   */
  async migrateDBInstanceWithOptions(request: $_model.MigrateDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
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

    if (!$dara.isNull(request.specifiedTime)) {
      query["SpecifiedTime"] = request.specifiedTime;
    }

    if (!$dara.isNull(request.targetDedicatedHostIdForMaster)) {
      query["TargetDedicatedHostIdForMaster"] = request.targetDedicatedHostIdForMaster;
    }

    if (!$dara.isNull(request.targetDedicatedHostIdForSlave)) {
      query["TargetDedicatedHostIdForSlave"] = request.targetDedicatedHostIdForSlave;
    }

    if (!$dara.isNull(request.zoneIdForFollower)) {
      query["ZoneIdForFollower"] = request.zoneIdForFollower;
    }

    if (!$dara.isNull(request.zoneIdForLog)) {
      query["ZoneIdForLog"] = request.zoneIdForLog;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MigrateDBInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.MigrateDBInstanceResponse({}));
  }

  /**
   * 迁移RDS实例
   * 
   * @param request - MigrateDBInstanceRequest
   * @returns MigrateDBInstanceResponse
   */
  async migrateDBInstance(request: $_model.MigrateDBInstanceRequest): Promise<$_model.MigrateDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.migrateDBInstanceWithOptions(request, runtime);
  }

  /**
   * category cluster migrate db nodes
   * 
   * @param tmpReq - MigrateDBNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateDBNodesResponse
   */
  async migrateDBNodesWithOptions(tmpReq: $_model.MigrateDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateDBNodesResponse> {
    tmpReq.validate();
    let request = new $_model.MigrateDBNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.DBNode)) {
      request.DBNodeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBNode, "DBNode", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBNodeShrink)) {
      query["DBNode"] = request.DBNodeShrink;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MigrateDBNodes",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateDBNodesResponse>(await this.callApi(params, req, runtime), new $_model.MigrateDBNodesResponse({}));
  }

  /**
   * category cluster migrate db nodes
   * 
   * @param request - MigrateDBNodesRequest
   * @returns MigrateDBNodesResponse
   */
  async migrateDBNodes(request: $_model.MigrateDBNodesRequest): Promise<$_model.MigrateDBNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.migrateDBNodesWithOptions(request, runtime);
  }

  /**
   * 将RDS白名单从通用模式切换为高安全模式
   * 
   * @param request - MigrateSecurityIPModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateSecurityIPModeResponse
   */
  async migrateSecurityIPModeWithOptions(request: $_model.MigrateSecurityIPModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateSecurityIPModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "MigrateSecurityIPMode",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateSecurityIPModeResponse>(await this.callApi(params, req, runtime), new $_model.MigrateSecurityIPModeResponse({}));
  }

  /**
   * 将RDS白名单从通用模式切换为高安全模式
   * 
   * @param request - MigrateSecurityIPModeRequest
   * @returns MigrateSecurityIPModeResponse
   */
  async migrateSecurityIPMode(request: $_model.MigrateSecurityIPModeRequest): Promise<$_model.MigrateSecurityIPModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.migrateSecurityIPModeWithOptions(request, runtime);
  }

  /**
   * RDS实例迁移到其他可用区
   * 
   * @param request - MigrateToOtherZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateToOtherZoneResponse
   */
  async migrateToOtherZoneWithOptions(request: $_model.MigrateToOtherZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateToOtherZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.customExtraInfo)) {
      query["CustomExtraInfo"] = request.customExtraInfo;
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

    if (!$dara.isNull(request.DBInstanceStorageType)) {
      query["DBInstanceStorageType"] = request.DBInstanceStorageType;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.ioAccelerationEnabled)) {
      query["IoAccelerationEnabled"] = request.ioAccelerationEnabled;
    }

    if (!$dara.isNull(request.isModifySpec)) {
      query["IsModifySpec"] = request.isModifySpec;
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

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
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

    if (!$dara.isNull(request.zoneIdSlave1)) {
      query["ZoneIdSlave1"] = request.zoneIdSlave1;
    }

    if (!$dara.isNull(request.zoneIdSlave2)) {
      query["ZoneIdSlave2"] = request.zoneIdSlave2;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MigrateToOtherZone",
      version: "2014-08-15",
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
   * RDS实例迁移到其他可用区
   * 
   * @param request - MigrateToOtherZoneRequest
   * @returns MigrateToOtherZoneResponse
   */
  async migrateToOtherZone(request: $_model.MigrateToOtherZoneRequest): Promise<$_model.MigrateToOtherZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.migrateToOtherZoneWithOptions(request, runtime);
  }

  /**
   * 修改AD信息
   * 
   * @param request - ModifyADInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyADInfoResponse
   */
  async modifyADInfoWithOptions(request: $_model.ModifyADInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyADInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ADAccountName)) {
      query["ADAccountName"] = request.ADAccountName;
    }

    if (!$dara.isNull(request.ADDNS)) {
      query["ADDNS"] = request.ADDNS;
    }

    if (!$dara.isNull(request.ADPassword)) {
      query["ADPassword"] = request.ADPassword;
    }

    if (!$dara.isNull(request.ADServerIpAddress)) {
      query["ADServerIpAddress"] = request.ADServerIpAddress;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "ModifyADInfo",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyADInfoResponse>(await this.callApi(params, req, runtime), new $_model.ModifyADInfoResponse({}));
  }

  /**
   * 修改AD信息
   * 
   * @param request - ModifyADInfoRequest
   * @returns ModifyADInfoResponse
   */
  async modifyADInfo(request: $_model.ModifyADInfoRequest): Promise<$_model.ModifyADInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyADInfoWithOptions(request, runtime);
  }

  /**
   * 修改账号检查策略
   * 
   * @param request - ModifyAccountCheckPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountCheckPolicyResponse
   */
  async modifyAccountCheckPolicyWithOptions(request: $_model.ModifyAccountCheckPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountCheckPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.checkPolicy)) {
      query["CheckPolicy"] = request.checkPolicy;
    }

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
      action: "ModifyAccountCheckPolicy",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountCheckPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountCheckPolicyResponse({}));
  }

  /**
   * 修改账号检查策略
   * 
   * @param request - ModifyAccountCheckPolicyRequest
   * @returns ModifyAccountCheckPolicyResponse
   */
  async modifyAccountCheckPolicy(request: $_model.ModifyAccountCheckPolicyRequest): Promise<$_model.ModifyAccountCheckPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountCheckPolicyWithOptions(request, runtime);
  }

  /**
   * 修改账号备注信息
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
      version: "2014-08-15",
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
   * 修改账号备注信息
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * Modify the encryption or masking permissions of an account in a specified instance.
   * 
   * @remarks
   * ## Request Description
   * - Before using this API, ensure that you have enabled the column encryption service in DAS Security Center.
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and enable the column encryption service before using it again.
   * 
   * @param request - ModifyAccountMaskingPrivilegeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountMaskingPrivilegeResponse
   */
  async modifyAccountMaskingPrivilegeWithOptions(request: $_model.ModifyAccountMaskingPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountMaskingPrivilegeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.privilege)) {
      query["Privilege"] = request.privilege;
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

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountMaskingPrivilege",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountMaskingPrivilegeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountMaskingPrivilegeResponse({}));
  }

  /**
   * Modify the encryption or masking permissions of an account in a specified instance.
   * 
   * @remarks
   * ## Request Description
   * - Before using this API, ensure that you have enabled the column encryption service in DAS Security Center.
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and enable the column encryption service before using it again.
   * 
   * @param request - ModifyAccountMaskingPrivilegeRequest
   * @returns ModifyAccountMaskingPrivilegeResponse
   */
  async modifyAccountMaskingPrivilege(request: $_model.ModifyAccountMaskingPrivilegeRequest): Promise<$_model.ModifyAccountMaskingPrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountMaskingPrivilegeWithOptions(request, runtime);
  }

  /**
   * 修改密码策略
   * 
   * @param request - ModifyAccountSecurityPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountSecurityPolicyResponse
   */
  async modifyAccountSecurityPolicyWithOptions(request: $_model.ModifyAccountSecurityPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountSecurityPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.groupPolicy)) {
      query["GroupPolicy"] = request.groupPolicy;
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
      action: "ModifyAccountSecurityPolicy",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountSecurityPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountSecurityPolicyResponse({}));
  }

  /**
   * 修改密码策略
   * 
   * @param request - ModifyAccountSecurityPolicyRequest
   * @returns ModifyAccountSecurityPolicyResponse
   */
  async modifyAccountSecurityPolicy(request: $_model.ModifyAccountSecurityPolicyRequest): Promise<$_model.ModifyAccountSecurityPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountSecurityPolicyWithOptions(request, runtime);
  }

  /**
   * 开启或关闭RDS历史事件功能
   * 
   * @param request - ModifyActionEventPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyActionEventPolicyResponse
   */
  async modifyActionEventPolicyWithOptions(request: $_model.ModifyActionEventPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyActionEventPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableEventLog)) {
      query["EnableEventLog"] = request.enableEventLog;
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
      action: "ModifyActionEventPolicy",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyActionEventPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyActionEventPolicyResponse({}));
  }

  /**
   * 开启或关闭RDS历史事件功能
   * 
   * @param request - ModifyActionEventPolicyRequest
   * @returns ModifyActionEventPolicyResponse
   */
  async modifyActionEventPolicy(request: $_model.ModifyActionEventPolicyRequest): Promise<$_model.ModifyActionEventPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActionEventPolicyWithOptions(request, runtime);
  }

  /**
   * 批量修改主动运维任务
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
      version: "2014-08-15",
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
   * 批量修改主动运维任务
   * 
   * @param request - ModifyActiveOperationTasksRequest
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasks(request: $_model.ModifyActiveOperationTasksRequest): Promise<$_model.ModifyActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * 修改RDS的备份策略
   * 
   * @param request - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(request: $_model.ModifyBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.advancedDataPolicies)) {
      query["AdvancedDataPolicies"] = request.advancedDataPolicies;
    }

    if (!$dara.isNull(request.advancedLogPolicies)) {
      query["AdvancedLogPolicies"] = request.advancedLogPolicies;
    }

    if (!$dara.isNull(request.archiveBackupKeepCount)) {
      query["ArchiveBackupKeepCount"] = request.archiveBackupKeepCount;
    }

    if (!$dara.isNull(request.archiveBackupKeepPolicy)) {
      query["ArchiveBackupKeepPolicy"] = request.archiveBackupKeepPolicy;
    }

    if (!$dara.isNull(request.archiveBackupRetentionPeriod)) {
      query["ArchiveBackupRetentionPeriod"] = request.archiveBackupRetentionPeriod;
    }

    if (!$dara.isNull(request.backupInterval)) {
      query["BackupInterval"] = request.backupInterval;
    }

    if (!$dara.isNull(request.backupLog)) {
      query["BackupLog"] = request.backupLog;
    }

    if (!$dara.isNull(request.backupMethod)) {
      query["BackupMethod"] = request.backupMethod;
    }

    if (!$dara.isNull(request.backupPolicyMode)) {
      query["BackupPolicyMode"] = request.backupPolicyMode;
    }

    if (!$dara.isNull(request.backupPriority)) {
      query["BackupPriority"] = request.backupPriority;
    }

    if (!$dara.isNull(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.compressType)) {
      query["CompressType"] = request.compressType;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.enableAdvancedBackupPolicy)) {
      query["EnableAdvancedBackupPolicy"] = request.enableAdvancedBackupPolicy;
    }

    if (!$dara.isNull(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!$dara.isNull(request.enableIncrementDataBackup)) {
      query["EnableIncrementDataBackup"] = request.enableIncrementDataBackup;
    }

    if (!$dara.isNull(request.highSpaceUsageProtection)) {
      query["HighSpaceUsageProtection"] = request.highSpaceUsageProtection;
    }

    if (!$dara.isNull(request.localLogRetentionHours)) {
      query["LocalLogRetentionHours"] = request.localLogRetentionHours;
    }

    if (!$dara.isNull(request.localLogRetentionSpace)) {
      query["LocalLogRetentionSpace"] = request.localLogRetentionSpace;
    }

    if (!$dara.isNull(request.logBackupFrequency)) {
      query["LogBackupFrequency"] = request.logBackupFrequency;
    }

    if (!$dara.isNull(request.logBackupLocalRetentionNumber)) {
      query["LogBackupLocalRetentionNumber"] = request.logBackupLocalRetentionNumber;
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

    if (!$dara.isNull(request.releasedKeepPolicy)) {
      query["ReleasedKeepPolicy"] = request.releasedKeepPolicy;
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
      version: "2014-08-15",
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
   * 修改RDS的备份策略
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Extends the expiration time of backup sets generated by manual backup for a single database, including physical backup sets and full backup sets.
   * 
   * @param request - ModifyBackupSetExpireTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupSetExpireTimeResponse
   */
  async modifyBackupSetExpireTimeWithOptions(request: $_model.ModifyBackupSetExpireTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupSetExpireTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.expectExpireTime)) {
      query["ExpectExpireTime"] = request.expectExpireTime;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupSetExpireTime",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackupSetExpireTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackupSetExpireTimeResponse({}));
  }

  /**
   * Extends the expiration time of backup sets generated by manual backup for a single database, including physical backup sets and full backup sets.
   * 
   * @param request - ModifyBackupSetExpireTimeRequest
   * @returns ModifyBackupSetExpireTimeResponse
   */
  async modifyBackupSetExpireTime(request: $_model.ModifyBackupSetExpireTimeRequest): Promise<$_model.ModifyBackupSetExpireTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupSetExpireTimeWithOptions(request, runtime);
  }

  /**
   * 修改排序时区
   * 
   * @param request - ModifyCollationTimeZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCollationTimeZoneResponse
   */
  async modifyCollationTimeZoneWithOptions(request: $_model.ModifyCollationTimeZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCollationTimeZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collation)) {
      query["Collation"] = request.collation;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.timezone)) {
      query["Timezone"] = request.timezone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCollationTimeZone",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCollationTimeZoneResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCollationTimeZoneResponse({}));
  }

  /**
   * 修改排序时区
   * 
   * @param request - ModifyCollationTimeZoneRequest
   * @returns ModifyCollationTimeZoneResponse
   */
  async modifyCollationTimeZone(request: $_model.ModifyCollationTimeZoneRequest): Promise<$_model.ModifyCollationTimeZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCollationTimeZoneWithOptions(request, runtime);
  }

  /**
   * Modifies the settings of assured serverless or disables assured serverless.
   * 
   * @remarks
   * ### 适用引擎
   * RDS PostgreSQL
   * ### 相关功能文档
   * [承诺型Serverless](https://help.aliyun.com/document_detail/2928780.html)
   * 
   * @param request - ModifyComputeBurstConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyComputeBurstConfigResponse
   */
  async modifyComputeBurstConfigWithOptions(request: $_model.ModifyComputeBurstConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyComputeBurstConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.burstStatus)) {
      query["BurstStatus"] = request.burstStatus;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cpuEnlargeThreshold)) {
      query["CpuEnlargeThreshold"] = request.cpuEnlargeThreshold;
    }

    if (!$dara.isNull(request.cpuShrinkThreshold)) {
      query["CpuShrinkThreshold"] = request.cpuShrinkThreshold;
    }

    if (!$dara.isNull(request.crontabJobId)) {
      query["CrontabJobId"] = request.crontabJobId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.memoryEnlargeThreshold)) {
      query["MemoryEnlargeThreshold"] = request.memoryEnlargeThreshold;
    }

    if (!$dara.isNull(request.memoryShrinkThreshold)) {
      query["MemoryShrinkThreshold"] = request.memoryShrinkThreshold;
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

    if (!$dara.isNull(request.scaleMaxCpus)) {
      query["ScaleMaxCpus"] = request.scaleMaxCpus;
    }

    if (!$dara.isNull(request.scaleMaxMemory)) {
      query["ScaleMaxMemory"] = request.scaleMaxMemory;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!$dara.isNull(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyComputeBurstConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyComputeBurstConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyComputeBurstConfigResponse({}));
  }

  /**
   * Modifies the settings of assured serverless or disables assured serverless.
   * 
   * @remarks
   * ### 适用引擎
   * RDS PostgreSQL
   * ### 相关功能文档
   * [承诺型Serverless](https://help.aliyun.com/document_detail/2928780.html)
   * 
   * @param request - ModifyComputeBurstConfigRequest
   * @returns ModifyComputeBurstConfigResponse
   */
  async modifyComputeBurstConfig(request: $_model.ModifyComputeBurstConfigRequest): Promise<$_model.ModifyComputeBurstConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyComputeBurstConfigWithOptions(request, runtime);
  }

  /**
   * This API is used to modify RDS instance resources.
   * 
   * @param request - ModifyCustinsResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCustinsResourceResponse
   */
  async modifyCustinsResourceWithOptions(request: $_model.ModifyCustinsResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCustinsResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adjustDeadline)) {
      query["AdjustDeadline"] = request.adjustDeadline;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.increaseRatio)) {
      query["IncreaseRatio"] = request.increaseRatio;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.restoreOriginalSpecification)) {
      query["RestoreOriginalSpecification"] = request.restoreOriginalSpecification;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCustinsResource",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCustinsResourceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCustinsResourceResponse({}));
  }

  /**
   * This API is used to modify RDS instance resources.
   * 
   * @param request - ModifyCustinsResourceRequest
   * @returns ModifyCustinsResourceResponse
   */
  async modifyCustinsResource(request: $_model.ModifyCustinsResourceRequest): Promise<$_model.ModifyCustinsResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCustinsResourceWithOptions(request, runtime);
  }

  /**
   * 修改DB备注信息
   * 
   * @param request - ModifyDBDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBDescriptionResponse
   */
  async modifyDBDescriptionWithOptions(request: $_model.ModifyDBDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBDescription)) {
      query["DBDescription"] = request.DBDescription;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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
      action: "ModifyDBDescription",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBDescriptionResponse({}));
  }

  /**
   * 修改DB备注信息
   * 
   * @param request - ModifyDBDescriptionRequest
   * @returns ModifyDBDescriptionResponse
   */
  async modifyDBDescription(request: $_model.ModifyDBDescriptionRequest): Promise<$_model.ModifyDBDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBDescriptionWithOptions(request, runtime);
  }

  /**
   * 设置RDS实例是否自动升级内核小版本
   * 
   * @param request - ModifyDBInstanceAutoUpgradeMinorVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceAutoUpgradeMinorVersionResponse
   */
  async modifyDBInstanceAutoUpgradeMinorVersionWithOptions(request: $_model.ModifyDBInstanceAutoUpgradeMinorVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceAutoUpgradeMinorVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoUpgradeMinorVersion)) {
      query["AutoUpgradeMinorVersion"] = request.autoUpgradeMinorVersion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "ModifyDBInstanceAutoUpgradeMinorVersion",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceAutoUpgradeMinorVersionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceAutoUpgradeMinorVersionResponse({}));
  }

  /**
   * 设置RDS实例是否自动升级内核小版本
   * 
   * @param request - ModifyDBInstanceAutoUpgradeMinorVersionRequest
   * @returns ModifyDBInstanceAutoUpgradeMinorVersionResponse
   */
  async modifyDBInstanceAutoUpgradeMinorVersion(request: $_model.ModifyDBInstanceAutoUpgradeMinorVersionRequest): Promise<$_model.ModifyDBInstanceAutoUpgradeMinorVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceAutoUpgradeMinorVersionWithOptions(request, runtime);
  }

  /**
   * Modify the column encryption algorithm configuration for a specified instance.
   * 
   * @remarks
   * ## Request Description
   * - Before using this API, ensure that you have activated the column encryption service in the DAS Security Center.
   * - If you receive an error message when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and activate the column encryption service before using it again.
   * 
   * @param request - ModifyDBInstanceCLSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceCLSResponse
   */
  async modifyDBInstanceCLSWithOptions(request: $_model.ModifyDBInstanceCLSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceCLSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.encryptionAlgorithm)) {
      query["EncryptionAlgorithm"] = request.encryptionAlgorithm;
    }

    if (!$dara.isNull(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!$dara.isNull(request.encryptionKeyMode)) {
      query["EncryptionKeyMode"] = request.encryptionKeyMode;
    }

    if (!$dara.isNull(request.encryptionStatus)) {
      query["EncryptionStatus"] = request.encryptionStatus;
    }

    if (!$dara.isNull(request.isRotate)) {
      query["IsRotate"] = request.isRotate;
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

    if (!$dara.isNull(request.whiteListMode)) {
      query["WhiteListMode"] = request.whiteListMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceCLS",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceCLSResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceCLSResponse({}));
  }

  /**
   * Modify the column encryption algorithm configuration for a specified instance.
   * 
   * @remarks
   * ## Request Description
   * - Before using this API, ensure that you have activated the column encryption service in the DAS Security Center.
   * - If you receive an error message when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and activate the column encryption service before using it again.
   * 
   * @param request - ModifyDBInstanceCLSRequest
   * @returns ModifyDBInstanceCLSResponse
   */
  async modifyDBInstanceCLS(request: $_model.ModifyDBInstanceCLSRequest): Promise<$_model.ModifyDBInstanceCLSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceCLSWithOptions(request, runtime);
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
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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

    if (!$dara.isNull(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceConfig",
      version: "2014-08-15",
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
   * This API is used to manage the connection address and port of an instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the Function Documentation to fully understand the prerequisites for using the API and the impact of its use before performing any operation.
   * - [Modify the connection address and port for RDS MySQL](https://help.aliyun.com/document_detail/96163.html)
   * - [Modify the connection address and port for RDS PostgreSQL](https://help.aliyun.com/document_detail/96788.html)
   * - [Modify the connection address and port for RDS SQL Server](https://help.aliyun.com/document_detail/95740.html)
   * - [Modify the connection address and port for RDS MariaDB](https://help.aliyun.com/document_detail/97157.html)
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionStringWithOptions(request: $_model.ModifyDBInstanceConnectionStringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceConnectionStringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.babelfishPort)) {
      query["BabelfishPort"] = request.babelfishPort;
    }

    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.generalGroupName)) {
      query["GeneralGroupName"] = request.generalGroupName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.PGBouncerPort)) {
      query["PGBouncerPort"] = request.PGBouncerPort;
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

    if (!$dara.isNull(request.retainVip)) {
      query["RetainVip"] = request.retainVip;
    }

    if (!$dara.isNull(request.targetDBInstanceId)) {
      query["TargetDBInstanceId"] = request.targetDBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceConnectionString",
      version: "2014-08-15",
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
   * This API is used to manage the connection address and port of an instance.
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * - RDS SQL Server
   * - RDS MariaDB
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the Function Documentation to fully understand the prerequisites for using the API and the impact of its use before performing any operation.
   * - [Modify the connection address and port for RDS MySQL](https://help.aliyun.com/document_detail/96163.html)
   * - [Modify the connection address and port for RDS PostgreSQL](https://help.aliyun.com/document_detail/96788.html)
   * - [Modify the connection address and port for RDS SQL Server](https://help.aliyun.com/document_detail/95740.html)
   * - [Modify the connection address and port for RDS MariaDB](https://help.aliyun.com/document_detail/97157.html)
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionString(request: $_model.ModifyDBInstanceConnectionStringRequest): Promise<$_model.ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  /**
   * 修改只读实例延迟时间
   * 
   * @param request - ModifyDBInstanceDelayedReplicationTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceDelayedReplicationTimeResponse
   */
  async modifyDBInstanceDelayedReplicationTimeWithOptions(request: $_model.ModifyDBInstanceDelayedReplicationTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceDelayedReplicationTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.readSQLReplicationTime)) {
      query["ReadSQLReplicationTime"] = request.readSQLReplicationTime;
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
      action: "ModifyDBInstanceDelayedReplicationTime",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceDelayedReplicationTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceDelayedReplicationTimeResponse({}));
  }

  /**
   * 修改只读实例延迟时间
   * 
   * @param request - ModifyDBInstanceDelayedReplicationTimeRequest
   * @returns ModifyDBInstanceDelayedReplicationTimeResponse
   */
  async modifyDBInstanceDelayedReplicationTime(request: $_model.ModifyDBInstanceDelayedReplicationTimeRequest): Promise<$_model.ModifyDBInstanceDelayedReplicationTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceDelayedReplicationTimeWithOptions(request, runtime);
  }

  /**
   * 修改实例是否开启删除保护
   * 
   * @param request - ModifyDBInstanceDeletionProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceDeletionProtectionResponse
   */
  async modifyDBInstanceDeletionProtectionWithOptions(request: $_model.ModifyDBInstanceDeletionProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceDeletionProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
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
      action: "ModifyDBInstanceDeletionProtection",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceDeletionProtectionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceDeletionProtectionResponse({}));
  }

  /**
   * 修改实例是否开启删除保护
   * 
   * @param request - ModifyDBInstanceDeletionProtectionRequest
   * @returns ModifyDBInstanceDeletionProtectionResponse
   */
  async modifyDBInstanceDeletionProtection(request: $_model.ModifyDBInstanceDeletionProtectionRequest): Promise<$_model.ModifyDBInstanceDeletionProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceDeletionProtectionWithOptions(request, runtime);
  }

  /**
   * 修改实例备注信息
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
      version: "2014-08-15",
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
   * 修改实例备注信息
   * 
   * @param request - ModifyDBInstanceDescriptionRequest
   * @returns ModifyDBInstanceDescriptionResponse
   */
  async modifyDBInstanceDescription(request: $_model.ModifyDBInstanceDescriptionRequest): Promise<$_model.ModifyDBInstanceDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * 修改实例的Endpoint信息
   * 
   * @param tmpReq - ModifyDBInstanceEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceEndpointResponse
   */
  async modifyDBInstanceEndpointWithOptions(tmpReq: $_model.ModifyDBInstanceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceEndpointResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyDBInstanceEndpointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeItems)) {
      request.nodeItemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeItems, "NodeItems", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceEndpointDescription)) {
      query["DBInstanceEndpointDescription"] = request.DBInstanceEndpointDescription;
    }

    if (!$dara.isNull(request.DBInstanceEndpointId)) {
      query["DBInstanceEndpointId"] = request.DBInstanceEndpointId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.nodeItemsShrink)) {
      query["NodeItems"] = request.nodeItemsShrink;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceEndpoint",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceEndpointResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceEndpointResponse({}));
  }

  /**
   * 修改实例的Endpoint信息
   * 
   * @param request - ModifyDBInstanceEndpointRequest
   * @returns ModifyDBInstanceEndpointResponse
   */
  async modifyDBInstanceEndpoint(request: $_model.ModifyDBInstanceEndpointRequest): Promise<$_model.ModifyDBInstanceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceEndpointWithOptions(request, runtime);
  }

  /**
   * 修改实例的Endpoint连接地址信息
   * 
   * @param request - ModifyDBInstanceEndpointAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceEndpointAddressResponse
   */
  async modifyDBInstanceEndpointAddressWithOptions(request: $_model.ModifyDBInstanceEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceEndpointAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBInstanceEndpointId)) {
      query["DBInstanceEndpointId"] = request.DBInstanceEndpointId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceEndpointAddress",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceEndpointAddressResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceEndpointAddressResponse({}));
  }

  /**
   * 修改实例的Endpoint连接地址信息
   * 
   * @param request - ModifyDBInstanceEndpointAddressRequest
   * @returns ModifyDBInstanceEndpointAddressResponse
   */
  async modifyDBInstanceEndpointAddress(request: $_model.ModifyDBInstanceEndpointAddressRequest): Promise<$_model.ModifyDBInstanceEndpointAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceEndpointAddressWithOptions(request, runtime);
  }

  /**
   * 修改实例的高可用模式和数据复制方式
   * 
   * @param request - ModifyDBInstanceHAConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceHAConfigResponse
   */
  async modifyDBInstanceHAConfigWithOptions(request: $_model.ModifyDBInstanceHAConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceHAConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.HAMode)) {
      query["HAMode"] = request.HAMode;
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

    if (!$dara.isNull(request.syncMode)) {
      query["SyncMode"] = request.syncMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceHAConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceHAConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceHAConfigResponse({}));
  }

  /**
   * 修改实例的高可用模式和数据复制方式
   * 
   * @param request - ModifyDBInstanceHAConfigRequest
   * @returns ModifyDBInstanceHAConfigResponse
   */
  async modifyDBInstanceHAConfig(request: $_model.ModifyDBInstanceHAConfigRequest): Promise<$_model.ModifyDBInstanceHAConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceHAConfigWithOptions(request, runtime);
  }

  /**
   * 设置实例运维时间
   * 
   * @param request - ModifyDBInstanceMaintainTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceMaintainTimeResponse
   */
  async modifyDBInstanceMaintainTimeWithOptions(request: $_model.ModifyDBInstanceMaintainTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceMaintainTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "ModifyDBInstanceMaintainTime",
      version: "2014-08-15",
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
   * 设置实例运维时间
   * 
   * @param request - ModifyDBInstanceMaintainTimeRequest
   * @returns ModifyDBInstanceMaintainTimeResponse
   */
  async modifyDBInstanceMaintainTime(request: $_model.ModifyDBInstanceMaintainTimeRequest): Promise<$_model.ModifyDBInstanceMaintainTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceMaintainTimeWithOptions(request, runtime);
  }

  /**
   * 变更RDS PostgreSQL实例需要展示的增强监控指标
   * 
   * @param request - ModifyDBInstanceMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceMetricsResponse
   */
  async modifyDBInstanceMetricsWithOptions(request: $_model.ModifyDBInstanceMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceMetricsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.metricsConfig)) {
      query["MetricsConfig"] = request.metricsConfig;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceMetrics",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceMetricsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceMetricsResponse({}));
  }

  /**
   * 变更RDS PostgreSQL实例需要展示的增强监控指标
   * 
   * @param request - ModifyDBInstanceMetricsRequest
   * @returns ModifyDBInstanceMetricsResponse
   */
  async modifyDBInstanceMetrics(request: $_model.ModifyDBInstanceMetricsRequest): Promise<$_model.ModifyDBInstanceMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceMetricsWithOptions(request, runtime);
  }

  /**
   * Modifies a monitoring frequency.
   * 
   * @remarks
   * ### 适用引擎
   * - RDS MySQL
   * - RDS SQL Server
   * ### 注意事项
   * RDS MySQL的秒级监控需要收取额外费用，请确保在使用该接口前，已充分了解RDS产品的[收费方式和价格](https://help.aliyun.com/document_detail/45020.html)。
   * ### 相关功能文档
   * >Notice: 使用该接口前，请仔细阅读功能文档，确保完全了解使用接口的前提条件及使用后造成的影响后，再进行操作。
   * - [RDS MySQL设置监控频率](https://help.aliyun.com/document_detail/96112.html)
   * - [RDS SQL Server设置监控频率](https://help.aliyun.com/document_detail/95710.html)
   * 
   * @param request - ModifyDBInstanceMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceMonitorResponse
   */
  async modifyDBInstanceMonitorWithOptions(request: $_model.ModifyDBInstanceMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceMonitorResponse> {
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
      action: "ModifyDBInstanceMonitor",
      version: "2014-08-15",
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
   * Modifies a monitoring frequency.
   * 
   * @remarks
   * ### 适用引擎
   * - RDS MySQL
   * - RDS SQL Server
   * ### 注意事项
   * RDS MySQL的秒级监控需要收取额外费用，请确保在使用该接口前，已充分了解RDS产品的[收费方式和价格](https://help.aliyun.com/document_detail/45020.html)。
   * ### 相关功能文档
   * >Notice: 使用该接口前，请仔细阅读功能文档，确保完全了解使用接口的前提条件及使用后造成的影响后，再进行操作。
   * - [RDS MySQL设置监控频率](https://help.aliyun.com/document_detail/96112.html)
   * - [RDS SQL Server设置监控频率](https://help.aliyun.com/document_detail/95710.html)
   * 
   * @param request - ModifyDBInstanceMonitorRequest
   * @returns ModifyDBInstanceMonitorResponse
   */
  async modifyDBInstanceMonitor(request: $_model.ModifyDBInstanceMonitorRequest): Promise<$_model.ModifyDBInstanceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceMonitorWithOptions(request, runtime);
  }

  /**
   * 设置实例网络链接过期时间
   * 
   * @param request - ModifyDBInstanceNetworkExpireTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceNetworkExpireTimeResponse
   */
  async modifyDBInstanceNetworkExpireTimeWithOptions(request: $_model.ModifyDBInstanceNetworkExpireTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceNetworkExpireTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.classicExpiredDays)) {
      query["ClassicExpiredDays"] = request.classicExpiredDays;
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
      action: "ModifyDBInstanceNetworkExpireTime",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceNetworkExpireTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceNetworkExpireTimeResponse({}));
  }

  /**
   * 设置实例网络链接过期时间
   * 
   * @param request - ModifyDBInstanceNetworkExpireTimeRequest
   * @returns ModifyDBInstanceNetworkExpireTimeResponse
   */
  async modifyDBInstanceNetworkExpireTime(request: $_model.ModifyDBInstanceNetworkExpireTimeRequest): Promise<$_model.ModifyDBInstanceNetworkExpireTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceNetworkExpireTimeWithOptions(request, runtime);
  }

  /**
   * 将网络类型为经典网络的RDS实例转换为专有网络
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

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.readWriteSplittingClassicExpiredDays)) {
      query["ReadWriteSplittingClassicExpiredDays"] = request.readWriteSplittingClassicExpiredDays;
    }

    if (!$dara.isNull(request.readWriteSplittingPrivateIpAddress)) {
      query["ReadWriteSplittingPrivateIpAddress"] = request.readWriteSplittingPrivateIpAddress;
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

    if (!$dara.isNull(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceNetworkType",
      version: "2014-08-15",
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
   * 将网络类型为经典网络的RDS实例转换为专有网络
   * 
   * @param request - ModifyDBInstanceNetworkTypeRequest
   * @returns ModifyDBInstanceNetworkTypeResponse
   */
  async modifyDBInstanceNetworkType(request: $_model.ModifyDBInstanceNetworkTypeRequest): Promise<$_model.ModifyDBInstanceNetworkTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceNetworkTypeWithOptions(request, runtime);
  }

  /**
   * 变更实例计费方式
   * 
   * @param request - ModifyDBInstancePayTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstancePayTypeResponse
   */
  async modifyDBInstancePayTypeWithOptions(request: $_model.ModifyDBInstancePayTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstancePayTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstancePayType",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstancePayTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstancePayTypeResponse({}));
  }

  /**
   * 变更实例计费方式
   * 
   * @param request - ModifyDBInstancePayTypeRequest
   * @returns ModifyDBInstancePayTypeResponse
   */
  async modifyDBInstancePayType(request: $_model.ModifyDBInstancePayTypeRequest): Promise<$_model.ModifyDBInstancePayTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstancePayTypeWithOptions(request, runtime);
  }

  /**
   * Enables or disables the native replication feature of ApsaraDB RDS for MySQL.
   * 
   * @param request - ModifyDBInstanceReplicationSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceReplicationSwitchResponse
   */
  async modifyDBInstanceReplicationSwitchWithOptions(request: $_model.ModifyDBInstanceReplicationSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceReplicationSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.externalReplication)) {
      query["ExternalReplication"] = request.externalReplication;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceReplicationSwitch",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceReplicationSwitchResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceReplicationSwitchResponse({}));
  }

  /**
   * Enables or disables the native replication feature of ApsaraDB RDS for MySQL.
   * 
   * @param request - ModifyDBInstanceReplicationSwitchRequest
   * @returns ModifyDBInstanceReplicationSwitchResponse
   */
  async modifyDBInstanceReplicationSwitch(request: $_model.ModifyDBInstanceReplicationSwitchRequest): Promise<$_model.ModifyDBInstanceReplicationSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceReplicationSwitchWithOptions(request, runtime);
  }

  /**
   * 设置实例访问链路支持SSL加密
   * 
   * @param request - ModifyDBInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceSSLResponse
   */
  async modifyDBInstanceSSLWithOptions(request: $_model.ModifyDBInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ACL)) {
      query["ACL"] = request.ACL;
    }

    if (!$dara.isNull(request.CAType)) {
      query["CAType"] = request.CAType;
    }

    if (!$dara.isNull(request.certificate)) {
      query["Certificate"] = request.certificate;
    }

    if (!$dara.isNull(request.clientCACert)) {
      query["ClientCACert"] = request.clientCACert;
    }

    if (!$dara.isNull(request.clientCAEnabled)) {
      query["ClientCAEnabled"] = request.clientCAEnabled;
    }

    if (!$dara.isNull(request.clientCertRevocationList)) {
      query["ClientCertRevocationList"] = request.clientCertRevocationList;
    }

    if (!$dara.isNull(request.clientCrlEnabled)) {
      query["ClientCrlEnabled"] = request.clientCrlEnabled;
    }

    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.forceEncryption)) {
      query["ForceEncryption"] = request.forceEncryption;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.passWord)) {
      query["PassWord"] = request.passWord;
    }

    if (!$dara.isNull(request.replicationACL)) {
      query["ReplicationACL"] = request.replicationACL;
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

    if (!$dara.isNull(request.serverCert)) {
      query["ServerCert"] = request.serverCert;
    }

    if (!$dara.isNull(request.serverKey)) {
      query["ServerKey"] = request.serverKey;
    }

    if (!$dara.isNull(request.tlsVersion)) {
      query["TlsVersion"] = request.tlsVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceSSL",
      version: "2014-08-15",
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
   * 设置实例访问链路支持SSL加密
   * 
   * @param request - ModifyDBInstanceSSLRequest
   * @returns ModifyDBInstanceSSLResponse
   */
  async modifyDBInstanceSSL(request: $_model.ModifyDBInstanceSSLRequest): Promise<$_model.ModifyDBInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceSSLWithOptions(request, runtime);
  }

  /**
   * 修改实例主机安全组规则
   * 
   * @param request - ModifyDBInstanceSecurityGroupRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceSecurityGroupRuleResponse
   */
  async modifyDBInstanceSecurityGroupRuleWithOptions(request: $_model.ModifyDBInstanceSecurityGroupRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceSecurityGroupRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityGroupRuleId)) {
      query["SecurityGroupRuleId"] = request.securityGroupRuleId;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceSecurityGroupRule",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceSecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceSecurityGroupRuleResponse({}));
  }

  /**
   * 修改实例主机安全组规则
   * 
   * @param request - ModifyDBInstanceSecurityGroupRuleRequest
   * @returns ModifyDBInstanceSecurityGroupRuleResponse
   */
  async modifyDBInstanceSecurityGroupRule(request: $_model.ModifyDBInstanceSecurityGroupRuleRequest): Promise<$_model.ModifyDBInstanceSecurityGroupRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceSecurityGroupRuleWithOptions(request, runtime);
  }

  /**
   * 数据库实例变更配置
   * 
   * @param tmpReq - ModifyDBInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceSpecResponse
   */
  async modifyDBInstanceSpecWithOptions(tmpReq: $_model.ModifyDBInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceSpecResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyDBInstanceSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serverlessConfiguration)) {
      request.serverlessConfigurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverlessConfiguration, "ServerlessConfiguration", "json");
    }

    let query = { };
    if (!$dara.isNull(request.allocateStrategy)) {
      query["AllocateStrategy"] = request.allocateStrategy;
    }

    if (!$dara.isNull(request.allowMajorVersionUpgrade)) {
      query["AllowMajorVersionUpgrade"] = request.allowMajorVersionUpgrade;
    }

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.burstingEnabled)) {
      query["BurstingEnabled"] = request.burstingEnabled;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.coldDataEnabled)) {
      query["ColdDataEnabled"] = request.coldDataEnabled;
    }

    if (!$dara.isNull(request.compressionMode)) {
      query["CompressionMode"] = request.compressionMode;
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

    if (!$dara.isNull(request.DBInstanceStorageType)) {
      query["DBInstanceStorageType"] = request.DBInstanceStorageType;
    }

    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.ioAccelerationEnabled)) {
      query["IoAccelerationEnabled"] = request.ioAccelerationEnabled;
    }

    if (!$dara.isNull(request.optimizedWrites)) {
      query["OptimizedWrites"] = request.optimizedWrites;
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

    if (!$dara.isNull(request.promotionCode)) {
      query["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.readOnlyDBInstanceClass)) {
      query["ReadOnlyDBInstanceClass"] = request.readOnlyDBInstanceClass;
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

    if (!$dara.isNull(request.serverlessConfigurationShrink)) {
      query["ServerlessConfiguration"] = request.serverlessConfigurationShrink;
    }

    if (!$dara.isNull(request.sourceBiz)) {
      query["SourceBiz"] = request.sourceBiz;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!$dara.isNull(request.targetMinorVersion)) {
      query["TargetMinorVersion"] = request.targetMinorVersion;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.zoneIdSlave1)) {
      query["ZoneIdSlave1"] = request.zoneIdSlave1;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceSpec",
      version: "2014-08-15",
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
   * 数据库实例变更配置
   * 
   * @param request - ModifyDBInstanceSpecRequest
   * @returns ModifyDBInstanceSpecResponse
   */
  async modifyDBInstanceSpec(request: $_model.ModifyDBInstanceSpecRequest): Promise<$_model.ModifyDBInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceSpecWithOptions(request, runtime);
  }

  /**
   * 设置RDS实例开启透明传输加密
   * 
   * @param request - ModifyDBInstanceTDERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceTDEResponse
   */
  async modifyDBInstanceTDEWithOptions(request: $_model.ModifyDBInstanceTDERequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceTDEResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificate)) {
      query["Certificate"] = request.certificate;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!$dara.isNull(request.isRotate)) {
      query["IsRotate"] = request.isRotate;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.passWord)) {
      query["PassWord"] = request.passWord;
    }

    if (!$dara.isNull(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
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

    if (!$dara.isNull(request.TDEStatus)) {
      query["TDEStatus"] = request.TDEStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceTDE",
      version: "2014-08-15",
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
   * 设置RDS实例开启透明传输加密
   * 
   * @param request - ModifyDBInstanceTDERequest
   * @returns ModifyDBInstanceTDEResponse
   */
  async modifyDBInstanceTDE(request: $_model.ModifyDBInstanceTDERequest): Promise<$_model.ModifyDBInstanceTDEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceTDEWithOptions(request, runtime);
  }

  /**
   * Enable or disable the vector storage toggle for a MySQL instance.
   * 
   * @remarks
   * ### Supported Engine
   * - RDS MySQL
   * ### Related Function Documentation
   * >Notice: Before invoking this API, carefully read the Function Documentation to fully understand the prerequisites and the Impact of using this API, and then perform the operation.
   * - [RDS MySQL Vector Storage](https://help.aliyun.com/document_detail/2998661.html)
   * 
   * @param request - ModifyDBInstanceVectorSupportStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceVectorSupportStatusResponse
   */
  async modifyDBInstanceVectorSupportStatusWithOptions(request: $_model.ModifyDBInstanceVectorSupportStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceVectorSupportStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceVectorSupportStatus",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceVectorSupportStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceVectorSupportStatusResponse({}));
  }

  /**
   * Enable or disable the vector storage toggle for a MySQL instance.
   * 
   * @remarks
   * ### Supported Engine
   * - RDS MySQL
   * ### Related Function Documentation
   * >Notice: Before invoking this API, carefully read the Function Documentation to fully understand the prerequisites and the Impact of using this API, and then perform the operation.
   * - [RDS MySQL Vector Storage](https://help.aliyun.com/document_detail/2998661.html)
   * 
   * @param request - ModifyDBInstanceVectorSupportStatusRequest
   * @returns ModifyDBInstanceVectorSupportStatusResponse
   */
  async modifyDBInstanceVectorSupportStatus(request: $_model.ModifyDBInstanceVectorSupportStatusRequest): Promise<$_model.ModifyDBInstanceVectorSupportStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceVectorSupportStatusWithOptions(request, runtime);
  }

  /**
   * category cluster modify node class
   * 
   * @param tmpReq - ModifyDBNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBNodeResponse
   */
  async modifyDBNodeWithOptions(tmpReq: $_model.ModifyDBNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodeResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyDBNodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.DBNode)) {
      request.DBNodeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBNode, "DBNode", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceStorage)) {
      query["DBInstanceStorage"] = request.DBInstanceStorage;
    }

    if (!$dara.isNull(request.DBInstanceStorageType)) {
      query["DBInstanceStorageType"] = request.DBInstanceStorageType;
    }

    if (!$dara.isNull(request.DBNodeShrink)) {
      query["DBNode"] = request.DBNodeShrink;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
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

    if (!$dara.isNull(request.produceAsync)) {
      query["ProduceAsync"] = request.produceAsync;
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
      action: "ModifyDBNode",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBNodeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBNodeResponse({}));
  }

  /**
   * category cluster modify node class
   * 
   * @param request - ModifyDBNodeRequest
   * @returns ModifyDBNodeResponse
   */
  async modifyDBNode(request: $_model.ModifyDBNodeRequest): Promise<$_model.ModifyDBNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBNodeWithOptions(request, runtime);
  }

  /**
   * 修改RDS实例的数据库代理功能
   * 
   * @param tmpReq - ModifyDBProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBProxyResponse
   */
  async modifyDBProxyWithOptions(tmpReq: $_model.ModifyDBProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBProxyResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyDBProxyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.DBProxyNodes)) {
      request.DBProxyNodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBProxyNodes, "DBProxyNodes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.configDBProxyService)) {
      query["ConfigDBProxyService"] = request.configDBProxyService;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBProxyEngineType)) {
      query["DBProxyEngineType"] = request.DBProxyEngineType;
    }

    if (!$dara.isNull(request.DBProxyInstanceNum)) {
      query["DBProxyInstanceNum"] = request.DBProxyInstanceNum;
    }

    if (!$dara.isNull(request.DBProxyInstanceType)) {
      query["DBProxyInstanceType"] = request.DBProxyInstanceType;
    }

    if (!$dara.isNull(request.DBProxyNodesShrink)) {
      query["DBProxyNodes"] = request.DBProxyNodesShrink;
    }

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.persistentConnectionStatus)) {
      query["PersistentConnectionStatus"] = request.persistentConnectionStatus;
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

    if (!$dara.isNull(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBProxy",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBProxyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBProxyResponse({}));
  }

  /**
   * 修改RDS实例的数据库代理功能
   * 
   * @param request - ModifyDBProxyRequest
   * @returns ModifyDBProxyResponse
   */
  async modifyDBProxy(request: $_model.ModifyDBProxyRequest): Promise<$_model.ModifyDBProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBProxyWithOptions(request, runtime);
  }

  /**
   * Modifies the connection settings for a database proxy endpoint.
   * 
   * @param request - ModifyDBProxyEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBProxyEndpointResponse
   */
  async modifyDBProxyEndpointWithOptions(request: $_model.ModifyDBProxyEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBProxyEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.causalConsistReadTimeout)) {
      query["CausalConsistReadTimeout"] = request.causalConsistReadTimeout;
    }

    if (!$dara.isNull(request.configDBProxyFeatures)) {
      query["ConfigDBProxyFeatures"] = request.configDBProxyFeatures;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBProxyEndpointId)) {
      query["DBProxyEndpointId"] = request.DBProxyEndpointId;
    }

    if (!$dara.isNull(request.DBProxyEngineType)) {
      query["DBProxyEngineType"] = request.DBProxyEngineType;
    }

    if (!$dara.isNull(request.dbEndpointAliases)) {
      query["DbEndpointAliases"] = request.dbEndpointAliases;
    }

    if (!$dara.isNull(request.dbEndpointMinSlaveCount)) {
      query["DbEndpointMinSlaveCount"] = request.dbEndpointMinSlaveCount;
    }

    if (!$dara.isNull(request.dbEndpointOperator)) {
      query["DbEndpointOperator"] = request.dbEndpointOperator;
    }

    if (!$dara.isNull(request.dbEndpointReadWriteMode)) {
      query["DbEndpointReadWriteMode"] = request.dbEndpointReadWriteMode;
    }

    if (!$dara.isNull(request.dbEndpointType)) {
      query["DbEndpointType"] = request.dbEndpointType;
    }

    if (!$dara.isNull(request.effectiveSpecificTime)) {
      query["EffectiveSpecificTime"] = request.effectiveSpecificTime;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.readOnlyInstanceDistributionType)) {
      query["ReadOnlyInstanceDistributionType"] = request.readOnlyInstanceDistributionType;
    }

    if (!$dara.isNull(request.readOnlyInstanceMaxDelayTime)) {
      query["ReadOnlyInstanceMaxDelayTime"] = request.readOnlyInstanceMaxDelayTime;
    }

    if (!$dara.isNull(request.readOnlyInstanceWeight)) {
      query["ReadOnlyInstanceWeight"] = request.readOnlyInstanceWeight;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBProxyEndpoint",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBProxyEndpointResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBProxyEndpointResponse({}));
  }

  /**
   * Modifies the connection settings for a database proxy endpoint.
   * 
   * @param request - ModifyDBProxyEndpointRequest
   * @returns ModifyDBProxyEndpointResponse
   */
  async modifyDBProxyEndpoint(request: $_model.ModifyDBProxyEndpointRequest): Promise<$_model.ModifyDBProxyEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBProxyEndpointWithOptions(request, runtime);
  }

  /**
   * 修改RDS实例数据库代理的连接地址
   * 
   * @param request - ModifyDBProxyEndpointAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBProxyEndpointAddressResponse
   */
  async modifyDBProxyEndpointAddressWithOptions(request: $_model.ModifyDBProxyEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBProxyEndpointAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBProxyConnectStringNetType)) {
      query["DBProxyConnectStringNetType"] = request.DBProxyConnectStringNetType;
    }

    if (!$dara.isNull(request.DBProxyEndpointId)) {
      query["DBProxyEndpointId"] = request.DBProxyEndpointId;
    }

    if (!$dara.isNull(request.DBProxyEngineType)) {
      query["DBProxyEngineType"] = request.DBProxyEngineType;
    }

    if (!$dara.isNull(request.DBProxyNewConnectString)) {
      query["DBProxyNewConnectString"] = request.DBProxyNewConnectString;
    }

    if (!$dara.isNull(request.DBProxyNewConnectStringPort)) {
      query["DBProxyNewConnectStringPort"] = request.DBProxyNewConnectStringPort;
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
      action: "ModifyDBProxyEndpointAddress",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBProxyEndpointAddressResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBProxyEndpointAddressResponse({}));
  }

  /**
   * 修改RDS实例数据库代理的连接地址
   * 
   * @param request - ModifyDBProxyEndpointAddressRequest
   * @returns ModifyDBProxyEndpointAddressResponse
   */
  async modifyDBProxyEndpointAddress(request: $_model.ModifyDBProxyEndpointAddressRequest): Promise<$_model.ModifyDBProxyEndpointAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBProxyEndpointAddressWithOptions(request, runtime);
  }

  /**
   * 修改RDS实例数据库代理的代理数量
   * 
   * @param tmpReq - ModifyDBProxyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBProxyInstanceResponse
   */
  async modifyDBProxyInstanceWithOptions(tmpReq: $_model.ModifyDBProxyInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBProxyInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyDBProxyInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.DBProxyNodes)) {
      request.DBProxyNodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBProxyNodes, "DBProxyNodes", "json");
    }

    if (!$dara.isNull(tmpReq.migrateAZ)) {
      request.migrateAZShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.migrateAZ, "MigrateAZ", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBProxyEngineType)) {
      query["DBProxyEngineType"] = request.DBProxyEngineType;
    }

    if (!$dara.isNull(request.DBProxyInstanceNum)) {
      query["DBProxyInstanceNum"] = request.DBProxyInstanceNum;
    }

    if (!$dara.isNull(request.DBProxyInstanceType)) {
      query["DBProxyInstanceType"] = request.DBProxyInstanceType;
    }

    if (!$dara.isNull(request.DBProxyNodesShrink)) {
      query["DBProxyNodes"] = request.DBProxyNodesShrink;
    }

    if (!$dara.isNull(request.effectiveSpecificTime)) {
      query["EffectiveSpecificTime"] = request.effectiveSpecificTime;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.migrateAZShrink)) {
      query["MigrateAZ"] = request.migrateAZShrink;
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

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBProxyInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBProxyInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBProxyInstanceResponse({}));
  }

  /**
   * 修改RDS实例数据库代理的代理数量
   * 
   * @param request - ModifyDBProxyInstanceRequest
   * @returns ModifyDBProxyInstanceResponse
   */
  async modifyDBProxyInstance(request: $_model.ModifyDBProxyInstanceRequest): Promise<$_model.ModifyDBProxyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBProxyInstanceWithOptions(request, runtime);
  }

  /**
   * SQLServer实例修改DTC主机安全IP
   * 
   * @param request - ModifyDTCSecurityIpHostsForSQLServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDTCSecurityIpHostsForSQLServerResponse
   */
  async modifyDTCSecurityIpHostsForSQLServerWithOptions(request: $_model.ModifyDTCSecurityIpHostsForSQLServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDTCSecurityIpHostsForSQLServerResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityIpHosts)) {
      query["SecurityIpHosts"] = request.securityIpHosts;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.whiteListGroupName)) {
      query["WhiteListGroupName"] = request.whiteListGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDTCSecurityIpHostsForSQLServer",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDTCSecurityIpHostsForSQLServerResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDTCSecurityIpHostsForSQLServerResponse({}));
  }

  /**
   * SQLServer实例修改DTC主机安全IP
   * 
   * @param request - ModifyDTCSecurityIpHostsForSQLServerRequest
   * @returns ModifyDTCSecurityIpHostsForSQLServerResponse
   */
  async modifyDTCSecurityIpHostsForSQLServer(request: $_model.ModifyDTCSecurityIpHostsForSQLServerRequest): Promise<$_model.ModifyDTCSecurityIpHostsForSQLServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDTCSecurityIpHostsForSQLServerWithOptions(request, runtime);
  }

  /**
   * 设置实例存储空间自动扩容
   * 
   * @param request - ModifyDasInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDasInstanceConfigResponse
   */
  async modifyDasInstanceConfigWithOptions(request: $_model.ModifyDasInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDasInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.storageAutoScale)) {
      query["StorageAutoScale"] = request.storageAutoScale;
    }

    if (!$dara.isNull(request.storageThreshold)) {
      query["StorageThreshold"] = request.storageThreshold;
    }

    if (!$dara.isNull(request.storageUpperBound)) {
      query["StorageUpperBound"] = request.storageUpperBound;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDasInstanceConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDasInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDasInstanceConfigResponse({}));
  }

  /**
   * 设置实例存储空间自动扩容
   * 
   * @param request - ModifyDasInstanceConfigRequest
   * @returns ModifyDasInstanceConfigResponse
   */
  async modifyDasInstanceConfig(request: $_model.ModifyDasInstanceConfigRequest): Promise<$_model.ModifyDasInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDasInstanceConfigWithOptions(request, runtime);
  }

  /**
   * 修改数据库属性
   * 
   * @param request - ModifyDatabaseConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDatabaseConfigResponse
   */
  async modifyDatabaseConfigWithOptions(request: $_model.ModifyDatabaseConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDatabaseConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.databasePropertyName)) {
      query["DatabasePropertyName"] = request.databasePropertyName;
    }

    if (!$dara.isNull(request.databasePropertyValue)) {
      query["DatabasePropertyValue"] = request.databasePropertyValue;
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
      action: "ModifyDatabaseConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDatabaseConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDatabaseConfigResponse({}));
  }

  /**
   * 修改数据库属性
   * 
   * @param request - ModifyDatabaseConfigRequest
   * @returns ModifyDatabaseConfigResponse
   */
  async modifyDatabaseConfig(request: $_model.ModifyDatabaseConfigRequest): Promise<$_model.ModifyDatabaseConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDatabaseConfigWithOptions(request, runtime);
  }

  /**
   * 设置RDS实例数据库代理连接地址SSL加密
   * 
   * @param request - ModifyDbProxyInstanceSslRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDbProxyInstanceSslResponse
   */
  async modifyDbProxyInstanceSslWithOptions(request: $_model.ModifyDbProxyInstanceSslRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDbProxyInstanceSslResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBProxyEngineType)) {
      query["DBProxyEngineType"] = request.DBProxyEngineType;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.dbProxyConnectString)) {
      query["DbProxyConnectString"] = request.dbProxyConnectString;
    }

    if (!$dara.isNull(request.dbProxyEndpointId)) {
      query["DbProxyEndpointId"] = request.dbProxyEndpointId;
    }

    if (!$dara.isNull(request.dbProxySslEnabled)) {
      query["DbProxySslEnabled"] = request.dbProxySslEnabled;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDbProxyInstanceSsl",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDbProxyInstanceSslResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDbProxyInstanceSslResponse({}));
  }

  /**
   * 设置RDS实例数据库代理连接地址SSL加密
   * 
   * @param request - ModifyDbProxyInstanceSslRequest
   * @returns ModifyDbProxyInstanceSslResponse
   */
  async modifyDbProxyInstanceSsl(request: $_model.ModifyDbProxyInstanceSslRequest): Promise<$_model.ModifyDbProxyInstanceSslResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDbProxyInstanceSslWithOptions(request, runtime);
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
      version: "2014-08-15",
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
   * 修改RDS实例的可用性检测方式
   * 
   * @param request - ModifyHADiagnoseConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHADiagnoseConfigResponse
   */
  async modifyHADiagnoseConfigWithOptions(request: $_model.ModifyHADiagnoseConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHADiagnoseConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.tcpConnectionType)) {
      query["TcpConnectionType"] = request.tcpConnectionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHADiagnoseConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHADiagnoseConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHADiagnoseConfigResponse({}));
  }

  /**
   * 修改RDS实例的可用性检测方式
   * 
   * @param request - ModifyHADiagnoseConfigRequest
   * @returns ModifyHADiagnoseConfigResponse
   */
  async modifyHADiagnoseConfig(request: $_model.ModifyHADiagnoseConfigRequest): Promise<$_model.ModifyHADiagnoseConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHADiagnoseConfigWithOptions(request, runtime);
  }

  /**
   * 开启或关闭RDS实例的主备自动切换功能
   * 
   * @param request - ModifyHASwitchConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHASwitchConfigResponse
   */
  async modifyHASwitchConfigWithOptions(request: $_model.ModifyHASwitchConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHASwitchConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.HAConfig)) {
      query["HAConfig"] = request.HAConfig;
    }

    if (!$dara.isNull(request.manualHATime)) {
      query["ManualHATime"] = request.manualHATime;
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
      action: "ModifyHASwitchConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHASwitchConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHASwitchConfigResponse({}));
  }

  /**
   * 开启或关闭RDS实例的主备自动切换功能
   * 
   * @param request - ModifyHASwitchConfigRequest
   * @returns ModifyHASwitchConfigResponse
   */
  async modifyHASwitchConfig(request: $_model.ModifyHASwitchConfigRequest): Promise<$_model.ModifyHASwitchConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHASwitchConfigWithOptions(request, runtime);
  }

  /**
   * Modify a Data Import Job for an RDS MySQL Instance with Native Replication
   * 
   * @remarks
   * Modifies a data import job for an RDS MySQL instance with native replication.
   * 
   * @param request - ModifyImportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyImportTaskResponse
   */
  async modifyImportTaskWithOptions(request: $_model.ModifyImportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyImportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyImportTask",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyImportTaskResponse>(await this.callApi(params, req, runtime), new $_model.ModifyImportTaskResponse({}));
  }

  /**
   * Modify a Data Import Job for an RDS MySQL Instance with Native Replication
   * 
   * @remarks
   * Modifies a data import job for an RDS MySQL instance with native replication.
   * 
   * @param request - ModifyImportTaskRequest
   * @returns ModifyImportTaskResponse
   */
  async modifyImportTask(request: $_model.ModifyImportTaskRequest): Promise<$_model.ModifyImportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyImportTaskWithOptions(request, runtime);
  }

  /**
   * 修改设置实例是否自动续费
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

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      version: "2014-08-15",
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
   * 修改设置实例是否自动续费
   * 
   * @param request - ModifyInstanceAutoRenewalAttributeRequest
   * @returns ModifyInstanceAutoRenewalAttributeResponse
   */
  async modifyInstanceAutoRenewalAttribute(request: $_model.ModifyInstanceAutoRenewalAttributeRequest): Promise<$_model.ModifyInstanceAutoRenewalAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  /**
   * 修改RDS跨地域备份设置
   * 
   * @param request - ModifyInstanceCrossBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceCrossBackupPolicyResponse
   */
  async modifyInstanceCrossBackupPolicyWithOptions(request: $_model.ModifyInstanceCrossBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceCrossBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupEnabled)) {
      query["BackupEnabled"] = request.backupEnabled;
    }

    if (!$dara.isNull(request.crossBackupRegion)) {
      query["CrossBackupRegion"] = request.crossBackupRegion;
    }

    if (!$dara.isNull(request.crossBackupType)) {
      query["CrossBackupType"] = request.crossBackupType;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.logBackupEnabled)) {
      query["LogBackupEnabled"] = request.logBackupEnabled;
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

    if (!$dara.isNull(request.retentType)) {
      query["RetentType"] = request.retentType;
    }

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceCrossBackupPolicy",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceCrossBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceCrossBackupPolicyResponse({}));
  }

  /**
   * 修改RDS跨地域备份设置
   * 
   * @param request - ModifyInstanceCrossBackupPolicyRequest
   * @returns ModifyInstanceCrossBackupPolicyResponse
   */
  async modifyInstanceCrossBackupPolicy(request: $_model.ModifyInstanceCrossBackupPolicyRequest): Promise<$_model.ModifyInstanceCrossBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceCrossBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the encryption or desensitization rule for a specified instance.
   * 
   * @remarks
   * ## Request description
   * - Before using this API, ensure that you have enabled the column encryption service in DAS Security Center.
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and enable the column encryption service before using it again.
   * 
   * @param tmpReq - ModifyMaskingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMaskingRulesResponse
   */
  async modifyMaskingRulesWithOptions(tmpReq: $_model.ModifyMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaskingRulesResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyMaskingRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ruleConfig)) {
      request.ruleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ruleConfig, "RuleConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.defaultAlgo)) {
      query["DefaultAlgo"] = request.defaultAlgo;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.maskingAlgo)) {
      query["MaskingAlgo"] = request.maskingAlgo;
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

    if (!$dara.isNull(request.ruleConfigShrink)) {
      query["RuleConfig"] = request.ruleConfigShrink;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMaskingRules",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMaskingRulesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMaskingRulesResponse({}));
  }

  /**
   * Modifies the encryption or desensitization rule for a specified instance.
   * 
   * @remarks
   * ## Request description
   * - Before using this API, ensure that you have enabled the column encryption service in DAS Security Center.
   * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking the API, go to the DAS (Database Autonomy Service) Security Center to purchase and enable the column encryption service before using it again.
   * 
   * @param request - ModifyMaskingRulesRequest
   * @returns ModifyMaskingRulesResponse
   */
  async modifyMaskingRules(request: $_model.ModifyMaskingRulesRequest): Promise<$_model.ModifyMaskingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMaskingRulesWithOptions(request, runtime);
  }

  /**
   * 修改PostgreSQL数据库的HBA配置文件
   * 
   * @param request - ModifyPGHbaConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPGHbaConfigResponse
   */
  async modifyPGHbaConfigWithOptions(request: $_model.ModifyPGHbaConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPGHbaConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.hbaItem)) {
      query["HbaItem"] = request.hbaItem;
    }

    if (!$dara.isNull(request.opsType)) {
      query["OpsType"] = request.opsType;
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
      action: "ModifyPGHbaConfig",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPGHbaConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPGHbaConfigResponse({}));
  }

  /**
   * 修改PostgreSQL数据库的HBA配置文件
   * 
   * @param request - ModifyPGHbaConfigRequest
   * @returns ModifyPGHbaConfigResponse
   */
  async modifyPGHbaConfig(request: $_model.ModifyPGHbaConfigRequest): Promise<$_model.ModifyPGHbaConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPGHbaConfigWithOptions(request, runtime);
  }

  /**
   * 修改数据库参数
   * 
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

    if (!$dara.isNull(request.forcerestart)) {
      query["Forcerestart"] = request.forcerestart;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      action: "ModifyParameter",
      version: "2014-08-15",
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
   * 修改数据库参数
   * 
   * @param request - ModifyParameterRequest
   * @returns ModifyParameterResponse
   */
  async modifyParameter(request: $_model.ModifyParameterRequest): Promise<$_model.ModifyParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyParameterWithOptions(request, runtime);
  }

  /**
   * 修改RDS参数模板
   * 
   * @param request - ModifyParameterGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyParameterGroupResponse
   */
  async modifyParameterGroupWithOptions(request: $_model.ModifyParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyParameterGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
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
      action: "ModifyParameterGroup",
      version: "2014-08-15",
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
   * 修改RDS参数模板
   * 
   * @param request - ModifyParameterGroupRequest
   * @returns ModifyParameterGroupResponse
   */
  async modifyParameterGroup(request: $_model.ModifyParameterGroupRequest): Promise<$_model.ModifyParameterGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyParameterGroupWithOptions(request, runtime);
  }

  /**
   * Modify the effective period in a scheduled task for parameter modification
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the Function Documentation to fully understand the prerequisites and potential Impact of using this API before performing any operation.
   * - [Configure instance parameters for RDS MySQL](https://help.aliyun.com/document_detail/96063.html)
   * - [Configure instance parameters for RDS PostgreSQL](https://help.aliyun.com/document_detail/96751.html)
   * 
   * @param request - ModifyParameterTimedScheduleTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyParameterTimedScheduleTaskResponse
   */
  async modifyParameterTimedScheduleTaskWithOptions(request: $_model.ModifyParameterTimedScheduleTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyParameterTimedScheduleTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyParameterTimedScheduleTask",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyParameterTimedScheduleTaskResponse>(await this.callApi(params, req, runtime), new $_model.ModifyParameterTimedScheduleTaskResponse({}));
  }

  /**
   * Modify the effective period in a scheduled task for parameter modification
   * 
   * @remarks
   * ### Supported Engines
   * - RDS MySQL
   * - RDS PostgreSQL
   * ### Related Function Documentation
   * >Notice: Before using this API, carefully read the Function Documentation to fully understand the prerequisites and potential Impact of using this API before performing any operation.
   * - [Configure instance parameters for RDS MySQL](https://help.aliyun.com/document_detail/96063.html)
   * - [Configure instance parameters for RDS PostgreSQL](https://help.aliyun.com/document_detail/96751.html)
   * 
   * @param request - ModifyParameterTimedScheduleTaskRequest
   * @returns ModifyParameterTimedScheduleTaskResponse
   */
  async modifyParameterTimedScheduleTask(request: $_model.ModifyParameterTimedScheduleTaskRequest): Promise<$_model.ModifyParameterTimedScheduleTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyParameterTimedScheduleTaskWithOptions(request, runtime);
  }

  /**
   * 修改部署集的名称和描述信息
   * 
   * @param request - ModifyRCDeploymentSetAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCDeploymentSetAttributeResponse
   */
  async modifyRCDeploymentSetAttributeWithOptions(request: $_model.ModifyRCDeploymentSetAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCDeploymentSetAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deploymentSetId)) {
      query["DeploymentSetId"] = request.deploymentSetId;
    }

    if (!$dara.isNull(request.deploymentSetName)) {
      query["DeploymentSetName"] = request.deploymentSetName;
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
      action: "ModifyRCDeploymentSetAttribute",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCDeploymentSetAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCDeploymentSetAttributeResponse({}));
  }

  /**
   * 修改部署集的名称和描述信息
   * 
   * @param request - ModifyRCDeploymentSetAttributeRequest
   * @returns ModifyRCDeploymentSetAttributeResponse
   */
  async modifyRCDeploymentSetAttribute(request: $_model.ModifyRCDeploymentSetAttributeRequest): Promise<$_model.ModifyRCDeploymentSetAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCDeploymentSetAttributeWithOptions(request, runtime);
  }

  /**
   * Modify the name, description, whether to release with the instance, whether to delete automatic snapshots when the disk is deleted, whether to enable the automatic snapshot policy, and whether to enable the performance burst feature for an Elastic Block Storage device.
   * 
   * @remarks
   * You can invoke the DiskId parameter to modify properties of an Elastic Block Storage device, such as its name, description, and whether it is released with the instance.
   * 
   * @param request - ModifyRCDiskAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCDiskAttributeResponse
   */
  async modifyRCDiskAttributeWithOptions(request: $_model.ModifyRCDiskAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCDiskAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.burstingEnabled)) {
      query["BurstingEnabled"] = request.burstingEnabled;
    }

    if (!$dara.isNull(request.deleteWithInstance)) {
      query["DeleteWithInstance"] = request.deleteWithInstance;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.diskName)) {
      query["DiskName"] = request.diskName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRCDiskAttribute",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCDiskAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCDiskAttributeResponse({}));
  }

  /**
   * Modify the name, description, whether to release with the instance, whether to delete automatic snapshots when the disk is deleted, whether to enable the automatic snapshot policy, and whether to enable the performance burst feature for an Elastic Block Storage device.
   * 
   * @remarks
   * You can invoke the DiskId parameter to modify properties of an Elastic Block Storage device, such as its name, description, and whether it is released with the instance.
   * 
   * @param request - ModifyRCDiskAttributeRequest
   * @returns ModifyRCDiskAttributeResponse
   */
  async modifyRCDiskAttribute(request: $_model.ModifyRCDiskAttributeRequest): Promise<$_model.ModifyRCDiskAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCDiskAttributeWithOptions(request, runtime);
  }

  /**
   * 修改RDS用户磁盘付费类型
   * 
   * @param request - ModifyRCDiskChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCDiskChargeTypeResponse
   */
  async modifyRCDiskChargeTypeWithOptions(request: $_model.ModifyRCDiskChargeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCDiskChargeTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
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

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.promotionCode)) {
      query["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRCDiskChargeType",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCDiskChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCDiskChargeTypeResponse({}));
  }

  /**
   * 修改RDS用户磁盘付费类型
   * 
   * @param request - ModifyRCDiskChargeTypeRequest
   * @returns ModifyRCDiskChargeTypeResponse
   */
  async modifyRCDiskChargeType(request: $_model.ModifyRCDiskChargeTypeRequest): Promise<$_model.ModifyRCDiskChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCDiskChargeTypeWithOptions(request, runtime);
  }

  /**
   * 变更云盘类型或性能级别
   * 
   * @param request - ModifyRCDiskSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCDiskSpecResponse
   */
  async modifyRCDiskSpecWithOptions(request: $_model.ModifyRCDiskSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCDiskSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.diskCategory)) {
      query["DiskCategory"] = request.diskCategory;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.performanceLevel)) {
      query["PerformanceLevel"] = request.performanceLevel;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRCDiskSpec",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCDiskSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCDiskSpecResponse({}));
  }

  /**
   * 变更云盘类型或性能级别
   * 
   * @param request - ModifyRCDiskSpecRequest
   * @returns ModifyRCDiskSpecResponse
   */
  async modifyRCDiskSpec(request: $_model.ModifyRCDiskSpecRequest): Promise<$_model.ModifyRCDiskSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCDiskSpecWithOptions(request, runtime);
  }

  /**
   * 查询RDS用户专属主机实例
   * 
   * @param request - ModifyRCElasticScalingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCElasticScalingResponse
   */
  async modifyRCElasticScalingWithOptions(request: $_model.ModifyRCElasticScalingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCElasticScalingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scalingEnabled)) {
      query["ScalingEnabled"] = request.scalingEnabled;
    }

    if (!$dara.isNull(request.scheduledRule)) {
      query["ScheduledRule"] = request.scheduledRule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRCElasticScaling",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCElasticScalingResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCElasticScalingResponse({}));
  }

  /**
   * 查询RDS用户专属主机实例
   * 
   * @param request - ModifyRCElasticScalingRequest
   * @returns ModifyRCElasticScalingResponse
   */
  async modifyRCElasticScaling(request: $_model.ModifyRCElasticScalingRequest): Promise<$_model.ModifyRCElasticScalingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCElasticScalingWithOptions(request, runtime);
  }

  /**
   * ModifyRCInstance
   * 
   * @remarks
   * Before using this API, ensure that you fully understand the metering method, Pricing, and refund rules for decreasing the quota of RDS Custom instances.
   * When invoking this API, note the following:
   * - You cannot modify the instance type of an expired instance. You can renew the instance and try again.
   * - Only **Standard Edition disk instances** support changing the instance type.
   * - When upgrading or decreasing the quota of the instance type, note the following:
   *   - The instance must be in the **running** (Running) or **stopped** (Stopped) status.
   *   - The price difference between the original and new instance types will be refunded to your original payment method. Coupons already used will not be returned.
   * 
   * @param request - ModifyRCInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCInstanceResponse
   */
  async modifyRCInstanceWithOptions(request: $_model.ModifyRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.promotionCode)) {
      query["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.rebootTime)) {
      query["RebootTime"] = request.rebootTime;
    }

    if (!$dara.isNull(request.rebootWhenFinished)) {
      query["RebootWhenFinished"] = request.rebootWhenFinished;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRCInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCInstanceResponse({}));
  }

  /**
   * ModifyRCInstance
   * 
   * @remarks
   * Before using this API, ensure that you fully understand the metering method, Pricing, and refund rules for decreasing the quota of RDS Custom instances.
   * When invoking this API, note the following:
   * - You cannot modify the instance type of an expired instance. You can renew the instance and try again.
   * - Only **Standard Edition disk instances** support changing the instance type.
   * - When upgrading or decreasing the quota of the instance type, note the following:
   *   - The instance must be in the **running** (Running) or **stopped** (Stopped) status.
   *   - The price difference between the original and new instance types will be refunded to your original payment method. Coupons already used will not be returned.
   * 
   * @param request - ModifyRCInstanceRequest
   * @returns ModifyRCInstanceResponse
   */
  async modifyRCInstance(request: $_model.ModifyRCInstanceRequest): Promise<$_model.ModifyRCInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCInstanceWithOptions(request, runtime);
  }

  /**
   * 修改rds custom实例的部分属性
   * 
   * @param tmpReq - ModifyRCInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCInstanceAttributeResponse
   */
  async modifyRCInstanceAttributeWithOptions(tmpReq: $_model.ModifyRCInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceAttributeResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyRCInstanceAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    if (!$dara.isNull(tmpReq.securityGroupIds)) {
      request.securityGroupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityGroupIds, "SecurityGroupIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.enableJumboFrame)) {
      query["EnableJumboFrame"] = request.enableJumboFrame;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.reboot)) {
      query["Reboot"] = request.reboot;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.securityGroupIdsShrink)) {
      query["SecurityGroupIds"] = request.securityGroupIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRCInstanceAttribute",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCInstanceAttributeResponse({}));
  }

  /**
   * 修改rds custom实例的部分属性
   * 
   * @param request - ModifyRCInstanceAttributeRequest
   * @returns ModifyRCInstanceAttributeResponse
   */
  async modifyRCInstanceAttribute(request: $_model.ModifyRCInstanceAttributeRequest): Promise<$_model.ModifyRCInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 修改RDS用户专属主机实例付费类型
   * 
   * @param request - ModifyRCInstanceChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCInstanceChargeTypeResponse
   */
  async modifyRCInstanceChargeTypeWithOptions(request: $_model.ModifyRCInstanceChargeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceChargeTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
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

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.includeDataDisks)) {
      query["IncludeDataDisks"] = request.includeDataDisks;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.promotionCode)) {
      query["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRCInstanceChargeType",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCInstanceChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCInstanceChargeTypeResponse({}));
  }

  /**
   * 修改RDS用户专属主机实例付费类型
   * 
   * @param request - ModifyRCInstanceChargeTypeRequest
   * @returns ModifyRCInstanceChargeTypeResponse
   */
  async modifyRCInstanceChargeType(request: $_model.ModifyRCInstanceChargeTypeRequest): Promise<$_model.ModifyRCInstanceChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCInstanceChargeTypeWithOptions(request, runtime);
  }

  /**
   * 修改RC实例描述
   * 
   * @param request - ModifyRCInstanceDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCInstanceDescriptionResponse
   */
  async modifyRCInstanceDescriptionWithOptions(request: $_model.ModifyRCInstanceDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceDescription)) {
      query["InstanceDescription"] = request.instanceDescription;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRCInstanceDescription",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCInstanceDescriptionResponse({}));
  }

  /**
   * 修改RC实例描述
   * 
   * @param request - ModifyRCInstanceDescriptionRequest
   * @returns ModifyRCInstanceDescriptionResponse
   */
  async modifyRCInstanceDescription(request: $_model.ModifyRCInstanceDescriptionRequest): Promise<$_model.ModifyRCInstanceDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * 修改RDS Custom实例密钥对
   * 
   * @param request - ModifyRCInstanceKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCInstanceKeyPairResponse
   */
  async modifyRCInstanceKeyPairWithOptions(request: $_model.ModifyRCInstanceKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.reboot)) {
      query["Reboot"] = request.reboot;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRCInstanceKeyPair",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCInstanceKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCInstanceKeyPairResponse({}));
  }

  /**
   * 修改RDS Custom实例密钥对
   * 
   * @param request - ModifyRCInstanceKeyPairRequest
   * @returns ModifyRCInstanceKeyPairResponse
   */
  async modifyRCInstanceKeyPair(request: $_model.ModifyRCInstanceKeyPairRequest): Promise<$_model.ModifyRCInstanceKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCInstanceKeyPairWithOptions(request, runtime);
  }

  /**
   * 修改RDS Custom实例的公网配置
   * 
   * @param request - ModifyRCInstanceNetworkSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCInstanceNetworkSpecResponse
   */
  async modifyRCInstanceNetworkSpecWithOptions(request: $_model.ModifyRCInstanceNetworkSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceNetworkSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.internetMaxBandwidthOut)) {
      query["InternetMaxBandwidthOut"] = request.internetMaxBandwidthOut;
    }

    if (!$dara.isNull(request.networkChargeType)) {
      query["NetworkChargeType"] = request.networkChargeType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRCInstanceNetworkSpec",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCInstanceNetworkSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCInstanceNetworkSpecResponse({}));
  }

  /**
   * 修改RDS Custom实例的公网配置
   * 
   * @param request - ModifyRCInstanceNetworkSpecRequest
   * @returns ModifyRCInstanceNetworkSpecResponse
   */
  async modifyRCInstanceNetworkSpec(request: $_model.ModifyRCInstanceNetworkSpecRequest): Promise<$_model.ModifyRCInstanceNetworkSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCInstanceNetworkSpecWithOptions(request, runtime);
  }

  /**
   * 修改RC实例安全组
   * 
   * @param request - ModifyRCInstanceVpcAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCInstanceVpcAttributeResponse
   */
  async modifyRCInstanceVpcAttributeWithOptions(request: $_model.ModifyRCInstanceVpcAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceVpcAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRCInstanceVpcAttribute",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCInstanceVpcAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCInstanceVpcAttributeResponse({}));
  }

  /**
   * 修改RC实例安全组
   * 
   * @param request - ModifyRCInstanceVpcAttributeRequest
   * @returns ModifyRCInstanceVpcAttributeResponse
   */
  async modifyRCInstanceVpcAttribute(request: $_model.ModifyRCInstanceVpcAttributeRequest): Promise<$_model.ModifyRCInstanceVpcAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCInstanceVpcAttributeWithOptions(request, runtime);
  }

  /**
   * 修改RC安全组规则
   * 
   * @param request - ModifyRCSecurityGroupPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCSecurityGroupPermissionResponse
   */
  async modifyRCSecurityGroupPermissionWithOptions(request: $_model.ModifyRCSecurityGroupPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCSecurityGroupPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destCidrIp)) {
      query["DestCidrIp"] = request.destCidrIp;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.securityGroupRuleId)) {
      query["SecurityGroupRuleId"] = request.securityGroupRuleId;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    if (!$dara.isNull(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRCSecurityGroupPermission",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCSecurityGroupPermissionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCSecurityGroupPermissionResponse({}));
  }

  /**
   * 修改RC安全组规则
   * 
   * @param request - ModifyRCSecurityGroupPermissionRequest
   * @returns ModifyRCSecurityGroupPermissionResponse
   */
  async modifyRCSecurityGroupPermission(request: $_model.ModifyRCSecurityGroupPermissionRequest): Promise<$_model.ModifyRCSecurityGroupPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCSecurityGroupPermissionWithOptions(request, runtime);
  }

  /**
   * 修改RCVCluster
   * 
   * @param tmpReq - ModifyRCVClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRCVClusterResponse
   */
  async modifyRCVClusterWithOptions(tmpReq: $_model.ModifyRCVClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCVClusterResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyRCVClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.supportDiskPerformanceLevel)) {
      request.supportDiskPerformanceLevelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.supportDiskPerformanceLevel, "SupportDiskPerformanceLevel", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.supportDiskPerformanceLevelShrink)) {
      query["SupportDiskPerformanceLevel"] = request.supportDiskPerformanceLevelShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRCVCluster",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRCVClusterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRCVClusterResponse({}));
  }

  /**
   * 修改RCVCluster
   * 
   * @param request - ModifyRCVClusterRequest
   * @returns ModifyRCVClusterResponse
   */
  async modifyRCVCluster(request: $_model.ModifyRCVClusterRequest): Promise<$_model.ModifyRCVClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRCVClusterWithOptions(request, runtime);
  }

  /**
   * 修改读写分离地址
   * 
   * @param request - ModifyReadWriteSplittingConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyReadWriteSplittingConnectionResponse
   */
  async modifyReadWriteSplittingConnectionWithOptions(request: $_model.ModifyReadWriteSplittingConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyReadWriteSplittingConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.distributionType)) {
      query["DistributionType"] = request.distributionType;
    }

    if (!$dara.isNull(request.maxDelayTime)) {
      query["MaxDelayTime"] = request.maxDelayTime;
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

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyReadWriteSplittingConnection",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyReadWriteSplittingConnectionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyReadWriteSplittingConnectionResponse({}));
  }

  /**
   * 修改读写分离地址
   * 
   * @param request - ModifyReadWriteSplittingConnectionRequest
   * @returns ModifyReadWriteSplittingConnectionResponse
   */
  async modifyReadWriteSplittingConnection(request: $_model.ModifyReadWriteSplittingConnectionRequest): Promise<$_model.ModifyReadWriteSplittingConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyReadWriteSplittingConnectionWithOptions(request, runtime);
  }

  /**
   * 设置只读实例延迟复制时间
   * 
   * @param request - ModifyReadonlyInstanceDelayReplicationTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyReadonlyInstanceDelayReplicationTimeResponse
   */
  async modifyReadonlyInstanceDelayReplicationTimeWithOptions(request: $_model.ModifyReadonlyInstanceDelayReplicationTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyReadonlyInstanceDelayReplicationTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.readSQLReplicationTime)) {
      query["ReadSQLReplicationTime"] = request.readSQLReplicationTime;
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
      action: "ModifyReadonlyInstanceDelayReplicationTime",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyReadonlyInstanceDelayReplicationTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyReadonlyInstanceDelayReplicationTimeResponse({}));
  }

  /**
   * 设置只读实例延迟复制时间
   * 
   * @param request - ModifyReadonlyInstanceDelayReplicationTimeRequest
   * @returns ModifyReadonlyInstanceDelayReplicationTimeResponse
   */
  async modifyReadonlyInstanceDelayReplicationTime(request: $_model.ModifyReadonlyInstanceDelayReplicationTimeRequest): Promise<$_model.ModifyReadonlyInstanceDelayReplicationTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyReadonlyInstanceDelayReplicationTimeWithOptions(request, runtime);
  }

  /**
   * 将RDS实例移动到指定资源组
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

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyResourceGroup",
      version: "2014-08-15",
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
   * 将RDS实例移动到指定资源组
   * 
   * @param request - ModifyResourceGroupRequest
   * @returns ModifyResourceGroupResponse
   */
  async modifyResourceGroup(request: $_model.ModifyResourceGroupRequest): Promise<$_model.ModifyResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyResourceGroupWithOptions(request, runtime);
  }

  /**
   * 修改SQL收集策略
   * 
   * @param request - ModifySQLCollectorPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySQLCollectorPolicyResponse
   */
  async modifySQLCollectorPolicyWithOptions(request: $_model.ModifySQLCollectorPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySQLCollectorPolicyResponse> {
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.SQLCollectorStatus)) {
      query["SQLCollectorStatus"] = request.SQLCollectorStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySQLCollectorPolicy",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySQLCollectorPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifySQLCollectorPolicyResponse({}));
  }

  /**
   * 修改SQL收集策略
   * 
   * @param request - ModifySQLCollectorPolicyRequest
   * @returns ModifySQLCollectorPolicyResponse
   */
  async modifySQLCollectorPolicy(request: $_model.ModifySQLCollectorPolicyRequest): Promise<$_model.ModifySQLCollectorPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySQLCollectorPolicyWithOptions(request, runtime);
  }

  /**
   * 修改RDS实例的SQL洞察日志保存时长
   * 
   * @param request - ModifySQLCollectorRetentionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySQLCollectorRetentionResponse
   */
  async modifySQLCollectorRetentionWithOptions(request: $_model.ModifySQLCollectorRetentionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySQLCollectorRetentionResponse> {
    request.validate();
    let query = { };
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
      action: "ModifySQLCollectorRetention",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySQLCollectorRetentionResponse>(await this.callApi(params, req, runtime), new $_model.ModifySQLCollectorRetentionResponse({}));
  }

  /**
   * 修改RDS实例的SQL洞察日志保存时长
   * 
   * @param request - ModifySQLCollectorRetentionRequest
   * @returns ModifySQLCollectorRetentionResponse
   */
  async modifySQLCollectorRetention(request: $_model.ModifySQLCollectorRetentionRequest): Promise<$_model.ModifySQLCollectorRetentionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySQLCollectorRetentionWithOptions(request, runtime);
  }

  /**
   * 修改RDS实例的安全组配置
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
      version: "2014-08-15",
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
   * 修改RDS实例的安全组配置
   * 
   * @param request - ModifySecurityGroupConfigurationRequest
   * @returns ModifySecurityGroupConfigurationResponse
   */
  async modifySecurityGroupConfiguration(request: $_model.ModifySecurityGroupConfigurationRequest): Promise<$_model.ModifySecurityGroupConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityGroupConfigurationWithOptions(request, runtime);
  }

  /**
   * 修改RDS的白名单列表
   * 
   * @param request - ModifySecurityIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIpsWithOptions(request: $_model.ModifySecurityIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceIPArrayAttribute)) {
      query["DBInstanceIPArrayAttribute"] = request.DBInstanceIPArrayAttribute;
    }

    if (!$dara.isNull(request.DBInstanceIPArrayName)) {
      query["DBInstanceIPArrayName"] = request.DBInstanceIPArrayName;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.freshWhiteListReadins)) {
      query["FreshWhiteListReadins"] = request.freshWhiteListReadins;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityIPType)) {
      query["SecurityIPType"] = request.securityIPType;
    }

    if (!$dara.isNull(request.securityIps)) {
      query["SecurityIps"] = request.securityIps;
    }

    if (!$dara.isNull(request.whitelistNetworkType)) {
      query["WhitelistNetworkType"] = request.whitelistNetworkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityIps",
      version: "2014-08-15",
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
   * 修改RDS的白名单列表
   * 
   * @param request - ModifySecurityIpsRequest
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIps(request: $_model.ModifySecurityIpsRequest): Promise<$_model.ModifySecurityIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  /**
   * 任务中心修改任务信息
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
      version: "2014-08-15",
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
   * 任务中心修改任务信息
   * 
   * @param request - ModifyTaskInfoRequest
   * @returns ModifyTaskInfoResponse
   */
  async modifyTaskInfo(request: $_model.ModifyTaskInfoRequest): Promise<$_model.ModifyTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTaskInfoWithOptions(request, runtime);
  }

  /**
   * 修改白名单模板
   * 
   * @param request - ModifyWhitelistTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWhitelistTemplateResponse
   */
  async modifyWhitelistTemplateWithOptions(request: $_model.ModifyWhitelistTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWhitelistTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipWhitelist)) {
      query["IpWhitelist"] = request.ipWhitelist;
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

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWhitelistTemplate",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWhitelistTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWhitelistTemplateResponse({}));
  }

  /**
   * 修改白名单模板
   * 
   * @param request - ModifyWhitelistTemplateRequest
   * @returns ModifyWhitelistTemplateResponse
   */
  async modifyWhitelistTemplate(request: $_model.ModifyWhitelistTemplateRequest): Promise<$_model.ModifyWhitelistTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWhitelistTemplateWithOptions(request, runtime);
  }

  /**
   * Precheck for deleting a node and creating an order
   * 
   * @param tmpReq - PreCheckCreateOrderForDeleteDBNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreCheckCreateOrderForDeleteDBNodesResponse
   */
  async preCheckCreateOrderForDeleteDBNodesWithOptions(tmpReq: $_model.PreCheckCreateOrderForDeleteDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreCheckCreateOrderForDeleteDBNodesResponse> {
    tmpReq.validate();
    let request = new $_model.PreCheckCreateOrderForDeleteDBNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.DBNodeId)) {
      request.DBNodeIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBNodeId, "DBNodeId", "json");
    }

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

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBNodeIdShrink)) {
      query["DBNodeId"] = request.DBNodeIdShrink;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.promotionCode)) {
      query["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
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
      action: "PreCheckCreateOrderForDeleteDBNodes",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreCheckCreateOrderForDeleteDBNodesResponse>(await this.callApi(params, req, runtime), new $_model.PreCheckCreateOrderForDeleteDBNodesResponse({}));
  }

  /**
   * Precheck for deleting a node and creating an order
   * 
   * @param request - PreCheckCreateOrderForDeleteDBNodesRequest
   * @returns PreCheckCreateOrderForDeleteDBNodesResponse
   */
  async preCheckCreateOrderForDeleteDBNodes(request: $_model.PreCheckCreateOrderForDeleteDBNodesRequest): Promise<$_model.PreCheckCreateOrderForDeleteDBNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.preCheckCreateOrderForDeleteDBNodesWithOptions(request, runtime);
  }

  /**
   * Checks whether DuckDB-based analytical instances can be created for the specified RDS for PostgreSQL primary instance. If DuckDB-based analytical instances cannot be created, this operation returns the failure causes and provides solutions or recommended specification values.
   * 
   * @remarks
   * ### 适用引擎
   * RDS PostgreSQL
   * ### 相关功能文档
   * [DuckDB分析实例](https://help.aliyun.com/document_detail/2977241.html)
   * 
   * @param request - PrecheckDuckDBDependencyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PrecheckDuckDBDependencyResponse
   */
  async precheckDuckDBDependencyWithOptions(request: $_model.PrecheckDuckDBDependencyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PrecheckDuckDBDependencyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.targetMode)) {
      query["TargetMode"] = request.targetMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PrecheckDuckDBDependency",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PrecheckDuckDBDependencyResponse>(await this.callApi(params, req, runtime), new $_model.PrecheckDuckDBDependencyResponse({}));
  }

  /**
   * Checks whether DuckDB-based analytical instances can be created for the specified RDS for PostgreSQL primary instance. If DuckDB-based analytical instances cannot be created, this operation returns the failure causes and provides solutions or recommended specification values.
   * 
   * @remarks
   * ### 适用引擎
   * RDS PostgreSQL
   * ### 相关功能文档
   * [DuckDB分析实例](https://help.aliyun.com/document_detail/2977241.html)
   * 
   * @param request - PrecheckDuckDBDependencyRequest
   * @returns PrecheckDuckDBDependencyResponse
   */
  async precheckDuckDBDependency(request: $_model.PrecheckDuckDBDependencyRequest): Promise<$_model.PrecheckDuckDBDependencyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.precheckDuckDBDependencyWithOptions(request, runtime);
  }

  /**
   * 清理RDS实例本地日志
   * 
   * @param request - PurgeDBInstanceLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PurgeDBInstanceLogResponse
   */
  async purgeDBInstanceLogWithOptions(request: $_model.PurgeDBInstanceLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PurgeDBInstanceLogResponse> {
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
      action: "PurgeDBInstanceLog",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PurgeDBInstanceLogResponse>(await this.callApi(params, req, runtime), new $_model.PurgeDBInstanceLogResponse({}));
  }

  /**
   * 清理RDS实例本地日志
   * 
   * @param request - PurgeDBInstanceLogRequest
   * @returns PurgeDBInstanceLogResponse
   */
  async purgeDBInstanceLog(request: $_model.PurgeDBInstanceLogRequest): Promise<$_model.PurgeDBInstanceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.purgeDBInstanceLogWithOptions(request, runtime);
  }

  /**
   * RDS通知消息查询
   * 
   * @param request - QueryNotifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryNotifyResponse
   */
  async queryNotifyWithOptions(request: $_model.QueryNotifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryNotifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      body["From"] = request.from;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.to)) {
      body["To"] = request.to;
    }

    if (!$dara.isNull(request.withConfirmed)) {
      body["WithConfirmed"] = request.withConfirmed;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryNotify",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryNotifyResponse>(await this.callApi(params, req, runtime), new $_model.QueryNotifyResponse({}));
  }

  /**
   * RDS通知消息查询
   * 
   * @param request - QueryNotifyRequest
   * @returns QueryNotifyResponse
   */
  async queryNotify(request: $_model.QueryNotifyRequest): Promise<$_model.QueryNotifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryNotifyWithOptions(request, runtime);
  }

  /**
   * This API is used to query RDS bot hot spot questions.
   * 
   * @param request - QueryRecommendByCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecommendByCodeResponse
   */
  async queryRecommendByCodeWithOptions(request: $_model.QueryRecommendByCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecommendByCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
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
      action: "QueryRecommendByCode",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecommendByCodeResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecommendByCodeResponse({}));
  }

  /**
   * This API is used to query RDS bot hot spot questions.
   * 
   * @param request - QueryRecommendByCodeRequest
   * @returns QueryRecommendByCodeResponse
   */
  async queryRecommendByCode(request: $_model.QueryRecommendByCodeRequest): Promise<$_model.QueryRecommendByCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecommendByCodeWithOptions(request, runtime);
  }

  /**
   * 创建服务关联角色和开租
   * 
   * @param request - RdsCustomInitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RdsCustomInitResponse
   */
  async rdsCustomInitWithOptions(request: $_model.RdsCustomInitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RdsCustomInitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceLinkedRole)) {
      query["ServiceLinkedRole"] = request.serviceLinkedRole;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RdsCustomInit",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RdsCustomInitResponse>(await this.callApi(params, req, runtime), new $_model.RdsCustomInitResponse({}));
  }

  /**
   * 创建服务关联角色和开租
   * 
   * @param request - RdsCustomInitRequest
   * @returns RdsCustomInitResponse
   */
  async rdsCustomInit(request: $_model.RdsCustomInitRequest): Promise<$_model.RdsCustomInitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rdsCustomInitWithOptions(request, runtime);
  }

  /**
   * 重启RDS用户专属主机实例
   * 
   * @param request - RebootRCInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootRCInstanceResponse
   */
  async rebootRCInstanceWithOptions(request: $_model.RebootRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootRCInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.rebootTime)) {
      query["RebootTime"] = request.rebootTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootRCInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootRCInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RebootRCInstanceResponse({}));
  }

  /**
   * 重启RDS用户专属主机实例
   * 
   * @param request - RebootRCInstanceRequest
   * @returns RebootRCInstanceResponse
   */
  async rebootRCInstance(request: $_model.RebootRCInstanceRequest): Promise<$_model.RebootRCInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootRCInstanceWithOptions(request, runtime);
  }

  /**
   * 批量重启RC实例
   * 
   * @param tmpReq - RebootRCInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootRCInstancesResponse
   */
  async rebootRCInstancesWithOptions(tmpReq: $_model.RebootRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootRCInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.RebootRCInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.batchOptimization)) {
      query["BatchOptimization"] = request.batchOptimization;
    }

    if (!$dara.isNull(request.forceReboot)) {
      query["ForceReboot"] = request.forceReboot;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.rebootTime)) {
      query["RebootTime"] = request.rebootTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootRCInstances",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootRCInstancesResponse>(await this.callApi(params, req, runtime), new $_model.RebootRCInstancesResponse({}));
  }

  /**
   * 批量重启RC实例
   * 
   * @param request - RebootRCInstancesRequest
   * @returns RebootRCInstancesResponse
   */
  async rebootRCInstances(request: $_model.RebootRCInstancesRequest): Promise<$_model.RebootRCInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootRCInstancesWithOptions(request, runtime);
  }

  /**
   * 重搭备库实例
   * 
   * @param request - RebuildDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebuildDBInstanceResponse
   */
  async rebuildDBInstanceWithOptions(request: $_model.RebuildDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebuildDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!$dara.isNull(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.rebuildNodeType)) {
      query["RebuildNodeType"] = request.rebuildNodeType;
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
      action: "RebuildDBInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebuildDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RebuildDBInstanceResponse({}));
  }

  /**
   * 重搭备库实例
   * 
   * @param request - RebuildDBInstanceRequest
   * @returns RebuildDBInstanceResponse
   */
  async rebuildDBInstance(request: $_model.RebuildDBInstanceRequest): Promise<$_model.RebuildDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebuildDBInstanceWithOptions(request, runtime);
  }

  /**
   * 重建复制链路
   * 
   * @param request - RebuildReplicationLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebuildReplicationLinkResponse
   */
  async rebuildReplicationLinkWithOptions(request: $_model.RebuildReplicationLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebuildReplicationLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebuildReplicationLink",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebuildReplicationLinkResponse>(await this.callApi(params, req, runtime), new $_model.RebuildReplicationLinkResponse({}));
  }

  /**
   * 重建复制链路
   * 
   * @param request - RebuildReplicationLinkRequest
   * @returns RebuildReplicationLinkResponse
   */
  async rebuildReplicationLink(request: $_model.RebuildReplicationLinkRequest): Promise<$_model.RebuildReplicationLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebuildReplicationLinkWithOptions(request, runtime);
  }

  /**
   * 接收实例
   * 
   * @param request - ReceiveDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReceiveDBInstanceResponse
   */
  async receiveDBInstanceWithOptions(request: $_model.ReceiveDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReceiveDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.guardDBInstanceId)) {
      query["GuardDBInstanceId"] = request.guardDBInstanceId;
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
      action: "ReceiveDBInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReceiveDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReceiveDBInstanceResponse({}));
  }

  /**
   * 接收实例
   * 
   * @param request - ReceiveDBInstanceRequest
   * @returns ReceiveDBInstanceResponse
   */
  async receiveDBInstance(request: $_model.ReceiveDBInstanceRequest): Promise<$_model.ReceiveDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.receiveDBInstanceWithOptions(request, runtime);
  }

  /**
   * 恢复数据库实例
   * 
   * @param request - RecoveryDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoveryDBInstanceResponse
   */
  async recoveryDBInstanceWithOptions(request: $_model.RecoveryDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecoveryDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
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

    if (!$dara.isNull(request.DBInstanceStorageType)) {
      query["DBInstanceStorageType"] = request.DBInstanceStorageType;
    }

    if (!$dara.isNull(request.dbNames)) {
      query["DbNames"] = request.dbNames;
    }

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!$dara.isNull(request.targetDBInstanceId)) {
      query["TargetDBInstanceId"] = request.targetDBInstanceId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecoveryDBInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecoveryDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RecoveryDBInstanceResponse({}));
  }

  /**
   * 恢复数据库实例
   * 
   * @param request - RecoveryDBInstanceRequest
   * @returns RecoveryDBInstanceResponse
   */
  async recoveryDBInstance(request: $_model.RecoveryDBInstanceRequest): Promise<$_model.RecoveryDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recoveryDBInstanceWithOptions(request, runtime);
  }

  /**
   * 重新部署实例
   * 
   * @param request - RedeployRCInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RedeployRCInstanceResponse
   */
  async redeployRCInstanceWithOptions(request: $_model.RedeployRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RedeployRCInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RedeployRCInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RedeployRCInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RedeployRCInstanceResponse({}));
  }

  /**
   * 重新部署实例
   * 
   * @param request - RedeployRCInstanceRequest
   * @returns RedeployRCInstanceResponse
   */
  async redeployRCInstance(request: $_model.RedeployRCInstanceRequest): Promise<$_model.RedeployRCInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.redeployRCInstanceWithOptions(request, runtime);
  }

  /**
   * 释放实例的链接地址
   * 
   * @param request - ReleaseInstanceConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceConnectionResponse
   */
  async releaseInstanceConnectionWithOptions(request: $_model.ReleaseInstanceConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstanceConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
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
      action: "ReleaseInstanceConnection",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseInstanceConnectionResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseInstanceConnectionResponse({}));
  }

  /**
   * 释放实例的链接地址
   * 
   * @param request - ReleaseInstanceConnectionRequest
   * @returns ReleaseInstanceConnectionResponse
   */
  async releaseInstanceConnection(request: $_model.ReleaseInstanceConnectionRequest): Promise<$_model.ReleaseInstanceConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstanceConnectionWithOptions(request, runtime);
  }

  /**
   * 释放RDS实例的公网链接地址
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
      action: "ReleaseInstancePublicConnection",
      version: "2014-08-15",
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
   * 释放RDS实例的公网链接地址
   * 
   * @param request - ReleaseInstancePublicConnectionRequest
   * @returns ReleaseInstancePublicConnectionResponse
   */
  async releaseInstancePublicConnection(request: $_model.ReleaseInstancePublicConnectionRequest): Promise<$_model.ReleaseInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Releases the read/write splitting endpoint of an instance.
   * 
   * @remarks
   * ### 适用引擎
   * - RDS MySQL
   * - RDS SQL Server
   * ### 前体条件
   * 调用该接口时，实例必须满足以下条件，否则将操作失败：
   * * MySQL实例使用的是共享代理。
   * * 实例已开通读写分离。
   * * 实例为如下版本：
   *     * MySQL 5.7高可用版（本地SSD盘）
   *     * MySQL 5.6
   *     * SQL Server集群版
   * 
   * @param request - ReleaseReadWriteSplittingConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseReadWriteSplittingConnectionResponse
   */
  async releaseReadWriteSplittingConnectionWithOptions(request: $_model.ReleaseReadWriteSplittingConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseReadWriteSplittingConnectionResponse> {
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

    if (!$dara.isNull(request.RWAddressType)) {
      query["RWAddressType"] = request.RWAddressType;
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
      action: "ReleaseReadWriteSplittingConnection",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseReadWriteSplittingConnectionResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseReadWriteSplittingConnectionResponse({}));
  }

  /**
   * Releases the read/write splitting endpoint of an instance.
   * 
   * @remarks
   * ### 适用引擎
   * - RDS MySQL
   * - RDS SQL Server
   * ### 前体条件
   * 调用该接口时，实例必须满足以下条件，否则将操作失败：
   * * MySQL实例使用的是共享代理。
   * * 实例已开通读写分离。
   * * 实例为如下版本：
   *     * MySQL 5.7高可用版（本地SSD盘）
   *     * MySQL 5.6
   *     * SQL Server集群版
   * 
   * @param request - ReleaseReadWriteSplittingConnectionRequest
   * @returns ReleaseReadWriteSplittingConnectionResponse
   */
  async releaseReadWriteSplittingConnection(request: $_model.ReleaseReadWriteSplittingConnectionRequest): Promise<$_model.ReleaseReadWriteSplittingConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseReadWriteSplittingConnectionWithOptions(request, runtime);
  }

  /**
   * 移除标签
   * 
   * @param request - RemoveTagsFromResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTagsFromResourceResponse
   */
  async removeTagsFromResourceWithOptions(request: $_model.RemoveTagsFromResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveTagsFromResourceResponse> {
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.proxyId)) {
      query["proxyId"] = request.proxyId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveTagsFromResource",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveTagsFromResourceResponse>(await this.callApi(params, req, runtime), new $_model.RemoveTagsFromResourceResponse({}));
  }

  /**
   * 移除标签
   * 
   * @param request - RemoveTagsFromResourceRequest
   * @returns RemoveTagsFromResourceResponse
   */
  async removeTagsFromResource(request: $_model.RemoveTagsFromResourceRequest): Promise<$_model.RemoveTagsFromResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTagsFromResourceWithOptions(request, runtime);
  }

  /**
   * 为RDS实例续费
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

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.promotionCode)) {
      query["PromotionCode"] = request.promotionCode;
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
      action: "RenewInstance",
      version: "2014-08-15",
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
   * 为RDS实例续费
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
   * This API is used to renew a subscription-based RDS Custom instance.
   * 
   * @param request - RenewRCInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewRCInstanceResponse
   */
  async renewRCInstanceWithOptions(request: $_model.RenewRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewRCInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
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

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.periodAlign)) {
      query["PeriodAlign"] = request.periodAlign;
    }

    if (!$dara.isNull(request.promotionCode)) {
      query["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.timeType)) {
      query["TimeType"] = request.timeType;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewRCInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewRCInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewRCInstanceResponse({}));
  }

  /**
   * This API is used to renew a subscription-based RDS Custom instance.
   * 
   * @param request - RenewRCInstanceRequest
   * @returns RenewRCInstanceResponse
   */
  async renewRCInstance(request: $_model.RenewRCInstanceRequest): Promise<$_model.RenewRCInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewRCInstanceWithOptions(request, runtime);
  }

  /**
   * Reinstalls the operating system (OS) of an RDS Custom instance.
   * 
   * @remarks
   * - 实例的状态必须为已暂停（Stopped）状态。
   * - 重装系统将丢失原系统盘上的数据，请谨慎操作。
   * 
   * @param request - ReplaceRCInstanceSystemDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplaceRCInstanceSystemDiskResponse
   */
  async replaceRCInstanceSystemDiskWithOptions(request: $_model.ReplaceRCInstanceSystemDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReplaceRCInstanceSystemDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isLocalDisk)) {
      query["IsLocalDisk"] = request.isLocalDisk;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplaceRCInstanceSystemDisk",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplaceRCInstanceSystemDiskResponse>(await this.callApi(params, req, runtime), new $_model.ReplaceRCInstanceSystemDiskResponse({}));
  }

  /**
   * Reinstalls the operating system (OS) of an RDS Custom instance.
   * 
   * @remarks
   * - 实例的状态必须为已暂停（Stopped）状态。
   * - 重装系统将丢失原系统盘上的数据，请谨慎操作。
   * 
   * @param request - ReplaceRCInstanceSystemDiskRequest
   * @returns ReplaceRCInstanceSystemDiskResponse
   */
  async replaceRCInstanceSystemDisk(request: $_model.ReplaceRCInstanceSystemDiskRequest): Promise<$_model.ReplaceRCInstanceSystemDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.replaceRCInstanceSystemDiskWithOptions(request, runtime);
  }

  /**
   * 重置实例的账号密码
   * 
   * @param request - ResetAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAccountResponse
   */
  async resetAccountWithOptions(request: $_model.ResetAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAccountResponse> {
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
      action: "ResetAccount",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetAccountResponse>(await this.callApi(params, req, runtime), new $_model.ResetAccountResponse({}));
  }

  /**
   * 重置实例的账号密码
   * 
   * @param request - ResetAccountRequest
   * @returns ResetAccountResponse
   */
  async resetAccount(request: $_model.ResetAccountRequest): Promise<$_model.ResetAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAccountWithOptions(request, runtime);
  }

  /**
   * 重置指定账号的密码
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
      version: "2014-08-15",
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
   * 重置指定账号的密码
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: $_model.ResetAccountPasswordRequest): Promise<$_model.ResetAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * ResizeRCInstanceDisk
   * 
   * @remarks
   * Local disk instances do not support changing storage space.
   * 
   * @param request - ResizeRCInstanceDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeRCInstanceDiskResponse
   */
  async resizeRCInstanceDiskWithOptions(request: $_model.ResizeRCInstanceDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResizeRCInstanceDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.newSize)) {
      query["NewSize"] = request.newSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResizeRCInstanceDisk",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResizeRCInstanceDiskResponse>(await this.callApi(params, req, runtime), new $_model.ResizeRCInstanceDiskResponse({}));
  }

  /**
   * ResizeRCInstanceDisk
   * 
   * @remarks
   * Local disk instances do not support changing storage space.
   * 
   * @param request - ResizeRCInstanceDiskRequest
   * @returns ResizeRCInstanceDiskResponse
   */
  async resizeRCInstanceDisk(request: $_model.ResizeRCInstanceDiskRequest): Promise<$_model.ResizeRCInstanceDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resizeRCInstanceDiskWithOptions(request, runtime);
  }

  /**
   * 重启实例
   * 
   * @param request - RestartDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstanceWithOptions(request: $_model.RestartDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDBInstanceResponse> {
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
      action: "RestartDBInstance",
      version: "2014-08-15",
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
   * 重启实例
   * 
   * @param request - RestartDBInstanceRequest
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstance(request: $_model.RestartDBInstanceRequest): Promise<$_model.RestartDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  /**
   * 容灾实例库表灰度
   * 
   * @param request - RestoreDdrTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreDdrTableResponse
   */
  async restoreDdrTableWithOptions(request: $_model.RestoreDdrTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreDdrTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!$dara.isNull(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!$dara.isNull(request.sourceDBInstanceName)) {
      query["SourceDBInstanceName"] = request.sourceDBInstanceName;
    }

    if (!$dara.isNull(request.sourceRegion)) {
      query["SourceRegion"] = request.sourceRegion;
    }

    if (!$dara.isNull(request.tableMeta)) {
      query["TableMeta"] = request.tableMeta;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreDdrTable",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreDdrTableResponse>(await this.callApi(params, req, runtime), new $_model.RestoreDdrTableResponse({}));
  }

  /**
   * 容灾实例库表灰度
   * 
   * @param request - RestoreDdrTableRequest
   * @returns RestoreDdrTableResponse
   */
  async restoreDdrTable(request: $_model.RestoreDdrTableRequest): Promise<$_model.RestoreDdrTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreDdrTableWithOptions(request, runtime);
  }

  /**
   * 库表恢复
   * 
   * @param request - RestoreTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreTableResponse
   */
  async restoreTableWithOptions(request: $_model.RestoreTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.instantRecovery)) {
      query["InstantRecovery"] = request.instantRecovery;
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

    if (!$dara.isNull(request.tableMeta)) {
      query["TableMeta"] = request.tableMeta;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreTable",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreTableResponse>(await this.callApi(params, req, runtime), new $_model.RestoreTableResponse({}));
  }

  /**
   * 库表恢复
   * 
   * @param request - RestoreTableRequest
   * @returns RestoreTableResponse
   */
  async restoreTable(request: $_model.RestoreTableRequest): Promise<$_model.RestoreTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreTableWithOptions(request, runtime);
  }

  /**
   * 撤销账户权限
   * 
   * @param request - RevokeAccountPrivilegeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeAccountPrivilegeResponse
   */
  async revokeAccountPrivilegeWithOptions(request: $_model.RevokeAccountPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeAccountPrivilegeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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
      action: "RevokeAccountPrivilege",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeAccountPrivilegeResponse>(await this.callApi(params, req, runtime), new $_model.RevokeAccountPrivilegeResponse({}));
  }

  /**
   * 撤销账户权限
   * 
   * @param request - RevokeAccountPrivilegeRequest
   * @returns RevokeAccountPrivilegeResponse
   */
  async revokeAccountPrivilege(request: $_model.RevokeAccountPrivilegeRequest): Promise<$_model.RevokeAccountPrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeAccountPrivilegeWithOptions(request, runtime);
  }

  /**
   * 撤销操作权限
   * 
   * @param request - RevokeOperatorPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeOperatorPermissionResponse
   */
  async revokeOperatorPermissionWithOptions(request: $_model.RevokeOperatorPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeOperatorPermissionResponse> {
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
      action: "RevokeOperatorPermission",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeOperatorPermissionResponse>(await this.callApi(params, req, runtime), new $_model.RevokeOperatorPermissionResponse({}));
  }

  /**
   * 撤销操作权限
   * 
   * @param request - RevokeOperatorPermissionRequest
   * @returns RevokeOperatorPermissionResponse
   */
  async revokeOperatorPermission(request: $_model.RevokeOperatorPermissionRequest): Promise<$_model.RevokeOperatorPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeOperatorPermissionWithOptions(request, runtime);
  }

  /**
   * Deletes security group rules with the specified IDs.
   * 
   * @param tmpReq - RevokeRCSecurityGroupPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeRCSecurityGroupPermissionResponse
   */
  async revokeRCSecurityGroupPermissionWithOptions(tmpReq: $_model.RevokeRCSecurityGroupPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeRCSecurityGroupPermissionResponse> {
    tmpReq.validate();
    let request = new $_model.RevokeRCSecurityGroupPermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.securityGroupRuleIdList)) {
      request.securityGroupRuleIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityGroupRuleIdList, "SecurityGroupRuleIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.securityGroupRuleIdListShrink)) {
      query["SecurityGroupRuleIdList"] = request.securityGroupRuleIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeRCSecurityGroupPermission",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeRCSecurityGroupPermissionResponse>(await this.callApi(params, req, runtime), new $_model.RevokeRCSecurityGroupPermissionResponse({}));
  }

  /**
   * Deletes security group rules with the specified IDs.
   * 
   * @param request - RevokeRCSecurityGroupPermissionRequest
   * @returns RevokeRCSecurityGroupPermissionResponse
   */
  async revokeRCSecurityGroupPermission(request: $_model.RevokeRCSecurityGroupPermissionRequest): Promise<$_model.RevokeRCSecurityGroupPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeRCSecurityGroupPermissionWithOptions(request, runtime);
  }

  /**
   * 创建并执行云助手命令
   * 
   * @param tmpReq - RunRCCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunRCCommandResponse
   */
  async runRCCommandWithOptions(tmpReq: $_model.RunRCCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunRCCommandResponse> {
    tmpReq.validate();
    let request = new $_model.RunRCCommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    if (!$dara.isNull(tmpReq.resourceTags)) {
      request.resourceTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTags, "ResourceTags", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!$dara.isNull(request.containerId)) {
      query["ContainerId"] = request.containerId;
    }

    if (!$dara.isNull(request.containerName)) {
      query["ContainerName"] = request.containerName;
    }

    if (!$dara.isNull(request.contentEncoding)) {
      query["ContentEncoding"] = request.contentEncoding;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableParameter)) {
      query["EnableParameter"] = request.enableParameter;
    }

    if (!$dara.isNull(request.frequency)) {
      query["Frequency"] = request.frequency;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.keepCommand)) {
      query["KeepCommand"] = request.keepCommand;
    }

    if (!$dara.isNull(request.launcher)) {
      query["Launcher"] = request.launcher;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.repeatMode)) {
      query["RepeatMode"] = request.repeatMode;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceTagsShrink)) {
      query["ResourceTags"] = request.resourceTagsShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.terminationMode)) {
      query["TerminationMode"] = request.terminationMode;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.windowsPasswordName)) {
      query["WindowsPasswordName"] = request.windowsPasswordName;
    }

    if (!$dara.isNull(request.workingDir)) {
      query["WorkingDir"] = request.workingDir;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunRCCommand",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunRCCommandResponse>(await this.callApi(params, req, runtime), new $_model.RunRCCommandResponse({}));
  }

  /**
   * 创建并执行云助手命令
   * 
   * @param request - RunRCCommandRequest
   * @returns RunRCCommandResponse
   */
  async runRCCommand(request: $_model.RunRCCommandRequest): Promise<$_model.RunRCCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runRCCommandWithOptions(request, runtime);
  }

  /**
   * Invoke the RunRCInstances API and specify parameters such as ImageId, InstanceType, VSwitchId, and SecurityGroupId to create one or more RDS Custom instances.
   * 
   * @remarks
   * - Before creating an RDS Custom instance, submit a ticket to request that your Alibaba Cloud account be added to the whitelist.  
   * - Only subscription-type RDS Custom instances are supported.  
   * - Supported regions include Beijing, Shanghai, Shenzhen, and Hangzhou.
   * 
   * @param tmpReq - RunRCInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunRCInstancesResponse
   */
  async runRCInstancesWithOptions(tmpReq: $_model.RunRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunRCInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.RunRCInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createAckEdgeParam)) {
      request.createAckEdgeParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createAckEdgeParam, "CreateAckEdgeParam", "json");
    }

    if (!$dara.isNull(tmpReq.dataDisk)) {
      request.dataDiskShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataDisk, "DataDisk", "json");
    }

    if (!$dara.isNull(tmpReq.networkOptions)) {
      request.networkOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkOptions, "NetworkOptions", "json");
    }

    if (!$dara.isNull(tmpReq.securityGroupIds)) {
      request.securityGroupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityGroupIds, "SecurityGroupIds", "json");
    }

    if (!$dara.isNull(tmpReq.systemDisk)) {
      request.systemDiskShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.systemDisk, "SystemDisk", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acuType)) {
      query["AcuType"] = request.acuType;
    }

    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.createAckEdgeParamShrink)) {
      query["CreateAckEdgeParam"] = request.createAckEdgeParamShrink;
    }

    if (!$dara.isNull(request.createExtraParam)) {
      query["CreateExtraParam"] = request.createExtraParam;
    }

    if (!$dara.isNull(request.createMode)) {
      query["CreateMode"] = request.createMode;
    }

    if (!$dara.isNull(request.dataDiskShrink)) {
      query["DataDisk"] = request.dataDiskShrink;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.deploymentSetId)) {
      query["DeploymentSetId"] = request.deploymentSetId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.internetMaxBandwidthOut)) {
      query["InternetMaxBandwidthOut"] = request.internetMaxBandwidthOut;
    }

    if (!$dara.isNull(request.ioOptimized)) {
      query["IoOptimized"] = request.ioOptimized;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.networkOptionsShrink)) {
      query["NetworkOptions"] = request.networkOptionsShrink;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.passwordInherit)) {
      query["PasswordInherit"] = request.passwordInherit;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.promotionCode)) {
      query["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scheduledRule)) {
      query["ScheduledRule"] = request.scheduledRule;
    }

    if (!$dara.isNull(request.securityEnhancementStrategy)) {
      query["SecurityEnhancementStrategy"] = request.securityEnhancementStrategy;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.securityGroupIdsShrink)) {
      query["SecurityGroupIds"] = request.securityGroupIdsShrink;
    }

    if (!$dara.isNull(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!$dara.isNull(request.supportCase)) {
      query["SupportCase"] = request.supportCase;
    }

    if (!$dara.isNull(request.systemDiskShrink)) {
      query["SystemDisk"] = request.systemDiskShrink;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.userDataInBase64)) {
      query["UserDataInBase64"] = request.userDataInBase64;
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
      action: "RunRCInstances",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunRCInstancesResponse>(await this.callApi(params, req, runtime), new $_model.RunRCInstancesResponse({}));
  }

  /**
   * Invoke the RunRCInstances API and specify parameters such as ImageId, InstanceType, VSwitchId, and SecurityGroupId to create one or more RDS Custom instances.
   * 
   * @remarks
   * - Before creating an RDS Custom instance, submit a ticket to request that your Alibaba Cloud account be added to the whitelist.  
   * - Only subscription-type RDS Custom instances are supported.  
   * - Supported regions include Beijing, Shanghai, Shenzhen, and Hangzhou.
   * 
   * @param request - RunRCInstancesRequest
   * @returns RunRCInstancesResponse
   */
  async runRCInstances(request: $_model.RunRCInstancesRequest): Promise<$_model.RunRCInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runRCInstancesWithOptions(request, runtime);
  }

  /**
   * 启动已经停止的RDS实例
   * 
   * @param request - StartDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDBInstanceResponse
   */
  async startDBInstanceWithOptions(request: $_model.StartDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceTransType)) {
      query["DBInstanceTransType"] = request.DBInstanceTransType;
    }

    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
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

    if (!$dara.isNull(request.specifiedTime)) {
      query["SpecifiedTime"] = request.specifiedTime;
    }

    if (!$dara.isNull(request.storage)) {
      query["Storage"] = request.storage;
    }

    if (!$dara.isNull(request.targetDBInstanceClass)) {
      query["TargetDBInstanceClass"] = request.targetDBInstanceClass;
    }

    if (!$dara.isNull(request.targetDedicatedHostIdForLog)) {
      query["TargetDedicatedHostIdForLog"] = request.targetDedicatedHostIdForLog;
    }

    if (!$dara.isNull(request.targetDedicatedHostIdForMaster)) {
      query["TargetDedicatedHostIdForMaster"] = request.targetDedicatedHostIdForMaster;
    }

    if (!$dara.isNull(request.targetDedicatedHostIdForSlave)) {
      query["TargetDedicatedHostIdForSlave"] = request.targetDedicatedHostIdForSlave;
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
      action: "StartDBInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartDBInstanceResponse({}));
  }

  /**
   * 启动已经停止的RDS实例
   * 
   * @param request - StartDBInstanceRequest
   * @returns StartDBInstanceResponse
   */
  async startDBInstance(request: $_model.StartDBInstanceRequest): Promise<$_model.StartDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDBInstanceWithOptions(request, runtime);
  }

  /**
   * 启动RDS用户专属主机实例
   * 
   * @param request - StartRCInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRCInstanceResponse
   */
  async startRCInstanceWithOptions(request: $_model.StartRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRCInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRCInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartRCInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartRCInstanceResponse({}));
  }

  /**
   * 启动RDS用户专属主机实例
   * 
   * @param request - StartRCInstanceRequest
   * @returns StartRCInstanceResponse
   */
  async startRCInstance(request: $_model.StartRCInstanceRequest): Promise<$_model.StartRCInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRCInstanceWithOptions(request, runtime);
  }

  /**
   * 批量启动RC实例
   * 
   * @param tmpReq - StartRCInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRCInstancesResponse
   */
  async startRCInstancesWithOptions(tmpReq: $_model.StartRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRCInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.StartRCInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.batchOptimization)) {
      query["BatchOptimization"] = request.batchOptimization;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRCInstances",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartRCInstancesResponse>(await this.callApi(params, req, runtime), new $_model.StartRCInstancesResponse({}));
  }

  /**
   * 批量启动RC实例
   * 
   * @param request - StartRCInstancesRequest
   * @returns StartRCInstancesResponse
   */
  async startRCInstances(request: $_model.StartRCInstancesRequest): Promise<$_model.StartRCInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRCInstancesWithOptions(request, runtime);
  }

  /**
   * 暂停RDS实例，实例处于停机状态
   * 
   * @param request - StopDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDBInstanceResponse
   */
  async stopDBInstanceWithOptions(request: $_model.StopDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "StopDBInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopDBInstanceResponse({}));
  }

  /**
   * 暂停RDS实例，实例处于停机状态
   * 
   * @param request - StopDBInstanceRequest
   * @returns StopDBInstanceResponse
   */
  async stopDBInstance(request: $_model.StopDBInstanceRequest): Promise<$_model.StopDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDBInstanceWithOptions(request, runtime);
  }

  /**
   * Invoke StopRCInstance to stop a running RDS Custom instance. After the API is successfully invoked, the instance transitions from the Stopping state to the Stopped state.
   * 
   * @param request - StopRCInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRCInstanceResponse
   */
  async stopRCInstanceWithOptions(request: $_model.StopRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopRCInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stoppedMode)) {
      query["StoppedMode"] = request.stoppedMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopRCInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopRCInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopRCInstanceResponse({}));
  }

  /**
   * Invoke StopRCInstance to stop a running RDS Custom instance. After the API is successfully invoked, the instance transitions from the Stopping state to the Stopped state.
   * 
   * @param request - StopRCInstanceRequest
   * @returns StopRCInstanceResponse
   */
  async stopRCInstance(request: $_model.StopRCInstanceRequest): Promise<$_model.StopRCInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopRCInstanceWithOptions(request, runtime);
  }

  /**
   * 批量停止RC实例
   * 
   * @param tmpReq - StopRCInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRCInstancesResponse
   */
  async stopRCInstancesWithOptions(tmpReq: $_model.StopRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopRCInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.StopRCInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.batchOptimization)) {
      query["BatchOptimization"] = request.batchOptimization;
    }

    if (!$dara.isNull(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stoppedMode)) {
      query["StoppedMode"] = request.stoppedMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopRCInstances",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopRCInstancesResponse>(await this.callApi(params, req, runtime), new $_model.StopRCInstancesResponse({}));
  }

  /**
   * 批量停止RC实例
   * 
   * @param request - StopRCInstancesRequest
   * @returns StopRCInstancesResponse
   */
  async stopRCInstances(request: $_model.StopRCInstancesRequest): Promise<$_model.StopRCInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopRCInstancesWithOptions(request, runtime);
  }

  /**
   * 切换RDS实例的主备实例
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

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
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
      action: "SwitchDBInstanceHA",
      version: "2014-08-15",
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
   * 切换RDS实例的主备实例
   * 
   * @param request - SwitchDBInstanceHARequest
   * @returns SwitchDBInstanceHAResponse
   */
  async switchDBInstanceHA(request: $_model.SwitchDBInstanceHARequest): Promise<$_model.SwitchDBInstanceHAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchDBInstanceHAWithOptions(request, runtime);
  }

  /**
   * 切换内外网地址，内网地址变为外网地址，外网地址变为内网地址。
   * 
   * @param request - SwitchDBInstanceNetTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchDBInstanceNetTypeResponse
   */
  async switchDBInstanceNetTypeWithOptions(request: $_model.SwitchDBInstanceNetTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchDBInstanceNetTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.connectionStringType)) {
      query["ConnectionStringType"] = request.connectionStringType;
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

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
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
      action: "SwitchDBInstanceNetType",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchDBInstanceNetTypeResponse>(await this.callApi(params, req, runtime), new $_model.SwitchDBInstanceNetTypeResponse({}));
  }

  /**
   * 切换内外网地址，内网地址变为外网地址，外网地址变为内网地址。
   * 
   * @param request - SwitchDBInstanceNetTypeRequest
   * @returns SwitchDBInstanceNetTypeResponse
   */
  async switchDBInstanceNetType(request: $_model.SwitchDBInstanceNetTypeRequest): Promise<$_model.SwitchDBInstanceNetTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchDBInstanceNetTypeWithOptions(request, runtime);
  }

  /**
   * 迁移RDS实例的VPC实例
   * 
   * @param request - SwitchDBInstanceVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchDBInstanceVpcResponse
   */
  async switchDBInstanceVpcWithOptions(request: $_model.SwitchDBInstanceVpcRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchDBInstanceVpcResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchDBInstanceVpc",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchDBInstanceVpcResponse>(await this.callApi(params, req, runtime), new $_model.SwitchDBInstanceVpcResponse({}));
  }

  /**
   * 迁移RDS实例的VPC实例
   * 
   * @param request - SwitchDBInstanceVpcRequest
   * @returns SwitchDBInstanceVpcResponse
   */
  async switchDBInstanceVpc(request: $_model.SwitchDBInstanceVpcRequest): Promise<$_model.SwitchDBInstanceVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchDBInstanceVpcWithOptions(request, runtime);
  }

  /**
   * Zero-downtime major version upgrade traffic switchover for RDS PostgreSQL.
   * 
   * @remarks
   * Applicable engine:  
   * * RDS PostgreSQL
   * 
   * @param request - SwitchOverMajorVersionUpgradeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchOverMajorVersionUpgradeResponse
   */
  async switchOverMajorVersionUpgradeWithOptions(request: $_model.SwitchOverMajorVersionUpgradeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchOverMajorVersionUpgradeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!$dara.isNull(request.switchoverTimeout)) {
      query["SwitchoverTimeout"] = request.switchoverTimeout;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchOverMajorVersionUpgrade",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchOverMajorVersionUpgradeResponse>(await this.callApi(params, req, runtime), new $_model.SwitchOverMajorVersionUpgradeResponse({}));
  }

  /**
   * Zero-downtime major version upgrade traffic switchover for RDS PostgreSQL.
   * 
   * @remarks
   * Applicable engine:  
   * * RDS PostgreSQL
   * 
   * @param request - SwitchOverMajorVersionUpgradeRequest
   * @returns SwitchOverMajorVersionUpgradeResponse
   */
  async switchOverMajorVersionUpgrade(request: $_model.SwitchOverMajorVersionUpgradeRequest): Promise<$_model.SwitchOverMajorVersionUpgradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchOverMajorVersionUpgradeWithOptions(request, runtime);
  }

  /**
   * Switches the data synchronization link to synchronize data from a disaster recovery (DR) instance to the primary ApsaraDB RDS for SQL Server instance.
   * 
   * @param request - SwitchReplicationLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchReplicationLinkResponse
   */
  async switchReplicationLinkWithOptions(request: $_model.SwitchReplicationLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchReplicationLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.targetInstanceName)) {
      query["TargetInstanceName"] = request.targetInstanceName;
    }

    if (!$dara.isNull(request.targetInstanceRegionId)) {
      query["TargetInstanceRegionId"] = request.targetInstanceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchReplicationLink",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchReplicationLinkResponse>(await this.callApi(params, req, runtime), new $_model.SwitchReplicationLinkResponse({}));
  }

  /**
   * Switches the data synchronization link to synchronize data from a disaster recovery (DR) instance to the primary ApsaraDB RDS for SQL Server instance.
   * 
   * @param request - SwitchReplicationLinkRequest
   * @returns SwitchReplicationLinkResponse
   */
  async switchReplicationLink(request: $_model.SwitchReplicationLinkRequest): Promise<$_model.SwitchReplicationLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchReplicationLinkWithOptions(request, runtime);
  }

  /**
   * 同步密钥对
   * 
   * @param request - SyncRCKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncRCKeyPairResponse
   */
  async syncRCKeyPairWithOptions(request: $_model.SyncRCKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncRCKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.syncMode)) {
      query["SyncMode"] = request.syncMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncRCKeyPair",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncRCKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.SyncRCKeyPairResponse({}));
  }

  /**
   * 同步密钥对
   * 
   * @param request - SyncRCKeyPairRequest
   * @returns SyncRCKeyPairResponse
   */
  async syncRCKeyPair(request: $_model.SyncRCKeyPairRequest): Promise<$_model.SyncRCKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncRCKeyPairWithOptions(request, runtime);
  }

  /**
   * 同步RDS Custom的安全组
   * 
   * @param request - SyncRCSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncRCSecurityGroupResponse
   */
  async syncRCSecurityGroupWithOptions(request: $_model.SyncRCSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncRCSecurityGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncRCSecurityGroup",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncRCSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.SyncRCSecurityGroupResponse({}));
  }

  /**
   * 同步RDS Custom的安全组
   * 
   * @param request - SyncRCSecurityGroupRequest
   * @returns SyncRCSecurityGroupResponse
   */
  async syncRCSecurityGroup(request: $_model.SyncRCSecurityGroupRequest): Promise<$_model.SyncRCSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncRCSecurityGroupWithOptions(request, runtime);
  }

  /**
   * 为RDS资源绑定标签
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
      version: "2014-08-15",
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
   * 为RDS资源绑定标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 终止迁移任务
   * 
   * @param request - TerminateMigrateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateMigrateTaskResponse
   */
  async terminateMigrateTaskWithOptions(request: $_model.TerminateMigrateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TerminateMigrateTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.migrateTaskId)) {
      query["MigrateTaskId"] = request.migrateTaskId;
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
      action: "TerminateMigrateTask",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TerminateMigrateTaskResponse>(await this.callApi(params, req, runtime), new $_model.TerminateMigrateTaskResponse({}));
  }

  /**
   * 终止迁移任务
   * 
   * @param request - TerminateMigrateTaskRequest
   * @returns TerminateMigrateTaskResponse
   */
  async terminateMigrateTask(request: $_model.TerminateMigrateTaskRequest): Promise<$_model.TerminateMigrateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.terminateMigrateTaskWithOptions(request, runtime);
  }

  /**
   * 变更RDS实例的计费方式
   * 
   * @param request - TransformDBInstancePayTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransformDBInstancePayTypeResponse
   */
  async transformDBInstancePayTypeWithOptions(request: $_model.TransformDBInstancePayTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransformDBInstancePayTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
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

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!$dara.isNull(request.promotionCode)) {
      query["PromotionCode"] = request.promotionCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransformDBInstancePayType",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransformDBInstancePayTypeResponse>(await this.callApi(params, req, runtime), new $_model.TransformDBInstancePayTypeResponse({}));
  }

  /**
   * 变更RDS实例的计费方式
   * 
   * @param request - TransformDBInstancePayTypeRequest
   * @returns TransformDBInstancePayTypeResponse
   */
  async transformDBInstancePayType(request: $_model.TransformDBInstancePayTypeRequest): Promise<$_model.TransformDBInstancePayTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transformDBInstancePayTypeWithOptions(request, runtime);
  }

  /**
   * 解绑RDS Custom实例的弹性公网
   * 
   * @param request - UnassociateEipAddressWithRCInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnassociateEipAddressWithRCInstanceResponse
   */
  async unassociateEipAddressWithRCInstanceWithOptions(request: $_model.UnassociateEipAddressWithRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnassociateEipAddressWithRCInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allocationId)) {
      query["AllocationId"] = request.allocationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnassociateEipAddressWithRCInstance",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnassociateEipAddressWithRCInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UnassociateEipAddressWithRCInstanceResponse({}));
  }

  /**
   * 解绑RDS Custom实例的弹性公网
   * 
   * @param request - UnassociateEipAddressWithRCInstanceRequest
   * @returns UnassociateEipAddressWithRCInstanceResponse
   */
  async unassociateEipAddressWithRCInstance(request: $_model.UnassociateEipAddressWithRCInstanceRequest): Promise<$_model.UnassociateEipAddressWithRCInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unassociateEipAddressWithRCInstanceWithOptions(request, runtime);
  }

  /**
   * 解锁RDS实例的账号
   * 
   * @param request - UnlockAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockAccountResponse
   */
  async unlockAccountWithOptions(request: $_model.UnlockAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnlockAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "UnlockAccount",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnlockAccountResponse>(await this.callApi(params, req, runtime), new $_model.UnlockAccountResponse({}));
  }

  /**
   * 解锁RDS实例的账号
   * 
   * @param request - UnlockAccountRequest
   * @returns UnlockAccountResponse
   */
  async unlockAccount(request: $_model.UnlockAccountRequest): Promise<$_model.UnlockAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockAccountWithOptions(request, runtime);
  }

  /**
   * 解除指定资源的标签
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
      version: "2014-08-15",
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
   * 解除指定资源的标签
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Update replication channel for a native replication instance
   * 
   * @remarks
   * ### Supported Engine  
   * RDS MySQL  
   * ### Related Function Documentation  
   * >Notice: Before using this API, carefully read the Function Documentation to fully understand the prerequisites for using the API and the Impact of its use before performing any operation.
   * 
   * @param request - UpdateDBInstanceReplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDBInstanceReplicationResponse
   */
  async updateDBInstanceReplicationWithOptions(request: $_model.UpdateDBInstanceReplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDBInstanceReplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.masterHost)) {
      query["MasterHost"] = request.masterHost;
    }

    if (!$dara.isNull(request.masterPassword)) {
      query["MasterPassword"] = request.masterPassword;
    }

    if (!$dara.isNull(request.masterPort)) {
      query["MasterPort"] = request.masterPort;
    }

    if (!$dara.isNull(request.masterUser)) {
      query["MasterUser"] = request.masterUser;
    }

    if (!$dara.isNull(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDBInstanceReplication",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDBInstanceReplicationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDBInstanceReplicationResponse({}));
  }

  /**
   * Update replication channel for a native replication instance
   * 
   * @remarks
   * ### Supported Engine  
   * RDS MySQL  
   * ### Related Function Documentation  
   * >Notice: Before using this API, carefully read the Function Documentation to fully understand the prerequisites for using the API and the Impact of its use before performing any operation.
   * 
   * @param request - UpdateDBInstanceReplicationRequest
   * @returns UpdateDBInstanceReplicationResponse
   */
  async updateDBInstanceReplication(request: $_model.UpdateDBInstanceReplicationRequest): Promise<$_model.UpdateDBInstanceReplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDBInstanceReplicationWithOptions(request, runtime);
  }

  /**
   * 更新插件版本
   * 
   * @param request - UpdatePostgresExtensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePostgresExtensionsResponse
   */
  async updatePostgresExtensionsWithOptions(request: $_model.UpdatePostgresExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePostgresExtensionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBNames)) {
      query["DBNames"] = request.DBNames;
    }

    if (!$dara.isNull(request.extensions)) {
      query["Extensions"] = request.extensions;
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
      action: "UpdatePostgresExtensions",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePostgresExtensionsResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePostgresExtensionsResponse({}));
  }

  /**
   * 更新插件版本
   * 
   * @param request - UpdatePostgresExtensionsRequest
   * @returns UpdatePostgresExtensionsResponse
   */
  async updatePostgresExtensions(request: $_model.UpdatePostgresExtensionsRequest): Promise<$_model.UpdatePostgresExtensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePostgresExtensionsWithOptions(request, runtime);
  }

  /**
   * 变更用户备份的备注信息和保留时长
   * 
   * @param request - UpdateUserBackupFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserBackupFileResponse
   */
  async updateUserBackupFileWithOptions(request: $_model.UpdateUserBackupFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserBackupFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
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

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserBackupFile",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserBackupFileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserBackupFileResponse({}));
  }

  /**
   * 变更用户备份的备注信息和保留时长
   * 
   * @param request - UpdateUserBackupFileRequest
   * @returns UpdateUserBackupFileResponse
   */
  async updateUserBackupFile(request: $_model.UpdateUserBackupFileRequest): Promise<$_model.UpdateUserBackupFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserBackupFileWithOptions(request, runtime);
  }

  /**
   * 升级RDS实例的大版本
   * 
   * @param request - UpgradeDBInstanceEngineVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBInstanceEngineVersionResponse
   */
  async upgradeDBInstanceEngineVersionWithOptions(request: $_model.UpgradeDBInstanceEngineVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBInstanceEngineVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeDBInstanceEngineVersion",
      version: "2014-08-15",
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
   * 升级RDS实例的大版本
   * 
   * @param request - UpgradeDBInstanceEngineVersionRequest
   * @returns UpgradeDBInstanceEngineVersionResponse
   */
  async upgradeDBInstanceEngineVersion(request: $_model.UpgradeDBInstanceEngineVersionRequest): Promise<$_model.UpgradeDBInstanceEngineVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBInstanceEngineVersionWithOptions(request, runtime);
  }

  /**
   * 升级RDS实例的内核小版本
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.targetMinorVersion)) {
      query["TargetMinorVersion"] = request.targetMinorVersion;
    }

    if (!$dara.isNull(request.upgradeTime)) {
      query["UpgradeTime"] = request.upgradeTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeDBInstanceKernelVersion",
      version: "2014-08-15",
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
   * 升级RDS实例的内核小版本
   * 
   * @param request - UpgradeDBInstanceKernelVersionRequest
   * @returns UpgradeDBInstanceKernelVersionResponse
   */
  async upgradeDBInstanceKernelVersion(request: $_model.UpgradeDBInstanceKernelVersionRequest): Promise<$_model.UpgradeDBInstanceKernelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBInstanceKernelVersionWithOptions(request, runtime);
  }

  /**
   * 升级数据库实例大版本
   * 
   * @param request - UpgradeDBInstanceMajorVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBInstanceMajorVersionResponse
   */
  async upgradeDBInstanceMajorVersionWithOptions(request: $_model.UpgradeDBInstanceMajorVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBInstanceMajorVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowDDL)) {
      query["AllowDDL"] = request.allowDDL;
    }

    if (!$dara.isNull(request.collectStatMode)) {
      query["CollectStatMode"] = request.collectStatMode;
    }

    if (!$dara.isNull(request.customExtraInfo)) {
      query["CustomExtraInfo"] = request.customExtraInfo;
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

    if (!$dara.isNull(request.DBInstanceStorageType)) {
      query["DBInstanceStorageType"] = request.DBInstanceStorageType;
    }

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.switchOver)) {
      query["SwitchOver"] = request.switchOver;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!$dara.isNull(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    if (!$dara.isNull(request.targetMajorVersion)) {
      query["TargetMajorVersion"] = request.targetMajorVersion;
    }

    if (!$dara.isNull(request.upgradeMode)) {
      query["UpgradeMode"] = request.upgradeMode;
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

    if (!$dara.isNull(request.zoneIdSlave1)) {
      query["ZoneIdSlave1"] = request.zoneIdSlave1;
    }

    if (!$dara.isNull(request.zoneIdSlave2)) {
      query["ZoneIdSlave2"] = request.zoneIdSlave2;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeDBInstanceMajorVersion",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeDBInstanceMajorVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeDBInstanceMajorVersionResponse({}));
  }

  /**
   * 升级数据库实例大版本
   * 
   * @param request - UpgradeDBInstanceMajorVersionRequest
   * @returns UpgradeDBInstanceMajorVersionResponse
   */
  async upgradeDBInstanceMajorVersion(request: $_model.UpgradeDBInstanceMajorVersionRequest): Promise<$_model.UpgradeDBInstanceMajorVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBInstanceMajorVersionWithOptions(request, runtime);
  }

  /**
   * This API is used to perform a pre-check before upgrading the major version of RDS MySQL or RDS PostgreSQL.
   * 
   * @remarks
   * ### Applicable Engines  
   * RDS MySQL  
   * RDS PostgreSQL  
   * ### Related Function Documentation  
   * >Notice: Before using this API, carefully read the Function Documentation to ensure you fully understand the prerequisites for using the API and the Impact of its use before performing any operation.  
   * - [RDS MySQL Major Version Upgrade Check Report](https://help.aliyun.com/document_detail/2794383.html)  
   * - [Upgrade the Major Version of an RDS PostgreSQL Database](https://help.aliyun.com/document_detail/2879540.html)
   * 
   * @param request - UpgradeDBInstanceMajorVersionPrecheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBInstanceMajorVersionPrecheckResponse
   */
  async upgradeDBInstanceMajorVersionPrecheckWithOptions(request: $_model.UpgradeDBInstanceMajorVersionPrecheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBInstanceMajorVersionPrecheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.targetMajorVersion)) {
      query["TargetMajorVersion"] = request.targetMajorVersion;
    }

    if (!$dara.isNull(request.upgradeMode)) {
      query["UpgradeMode"] = request.upgradeMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeDBInstanceMajorVersionPrecheck",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeDBInstanceMajorVersionPrecheckResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeDBInstanceMajorVersionPrecheckResponse({}));
  }

  /**
   * This API is used to perform a pre-check before upgrading the major version of RDS MySQL or RDS PostgreSQL.
   * 
   * @remarks
   * ### Applicable Engines  
   * RDS MySQL  
   * RDS PostgreSQL  
   * ### Related Function Documentation  
   * >Notice: Before using this API, carefully read the Function Documentation to ensure you fully understand the prerequisites for using the API and the Impact of its use before performing any operation.  
   * - [RDS MySQL Major Version Upgrade Check Report](https://help.aliyun.com/document_detail/2794383.html)  
   * - [Upgrade the Major Version of an RDS PostgreSQL Database](https://help.aliyun.com/document_detail/2879540.html)
   * 
   * @param request - UpgradeDBInstanceMajorVersionPrecheckRequest
   * @returns UpgradeDBInstanceMajorVersionPrecheckResponse
   */
  async upgradeDBInstanceMajorVersionPrecheck(request: $_model.UpgradeDBInstanceMajorVersionPrecheckRequest): Promise<$_model.UpgradeDBInstanceMajorVersionPrecheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBInstanceMajorVersionPrecheckWithOptions(request, runtime);
  }

  /**
   * 升级RDS实例数据库代理节点的内核版本
   * 
   * @param request - UpgradeDBProxyInstanceKernelVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBProxyInstanceKernelVersionResponse
   */
  async upgradeDBProxyInstanceKernelVersionWithOptions(request: $_model.UpgradeDBProxyInstanceKernelVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBProxyInstanceKernelVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBProxyEngineType)) {
      query["DBProxyEngineType"] = request.DBProxyEngineType;
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

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!$dara.isNull(request.targetMinorVersion)) {
      query["TargetMinorVersion"] = request.targetMinorVersion;
    }

    if (!$dara.isNull(request.upgradeTime)) {
      query["UpgradeTime"] = request.upgradeTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeDBProxyInstanceKernelVersion",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeDBProxyInstanceKernelVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeDBProxyInstanceKernelVersionResponse({}));
  }

  /**
   * 升级RDS实例数据库代理节点的内核版本
   * 
   * @param request - UpgradeDBProxyInstanceKernelVersionRequest
   * @returns UpgradeDBProxyInstanceKernelVersionResponse
   */
  async upgradeDBProxyInstanceKernelVersion(request: $_model.UpgradeDBProxyInstanceKernelVersionRequest): Promise<$_model.UpgradeDBProxyInstanceKernelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBProxyInstanceKernelVersionWithOptions(request, runtime);
  }

  /**
   * Precheck for Data Import Job on RDS MySQL Instance with Native Replication
   * 
   * @remarks
   * Precheck for Data Import Job on RDS MySQL Instance with Native Replication
   * 
   * @param request - ValidateImportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateImportTaskResponse
   */
  async validateImportTaskWithOptions(request: $_model.ValidateImportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateImportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.estimatedSize)) {
      query["EstimatedSize"] = request.estimatedSize;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!$dara.isNull(request.sourcePlatform)) {
      query["SourcePlatform"] = request.sourcePlatform;
    }

    if (!$dara.isNull(request.streamPort)) {
      query["StreamPort"] = request.streamPort;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    if (!$dara.isNull(request.xtrabackupPath)) {
      query["XtrabackupPath"] = request.xtrabackupPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateImportTask",
      version: "2014-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateImportTaskResponse>(await this.callApi(params, req, runtime), new $_model.ValidateImportTaskResponse({}));
  }

  /**
   * Precheck for Data Import Job on RDS MySQL Instance with Native Replication
   * 
   * @remarks
   * Precheck for Data Import Job on RDS MySQL Instance with Native Replication
   * 
   * @param request - ValidateImportTaskRequest
   * @returns ValidateImportTaskResponse
   */
  async validateImportTask(request: $_model.ValidateImportTaskRequest): Promise<$_model.ValidateImportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateImportTaskWithOptions(request, runtime);
  }

}
