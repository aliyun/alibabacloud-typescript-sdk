// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "ResourceManager";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
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
   * Accepts an invitation for an invited Alibaba Cloud account.
   * 
   * @remarks
   * After an invited Alibaba Cloud account successfully joins a resource directory, it becomes a member of the resource directory. By default, the resource directory uses the name of the invited Alibaba Cloud account as the member name and account name of the member. This topic provides an example where the invited Alibaba Cloud account `177242285274****` accepts an invitation from the resource directory `rd-3G****`. The invitation ID is `h-Ih8IuPfvV0t0****`.
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
   * Accepts an invitation for an invited Alibaba Cloud account.
   * 
   * @remarks
   * After an invited Alibaba Cloud account successfully joins a resource directory, it becomes a member of the resource directory. By default, the resource directory uses the name of the invited Alibaba Cloud account as the member name and account name of the member. This topic provides an example where the invited Alibaba Cloud account `177242285274****` accepts an invitation from the resource directory `rd-3G****`. The invitation ID is `h-Ih8IuPfvV0t0****`.
   * 
   * @param request - AcceptHandshakeRequest
   * @returns AcceptHandshakeResponse
   */
  async acceptHandshake(request: $_model.AcceptHandshakeRequest): Promise<$_model.AcceptHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptHandshakeWithOptions(request, runtime);
  }

  /**
   * Attaches a control policy.
   * 
   * @remarks
   * After a control policy is attached, the folder or member is immediately governed by the control policy. Make sure that the attach operation produces the expected results to avoid disrupting your business.
   * By default, the system attaches the system policy FullAliyunAccess to folders and members.
   * A control policy takes effect on all nodes under the node to which it is attached. For example, a control policy attached to a parent folder also takes effect on its child folders and members.
   * You can attach a maximum of 10 control policies to each node (folder or member).
   * This topic provides an example on how to attach the custom policy `cp-jExXAqIYkwHN****` to the folder `fd-ZDNPiT****`.
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
   * Attaches a control policy.
   * 
   * @remarks
   * After a control policy is attached, the folder or member is immediately governed by the control policy. Make sure that the attach operation produces the expected results to avoid disrupting your business.
   * By default, the system attaches the system policy FullAliyunAccess to folders and members.
   * A control policy takes effect on all nodes under the node to which it is attached. For example, a control policy attached to a parent folder also takes effect on its child folders and members.
   * You can attach a maximum of 10 control policies to each node (folder or member).
   * This topic provides an example on how to attach the custom policy `cp-jExXAqIYkwHN****` to the folder `fd-ZDNPiT****`.
   * 
   * @param request - AttachControlPolicyRequest
   * @returns AttachControlPolicyResponse
   */
  async attachControlPolicy(request: $_model.AttachControlPolicyRequest): Promise<$_model.AttachControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachControlPolicyWithOptions(request, runtime);
  }

  /**
   * Invokes AttachPolicy to add an access policy to a principal (a Resource Access Management (RAM) user, RAM user group, or RAM role) for authorization. After the authorization is complete, the principal obtains access permissions to resources in the specified resource group or Alibaba Cloud account.
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
   * Invokes AttachPolicy to add an access policy to a principal (a Resource Access Management (RAM) user, RAM user group, or RAM role) for authorization. After the authorization is complete, the principal obtains access permissions to resources in the specified resource group or Alibaba Cloud account.
   * 
   * @param request - AttachPolicyRequest
   * @returns AttachPolicyResponse
   */
  async attachPolicy(request: $_model.AttachPolicyRequest): Promise<$_model.AttachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachPolicyWithOptions(request, runtime);
  }

  /**
   * Invokes BindSecureMobilePhone to configure the secure phone number Settings for a member of the resource account type.
   * 
   * @remarks
   * This API operation is used only to set the secure secure phone number for a resource account for the first time. You cannot use this operation to modify an existing secure secure phone number.
   * To ensure that the system can record the specific operator of management operations, call this API operation as a Resource Access Management (RAM) user or RAM role that has the AliyunResourceDirectoryFullAccess permission under the management account.
   * This topic provides an example on how to set the secure secure phone number for the member `138660628348****`.
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
   * Invokes BindSecureMobilePhone to configure the secure phone number Settings for a member of the resource account type.
   * 
   * @remarks
   * This API operation is used only to set the secure secure phone number for a resource account for the first time. You cannot use this operation to modify an existing secure secure phone number.
   * To ensure that the system can record the specific operator of management operations, call this API operation as a Resource Access Management (RAM) user or RAM role that has the AliyunResourceDirectoryFullAccess permission under the management account.
   * This topic provides an example on how to set the secure secure phone number for the member `138660628348****`.
   * 
   * @param request - BindSecureMobilePhoneRequest
   * @returns BindSecureMobilePhoneResponse
   */
  async bindSecureMobilePhone(request: $_model.BindSecureMobilePhoneRequest): Promise<$_model.BindSecureMobilePhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindSecureMobilePhoneWithOptions(request, runtime);
  }

  /**
   * Cancels the modification of a member email address.
   * 
   * @remarks
   * 调用前，目标成员需存在待验证的邮箱修改记录，否则返回 404 EntityNotExists.EmailModifyRecord。邮箱修改记录可通过 ChangeAccountEmail 发起。
   * 目标成员处于删除中状态时，相关操作会返回 409 NotSupportedOperation.DeletingAccount，请等待删除流程结束或先取消删除。
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
   * Cancels the modification of a member email address.
   * 
   * @remarks
   * 调用前，目标成员需存在待验证的邮箱修改记录，否则返回 404 EntityNotExists.EmailModifyRecord。邮箱修改记录可通过 ChangeAccountEmail 发起。
   * 目标成员处于删除中状态时，相关操作会返回 409 NotSupportedOperation.DeletingAccount，请等待删除流程结束或先取消删除。
   * 
   * @param request - CancelChangeAccountEmailRequest
   * @returns CancelChangeAccountEmailResponse
   */
  async cancelChangeAccountEmail(request: $_model.CancelChangeAccountEmailRequest): Promise<$_model.CancelChangeAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelChangeAccountEmailWithOptions(request, runtime);
  }

  /**
   * Cancels the creation of a cloud account member in a resource directory.
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
   * Cancels the creation of a cloud account member in a resource directory.
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
   * This topic provides an example of canceling an invitation with the ID `h-ycm4rp****`.
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
   * This topic provides an example of canceling an invitation with the ID `h-ycm4rp****`.
   * 
   * @param request - CancelHandshakeRequest
   * @returns CancelHandshakeResponse
   */
  async cancelHandshake(request: $_model.CancelHandshakeRequest): Promise<$_model.CancelHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelHandshakeWithOptions(request, runtime);
  }

  /**
   * Cancels the upgrade of a resource account to a cloud account.
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
   * Cancels the upgrade of a resource account to a cloud account.
   * 
   * @param request - CancelPromoteResourceAccountRequest
   * @returns CancelPromoteResourceAccountResponse
   */
  async cancelPromoteResourceAccount(request: $_model.CancelPromoteResourceAccountRequest): Promise<$_model.CancelPromoteResourceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelPromoteResourceAccountWithOptions(request, runtime);
  }

  /**
   * Modifies the email address of a member.
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
   * Modifies the email address of a member.
   * 
   * @param request - ChangeAccountEmailRequest
   * @returns ChangeAccountEmailResponse
   */
  async changeAccountEmail(request: $_model.ChangeAccountEmailRequest): Promise<$_model.ChangeAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeAccountEmailWithOptions(request, runtime);
  }

  /**
   * Executes a member deletion check task.
   * 
   * @remarks
   * Before you delete a member, call this API to check the deletion conditions for the target member.
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
   * Executes a member deletion check task.
   * 
   * @remarks
   * Before you delete a member, call this API to check the deletion conditions for the target member.
   * 
   * @param request - CheckAccountDeleteRequest
   * @returns CheckAccountDeleteResponse
   */
  async checkAccountDelete(request: $_model.CheckAccountDeleteRequest): Promise<$_model.CheckAccountDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAccountDeleteWithOptions(request, runtime);
  }

  /**
   * Creates an automatic allocation rule by calling CreateAutoGroupingRule. Two types are supported: custom allocation rules and attached-resource allocation rules.
   * 
   * @remarks
   * You can create up to 10 custom allocation rules, and each custom allocation rule supports up to 10 rule content entries.
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
   * Creates an automatic allocation rule by calling CreateAutoGroupingRule. Two types are supported: custom allocation rules and attached-resource allocation rules.
   * 
   * @remarks
   * You can create up to 10 custom allocation rules, and each custom allocation rule supports up to 10 rule content entries.
   * 
   * @param request - CreateAutoGroupingRuleRequest
   * @returns CreateAutoGroupingRuleResponse
   */
  async createAutoGroupingRule(request: $_model.CreateAutoGroupingRuleRequest): Promise<$_model.CreateAutoGroupingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAutoGroupingRuleWithOptions(request, runtime);
  }

  /**
   * Creates a member of the cloud account type in a resource directory.
   * 
   * @remarks
   * A resource directory contains two types of members: resource accounts and cloud accounts. 
   * - Resource account (recommended): A resource account serves only as a resource container and fully depends on the resource directory. It is a more secure account type that is easier to create. To create a resource account type member, see [CreateResourceAccount](https://help.aliyun.com/document_detail/159392.html). 
   * > A resource account can also be upgraded to a cloud account. For more information, see [PromoteResourceAccount](https://help.aliyun.com/document_detail/159395.html).
   * - Cloud account: A cloud account has all the features of an Alibaba Cloud account, including root logon access.
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
   * Creates a member of the cloud account type in a resource directory.
   * 
   * @remarks
   * A resource directory contains two types of members: resource accounts and cloud accounts. 
   * - Resource account (recommended): A resource account serves only as a resource container and fully depends on the resource directory. It is a more secure account type that is easier to create. To create a resource account type member, see [CreateResourceAccount](https://help.aliyun.com/document_detail/159392.html). 
   * > A resource account can also be upgraded to a cloud account. For more information, see [PromoteResourceAccount](https://help.aliyun.com/document_detail/159395.html).
   * - Cloud account: A cloud account has all the features of an Alibaba Cloud account, including root logon access.
   * 
   * @param request - CreateCloudAccountRequest
   * @returns CreateCloudAccountResponse
   */
  async createCloudAccount(request: $_model.CreateCloudAccountRequest): Promise<$_model.CreateCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudAccountWithOptions(request, runtime);
  }

  /**
   * Calls CreateControlPolicy to create a custom control policy.
   * 
   * @remarks
   * This topic provides an example on how to create a control policy named `ExampleControlPolicy` that prohibits modifications to the ResourceDirectoryAccountAccessRole role and its permissions.
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
   * Calls CreateControlPolicy to create a custom control policy.
   * 
   * @remarks
   * This topic provides an example on how to create a control policy named `ExampleControlPolicy` that prohibits modifications to the ResourceDirectoryAccountAccessRole role and its permissions.
   * 
   * @param request - CreateControlPolicyRequest
   * @returns CreateControlPolicyResponse
   */
  async createControlPolicy(request: $_model.CreateControlPolicyRequest): Promise<$_model.CreateControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createControlPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a resource folder by calling CreateFolder.
   * 
   * @remarks
   * > You can create a maximum of five levels of resource folders.
   * This topic provides an example of how to create a resource folder named `rdFolder` under the Root folder.
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
   * Creates a resource folder by calling CreateFolder.
   * 
   * @remarks
   * > You can create a maximum of five levels of resource folders.
   * This topic provides an example of how to create a resource folder named `rdFolder` under the Root folder.
   * 
   * @param request - CreateFolderRequest
   * @returns CreateFolderResponse
   */
  async createFolder(request: $_model.CreateFolderRequest): Promise<$_model.CreateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  /**
   * Creates an access policy.
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
   * Creates an access policy.
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: $_model.CreatePolicyRequest): Promise<$_model.CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a version of an access policy by calling CreatePolicyVersion.
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
   * Creates a version of an access policy by calling CreatePolicyVersion.
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
   * In a resource directory, a member serves as a resource container and a resource grouping unit. Members typically represent projects or applications. Resources in each member are physically isolated from resources in other members.
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
   * In a resource directory, a member serves as a resource container and a resource grouping unit. Members typically represent projects or applications. Resources in each member are physically isolated from resources in other members.
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
   * > You can create a maximum of 30 resource groups under an Alibaba Cloud account.
   * 
   * @param request - CreateResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroupWithOptions(request: $_model.CreateResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
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
   * > You can create a maximum of 30 resource groups under an Alibaba Cloud account.
   * 
   * @param request - CreateResourceGroupRequest
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroup(request: $_model.CreateResourceGroupRequest): Promise<$_model.CreateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a role by calling CreateRole.
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
   * Creates a role by calling CreateRole.
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
   * Declines a handshake invitation by the invited Alibaba Cloud account.
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
   * Declines a handshake invitation by the invited Alibaba Cloud account.
   * 
   * @param request - DeclineHandshakeRequest
   * @returns DeclineHandshakeResponse
   */
  async declineHandshake(request: $_model.DeclineHandshakeRequest): Promise<$_model.DeclineHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.declineHandshakeWithOptions(request, runtime);
  }

  /**
   * Deletes a member of the resource account type.
   * 
   * @remarks
   * Before you delete a member, call [CheckAccountDelete](https://help.aliyun.com/document_detail/448542.html) and [GetAccountDeletionCheckResult](https://help.aliyun.com/document_detail/448775.html) to check the deletion conditions for the member. You can successfully delete a member by calling DeleteAccount only if the member meets the deletion conditions.
   * After you successfully submit a member deletion request, you can call [GetAccountDeletionStatus](https://help.aliyun.com/document_detail/449001.html) to query the deletion status. Once a member is deleted, all resources and data in the member are deleted. You cannot log on to or use the member again, and the data cannot be recovered. Proceed with caution. For more information about member deletion, see [Delete a member of the resource account type](https://help.aliyun.com/document_detail/446078.html).
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
   * Deletes a member of the resource account type.
   * 
   * @remarks
   * Before you delete a member, call [CheckAccountDelete](https://help.aliyun.com/document_detail/448542.html) and [GetAccountDeletionCheckResult](https://help.aliyun.com/document_detail/448775.html) to check the deletion conditions for the member. You can successfully delete a member by calling DeleteAccount only if the member meets the deletion conditions.
   * After you successfully submit a member deletion request, you can call [GetAccountDeletionStatus](https://help.aliyun.com/document_detail/449001.html) to query the deletion status. Once a member is deleted, all resources and data in the member are deleted. You cannot log on to or use the member again, and the data cannot be recovered. Proceed with caution. For more information about member deletion, see [Delete a member of the resource account type](https://help.aliyun.com/document_detail/446078.html).
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Deletes an auto-grouping rule.
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
   * Deletes an auto-grouping rule.
   * 
   * @param request - DeleteAutoGroupingRuleRequest
   * @returns DeleteAutoGroupingRuleResponse
   */
  async deleteAutoGroupingRule(request: $_model.DeleteAutoGroupingRuleRequest): Promise<$_model.DeleteAutoGroupingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoGroupingRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a custom control policy.
   * 
   * @remarks
   * If a custom control policy is attached to resource folders or member accounts, you must invoke [DetachControlPolicy](https://help.aliyun.com/document_detail/208331.html) to detach it before you can delete it.
   * This topic provides an example of deleting the custom control policy `cp-SImPt8GCEwiq****`.
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
   * Deletes a custom control policy.
   * 
   * @remarks
   * If a custom control policy is attached to resource folders or member accounts, you must invoke [DetachControlPolicy](https://help.aliyun.com/document_detail/208331.html) to detach it before you can delete it.
   * This topic provides an example of deleting the custom control policy `cp-SImPt8GCEwiq****`.
   * 
   * @param request - DeleteControlPolicyRequest
   * @returns DeleteControlPolicyResponse
   */
  async deleteControlPolicy(request: $_model.DeleteControlPolicyRequest): Promise<$_model.DeleteControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteControlPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a folder.
   * 
   * @remarks
   * > Before deleting a folder, ensure that the folder contains no members or subfolders.
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
   * Deletes a folder.
   * 
   * @remarks
   * > Before deleting a folder, ensure that the folder contains no members or subfolders.
   * 
   * @param request - DeleteFolderRequest
   * @returns DeleteFolderResponse
   */
  async deleteFolder(request: $_model.DeleteFolderRequest): Promise<$_model.DeleteFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  /**
   * Deletes a specified access policy.
   * 
   * @remarks
   * > - Before deleting an access policy, you must delete all non-default versions of the policy. For more information about how to delete an access policy version, see [DeletePolicyVersion](https://help.aliyun.com/document_detail/159041.html).
   * > - Before deleting an access policy, ensure that the policy is not referenced (that is, not granted to Resource Access Management (RAM) users, user groups, or RAM roles). For more information about how to remove authorization, see [DetachPolicy](https://help.aliyun.com/document_detail/159168.html).
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
   * Deletes a specified access policy.
   * 
   * @remarks
   * > - Before deleting an access policy, you must delete all non-default versions of the policy. For more information about how to delete an access policy version, see [DeletePolicyVersion](https://help.aliyun.com/document_detail/159041.html).
   * > - Before deleting an access policy, ensure that the policy is not referenced (that is, not granted to Resource Access Management (RAM) users, user groups, or RAM roles). For more information about how to remove authorization, see [DetachPolicy](https://help.aliyun.com/document_detail/159168.html).
   * 
   * @param request - DeletePolicyRequest
   * @returns DeletePolicyResponse
   */
  async deletePolicy(request: $_model.DeletePolicyRequest): Promise<$_model.DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * Deletes an access policy version.
   * 
   * @remarks
   * > The default version of an access policy cannot be deleted.
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
   * Deletes an access policy version.
   * 
   * @remarks
   * > The default version of an access policy cannot be deleted.
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
   * > Before deleting a resource group, delete the resources in the resource group.
   * 
   * @param request - DeleteResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroupWithOptions(request: $_model.DeleteResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

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
   * > Before deleting a resource group, delete the resources in the resource group.
   * 
   * @param request - DeleteResourceGroupRequest
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroup(request: $_model.DeleteResourceGroupRequest): Promise<$_model.DeleteResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResourceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a role.
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
   * Deletes a role.
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
   * Removes the delegated administrator account for a trusted service.
   * 
   * @remarks
   * > If the delegated administrator account to be removed has historical management tasks in the trusted service, the removal operation may affect the normal use of the trusted service. Carefully consider the potential impact before removing the account.
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
   * Removes the delegated administrator account for a trusted service.
   * 
   * @remarks
   * > If the delegated administrator account to be removed has historical management tasks in the trusted service, the removal operation may affect the normal use of the trusted service. Carefully consider the potential impact before removing the account.
   * 
   * @param request - DeregisterDelegatedAdministratorRequest
   * @returns DeregisterDelegatedAdministratorResponse
   */
  async deregisterDelegatedAdministrator(request: $_model.DeregisterDelegatedAdministratorRequest): Promise<$_model.DeregisterDelegatedAdministratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deregisterDelegatedAdministratorWithOptions(request, runtime);
  }

  /**
   * Closes the resource directory. This operation is irreversible. Proceed with caution.
   * 
   * @remarks
   * Before closing the resource directory, ensure that the following operations are completed:
   * - All members in the resource directory have been removed. For more information about how to remove a member, see [RemoveCloudAccount](https://help.aliyun.com/document_detail/159431.html).
   * - All folders except the Root folder in the resource directory have been deleted. For more information about how to delete a folder, see [DeleteFolder](https://help.aliyun.com/document_detail/159432.html).
   * 
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
   * Closes the resource directory. This operation is irreversible. Proceed with caution.
   * 
   * @remarks
   * Before closing the resource directory, ensure that the following operations are completed:
   * - All members in the resource directory have been removed. For more information about how to remove a member, see [RemoveCloudAccount](https://help.aliyun.com/document_detail/159431.html).
   * - All folders except the Root folder in the resource directory have been deleted. For more information about how to delete a folder, see [DeleteFolder](https://help.aliyun.com/document_detail/159432.html).
   * @returns DestroyResourceDirectoryResponse
   */
  async destroyResourceDirectory(): Promise<$_model.DestroyResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.destroyResourceDirectoryWithOptions(runtime);
  }

  /**
   * Dissociates a control policy.
   * 
   * @remarks
   * After the dissociation succeeds, the folder or member immediately loses the governance applied by the control policy. Make sure that the dissociation produces the expected results to avoid affecting your business.
   * Both system policies and custom control policies can be dissociated. However, you cannot dissociate the last control policy associated with a folder or member.
   * This topic provides an example to show how to dissociate the custom policy cp-jExXAqIYkwHN**** from the folder fd-ZDNPiT****.
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
   * Dissociates a control policy.
   * 
   * @remarks
   * After the dissociation succeeds, the folder or member immediately loses the governance applied by the control policy. Make sure that the dissociation produces the expected results to avoid affecting your business.
   * Both system policies and custom control policies can be dissociated. However, you cannot dissociate the last control policy associated with a folder or member.
   * This topic provides an example to show how to dissociate the custom policy cp-jExXAqIYkwHN**** from the folder fd-ZDNPiT****.
   * 
   * @param request - DetachControlPolicyRequest
   * @returns DetachControlPolicyResponse
   */
  async detachControlPolicy(request: $_model.DetachControlPolicyRequest): Promise<$_model.DetachControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachControlPolicyWithOptions(request, runtime);
  }

  /**
   * Removes a specified access policy from a specified object. After the authorization is removed, the object loses permissions to operate on resources in the current resource group or account.
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
   * Removes a specified access policy from a specified object. After the authorization is removed, the object loses permissions to operate on resources in the current resource group or account.
   * 
   * @param request - DetachPolicyRequest
   * @returns DetachPolicyResponse
   */
  async detachPolicy(request: $_model.DetachPolicyRequest): Promise<$_model.DetachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachPolicyWithOptions(request, runtime);
  }

  /**
   * Disables the associated resource transfer feature.
   * 
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
   * Disables the associated resource transfer feature.
   * @returns DisableAssociatedTransferResponse
   */
  async disableAssociatedTransfer(): Promise<$_model.DisableAssociatedTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAssociatedTransferWithOptions(runtime);
  }

  /**
   * Disables automatic resource grouping. After the automatic grouping feature is disabled, configured custom condition rules and follow-grouping rules for associated resources are deleted, but the resource groups of existing resources remain unaffected. If needed, you can re-enable this feature 1 minute after disabling it.
   * 
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
   * Disables automatic resource grouping. After the automatic grouping feature is disabled, configured custom condition rules and follow-grouping rules for associated resources are deleted, but the resource groups of existing resources remain unaffected. If needed, you can re-enable this feature 1 minute after disabling it.
   * @returns DisableAutoGroupingResponse
   */
  async disableAutoGrouping(): Promise<$_model.DisableAutoGroupingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAutoGroupingWithOptions(runtime);
  }

  /**
   * Disables the control policy feature.
   * 
   * @remarks
   * After you disable the control policy feature, all control policies attached to folders and member accounts are automatically detached. The control policies are not deleted, but they can no longer be attached to any target nodes.
   * > Disabling the control policy feature affects the permissions of folders and member accounts in the entire resource directory. Proceed with caution.
   * 
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
   * Disables the control policy feature.
   * 
   * @remarks
   * After you disable the control policy feature, all control policies attached to folders and member accounts are automatically detached. The control policies are not deleted, but they can no longer be attached to any target nodes.
   * > Disabling the control policy feature affects the permissions of folders and member accounts in the entire resource directory. Proceed with caution.
   * @returns DisableControlPolicyResponse
   */
  async disableControlPolicy(): Promise<$_model.DisableControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableControlPolicyWithOptions(runtime);
  }

  /**
   * Disables a resource group event notification that is currently enabled. If the notification is already disabled, the error code `UnsupportedOperation.RepeatDisableResourceGroupNotification` is returned. You can call `EnableResourceGroupNotification` to enable the notification first.
   * 
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
   * Disables a resource group event notification that is currently enabled. If the notification is already disabled, the error code `UnsupportedOperation.RepeatDisableResourceGroupNotification` is returned. You can call `EnableResourceGroupNotification` to enable the notification first.
   * @returns DisableResourceGroupNotificationResponse
   */
  async disableResourceGroupNotification(): Promise<$_model.DisableResourceGroupNotificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableResourceGroupNotificationWithOptions(runtime);
  }

  /**
   * Enables the associated resource group transfer feature.
   * 
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
   * Enables the associated resource group transfer feature.
   * @returns EnableAssociatedTransferResponse
   */
  async enableAssociatedTransfer(): Promise<$_model.EnableAssociatedTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAssociatedTransferWithOptions(runtime);
  }

  /**
   * Enables automatic grouping. After you enable this feature, you can create, update, delete, and query automatic grouping rules.
   * 
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
   * Enables automatic grouping. After you enable this feature, you can create, update, delete, and query automatic grouping rules.
   * @returns EnableAutoGroupingResponse
   */
  async enableAutoGrouping(): Promise<$_model.EnableAutoGroupingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAutoGroupingWithOptions(runtime);
  }

  /**
   * Enables the control policy feature.
   * 
   * @remarks
   * A control policy in Resource Directory is an access control policy based on the resource structure (folders or member accounts). It allows you to manage permission boundaries for resource access across all levels of the resource directory in a unified manner and establish enterprise-wide or specific access control principles. Control policies only define permission boundaries and do not grant permissions. You must also configure permissions in the Resource Access Management (RAM) Settings of a member account before the corresponding identity has access permissions to resources. For more information, see [Control policy overview](https://help.aliyun.com/document_detail/178671.html).
   * 
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
   * Enables the control policy feature.
   * 
   * @remarks
   * A control policy in Resource Directory is an access control policy based on the resource structure (folders or member accounts). It allows you to manage permission boundaries for resource access across all levels of the resource directory in a unified manner and establish enterprise-wide or specific access control principles. Control policies only define permission boundaries and do not grant permissions. You must also configure permissions in the Resource Access Management (RAM) Settings of a member account before the corresponding identity has access permissions to resources. For more information, see [Control policy overview](https://help.aliyun.com/document_detail/178671.html).
   * @returns EnableControlPolicyResponse
   */
  async enableControlPolicy(): Promise<$_model.EnableControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableControlPolicyWithOptions(runtime);
  }

  /**
   * Enables a resource directory.
   * 
   * @remarks
   * You can enable a resource directory by using the current logon account or by creating a new management account. For more information, refer to [Enable a resource directory](https://help.aliyun.com/document_detail/111215.html).
   * This topic provides an example of how to enable a resource directory by using the current logon account.
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
   * Enables a resource directory.
   * 
   * @remarks
   * You can enable a resource directory by using the current logon account or by creating a new management account. For more information, refer to [Enable a resource directory](https://help.aliyun.com/document_detail/111215.html).
   * This topic provides an example of how to enable a resource directory by using the current logon account.
   * 
   * @param request - EnableResourceDirectoryRequest
   * @returns EnableResourceDirectoryResponse
   */
  async enableResourceDirectory(request: $_model.EnableResourceDirectoryRequest): Promise<$_model.EnableResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableResourceDirectoryWithOptions(request, runtime);
  }

  /**
   * Enables event notifications for resource groups.
   * 
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
   * Enables event notifications for resource groups.
   * @returns EnableResourceGroupNotificationResponse
   */
  async enableResourceGroupNotification(): Promise<$_model.EnableResourceGroupNotificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableResourceGroupNotificationWithOptions(runtime);
  }

  /**
   * Calls GetAccount to retrieve member account information.
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
   * Calls GetAccount to retrieve member account information.
   * 
   * @param request - GetAccountRequest
   * @returns GetAccountResponse
   */
  async getAccount(request: $_model.GetAccountRequest): Promise<$_model.GetAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountWithOptions(request, runtime);
  }

  /**
   * Queries the member deletion check result.
   * 
   * @remarks
   * After you call [CheckAccountDelete](https://help.aliyun.com/document_detail/448542.html) to execute a member deletion check task, you can call GetAccountDeletionCheckResult to query the result of the member deletion check. If the member meets the deletion check requirements, the member can be deleted. Otherwise, manually handle the non-compliant items until the requirements are met.
   * This topic provides an example to query the deletion check result of the member `179855839641****` to be deleted. The returned result shows that the member does not meet the deletion requirements.
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
   * Queries the member deletion check result.
   * 
   * @remarks
   * After you call [CheckAccountDelete](https://help.aliyun.com/document_detail/448542.html) to execute a member deletion check task, you can call GetAccountDeletionCheckResult to query the result of the member deletion check. If the member meets the deletion check requirements, the member can be deleted. Otherwise, manually handle the non-compliant items until the requirements are met.
   * This topic provides an example to query the deletion check result of the member `179855839641****` to be deleted. The returned result shows that the member does not meet the deletion requirements.
   * 
   * @param request - GetAccountDeletionCheckResultRequest
   * @returns GetAccountDeletionCheckResultResponse
   */
  async getAccountDeletionCheckResult(request: $_model.GetAccountDeletionCheckResultRequest): Promise<$_model.GetAccountDeletionCheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountDeletionCheckResultWithOptions(request, runtime);
  }

  /**
   * Queries the deletion status of a member account.
   * 
   * @remarks
   * This topic provides an example on how to query the deletion status of the member account `169946124551****`. The response shows that the member account has been successfully deleted.
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
   * Queries the deletion status of a member account.
   * 
   * @remarks
   * This topic provides an example on how to query the deletion status of the member account `169946124551****`. The response shows that the member account has been successfully deleted.
   * 
   * @param request - GetAccountDeletionStatusRequest
   * @returns GetAccountDeletionStatusResponse
   */
  async getAccountDeletionStatus(request: $_model.GetAccountDeletionStatusRequest): Promise<$_model.GetAccountDeletionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountDeletionStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about an automatic resource group transfer rule.
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
   * Queries the information about an automatic resource group transfer rule.
   * 
   * @param request - GetAutoGroupingRuleRequest
   * @returns GetAutoGroupingRuleResponse
   */
  async getAutoGroupingRule(request: $_model.GetAutoGroupingRuleRequest): Promise<$_model.GetAutoGroupingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoGroupingRuleWithOptions(request, runtime);
  }

  /**
   * Queries the status of automatic grouping settings.
   * 
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
   * Queries the status of automatic grouping settings.
   * @returns GetAutoGroupingStatusResponse
   */
  async getAutoGroupingStatus(): Promise<$_model.GetAutoGroupingStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoGroupingStatusWithOptions(runtime);
  }

  /**
   * Queries the details of a control policy.
   * 
   * @remarks
   * This topic provides an example on how to query the details of the control policy whose ID is `cp-SImPt8GCEwiq****`.
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
   * Queries the details of a control policy.
   * 
   * @remarks
   * This topic provides an example on how to query the details of the control policy whose ID is `cp-SImPt8GCEwiq****`.
   * 
   * @param request - GetControlPolicyRequest
   * @returns GetControlPolicyResponse
   */
  async getControlPolicy(request: $_model.GetControlPolicyRequest): Promise<$_model.GetControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the enabling status of the control policy feature.
   * 
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
   * Queries the enabling status of the control policy feature.
   * @returns GetControlPolicyEnablementStatusResponse
   */
  async getControlPolicyEnablementStatus(): Promise<$_model.GetControlPolicyEnablementStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getControlPolicyEnablementStatusWithOptions(runtime);
  }

  /**
   * Calls GetFolder to retrieve the information about a folder.
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
   * Calls GetFolder to retrieve the information about a folder.
   * 
   * @param request - GetFolderRequest
   * @returns GetFolderResponse
   */
  async getFolder(request: $_model.GetFolderRequest): Promise<$_model.GetFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFolderWithOptions(request, runtime);
  }

  /**
   * Retrieves the invitation information.
   * 
   * @remarks
   * This topic provides an example of retrieving the invitation information for the invitation whose ID is `h-ycm4rp****`.
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
   * Retrieves the invitation information.
   * 
   * @remarks
   * This topic provides an example of retrieving the invitation information for the invitation whose ID is `h-ycm4rp****`.
   * 
   * @param request - GetHandshakeRequest
   * @returns GetHandshakeResponse
   */
  async getHandshake(request: $_model.GetHandshakeRequest): Promise<$_model.GetHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHandshakeWithOptions(request, runtime);
  }

  /**
   * Retrieves the billing account information of a member.
   * 
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
   * Retrieves the billing account information of a member.
   * 
   * @param request - GetPayerForAccountRequest
   * @returns GetPayerForAccountResponse
   */
  async getPayerForAccount(request: $_model.GetPayerForAccountRequest): Promise<$_model.GetPayerForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPayerForAccountWithOptions(request, runtime);
  }

  /**
   * Retrieves information about a specified access policy.
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
   * Retrieves information about a specified access policy.
   * 
   * @param request - GetPolicyRequest
   * @returns GetPolicyResponse
   */
  async getPolicy(request: $_model.GetPolicyRequest): Promise<$_model.GetPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  /**
   * Retrieves a version of an access policy.
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
   * Retrieves a version of an access policy.
   * 
   * @param request - GetPolicyVersionRequest
   * @returns GetPolicyVersionResponse
   */
  async getPolicyVersion(request: $_model.GetPolicyVersionRequest): Promise<$_model.GetPolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyVersionWithOptions(request, runtime);
  }

  /**
   * Retrieves the information about a resource directory. When called by a management account, the operation returns the details of the resource directory enabled by the management account. When called by a member, the operation returns the details of the resource directory to which the member belongs.
   * 
   * @remarks
   * This topic provides an example on how to query the details of a resource directory enabled by a management account.
   * 
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
   * Retrieves the information about a resource directory. When called by a management account, the operation returns the details of the resource directory enabled by the management account. When called by a member, the operation returns the details of the resource directory to which the member belongs.
   * 
   * @remarks
   * This topic provides an example on how to query the details of a resource directory enabled by a management account.
   * @returns GetResourceDirectoryResponse
   */
  async getResourceDirectory(): Promise<$_model.GetResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceDirectoryWithOptions(runtime);
  }

  /**
   * Queries the information about a resource group.
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
   * Queries the information about a resource group.
   * 
   * @param request - GetResourceGroupRequest
   * @returns GetResourceGroupResponse
   */
  async getResourceGroup(request: $_model.GetResourceGroupRequest): Promise<$_model.GetResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the resource group administrator settings.
   * 
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
   * Queries the resource group administrator settings.
   * @returns GetResourceGroupAdminSettingResponse
   */
  async getResourceGroupAdminSetting(): Promise<$_model.GetResourceGroupAdminSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceGroupAdminSettingWithOptions(runtime);
  }

  /**
   * Queries the notification settings of a resource group.
   * 
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
   * Queries the resource count in visible resource groups.
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
   * Queries the resource count in visible resource groups.
   * 
   * @param request - GetResourceGroupResourceCountsRequest
   * @returns GetResourceGroupResourceCountsResponse
   */
  async getResourceGroupResourceCounts(request: $_model.GetResourceGroupResourceCountsRequest): Promise<$_model.GetResourceGroupResourceCountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceGroupResourceCountsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a role by calling GetRole.
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
   * Queries the information about a role by calling GetRole.
   * 
   * @param request - GetRoleRequest
   * @returns GetRoleResponse
   */
  async getRole(request: $_model.GetRoleRequest): Promise<$_model.GetRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRoleWithOptions(request, runtime);
  }

  /**
   * Retrieves the status of a task that deletes a service-linked role.
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
   * Retrieves the status of a task that deletes a service-linked role.
   * 
   * @param request - GetServiceLinkedRoleDeletionStatusRequest
   * @returns GetServiceLinkedRoleDeletionStatusResponse
   */
  async getServiceLinkedRoleDeletionStatus(request: $_model.GetServiceLinkedRoleDeletionStatusRequest): Promise<$_model.GetServiceLinkedRoleDeletionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceLinkedRoleDeletionStatusWithOptions(request, runtime);
  }

  /**
   * Calls InitResourceDirectory to enable a resource directory. After you enable a resource directory, the system creates a Root folder and sets the current account as the management account. The management account has all permissions to manage the resource directory.
   * 
   * @remarks
   * > - Use an account that has passed enterprise real-name verification to enable a resource directory. An account that has passed only individual real-name verification cannot enable a resource directory.
   * > - Use the management account only as the administrator of the resource directory. Do not purchase cloud service resources with the management account.
   * 
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
   * Calls InitResourceDirectory to enable a resource directory. After you enable a resource directory, the system creates a Root folder and sets the current account as the management account. The management account has all permissions to manage the resource directory.
   * 
   * @remarks
   * > - Use an account that has passed enterprise real-name verification to enable a resource directory. An account that has passed only individual real-name verification cannot enable a resource directory.
   * > - Use the management account only as the administrator of the resource directory. Do not purchase cloud service resources with the management account.
   * @returns InitResourceDirectoryResponse
   */
  async initResourceDirectory(): Promise<$_model.InitResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initResourceDirectoryWithOptions(runtime);
  }

  /**
   * Invites an external account to join a resource directory.
   * 
   * @remarks
   * This topic provides an example of inviting an external account `someone@example.com` to join a resource directory.
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
   * Invites an external account to join a resource directory.
   * 
   * @remarks
   * This topic provides an example of inviting an external account `someone@example.com` to join a resource directory.
   * 
   * @param request - InviteAccountToResourceDirectoryRequest
   * @returns InviteAccountToResourceDirectoryResponse
   */
  async inviteAccountToResourceDirectory(request: $_model.InviteAccountToResourceDirectoryRequest): Promise<$_model.InviteAccountToResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inviteAccountToResourceDirectoryWithOptions(request, runtime);
  }

  /**
   * Queries all member accounts in a resource directory.
   * 
   * @remarks
   * The management account of the resource directory and the delegated administrator account of a trusted service can call this operation.
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
   * Queries all member accounts in a resource directory.
   * 
   * @remarks
   * The management account of the resource directory and the delegated administrator account of a trusted service can call this operation.
   * 
   * @param request - ListAccountsRequest
   * @returns ListAccountsResponse
   */
  async listAccounts(request: $_model.ListAccountsRequest): Promise<$_model.ListAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the members in a folder.
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
   * Queries the members in a folder.
   * 
   * @param request - ListAccountsForParentRequest
   * @returns ListAccountsForParentResponse
   */
  async listAccountsForParent(request: $_model.ListAccountsForParentRequest): Promise<$_model.ListAccountsForParentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountsForParentWithOptions(request, runtime);
  }

  /**
   * Queries information about all parent folders of a specified folder. The results are displayed in order from top to bottom.
   * 
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
   * Queries information about all parent folders of a specified folder. The results are displayed in order from top to bottom.
   * 
   * @param request - ListAncestorsRequest
   * @returns ListAncestorsResponse
   */
  async listAncestors(request: $_model.ListAncestorsRequest): Promise<$_model.ListAncestorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAncestorsWithOptions(request, runtime);
  }

  /**
   * Retrieves the associated transfer settings.
   * 
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
   * Retrieves the associated transfer settings.
   * @returns ListAssociatedTransferSettingResponse
   */
  async listAssociatedTransferSetting(): Promise<$_model.ListAssociatedTransferSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAssociatedTransferSettingWithOptions(runtime);
  }

  /**
   * Lists auto-grouping remediation records.
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
   * Lists auto-grouping remediation records.
   * 
   * @param request - ListAutoGroupingRemediationsRequest
   * @returns ListAutoGroupingRemediationsResponse
   */
  async listAutoGroupingRemediations(request: $_model.ListAutoGroupingRemediationsRequest): Promise<$_model.ListAutoGroupingRemediationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAutoGroupingRemediationsWithOptions(request, runtime);
  }

  /**
   * Queries the list of automatic group transfer rules.
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
   * Queries the list of automatic group transfer rules.
   * 
   * @param request - ListAutoGroupingRulesRequest
   * @returns ListAutoGroupingRulesResponse
   */
  async listAutoGroupingRules(request: $_model.ListAutoGroupingRulesRequest): Promise<$_model.ListAutoGroupingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAutoGroupingRulesWithOptions(request, runtime);
  }

  /**
   * Queries a list of control policies.
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
   * Queries a list of control policies.
   * 
   * @param request - ListControlPoliciesRequest
   * @returns ListControlPoliciesResponse
   */
  async listControlPolicies(request: $_model.ListControlPoliciesRequest): Promise<$_model.ListControlPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listControlPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the list of control policies attached to a resource folder or member account.
   * 
   * @remarks
   * This topic provides an example on how to query the list of control policies attached to the resource folder `fd-ZDNPiT****`.
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
   * Queries the list of control policies attached to a resource folder or member account.
   * 
   * @remarks
   * This topic provides an example on how to query the list of control policies attached to the resource folder `fd-ZDNPiT****`.
   * 
   * @param request - ListControlPolicyAttachmentsForTargetRequest
   * @returns ListControlPolicyAttachmentsForTargetResponse
   */
  async listControlPolicyAttachmentsForTarget(request: $_model.ListControlPolicyAttachmentsForTargetRequest): Promise<$_model.ListControlPolicyAttachmentsForTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listControlPolicyAttachmentsForTargetWithOptions(request, runtime);
  }

  /**
   * Queries the delegated administrator accounts for a trusted service.
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
   * Queries the delegated administrator accounts for a trusted service.
   * 
   * @param request - ListDelegatedAdministratorsRequest
   * @returns ListDelegatedAdministratorsResponse
   */
  async listDelegatedAdministrators(request: $_model.ListDelegatedAdministratorsRequest): Promise<$_model.ListDelegatedAdministratorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDelegatedAdministratorsWithOptions(request, runtime);
  }

  /**
   * Queries the trusted services for which a specified member is configured as a delegated administrator account.
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
   * Queries the trusted services for which a specified member is configured as a delegated administrator account.
   * 
   * @param request - ListDelegatedServicesForAccountRequest
   * @returns ListDelegatedServicesForAccountResponse
   */
  async listDelegatedServicesForAccount(request: $_model.ListDelegatedServicesForAccountRequest): Promise<$_model.ListDelegatedServicesForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDelegatedServicesForAccountWithOptions(request, runtime);
  }

  /**
   * Queries the subfolders of a specified folder.
   * 
   * @remarks
   * > You can query only the subfolders at the next level of the specified folder. You cannot query subfolders at deeper levels.
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
   * Queries the subfolders of a specified folder.
   * 
   * @remarks
   * > You can query only the subfolders at the next level of the specified folder. You cannot query subfolders at deeper levels.
   * 
   * @param request - ListFoldersForParentRequest
   * @returns ListFoldersForParentResponse
   */
  async listFoldersForParent(request: $_model.ListFoldersForParentRequest): Promise<$_model.ListFoldersForParentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFoldersForParentWithOptions(request, runtime);
  }

  /**
   * Queries the invitation records for the current account.
   * 
   * @remarks
   * This topic provides an example of querying the invitation records for the current management account `172841235500****`.
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
   * Queries the invitation records for the current account.
   * 
   * @remarks
   * This topic provides an example of querying the invitation records for the current management account `172841235500****`.
   * 
   * @param request - ListHandshakesForAccountRequest
   * @returns ListHandshakesForAccountResponse
   */
  async listHandshakesForAccount(request: $_model.ListHandshakesForAccountRequest): Promise<$_model.ListHandshakesForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHandshakesForAccountWithOptions(request, runtime);
  }

  /**
   * Queries all invitations in a resource directory.
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
   * Queries all invitations in a resource directory.
   * 
   * @param request - ListHandshakesForResourceDirectoryRequest
   * @returns ListHandshakesForResourceDirectoryResponse
   */
  async listHandshakesForResourceDirectory(request: $_model.ListHandshakesForResourceDirectoryRequest): Promise<$_model.ListHandshakesForResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHandshakesForResourceDirectoryWithOptions(request, runtime);
  }

  /**
   * Calls ListPolicies to query a list of access policies.
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
   * Calls ListPolicies to query a list of access policies.
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: $_model.ListPoliciesRequest): Promise<$_model.ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the list of policy attachments by calling ListPolicyAttachments.
   * 
   * @remarks
   * You can query the following information:
   * - All authorization records under an Alibaba Cloud account or a resource group.
   * - All access policies granted to a Resource Access Management (RAM) user, RAM user group, or RAM role.
   * - RAM users, RAM user groups, and RAM roles that have a specific permission under an Alibaba Cloud account or a resource group.
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
   * Queries the list of policy attachments by calling ListPolicyAttachments.
   * 
   * @remarks
   * You can query the following information:
   * - All authorization records under an Alibaba Cloud account or a resource group.
   * - All access policies granted to a Resource Access Management (RAM) user, RAM user group, or RAM role.
   * - RAM users, RAM user groups, and RAM roles that have a specific permission under an Alibaba Cloud account or a resource group.
   * 
   * @param request - ListPolicyAttachmentsRequest
   * @returns ListPolicyAttachmentsResponse
   */
  async listPolicyAttachments(request: $_model.ListPolicyAttachmentsRequest): Promise<$_model.ListPolicyAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries the versions of an access policy.
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
   * Queries the versions of an access policy.
   * 
   * @param request - ListPolicyVersionsRequest
   * @returns ListPolicyVersionsResponse
   */
  async listPolicyVersions(request: $_model.ListPolicyVersionsRequest): Promise<$_model.ListPolicyVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyVersionsWithOptions(request, runtime);
  }

  /**
   * Lists the capabilities of resource groups.
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
   * Lists the capabilities of resource groups.
   * 
   * @param request - ListResourceGroupCapabilityRequest
   * @returns ListResourceGroupCapabilityResponse
   */
  async listResourceGroupCapability(request: $_model.ListResourceGroupCapabilityRequest): Promise<$_model.ListResourceGroupCapabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceGroupCapabilityWithOptions(request, runtime);
  }

  /**
   * Queries a list of resource groups.
   * 
   * @remarks
   * You can call this operation to query all resource groups within the current account. You can also query specific resource groups by resource group status, resource group ID, resource group identifier, or resource group display name.
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
   * Queries a list of resource groups.
   * 
   * @remarks
   * You can call this operation to query all resource groups within the current account. You can also query specific resource groups by resource group status, resource group ID, resource group identifier, or resource group display name.
   * 
   * @param request - ListResourceGroupsRequest
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroups(request: $_model.ListResourceGroupsRequest): Promise<$_model.ListResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries resource groups and user authorization details.
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
   * Queries resource groups and user authorization details.
   * 
   * @param request - ListResourceGroupsWithAuthDetailsRequest
   * @returns ListResourceGroupsWithAuthDetailsResponse
   */
  async listResourceGroupsWithAuthDetails(request: $_model.ListResourceGroupsWithAuthDetailsRequest): Promise<$_model.ListResourceGroupsWithAuthDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceGroupsWithAuthDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the resources in the resource groups accessible to the current account.
   * 
   * @remarks
   * > This API can be called by assuming a RAM role, but session policies for the role are not supported.
   * 
   * @param request - ListResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: $_model.ListResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
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
   * Queries the resources in the resource groups accessible to the current account.
   * 
   * @remarks
   * > This API can be called by assuming a RAM role, but session policies for the role are not supported.
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: $_model.ListResourcesRequest): Promise<$_model.ListResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the list of roles by calling ListRoles.
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
   * Queries the list of roles by calling ListRoles.
   * 
   * @param request - ListRolesRequest
   * @returns ListRolesResponse
   */
  async listRoles(request: $_model.ListRolesRequest): Promise<$_model.ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  /**
   * Queries the tag keys of resource directory members.
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
   * Queries the tag keys of resource directory members.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags bound to resource groups or resource directory members.
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
   * Queries the tags bound to resource groups or resource directory members.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the tag values for a specified tag key.
   * 
   * @remarks
   * ### Usage notes
   * This topic provides an example to query the tag values for the tag key k1. The response shows that the tag value for the tag key k1 is v1.
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
   * Queries the tag values for a specified tag key.
   * 
   * @remarks
   * ### Usage notes
   * This topic provides an example to query the tag values for the tag key k1. The response shows that the tag value for the tag key k1 is v1.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Queries the nodes to which a control policy is attached.
   * 
   * @remarks
   * 调用本接口前，请先开启管控策略功能（EnableControlPolicy），可通过 GetControlPolicyEnablementStatus 确认状态为 Enabled（已开启）。功能未开启时，管控策略无法绑定到任何节点。
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
   * Queries the nodes to which a control policy is attached.
   * 
   * @remarks
   * 调用本接口前，请先开启管控策略功能（EnableControlPolicy），可通过 GetControlPolicyEnablementStatus 确认状态为 Enabled（已开启）。功能未开启时，管控策略无法绑定到任何节点。
   * 
   * @param request - ListTargetAttachmentsForControlPolicyRequest
   * @returns ListTargetAttachmentsForControlPolicyResponse
   */
  async listTargetAttachmentsForControlPolicy(request: $_model.ListTargetAttachmentsForControlPolicyRequest): Promise<$_model.ListTargetAttachmentsForControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTargetAttachmentsForControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the list of trusted services enabled by the management account or a delegated administrator account.
   * 
   * @remarks
   * > This operation can be called only by the management account or a delegated administrator account.
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
   * Queries the list of trusted services enabled by the management account or a delegated administrator account.
   * 
   * @remarks
   * > This operation can be called only by the management account or a delegated administrator account.
   * 
   * @param request - ListTrustedServiceStatusRequest
   * @returns ListTrustedServiceStatusResponse
   */
  async listTrustedServiceStatus(request: $_model.ListTrustedServiceStatusRequest): Promise<$_model.ListTrustedServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTrustedServiceStatusWithOptions(request, runtime);
  }

  /**
   * Queries resource group events.
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
   * Queries resource group events.
   * 
   * @param request - LookupResourceGroupEventsRequest
   * @returns LookupResourceGroupEventsResponse
   */
  async lookupResourceGroupEvents(request: $_model.LookupResourceGroupEventsRequest): Promise<$_model.LookupResourceGroupEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lookupResourceGroupEventsWithOptions(request, runtime);
  }

  /**
   * Moves a member to another folder.
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
   * Moves a member to another folder.
   * 
   * @param request - MoveAccountRequest
   * @returns MoveAccountResponse
   */
  async moveAccount(request: $_model.MoveAccountRequest): Promise<$_model.MoveAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveAccountWithOptions(request, runtime);
  }

  /**
   * Moves resources from one resource group to another.
   * 
   * @remarks
   * You can transfer resources in batches across regions, cloud services, and resource groups.
   * For cloud services that support resource groups, see the **API** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
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
   * Moves resources from one resource group to another.
   * 
   * @remarks
   * You can transfer resources in batches across regions, cloud services, and resource groups.
   * For cloud services that support resource groups, see the **API** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @param request - MoveResourcesRequest
   * @returns MoveResourcesResponse
   */
  async moveResources(request: $_model.MoveResourcesRequest): Promise<$_model.MoveResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourcesWithOptions(request, runtime);
  }

  /**
   * Upgrades a resource account to an Alibaba Cloud account. This is an asynchronous operation.
   * 
   * @remarks
   * 本接口仅支持升级资源账号类型的成员；成员类型或状态不匹配时返回 409 AccountTypeOrStatusMismatch，成员处于删除中状态时不支持升级。
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
   * Upgrades a resource account to an Alibaba Cloud account. This is an asynchronous operation.
   * 
   * @remarks
   * 本接口仅支持升级资源账号类型的成员；成员类型或状态不匹配时返回 409 AccountTypeOrStatusMismatch，成员处于删除中状态时不支持升级。
   * 
   * @param request - PromoteResourceAccountRequest
   * @returns PromoteResourceAccountResponse
   */
  async promoteResourceAccount(request: $_model.PromoteResourceAccountRequest): Promise<$_model.PromoteResourceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.promoteResourceAccountWithOptions(request, runtime);
  }

  /**
   * Invokes RegisterDelegatedAdministrator to configure the Settings of member accounts in a resource folder as delegated administrators for a trusted service.
   * 
   * @remarks
   * After the Settings are applied, the delegated administrator account receives authorization to access the organization information of the resource folder, which provides visibility into the organization members and structure. The delegated administrator account executes service-related management operations on behalf of the management account of the resource folder in the specified trusted service.
   * Limits:
   * - Only specific trusted services support the delegated administrator feature. For more information, see [Supported trusted services](https://help.aliyun.com/document_detail/208133.html).
   * - Only the management account of the resource folder and its authorized Resource Access Management (RAM) users and RAM roles can invoke this API.
   * - The maximum number of delegated administrator accounts that can be added for a trusted service is defined by the trusted service.
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
   * Invokes RegisterDelegatedAdministrator to configure the Settings of member accounts in a resource folder as delegated administrators for a trusted service.
   * 
   * @remarks
   * After the Settings are applied, the delegated administrator account receives authorization to access the organization information of the resource folder, which provides visibility into the organization members and structure. The delegated administrator account executes service-related management operations on behalf of the management account of the resource folder in the specified trusted service.
   * Limits:
   * - Only specific trusted services support the delegated administrator feature. For more information, see [Supported trusted services](https://help.aliyun.com/document_detail/208133.html).
   * - Only the management account of the resource folder and its authorized Resource Access Management (RAM) users and RAM roles can invoke this API.
   * - The maximum number of delegated administrator accounts that can be added for a trusted service is defined by the trusted service.
   * 
   * @param request - RegisterDelegatedAdministratorRequest
   * @returns RegisterDelegatedAdministratorResponse
   */
  async registerDelegatedAdministrator(request: $_model.RegisterDelegatedAdministratorRequest): Promise<$_model.RegisterDelegatedAdministratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerDelegatedAdministratorWithOptions(request, runtime);
  }

  /**
   * Removes a member of the cloud account type. After removal, the member exists as an independent Alibaba Cloud account and is no longer managed by the management account of the resource directory.
   * 
   * @remarks
   * 本接口仅适用于云账号类型的成员。资源账号类型的成员不能通过本接口移除，需通过 DeleteAccount 删除。
   * 移除前需确认该账号未被可信服务使用；被可信服务使用时返回 409 Deny.TrustedService，请先将该账号从可信服务中解除使用。
   * 成员类型或状态不匹配时返回 409 AccountTypeOrStatusMismatch。
   * 若目标云账号是可信服务的委派管理员，需先调用 DeregisterDelegatedAdministrator 移除其委派管理员身份，否则无法移除。
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
   * Removes a member of the cloud account type. After removal, the member exists as an independent Alibaba Cloud account and is no longer managed by the management account of the resource directory.
   * 
   * @remarks
   * 本接口仅适用于云账号类型的成员。资源账号类型的成员不能通过本接口移除，需通过 DeleteAccount 删除。
   * 移除前需确认该账号未被可信服务使用；被可信服务使用时返回 409 Deny.TrustedService，请先将该账号从可信服务中解除使用。
   * 成员类型或状态不匹配时返回 409 AccountTypeOrStatusMismatch。
   * 若目标云账号是可信服务的委派管理员，需先调用 DeregisterDelegatedAdministrator 移除其委派管理员身份，否则无法移除。
   * 
   * @param request - RemoveCloudAccountRequest
   * @returns RemoveCloudAccountResponse
   */
  async removeCloudAccount(request: $_model.RemoveCloudAccountRequest): Promise<$_model.RemoveCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeCloudAccountWithOptions(request, runtime);
  }

  /**
   * Resends the confirmation email for creating a cloud account.
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
   * Resends the confirmation email for creating a cloud account.
   * 
   * @param request - ResendCreateCloudAccountEmailRequest
   * @returns ResendCreateCloudAccountEmailResponse
   */
  async resendCreateCloudAccountEmail(request: $_model.ResendCreateCloudAccountEmailRequest): Promise<$_model.ResendCreateCloudAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resendCreateCloudAccountEmailWithOptions(request, runtime);
  }

  /**
   * Resends the confirmation email for upgrading a resource account to a cloud account.
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
   * Resends the confirmation email for upgrading a resource account to a cloud account.
   * 
   * @param request - ResendPromoteResourceAccountEmailRequest
   * @returns ResendPromoteResourceAccountEmailResponse
   */
  async resendPromoteResourceAccountEmail(request: $_model.ResendPromoteResourceAccountEmailRequest): Promise<$_model.ResendPromoteResourceAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resendPromoteResourceAccountEmailWithOptions(request, runtime);
  }

  /**
   * Resends the confirmation email for changing the email address of a member.
   * 
   * @remarks
   * 调用前，目标成员需存在待验证的邮箱修改记录，否则返回 404 EntityNotExists.EmailModifyRecord。邮箱修改记录可通过 ChangeAccountEmail 发起。
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
   * Resends the confirmation email for changing the email address of a member.
   * 
   * @remarks
   * 调用前，目标成员需存在待验证的邮箱修改记录，否则返回 404 EntityNotExists.EmailModifyRecord。邮箱修改记录可通过 ChangeAccountEmail 发起。
   * 
   * @param request - RetryChangeAccountEmailRequest
   * @returns RetryChangeAccountEmailResponse
   */
  async retryChangeAccountEmail(request: $_model.RetryChangeAccountEmailRequest): Promise<$_model.RetryChangeAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryChangeAccountEmailWithOptions(request, runtime);
  }

  /**
   * Sends a verification code to a secure phone number when you set the secure phone number for a member of the resource account type by calling SendVerificationCodeForBindSecureMobilePhone.
   * 
   * @remarks
   * To ensure that the system can record the specific operator of management operations, use a Resource Access Management (RAM) user or RAM role under the management account that has the resource directory management permission (AliyunResourceDirectoryFullAccess) to call this API operation.
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
   * Sends a verification code to a secure phone number when you set the secure phone number for a member of the resource account type by calling SendVerificationCodeForBindSecureMobilePhone.
   * 
   * @remarks
   * To ensure that the system can record the specific operator of management operations, use a Resource Access Management (RAM) user or RAM role under the management account that has the resource directory management permission (AliyunResourceDirectoryFullAccess) to call this API operation.
   * 
   * @param request - SendVerificationCodeForBindSecureMobilePhoneRequest
   * @returns SendVerificationCodeForBindSecureMobilePhoneResponse
   */
  async sendVerificationCodeForBindSecureMobilePhone(request: $_model.SendVerificationCodeForBindSecureMobilePhoneRequest): Promise<$_model.SendVerificationCodeForBindSecureMobilePhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendVerificationCodeForBindSecureMobilePhoneWithOptions(request, runtime);
  }

  /**
   * Sends a verification code to the secure phone number of a new management account when you enable a resource directory by creating a new management account.
   * 
   * @remarks
   * Each Alibaba Cloud account can send up to 100 verification codes per day.
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
   * Sends a verification code to the secure phone number of a new management account when you enable a resource directory by creating a new management account.
   * 
   * @remarks
   * Each Alibaba Cloud account can send up to 100 verification codes per day.
   * 
   * @param request - SendVerificationCodeForEnableRDRequest
   * @returns SendVerificationCodeForEnableRDResponse
   */
  async sendVerificationCodeForEnableRD(request: $_model.SendVerificationCodeForEnableRDRequest): Promise<$_model.SendVerificationCodeForEnableRDResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendVerificationCodeForEnableRDWithOptions(request, runtime);
  }

  /**
   * Sets the default version of an access policy.
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
   * Sets the default version of an access policy.
   * 
   * @param request - SetDefaultPolicyVersionRequest
   * @returns SetDefaultPolicyVersionResponse
   */
  async setDefaultPolicyVersion(request: $_model.SetDefaultPolicyVersionRequest): Promise<$_model.SetDefaultPolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultPolicyVersionWithOptions(request, runtime);
  }

  /**
   * Enables or disables the member deletion permission.
   * 
   * @remarks
   * You can delete members of the resource account type only after the member deletion permission is enabled.
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
   * Enables or disables the member deletion permission.
   * 
   * @remarks
   * You can delete members of the resource account type only after the member deletion permission is enabled.
   * 
   * @param request - SetMemberDeletionPermissionRequest
   * @returns SetMemberDeletionPermissionResponse
   */
  async setMemberDeletionPermission(request: $_model.SetMemberDeletionPermissionRequest): Promise<$_model.SetMemberDeletionPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setMemberDeletionPermissionWithOptions(request, runtime);
  }

  /**
   * Attaches tags to a resource group or a member of a resource directory.
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
   * Attaches tags to a resource group or a member of a resource directory.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from resource groups or members of a resource directory.
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
   * Removes tags from resource groups or members of a resource directory.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a member or switches the member type.
   * 
   * @remarks
   * ### Before you begin
   * - To ensure that the system can record the specific operator of management operations, call this API as a Resource Access Management (RAM) user or RAM role that has the resource directory management permissions (AliyunResourceDirectoryFullAccess) under the management account.
   * - For the conditions that must be met when switching a resource account to a cloud account, refer to [Switch a resource account to a cloud account](https://help.aliyun.com/document_detail/111233.html).
   * - For the conditions that must be met when switching a cloud account to a resource account, refer to [Switch a cloud account to a resource account](https://help.aliyun.com/document_detail/209980.html).
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
   * Modifies the name of a member or switches the member type.
   * 
   * @remarks
   * ### Before you begin
   * - To ensure that the system can record the specific operator of management operations, call this API as a Resource Access Management (RAM) user or RAM role that has the resource directory management permissions (AliyunResourceDirectoryFullAccess) under the management account.
   * - For the conditions that must be met when switching a resource account to a cloud account, refer to [Switch a resource account to a cloud account](https://help.aliyun.com/document_detail/111233.html).
   * - For the conditions that must be met when switching a cloud account to a resource account, refer to [Switch a cloud account to a resource account](https://help.aliyun.com/document_detail/209980.html).
   * 
   * @param request - UpdateAccountRequest
   * @returns UpdateAccountResponse
   */
  async updateAccount(request: $_model.UpdateAccountRequest): Promise<$_model.UpdateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAccountWithOptions(request, runtime);
  }

  /**
   * Updates the settings of the associated resource group transfer feature by calling UpdateAssociatedTransferSetting.
   * 
   * @remarks
   * For cloud resources that support the attached-resource allocation feature, see [Attached-resource allocation](https://help.aliyun.com/document_detail/606232.html).
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
   * Updates the settings of the associated resource group transfer feature by calling UpdateAssociatedTransferSetting.
   * 
   * @remarks
   * For cloud resources that support the attached-resource allocation feature, see [Attached-resource allocation](https://help.aliyun.com/document_detail/606232.html).
   * 
   * @param request - UpdateAssociatedTransferSettingRequest
   * @returns UpdateAssociatedTransferSettingResponse
   */
  async updateAssociatedTransferSetting(request: $_model.UpdateAssociatedTransferSettingRequest): Promise<$_model.UpdateAssociatedTransferSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAssociatedTransferSettingWithOptions(request, runtime);
  }

  /**
   * Updates the automatic group transfer settings. Currently, you can only specify whether to transfer existing associated resources along with the group transfer task.
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
   * Updates the automatic group transfer settings. Currently, you can only specify whether to transfer existing associated resources along with the group transfer task.
   * 
   * @param request - UpdateAutoGroupingConfigRequest
   * @returns UpdateAutoGroupingConfigResponse
   */
  async updateAutoGroupingConfig(request: $_model.UpdateAutoGroupingConfigRequest): Promise<$_model.UpdateAutoGroupingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutoGroupingConfigWithOptions(request, runtime);
  }

  /**
   * Updates an automatic resource group transfer rule by calling UpdateAutoGroupingRule.
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
   * Updates an automatic resource group transfer rule by calling UpdateAutoGroupingRule.
   * 
   * @param request - UpdateAutoGroupingRuleRequest
   * @returns UpdateAutoGroupingRuleResponse
   */
  async updateAutoGroupingRule(request: $_model.UpdateAutoGroupingRuleRequest): Promise<$_model.UpdateAutoGroupingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutoGroupingRuleWithOptions(request, runtime);
  }

  /**
   * Modifies a custom control policy by calling UpdateControlPolicy.
   * 
   * @remarks
   * This topic provides an example on how to modify the name of the control policy `cp-jExXAqIYkwHN****` to `NewControlPolicy`.
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
   * Modifies a custom control policy by calling UpdateControlPolicy.
   * 
   * @remarks
   * This topic provides an example on how to modify the name of the control policy `cp-jExXAqIYkwHN****` to `NewControlPolicy`.
   * 
   * @param request - UpdateControlPolicyRequest
   * @returns UpdateControlPolicyResponse
   */
  async updateControlPolicy(request: $_model.UpdateControlPolicyRequest): Promise<$_model.UpdateControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateControlPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a folder by calling UpdateFolder.
   * 
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
   * Modifies the name of a folder by calling UpdateFolder.
   * 
   * @param request - UpdateFolderRequest
   * @returns UpdateFolderResponse
   */
  async updateFolder(request: $_model.UpdateFolderRequest): Promise<$_model.UpdateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

  /**
   * Updates the display name of a resource group.
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
   * Updates the display name of a resource group.
   * 
   * @param request - UpdateResourceGroupRequest
   * @returns UpdateResourceGroupResponse
   */
  async updateResourceGroup(request: $_model.UpdateResourceGroupRequest): Promise<$_model.UpdateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResourceGroupWithOptions(request, runtime);
  }

  /**
   * Updates the administrator settings of a resource group.
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
   * Updates the administrator settings of a resource group.
   * 
   * @param request - UpdateResourceGroupAdminSettingRequest
   * @returns UpdateResourceGroupAdminSettingResponse
   */
  async updateResourceGroupAdminSetting(request: $_model.UpdateResourceGroupAdminSettingRequest): Promise<$_model.UpdateResourceGroupAdminSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResourceGroupAdminSettingWithOptions(request, runtime);
  }

  /**
   * Updates the information of a RAM role.
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
   * Updates the information of a RAM role.
   * 
   * @param request - UpdateRoleRequest
   * @returns UpdateRoleResponse
   */
  async updateRole(request: $_model.UpdateRoleRequest): Promise<$_model.UpdateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRoleWithOptions(request, runtime);
  }

}
