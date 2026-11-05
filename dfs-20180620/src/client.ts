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
    this._endpoint = this.getEndpoint("dfs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds compute instances to a mount point.
   * 
   * @remarks
   * ***
   * 
   * @param tmpReq - AttachVscMountPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachVscMountPointResponse
   */
  async attachVscMountPointWithOptions(tmpReq: $_model.AttachVscMountPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachVscMountPointResponse> {
    tmpReq.validate();
    let request = new $_model.AttachVscMountPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    if (!$dara.isNull(tmpReq.vscIds)) {
      request.vscIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vscIds, "VscIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    if (!$dara.isNull(request.useAssumeRoleChkServerPerm)) {
      query["UseAssumeRoleChkServerPerm"] = request.useAssumeRoleChkServerPerm;
    }

    if (!$dara.isNull(request.vscIdsShrink)) {
      query["VscIds"] = request.vscIdsShrink;
    }

    if (!$dara.isNull(request.vscName)) {
      query["VscName"] = request.vscName;
    }

    if (!$dara.isNull(request.vscType)) {
      query["VscType"] = request.vscType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachVscMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachVscMountPointResponse>(await this.callApi(params, req, runtime), new $_model.AttachVscMountPointResponse({}));
  }

  /**
   * Adds compute instances to a mount point.
   * 
   * @remarks
   * ***
   * 
   * @param request - AttachVscMountPointRequest
   * @returns AttachVscMountPointResponse
   */
  async attachVscMountPoint(request: $_model.AttachVscMountPointRequest): Promise<$_model.AttachVscMountPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachVscMountPointWithOptions(request, runtime);
  }

  /**
   * Mounts multiple VSC mount points.
   * 
   * @remarks
   * Currently, only one VSC can be associated with multiple mount points. Specifically, the values of AttachInfos.InstanceId or AttachInfos.VscId must be equal.
   * 
   * @param tmpReq - AttachVscToMountPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachVscToMountPointsResponse
   */
  async attachVscToMountPointsWithOptions(tmpReq: $_model.AttachVscToMountPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachVscToMountPointsResponse> {
    tmpReq.validate();
    let request = new $_model.AttachVscToMountPointsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.attachInfos)) {
      request.attachInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attachInfos, "AttachInfos", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attachInfosShrink)) {
      query["AttachInfos"] = request.attachInfosShrink;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.useAssumeRoleChkServerPerm)) {
      query["UseAssumeRoleChkServerPerm"] = request.useAssumeRoleChkServerPerm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachVscToMountPoints",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachVscToMountPointsResponse>(await this.callApi(params, req, runtime), new $_model.AttachVscToMountPointsResponse({}));
  }

  /**
   * Mounts multiple VSC mount points.
   * 
   * @remarks
   * Currently, only one VSC can be associated with multiple mount points. Specifically, the values of AttachInfos.InstanceId or AttachInfos.VscId must be equal.
   * 
   * @param request - AttachVscToMountPointsRequest
   * @returns AttachVscToMountPointsResponse
   */
  async attachVscToMountPoints(request: $_model.AttachVscToMountPointsRequest): Promise<$_model.AttachVscToMountPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachVscToMountPointsWithOptions(request, runtime);
  }

  /**
   * Associates a VSC mount point alias with a file system.
   * 
   * @param request - BindVscMountPointAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindVscMountPointAliasResponse
   */
  async bindVscMountPointAliasWithOptions(request: $_model.BindVscMountPointAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindVscMountPointAliasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliasPrefix)) {
      query["AliasPrefix"] = request.aliasPrefix;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindVscMountPointAlias",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindVscMountPointAliasResponse>(await this.callApi(params, req, runtime), new $_model.BindVscMountPointAliasResponse({}));
  }

  /**
   * Associates a VSC mount point alias with a file system.
   * 
   * @param request - BindVscMountPointAliasRequest
   * @returns BindVscMountPointAliasResponse
   */
  async bindVscMountPointAlias(request: $_model.BindVscMountPointAliasRequest): Promise<$_model.BindVscMountPointAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindVscMountPointAliasWithOptions(request, runtime);
  }

  /**
   * Creates an access group.
   * 
   * @param request - CreateAccessGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessGroupResponse
   */
  async createAccessGroupWithOptions(request: $_model.CreateAccessGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessGroup",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessGroupResponse({}));
  }

  /**
   * Creates an access group.
   * 
   * @param request - CreateAccessGroupRequest
   * @returns CreateAccessGroupResponse
   */
  async createAccessGroup(request: $_model.CreateAccessGroupRequest): Promise<$_model.CreateAccessGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessGroupWithOptions(request, runtime);
  }

  /**
   * Creates an access group rule.
   * 
   * @param request - CreateAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessRuleResponse
   */
  async createAccessRuleWithOptions(request: $_model.CreateAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.networkSegment)) {
      query["NetworkSegment"] = request.networkSegment;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.RWAccessType)) {
      query["RWAccessType"] = request.RWAccessType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessRule",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessRuleResponse({}));
  }

  /**
   * Creates an access group rule.
   * 
   * @param request - CreateAccessRuleRequest
   * @returns CreateAccessRuleResponse
   */
  async createAccessRule(request: $_model.CreateAccessRuleRequest): Promise<$_model.CreateAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessRuleWithOptions(request, runtime);
  }

  /**
   * Creates a file system.
   * 
   * @remarks
   * Before you create a file system, learn about the [billing methods](https://help.aliyun.com/document_detail/419020.html) and [pricing of Apsara File Storage for HDFS](https://www.aliyun.com/price/product?spm=a2c4g.11186623.0.0.476a13d7VQohVH#/alidfs/detail/alidfs).
   * 
   * @param request - CreateFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileSystemResponse
   */
  async createFileSystemWithOptions(request: $_model.CreateFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataRedundancyType)) {
      query["DataRedundancyType"] = request.dataRedundancyType;
    }

    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemName)) {
      query["FileSystemName"] = request.fileSystemName;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.meteringMode)) {
      query["MeteringMode"] = request.meteringMode;
    }

    if (!$dara.isNull(request.partitionNumber)) {
      query["PartitionNumber"] = request.partitionNumber;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.provisionedThroughputInMiBps)) {
      query["ProvisionedThroughputInMiBps"] = request.provisionedThroughputInMiBps;
    }

    if (!$dara.isNull(request.spaceCapacity)) {
      query["SpaceCapacity"] = request.spaceCapacity;
    }

    if (!$dara.isNull(request.storageSetName)) {
      query["StorageSetName"] = request.storageSetName;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.throughputMode)) {
      query["ThroughputMode"] = request.throughputMode;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFileSystem",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.CreateFileSystemResponse({}));
  }

  /**
   * Creates a file system.
   * 
   * @remarks
   * Before you create a file system, learn about the [billing methods](https://help.aliyun.com/document_detail/419020.html) and [pricing of Apsara File Storage for HDFS](https://www.aliyun.com/price/product?spm=a2c4g.11186623.0.0.476a13d7VQohVH#/alidfs/detail/alidfs).
   * 
   * @param request - CreateFileSystemRequest
   * @returns CreateFileSystemResponse
   */
  async createFileSystem(request: $_model.CreateFileSystemRequest): Promise<$_model.CreateFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileSystemWithOptions(request, runtime);
  }

  /**
   * Creates a mount target.
   * 
   * @param request - CreateMountPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMountPointResponse
   */
  async createMountPointWithOptions(request: $_model.CreateMountPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMountPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.usePerformanceMode)) {
      query["UsePerformanceMode"] = request.usePerformanceMode;
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
      action: "CreateMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMountPointResponse>(await this.callApi(params, req, runtime), new $_model.CreateMountPointResponse({}));
  }

  /**
   * Creates a mount target.
   * 
   * @param request - CreateMountPointRequest
   * @returns CreateMountPointResponse
   */
  async createMountPoint(request: $_model.CreateMountPointRequest): Promise<$_model.CreateMountPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMountPointWithOptions(request, runtime);
  }

  /**
   * CreateQosPolicy
   * 
   * @param tmpReq - CreateQosPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQosPolicyResponse
   */
  async createQosPolicyWithOptions(tmpReq: $_model.CreateQosPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQosPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.CreateQosPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.flowIds)) {
      request.flowIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.flowIds, "FlowIds", "json");
    }

    if (!$dara.isNull(tmpReq.reqTags)) {
      request.reqTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.reqTags, "ReqTags", "json");
    }

    if (!$dara.isNull(tmpReq.zoneIds)) {
      request.zoneIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.zoneIds, "ZoneIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.federationId)) {
      query["FederationId"] = request.federationId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.flowIdsShrink)) {
      query["FlowIds"] = request.flowIdsShrink;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.maxIOBandWidth)) {
      query["MaxIOBandWidth"] = request.maxIOBandWidth;
    }

    if (!$dara.isNull(request.maxIOps)) {
      query["MaxIOps"] = request.maxIOps;
    }

    if (!$dara.isNull(request.maxMetaQps)) {
      query["MaxMetaQps"] = request.maxMetaQps;
    }

    if (!$dara.isNull(request.reqTagsShrink)) {
      query["ReqTags"] = request.reqTagsShrink;
    }

    if (!$dara.isNull(request.zoneIdsShrink)) {
      query["ZoneIds"] = request.zoneIdsShrink;
    }

    if (!$dara.isNull(request.storageType)) {
      query["storageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQosPolicy",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQosPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateQosPolicyResponse({}));
  }

  /**
   * CreateQosPolicy
   * 
   * @param request - CreateQosPolicyRequest
   * @returns CreateQosPolicyResponse
   */
  async createQosPolicy(request: $_model.CreateQosPolicyRequest): Promise<$_model.CreateQosPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQosPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a user and group mapping for an Apsara File Storage for HDFS file system instance.
   * 
   * @remarks
   * - The user and group mapping feature is currently in invitational preview. To use this feature, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket?spm=a2c4g.11186623.0.0.24241ee9gQPwnE).
   * - File system permission management in Apsara File Storage for HDFS relies on the users and groups of files. You must manage user and group mappings by calling API operations. For more information about the directory and file access permissions of Apsara File Storage for HDFS file systems, see [Directory and file access permissions](https://help.aliyun.com/document_detail/430865.html).
   * - The number of users and groups in a single file system is subject to the following limits:
   *   - A single file system can have a maximum of 1,000 users.
   *   - A single file system can have a maximum of 30 groups.
   *   - Each user can belong to a maximum of 10 groups.
   * 
   * @param tmpReq - CreateUserGroupsMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserGroupsMappingResponse
   */
  async createUserGroupsMappingWithOptions(tmpReq: $_model.CreateUserGroupsMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserGroupsMappingResponse> {
    tmpReq.validate();
    let request = new $_model.CreateUserGroupsMappingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.groupNames)) {
      request.groupNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupNames, "GroupNames", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserGroupsMapping",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserGroupsMappingResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserGroupsMappingResponse({}));
  }

  /**
   * Creates a user and group mapping for an Apsara File Storage for HDFS file system instance.
   * 
   * @remarks
   * - The user and group mapping feature is currently in invitational preview. To use this feature, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket?spm=a2c4g.11186623.0.0.24241ee9gQPwnE).
   * - File system permission management in Apsara File Storage for HDFS relies on the users and groups of files. You must manage user and group mappings by calling API operations. For more information about the directory and file access permissions of Apsara File Storage for HDFS file systems, see [Directory and file access permissions](https://help.aliyun.com/document_detail/430865.html).
   * - The number of users and groups in a single file system is subject to the following limits:
   *   - A single file system can have a maximum of 1,000 users.
   *   - A single file system can have a maximum of 30 groups.
   *   - Each user can belong to a maximum of 10 groups.
   * 
   * @param request - CreateUserGroupsMappingRequest
   * @returns CreateUserGroupsMappingResponse
   */
  async createUserGroupsMapping(request: $_model.CreateUserGroupsMappingRequest): Promise<$_model.CreateUserGroupsMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserGroupsMappingWithOptions(request, runtime);
  }

  /**
   * Creates a VSC mount target.
   * 
   * @param tmpReq - CreateVscMountPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVscMountPointResponse
   */
  async createVscMountPointWithOptions(tmpReq: $_model.CreateVscMountPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVscMountPointResponse> {
    tmpReq.validate();
    let request = new $_model.CreateVscMountPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVscMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVscMountPointResponse>(await this.callApi(params, req, runtime), new $_model.CreateVscMountPointResponse({}));
  }

  /**
   * Creates a VSC mount target.
   * 
   * @param request - CreateVscMountPointRequest
   * @returns CreateVscMountPointResponse
   */
  async createVscMountPoint(request: $_model.CreateVscMountPointRequest): Promise<$_model.CreateVscMountPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVscMountPointWithOptions(request, runtime);
  }

  /**
   * Deletes a permission group.
   * 
   * @remarks
   * The default VPC permission group (DefaultAccessGroupName) cannot be deleted.
   * 
   * @param request - DeleteAccessGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessGroupResponse
   */
  async deleteAccessGroupWithOptions(request: $_model.DeleteAccessGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessGroup",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessGroupResponse({}));
  }

  /**
   * Deletes a permission group.
   * 
   * @remarks
   * The default VPC permission group (DefaultAccessGroupName) cannot be deleted.
   * 
   * @param request - DeleteAccessGroupRequest
   * @returns DeleteAccessGroupResponse
   */
  async deleteAccessGroup(request: $_model.DeleteAccessGroupRequest): Promise<$_model.DeleteAccessGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a permission group rule.
   * 
   * @param request - DeleteAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessRuleResponse
   */
  async deleteAccessRuleWithOptions(request: $_model.DeleteAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!$dara.isNull(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessRule",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessRuleResponse({}));
  }

  /**
   * Deletes a permission group rule.
   * 
   * @param request - DeleteAccessRuleRequest
   * @returns DeleteAccessRuleResponse
   */
  async deleteAccessRule(request: $_model.DeleteAccessRuleRequest): Promise<$_model.DeleteAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessRuleWithOptions(request, runtime);
  }

  /**
   * Deletes an existing file system.
   * 
   * @remarks
   * - You can delete a file system instance only when the number of mount targets for the file system is 0.
   * - Once a file system instance is deleted, its data cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileSystemResponse
   */
  async deleteFileSystemWithOptions(request: $_model.DeleteFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFileSystem",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFileSystemResponse({}));
  }

  /**
   * Deletes an existing file system.
   * 
   * @remarks
   * - You can delete a file system instance only when the number of mount targets for the file system is 0.
   * - Once a file system instance is deleted, its data cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteFileSystemRequest
   * @returns DeleteFileSystemResponse
   */
  async deleteFileSystem(request: $_model.DeleteFileSystemRequest): Promise<$_model.DeleteFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFileSystemWithOptions(request, runtime);
  }

  /**
   * Delete a mount target.
   * 
   * @remarks
   * ### API Guide  
   * After a mount target is deleted, it cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteMountPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMountPointResponse
   */
  async deleteMountPointWithOptions(request: $_model.DeleteMountPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMountPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMountPointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMountPointResponse({}));
  }

  /**
   * Delete a mount target.
   * 
   * @remarks
   * ### API Guide  
   * After a mount target is deleted, it cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteMountPointRequest
   * @returns DeleteMountPointResponse
   */
  async deleteMountPoint(request: $_model.DeleteMountPointRequest): Promise<$_model.DeleteMountPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMountPointWithOptions(request, runtime);
  }

  /**
   * DeleteQosPolicy
   * 
   * @param request - DeleteQosPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQosPolicyResponse
   */
  async deleteQosPolicyWithOptions(request: $_model.DeleteQosPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQosPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.federationId)) {
      query["FederationId"] = request.federationId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.qosPolicyId)) {
      query["QosPolicyId"] = request.qosPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQosPolicy",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQosPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQosPolicyResponse({}));
  }

  /**
   * DeleteQosPolicy
   * 
   * @param request - DeleteQosPolicyRequest
   * @returns DeleteQosPolicyResponse
   */
  async deleteQosPolicy(request: $_model.DeleteQosPolicyRequest): Promise<$_model.DeleteQosPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQosPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes the mappings between users and groups for an Apsara File Storage for HDFS file system instance.
   * 
   * @remarks
   * - The user and group mapping feature is currently in invitational preview. To use this feature, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket?spm=a2c4g.11186623.0.0.24241ee9gQPwnE).
   * - Permission management for Apsara File Storage for HDFS file systems relies on file users and groups. You must manage user and group mappings by using OpenAPI. For more information about directory and file access permissions in Apsara File Storage for HDFS, see [Directory and file access permissions](https://help.aliyun.com/document_detail/430865.html).
   * - You cannot delete users and groups from a file system. You can only delete the mappings between users and groups. Once a user or group is added to a file system in any way, it cannot be deleted.
   * 
   * @param tmpReq - DeleteUserGroupsMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupsMappingResponse
   */
  async deleteUserGroupsMappingWithOptions(tmpReq: $_model.DeleteUserGroupsMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserGroupsMappingResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteUserGroupsMappingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.groupNames)) {
      request.groupNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupNames, "GroupNames", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserGroupsMapping",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserGroupsMappingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserGroupsMappingResponse({}));
  }

  /**
   * Deletes the mappings between users and groups for an Apsara File Storage for HDFS file system instance.
   * 
   * @remarks
   * - The user and group mapping feature is currently in invitational preview. To use this feature, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket?spm=a2c4g.11186623.0.0.24241ee9gQPwnE).
   * - Permission management for Apsara File Storage for HDFS file systems relies on file users and groups. You must manage user and group mappings by using OpenAPI. For more information about directory and file access permissions in Apsara File Storage for HDFS, see [Directory and file access permissions](https://help.aliyun.com/document_detail/430865.html).
   * - You cannot delete users and groups from a file system. You can only delete the mappings between users and groups. Once a user or group is added to a file system in any way, it cannot be deleted.
   * 
   * @param request - DeleteUserGroupsMappingRequest
   * @returns DeleteUserGroupsMappingResponse
   */
  async deleteUserGroupsMapping(request: $_model.DeleteUserGroupsMappingRequest): Promise<$_model.DeleteUserGroupsMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserGroupsMappingWithOptions(request, runtime);
  }

  /**
   * Deletes an existing VSC mount point.
   * 
   * @param request - DeleteVscMountPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVscMountPointResponse
   */
  async deleteVscMountPointWithOptions(request: $_model.DeleteVscMountPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVscMountPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVscMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVscMountPointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVscMountPointResponse({}));
  }

  /**
   * Deletes an existing VSC mount point.
   * 
   * @param request - DeleteVscMountPointRequest
   * @returns DeleteVscMountPointResponse
   */
  async deleteVscMountPoint(request: $_model.DeleteVscMountPointRequest): Promise<$_model.DeleteVscMountPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVscMountPointWithOptions(request, runtime);
  }

  /**
   * Queries the mount information of VSCs in batches.
   * 
   * @remarks
   * Supports only one-to-many mappings from a storage resource (MountPointId) to multiple compute resources (InstanceId and VscId), and one-to-many mappings from a compute resource (InstanceId and VscId) to multiple storage resources (MountPointId).
   * 
   * @param tmpReq - DescribeMountPointsVscAttachInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMountPointsVscAttachInfoResponse
   */
  async describeMountPointsVscAttachInfoWithOptions(tmpReq: $_model.DescribeMountPointsVscAttachInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMountPointsVscAttachInfoResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeMountPointsVscAttachInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queryInfos)) {
      request.queryInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryInfos, "QueryInfos", "json");
    }

    let query = { };
    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.queryInfosShrink)) {
      query["QueryInfos"] = request.queryInfosShrink;
    }

    if (!$dara.isNull(request.useAssumeRoleChkServerPerm)) {
      query["UseAssumeRoleChkServerPerm"] = request.useAssumeRoleChkServerPerm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMountPointsVscAttachInfo",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMountPointsVscAttachInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMountPointsVscAttachInfoResponse({}));
  }

  /**
   * Queries the mount information of VSCs in batches.
   * 
   * @remarks
   * Supports only one-to-many mappings from a storage resource (MountPointId) to multiple compute resources (InstanceId and VscId), and one-to-many mappings from a compute resource (InstanceId and VscId) to multiple storage resources (MountPointId).
   * 
   * @param request - DescribeMountPointsVscAttachInfoRequest
   * @returns DescribeMountPointsVscAttachInfoResponse
   */
  async describeMountPointsVscAttachInfo(request: $_model.DescribeMountPointsVscAttachInfoRequest): Promise<$_model.DescribeMountPointsVscAttachInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMountPointsVscAttachInfoWithOptions(request, runtime);
  }

  /**
   * Queries the available Alibaba Cloud regions.
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

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2018-06-20",
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
   * Queries the available Alibaba Cloud regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of VSC mount points.
   * 
   * @param request - DescribeVscMountPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVscMountPointsResponse
   */
  async describeVscMountPointsWithOptions(request: $_model.DescribeVscMountPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVscMountPointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.vscId)) {
      query["VscId"] = request.vscId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVscMountPoints",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVscMountPointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVscMountPointsResponse({}));
  }

  /**
   * Retrieves a list of VSC mount points.
   * 
   * @param request - DescribeVscMountPointsRequest
   * @returns DescribeVscMountPointsResponse
   */
  async describeVscMountPoints(request: $_model.DescribeVscMountPointsRequest): Promise<$_model.DescribeVscMountPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVscMountPointsWithOptions(request, runtime);
  }

  /**
   * Unmounts multiple VSC mount points.
   * 
   * @param tmpReq - DetachVscFromMountPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachVscFromMountPointsResponse
   */
  async detachVscFromMountPointsWithOptions(tmpReq: $_model.DetachVscFromMountPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachVscFromMountPointsResponse> {
    tmpReq.validate();
    let request = new $_model.DetachVscFromMountPointsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.detachInfos)) {
      request.detachInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detachInfos, "DetachInfos", "json");
    }

    let query = { };
    if (!$dara.isNull(request.detachInfosShrink)) {
      query["DetachInfos"] = request.detachInfosShrink;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.useAssumeRoleChkServerPerm)) {
      query["UseAssumeRoleChkServerPerm"] = request.useAssumeRoleChkServerPerm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachVscFromMountPoints",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachVscFromMountPointsResponse>(await this.callApi(params, req, runtime), new $_model.DetachVscFromMountPointsResponse({}));
  }

  /**
   * Unmounts multiple VSC mount points.
   * 
   * @param request - DetachVscFromMountPointsRequest
   * @returns DetachVscFromMountPointsResponse
   */
  async detachVscFromMountPoints(request: $_model.DetachVscFromMountPointsRequest): Promise<$_model.DetachVscFromMountPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachVscFromMountPointsWithOptions(request, runtime);
  }

  /**
   * Disassociates compute instances from a mount point.
   * 
   * @param tmpReq - DetachVscMountPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachVscMountPointResponse
   */
  async detachVscMountPointWithOptions(tmpReq: $_model.DetachVscMountPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachVscMountPointResponse> {
    tmpReq.validate();
    let request = new $_model.DetachVscMountPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    if (!$dara.isNull(tmpReq.vscIds)) {
      request.vscIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vscIds, "VscIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    if (!$dara.isNull(request.useAssumeRoleChkServerPerm)) {
      query["UseAssumeRoleChkServerPerm"] = request.useAssumeRoleChkServerPerm;
    }

    if (!$dara.isNull(request.vscIdsShrink)) {
      query["VscIds"] = request.vscIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachVscMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachVscMountPointResponse>(await this.callApi(params, req, runtime), new $_model.DetachVscMountPointResponse({}));
  }

  /**
   * Disassociates compute instances from a mount point.
   * 
   * @param request - DetachVscMountPointRequest
   * @returns DetachVscMountPointResponse
   */
  async detachVscMountPoint(request: $_model.DetachVscMountPointRequest): Promise<$_model.DetachVscMountPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachVscMountPointWithOptions(request, runtime);
  }

  /**
   * Retrieves the information about an access group.
   * 
   * @param request - GetAccessGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessGroupResponse
   */
  async getAccessGroupWithOptions(request: $_model.GetAccessGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessGroup",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessGroupResponse({}));
  }

  /**
   * Retrieves the information about an access group.
   * 
   * @param request - GetAccessGroupRequest
   * @returns GetAccessGroupResponse
   */
  async getAccessGroup(request: $_model.GetAccessGroupRequest): Promise<$_model.GetAccessGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessGroupWithOptions(request, runtime);
  }

  /**
   * Query permission group rule information.
   * 
   * @param request - GetAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessRuleResponse
   */
  async getAccessRuleWithOptions(request: $_model.GetAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!$dara.isNull(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessRule",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessRuleResponse({}));
  }

  /**
   * Query permission group rule information.
   * 
   * @param request - GetAccessRuleRequest
   * @returns GetAccessRuleResponse
   */
  async getAccessRule(request: $_model.GetAccessRuleRequest): Promise<$_model.GetAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessRuleWithOptions(request, runtime);
  }

  /**
   * Queries the file system information.
   * 
   * @param request - GetFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileSystemResponse
   */
  async getFileSystemWithOptions(request: $_model.GetFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileSystem",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.GetFileSystemResponse({}));
  }

  /**
   * Queries the file system information.
   * 
   * @param request - GetFileSystemRequest
   * @returns GetFileSystemResponse
   */
  async getFileSystem(request: $_model.GetFileSystemRequest): Promise<$_model.GetFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFileSystemWithOptions(request, runtime);
  }

  /**
   * Queries the details of a mount point.
   * 
   * @param request - GetMountPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMountPointResponse
   */
  async getMountPointWithOptions(request: $_model.GetMountPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMountPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMountPointResponse>(await this.callApi(params, req, runtime), new $_model.GetMountPointResponse({}));
  }

  /**
   * Queries the details of a mount point.
   * 
   * @param request - GetMountPointRequest
   * @returns GetMountPointResponse
   */
  async getMountPoint(request: $_model.GetMountPointRequest): Promise<$_model.GetMountPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMountPointWithOptions(request, runtime);
  }

  /**
   * Queries the configuration information for each zone in a specified region.
   * 
   * @param request - GetRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegionResponse
   */
  async getRegionWithOptions(request: $_model.GetRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegion",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegionResponse>(await this.callApi(params, req, runtime), new $_model.GetRegionResponse({}));
  }

  /**
   * Queries the configuration information for each zone in a specified region.
   * 
   * @param request - GetRegionRequest
   * @returns GetRegionResponse
   */
  async getRegion(request: $_model.GetRegionRequest): Promise<$_model.GetRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRegionWithOptions(request, runtime);
  }

  /**
   * Queries the details of access groups in batches.
   * 
   * @param request - ListAccessGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessGroupsResponse
   */
  async listAccessGroupsWithOptions(request: $_model.ListAccessGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.startOffset)) {
      query["StartOffset"] = request.startOffset;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccessGroups",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccessGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListAccessGroupsResponse({}));
  }

  /**
   * Queries the details of access groups in batches.
   * 
   * @param request - ListAccessGroupsRequest
   * @returns ListAccessGroupsResponse
   */
  async listAccessGroups(request: $_model.ListAccessGroupsRequest): Promise<$_model.ListAccessGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccessGroupsWithOptions(request, runtime);
  }

  /**
   * Queries access group rules.
   * 
   * @param request - ListAccessRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessRulesResponse
   */
  async listAccessRulesWithOptions(request: $_model.ListAccessRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.startOffset)) {
      query["StartOffset"] = request.startOffset;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccessRules",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccessRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListAccessRulesResponse({}));
  }

  /**
   * Queries access group rules.
   * 
   * @param request - ListAccessRulesRequest
   * @returns ListAccessRulesResponse
   */
  async listAccessRules(request: $_model.ListAccessRulesRequest): Promise<$_model.ListAccessRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccessRulesWithOptions(request, runtime);
  }

  /**
   * 查询Federation
   * 
   * @param request - ListFederationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFederationsResponse
   */
  async listFederationsWithOptions(request: $_model.ListFederationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFederationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.federationId)) {
      query["FederationId"] = request.federationId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFederations",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFederationsResponse>(await this.callApi(params, req, runtime), new $_model.ListFederationsResponse({}));
  }

  /**
   * 查询Federation
   * 
   * @param request - ListFederationsRequest
   * @returns ListFederationsResponse
   */
  async listFederations(request: $_model.ListFederationsRequest): Promise<$_model.ListFederationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFederationsWithOptions(request, runtime);
  }

  /**
   * Queries the details of multiple file systems.
   * 
   * @param request - ListFileSystemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFileSystemsResponse
   */
  async listFileSystemsWithOptions(request: $_model.ListFileSystemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFileSystemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.startOffset)) {
      query["StartOffset"] = request.startOffset;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFileSystems",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFileSystemsResponse>(await this.callApi(params, req, runtime), new $_model.ListFileSystemsResponse({}));
  }

  /**
   * Queries the details of multiple file systems.
   * 
   * @param request - ListFileSystemsRequest
   * @returns ListFileSystemsResponse
   */
  async listFileSystems(request: $_model.ListFileSystemsRequest): Promise<$_model.ListFileSystemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFileSystemsWithOptions(request, runtime);
  }

  /**
   * Queries mount point information in batches.
   * 
   * @param request - ListMountPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMountPointsResponse
   */
  async listMountPointsWithOptions(request: $_model.ListMountPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMountPointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.startOffset)) {
      query["StartOffset"] = request.startOffset;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMountPoints",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMountPointsResponse>(await this.callApi(params, req, runtime), new $_model.ListMountPointsResponse({}));
  }

  /**
   * Queries mount point information in batches.
   * 
   * @param request - ListMountPointsRequest
   * @returns ListMountPointsResponse
   */
  async listMountPoints(request: $_model.ListMountPointsRequest): Promise<$_model.ListMountPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMountPointsWithOptions(request, runtime);
  }

  /**
   * 查询QosPolicies
   * 
   * @param request - ListQosPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQosPoliciesResponse
   */
  async listQosPoliciesWithOptions(request: $_model.ListQosPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQosPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.federationId)) {
      query["FederationId"] = request.federationId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQosPolicies",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQosPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListQosPoliciesResponse({}));
  }

  /**
   * 查询QosPolicies
   * 
   * @param request - ListQosPoliciesRequest
   * @returns ListQosPoliciesResponse
   */
  async listQosPolicies(request: $_model.ListQosPoliciesRequest): Promise<$_model.ListQosPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQosPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the user and group mappings of an Apsara File Storage for HDFS file system instance.
   * 
   * @remarks
   * The permission management of Apsara File Storage for HDFS file systems relies on file users and groups. You must manage user and group mappings by calling API operations. For more information about directory and file access permissions in Apsara File Storage for HDFS, see [Directory and file access permissions](https://help.aliyun.com/document_detail/430865.html).
   * The number of users and groups in a single file system is subject to the following limits:
   * - A single file system supports up to 1,000 users.
   * - A single file system supports up to 30 groups.
   * - Each user can belong to up to 10 groups.
   * 
   * @param request - ListUserGroupsMappingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsMappingsResponse
   */
  async listUserGroupsMappingsWithOptions(request: $_model.ListUserGroupsMappingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserGroupsMappingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filesystemId)) {
      query["FilesystemId"] = request.filesystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserGroupsMappings",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserGroupsMappingsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserGroupsMappingsResponse({}));
  }

  /**
   * Queries the user and group mappings of an Apsara File Storage for HDFS file system instance.
   * 
   * @remarks
   * The permission management of Apsara File Storage for HDFS file systems relies on file users and groups. You must manage user and group mappings by calling API operations. For more information about directory and file access permissions in Apsara File Storage for HDFS, see [Directory and file access permissions](https://help.aliyun.com/document_detail/430865.html).
   * The number of users and groups in a single file system is subject to the following limits:
   * - A single file system supports up to 1,000 users.
   * - A single file system supports up to 30 groups.
   * - Each user can belong to up to 10 groups.
   * 
   * @param request - ListUserGroupsMappingsRequest
   * @returns ListUserGroupsMappingsResponse
   */
  async listUserGroupsMappings(request: $_model.ListUserGroupsMappingsRequest): Promise<$_model.ListUserGroupsMappingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserGroupsMappingsWithOptions(request, runtime);
  }

  /**
   * Modifies the information of a permission group.
   * 
   * @remarks
   * The default VPC permission group (DefaultAccessGroupName) cannot be modified.
   * 
   * @param request - ModifyAccessGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccessGroupResponse
   */
  async modifyAccessGroupWithOptions(request: $_model.ModifyAccessGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccessGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccessGroup",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccessGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccessGroupResponse({}));
  }

  /**
   * Modifies the information of a permission group.
   * 
   * @remarks
   * The default VPC permission group (DefaultAccessGroupName) cannot be modified.
   * 
   * @param request - ModifyAccessGroupRequest
   * @returns ModifyAccessGroupResponse
   */
  async modifyAccessGroup(request: $_model.ModifyAccessGroupRequest): Promise<$_model.ModifyAccessGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccessGroupWithOptions(request, runtime);
  }

  /**
   * Modifies a permission group rule.
   * 
   * @remarks
   * Rules in the default VPC permission group (DefaultAccessGroupName) cannot be modified.
   * 
   * @param request - ModifyAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccessRuleResponse
   */
  async modifyAccessRuleWithOptions(request: $_model.ModifyAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!$dara.isNull(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.RWAccessType)) {
      query["RWAccessType"] = request.RWAccessType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccessRule",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccessRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccessRuleResponse({}));
  }

  /**
   * Modifies a permission group rule.
   * 
   * @remarks
   * Rules in the default VPC permission group (DefaultAccessGroupName) cannot be modified.
   * 
   * @param request - ModifyAccessRuleRequest
   * @returns ModifyAccessRuleResponse
   */
  async modifyAccessRule(request: $_model.ModifyAccessRuleRequest): Promise<$_model.ModifyAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccessRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a file system.
   * 
   * @remarks
   * Before modifying a file system, review the [billing methods](https://help.aliyun.com/document_detail/419020.html) and [pricing of Apsara File Storage for HDFS](https://www.aliyun.com/price/product?spm=openapi-amp.newDocPublishment.0.0.3fbc281fRrtedx#/alidfs/detail/alidfs).
   * 
   * @param request - ModifyFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFileSystemResponse
   */
  async modifyFileSystemWithOptions(request: $_model.ModifyFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemName)) {
      query["FileSystemName"] = request.fileSystemName;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.meteringMode)) {
      query["MeteringMode"] = request.meteringMode;
    }

    if (!$dara.isNull(request.provisionedThroughputInMiBps)) {
      query["ProvisionedThroughputInMiBps"] = request.provisionedThroughputInMiBps;
    }

    if (!$dara.isNull(request.spaceCapacity)) {
      query["SpaceCapacity"] = request.spaceCapacity;
    }

    if (!$dara.isNull(request.throughputMode)) {
      query["ThroughputMode"] = request.throughputMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFileSystem",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFileSystemResponse({}));
  }

  /**
   * Modifies the attributes of a file system.
   * 
   * @remarks
   * Before modifying a file system, review the [billing methods](https://help.aliyun.com/document_detail/419020.html) and [pricing of Apsara File Storage for HDFS](https://www.aliyun.com/price/product?spm=openapi-amp.newDocPublishment.0.0.3fbc281fRrtedx#/alidfs/detail/alidfs).
   * 
   * @param request - ModifyFileSystemRequest
   * @returns ModifyFileSystemResponse
   */
  async modifyFileSystem(request: $_model.ModifyFileSystemRequest): Promise<$_model.ModifyFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFileSystemWithOptions(request, runtime);
  }

  /**
   * Modifies the information of a mount point.
   * 
   * @param request - ModifyMountPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMountPointResponse
   */
  async modifyMountPointWithOptions(request: $_model.ModifyMountPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMountPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMountPointResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMountPointResponse({}));
  }

  /**
   * Modifies the information of a mount point.
   * 
   * @param request - ModifyMountPointRequest
   * @returns ModifyMountPointResponse
   */
  async modifyMountPoint(request: $_model.ModifyMountPointRequest): Promise<$_model.ModifyMountPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMountPointWithOptions(request, runtime);
  }

  /**
   * ModifyQosPolicy
   * 
   * @param request - ModifyQosPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyQosPolicyResponse
   */
  async modifyQosPolicyWithOptions(request: $_model.ModifyQosPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyQosPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.federationId)) {
      query["FederationId"] = request.federationId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!$dara.isNull(request.maxIOBandWidth)) {
      query["MaxIOBandWidth"] = request.maxIOBandWidth;
    }

    if (!$dara.isNull(request.maxIOps)) {
      query["MaxIOps"] = request.maxIOps;
    }

    if (!$dara.isNull(request.maxMetaQps)) {
      query["MaxMetaQps"] = request.maxMetaQps;
    }

    if (!$dara.isNull(request.qosPolicyId)) {
      query["QosPolicyId"] = request.qosPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyQosPolicy",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyQosPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyQosPolicyResponse({}));
  }

  /**
   * ModifyQosPolicy
   * 
   * @param request - ModifyQosPolicyRequest
   * @returns ModifyQosPolicyResponse
   */
  async modifyQosPolicy(request: $_model.ModifyQosPolicyRequest): Promise<$_model.ModifyQosPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyQosPolicyWithOptions(request, runtime);
  }

}
