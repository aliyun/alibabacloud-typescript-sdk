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
    this._endpoint = this.getEndpoint("resourcemanager", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Accepts an invitation.
   * 
   * @remarks
   * After an invited Alibaba Cloud account joins a resource directory, it becomes a member of the resource directory. By default, the name of the invited Alibaba Cloud account is used as the display name of the account in the resource directory.
   * This topic provides an example on how to call the API operation to accept the invitation `h-Ih8IuPfvV0t0****` that is initiated to invite the Alibaba Cloud account `177242285274****` to join the resource directory `rd-3G****`.
   * 
   * @param request - AcceptHandshakeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptHandshakeResponse
   */
  async acceptHandshakeWithOptions(request: $_model.AcceptHandshakeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AcceptHandshakeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.handshakeId)) {
      query["HandshakeId"] = request.handshakeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AcceptHandshake",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AcceptHandshakeResponse>(await this.callApi(params, req, runtime), new $_model.AcceptHandshakeResponse({}));
  }

  /**
   * Accepts an invitation.
   * 
   * @remarks
   * After an invited Alibaba Cloud account joins a resource directory, it becomes a member of the resource directory. By default, the name of the invited Alibaba Cloud account is used as the display name of the account in the resource directory.
   * This topic provides an example on how to call the API operation to accept the invitation `h-Ih8IuPfvV0t0****` that is initiated to invite the Alibaba Cloud account `177242285274****` to join the resource directory `rd-3G****`.
   * 
   * @param request - AcceptHandshakeRequest
   * @returns AcceptHandshakeResponse
   */
  async acceptHandshake(request: $_model.AcceptHandshakeRequest): Promise<$_model.AcceptHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptHandshakeWithOptions(request, runtime);
  }

  /**
   * @remarks
   * After you attach an access control policy, the operations performed on resources by using members are limited by the policy. Make sure that the attached policy meets your expectations. Otherwise, your business may be affected.
   * By default, the system access control policy FullAliyunAccess is attached to each folder and member.
   * The access control policy that is attached to a folder also applies to all its subfolders and all members in the subfolders.
   * A maximum of 10 access control policies can be attached to a folder or member.
   * This topic provides an example on how to call the API operation to attach the custom access control policy `cp-jExXAqIYkwHN****` to the folder `fd-ZDNPiT****`.
   * 
   * @param request - AttachControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachControlPolicyResponse
   */
  async attachControlPolicyWithOptions(request: $_model.AttachControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachControlPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.AttachControlPolicyResponse({}));
  }

  /**
   * @remarks
   * After you attach an access control policy, the operations performed on resources by using members are limited by the policy. Make sure that the attached policy meets your expectations. Otherwise, your business may be affected.
   * By default, the system access control policy FullAliyunAccess is attached to each folder and member.
   * The access control policy that is attached to a folder also applies to all its subfolders and all members in the subfolders.
   * A maximum of 10 access control policies can be attached to a folder or member.
   * This topic provides an example on how to call the API operation to attach the custom access control policy `cp-jExXAqIYkwHN****` to the folder `fd-ZDNPiT****`.
   * 
   * @param request - AttachControlPolicyRequest
   * @returns AttachControlPolicyResponse
   */
  async attachControlPolicy(request: $_model.AttachControlPolicyRequest): Promise<$_model.AttachControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachControlPolicyWithOptions(request, runtime);
  }

  /**
   * Attaches a permission policy to an object, which can be a RAM user, RAM user group, or RAM role. After you attach a permission policy to an object, the object has the operation permissions on the resources in a specific resource group or within a specific Alibaba Cloud account.
   * 
   * @remarks
   * In this example, the policy `AdministratorAccess` is attached to the RAM user `alice@demo.onaliyun.com` and takes effect only for resources in the `rg-9gLOoK****` resource group.
   * 
   * @param request - AttachPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPolicyResponse
   */
  async attachPolicyWithOptions(request: $_model.AttachPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!$dara.isNull(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachPolicy",
      version: "2020-03-31",
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
   * Attaches a permission policy to an object, which can be a RAM user, RAM user group, or RAM role. After you attach a permission policy to an object, the object has the operation permissions on the resources in a specific resource group or within a specific Alibaba Cloud account.
   * 
   * @remarks
   * In this example, the policy `AdministratorAccess` is attached to the RAM user `alice@demo.onaliyun.com` and takes effect only for resources in the `rg-9gLOoK****` resource group.
   * 
   * @param request - AttachPolicyRequest
   * @returns AttachPolicyResponse
   */
  async attachPolicy(request: $_model.AttachPolicyRequest): Promise<$_model.AttachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachPolicyWithOptions(request, runtime);
  }

  /**
   * 设置安全手机号
   * 
   * @remarks
   * You can call this API operation only to bind a mobile phone number to a member of the resource account type. You cannot call this API operation to change the mobile phone number that is bound to a member of the resource account type.
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this API operation.
   * This topic provides an example on how to call the API operation to bind a mobile phone number to the member `138660628348****` for security purposes.
   * 
   * @param request - BindSecureMobilePhoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindSecureMobilePhoneResponse
   */
  async bindSecureMobilePhoneWithOptions(request: $_model.BindSecureMobilePhoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindSecureMobilePhoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.secureMobilePhone)) {
      query["SecureMobilePhone"] = request.secureMobilePhone;
    }

    if (!$dara.isNull(request.verificationCode)) {
      query["VerificationCode"] = request.verificationCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindSecureMobilePhone",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindSecureMobilePhoneResponse>(await this.callApi(params, req, runtime), new $_model.BindSecureMobilePhoneResponse({}));
  }

  /**
   * 设置安全手机号
   * 
   * @remarks
   * You can call this API operation only to bind a mobile phone number to a member of the resource account type. You cannot call this API operation to change the mobile phone number that is bound to a member of the resource account type.
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this API operation.
   * This topic provides an example on how to call the API operation to bind a mobile phone number to the member `138660628348****` for security purposes.
   * 
   * @param request - BindSecureMobilePhoneRequest
   * @returns BindSecureMobilePhoneResponse
   */
  async bindSecureMobilePhone(request: $_model.BindSecureMobilePhoneRequest): Promise<$_model.BindSecureMobilePhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindSecureMobilePhoneWithOptions(request, runtime);
  }

  /**
   * 取消修改邮箱
   * 
   * @param request - CancelChangeAccountEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelChangeAccountEmailResponse
   */
  async cancelChangeAccountEmailWithOptions(request: $_model.CancelChangeAccountEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelChangeAccountEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelChangeAccountEmail",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelChangeAccountEmailResponse>(await this.callApi(params, req, runtime), new $_model.CancelChangeAccountEmailResponse({}));
  }

  /**
   * 取消修改邮箱
   * 
   * @param request - CancelChangeAccountEmailRequest
   * @returns CancelChangeAccountEmailResponse
   */
  async cancelChangeAccountEmail(request: $_model.CancelChangeAccountEmailRequest): Promise<$_model.CancelChangeAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelChangeAccountEmailWithOptions(request, runtime);
  }

  /**
   * 取消创建云账号类型的成员
   * 
   * @param request - CancelCreateCloudAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCreateCloudAccountResponse
   */
  async cancelCreateCloudAccountWithOptions(request: $_model.CancelCreateCloudAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelCreateCloudAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelCreateCloudAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelCreateCloudAccountResponse>(await this.callApi(params, req, runtime), new $_model.CancelCreateCloudAccountResponse({}));
  }

  /**
   * 取消创建云账号类型的成员
   * 
   * @param request - CancelCreateCloudAccountRequest
   * @returns CancelCreateCloudAccountResponse
   */
  async cancelCreateCloudAccount(request: $_model.CancelCreateCloudAccountRequest): Promise<$_model.CancelCreateCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCreateCloudAccountWithOptions(request, runtime);
  }

  /**
   * Cancels an invitation.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to cancel the invitation whose ID is `h-ycm4rp****`.
   * 
   * @param request - CancelHandshakeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelHandshakeResponse
   */
  async cancelHandshakeWithOptions(request: $_model.CancelHandshakeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelHandshakeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.handshakeId)) {
      query["HandshakeId"] = request.handshakeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelHandshake",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelHandshakeResponse>(await this.callApi(params, req, runtime), new $_model.CancelHandshakeResponse({}));
  }

  /**
   * Cancels an invitation.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to cancel the invitation whose ID is `h-ycm4rp****`.
   * 
   * @param request - CancelHandshakeRequest
   * @returns CancelHandshakeResponse
   */
  async cancelHandshake(request: $_model.CancelHandshakeRequest): Promise<$_model.CancelHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelHandshakeWithOptions(request, runtime);
  }

  /**
   * 取消升级资源账号
   * 
   * @param request - CancelPromoteResourceAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPromoteResourceAccountResponse
   */
  async cancelPromoteResourceAccountWithOptions(request: $_model.CancelPromoteResourceAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelPromoteResourceAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelPromoteResourceAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelPromoteResourceAccountResponse>(await this.callApi(params, req, runtime), new $_model.CancelPromoteResourceAccountResponse({}));
  }

  /**
   * 取消升级资源账号
   * 
   * @param request - CancelPromoteResourceAccountRequest
   * @returns CancelPromoteResourceAccountResponse
   */
  async cancelPromoteResourceAccount(request: $_model.CancelPromoteResourceAccountRequest): Promise<$_model.CancelPromoteResourceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelPromoteResourceAccountWithOptions(request, runtime);
  }

  /**
   * 成员账号设置安全邮箱
   * 
   * @param request - ChangeAccountEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeAccountEmailResponse
   */
  async changeAccountEmailWithOptions(request: $_model.ChangeAccountEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeAccountEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeAccountEmail",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeAccountEmailResponse>(await this.callApi(params, req, runtime), new $_model.ChangeAccountEmailResponse({}));
  }

  /**
   * 成员账号设置安全邮箱
   * 
   * @param request - ChangeAccountEmailRequest
   * @returns ChangeAccountEmailResponse
   */
  async changeAccountEmail(request: $_model.ChangeAccountEmailRequest): Promise<$_model.ChangeAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeAccountEmailWithOptions(request, runtime);
  }

  /**
   * Performs a member deletion check.
   * 
   * @remarks
   * Before you delete a member, you must call this API operation to check whether the member can be deleted.
   * This topic provides an example on how to call the API operation to perform a deletion check on the member whose ID is `179855839641****`.
   * 
   * @param request - CheckAccountDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAccountDeleteResponse
   */
  async checkAccountDeleteWithOptions(request: $_model.CheckAccountDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAccountDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckAccountDelete",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckAccountDeleteResponse>(await this.callApi(params, req, runtime), new $_model.CheckAccountDeleteResponse({}));
  }

  /**
   * Performs a member deletion check.
   * 
   * @remarks
   * Before you delete a member, you must call this API operation to check whether the member can be deleted.
   * This topic provides an example on how to call the API operation to perform a deletion check on the member whose ID is `179855839641****`.
   * 
   * @param request - CheckAccountDeleteRequest
   * @returns CheckAccountDeleteResponse
   */
  async checkAccountDelete(request: $_model.CheckAccountDeleteRequest): Promise<$_model.CheckAccountDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAccountDeleteWithOptions(request, runtime);
  }

  /**
   * Creates a transfer rule. Custom transfer rules and transfer rules for associated resources are supported.
   * 
   * @remarks
   * You can create up to 10 custom transfer rules. Each custom transfer rule can contain up to 10 content records.
   * 
   * @param request - CreateAutoGroupingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoGroupingRuleResponse
   */
  async createAutoGroupingRuleWithOptions(request: $_model.CreateAutoGroupingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAutoGroupingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      query["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      query["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      query["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceTypesScope)) {
      query["ExcludeResourceTypesScope"] = request.excludeResourceTypesScope;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      query["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      query["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      query["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.resourceTypesScope)) {
      query["ResourceTypesScope"] = request.resourceTypesScope;
    }

    if (!$dara.isNull(request.ruleContents)) {
      query["RuleContents"] = request.ruleContents;
    }

    if (!$dara.isNull(request.ruleDesc)) {
      query["RuleDesc"] = request.ruleDesc;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAutoGroupingRule",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAutoGroupingRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateAutoGroupingRuleResponse({}));
  }

  /**
   * Creates a transfer rule. Custom transfer rules and transfer rules for associated resources are supported.
   * 
   * @remarks
   * You can create up to 10 custom transfer rules. Each custom transfer rule can contain up to 10 content records.
   * 
   * @param request - CreateAutoGroupingRuleRequest
   * @returns CreateAutoGroupingRuleResponse
   */
  async createAutoGroupingRule(request: $_model.CreateAutoGroupingRuleRequest): Promise<$_model.CreateAutoGroupingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAutoGroupingRuleWithOptions(request, runtime);
  }

  /**
   * 创建云账号
   * 
   * @remarks
   * A resource directory supports two types of member accounts: resource accounts and cloud accounts.
   * *   Resource account (recommended): A resource account is only used as a resource container and fully depends on a resource directory. Such member accounts are secure and easy-to-create. For more information about how to create a resource account, see [CreateResourceAccount](https://help.aliyun.com/document_detail/159392.html).
   * >  A resource account can be upgraded to a cloud account. For more information, see [PromoteResourceAccount](https://help.aliyun.com/document_detail/159395.html) .
   * *   Cloud account: A cloud account has all the features of an Alibaba Cloud account, including root permissions.
   * 
   * @param request - CreateCloudAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudAccountResponse
   */
  async createCloudAccountWithOptions(request: $_model.CreateCloudAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!$dara.isNull(request.payerAccountId)) {
      query["PayerAccountId"] = request.payerAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudAccountResponse({}));
  }

  /**
   * 创建云账号
   * 
   * @remarks
   * A resource directory supports two types of member accounts: resource accounts and cloud accounts.
   * *   Resource account (recommended): A resource account is only used as a resource container and fully depends on a resource directory. Such member accounts are secure and easy-to-create. For more information about how to create a resource account, see [CreateResourceAccount](https://help.aliyun.com/document_detail/159392.html).
   * >  A resource account can be upgraded to a cloud account. For more information, see [PromoteResourceAccount](https://help.aliyun.com/document_detail/159395.html) .
   * *   Cloud account: A cloud account has all the features of an Alibaba Cloud account, including root permissions.
   * 
   * @param request - CreateCloudAccountRequest
   * @returns CreateCloudAccountResponse
   */
  async createCloudAccount(request: $_model.CreateCloudAccountRequest): Promise<$_model.CreateCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudAccountWithOptions(request, runtime);
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to create a custom access control policy named `ExampleControlPolicy`. This access control policy is used to prohibit modifications to the ResourceDirectoryAccountAccessRole role and the permissions of the role.
   * 
   * @param request - CreateControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateControlPolicyResponse
   */
  async createControlPolicyWithOptions(request: $_model.CreateControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.effectScope)) {
      query["EffectScope"] = request.effectScope;
    }

    if (!$dara.isNull(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateControlPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateControlPolicyResponse({}));
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to create a custom access control policy named `ExampleControlPolicy`. This access control policy is used to prohibit modifications to the ResourceDirectoryAccountAccessRole role and the permissions of the role.
   * 
   * @param request - CreateControlPolicyRequest
   * @returns CreateControlPolicyResponse
   */
  async createControlPolicy(request: $_model.CreateControlPolicyRequest): Promise<$_model.CreateControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createControlPolicyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * >  A maximum of five levels of folders can be created under the root folder.
   * In this example, a folder named `rdFolder` is created under the root folder.
   * 
   * @param request - CreateFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFolderResponse
   */
  async createFolderWithOptions(request: $_model.CreateFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFolderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.folderName)) {
      query["FolderName"] = request.folderName;
    }

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFolder",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFolderResponse>(await this.callApi(params, req, runtime), new $_model.CreateFolderResponse({}));
  }

  /**
   * @remarks
   * >  A maximum of five levels of folders can be created under the root folder.
   * In this example, a folder named `rdFolder` is created under the root folder.
   * 
   * @param request - CreateFolderRequest
   * @returns CreateFolderResponse
   */
  async createFolder(request: $_model.CreateFolderRequest): Promise<$_model.CreateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  /**
   * Creates a permission policy.
   * 
   * @param request - CreatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(request: $_model.CreatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicy",
      version: "2020-03-31",
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
   * Creates a permission policy.
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: $_model.CreatePolicyRequest): Promise<$_model.CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a version for a permission policy.
   * 
   * @param request - CreatePolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyVersionResponse
   */
  async createPolicyVersionWithOptions(request: $_model.CreatePolicyVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.setAsDefault)) {
      query["SetAsDefault"] = request.setAsDefault;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicyVersion",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicyVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicyVersionResponse({}));
  }

  /**
   * Creates a version for a permission policy.
   * 
   * @param request - CreatePolicyVersionRequest
   * @returns CreatePolicyVersionResponse
   */
  async createPolicyVersion(request: $_model.CreatePolicyVersionRequest): Promise<$_model.CreatePolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyVersionWithOptions(request, runtime);
  }

  /**
   * Creates a member of the resource account type.
   * 
   * @remarks
   * A member serves as a container for resources and is also an organizational unit in a resource directory. A member indicates a project or application. The resources of different members are isolated.
   * 
   * @param request - CreateResourceAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceAccountResponse
   */
  async createResourceAccountWithOptions(request: $_model.CreateResourceAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountNamePrefix)) {
      query["AccountNamePrefix"] = request.accountNamePrefix;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!$dara.isNull(request.payerAccountId)) {
      query["PayerAccountId"] = request.payerAccountId;
    }

    if (!$dara.isNull(request.resellAccountType)) {
      query["ResellAccountType"] = request.resellAccountType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceAccountResponse({}));
  }

  /**
   * Creates a member of the resource account type.
   * 
   * @remarks
   * A member serves as a container for resources and is also an organizational unit in a resource directory. A member indicates a project or application. The resources of different members are isolated.
   * 
   * @param request - CreateResourceAccountRequest
   * @returns CreateResourceAccountResponse
   */
  async createResourceAccount(request: $_model.CreateResourceAccountRequest): Promise<$_model.CreateResourceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceAccountWithOptions(request, runtime);
  }

  /**
   * Creates a resource group.
   * 
   * @remarks
   * > A maximum of 30 resource groups can be created within an Alibaba Cloud account.
   * 
   * @param request - CreateResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroupWithOptions(request: $_model.CreateResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceGroup",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceGroupResponse({}));
  }

  /**
   * Creates a resource group.
   * 
   * @remarks
   * > A maximum of 30 resource groups can be created within an Alibaba Cloud account.
   * 
   * @param request - CreateResourceGroupRequest
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroup(request: $_model.CreateResourceGroupRequest): Promise<$_model.CreateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a RAM role.
   * 
   * @param request - CreateRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoleResponse
   */
  async createRoleWithOptions(request: $_model.CreateRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assumeRolePolicyDocument)) {
      query["AssumeRolePolicyDocument"] = request.assumeRolePolicyDocument;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.maxSessionDuration)) {
      query["MaxSessionDuration"] = request.maxSessionDuration;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRole",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRoleResponse({}));
  }

  /**
   * Creates a RAM role.
   * 
   * @param request - CreateRoleRequest
   * @returns CreateRoleResponse
   */
  async createRole(request: $_model.CreateRoleRequest): Promise<$_model.CreateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRoleWithOptions(request, runtime);
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
    if (!$dara.isNull(request.customSuffix)) {
      query["CustomSuffix"] = request.customSuffix;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceLinkedRole",
      version: "2020-03-31",
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
   * Rejects an invitation.
   * 
   * @param request - DeclineHandshakeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeclineHandshakeResponse
   */
  async declineHandshakeWithOptions(request: $_model.DeclineHandshakeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeclineHandshakeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.handshakeId)) {
      query["HandshakeId"] = request.handshakeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeclineHandshake",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeclineHandshakeResponse>(await this.callApi(params, req, runtime), new $_model.DeclineHandshakeResponse({}));
  }

  /**
   * Rejects an invitation.
   * 
   * @param request - DeclineHandshakeRequest
   * @returns DeclineHandshakeResponse
   */
  async declineHandshake(request: $_model.DeclineHandshakeRequest): Promise<$_model.DeclineHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.declineHandshakeWithOptions(request, runtime);
  }

  /**
   * 账号一键删除
   * 
   * @remarks
   * The ID of the member that you want to delete.
   * 
   * @param tmpReq - DeleteAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccountResponse
   */
  async deleteAccountWithOptions(tmpReq: $_model.DeleteAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccountResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAccountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.abandonableCheckId)) {
      request.abandonableCheckIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.abandonableCheckId, "AbandonableCheckId", "json");
    }

    let query = { };
    if (!$dara.isNull(request.abandonableCheckIdShrink)) {
      query["AbandonableCheckId"] = request.abandonableCheckIdShrink;
    }

    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccount",
      version: "2020-03-31",
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
   * 账号一键删除
   * 
   * @remarks
   * The ID of the member that you want to delete.
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a transfer rule.
   * 
   * @param request - DeleteAutoGroupingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoGroupingRuleResponse
   */
  async deleteAutoGroupingRuleWithOptions(request: $_model.DeleteAutoGroupingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAutoGroupingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAutoGroupingRule",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAutoGroupingRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAutoGroupingRuleResponse({}));
  }

  /**
   * Deletes a transfer rule.
   * 
   * @param request - DeleteAutoGroupingRuleRequest
   * @returns DeleteAutoGroupingRuleResponse
   */
  async deleteAutoGroupingRule(request: $_model.DeleteAutoGroupingRuleRequest): Promise<$_model.DeleteAutoGroupingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoGroupingRuleWithOptions(request, runtime);
  }

  /**
   * 删除管控策略
   * 
   * @remarks
   * If you want to delete a custom control policy that is attached to folders or member accounts, you must call the [DetachControlPolicy](https://help.aliyun.com/document_detail/208331.html) operation to detach the policy before you delete it.
   * In this example, the custom control policy `cp-SImPt8GCEwiq****` is deleted.
   * 
   * @param request - DeleteControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteControlPolicyResponse
   */
  async deleteControlPolicyWithOptions(request: $_model.DeleteControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteControlPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteControlPolicyResponse({}));
  }

  /**
   * 删除管控策略
   * 
   * @remarks
   * If you want to delete a custom control policy that is attached to folders or member accounts, you must call the [DetachControlPolicy](https://help.aliyun.com/document_detail/208331.html) operation to detach the policy before you delete it.
   * In this example, the custom control policy `cp-SImPt8GCEwiq****` is deleted.
   * 
   * @param request - DeleteControlPolicyRequest
   * @returns DeleteControlPolicyResponse
   */
  async deleteControlPolicy(request: $_model.DeleteControlPolicyRequest): Promise<$_model.DeleteControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteControlPolicyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * >  Before you delete a folder, make sure that the folder does not contain any member accounts or child folders.
   * 
   * @param request - DeleteFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFolderResponse
   */
  async deleteFolderWithOptions(request: $_model.DeleteFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFolderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFolder",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFolderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFolderResponse({}));
  }

  /**
   * @remarks
   * >  Before you delete a folder, make sure that the folder does not contain any member accounts or child folders.
   * 
   * @param request - DeleteFolderRequest
   * @returns DeleteFolderResponse
   */
  async deleteFolder(request: $_model.DeleteFolderRequest): Promise<$_model.DeleteFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  /**
   * Deletes a permission policy.
   * 
   * @remarks
   * > 
   * *   Before you delete a permission policy, you must delete its all non-default versions. For information about how to delete a policy version, see [DeletePolicyVersion](https://help.aliyun.com/document_detail/159041.html).
   * *   Before you delete a permission policy, you must make sure that the policy is not attached to a RAM user, a RAM user group, or a RAM role. For information about how to detach a policy, see [DetachPolicy](https://help.aliyun.com/document_detail/159168.html).
   * 
   * @param request - DeletePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: $_model.DeletePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicy",
      version: "2020-03-31",
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
   * Deletes a permission policy.
   * 
   * @remarks
   * > 
   * *   Before you delete a permission policy, you must delete its all non-default versions. For information about how to delete a policy version, see [DeletePolicyVersion](https://help.aliyun.com/document_detail/159041.html).
   * *   Before you delete a permission policy, you must make sure that the policy is not attached to a RAM user, a RAM user group, or a RAM role. For information about how to detach a policy, see [DetachPolicy](https://help.aliyun.com/document_detail/159168.html).
   * 
   * @param request - DeletePolicyRequest
   * @returns DeletePolicyResponse
   */
  async deletePolicy(request: $_model.DeletePolicyRequest): Promise<$_model.DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a version of a permission policy.
   * 
   * @remarks
   * >  The default version of a policy cannot be deleted.
   * 
   * @param request - DeletePolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyVersionResponse
   */
  async deletePolicyVersionWithOptions(request: $_model.DeletePolicyVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyVersion",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyVersionResponse({}));
  }

  /**
   * Deletes a version of a permission policy.
   * 
   * @remarks
   * >  The default version of a policy cannot be deleted.
   * 
   * @param request - DeletePolicyVersionRequest
   * @returns DeletePolicyVersionResponse
   */
  async deletePolicyVersion(request: $_model.DeletePolicyVersionRequest): Promise<$_model.DeletePolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyVersionWithOptions(request, runtime);
  }

  /**
   * Deletes a resource group.
   * 
   * @remarks
   * >  Before you delete a resource group, you must delete all the resources in it.
   * In this example, the resource group whose ID is `rg-9gLOoK****` is deleted.
   * 
   * @param request - DeleteResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroupWithOptions(request: $_model.DeleteResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceGroup",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceGroupResponse({}));
  }

  /**
   * Deletes a resource group.
   * 
   * @remarks
   * >  Before you delete a resource group, you must delete all the resources in it.
   * In this example, the resource group whose ID is `rg-9gLOoK****` is deleted.
   * 
   * @param request - DeleteResourceGroupRequest
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroup(request: $_model.DeleteResourceGroupRequest): Promise<$_model.DeleteResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResourceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a RAM role.
   * 
   * @param request - DeleteRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoleResponse
   */
  async deleteRoleWithOptions(request: $_model.DeleteRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRole",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRoleResponse({}));
  }

  /**
   * Deletes a RAM role.
   * 
   * @param request - DeleteRoleRequest
   * @returns DeleteRoleResponse
   */
  async deleteRole(request: $_model.DeleteRoleRequest): Promise<$_model.DeleteRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRoleWithOptions(request, runtime);
  }

  /**
   * Deletes a service-linked role.
   * 
   * @param request - DeleteServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceLinkedRoleResponse
   */
  async deleteServiceLinkedRoleWithOptions(request: $_model.DeleteServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceLinkedRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceLinkedRole",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceLinkedRoleResponse({}));
  }

  /**
   * Deletes a service-linked role.
   * 
   * @param request - DeleteServiceLinkedRoleRequest
   * @returns DeleteServiceLinkedRoleResponse
   */
  async deleteServiceLinkedRole(request: $_model.DeleteServiceLinkedRoleRequest): Promise<$_model.DeleteServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * 注销代理管理员
   * 
   * @remarks
   * >  If the delegated administrator account that you want to remove has historical management tasks in the related trusted service, the trusted service may be affected after the delegated administrator account is removed. Therefore, proceed with caution.
   * This topic provides an example on how to call the API operation to remove the delegated administrator account `181761095690****` for Cloud Firewall.
   * 
   * @param request - DeregisterDelegatedAdministratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeregisterDelegatedAdministratorResponse
   */
  async deregisterDelegatedAdministratorWithOptions(request: $_model.DeregisterDelegatedAdministratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeregisterDelegatedAdministratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.servicePrincipal)) {
      query["ServicePrincipal"] = request.servicePrincipal;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeregisterDelegatedAdministrator",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeregisterDelegatedAdministratorResponse>(await this.callApi(params, req, runtime), new $_model.DeregisterDelegatedAdministratorResponse({}));
  }

  /**
   * 注销代理管理员
   * 
   * @remarks
   * >  If the delegated administrator account that you want to remove has historical management tasks in the related trusted service, the trusted service may be affected after the delegated administrator account is removed. Therefore, proceed with caution.
   * This topic provides an example on how to call the API operation to remove the delegated administrator account `181761095690****` for Cloud Firewall.
   * 
   * @param request - DeregisterDelegatedAdministratorRequest
   * @returns DeregisterDelegatedAdministratorResponse
   */
  async deregisterDelegatedAdministrator(request: $_model.DeregisterDelegatedAdministratorRequest): Promise<$_model.DeregisterDelegatedAdministratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deregisterDelegatedAdministratorWithOptions(request, runtime);
  }

  /**
   * @remarks
   * Before you disable a resource directory, make sure that the following requirements are met:
   * *   All member accounts must be removed from the resource directory. For more information about how to remove a member account, see [RemoveCloudAccount](https://help.aliyun.com/document_detail/159431.html).
   * *   All folders except the root folder must be deleted from the resource directory. For more information about how to delete a folder, see [DeleteFolder](https://help.aliyun.com/document_detail/159432.html).
   * 
   * @param request - DestroyResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DestroyResourceDirectoryResponse
   */
  async destroyResourceDirectoryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DestroyResourceDirectoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DestroyResourceDirectory",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DestroyResourceDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.DestroyResourceDirectoryResponse({}));
  }

  /**
   * @remarks
   * Before you disable a resource directory, make sure that the following requirements are met:
   * *   All member accounts must be removed from the resource directory. For more information about how to remove a member account, see [RemoveCloudAccount](https://help.aliyun.com/document_detail/159431.html).
   * *   All folders except the root folder must be deleted from the resource directory. For more information about how to delete a folder, see [DeleteFolder](https://help.aliyun.com/document_detail/159432.html).
   * @returns DestroyResourceDirectoryResponse
   */
  async destroyResourceDirectory(): Promise<$_model.DestroyResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.destroyResourceDirectoryWithOptions(runtime);
  }

  /**
   * 解绑管控策略
   * 
   * @remarks
   * After you detach an access control policy, the operations performed on resources by using members are not limited by the policy. Make sure that the detached policy meets your expectations. Otherwise, your business may be affected.
   * Both the system and custom access control policies can be detached. If an object has only one access control policy attached, the policy cannot be detached.
   * This topic provides an example on how to call the API operation to detach the custom control policy `cp-jExXAqIYkwHN****` from the folder `fd-ZDNPiT****`.
   * 
   * @param request - DetachControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachControlPolicyResponse
   */
  async detachControlPolicyWithOptions(request: $_model.DetachControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachControlPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DetachControlPolicyResponse({}));
  }

  /**
   * 解绑管控策略
   * 
   * @remarks
   * After you detach an access control policy, the operations performed on resources by using members are not limited by the policy. Make sure that the detached policy meets your expectations. Otherwise, your business may be affected.
   * Both the system and custom access control policies can be detached. If an object has only one access control policy attached, the policy cannot be detached.
   * This topic provides an example on how to call the API operation to detach the custom control policy `cp-jExXAqIYkwHN****` from the folder `fd-ZDNPiT****`.
   * 
   * @param request - DetachControlPolicyRequest
   * @returns DetachControlPolicyResponse
   */
  async detachControlPolicy(request: $_model.DetachControlPolicyRequest): Promise<$_model.DetachControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachControlPolicyWithOptions(request, runtime);
  }

  /**
   * Detaches a permission policy from an object. After you detach a policy from an object, the object does not have the operation permissions on the current resource group or the resources within the current account.
   * 
   * @param request - DetachPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPolicyResponse
   */
  async detachPolicyWithOptions(request: $_model.DetachPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!$dara.isNull(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachPolicy",
      version: "2020-03-31",
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
   * Detaches a permission policy from an object. After you detach a policy from an object, the object does not have the operation permissions on the current resource group or the resources within the current account.
   * 
   * @param request - DetachPolicyRequest
   * @returns DetachPolicyResponse
   */
  async detachPolicy(request: $_model.DetachPolicyRequest): Promise<$_model.DetachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachPolicyWithOptions(request, runtime);
  }

  /**
   * Disables the Transfer Associated Resources feature.
   * 
   * @param request - DisableAssociatedTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAssociatedTransferResponse
   */
  async disableAssociatedTransferWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DisableAssociatedTransferResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DisableAssociatedTransfer",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAssociatedTransferResponse>(await this.callApi(params, req, runtime), new $_model.DisableAssociatedTransferResponse({}));
  }

  /**
   * Disables the Transfer Associated Resources feature.
   * @returns DisableAssociatedTransferResponse
   */
  async disableAssociatedTransfer(): Promise<$_model.DisableAssociatedTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAssociatedTransferWithOptions(runtime);
  }

  /**
   * Disables the Automatic Resource Transfer feature. After the feature is disabled, existing custom transfer rules and existing transfer rules for associated resources are deleted. However, existing relationships between resources and resource groups are not affected. If you still want to use this feature, you can enable it again 1 minute later.
   * 
   * @param request - DisableAutoGroupingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAutoGroupingResponse
   */
  async disableAutoGroupingWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DisableAutoGroupingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DisableAutoGrouping",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAutoGroupingResponse>(await this.callApi(params, req, runtime), new $_model.DisableAutoGroupingResponse({}));
  }

  /**
   * Disables the Automatic Resource Transfer feature. After the feature is disabled, existing custom transfer rules and existing transfer rules for associated resources are deleted. However, existing relationships between resources and resource groups are not affected. If you still want to use this feature, you can enable it again 1 minute later.
   * @returns DisableAutoGroupingResponse
   */
  async disableAutoGrouping(): Promise<$_model.DisableAutoGroupingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAutoGroupingWithOptions(runtime);
  }

  /**
   * 禁用管控策略
   * 
   * @remarks
   * After you disable the Control Policy feature, the system automatically detaches all control policies that are attached to folders and member accounts. The system does not delete these control policies, but you cannot attach them to folders or member accounts again.
   * >  If you disable the Control Policy feature, the permissions of all folders and member accounts in a resource directory are affected. You must proceed with caution.
   * 
   * @param request - DisableControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableControlPolicyResponse
   */
  async disableControlPolicyWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DisableControlPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DisableControlPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DisableControlPolicyResponse({}));
  }

  /**
   * 禁用管控策略
   * 
   * @remarks
   * After you disable the Control Policy feature, the system automatically detaches all control policies that are attached to folders and member accounts. The system does not delete these control policies, but you cannot attach them to folders or member accounts again.
   * >  If you disable the Control Policy feature, the permissions of all folders and member accounts in a resource directory are affected. You must proceed with caution.
   * @returns DisableControlPolicyResponse
   */
  async disableControlPolicy(): Promise<$_model.DisableControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableControlPolicyWithOptions(runtime);
  }

  /**
   * Disables group event notification.
   * 
   * @param request - DisableResourceGroupNotificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableResourceGroupNotificationResponse
   */
  async disableResourceGroupNotificationWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DisableResourceGroupNotificationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DisableResourceGroupNotification",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableResourceGroupNotificationResponse>(await this.callApi(params, req, runtime), new $_model.DisableResourceGroupNotificationResponse({}));
  }

  /**
   * Disables group event notification.
   * @returns DisableResourceGroupNotificationResponse
   */
  async disableResourceGroupNotification(): Promise<$_model.DisableResourceGroupNotificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableResourceGroupNotificationWithOptions(runtime);
  }

  /**
   * Enables the Transfer Associated Resources feature.
   * 
   * @param request - EnableAssociatedTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAssociatedTransferResponse
   */
  async enableAssociatedTransferWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.EnableAssociatedTransferResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableAssociatedTransfer",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAssociatedTransferResponse>(await this.callApi(params, req, runtime), new $_model.EnableAssociatedTransferResponse({}));
  }

  /**
   * Enables the Transfer Associated Resources feature.
   * @returns EnableAssociatedTransferResponse
   */
  async enableAssociatedTransfer(): Promise<$_model.EnableAssociatedTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAssociatedTransferWithOptions(runtime);
  }

  /**
   * Enables the Automatic Resource Transfer feature. After the feature is enabled, you can create, update, delete, and query transfer rules.
   * 
   * @param request - EnableAutoGroupingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAutoGroupingResponse
   */
  async enableAutoGroupingWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.EnableAutoGroupingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableAutoGrouping",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAutoGroupingResponse>(await this.callApi(params, req, runtime), new $_model.EnableAutoGroupingResponse({}));
  }

  /**
   * Enables the Automatic Resource Transfer feature. After the feature is enabled, you can create, update, delete, and query transfer rules.
   * @returns EnableAutoGroupingResponse
   */
  async enableAutoGrouping(): Promise<$_model.EnableAutoGroupingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAutoGroupingWithOptions(runtime);
  }

  /**
   * Enables the Control Policy feature.
   * 
   * @remarks
   * The Control Policy feature allows you to manage the permission boundaries of the folders or member accounts in a resource directory in a centralized manner. This feature is implemented based on the resource directory. You can use this feature to develop common or dedicated rules for access control. The Control Policy feature does not grant permissions but only defines permission boundaries. A member account in a resource directory can be used to access resources only after it is granted the required permissions by using the Resource Access Management (RAM) service. For more information, see [Overview of the Control Policy feature](https://help.aliyun.com/document_detail/178671.html).
   * 
   * @param request - EnableControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableControlPolicyResponse
   */
  async enableControlPolicyWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.EnableControlPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableControlPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.EnableControlPolicyResponse({}));
  }

  /**
   * Enables the Control Policy feature.
   * 
   * @remarks
   * The Control Policy feature allows you to manage the permission boundaries of the folders or member accounts in a resource directory in a centralized manner. This feature is implemented based on the resource directory. You can use this feature to develop common or dedicated rules for access control. The Control Policy feature does not grant permissions but only defines permission boundaries. A member account in a resource directory can be used to access resources only after it is granted the required permissions by using the Resource Access Management (RAM) service. For more information, see [Overview of the Control Policy feature](https://help.aliyun.com/document_detail/178671.html).
   * @returns EnableControlPolicyResponse
   */
  async enableControlPolicy(): Promise<$_model.EnableControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableControlPolicyWithOptions(runtime);
  }

  /**
   * 开启RD
   * 
   * @remarks
   * You can use the current account or a newly created account to enable a resource directory. For more information, see [Enable a resource directory](https://help.aliyun.com/document_detail/111215.html).
   * In this example, the current account is used to enable a resource directory.
   * 
   * @param request - EnableResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableResourceDirectoryResponse
   */
  async enableResourceDirectoryWithOptions(request: $_model.EnableResourceDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableResourceDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableMode)) {
      query["EnableMode"] = request.enableMode;
    }

    if (!$dara.isNull(request.MAName)) {
      query["MAName"] = request.MAName;
    }

    if (!$dara.isNull(request.MASecureMobilePhone)) {
      query["MASecureMobilePhone"] = request.MASecureMobilePhone;
    }

    if (!$dara.isNull(request.verificationCode)) {
      query["VerificationCode"] = request.verificationCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableResourceDirectory",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableResourceDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.EnableResourceDirectoryResponse({}));
  }

  /**
   * 开启RD
   * 
   * @remarks
   * You can use the current account or a newly created account to enable a resource directory. For more information, see [Enable a resource directory](https://help.aliyun.com/document_detail/111215.html).
   * In this example, the current account is used to enable a resource directory.
   * 
   * @param request - EnableResourceDirectoryRequest
   * @returns EnableResourceDirectoryResponse
   */
  async enableResourceDirectory(request: $_model.EnableResourceDirectoryRequest): Promise<$_model.EnableResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableResourceDirectoryWithOptions(request, runtime);
  }

  /**
   * Enables group event notification.
   * 
   * @param request - EnableResourceGroupNotificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableResourceGroupNotificationResponse
   */
  async enableResourceGroupNotificationWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.EnableResourceGroupNotificationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableResourceGroupNotification",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableResourceGroupNotificationResponse>(await this.callApi(params, req, runtime), new $_model.EnableResourceGroupNotificationResponse({}));
  }

  /**
   * Enables group event notification.
   * @returns EnableResourceGroupNotificationResponse
   */
  async enableResourceGroupNotification(): Promise<$_model.EnableResourceGroupNotificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableResourceGroupNotificationWithOptions(runtime);
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to query the information of the member whose Alibaba Cloud account ID is `181761095690****`.
   * 
   * @param request - GetAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountResponse
   */
  async getAccountWithOptions(request: $_model.GetAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountResponse({}));
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to query the information of the member whose Alibaba Cloud account ID is `181761095690****`.
   * 
   * @param request - GetAccountRequest
   * @returns GetAccountResponse
   */
  async getAccount(request: $_model.GetAccountRequest): Promise<$_model.GetAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountWithOptions(request, runtime);
  }

  /**
   * Queries the result of a member deletion check.
   * 
   * @remarks
   * After you call the [CheckAccountDelete](https://help.aliyun.com/document_detail/448542.html) operation to perform a member deletion check, you can call the GetAccountDeletionCheckResult operation to query the check result. If the check result shows that the member meets deletion requirements, you can delete the member. Otherwise, you need to first modify the items that do not meet requirements.
   * This topic provides an example on how to call the API operation to query the result of the deletion check for the member whose ID is `179855839641****`. The response shows that the member does not meet deletion requirements.
   * 
   * @param request - GetAccountDeletionCheckResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountDeletionCheckResultResponse
   */
  async getAccountDeletionCheckResultWithOptions(request: $_model.GetAccountDeletionCheckResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountDeletionCheckResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountDeletionCheckResult",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountDeletionCheckResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountDeletionCheckResultResponse({}));
  }

  /**
   * Queries the result of a member deletion check.
   * 
   * @remarks
   * After you call the [CheckAccountDelete](https://help.aliyun.com/document_detail/448542.html) operation to perform a member deletion check, you can call the GetAccountDeletionCheckResult operation to query the check result. If the check result shows that the member meets deletion requirements, you can delete the member. Otherwise, you need to first modify the items that do not meet requirements.
   * This topic provides an example on how to call the API operation to query the result of the deletion check for the member whose ID is `179855839641****`. The response shows that the member does not meet deletion requirements.
   * 
   * @param request - GetAccountDeletionCheckResultRequest
   * @returns GetAccountDeletionCheckResultResponse
   */
  async getAccountDeletionCheckResult(request: $_model.GetAccountDeletionCheckResultRequest): Promise<$_model.GetAccountDeletionCheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountDeletionCheckResultWithOptions(request, runtime);
  }

  /**
   * 获取账号删除状态
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the deletion status of the member whose Alibaba Cloud account ID is `169946124551****`. The response shows that the member is deleted.
   * 
   * @param request - GetAccountDeletionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountDeletionStatusResponse
   */
  async getAccountDeletionStatusWithOptions(request: $_model.GetAccountDeletionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountDeletionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountDeletionStatus",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountDeletionStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountDeletionStatusResponse({}));
  }

  /**
   * 获取账号删除状态
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the deletion status of the member whose Alibaba Cloud account ID is `169946124551****`. The response shows that the member is deleted.
   * 
   * @param request - GetAccountDeletionStatusRequest
   * @returns GetAccountDeletionStatusResponse
   */
  async getAccountDeletionStatus(request: $_model.GetAccountDeletionStatusRequest): Promise<$_model.GetAccountDeletionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountDeletionStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about a transfer rule.
   * 
   * @param request - GetAutoGroupingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoGroupingRuleResponse
   */
  async getAutoGroupingRuleWithOptions(request: $_model.GetAutoGroupingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAutoGroupingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoGroupingRule",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAutoGroupingRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetAutoGroupingRuleResponse({}));
  }

  /**
   * Queries the information about a transfer rule.
   * 
   * @param request - GetAutoGroupingRuleRequest
   * @returns GetAutoGroupingRuleResponse
   */
  async getAutoGroupingRule(request: $_model.GetAutoGroupingRuleRequest): Promise<$_model.GetAutoGroupingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoGroupingRuleWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Automatic Resource Transfer feature.
   * 
   * @param request - GetAutoGroupingStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoGroupingStatusResponse
   */
  async getAutoGroupingStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetAutoGroupingStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoGroupingStatus",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAutoGroupingStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetAutoGroupingStatusResponse({}));
  }

  /**
   * Queries the status of the Automatic Resource Transfer feature.
   * @returns GetAutoGroupingStatusResponse
   */
  async getAutoGroupingStatus(): Promise<$_model.GetAutoGroupingStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoGroupingStatusWithOptions(runtime);
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to query the details of the access control policy whose ID is `cp-SImPt8GCEwiq****`.
   * 
   * @param request - GetControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetControlPolicyResponse
   */
  async getControlPolicyWithOptions(request: $_model.GetControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetControlPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetControlPolicyResponse({}));
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to query the details of the access control policy whose ID is `cp-SImPt8GCEwiq****`.
   * 
   * @param request - GetControlPolicyRequest
   * @returns GetControlPolicyResponse
   */
  async getControlPolicy(request: $_model.GetControlPolicyRequest): Promise<$_model.GetControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Control Policy feature.
   * 
   * @param request - GetControlPolicyEnablementStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetControlPolicyEnablementStatusResponse
   */
  async getControlPolicyEnablementStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetControlPolicyEnablementStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetControlPolicyEnablementStatus",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetControlPolicyEnablementStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetControlPolicyEnablementStatusResponse({}));
  }

  /**
   * Queries the status of the Control Policy feature.
   * @returns GetControlPolicyEnablementStatusResponse
   */
  async getControlPolicyEnablementStatus(): Promise<$_model.GetControlPolicyEnablementStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getControlPolicyEnablementStatusWithOptions(runtime);
  }

  /**
   * @remarks
   * In this example, the information of the folder `fd-Jyl5U7****` is queried.
   * 
   * @param request - GetFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFolderResponse
   */
  async getFolderWithOptions(request: $_model.GetFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFolderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFolder",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFolderResponse>(await this.callApi(params, req, runtime), new $_model.GetFolderResponse({}));
  }

  /**
   * @remarks
   * In this example, the information of the folder `fd-Jyl5U7****` is queried.
   * 
   * @param request - GetFolderRequest
   * @returns GetFolderResponse
   */
  async getFolder(request: $_model.GetFolderRequest): Promise<$_model.GetFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFolderWithOptions(request, runtime);
  }

  /**
   * Queries the information of an invitation.
   * 
   * @remarks
   * In this example, the information of the invitation whose ID is `h-ycm4rp****` is queried.
   * 
   * @param request - GetHandshakeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHandshakeResponse
   */
  async getHandshakeWithOptions(request: $_model.GetHandshakeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHandshakeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.handshakeId)) {
      query["HandshakeId"] = request.handshakeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHandshake",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHandshakeResponse>(await this.callApi(params, req, runtime), new $_model.GetHandshakeResponse({}));
  }

  /**
   * Queries the information of an invitation.
   * 
   * @remarks
   * In this example, the information of the invitation whose ID is `h-ycm4rp****` is queried.
   * 
   * @param request - GetHandshakeRequest
   * @returns GetHandshakeResponse
   */
  async getHandshake(request: $_model.GetHandshakeRequest): Promise<$_model.GetHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHandshakeWithOptions(request, runtime);
  }

  /**
   * @param request - GetPayerForAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPayerForAccountResponse
   */
  async getPayerForAccountWithOptions(request: $_model.GetPayerForAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPayerForAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPayerForAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPayerForAccountResponse>(await this.callApi(params, req, runtime), new $_model.GetPayerForAccountResponse({}));
  }

  /**
   * @param request - GetPayerForAccountRequest
   * @returns GetPayerForAccountResponse
   */
  async getPayerForAccount(request: $_model.GetPayerForAccountRequest): Promise<$_model.GetPayerForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPayerForAccountWithOptions(request, runtime);
  }

  /**
   * Queries the information about a permission policy.
   * 
   * @param request - GetPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyResponse
   */
  async getPolicyWithOptions(request: $_model.GetPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicy",
      version: "2020-03-31",
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
   * Queries the information about a permission policy.
   * 
   * @param request - GetPolicyRequest
   * @returns GetPolicyResponse
   */
  async getPolicy(request: $_model.GetPolicyRequest): Promise<$_model.GetPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the information about a version of a permission policy.
   * 
   * @param request - GetPolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyVersionResponse
   */
  async getPolicyVersionWithOptions(request: $_model.GetPolicyVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicyVersion",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicyVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicyVersionResponse({}));
  }

  /**
   * Queries the information about a version of a permission policy.
   * 
   * @param request - GetPolicyVersionRequest
   * @returns GetPolicyVersionResponse
   */
  async getPolicyVersion(request: $_model.GetPolicyVersionRequest): Promise<$_model.GetPolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyVersionWithOptions(request, runtime);
  }

  /**
   * Queries the information of a resource directory. If you use a management account to call this API operation, the system returns the information of the resource directory that is enabled by using the management account. If you use a member to call this operation, the system returns the information of
   * 
   * @remarks
   * This topic provides an example on how to use a management account to call the API operation to query the information of the resource directory that is enabled by using the management account.
   * 
   * @param request - GetResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceDirectoryResponse
   */
  async getResourceDirectoryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceDirectoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceDirectory",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceDirectoryResponse({}));
  }

  /**
   * Queries the information of a resource directory. If you use a management account to call this API operation, the system returns the information of the resource directory that is enabled by using the management account. If you use a member to call this operation, the system returns the information of
   * 
   * @remarks
   * This topic provides an example on how to use a management account to call the API operation to query the information of the resource directory that is enabled by using the management account.
   * @returns GetResourceDirectoryResponse
   */
  async getResourceDirectory(): Promise<$_model.GetResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceDirectoryWithOptions(runtime);
  }

  /**
   * Queries the information of a resource group.
   * 
   * @param request - GetResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupResponse
   */
  async getResourceGroupWithOptions(request: $_model.GetResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroup",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceGroupResponse({}));
  }

  /**
   * Queries the information of a resource group.
   * 
   * @param request - GetResourceGroupRequest
   * @returns GetResourceGroupResponse
   */
  async getResourceGroup(request: $_model.GetResourceGroupRequest): Promise<$_model.GetResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a resource group administrator.
   * 
   * @param request - GetResourceGroupAdminSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupAdminSettingResponse
   */
  async getResourceGroupAdminSettingWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceGroupAdminSettingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroupAdminSetting",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceGroupAdminSettingResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceGroupAdminSettingResponse({}));
  }

  /**
   * Queries the configurations of a resource group administrator.
   * @returns GetResourceGroupAdminSettingResponse
   */
  async getResourceGroupAdminSetting(): Promise<$_model.GetResourceGroupAdminSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceGroupAdminSettingWithOptions(runtime);
  }

  /**
   * Queries the notification settings of a resource group.
   * 
   * @param request - GetResourceGroupNotificationSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupNotificationSettingResponse
   */
  async getResourceGroupNotificationSettingWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceGroupNotificationSettingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroupNotificationSetting",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceGroupNotificationSettingResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceGroupNotificationSettingResponse({}));
  }

  /**
   * Queries the notification settings of a resource group.
   * @returns GetResourceGroupNotificationSettingResponse
   */
  async getResourceGroupNotificationSetting(): Promise<$_model.GetResourceGroupNotificationSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceGroupNotificationSettingWithOptions(runtime);
  }

  /**
   * Queries the number of resources in a visible resource group.
   * 
   * @param request - GetResourceGroupResourceCountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupResourceCountsResponse
   */
  async getResourceGroupResourceCountsWithOptions(request: $_model.GetResourceGroupResourceCountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceGroupResourceCountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupByKey)) {
      query["GroupByKey"] = request.groupByKey;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroupResourceCounts",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceGroupResourceCountsResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceGroupResourceCountsResponse({}));
  }

  /**
   * Queries the number of resources in a visible resource group.
   * 
   * @param request - GetResourceGroupResourceCountsRequest
   * @returns GetResourceGroupResourceCountsResponse
   */
  async getResourceGroupResourceCounts(request: $_model.GetResourceGroupResourceCountsRequest): Promise<$_model.GetResourceGroupResourceCountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceGroupResourceCountsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a RAM role.
   * 
   * @param request - GetRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoleResponse
   */
  async getRoleWithOptions(request: $_model.GetRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRole",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRoleResponse>(await this.callApi(params, req, runtime), new $_model.GetRoleResponse({}));
  }

  /**
   * Queries the information about a RAM role.
   * 
   * @param request - GetRoleRequest
   * @returns GetRoleResponse
   */
  async getRole(request: $_model.GetRoleRequest): Promise<$_model.GetRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRoleWithOptions(request, runtime);
  }

  /**
   * Queries the status of the task that is used to delete a service-linked role.
   * 
   * @param request - GetServiceLinkedRoleDeletionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceLinkedRoleDeletionStatusResponse
   */
  async getServiceLinkedRoleDeletionStatusWithOptions(request: $_model.GetServiceLinkedRoleDeletionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceLinkedRoleDeletionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deletionTaskId)) {
      query["DeletionTaskId"] = request.deletionTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceLinkedRoleDeletionStatus",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceLinkedRoleDeletionStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceLinkedRoleDeletionStatusResponse({}));
  }

  /**
   * Queries the status of the task that is used to delete a service-linked role.
   * 
   * @param request - GetServiceLinkedRoleDeletionStatusRequest
   * @returns GetServiceLinkedRoleDeletionStatusResponse
   */
  async getServiceLinkedRoleDeletionStatus(request: $_model.GetServiceLinkedRoleDeletionStatusRequest): Promise<$_model.GetServiceLinkedRoleDeletionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceLinkedRoleDeletionStatusWithOptions(request, runtime);
  }

  /**
   * Enables a resource directory. After you enable a resource directory, the system automatically creates a root folder and sets the current account as the enterprise management account of the resource directory. The enterprise management account has all administrative permissions on this resource direc
   * 
   * @remarks
   * > 
   * *   An account can be used to enable a resource directory only after it passes enterprise real-name verification. An account that only passed individual real-name verification cannot be used to enable a resource directory.
   * *   We recommend that you only use the enterprise management account as the administrator of the resource directory. Do not use the enterprise management account to purchase cloud resources.
   * 
   * @param request - InitResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitResourceDirectoryResponse
   */
  async initResourceDirectoryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.InitResourceDirectoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "InitResourceDirectory",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitResourceDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.InitResourceDirectoryResponse({}));
  }

  /**
   * Enables a resource directory. After you enable a resource directory, the system automatically creates a root folder and sets the current account as the enterprise management account of the resource directory. The enterprise management account has all administrative permissions on this resource direc
   * 
   * @remarks
   * > 
   * *   An account can be used to enable a resource directory only after it passes enterprise real-name verification. An account that only passed individual real-name verification cannot be used to enable a resource directory.
   * *   We recommend that you only use the enterprise management account as the administrator of the resource directory. Do not use the enterprise management account to purchase cloud resources.
   * @returns InitResourceDirectoryResponse
   */
  async initResourceDirectory(): Promise<$_model.InitResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initResourceDirectoryWithOptions(runtime);
  }

  /**
   * Invites an account to join a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to invite the account `someone@example.com` to join a resource directory.
   * 
   * @param request - InviteAccountToResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InviteAccountToResourceDirectoryResponse
   */
  async inviteAccountToResourceDirectoryWithOptions(request: $_model.InviteAccountToResourceDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InviteAccountToResourceDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetEntity)) {
      query["TargetEntity"] = request.targetEntity;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InviteAccountToResourceDirectory",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InviteAccountToResourceDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.InviteAccountToResourceDirectoryResponse({}));
  }

  /**
   * Invites an account to join a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to invite the account `someone@example.com` to join a resource directory.
   * 
   * @param request - InviteAccountToResourceDirectoryRequest
   * @returns InviteAccountToResourceDirectoryResponse
   */
  async inviteAccountToResourceDirectory(request: $_model.InviteAccountToResourceDirectoryRequest): Promise<$_model.InviteAccountToResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inviteAccountToResourceDirectoryWithOptions(request, runtime);
  }

  /**
   * Queries all the members in a resource directory.
   * 
   * @remarks
   * You can use only the management account of a resource directory or a delegated administrator account of a trusted service to call this operation.
   * 
   * @param request - ListAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountsResponse
   */
  async listAccountsWithOptions(request: $_model.ListAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccounts",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListAccountsResponse({}));
  }

  /**
   * Queries all the members in a resource directory.
   * 
   * @remarks
   * You can use only the management account of a resource directory or a delegated administrator account of a trusted service to call this operation.
   * 
   * @param request - ListAccountsRequest
   * @returns ListAccountsResponse
   */
  async listAccounts(request: $_model.ListAccountsRequest): Promise<$_model.ListAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the information of members in a folder.
   * 
   * @param request - ListAccountsForParentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountsForParentResponse
   */
  async listAccountsForParentWithOptions(request: $_model.ListAccountsForParentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccountsForParentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!$dara.isNull(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccountsForParent",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccountsForParentResponse>(await this.callApi(params, req, runtime), new $_model.ListAccountsForParentResponse({}));
  }

  /**
   * Queries the information of members in a folder.
   * 
   * @param request - ListAccountsForParentRequest
   * @returns ListAccountsForParentResponse
   */
  async listAccountsForParent(request: $_model.ListAccountsForParentRequest): Promise<$_model.ListAccountsForParentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountsForParentWithOptions(request, runtime);
  }

  /**
   * @param request - ListAncestorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAncestorsResponse
   */
  async listAncestorsWithOptions(request: $_model.ListAncestorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAncestorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.childId)) {
      query["ChildId"] = request.childId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAncestors",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAncestorsResponse>(await this.callApi(params, req, runtime), new $_model.ListAncestorsResponse({}));
  }

  /**
   * @param request - ListAncestorsRequest
   * @returns ListAncestorsResponse
   */
  async listAncestors(request: $_model.ListAncestorsRequest): Promise<$_model.ListAncestorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAncestorsWithOptions(request, runtime);
  }

  /**
   * Queries the settings of the Transfer Associated Resources feature.
   * 
   * @param request - ListAssociatedTransferSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAssociatedTransferSettingResponse
   */
  async listAssociatedTransferSettingWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListAssociatedTransferSettingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListAssociatedTransferSetting",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAssociatedTransferSettingResponse>(await this.callApi(params, req, runtime), new $_model.ListAssociatedTransferSettingResponse({}));
  }

  /**
   * Queries the settings of the Transfer Associated Resources feature.
   * @returns ListAssociatedTransferSettingResponse
   */
  async listAssociatedTransferSetting(): Promise<$_model.ListAssociatedTransferSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAssociatedTransferSettingWithOptions(runtime);
  }

  /**
   * Queries a list of automatic grouping remediation records.
   * 
   * @param request - ListAutoGroupingRemediationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAutoGroupingRemediationsResponse
   */
  async listAutoGroupingRemediationsWithOptions(request: $_model.ListAutoGroupingRemediationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAutoGroupingRemediationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.earliestRemediationTime)) {
      query["EarliestRemediationTime"] = request.earliestRemediationTime;
    }

    if (!$dara.isNull(request.latestRemediationTime)) {
      query["LatestRemediationTime"] = request.latestRemediationTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.targetResourceGroupId)) {
      query["TargetResourceGroupId"] = request.targetResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAutoGroupingRemediations",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAutoGroupingRemediationsResponse>(await this.callApi(params, req, runtime), new $_model.ListAutoGroupingRemediationsResponse({}));
  }

  /**
   * Queries a list of automatic grouping remediation records.
   * 
   * @param request - ListAutoGroupingRemediationsRequest
   * @returns ListAutoGroupingRemediationsResponse
   */
  async listAutoGroupingRemediations(request: $_model.ListAutoGroupingRemediationsRequest): Promise<$_model.ListAutoGroupingRemediationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAutoGroupingRemediationsWithOptions(request, runtime);
  }

  /**
   * Queries a list of transfer rules.
   * 
   * @param request - ListAutoGroupingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAutoGroupingRulesResponse
   */
  async listAutoGroupingRulesWithOptions(request: $_model.ListAutoGroupingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAutoGroupingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAutoGroupingRules",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAutoGroupingRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListAutoGroupingRulesResponse({}));
  }

  /**
   * Queries a list of transfer rules.
   * 
   * @param request - ListAutoGroupingRulesRequest
   * @returns ListAutoGroupingRulesResponse
   */
  async listAutoGroupingRules(request: $_model.ListAutoGroupingRulesRequest): Promise<$_model.ListAutoGroupingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAutoGroupingRulesWithOptions(request, runtime);
  }

  /**
   * Queries access control policies.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the system access control policies within a resource directory. The response shows that the resource directory has only one system access control policy. The policy is named `FullAliyunAccess`.
   * 
   * @param request - ListControlPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListControlPoliciesResponse
   */
  async listControlPoliciesWithOptions(request: $_model.ListControlPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListControlPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListControlPolicies",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListControlPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListControlPoliciesResponse({}));
  }

  /**
   * Queries access control policies.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the system access control policies within a resource directory. The response shows that the resource directory has only one system access control policy. The policy is named `FullAliyunAccess`.
   * 
   * @param request - ListControlPoliciesRequest
   * @returns ListControlPoliciesResponse
   */
  async listControlPolicies(request: $_model.ListControlPoliciesRequest): Promise<$_model.ListControlPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listControlPoliciesWithOptions(request, runtime);
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to query the access control policies that are attached to the folder `fd-ZDNPiT****`.
   * 
   * @param request - ListControlPolicyAttachmentsForTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListControlPolicyAttachmentsForTargetResponse
   */
  async listControlPolicyAttachmentsForTargetWithOptions(request: $_model.ListControlPolicyAttachmentsForTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListControlPolicyAttachmentsForTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListControlPolicyAttachmentsForTarget",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListControlPolicyAttachmentsForTargetResponse>(await this.callApi(params, req, runtime), new $_model.ListControlPolicyAttachmentsForTargetResponse({}));
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to query the access control policies that are attached to the folder `fd-ZDNPiT****`.
   * 
   * @param request - ListControlPolicyAttachmentsForTargetRequest
   * @returns ListControlPolicyAttachmentsForTargetResponse
   */
  async listControlPolicyAttachmentsForTarget(request: $_model.ListControlPolicyAttachmentsForTargetRequest): Promise<$_model.ListControlPolicyAttachmentsForTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listControlPolicyAttachmentsForTargetWithOptions(request, runtime);
  }

  /**
   * 列出所有的代理管理员
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query all delegated administrator accounts in a resource directory. The response shows that two delegated administrator accounts for Cloud Firewall exist in the resource directory.
   * 
   * @param request - ListDelegatedAdministratorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDelegatedAdministratorsResponse
   */
  async listDelegatedAdministratorsWithOptions(request: $_model.ListDelegatedAdministratorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDelegatedAdministratorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.servicePrincipal)) {
      query["ServicePrincipal"] = request.servicePrincipal;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDelegatedAdministrators",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDelegatedAdministratorsResponse>(await this.callApi(params, req, runtime), new $_model.ListDelegatedAdministratorsResponse({}));
  }

  /**
   * 列出所有的代理管理员
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query all delegated administrator accounts in a resource directory. The response shows that two delegated administrator accounts for Cloud Firewall exist in the resource directory.
   * 
   * @param request - ListDelegatedAdministratorsRequest
   * @returns ListDelegatedAdministratorsResponse
   */
  async listDelegatedAdministrators(request: $_model.ListDelegatedAdministratorsRequest): Promise<$_model.ListDelegatedAdministratorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDelegatedAdministratorsWithOptions(request, runtime);
  }

  /**
   * 查看指定账号被设置为哪些可信服务的委派管理员
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the trusted services for which the member `138660628348****` is specified as a delegated administrator account. The response shows that the member is specified as a delegated administrator account of Cloud Firewall.
   * 
   * @param request - ListDelegatedServicesForAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDelegatedServicesForAccountResponse
   */
  async listDelegatedServicesForAccountWithOptions(request: $_model.ListDelegatedServicesForAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDelegatedServicesForAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDelegatedServicesForAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDelegatedServicesForAccountResponse>(await this.callApi(params, req, runtime), new $_model.ListDelegatedServicesForAccountResponse({}));
  }

  /**
   * 查看指定账号被设置为哪些可信服务的委派管理员
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the trusted services for which the member `138660628348****` is specified as a delegated administrator account. The response shows that the member is specified as a delegated administrator account of Cloud Firewall.
   * 
   * @param request - ListDelegatedServicesForAccountRequest
   * @returns ListDelegatedServicesForAccountResponse
   */
  async listDelegatedServicesForAccount(request: $_model.ListDelegatedServicesForAccountRequest): Promise<$_model.ListDelegatedServicesForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDelegatedServicesForAccountWithOptions(request, runtime);
  }

  /**
   * @remarks
   * >  You can view the information of only the first-level subfolders of a folder.
   * 
   * @param request - ListFoldersForParentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFoldersForParentResponse
   */
  async listFoldersForParentWithOptions(request: $_model.ListFoldersForParentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFoldersForParentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!$dara.isNull(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFoldersForParent",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFoldersForParentResponse>(await this.callApi(params, req, runtime), new $_model.ListFoldersForParentResponse({}));
  }

  /**
   * @remarks
   * >  You can view the information of only the first-level subfolders of a folder.
   * 
   * @param request - ListFoldersForParentRequest
   * @returns ListFoldersForParentResponse
   */
  async listFoldersForParent(request: $_model.ListFoldersForParentRequest): Promise<$_model.ListFoldersForParentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFoldersForParentWithOptions(request, runtime);
  }

  /**
   * Queries the invitations that are associated with an account.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the invitations that are associated with the management account `172841235500****`. The response shows that two invitations are associated with the management account.
   * 
   * @param request - ListHandshakesForAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHandshakesForAccountResponse
   */
  async listHandshakesForAccountWithOptions(request: $_model.ListHandshakesForAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHandshakesForAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHandshakesForAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHandshakesForAccountResponse>(await this.callApi(params, req, runtime), new $_model.ListHandshakesForAccountResponse({}));
  }

  /**
   * Queries the invitations that are associated with an account.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the invitations that are associated with the management account `172841235500****`. The response shows that two invitations are associated with the management account.
   * 
   * @param request - ListHandshakesForAccountRequest
   * @returns ListHandshakesForAccountResponse
   */
  async listHandshakesForAccount(request: $_model.ListHandshakesForAccountRequest): Promise<$_model.ListHandshakesForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHandshakesForAccountWithOptions(request, runtime);
  }

  /**
   * Queries invitations in a resource directory.
   * 
   * @param request - ListHandshakesForResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHandshakesForResourceDirectoryResponse
   */
  async listHandshakesForResourceDirectoryWithOptions(request: $_model.ListHandshakesForResourceDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHandshakesForResourceDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHandshakesForResourceDirectory",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHandshakesForResourceDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.ListHandshakesForResourceDirectoryResponse({}));
  }

  /**
   * Queries invitations in a resource directory.
   * 
   * @param request - ListHandshakesForResourceDirectoryRequest
   * @returns ListHandshakesForResourceDirectoryResponse
   */
  async listHandshakesForResourceDirectory(request: $_model.ListHandshakesForResourceDirectoryRequest): Promise<$_model.ListHandshakesForResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHandshakesForResourceDirectoryWithOptions(request, runtime);
  }

  /**
   * Queries a list of permission policies.
   * 
   * @param request - ListPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: $_model.ListPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicies",
      version: "2020-03-31",
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
   * Queries a list of permission policies.
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: $_model.ListPoliciesRequest): Promise<$_model.ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries policy attachment records.
   * 
   * @remarks
   * You can view the following information:
   * *   Policy attachment records within an Alibaba Cloud account or a resource group
   * *   Permission policies attached to RAM users, RAM user groups, or RAM roles
   * *   RAM users, RAM user groups, or RAM roles to which permission policies are attached within an Alibaba Cloud account or a resource group
   * 
   * @param request - ListPolicyAttachmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyAttachmentsResponse
   */
  async listPolicyAttachmentsWithOptions(request: $_model.ListPolicyAttachmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicyAttachmentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!$dara.isNull(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicyAttachments",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicyAttachmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicyAttachmentsResponse({}));
  }

  /**
   * Queries policy attachment records.
   * 
   * @remarks
   * You can view the following information:
   * *   Policy attachment records within an Alibaba Cloud account or a resource group
   * *   Permission policies attached to RAM users, RAM user groups, or RAM roles
   * *   RAM users, RAM user groups, or RAM roles to which permission policies are attached within an Alibaba Cloud account or a resource group
   * 
   * @param request - ListPolicyAttachmentsRequest
   * @returns ListPolicyAttachmentsResponse
   */
  async listPolicyAttachments(request: $_model.ListPolicyAttachmentsRequest): Promise<$_model.ListPolicyAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries a list of versions of a policy.
   * 
   * @param request - ListPolicyVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyVersionsResponse
   */
  async listPolicyVersionsWithOptions(request: $_model.ListPolicyVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicyVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicyVersions",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicyVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicyVersionsResponse({}));
  }

  /**
   * Queries a list of versions of a policy.
   * 
   * @param request - ListPolicyVersionsRequest
   * @returns ListPolicyVersionsResponse
   */
  async listPolicyVersions(request: $_model.ListPolicyVersionsRequest): Promise<$_model.ListPolicyVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyVersionsWithOptions(request, runtime);
  }

  /**
   * 列出资源组能力项
   * 
   * @param request - ListResourceGroupCapabilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceGroupCapabilityResponse
   */
  async listResourceGroupCapabilityWithOptions(request: $_model.ListResourceGroupCapabilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceGroupCapabilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.supportResourceGroupEvent)) {
      query["SupportResourceGroupEvent"] = request.supportResourceGroupEvent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceGroupCapability",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceGroupCapabilityResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceGroupCapabilityResponse({}));
  }

  /**
   * 列出资源组能力项
   * 
   * @param request - ListResourceGroupCapabilityRequest
   * @returns ListResourceGroupCapabilityResponse
   */
  async listResourceGroupCapability(request: $_model.ListResourceGroupCapabilityRequest): Promise<$_model.ListResourceGroupCapabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceGroupCapabilityWithOptions(request, runtime);
  }

  /**
   * @remarks
   * You can call this API operation to query all resource groups within the current account. You can also call this API operation to query a specific resource group based on the status, ID, identifier, or display name of the resource group.
   * This topic provides an example on how to call the API operation to query the basic information about the resource groups `rg-1hSBH2****` and `rg-9gLOoK****` within the current account.
   * 
   * @param request - ListResourceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroupsWithOptions(request: $_model.ListResourceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
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
      action: "ListResourceGroups",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceGroupsResponse({}));
  }

  /**
   * @remarks
   * You can call this API operation to query all resource groups within the current account. You can also call this API operation to query a specific resource group based on the status, ID, identifier, or display name of the resource group.
   * This topic provides an example on how to call the API operation to query the basic information about the resource groups `rg-1hSBH2****` and `rg-9gLOoK****` within the current account.
   * 
   * @param request - ListResourceGroupsRequest
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroups(request: $_model.ListResourceGroupsRequest): Promise<$_model.ListResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceGroupsWithOptions(request, runtime);
  }

  /**
   * 列出资源组与用户授权信息
   * 
   * @param request - ListResourceGroupsWithAuthDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceGroupsWithAuthDetailsResponse
   */
  async listResourceGroupsWithAuthDetailsWithOptions(request: $_model.ListResourceGroupsWithAuthDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceGroupsWithAuthDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
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
      action: "ListResourceGroupsWithAuthDetails",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceGroupsWithAuthDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceGroupsWithAuthDetailsResponse({}));
  }

  /**
   * 列出资源组与用户授权信息
   * 
   * @param request - ListResourceGroupsWithAuthDetailsRequest
   * @returns ListResourceGroupsWithAuthDetailsResponse
   */
  async listResourceGroupsWithAuthDetails(request: $_model.ListResourceGroupsWithAuthDetailsRequest): Promise<$_model.ListResourceGroupsWithAuthDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceGroupsWithAuthDetailsWithOptions(request, runtime);
  }

  /**
   * Queries resources that can be accessed by the current account in resource groups.
   * 
   * @remarks
   * >  You can use a RAM role that is not associated with a session policy to call this API operation.
   * This topic provides an example on how to call the API operation to query resources that can be accessed by the current account in resource groups. The response shows that the current account can access only the Elastic Compute Service (ECS) instance `i-23v38****` in the resource group `rg-uPJpP****`.
   * 
   * @param request - ListResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: $_model.ListResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourcesResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResources",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourcesResponse({}));
  }

  /**
   * Queries resources that can be accessed by the current account in resource groups.
   * 
   * @remarks
   * >  You can use a RAM role that is not associated with a session policy to call this API operation.
   * This topic provides an example on how to call the API operation to query resources that can be accessed by the current account in resource groups. The response shows that the current account can access only the Elastic Compute Service (ECS) instance `i-23v38****` in the resource group `rg-uPJpP****`.
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: $_model.ListResourcesRequest): Promise<$_model.ListResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourcesWithOptions(request, runtime);
  }

  /**
   * Queries a list of RAM roles.
   * 
   * @param request - ListRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRolesResponse
   */
  async listRolesWithOptions(request: $_model.ListRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRolesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoles",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListRolesResponse({}));
  }

  /**
   * Queries a list of RAM roles.
   * 
   * @param request - ListRolesRequest
   * @returns ListRolesResponse
   */
  async listRoles(request: $_model.ListRolesRequest): Promise<$_model.ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  /**
   * 列出所有的Tag key
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query tag keys. The response shows that the custom tag key team exists.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: $_model.ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyFilter)) {
      query["KeyFilter"] = request.keyFilter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2020-03-31",
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
   * 列出所有的Tag key
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query tag keys. The response shows that the custom tag key team exists.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resource groups or the members in a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the tags that are added to the resource group with an ID of `rg-aekz6bre2uq****`. The response shows that only the `k1:v1` tag is added to the resource group.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
      version: "2020-03-31",
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
   * Queries the tags that are added to resource groups or the members in a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the tags that are added to the resource group with an ID of `rg-aekz6bre2uq****`. The response shows that only the `k1:v1` tag is added to the resource group.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 列出所有的Tag values
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the tag values of the tag key k1. The response shows that the tag value of the tag key k1 is v1.
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: $_model.ListTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!$dara.isNull(request.valueFilter)) {
      query["ValueFilter"] = request.valueFilter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagValues",
      version: "2020-03-31",
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
   * 列出所有的Tag values
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the tag values of the tag key k1. The response shows that the tag value of the tag key k1 is v1.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Queries the objects to which a specific control policy is attached.
   * 
   * @remarks
   * In this example, the folders or member accounts to which the control policy `cp-jExXAqIYkwHN****` is attached are queried. The returned result shows that the control policy is attached to the folder `fd-ZDNPiT****`.
   * 
   * @param request - ListTargetAttachmentsForControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTargetAttachmentsForControlPolicyResponse
   */
  async listTargetAttachmentsForControlPolicyWithOptions(request: $_model.ListTargetAttachmentsForControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTargetAttachmentsForControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTargetAttachmentsForControlPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTargetAttachmentsForControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListTargetAttachmentsForControlPolicyResponse({}));
  }

  /**
   * Queries the objects to which a specific control policy is attached.
   * 
   * @remarks
   * In this example, the folders or member accounts to which the control policy `cp-jExXAqIYkwHN****` is attached are queried. The returned result shows that the control policy is attached to the folder `fd-ZDNPiT****`.
   * 
   * @param request - ListTargetAttachmentsForControlPolicyRequest
   * @returns ListTargetAttachmentsForControlPolicyResponse
   */
  async listTargetAttachmentsForControlPolicy(request: $_model.ListTargetAttachmentsForControlPolicyRequest): Promise<$_model.ListTargetAttachmentsForControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTargetAttachmentsForControlPolicyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * >  Only an enterprise management account or delegated administrator account can be used to call this operation.
   * In this example, the trusted services that are enabled within an enterprise management account are queried. The returned result shows that the trusted services Cloud Config and ActionTrail are enabled within the enterprise management account.
   * 
   * @param request - ListTrustedServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrustedServiceStatusResponse
   */
  async listTrustedServiceStatusWithOptions(request: $_model.ListTrustedServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTrustedServiceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adminAccountId)) {
      query["AdminAccountId"] = request.adminAccountId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrustedServiceStatus",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTrustedServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.ListTrustedServiceStatusResponse({}));
  }

  /**
   * @remarks
   * >  Only an enterprise management account or delegated administrator account can be used to call this operation.
   * In this example, the trusted services that are enabled within an enterprise management account are queried. The returned result shows that the trusted services Cloud Config and ActionTrail are enabled within the enterprise management account.
   * 
   * @param request - ListTrustedServiceStatusRequest
   * @returns ListTrustedServiceStatusResponse
   */
  async listTrustedServiceStatus(request: $_model.ListTrustedServiceStatusRequest): Promise<$_model.ListTrustedServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTrustedServiceStatusWithOptions(request, runtime);
  }

  /**
   * 查询资源组事件
   * 
   * @param request - LookupResourceGroupEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LookupResourceGroupEventsResponse
   */
  async lookupResourceGroupEventsWithOptions(request: $_model.LookupResourceGroupEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LookupResourceGroupEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCategory)) {
      query["EventCategory"] = request.eventCategory;
    }

    if (!$dara.isNull(request.lookupAttributes)) {
      query["LookupAttributes"] = request.lookupAttributes;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupDisplayName)) {
      query["ResourceGroupDisplayName"] = request.resourceGroupDisplayName;
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
      action: "LookupResourceGroupEvents",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LookupResourceGroupEventsResponse>(await this.callApi(params, req, runtime), new $_model.LookupResourceGroupEventsResponse({}));
  }

  /**
   * 查询资源组事件
   * 
   * @param request - LookupResourceGroupEventsRequest
   * @returns LookupResourceGroupEventsResponse
   */
  async lookupResourceGroupEvents(request: $_model.LookupResourceGroupEventsRequest): Promise<$_model.LookupResourceGroupEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lookupResourceGroupEventsWithOptions(request, runtime);
  }

  /**
   * 移动账号
   * 
   * @param request - MoveAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveAccountResponse
   */
  async moveAccountWithOptions(request: $_model.MoveAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.destinationFolderId)) {
      query["DestinationFolderId"] = request.destinationFolderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveAccountResponse>(await this.callApi(params, req, runtime), new $_model.MoveAccountResponse({}));
  }

  /**
   * 移动账号
   * 
   * @param request - MoveAccountRequest
   * @returns MoveAccountResponse
   */
  async moveAccount(request: $_model.MoveAccountRequest): Promise<$_model.MoveAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveAccountWithOptions(request, runtime);
  }

  /**
   * Moves resources from one resource group to another. You can move multiple resources that reside in different regions, are used by different Alibaba Cloud services, or belong to different resource groups.
   * 
   * @remarks
   * For more information about Alibaba Cloud services whose resources can be moved between resource groups, see the **Supported by the API** column in [Alibaba Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * In this example, two virtual private clouds (VPCs) `vpc-bp1sig0mjktx5ewx1****` and `vpc-bp1visxm225pv49dz****` that reside in different regions and belong to different resource groups are moved to the resource group `rg-aekzmeobk5w****`.
   * 
   * @param request - MoveResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourcesResponse
   */
  async moveResourcesWithOptions(request: $_model.MoveResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResources",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveResourcesResponse>(await this.callApi(params, req, runtime), new $_model.MoveResourcesResponse({}));
  }

  /**
   * Moves resources from one resource group to another. You can move multiple resources that reside in different regions, are used by different Alibaba Cloud services, or belong to different resource groups.
   * 
   * @remarks
   * For more information about Alibaba Cloud services whose resources can be moved between resource groups, see the **Supported by the API** column in [Alibaba Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * In this example, two virtual private clouds (VPCs) `vpc-bp1sig0mjktx5ewx1****` and `vpc-bp1visxm225pv49dz****` that reside in different regions and belong to different resource groups are moved to the resource group `rg-aekzmeobk5w****`.
   * 
   * @param request - MoveResourcesRequest
   * @returns MoveResourcesResponse
   */
  async moveResources(request: $_model.MoveResourcesRequest): Promise<$_model.MoveResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourcesWithOptions(request, runtime);
  }

  /**
   * 升级资源账号
   * 
   * @param request - PromoteResourceAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PromoteResourceAccountResponse
   */
  async promoteResourceAccountWithOptions(request: $_model.PromoteResourceAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PromoteResourceAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PromoteResourceAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PromoteResourceAccountResponse>(await this.callApi(params, req, runtime), new $_model.PromoteResourceAccountResponse({}));
  }

  /**
   * 升级资源账号
   * 
   * @param request - PromoteResourceAccountRequest
   * @returns PromoteResourceAccountResponse
   */
  async promoteResourceAccount(request: $_model.PromoteResourceAccountRequest): Promise<$_model.PromoteResourceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.promoteResourceAccountWithOptions(request, runtime);
  }

  /**
   * @remarks
   * The delegated administrator account can be used to access the information of the resource directory and view the structure and members of the resource directory. The delegated administrator account can also be used to perform service-related management operations in the trusted service on behalf of the management account of the resource directory.
   * When you call this operation, you must take note of the following limits:
   * *   Only some trusted services support delegated administrator accounts. For more information, see [Supported trusted services](https://help.aliyun.com/document_detail/208133.html).
   * *   Only the management account of a resource directory or an authorized RAM user or RAM role of the management account can be used to call this operation.
   * *   The number of delegated administrator accounts that are allowed for a trusted service is defined by the trusted service.
   * This topic provides an example on how to call the API operation to specify the member `181761095690****` as a delegated administrator account of Cloud Firewall.
   * 
   * @param request - RegisterDelegatedAdministratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterDelegatedAdministratorResponse
   */
  async registerDelegatedAdministratorWithOptions(request: $_model.RegisterDelegatedAdministratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterDelegatedAdministratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.servicePrincipal)) {
      query["ServicePrincipal"] = request.servicePrincipal;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterDelegatedAdministrator",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterDelegatedAdministratorResponse>(await this.callApi(params, req, runtime), new $_model.RegisterDelegatedAdministratorResponse({}));
  }

  /**
   * @remarks
   * The delegated administrator account can be used to access the information of the resource directory and view the structure and members of the resource directory. The delegated administrator account can also be used to perform service-related management operations in the trusted service on behalf of the management account of the resource directory.
   * When you call this operation, you must take note of the following limits:
   * *   Only some trusted services support delegated administrator accounts. For more information, see [Supported trusted services](https://help.aliyun.com/document_detail/208133.html).
   * *   Only the management account of a resource directory or an authorized RAM user or RAM role of the management account can be used to call this operation.
   * *   The number of delegated administrator accounts that are allowed for a trusted service is defined by the trusted service.
   * This topic provides an example on how to call the API operation to specify the member `181761095690****` as a delegated administrator account of Cloud Firewall.
   * 
   * @param request - RegisterDelegatedAdministratorRequest
   * @returns RegisterDelegatedAdministratorResponse
   */
  async registerDelegatedAdministrator(request: $_model.RegisterDelegatedAdministratorRequest): Promise<$_model.RegisterDelegatedAdministratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerDelegatedAdministratorWithOptions(request, runtime);
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to remove the member `177242285274****` from a resource directory.
   * 
   * @param request - RemoveCloudAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveCloudAccountResponse
   */
  async removeCloudAccountWithOptions(request: $_model.RemoveCloudAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveCloudAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveCloudAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveCloudAccountResponse>(await this.callApi(params, req, runtime), new $_model.RemoveCloudAccountResponse({}));
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to remove the member `177242285274****` from a resource directory.
   * 
   * @param request - RemoveCloudAccountRequest
   * @returns RemoveCloudAccountResponse
   */
  async removeCloudAccount(request: $_model.RemoveCloudAccountRequest): Promise<$_model.RemoveCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeCloudAccountWithOptions(request, runtime);
  }

  /**
   * 重新发送创建云账号的邮箱验证
   * 
   * @param request - ResendCreateCloudAccountEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResendCreateCloudAccountEmailResponse
   */
  async resendCreateCloudAccountEmailWithOptions(request: $_model.ResendCreateCloudAccountEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResendCreateCloudAccountEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResendCreateCloudAccountEmail",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResendCreateCloudAccountEmailResponse>(await this.callApi(params, req, runtime), new $_model.ResendCreateCloudAccountEmailResponse({}));
  }

  /**
   * 重新发送创建云账号的邮箱验证
   * 
   * @param request - ResendCreateCloudAccountEmailRequest
   * @returns ResendCreateCloudAccountEmailResponse
   */
  async resendCreateCloudAccountEmail(request: $_model.ResendCreateCloudAccountEmailRequest): Promise<$_model.ResendCreateCloudAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resendCreateCloudAccountEmailWithOptions(request, runtime);
  }

  /**
   * 重新发送升级资源账号的邮箱验证
   * 
   * @param request - ResendPromoteResourceAccountEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResendPromoteResourceAccountEmailResponse
   */
  async resendPromoteResourceAccountEmailWithOptions(request: $_model.ResendPromoteResourceAccountEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResendPromoteResourceAccountEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResendPromoteResourceAccountEmail",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResendPromoteResourceAccountEmailResponse>(await this.callApi(params, req, runtime), new $_model.ResendPromoteResourceAccountEmailResponse({}));
  }

  /**
   * 重新发送升级资源账号的邮箱验证
   * 
   * @param request - ResendPromoteResourceAccountEmailRequest
   * @returns ResendPromoteResourceAccountEmailResponse
   */
  async resendPromoteResourceAccountEmail(request: $_model.ResendPromoteResourceAccountEmailRequest): Promise<$_model.ResendPromoteResourceAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resendPromoteResourceAccountEmailWithOptions(request, runtime);
  }

  /**
   * 重新发送确认邮件
   * 
   * @param request - RetryChangeAccountEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryChangeAccountEmailResponse
   */
  async retryChangeAccountEmailWithOptions(request: $_model.RetryChangeAccountEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryChangeAccountEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryChangeAccountEmail",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryChangeAccountEmailResponse>(await this.callApi(params, req, runtime), new $_model.RetryChangeAccountEmailResponse({}));
  }

  /**
   * 重新发送确认邮件
   * 
   * @param request - RetryChangeAccountEmailRequest
   * @returns RetryChangeAccountEmailResponse
   */
  async retryChangeAccountEmail(request: $_model.RetryChangeAccountEmailRequest): Promise<$_model.RetryChangeAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryChangeAccountEmailWithOptions(request, runtime);
  }

  /**
   * 发送绑定安全手机验证码
   * 
   * @remarks
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this operation.
   * In this example, a verification code is sent to the mobile phone number that you want to bind to the resource account `138660628348****`.
   * 
   * @param request - SendVerificationCodeForBindSecureMobilePhoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendVerificationCodeForBindSecureMobilePhoneResponse
   */
  async sendVerificationCodeForBindSecureMobilePhoneWithOptions(request: $_model.SendVerificationCodeForBindSecureMobilePhoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendVerificationCodeForBindSecureMobilePhoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.secureMobilePhone)) {
      query["SecureMobilePhone"] = request.secureMobilePhone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendVerificationCodeForBindSecureMobilePhone",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendVerificationCodeForBindSecureMobilePhoneResponse>(await this.callApi(params, req, runtime), new $_model.SendVerificationCodeForBindSecureMobilePhoneResponse({}));
  }

  /**
   * 发送绑定安全手机验证码
   * 
   * @remarks
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this operation.
   * In this example, a verification code is sent to the mobile phone number that you want to bind to the resource account `138660628348****`.
   * 
   * @param request - SendVerificationCodeForBindSecureMobilePhoneRequest
   * @returns SendVerificationCodeForBindSecureMobilePhoneResponse
   */
  async sendVerificationCodeForBindSecureMobilePhone(request: $_model.SendVerificationCodeForBindSecureMobilePhoneRequest): Promise<$_model.SendVerificationCodeForBindSecureMobilePhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendVerificationCodeForBindSecureMobilePhoneWithOptions(request, runtime);
  }

  /**
   * 发送开启资源目录短信
   * 
   * @remarks
   * Each Alibaba Cloud account can be used to send a maximum of 100 verification codes per day.
   * 
   * @param request - SendVerificationCodeForEnableRDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendVerificationCodeForEnableRDResponse
   */
  async sendVerificationCodeForEnableRDWithOptions(request: $_model.SendVerificationCodeForEnableRDRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendVerificationCodeForEnableRDResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.secureMobilePhone)) {
      query["SecureMobilePhone"] = request.secureMobilePhone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendVerificationCodeForEnableRD",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendVerificationCodeForEnableRDResponse>(await this.callApi(params, req, runtime), new $_model.SendVerificationCodeForEnableRDResponse({}));
  }

  /**
   * 发送开启资源目录短信
   * 
   * @remarks
   * Each Alibaba Cloud account can be used to send a maximum of 100 verification codes per day.
   * 
   * @param request - SendVerificationCodeForEnableRDRequest
   * @returns SendVerificationCodeForEnableRDResponse
   */
  async sendVerificationCodeForEnableRD(request: $_model.SendVerificationCodeForEnableRDRequest): Promise<$_model.SendVerificationCodeForEnableRDResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendVerificationCodeForEnableRDWithOptions(request, runtime);
  }

  /**
   * Sets a default version for a permission policy.
   * 
   * @param request - SetDefaultPolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultPolicyVersionResponse
   */
  async setDefaultPolicyVersionWithOptions(request: $_model.SetDefaultPolicyVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultPolicyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultPolicyVersion",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultPolicyVersionResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultPolicyVersionResponse({}));
  }

  /**
   * Sets a default version for a permission policy.
   * 
   * @param request - SetDefaultPolicyVersionRequest
   * @returns SetDefaultPolicyVersionResponse
   */
  async setDefaultPolicyVersion(request: $_model.SetDefaultPolicyVersionRequest): Promise<$_model.SetDefaultPolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultPolicyVersionWithOptions(request, runtime);
  }

  /**
   * 开启或关闭成员删除许可
   * 
   * @remarks
   * Members of the resource account type can be deleted only after the member deletion feature is enabled.
   * 
   * @param request - SetMemberDeletionPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetMemberDeletionPermissionResponse
   */
  async setMemberDeletionPermissionWithOptions(request: $_model.SetMemberDeletionPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetMemberDeletionPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetMemberDeletionPermission",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetMemberDeletionPermissionResponse>(await this.callApi(params, req, runtime), new $_model.SetMemberDeletionPermissionResponse({}));
  }

  /**
   * 开启或关闭成员删除许可
   * 
   * @remarks
   * Members of the resource account type can be deleted only after the member deletion feature is enabled.
   * 
   * @param request - SetMemberDeletionPermissionRequest
   * @returns SetMemberDeletionPermissionResponse
   */
  async setMemberDeletionPermission(request: $_model.SetMemberDeletionPermissionRequest): Promise<$_model.SetMemberDeletionPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setMemberDeletionPermissionWithOptions(request, runtime);
  }

  /**
   * Adds tags to resource groups or the members in a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to add the tag `k1:v1` to the resource group with an ID of `rg-aekz6bre2uq****`.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
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
      version: "2020-03-31",
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
   * Adds tags to resource groups or the members in a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to add the tag `k1:v1` to the resource group with an ID of `rg-aekz6bre2uq****`.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from resource groups or the members in a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to remove the tag whose tag key is `k1` from the resource group whose ID is `rg-aek2dpwyrfr****`.
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
      version: "2020-03-31",
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
   * Removes tags from resource groups or the members in a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to remove the tag whose tag key is `k1` from the resource group whose ID is `rg-aek2dpwyrfr****`.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * @remarks
   *   To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this operation.
   * *   Before you switch the type of a member from resource account to cloud account, make sure that specific conditions are met. For more information about the conditions, see [Switch a resource account to a cloud account](https://help.aliyun.com/document_detail/111233.html).
   * *   Before you switch the type of a member from cloud account to resource account, make sure that specific conditions are met. For more information about the conditions, see [Switch a cloud account to a resource account](https://help.aliyun.com/document_detail/209980.html).
   * This example provides an example on how to call the API operation to change the display name of the member `12323344****` to `admin`.
   * 
   * @param request - UpdateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccountResponse
   */
  async updateAccountWithOptions(request: $_model.UpdateAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.newAccountType)) {
      query["NewAccountType"] = request.newAccountType;
    }

    if (!$dara.isNull(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAccountResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAccountResponse({}));
  }

  /**
   * @remarks
   *   To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this operation.
   * *   Before you switch the type of a member from resource account to cloud account, make sure that specific conditions are met. For more information about the conditions, see [Switch a resource account to a cloud account](https://help.aliyun.com/document_detail/111233.html).
   * *   Before you switch the type of a member from cloud account to resource account, make sure that specific conditions are met. For more information about the conditions, see [Switch a cloud account to a resource account](https://help.aliyun.com/document_detail/209980.html).
   * This example provides an example on how to call the API operation to change the display name of the member `12323344****` to `admin`.
   * 
   * @param request - UpdateAccountRequest
   * @returns UpdateAccountResponse
   */
  async updateAccount(request: $_model.UpdateAccountRequest): Promise<$_model.UpdateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAccountWithOptions(request, runtime);
  }

  /**
   * Updates the settings of the Transfer Associated Resources feature.
   * 
   * @remarks
   * For information about the resources that support the Transfer Associated Resources feature, see [Use the Transfer Associated Resources feature](https://help.aliyun.com/document_detail/606232.html).
   * 
   * @param request - UpdateAssociatedTransferSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAssociatedTransferSettingResponse
   */
  async updateAssociatedTransferSettingWithOptions(request: $_model.UpdateAssociatedTransferSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAssociatedTransferSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableExistingResourcesTransfer)) {
      query["EnableExistingResourcesTransfer"] = request.enableExistingResourcesTransfer;
    }

    if (!$dara.isNull(request.ruleSettings)) {
      query["RuleSettings"] = request.ruleSettings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAssociatedTransferSetting",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAssociatedTransferSettingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAssociatedTransferSettingResponse({}));
  }

  /**
   * Updates the settings of the Transfer Associated Resources feature.
   * 
   * @remarks
   * For information about the resources that support the Transfer Associated Resources feature, see [Use the Transfer Associated Resources feature](https://help.aliyun.com/document_detail/606232.html).
   * 
   * @param request - UpdateAssociatedTransferSettingRequest
   * @returns UpdateAssociatedTransferSettingResponse
   */
  async updateAssociatedTransferSetting(request: $_model.UpdateAssociatedTransferSettingRequest): Promise<$_model.UpdateAssociatedTransferSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAssociatedTransferSettingWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of the Automatic Resource Transfer feature. You can update only the configuration of the Transfer Existing Associated Resources feature.
   * 
   * @param request - UpdateAutoGroupingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAutoGroupingConfigResponse
   */
  async updateAutoGroupingConfigWithOptions(request: $_model.UpdateAutoGroupingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAutoGroupingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableExistingResourcesTransfer)) {
      query["EnableExistingResourcesTransfer"] = request.enableExistingResourcesTransfer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAutoGroupingConfig",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAutoGroupingConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAutoGroupingConfigResponse({}));
  }

  /**
   * Updates the configuration of the Automatic Resource Transfer feature. You can update only the configuration of the Transfer Existing Associated Resources feature.
   * 
   * @param request - UpdateAutoGroupingConfigRequest
   * @returns UpdateAutoGroupingConfigResponse
   */
  async updateAutoGroupingConfig(request: $_model.UpdateAutoGroupingConfigRequest): Promise<$_model.UpdateAutoGroupingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutoGroupingConfigWithOptions(request, runtime);
  }

  /**
   * Updates a transfer rule.
   * 
   * @param request - UpdateAutoGroupingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAutoGroupingRuleResponse
   */
  async updateAutoGroupingRuleWithOptions(request: $_model.UpdateAutoGroupingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAutoGroupingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      query["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      query["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      query["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceTypesScope)) {
      query["ExcludeResourceTypesScope"] = request.excludeResourceTypesScope;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      query["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      query["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      query["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.resourceTypesScope)) {
      query["ResourceTypesScope"] = request.resourceTypesScope;
    }

    if (!$dara.isNull(request.ruleContents)) {
      query["RuleContents"] = request.ruleContents;
    }

    if (!$dara.isNull(request.ruleDesc)) {
      query["RuleDesc"] = request.ruleDesc;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAutoGroupingRule",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAutoGroupingRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAutoGroupingRuleResponse({}));
  }

  /**
   * Updates a transfer rule.
   * 
   * @param request - UpdateAutoGroupingRuleRequest
   * @returns UpdateAutoGroupingRuleResponse
   */
  async updateAutoGroupingRule(request: $_model.UpdateAutoGroupingRuleRequest): Promise<$_model.UpdateAutoGroupingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutoGroupingRuleWithOptions(request, runtime);
  }

  /**
   * @remarks
   * In this example, the name of the access control policy whose ID is `cp-jExXAqIYkwHN****` is changed to `NewControlPolicy`.
   * 
   * @param request - UpdateControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateControlPolicyResponse
   */
  async updateControlPolicyWithOptions(request: $_model.UpdateControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!$dara.isNull(request.newPolicyDocument)) {
      query["NewPolicyDocument"] = request.newPolicyDocument;
    }

    if (!$dara.isNull(request.newPolicyName)) {
      query["NewPolicyName"] = request.newPolicyName;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateControlPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateControlPolicyResponse({}));
  }

  /**
   * @remarks
   * In this example, the name of the access control policy whose ID is `cp-jExXAqIYkwHN****` is changed to `NewControlPolicy`.
   * 
   * @param request - UpdateControlPolicyRequest
   * @returns UpdateControlPolicyResponse
   */
  async updateControlPolicy(request: $_model.UpdateControlPolicyRequest): Promise<$_model.UpdateControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateControlPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFolderResponse
   */
  async updateFolderWithOptions(request: $_model.UpdateFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFolderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.newFolderName)) {
      query["NewFolderName"] = request.newFolderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFolder",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFolderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFolderResponse({}));
  }

  /**
   * @param request - UpdateFolderRequest
   * @returns UpdateFolderResponse
   */
  async updateFolder(request: $_model.UpdateFolderRequest): Promise<$_model.UpdateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

  /**
   * @remarks
   * In this example, the display name of the resource group `rg-9gLOoK****` is changed to `project`.
   * 
   * @param request - UpdateResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceGroupResponse
   */
  async updateResourceGroupWithOptions(request: $_model.UpdateResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceGroup",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceGroupResponse({}));
  }

  /**
   * @remarks
   * In this example, the display name of the resource group `rg-9gLOoK****` is changed to `project`.
   * 
   * @param request - UpdateResourceGroupRequest
   * @returns UpdateResourceGroupResponse
   */
  async updateResourceGroup(request: $_model.UpdateResourceGroupRequest): Promise<$_model.UpdateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResourceGroupWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of a resource group administrator.
   * 
   * @param request - UpdateResourceGroupAdminSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceGroupAdminSettingResponse
   */
  async updateResourceGroupAdminSettingWithOptions(request: $_model.UpdateResourceGroupAdminSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceGroupAdminSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.creatorAsAdmin)) {
      query["CreatorAsAdmin"] = request.creatorAsAdmin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceGroupAdminSetting",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceGroupAdminSettingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceGroupAdminSettingResponse({}));
  }

  /**
   * Updates the configurations of a resource group administrator.
   * 
   * @param request - UpdateResourceGroupAdminSettingRequest
   * @returns UpdateResourceGroupAdminSettingResponse
   */
  async updateResourceGroupAdminSetting(request: $_model.UpdateResourceGroupAdminSettingRequest): Promise<$_model.UpdateResourceGroupAdminSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResourceGroupAdminSettingWithOptions(request, runtime);
  }

  /**
   * Updates the information about a Resource Access Management (RAM) role.
   * 
   * @remarks
   * In this example, the description of the RAM role `ECSAdmin` is updated to `ECS administrator`.
   * 
   * @param request - UpdateRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRoleResponse
   */
  async updateRoleWithOptions(request: $_model.UpdateRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newAssumeRolePolicyDocument)) {
      query["NewAssumeRolePolicyDocument"] = request.newAssumeRolePolicyDocument;
    }

    if (!$dara.isNull(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!$dara.isNull(request.newMaxSessionDuration)) {
      query["NewMaxSessionDuration"] = request.newMaxSessionDuration;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRole",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRoleResponse({}));
  }

  /**
   * Updates the information about a Resource Access Management (RAM) role.
   * 
   * @remarks
   * In this example, the description of the RAM role `ECSAdmin` is updated to `ECS administrator`.
   * 
   * @param request - UpdateRoleRequest
   * @returns UpdateRoleResponse
   */
  async updateRole(request: $_model.UpdateRoleRequest): Promise<$_model.UpdateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRoleWithOptions(request, runtime);
  }

}
