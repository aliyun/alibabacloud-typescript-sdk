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
      'us-west-1': "tag.us-east-1.aliyuncs.com",
      'cn-hangzhou-finance': "tag.cn-hangzhou.aliyuncs.com",
      'cn-shanghai-finance-1': "tag.aliyuncs.com",
      'ap-northeast-2-pop': "tag.aliyuncs.com",
      'cn-beijing-finance-pop': "tag.aliyuncs.com",
      'cn-beijing-gov-1': "tag.aliyuncs.com",
      'cn-beijing-nu16-b01': "tag.cn-hangzhou.aliyuncs.com",
      'cn-edge-1': "tag.aliyuncs.com",
      'cn-fujian': "tag.cn-hangzhou.aliyuncs.com",
      'cn-haidian-cm12-c01': "tag.cn-north-2-gov-1.aliyuncs.com",
      'cn-hangzhou-bj-b01': "tag.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "tag.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "tag.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "tag.cn-hangzhou.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "tag.cn-hangzhou.aliyuncs.com",
      'cn-hangzhou-test-306': "tag.cn-hangzhou.aliyuncs.com",
      'cn-hongkong-finance-pop': "tag.aliyuncs.com",
      'cn-huhehaote-nebula-1': "tag.cn-qingdao-nebula.aliyuncs.com",
      'cn-shanghai-et15-b01': "tag.cn-hangzhou.aliyuncs.com",
      'cn-shanghai-et2-b01': "tag.aliyuncs.com",
      'cn-shanghai-inner': "tag.aliyuncs.com",
      'cn-shanghai-internal-test-1': "tag.aliyuncs.com",
      'cn-shenzhen-inner': "tag.aliyuncs.com",
      'cn-shenzhen-st4-d01': "tag.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-su18-b01': "tag.aliyuncs.com",
      'cn-wuhan': "tag.aliyuncs.com",
      'cn-yushanfang': "tag.aliyuncs.com",
      'cn-zhangbei': "tag.aliyuncs.com",
      'cn-zhangbei-na61-b01': "tag.cn-hangzhou.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "tag.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "tag.cn-qingdao-nebula.aliyuncs.com",
      'eu-west-1-oxs': "tag.cn-shenzhen-cloudstone.aliyuncs.com",
      'rus-west-1-pop': "tag.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("tag", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 绑定策略
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can call this API operation to attach a tag policy to the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to attach a tag policy to the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to attach the tag policy with an ID of `p-de62a0bf400e4b69****` to the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - AttachPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPolicyResponse
   */
  async attachPolicyWithOptions(request: $_model.AttachPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachPolicyResponse>(await this.callApi(params, req, runtime), new $_model.AttachPolicyResponse({}));
  }

  /**
   * 绑定策略
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can call this API operation to attach a tag policy to the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to attach a tag policy to the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to attach the tag policy with an ID of `p-de62a0bf400e4b69****` to the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - AttachPolicyRequest
   * @returns AttachPolicyResponse
   */
  async attachPolicy(request: $_model.AttachPolicyRequest): Promise<$_model.AttachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachPolicyWithOptions(request, runtime);
  }

  /**
   * 校验CreatedBy开通状态
   * 
   * @param request - CheckCreatedByEnabledRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCreatedByEnabledResponse
   */
  async checkCreatedByEnabledWithOptions(request: $_model.CheckCreatedByEnabledRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCreatedByEnabledResponse> {
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
      action: "CheckCreatedByEnabled",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckCreatedByEnabledResponse>(await this.callApi(params, req, runtime), new $_model.CheckCreatedByEnabledResponse({}));
  }

  /**
   * 校验CreatedBy开通状态
   * 
   * @param request - CheckCreatedByEnabledRequest
   * @returns CheckCreatedByEnabledResponse
   */
  async checkCreatedByEnabled(request: $_model.CheckCreatedByEnabledRequest): Promise<$_model.CheckCreatedByEnabledResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCreatedByEnabledWithOptions(request, runtime);
  }

  /**
   * 关闭CreatedBy服务
   * 
   * @param request - CloseCreatedByRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseCreatedByResponse
   */
  async closeCreatedByWithOptions(request: $_model.CloseCreatedByRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseCreatedByResponse> {
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
      action: "CloseCreatedBy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseCreatedByResponse>(await this.callApi(params, req, runtime), new $_model.CloseCreatedByResponse({}));
  }

  /**
   * 关闭CreatedBy服务
   * 
   * @param request - CloseCreatedByRequest
   * @returns CloseCreatedByResponse
   */
  async closeCreatedBy(request: $_model.CloseCreatedByRequest): Promise<$_model.CloseCreatedByResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeCreatedByWithOptions(request, runtime);
  }

  /**
   * Creates associated resource tagging rules.
   * 
   * @param request - CreateAssociatedResourceRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAssociatedResourceRulesResponse
   */
  async createAssociatedResourceRulesWithOptions(request: $_model.CreateAssociatedResourceRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAssociatedResourceRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createRulesList)) {
      query["CreateRulesList"] = request.createRulesList;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAssociatedResourceRules",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAssociatedResourceRulesResponse>(await this.callApi(params, req, runtime), new $_model.CreateAssociatedResourceRulesResponse({}));
  }

  /**
   * Creates associated resource tagging rules.
   * 
   * @param request - CreateAssociatedResourceRulesRequest
   * @returns CreateAssociatedResourceRulesResponse
   */
  async createAssociatedResourceRules(request: $_model.CreateAssociatedResourceRulesRequest): Promise<$_model.CreateAssociatedResourceRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAssociatedResourceRulesWithOptions(request, runtime);
  }

  /**
   * Creates a tag policy.
   * 
   * @remarks
   * ###
   * This topic provides an example on how to call the API operation to create a tag policy named `test`. In this example, the Tag Policy feature in multi-account mode is used. The tag policy defines that resources to which the `CostCenter:Beijing` or `CostCenter:Shanghai` tag is added are compliant and other resources are not compliant.
   * 
   * @param request - CreatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(request: $_model.CreatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyContent)) {
      query["PolicyContent"] = request.policyContent;
    }

    if (!$dara.isNull(request.policyDesc)) {
      query["PolicyDesc"] = request.policyDesc;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicy",
      version: "2018-08-28",
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
   * Creates a tag policy.
   * 
   * @remarks
   * ###
   * This topic provides an example on how to call the API operation to create a tag policy named `test`. In this example, the Tag Policy feature in multi-account mode is used. The tag policy defines that resources to which the `CostCenter:Beijing` or `CostCenter:Shanghai` tag is added are compliant and other resources are not compliant.
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: $_model.CreatePolicyRequest): Promise<$_model.CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * Creates predefined tags.
   * 
   * @remarks
   * ###
   * A preset tag is a tag that you create in advance and is available for the resources in all regions. You can create preset tags in the stage of tag planning and add them to specific resources in the stage of tag implementation. When you create a preset tag, you can specify only the tag key. You can specify a tag value in the future.
   * This topic provides an example on how to call the API operation to create a preset tag whose tag key is `Environment` to indicate the business environment.
   * 
   * @param request - CreateTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagsResponse
   */
  async createTagsWithOptions(request: $_model.CreateTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTagsResponse> {
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

    if (!$dara.isNull(request.tagKeyValueParamList)) {
      query["TagKeyValueParamList"] = request.tagKeyValueParamList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTags",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTagsResponse>(await this.callApi(params, req, runtime), new $_model.CreateTagsResponse({}));
  }

  /**
   * Creates predefined tags.
   * 
   * @remarks
   * ###
   * A preset tag is a tag that you create in advance and is available for the resources in all regions. You can create preset tags in the stage of tag planning and add them to specific resources in the stage of tag implementation. When you create a preset tag, you can specify only the tag key. You can specify a tag value in the future.
   * This topic provides an example on how to call the API operation to create a preset tag whose tag key is `Environment` to indicate the business environment.
   * 
   * @param request - CreateTagsRequest
   * @returns CreateTagsResponse
   */
  async createTags(request: $_model.CreateTagsRequest): Promise<$_model.CreateTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTagsWithOptions(request, runtime);
  }

  /**
   * Deletes an associated resource tagging rule.
   * 
   * @param request - DeleteAssociatedResourceRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAssociatedResourceRuleResponse
   */
  async deleteAssociatedResourceRuleWithOptions(request: $_model.DeleteAssociatedResourceRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAssociatedResourceRuleResponse> {
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

    if (!$dara.isNull(request.settingName)) {
      query["SettingName"] = request.settingName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAssociatedResourceRule",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAssociatedResourceRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAssociatedResourceRuleResponse({}));
  }

  /**
   * Deletes an associated resource tagging rule.
   * 
   * @param request - DeleteAssociatedResourceRuleRequest
   * @returns DeleteAssociatedResourceRuleResponse
   */
  async deleteAssociatedResourceRule(request: $_model.DeleteAssociatedResourceRuleRequest): Promise<$_model.DeleteAssociatedResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAssociatedResourceRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a tag policy.
   * 
   * @remarks
   * Before you delete a tag policy, make sure that the tag policy is detached from all objects to which the tag policy is attached. For more information about how to detach a tag policy, see [DetachPolicy](https://help.aliyun.com/document_detail/429724.html).
   * This topic provides an example on how to call the API operation to delete the tag policy with an ID of `p-557cb141331f41c7****`.
   * 
   * @param request - DeletePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: $_model.DeletePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicy",
      version: "2018-08-28",
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
   * Deletes a tag policy.
   * 
   * @remarks
   * Before you delete a tag policy, make sure that the tag policy is detached from all objects to which the tag policy is attached. For more information about how to detach a tag policy, see [DetachPolicy](https://help.aliyun.com/document_detail/429724.html).
   * This topic provides an example on how to call the API operation to delete the tag policy with an ID of `p-557cb141331f41c7****`.
   * 
   * @param request - DeletePolicyRequest
   * @returns DeletePolicyResponse
   */
  async deletePolicy(request: $_model.DeletePolicyRequest): Promise<$_model.DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a preset tag.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to delete the preset tag whose tag key is `Environment` and tag value is `test`.
   * 
   * @param request - DeleteTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagResponse
   */
  async deleteTagWithOptions(request: $_model.DeleteTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTagResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTag",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTagResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTagResponse({}));
  }

  /**
   * Deletes a preset tag.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to delete the preset tag whose tag key is `Environment` and tag value is `test`.
   * 
   * @param request - DeleteTagRequest
   * @returns DeleteTagResponse
   */
  async deleteTag(request: $_model.DeleteTagRequest): Promise<$_model.DeleteTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTagWithOptions(request, runtime);
  }

  /**
   * Queries the regions where the Tag service is available.
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
      action: "DescribeRegions",
      version: "2018-08-28",
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
   * Queries the regions where the Tag service is available.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Detaches a tag policy from an object.
   * 
   * @remarks
   * ###
   * If you use the Tag Policy feature in single-account mode, you can call this API operation to detach a tag policy from the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to detach a tag policy from the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to detach the tag policy with an ID of `p-a3381efe2fe34a75****` from the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - DetachPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPolicyResponse
   */
  async detachPolicyWithOptions(request: $_model.DetachPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DetachPolicyResponse({}));
  }

  /**
   * Detaches a tag policy from an object.
   * 
   * @remarks
   * ###
   * If you use the Tag Policy feature in single-account mode, you can call this API operation to detach a tag policy from the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to detach a tag policy from the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to detach the tag policy with an ID of `p-a3381efe2fe34a75****` from the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - DetachPolicyRequest
   * @returns DetachPolicyResponse
   */
  async detachPolicy(request: $_model.DetachPolicyRequest): Promise<$_model.DetachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachPolicyWithOptions(request, runtime);
  }

  /**
   * 关闭策略
   * 
   * @param request - DisablePolicyTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisablePolicyTypeResponse
   */
  async disablePolicyTypeWithOptions(request: $_model.DisablePolicyTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisablePolicyTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.openType)) {
      query["OpenType"] = request.openType;
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

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisablePolicyType",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisablePolicyTypeResponse>(await this.callApi(params, req, runtime), new $_model.DisablePolicyTypeResponse({}));
  }

  /**
   * 关闭策略
   * 
   * @param request - DisablePolicyTypeRequest
   * @returns DisablePolicyTypeResponse
   */
  async disablePolicyType(request: $_model.DisablePolicyTypeRequest): Promise<$_model.DisablePolicyTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disablePolicyTypeWithOptions(request, runtime);
  }

  /**
   * 开通策略
   * 
   * @param request - EnablePolicyTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnablePolicyTypeResponse
   */
  async enablePolicyTypeWithOptions(request: $_model.EnablePolicyTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnablePolicyTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.openType)) {
      query["OpenType"] = request.openType;
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

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnablePolicyType",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnablePolicyTypeResponse>(await this.callApi(params, req, runtime), new $_model.EnablePolicyTypeResponse({}));
  }

  /**
   * 开通策略
   * 
   * @param request - EnablePolicyTypeRequest
   * @returns EnablePolicyTypeResponse
   */
  async enablePolicyType(request: $_model.EnablePolicyTypeRequest): Promise<$_model.EnablePolicyTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enablePolicyTypeWithOptions(request, runtime);
  }

  /**
   * 生成规则检测报告
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can call this API operation to generate a resource non-compliance report for the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to generate a resource non-compliance report for the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call this API operation to generate a resource non-compliance report for the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - GenerateConfigRuleReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateConfigRuleReportResponse
   */
  async generateConfigRuleReportWithOptions(request: $_model.GenerateConfigRuleReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateConfigRuleReportResponse> {
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

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateConfigRuleReport",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateConfigRuleReportResponse>(await this.callApi(params, req, runtime), new $_model.GenerateConfigRuleReportResponse({}));
  }

  /**
   * 生成规则检测报告
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can call this API operation to generate a resource non-compliance report for the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to generate a resource non-compliance report for the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call this API operation to generate a resource non-compliance report for the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - GenerateConfigRuleReportRequest
   * @returns GenerateConfigRuleReportResponse
   */
  async generateConfigRuleReport(request: $_model.GenerateConfigRuleReportRequest): Promise<$_model.GenerateConfigRuleReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateConfigRuleReportWithOptions(request, runtime);
  }

  /**
   * Queries the basic information of the resource non-compliance report that is last generated.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the basic information of the resource non-compliance report that is last generated for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the basic information of the resource non-compliance report that is last generated for an object in the resource directory. The object can be the Root folder, a folder other than the Root folder, or a member. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call this API operation to query the basic information of the resource non-compliance report that is last generated for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that the ID of the report is `crp-ao0786618088006c****`.
   * 
   * @param request - GetConfigRuleReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigRuleReportResponse
   */
  async getConfigRuleReportWithOptions(request: $_model.GetConfigRuleReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConfigRuleReportResponse> {
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

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConfigRuleReport",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConfigRuleReportResponse>(await this.callApi(params, req, runtime), new $_model.GetConfigRuleReportResponse({}));
  }

  /**
   * Queries the basic information of the resource non-compliance report that is last generated.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the basic information of the resource non-compliance report that is last generated for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the basic information of the resource non-compliance report that is last generated for an object in the resource directory. The object can be the Root folder, a folder other than the Root folder, or a member. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call this API operation to query the basic information of the resource non-compliance report that is last generated for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that the ID of the report is `crp-ao0786618088006c****`.
   * 
   * @param request - GetConfigRuleReportRequest
   * @returns GetConfigRuleReportResponse
   */
  async getConfigRuleReport(request: $_model.GetConfigRuleReportRequest): Promise<$_model.GetConfigRuleReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigRuleReportWithOptions(request, runtime);
  }

  /**
   * Queries the information about the effective policy.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the effective tag policy for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the effective tag policy for the Root folder, a folder other than the Root folder, or a member in the resource directory. You can also use a member of a resource directory to call this API operation to query the effective tag policy for the member. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * An effective tag policy is obtained based on tag policy inheritance. For more information, see [Inheritance of a tag policy and calculation of an effective tag policy](https://help.aliyun.com/document_detail/417435.html).
   * This topic provides an example on how to call the API operation to query the effective tag policy for the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - GetEffectivePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEffectivePolicyResponse
   */
  async getEffectivePolicyWithOptions(request: $_model.GetEffectivePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEffectivePolicyResponse> {
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

    if (!$dara.isNull(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEffectivePolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEffectivePolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetEffectivePolicyResponse({}));
  }

  /**
   * Queries the information about the effective policy.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the effective tag policy for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the effective tag policy for the Root folder, a folder other than the Root folder, or a member in the resource directory. You can also use a member of a resource directory to call this API operation to query the effective tag policy for the member. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * An effective tag policy is obtained based on tag policy inheritance. For more information, see [Inheritance of a tag policy and calculation of an effective tag policy](https://help.aliyun.com/document_detail/417435.html).
   * This topic provides an example on how to call the API operation to query the effective tag policy for the current logon account. In this example, the Tag Policy feature in single-account mode is used.
   * 
   * @param request - GetEffectivePolicyRequest
   * @returns GetEffectivePolicyResponse
   */
  async getEffectivePolicy(request: $_model.GetEffectivePolicyRequest): Promise<$_model.GetEffectivePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEffectivePolicyWithOptions(request, runtime);
  }

  /**
   * Queries the details of a tag policy.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the details of the tag policy with an ID of `p-557cb141331f41c7****`.
   * 
   * @param request - GetPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyResponse
   */
  async getPolicyWithOptions(request: $_model.GetPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicyResponse({}));
  }

  /**
   * Queries the details of a tag policy.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the details of the tag policy with an ID of `p-557cb141331f41c7****`.
   * 
   * @param request - GetPolicyRequest
   * @returns GetPolicyResponse
   */
  async getPolicy(request: $_model.GetPolicyRequest): Promise<$_model.GetPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Tag Policy feature.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the status of the Tag Policy feature for the current logon account. The response shows that the Tag Policy feature in multi-account mode is enabled for the current logon account.
   * 
   * @param request - GetPolicyEnableStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyEnableStatusResponse
   */
  async getPolicyEnableStatusWithOptions(request: $_model.GetPolicyEnableStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyEnableStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.openType)) {
      query["OpenType"] = request.openType;
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

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicyEnableStatus",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicyEnableStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicyEnableStatusResponse({}));
  }

  /**
   * Queries the status of the Tag Policy feature.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the status of the Tag Policy feature for the current logon account. The response shows that the Tag Policy feature in multi-account mode is enabled for the current logon account.
   * 
   * @param request - GetPolicyEnableStatusRequest
   * @returns GetPolicyEnableStatusResponse
   */
  async getPolicyEnableStatus(request: $_model.GetPolicyEnableStatusRequest): Promise<$_model.GetPolicyEnableStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyEnableStatusWithOptions(request, runtime);
  }

  /**
   * Search the rules for associated resources that the user has set up.
   * 
   * @param request - ListAssociatedResourceRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAssociatedResourceRulesResponse
   */
  async listAssociatedResourceRulesWithOptions(request: $_model.ListAssociatedResourceRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAssociatedResourceRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.settingName)) {
      query["SettingName"] = request.settingName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAssociatedResourceRules",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAssociatedResourceRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListAssociatedResourceRulesResponse({}));
  }

  /**
   * Search the rules for associated resources that the user has set up.
   * 
   * @param request - ListAssociatedResourceRulesRequest
   * @returns ListAssociatedResourceRulesResponse
   */
  async listAssociatedResourceRules(request: $_model.ListAssociatedResourceRulesRequest): Promise<$_model.ListAssociatedResourceRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAssociatedResourceRulesWithOptions(request, runtime);
  }

  /**
   * Queries a list of tag detection tasks for an object.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the tag detection tasks for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the tag detection tasks for the Root folder, a folder other than the Root folder, or a member in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query the tag detection tasks for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that only one tag detection task exists.
   * 
   * @param request - ListConfigRulesForTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigRulesForTargetResponse
   */
  async listConfigRulesForTargetWithOptions(request: $_model.ListConfigRulesForTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConfigRulesForTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
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

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConfigRulesForTarget",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConfigRulesForTargetResponse>(await this.callApi(params, req, runtime), new $_model.ListConfigRulesForTargetResponse({}));
  }

  /**
   * Queries a list of tag detection tasks for an object.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the tag detection tasks for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the tag detection tasks for the Root folder, a folder other than the Root folder, or a member in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query the tag detection tasks for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that only one tag detection task exists.
   * 
   * @param request - ListConfigRulesForTargetRequest
   * @returns ListConfigRulesForTargetResponse
   */
  async listConfigRulesForTarget(request: $_model.ListConfigRulesForTargetRequest): Promise<$_model.ListConfigRulesForTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigRulesForTargetWithOptions(request, runtime);
  }

  /**
   * Queries tag policies.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query all tag policies that are created for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query all tag policies that are created for the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query all tag policies that are created for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that two tag policies are created.
   * 
   * @param request - ListPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: $_model.ListPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
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

    if (!$dara.isNull(request.policyIds)) {
      query["PolicyIds"] = request.policyIds;
    }

    if (!$dara.isNull(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicies",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListPoliciesResponse({}));
  }

  /**
   * Queries tag policies.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query all tag policies that are created for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query all tag policies that are created for the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query all tag policies that are created for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that two tag policies are created.
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: $_model.ListPoliciesRequest): Promise<$_model.ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the tag policies that are attached to an object.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the tag policies that are attached to the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the tag policies that are attached to the Root folder, a folder other than the Root folder, or a member in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query the tag policies that are attached to the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that only one tag policy is attached to the current logon account.
   * 
   * @param request - ListPoliciesForTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesForTargetResponse
   */
  async listPoliciesForTargetWithOptions(request: $_model.ListPoliciesForTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoliciesForTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPoliciesForTarget",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPoliciesForTargetResponse>(await this.callApi(params, req, runtime), new $_model.ListPoliciesForTargetResponse({}));
  }

  /**
   * Queries the tag policies that are attached to an object.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the tag policies that are attached to the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the tag policies that are attached to the Root folder, a folder other than the Root folder, or a member in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query the tag policies that are attached to the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that only one tag policy is attached to the current logon account.
   * 
   * @param request - ListPoliciesForTargetRequest
   * @returns ListPoliciesForTargetResponse
   */
  async listPoliciesForTarget(request: $_model.ListPoliciesForTargetRequest): Promise<$_model.ListPoliciesForTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesForTargetWithOptions(request, runtime);
  }

  /**
   * Queries resources to which a specified tag is added or resources to which a specified tag is not added.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation in the China (Shenzhen) region to query virtual private clouds (VPCs) to which the tag key `k1` is added. The response shows that the tag key is added to two VPCs.
   * 
   * @param request - ListResourcesByTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesByTagResponse
   */
  async listResourcesByTagWithOptions(request: $_model.ListResourcesByTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourcesByTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fuzzyType)) {
      query["FuzzyType"] = request.fuzzyType;
    }

    if (!$dara.isNull(request.includeAllTags)) {
      query["IncludeAllTags"] = request.includeAllTags;
    }

    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourcesByTag",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourcesByTagResponse>(await this.callApi(params, req, runtime), new $_model.ListResourcesByTagResponse({}));
  }

  /**
   * Queries resources to which a specified tag is added or resources to which a specified tag is not added.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation in the China (Shenzhen) region to query virtual private clouds (VPCs) to which the tag key `k1` is added. The response shows that the tag key is added to two VPCs.
   * 
   * @param request - ListResourcesByTagRequest
   * @returns ListResourcesByTagResponse
   */
  async listResourcesByTag(request: $_model.ListResourcesByTagRequest): Promise<$_model.ListResourcesByTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourcesByTagWithOptions(request, runtime);
  }

  /**
   * Queries the resource types supported by tags and tag-related capability items.
   * 
   * @remarks
   * ### [](#)Call example
   * *   Query a list of resource types supported by TagResources or UntagResources. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG\\&params=%7B%22RegionId%22:%22cn-hangzhou%22,%22SupportCode%22:%22TAG_CONSOLE_SUPPORT%22%7D).
   * *   Query a list of resource types supported by ListTagResources or ListResourcesByTag. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG\\&params=%7B%22RegionId%22:%22cn-hangzhou%22%7D).
   * *   Query a list of resource types that support createdby tags. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG\\&params=%7B%22RegionId%22:%22cn-hangzhou%22,%22SupportCode%22:%22CREATED_BY_TAG_CONSOLE_SUPPORT%22%7D).
   * 
   * @param request - ListSupportResourceTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSupportResourceTypesResponse
   */
  async listSupportResourceTypesWithOptions(request: $_model.ListSupportResourceTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSupportResourceTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
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

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceTye)) {
      query["ResourceTye"] = request.resourceTye;
    }

    if (!$dara.isNull(request.showItems)) {
      query["ShowItems"] = request.showItems;
    }

    if (!$dara.isNull(request.supportCode)) {
      query["SupportCode"] = request.supportCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSupportResourceTypes",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSupportResourceTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListSupportResourceTypesResponse({}));
  }

  /**
   * Queries the resource types supported by tags and tag-related capability items.
   * 
   * @remarks
   * ### [](#)Call example
   * *   Query a list of resource types supported by TagResources or UntagResources. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG\\&params=%7B%22RegionId%22:%22cn-hangzhou%22,%22SupportCode%22:%22TAG_CONSOLE_SUPPORT%22%7D).
   * *   Query a list of resource types supported by ListTagResources or ListResourcesByTag. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG\\&params=%7B%22RegionId%22:%22cn-hangzhou%22%7D).
   * *   Query a list of resource types that support createdby tags. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG\\&params=%7B%22RegionId%22:%22cn-hangzhou%22,%22SupportCode%22:%22CREATED_BY_TAG_CONSOLE_SUPPORT%22%7D).
   * 
   * @param request - ListSupportResourceTypesRequest
   * @returns ListSupportResourceTypesResponse
   */
  async listSupportResourceTypes(request: $_model.ListSupportResourceTypesRequest): Promise<$_model.ListSupportResourceTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSupportResourceTypesWithOptions(request, runtime);
  }

  /**
   * Queries tag keys.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the tag keys in the `cn-hangzhou` region. The response shows that the following tag keys exist: `team`, `k1`, and `k2`.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: $_model.ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.fuzzyType)) {
      query["FuzzyType"] = request.fuzzyType;
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

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2018-08-28",
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
   * Queries tag keys.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the tag keys in the `cn-hangzhou` region. The response shows that the following tag keys exist: `team`, `k1`, and `k2`.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to the resources of various Alibaba Cloud services.
   * 
   * @remarks
   * For information about the Alibaba Cloud services that support tags, see [Services that work with Tag](https://help.aliyun.com/document_detail/171455.html).
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
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

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceARN)) {
      query["ResourceARN"] = request.resourceARN;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2018-08-28",
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
   * Queries the tags that are added to the resources of various Alibaba Cloud services.
   * 
   * @remarks
   * For information about the Alibaba Cloud services that support tags, see [Services that work with Tag](https://help.aliyun.com/document_detail/171455.html).
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the tag values of a tag key.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the values of the tag key `k1` in the `cn-hangzhou` region. The response shows that the value of the tag key `k1` is `v1`.
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: $_model.ListTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fuzzyType)) {
      query["FuzzyType"] = request.fuzzyType;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
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

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagValues",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagValuesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagValuesResponse({}));
  }

  /**
   * Queries the tag values of a tag key.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the values of the tag key `k1` in the `cn-hangzhou` region. The response shows that the value of the tag key `k1` is `v1`.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Queries the objects to which a tag policy is attached.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the object to which a tag policy is attached. The object is the current logon account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the objects to which a tag policy is attached. The objects include the Root folder, folders other than the Root folder, and members in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query the objects to which the tag policy with an ID of `p-de62a0bf400e4b69****` is attached. In this example, the Tag Policy feature in multi-account mode is used. The response shows that the tag policy is attached to two members in the related resource directory.
   * 
   * @param request - ListTargetsForPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTargetsForPolicyResponse
   */
  async listTargetsForPolicyWithOptions(request: $_model.ListTargetsForPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTargetsForPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
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

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTargetsForPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTargetsForPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListTargetsForPolicyResponse({}));
  }

  /**
   * Queries the objects to which a tag policy is attached.
   * 
   * @remarks
   * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the object to which a tag policy is attached. The object is the current logon account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the objects to which a tag policy is attached. The objects include the Root folder, folders other than the Root folder, and members in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * This topic provides an example on how to call the API operation to query the objects to which the tag policy with an ID of `p-de62a0bf400e4b69****` is attached. In this example, the Tag Policy feature in multi-account mode is used. The response shows that the tag policy is attached to two members in the related resource directory.
   * 
   * @param request - ListTargetsForPolicyRequest
   * @returns ListTargetsForPolicyResponse
   */
  async listTargetsForPolicy(request: $_model.ListTargetsForPolicyRequest): Promise<$_model.ListTargetsForPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTargetsForPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies a tag policy.
   * 
   * @remarks
   * ### [](#)
   * This topic provides an example on how to call the API operation to change the name of a tag policy to `test`.
   * 
   * @param request - ModifyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyResponse
   */
  async modifyPolicyWithOptions(request: $_model.ModifyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyContent)) {
      query["PolicyContent"] = request.policyContent;
    }

    if (!$dara.isNull(request.policyDesc)) {
      query["PolicyDesc"] = request.policyDesc;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolicy",
      version: "2018-08-28",
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
   * Modifies a tag policy.
   * 
   * @remarks
   * ### [](#)
   * This topic provides an example on how to call the API operation to change the name of a tag policy to `test`.
   * 
   * @param request - ModifyPolicyRequest
   * @returns ModifyPolicyResponse
   */
  async modifyPolicy(request: $_model.ModifyPolicyRequest): Promise<$_model.ModifyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolicyWithOptions(request, runtime);
  }

  /**
   * Enables createdby tags.
   * 
   * @remarks
   * createdby tags can help you analyze costs and bills and manage the costs of cloud resources in an efficient manner. You can identify the creators of resources based on the createdby tags added to the resources. createdby tags are system tags that are provided by Alibaba Cloud and automatically added to resources. The key of createdby tags is `acs:tag:createdby`.
   * 
   * @param request - OpenCreatedByRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenCreatedByResponse
   */
  async openCreatedByWithOptions(request: $_model.OpenCreatedByRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenCreatedByResponse> {
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
      action: "OpenCreatedBy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenCreatedByResponse>(await this.callApi(params, req, runtime), new $_model.OpenCreatedByResponse({}));
  }

  /**
   * Enables createdby tags.
   * 
   * @remarks
   * createdby tags can help you analyze costs and bills and manage the costs of cloud resources in an efficient manner. You can identify the creators of resources based on the createdby tags added to the resources. createdby tags are system tags that are provided by Alibaba Cloud and automatically added to resources. The key of createdby tags is `acs:tag:createdby`.
   * 
   * @param request - OpenCreatedByRequest
   * @returns OpenCreatedByResponse
   */
  async openCreatedBy(request: $_model.OpenCreatedByRequest): Promise<$_model.OpenCreatedByResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openCreatedByWithOptions(request, runtime);
  }

  /**
   * Adds tags to the resources of various Alibaba Cloud services.
   * 
   * @remarks
   * Tags are used to identify resources. Tags allow you to categorize, search for, and aggregate resources that have the same characteristics from different dimensions. This facilitates resource management. For more information, see [Tag overview](https://help.aliyun.com/document_detail/156983.html).
   * For information about the Alibaba Cloud services that support tags, see [Services that work with Tag](https://help.aliyun.com/document_detail/171455.html).
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceARN)) {
      query["ResourceARN"] = request.resourceARN;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2018-08-28",
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
   * Adds tags to the resources of various Alibaba Cloud services.
   * 
   * @remarks
   * Tags are used to identify resources. Tags allow you to categorize, search for, and aggregate resources that have the same characteristics from different dimensions. This facilitates resource management. For more information, see [Tag overview](https://help.aliyun.com/document_detail/156983.html).
   * For information about the Alibaba Cloud services that support tags, see [Services that work with Tag](https://help.aliyun.com/document_detail/171455.html).
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from the resources of various Alibaba Cloud services.
   * 
   * @remarks
   * After you remove a tag, the tag is automatically deleted within 24 hours if it is not added to other resources.
   * For information about the Alibaba Cloud services that support tags, see [Services that work with Tag](https://help.aliyun.com/document_detail/171455.html).
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceARN)) {
      query["ResourceARN"] = request.resourceARN;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2018-08-28",
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
   * Removes tags from the resources of various Alibaba Cloud services.
   * 
   * @remarks
   * After you remove a tag, the tag is automatically deleted within 24 hours if it is not added to other resources.
   * For information about the Alibaba Cloud services that support tags, see [Services that work with Tag](https://help.aliyun.com/document_detail/171455.html).
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Update the rule for tagging associated resources.
   * 
   * @param request - UpdateAssociatedResourceRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAssociatedResourceRuleResponse
   */
  async updateAssociatedResourceRuleWithOptions(request: $_model.UpdateAssociatedResourceRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAssociatedResourceRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.existingStatus)) {
      query["ExistingStatus"] = request.existingStatus;
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

    if (!$dara.isNull(request.settingName)) {
      query["SettingName"] = request.settingName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAssociatedResourceRule",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAssociatedResourceRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAssociatedResourceRuleResponse({}));
  }

  /**
   * Update the rule for tagging associated resources.
   * 
   * @param request - UpdateAssociatedResourceRuleRequest
   * @returns UpdateAssociatedResourceRuleResponse
   */
  async updateAssociatedResourceRule(request: $_model.UpdateAssociatedResourceRuleRequest): Promise<$_model.UpdateAssociatedResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAssociatedResourceRuleWithOptions(request, runtime);
  }

}
