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
      'cn-qingdao': "ddosbgp.aliyuncs.com",
      'cn-beijing': "ddosbgp.aliyuncs.com",
      'cn-zhangjiakou': "ddosbgp.aliyuncs.com",
      'cn-huhehaote': "ddosbgp.aliyuncs.com",
      'cn-hangzhou': "ddosbgp.aliyuncs.com",
      'cn-shanghai': "ddosbgp.aliyuncs.com",
      'cn-shenzhen': "ddosbgp.aliyuncs.com",
      'ap-northeast-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'cn-chengdu': "ddosbgp.aliyuncs.com",
      'eu-central-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'me-east-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "ddosbgp.aliyuncs.com",
      'cn-shenzhen-finance-1': "ddosbgp.aliyuncs.com",
      'cn-shanghai-finance-1': "ddosbgp.aliyuncs.com",
      'cn-north-2-gov-1': "ddosbgp.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ddosbgp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds IP addresses to an Anti-DDoS Origin instance.
   * 
   * @param request - AddIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddIpResponse
   */
  async addIpWithOptions(request: $_model.AddIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ipList)) {
      query["IpList"] = request.ipList;
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
      action: "AddIp",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddIpResponse>(await this.callApi(params, req, runtime), new $_model.AddIpResponse({}));
  }

  /**
   * Adds IP addresses to an Anti-DDoS Origin instance.
   * 
   * @param request - AddIpRequest
   * @returns AddIpResponse
   */
  async addIp(request: $_model.AddIpRequest): Promise<$_model.AddIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addIpWithOptions(request, runtime);
  }

  /**
   * Adds members to a resource directory.
   * 
   * @remarks
   * Only a delegated administrator account or the management account of a resource directory can be used to add members to the resource directory.
   * 
   * @param tmpReq - AddRdMemberListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRdMemberListResponse
   */
  async addRdMemberListWithOptions(tmpReq: $_model.AddRdMemberListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRdMemberListResponse> {
    tmpReq.validate();
    let request = new $_model.AddRdMemberListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.memberList)) {
      request.memberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.memberList, "MemberList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.memberListShrink)) {
      query["MemberList"] = request.memberListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRdMemberList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRdMemberListResponse>(await this.callApi(params, req, runtime), new $_model.AddRdMemberListResponse({}));
  }

  /**
   * Adds members to a resource directory.
   * 
   * @remarks
   * Only a delegated administrator account or the management account of a resource directory can be used to add members to the resource directory.
   * 
   * @param request - AddRdMemberListRequest
   * @returns AddRdMemberListResponse
   */
  async addRdMemberList(request: $_model.AddRdMemberListRequest): Promise<$_model.AddRdMemberListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRdMemberListWithOptions(request, runtime);
  }

  /**
   * Associates an asset with an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param tmpReq - AttachAssetGroupToInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachAssetGroupToInstanceResponse
   */
  async attachAssetGroupToInstanceWithOptions(tmpReq: $_model.AttachAssetGroupToInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachAssetGroupToInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.AttachAssetGroupToInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assetGroupList)) {
      request.assetGroupListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assetGroupList, "AssetGroupList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assetGroupListShrink)) {
      query["AssetGroupList"] = request.assetGroupListShrink;
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
      action: "AttachAssetGroupToInstance",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachAssetGroupToInstanceResponse>(await this.callApi(params, req, runtime), new $_model.AttachAssetGroupToInstanceResponse({}));
  }

  /**
   * Associates an asset with an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param request - AttachAssetGroupToInstanceRequest
   * @returns AttachAssetGroupToInstanceResponse
   */
  async attachAssetGroupToInstance(request: $_model.AttachAssetGroupToInstanceRequest): Promise<$_model.AttachAssetGroupToInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachAssetGroupToInstanceWithOptions(request, runtime);
  }

  /**
   * Associates a mitigation policy to a protected object.
   * 
   * @param tmpReq - AttachToPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachToPolicyResponse
   */
  async attachToPolicyWithOptions(tmpReq: $_model.AttachToPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachToPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.AttachToPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ipPortProtocolList)) {
      request.ipPortProtocolListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipPortProtocolList, "IpPortProtocolList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ipPortProtocolListShrink)) {
      query["IpPortProtocolList"] = request.ipPortProtocolListShrink;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.portVersion)) {
      query["PortVersion"] = request.portVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachToPolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachToPolicyResponse>(await this.callApi(params, req, runtime), new $_model.AttachToPolicyResponse({}));
  }

  /**
   * Associates a mitigation policy to a protected object.
   * 
   * @param request - AttachToPolicyRequest
   * @returns AttachToPolicyResponse
   */
  async attachToPolicy(request: $_model.AttachToPolicyRequest): Promise<$_model.AttachToPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachToPolicyWithOptions(request, runtime);
  }

  /**
   * Queries whether Anti-DDoS Origin is authorized to access Simple Log Service.
   * 
   * @param request - CheckAccessLogAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAccessLogAuthResponse
   */
  async checkAccessLogAuthWithOptions(request: $_model.CheckAccessLogAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAccessLogAuthResponse> {
    request.validate();
    let query = { };
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
      action: "CheckAccessLogAuth",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckAccessLogAuthResponse>(await this.callApi(params, req, runtime), new $_model.CheckAccessLogAuthResponse({}));
  }

  /**
   * Queries whether Anti-DDoS Origin is authorized to access Simple Log Service.
   * 
   * @param request - CheckAccessLogAuthRequest
   * @returns CheckAccessLogAuthResponse
   */
  async checkAccessLogAuth(request: $_model.CheckAccessLogAuthRequest): Promise<$_model.CheckAccessLogAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAccessLogAuthWithOptions(request, runtime);
  }

  /**
   * Queries whether Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account.
   * 
   * @remarks
   * You can call the CheckGrant operation to query whether Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CheckGrantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckGrantResponse
   */
  async checkGrantWithOptions(request: $_model.CheckGrantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckGrantResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckGrant",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckGrantResponse>(await this.callApi(params, req, runtime), new $_model.CheckGrantResponse({}));
  }

  /**
   * Queries whether Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account.
   * 
   * @remarks
   * You can call the CheckGrant operation to query whether Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CheckGrantRequest
   * @returns CheckGrantResponse
   */
  async checkGrant(request: $_model.CheckGrantRequest): Promise<$_model.CheckGrantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkGrantWithOptions(request, runtime);
  }

  /**
   * Creates a mitigation policy.
   * 
   * @param request - CreatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(request: $_model.CreatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.portVersion)) {
      query["PortVersion"] = request.portVersion;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicyResponse({}));
  }

  /**
   * Creates a mitigation policy.
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: $_model.CreatePolicyRequest): Promise<$_model.CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * Deactivates blackhole filtering for a protected IP address.
   * 
   * @remarks
   * You can call the DeleteBlackhole operation to deactivate blackhole filtering for a protected IP address.
   * Before you call this operation, you can call the [DescribePackIpList](https://help.aliyun.com/document_detail/118701.html) operation to query the protection status of the IP addresses that are protected by your Anti-DDoS Origin instance. For example, you can query whether blackhole filtering is triggered for an IP address.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteBlackholeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBlackholeResponse
   */
  async deleteBlackholeWithOptions(request: $_model.DeleteBlackholeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBlackholeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
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
      action: "DeleteBlackhole",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBlackholeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBlackholeResponse({}));
  }

  /**
   * Deactivates blackhole filtering for a protected IP address.
   * 
   * @remarks
   * You can call the DeleteBlackhole operation to deactivate blackhole filtering for a protected IP address.
   * Before you call this operation, you can call the [DescribePackIpList](https://help.aliyun.com/document_detail/118701.html) operation to query the protection status of the IP addresses that are protected by your Anti-DDoS Origin instance. For example, you can query whether blackhole filtering is triggered for an IP address.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteBlackholeRequest
   * @returns DeleteBlackholeResponse
   */
  async deleteBlackhole(request: $_model.DeleteBlackholeRequest): Promise<$_model.DeleteBlackholeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBlackholeWithOptions(request, runtime);
  }

  /**
   * Removes specific IP addresses from an Anti-DDoS Origin instance.
   * 
   * @remarks
   * The Anti-DDoS Origin Enterprise instance no longer protects the IP addresses that are removed.
   * 
   * @param request - DeleteIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpResponse
   */
  async deleteIpWithOptions(request: $_model.DeleteIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ipList)) {
      query["IpList"] = request.ipList;
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
      action: "DeleteIp",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIpResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIpResponse({}));
  }

  /**
   * Removes specific IP addresses from an Anti-DDoS Origin instance.
   * 
   * @remarks
   * The Anti-DDoS Origin Enterprise instance no longer protects the IP addresses that are removed.
   * 
   * @param request - DeleteIpRequest
   * @returns DeleteIpResponse
   */
  async deleteIp(request: $_model.DeleteIpRequest): Promise<$_model.DeleteIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpWithOptions(request, runtime);
  }

  /**
   * Deletes a mitigation policy.
   * 
   * @remarks
   * You cannot delete a mitigation policy to which a protected object is added.
   * 
   * @param request - DeletePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: $_model.DeletePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyResponse({}));
  }

  /**
   * Deletes a mitigation policy.
   * 
   * @remarks
   * You cannot delete a mitigation policy to which a protected object is added.
   * 
   * @param request - DeletePolicyRequest
   * @returns DeletePolicyResponse
   */
  async deletePolicy(request: $_model.DeletePolicyRequest): Promise<$_model.DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * Deletes members.
   * 
   * @remarks
   * Only a delegated administrator account or the management account of a resource directory can be used to delete members.
   * 
   * @param tmpReq - DeleteRdMemberListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRdMemberListResponse
   */
  async deleteRdMemberListWithOptions(tmpReq: $_model.DeleteRdMemberListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRdMemberListResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteRdMemberListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.memberList)) {
      request.memberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.memberList, "MemberList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.memberListShrink)) {
      query["MemberList"] = request.memberListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRdMemberList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRdMemberListResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRdMemberListResponse({}));
  }

  /**
   * Deletes members.
   * 
   * @remarks
   * Only a delegated administrator account or the management account of a resource directory can be used to delete members.
   * 
   * @param request - DeleteRdMemberListRequest
   * @returns DeleteRdMemberListResponse
   */
  async deleteRdMemberList(request: $_model.DeleteRdMemberListRequest): Promise<$_model.DeleteRdMemberListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRdMemberListWithOptions(request, runtime);
  }

  /**
   * Queries the association between an asset and an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param request - DescribeAssetGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAssetGroupResponse
   */
  async describeAssetGroupWithOptions(request: $_model.DescribeAssetGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAssetGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
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
      action: "DescribeAssetGroup",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAssetGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAssetGroupResponse({}));
  }

  /**
   * Queries the association between an asset and an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param request - DescribeAssetGroupRequest
   * @returns DescribeAssetGroupResponse
   */
  async describeAssetGroup(request: $_model.DescribeAssetGroupRequest): Promise<$_model.DescribeAssetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAssetGroupWithOptions(request, runtime);
  }

  /**
   * Queries the association between an asset and an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param request - DescribeAssetGroupToInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAssetGroupToInstanceResponse
   */
  async describeAssetGroupToInstanceWithOptions(request: $_model.DescribeAssetGroupToInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAssetGroupToInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
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
      action: "DescribeAssetGroupToInstance",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAssetGroupToInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAssetGroupToInstanceResponse({}));
  }

  /**
   * Queries the association between an asset and an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param request - DescribeAssetGroupToInstanceRequest
   * @returns DescribeAssetGroupToInstanceResponse
   */
  async describeAssetGroupToInstance(request: $_model.DescribeAssetGroupToInstanceRequest): Promise<$_model.DescribeAssetGroupToInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAssetGroupToInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details about the DDoS attack events that occurred on an Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the DescribeDdosEvent operation to query the details about the DDoS attack events that occurred on an Anti-DDoS Origin instance by page. The details include the start time, end time, attacked IP address, and status of each event.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDdosEventResponse
   */
  async describeDdosEventWithOptions(request: $_model.DescribeDdosEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDdosEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDdosEvent",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDdosEventResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDdosEventResponse({}));
  }

  /**
   * Queries the details about the DDoS attack events that occurred on an Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the DescribeDdosEvent operation to query the details about the DDoS attack events that occurred on an Anti-DDoS Origin instance by page. The details include the start time, end time, attacked IP address, and status of each event.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosEventRequest
   * @returns DescribeDdosEventResponse
   */
  async describeDdosEvent(request: $_model.DescribeDdosEventRequest): Promise<$_model.DescribeDdosEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDdosEventWithOptions(request, runtime);
  }

  /**
   * Queries the bill of an Anti-DDoS Origin (Pay-as-you-go) instance.
   * 
   * @param request - DescribeDdosOriginInstanceBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDdosOriginInstanceBillResponse
   */
  async describeDdosOriginInstanceBillWithOptions(request: $_model.DescribeDdosOriginInstanceBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDdosOriginInstanceBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.isShowList)) {
      query["IsShowList"] = request.isShowList;
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
      action: "DescribeDdosOriginInstanceBill",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDdosOriginInstanceBillResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDdosOriginInstanceBillResponse({}));
  }

  /**
   * Queries the bill of an Anti-DDoS Origin (Pay-as-you-go) instance.
   * 
   * @param request - DescribeDdosOriginInstanceBillRequest
   * @returns DescribeDdosOriginInstanceBillResponse
   */
  async describeDdosOriginInstanceBill(request: $_model.DescribeDdosOriginInstanceBillRequest): Promise<$_model.DescribeDdosOriginInstanceBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDdosOriginInstanceBillWithOptions(request, runtime);
  }

  /**
   * Queries the number of assets that are in an abnormal state and the number of Anti-DDoS Origin instances that are about to expire. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * ## Usage notes
   * You can call the DescribeExcpetionCount operation to query the number of assets that are in an abnormal state and the number of Anti-DDoS Origin instances that are about to expire in a specific region. For example, if blackhole filtering is triggered for an IP address, the IP address is in an abnormal state. An instance whose remaining validity period is less than seven days is considered as an instance that is about to expire.
   * 
   * @param request - DescribeExcpetionCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExcpetionCountResponse
   */
  async describeExcpetionCountWithOptions(request: $_model.DescribeExcpetionCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExcpetionCountResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeExcpetionCount",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExcpetionCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExcpetionCountResponse({}));
  }

  /**
   * Queries the number of assets that are in an abnormal state and the number of Anti-DDoS Origin instances that are about to expire. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * ## Usage notes
   * You can call the DescribeExcpetionCount operation to query the number of assets that are in an abnormal state and the number of Anti-DDoS Origin instances that are about to expire in a specific region. For example, if blackhole filtering is triggered for an IP address, the IP address is in an abnormal state. An instance whose remaining validity period is less than seven days is considered as an instance that is about to expire.
   * 
   * @param request - DescribeExcpetionCountRequest
   * @returns DescribeExcpetionCountResponse
   */
  async describeExcpetionCount(request: $_model.DescribeExcpetionCountRequest): Promise<$_model.DescribeExcpetionCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExcpetionCountWithOptions(request, runtime);
  }

  /**
   * Queries the details of all Anti-DDoS Origin instances.
   * 
   * @remarks
   * Queries the details of all Anti-DDoS Origin instances.
   * 
   * @param request - DescribeInstanceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceListResponse
   */
  async describeInstanceListWithOptions(request: $_model.DescribeInstanceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.instanceTypeList)) {
      query["InstanceTypeList"] = request.instanceTypeList;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.orderby)) {
      query["Orderby"] = request.orderby;
    }

    if (!$dara.isNull(request.orderdire)) {
      query["Orderdire"] = request.orderdire;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
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
      action: "DescribeInstanceList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceListResponse({}));
  }

  /**
   * Queries the details of all Anti-DDoS Origin instances.
   * 
   * @remarks
   * Queries the details of all Anti-DDoS Origin instances.
   * 
   * @param request - DescribeInstanceListRequest
   * @returns DescribeInstanceListResponse
   */
  async describeInstanceList(request: $_model.DescribeInstanceListRequest): Promise<$_model.DescribeInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceListWithOptions(request, runtime);
  }

  /**
   * Queries the specifications of a specific Anti-DDoS Origin instance.
   * 
   * @param request - DescribeInstanceSpecsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSpecsResponse
   */
  async describeInstanceSpecsWithOptions(request: $_model.DescribeInstanceSpecsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSpecsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
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
      action: "DescribeInstanceSpecs",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSpecsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSpecsResponse({}));
  }

  /**
   * Queries the specifications of a specific Anti-DDoS Origin instance.
   * 
   * @param request - DescribeInstanceSpecsRequest
   * @returns DescribeInstanceSpecsResponse
   */
  async describeInstanceSpecs(request: $_model.DescribeInstanceSpecsRequest): Promise<$_model.DescribeInstanceSpecsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSpecsWithOptions(request, runtime);
  }

  /**
   * Queries the operation logs of an Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the DescribeOpEntities operation to query the operation logs of an instance by page.
   * ### Limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeOpEntitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOpEntitiesResponse
   */
  async describeOpEntitiesWithOptions(request: $_model.DescribeOpEntitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOpEntitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.opAction)) {
      query["OpAction"] = request.opAction;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDir)) {
      query["OrderDir"] = request.orderDir;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOpEntities",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOpEntitiesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOpEntitiesResponse({}));
  }

  /**
   * Queries the operation logs of an Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the DescribeOpEntities operation to query the operation logs of an instance by page.
   * ### Limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeOpEntitiesRequest
   * @returns DescribeOpEntitiesResponse
   */
  async describeOpEntities(request: $_model.DescribeOpEntitiesRequest): Promise<$_model.DescribeOpEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOpEntitiesWithOptions(request, runtime);
  }

  /**
   * Queries the IP addresses that are protected by a specific Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the DescribePackIpList operation to query the details about each IP address that is protected by a specific Anti-DDoS Origin instance by page. The details include the IP address and the type of the cloud asset to which the IP address belongs. The details also include the status of the IP address, such as whether blackhole filtering is triggered for the IP address.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePackIpListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePackIpListResponse
   */
  async describePackIpListWithOptions(request: $_model.DescribePackIpListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePackIpListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
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
      action: "DescribePackIpList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePackIpListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePackIpListResponse({}));
  }

  /**
   * Queries the IP addresses that are protected by a specific Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the DescribePackIpList operation to query the details about each IP address that is protected by a specific Anti-DDoS Origin instance by page. The details include the IP address and the type of the cloud asset to which the IP address belongs. The details also include the status of the IP address, such as whether blackhole filtering is triggered for the IP address.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePackIpListRequest
   * @returns DescribePackIpListResponse
   */
  async describePackIpList(request: $_model.DescribePackIpListRequest): Promise<$_model.DescribePackIpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackIpListWithOptions(request, runtime);
  }

  /**
   * Queries members in a resource directory.
   * 
   * @param request - DescribeRdMemberListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdMemberListResponse
   */
  async describeRdMemberListWithOptions(request: $_model.DescribeRdMemberListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRdMemberListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceDirectoryId)) {
      query["ResourceDirectoryId"] = request.resourceDirectoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRdMemberList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRdMemberListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRdMemberListResponse({}));
  }

  /**
   * Queries members in a resource directory.
   * 
   * @param request - DescribeRdMemberListRequest
   * @returns DescribeRdMemberListResponse
   */
  async describeRdMemberList(request: $_model.DescribeRdMemberListRequest): Promise<$_model.DescribeRdMemberListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdMemberListWithOptions(request, runtime);
  }

  /**
   * Queries the status of the multi-account management feature.
   * 
   * @param request - DescribeRdStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdStatusResponse
   */
  async describeRdStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRdStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRdStatus",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRdStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRdStatusResponse({}));
  }

  /**
   * Queries the status of the multi-account management feature.
   * @returns DescribeRdStatusResponse
   */
  async describeRdStatus(): Promise<$_model.DescribeRdStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdStatusWithOptions(runtime);
  }

  /**
   * Queries the regions of assets that can be protected by Anti-DDoS Origin Enterprise in a specific region.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeRegions",
      version: "2018-07-20",
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
   * Queries the regions of assets that can be protected by Anti-DDoS Origin Enterprise in a specific region.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries traffic statistics of an Anti-DDoS Origin instance within a specific time period.
   * 
   * @remarks
   * You can call the DescribeTraffic operation to query traffic statistics of an Anti-DDoS Origin instance within a specific time period.  
   * >  When you call this operation, you must configure the **InstanceId** parameter to specify the Anti-DDoS Origin instance whose traffic statistics you want to query.  
   * ## Limits
   * You can call this operation once per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeTrafficRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrafficResponse
   */
  async describeTrafficWithOptions(request: $_model.DescribeTrafficRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTrafficResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.flowType)) {
      query["FlowType"] = request.flowType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.ipnet)) {
      query["Ipnet"] = request.ipnet;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTraffic",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTrafficResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTrafficResponse({}));
  }

  /**
   * Queries traffic statistics of an Anti-DDoS Origin instance within a specific time period.
   * 
   * @remarks
   * You can call the DescribeTraffic operation to query traffic statistics of an Anti-DDoS Origin instance within a specific time period.  
   * >  When you call this operation, you must configure the **InstanceId** parameter to specify the Anti-DDoS Origin instance whose traffic statistics you want to query.  
   * ## Limits
   * You can call this operation once per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeTrafficRequest
   * @returns DescribeTrafficResponse
   */
  async describeTraffic(request: $_model.DescribeTrafficRequest): Promise<$_model.DescribeTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTrafficWithOptions(request, runtime);
  }

  /**
   * Removes protected objects from a mitigation policy.
   * 
   * @param tmpReq - DetachFromPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachFromPolicyResponse
   */
  async detachFromPolicyWithOptions(tmpReq: $_model.DetachFromPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachFromPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.DetachFromPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ipPortProtocolList)) {
      request.ipPortProtocolListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipPortProtocolList, "IpPortProtocolList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ipPortProtocolListShrink)) {
      query["IpPortProtocolList"] = request.ipPortProtocolListShrink;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.portVersion)) {
      query["PortVersion"] = request.portVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachFromPolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachFromPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DetachFromPolicyResponse({}));
  }

  /**
   * Removes protected objects from a mitigation policy.
   * 
   * @param request - DetachFromPolicyRequest
   * @returns DetachFromPolicyResponse
   */
  async detachFromPolicy(request: $_model.DetachFromPolicyRequest): Promise<$_model.DetachFromPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachFromPolicyWithOptions(request, runtime);
  }

  /**
   * Dissociates an asset from an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param tmpReq - DettachAssetGroupToInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DettachAssetGroupToInstanceResponse
   */
  async dettachAssetGroupToInstanceWithOptions(tmpReq: $_model.DettachAssetGroupToInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DettachAssetGroupToInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.DettachAssetGroupToInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assetGroupList)) {
      request.assetGroupListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assetGroupList, "AssetGroupList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assetGroupListShrink)) {
      query["AssetGroupList"] = request.assetGroupListShrink;
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
      action: "DettachAssetGroupToInstance",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DettachAssetGroupToInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DettachAssetGroupToInstanceResponse({}));
  }

  /**
   * Dissociates an asset from an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param request - DettachAssetGroupToInstanceRequest
   * @returns DettachAssetGroupToInstanceResponse
   */
  async dettachAssetGroupToInstance(request: $_model.DettachAssetGroupToInstanceRequest): Promise<$_model.DettachAssetGroupToInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dettachAssetGroupToInstanceWithOptions(request, runtime);
  }

  /**
   * Queries whether Simple Log Service is activated.
   * 
   * @param request - GetSlsOpenStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSlsOpenStatusResponse
   */
  async getSlsOpenStatusWithOptions(request: $_model.GetSlsOpenStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSlsOpenStatusResponse> {
    request.validate();
    let query = { };
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
      action: "GetSlsOpenStatus",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSlsOpenStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetSlsOpenStatusResponse({}));
  }

  /**
   * Queries whether Simple Log Service is activated.
   * 
   * @param request - GetSlsOpenStatusRequest
   * @returns GetSlsOpenStatusResponse
   */
  async getSlsOpenStatus(request: $_model.GetSlsOpenStatusRequest): Promise<$_model.GetSlsOpenStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSlsOpenStatusWithOptions(request, runtime);
  }

  /**
   * Queries the Anti-DDoS Origin instances for which log analysis is enabled.
   * 
   * @param request - ListOpenedAccessLogInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOpenedAccessLogInstancesResponse
   */
  async listOpenedAccessLogInstancesWithOptions(request: $_model.ListOpenedAccessLogInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOpenedAccessLogInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOpenedAccessLogInstances",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOpenedAccessLogInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListOpenedAccessLogInstancesResponse({}));
  }

  /**
   * Queries the Anti-DDoS Origin instances for which log analysis is enabled.
   * 
   * @param request - ListOpenedAccessLogInstancesRequest
   * @returns ListOpenedAccessLogInstancesResponse
   */
  async listOpenedAccessLogInstances(request: $_model.ListOpenedAccessLogInstancesRequest): Promise<$_model.ListOpenedAccessLogInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOpenedAccessLogInstancesWithOptions(request, runtime);
  }

  /**
   * Queries mitigation policies.
   * 
   * @param request - ListPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyResponse
   */
  async listPolicyWithOptions(request: $_model.ListPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicyResponse({}));
  }

  /**
   * Queries mitigation policies.
   * 
   * @param request - ListPolicyRequest
   * @returns ListPolicyResponse
   */
  async listPolicy(request: $_model.ListPolicyRequest): Promise<$_model.ListPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyWithOptions(request, runtime);
  }

  /**
   * Queries attachments to mitigation policies.
   * 
   * @param tmpReq - ListPolicyAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyAttachmentResponse
   */
  async listPolicyAttachmentWithOptions(tmpReq: $_model.ListPolicyAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicyAttachmentResponse> {
    tmpReq.validate();
    let request = new $_model.ListPolicyAttachmentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ipPortProtocolList)) {
      request.ipPortProtocolListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipPortProtocolList, "IpPortProtocolList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ipPortProtocolListShrink)) {
      query["IpPortProtocolList"] = request.ipPortProtocolListShrink;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.portVersion)) {
      query["PortVersion"] = request.portVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicyAttachment",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicyAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicyAttachmentResponse({}));
  }

  /**
   * Queries attachments to mitigation policies.
   * 
   * @param request - ListPolicyAttachmentRequest
   * @returns ListPolicyAttachmentResponse
   */
  async listPolicyAttachment(request: $_model.ListPolicyAttachmentRequest): Promise<$_model.ListPolicyAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyAttachmentWithOptions(request, runtime);
  }

  /**
   * Queries all tags.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: $_model.ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListTagKeysResponse({}));
  }

  /**
   * Queries all tags.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the relationship between Anti-DDoS Origin instances and tags.
   * 
   * @remarks
   * You can call the ListTagResources operation to query the tags that are added to Anti-DDoS Origin instances at a time.
   * ### [](#qps-)Limits
   * You can call this API operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      version: "2018-07-20",
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
   * Queries the relationship between Anti-DDoS Origin instances and tags.
   * 
   * @remarks
   * You can call the ListTagResources operation to query the tags that are added to Anti-DDoS Origin instances at a time.
   * ### [](#qps-)Limits
   * You can call this API operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies a mitigation policy.
   * 
   * @remarks
   * Modifies a mitigation policy.
   * 
   * @param tmpReq - ModifyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyResponse
   */
  async modifyPolicyWithOptions(tmpReq: $_model.ModifyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.portVersion)) {
      query["PortVersion"] = request.portVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPolicyResponse({}));
  }

  /**
   * Modifies a mitigation policy.
   * 
   * @remarks
   * Modifies a mitigation policy.
   * 
   * @param request - ModifyPolicyRequest
   * @returns ModifyPolicyResponse
   */
  async modifyPolicy(request: $_model.ModifyPolicyRequest): Promise<$_model.ModifyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the content of the mitigation policy.
   * 
   * @remarks
   * Make sure that all request parameters are configured when you call this operation. If any parameter is left empty, the configuration is deleted.
   * 
   * @param tmpReq - ModifyPolicyContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyContentResponse
   */
  async modifyPolicyContentWithOptions(tmpReq: $_model.ModifyPolicyContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPolicyContentResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyPolicyContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    let query = { };
    if (!$dara.isNull(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.portVersion)) {
      query["PortVersion"] = request.portVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolicyContent",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPolicyContentResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPolicyContentResponse({}));
  }

  /**
   * Modifies the content of the mitigation policy.
   * 
   * @remarks
   * Make sure that all request parameters are configured when you call this operation. If any parameter is left empty, the configuration is deleted.
   * 
   * @param request - ModifyPolicyContentRequest
   * @returns ModifyPolicyContentResponse
   */
  async modifyPolicyContent(request: $_model.ModifyPolicyContentRequest): Promise<$_model.ModifyPolicyContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolicyContentWithOptions(request, runtime);
  }

  /**
   * Adds remarks for a single Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the ModifyRemark operation to add remarks for a single Anti-DDoS Origin instance.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRemarkResponse
   */
  async modifyRemarkWithOptions(request: $_model.ModifyRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRemark",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRemarkResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRemarkResponse({}));
  }

  /**
   * Adds remarks for a single Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the ModifyRemark operation to add remarks for a single Anti-DDoS Origin instance.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyRemarkRequest
   * @returns ModifyRemarkResponse
   */
  async modifyRemark(request: $_model.ModifyRemarkRequest): Promise<$_model.ModifyRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRemarkWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a cloud resource belongs.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: $_model.MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
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

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResourceGroup",
      version: "2018-07-20",
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
   * Changes the resource group to which a cloud resource belongs.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Releases a pay-as-you-go Anti-DDoS Origin instance.
   * 
   * @param request - ReleaseDdosOriginInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseDdosOriginInstanceResponse
   */
  async releaseDdosOriginInstanceWithOptions(request: $_model.ReleaseDdosOriginInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseDdosOriginInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseDdosOriginInstance",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseDdosOriginInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseDdosOriginInstanceResponse({}));
  }

  /**
   * Releases a pay-as-you-go Anti-DDoS Origin instance.
   * 
   * @param request - ReleaseDdosOriginInstanceRequest
   * @returns ReleaseDdosOriginInstanceResponse
   */
  async releaseDdosOriginInstance(request: $_model.ReleaseDdosOriginInstanceRequest): Promise<$_model.ReleaseDdosOriginInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseDdosOriginInstanceWithOptions(request, runtime);
  }

  /**
   * Add tags to Anti-DDoS Origin instances.
   * 
   * @remarks
   * You can call the TagResources operation to add tags to instances.
   * ### Limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      version: "2018-07-20",
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
   * Add tags to Anti-DDoS Origin instances.
   * 
   * @remarks
   * You can call the TagResources operation to add tags to instances.
   * ### Limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from Anti-DDoS Origin instances.
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      version: "2018-07-20",
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
   * Removes tags from Anti-DDoS Origin instances.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
