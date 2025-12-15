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
    this._endpoint = this.getEndpoint("resourcedirectorymaster", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
      version: "2022-04-19",
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
   * 
   * @param request - AcceptHandshakeRequest
   * @returns AcceptHandshakeResponse
   */
  async acceptHandshake(request: $_model.AcceptHandshakeRequest): Promise<$_model.AcceptHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptHandshakeWithOptions(request, runtime);
  }

  /**
   * Adds a contact.
   * 
   * @param request - AddMessageContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMessageContactResponse
   */
  async addMessageContactWithOptions(request: $_model.AddMessageContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMessageContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.emailAddress)) {
      query["EmailAddress"] = request.emailAddress;
    }

    if (!$dara.isNull(request.messageTypes)) {
      query["MessageTypes"] = request.messageTypes;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMessageContact",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMessageContactResponse>(await this.callApi(params, req, runtime), new $_model.AddMessageContactResponse({}));
  }

  /**
   * Adds a contact.
   * 
   * @param request - AddMessageContactRequest
   * @returns AddMessageContactResponse
   */
  async addMessageContact(request: $_model.AddMessageContactRequest): Promise<$_model.AddMessageContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMessageContactWithOptions(request, runtime);
  }

  /**
   * Binds a contact to a resource directory, folder, or member.
   * 
   * @param request - AssociateMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateMembersResponse
   */
  async associateMembersWithOptions(request: $_model.AssociateMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.members)) {
      query["Members"] = request.members;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateMembers",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateMembersResponse>(await this.callApi(params, req, runtime), new $_model.AssociateMembersResponse({}));
  }

  /**
   * Binds a contact to a resource directory, folder, or member.
   * 
   * @param request - AssociateMembersRequest
   * @returns AssociateMembersResponse
   */
  async associateMembers(request: $_model.AssociateMembersRequest): Promise<$_model.AssociateMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateMembersWithOptions(request, runtime);
  }

  /**
   * Attaches an access control policy.
   * 
   * @remarks
   * After you attach a custom access control policy, the operations performed on resources by using members are limited by the policy. Make sure that the attached policy meets your expectations. Otherwise, your business may be affected.
   * By default, the system access control policy FullAliyunAccess is attached to each folder and member.
   * The access control policy that is attached to a folder also applies to all its subfolders and all members in the subfolders.
   * A maximum of 10 access control policies can be attached to a folder or member.
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
      version: "2022-04-19",
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
   * Attaches an access control policy.
   * 
   * @remarks
   * After you attach a custom access control policy, the operations performed on resources by using members are limited by the policy. Make sure that the attached policy meets your expectations. Otherwise, your business may be affected.
   * By default, the system access control policy FullAliyunAccess is attached to each folder and member.
   * The access control policy that is attached to a folder also applies to all its subfolders and all members in the subfolders.
   * A maximum of 10 access control policies can be attached to a folder or member.
   * 
   * @param request - AttachControlPolicyRequest
   * @returns AttachControlPolicyResponse
   */
  async attachControlPolicy(request: $_model.AttachControlPolicyRequest): Promise<$_model.AttachControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachControlPolicyWithOptions(request, runtime);
  }

  /**
   * Binds a mobile phone number to a member of the resource account type in a resource directory for security purposes.
   * 
   * @remarks
   * You can call this API operation only to bind a mobile phone number to a member of the resource account type. You cannot call this API operation to change the mobile phone number that is bound to a member of the resource account type.
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this API operation.
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
      version: "2022-04-19",
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
   * Binds a mobile phone number to a member of the resource account type in a resource directory for security purposes.
   * 
   * @remarks
   * You can call this API operation only to bind a mobile phone number to a member of the resource account type. You cannot call this API operation to change the mobile phone number that is bound to a member of the resource account type.
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this API operation.
   * 
   * @param request - BindSecureMobilePhoneRequest
   * @returns BindSecureMobilePhoneResponse
   */
  async bindSecureMobilePhone(request: $_model.BindSecureMobilePhoneRequest): Promise<$_model.BindSecureMobilePhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindSecureMobilePhoneWithOptions(request, runtime);
  }

  /**
   * Cancels the email address change of a member.
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
      version: "2022-04-19",
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
   * Cancels the email address change of a member.
   * 
   * @param request - CancelChangeAccountEmailRequest
   * @returns CancelChangeAccountEmailResponse
   */
  async cancelChangeAccountEmail(request: $_model.CancelChangeAccountEmailRequest): Promise<$_model.CancelChangeAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelChangeAccountEmailWithOptions(request, runtime);
  }

  /**
   * Cancels an invitation.
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
      version: "2022-04-19",
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
   * @param request - CancelHandshakeRequest
   * @returns CancelHandshakeResponse
   */
  async cancelHandshake(request: $_model.CancelHandshakeRequest): Promise<$_model.CancelHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelHandshakeWithOptions(request, runtime);
  }

  /**
   * Cancels the update of the mobile phone number or email address of a contact.
   * 
   * @param request - CancelMessageContactUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelMessageContactUpdateResponse
   */
  async cancelMessageContactUpdateWithOptions(request: $_model.CancelMessageContactUpdateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelMessageContactUpdateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.emailAddress)) {
      query["EmailAddress"] = request.emailAddress;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelMessageContactUpdate",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelMessageContactUpdateResponse>(await this.callApi(params, req, runtime), new $_model.CancelMessageContactUpdateResponse({}));
  }

  /**
   * Cancels the update of the mobile phone number or email address of a contact.
   * 
   * @param request - CancelMessageContactUpdateRequest
   * @returns CancelMessageContactUpdateResponse
   */
  async cancelMessageContactUpdate(request: $_model.CancelMessageContactUpdateRequest): Promise<$_model.CancelMessageContactUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelMessageContactUpdateWithOptions(request, runtime);
  }

  /**
   * Changes the email address that is bound to a member.
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
      version: "2022-04-19",
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
   * Changes the email address that is bound to a member.
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
      version: "2022-04-19",
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
   * 
   * @param request - CheckAccountDeleteRequest
   * @returns CheckAccountDeleteResponse
   */
  async checkAccountDelete(request: $_model.CheckAccountDeleteRequest): Promise<$_model.CheckAccountDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAccountDeleteWithOptions(request, runtime);
  }

  /**
   * Creates a custom access control policy.
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateControlPolicy",
      version: "2022-04-19",
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
   * Creates a custom access control policy.
   * 
   * @param request - CreateControlPolicyRequest
   * @returns CreateControlPolicyResponse
   */
  async createControlPolicy(request: $_model.CreateControlPolicyRequest): Promise<$_model.CreateControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createControlPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a folder.
   * 
   * @remarks
   * A maximum of five levels of folders can be created under the Root folder.
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFolder",
      version: "2022-04-19",
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
   * Creates a folder.
   * 
   * @remarks
   * A maximum of five levels of folders can be created under the Root folder.
   * 
   * @param request - CreateFolderRequest
   * @returns CreateFolderResponse
   */
  async createFolder(request: $_model.CreateFolderRequest): Promise<$_model.CreateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  /**
   * Creates a member of the resource account type.
   * 
   * @remarks
   * A member serves as a container for resources and is also an organizational unit in a resource directory. A member indicates a project or application. The resources of different members are isolated.
   * This topic provides an example on how to call the API operation to create a member in the `fd-r23M55****` folder. The display name of the member is `Dev`, and the prefix for the Alibaba Cloud account name of the member is `alice`.
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

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
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
      version: "2022-04-19",
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
   * This topic provides an example on how to call the API operation to create a member in the `fd-r23M55****` folder. The display name of the member is `Dev`, and the prefix for the Alibaba Cloud account name of the member is `alice`.
   * 
   * @param request - CreateResourceAccountRequest
   * @returns CreateResourceAccountResponse
   */
  async createResourceAccount(request: $_model.CreateResourceAccountRequest): Promise<$_model.CreateResourceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceAccountWithOptions(request, runtime);
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
      version: "2022-04-19",
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
   * Deletes a member of the resource account type.
   * 
   * @remarks
   * Before you delete a member, we recommend that you call the [CheckAccountDelete](~~CheckAccountDelete~~) and [GetAccountDeletionCheckResult](~~GetAccountDeletionCheckResult~~) operations to check whether the member meets deletion requirements. You can call the DeleteAccount operation to delete only members that meet the deletion requirements.
   * After you submit a deletion request for a member, you can call the [GetAccountDeletionStatus](~~GetAccountDeletionStatus~~) operation to query the deletion status of the member. After a member is deleted, the resources and data within the member are deleted, and you can no longer use the member to log on to the Alibaba Cloud Management Console. In addition, the member cannot be recovered. Proceed with caution. For more information about how to delete a member, see [Delete a member of the resource account type](https://help.aliyun.com/document_detail/446078.html).
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
      version: "2022-04-19",
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
   * Before you delete a member, we recommend that you call the [CheckAccountDelete](~~CheckAccountDelete~~) and [GetAccountDeletionCheckResult](~~GetAccountDeletionCheckResult~~) operations to check whether the member meets deletion requirements. You can call the DeleteAccount operation to delete only members that meet the deletion requirements.
   * After you submit a deletion request for a member, you can call the [GetAccountDeletionStatus](~~GetAccountDeletionStatus~~) operation to query the deletion status of the member. After a member is deleted, the resources and data within the member are deleted, and you can no longer use the member to log on to the Alibaba Cloud Management Console. In addition, the member cannot be recovered. Proceed with caution. For more information about how to delete a member, see [Delete a member of the resource account type](https://help.aliyun.com/document_detail/446078.html).
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a custom access control policy.
   * 
   * @remarks
   * If you want to delete a custom access control policy that is attached to folders or members, you must call the [DetachControlPolicy](~~DetachControlPolicy~~) operation to detach the policy before you delete it.
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
      version: "2022-04-19",
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
   * Deletes a custom access control policy.
   * 
   * @remarks
   * If you want to delete a custom access control policy that is attached to folders or members, you must call the [DetachControlPolicy](~~DetachControlPolicy~~) operation to detach the policy before you delete it.
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
   * Before you delete a folder, you must make sure that the folder does not contain members or subfolders.
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
      version: "2022-04-19",
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
   * Before you delete a folder, you must make sure that the folder does not contain members or subfolders.
   * 
   * @param request - DeleteFolderRequest
   * @returns DeleteFolderResponse
   */
  async deleteFolder(request: $_model.DeleteFolderRequest): Promise<$_model.DeleteFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  /**
   * Deletes a contact.
   * 
   * @param request - DeleteMessageContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMessageContactResponse
   */
  async deleteMessageContactWithOptions(request: $_model.DeleteMessageContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMessageContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.retainContactInMembers)) {
      query["RetainContactInMembers"] = request.retainContactInMembers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMessageContact",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMessageContactResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMessageContactResponse({}));
  }

  /**
   * Deletes a contact.
   * 
   * @param request - DeleteMessageContactRequest
   * @returns DeleteMessageContactResponse
   */
  async deleteMessageContact(request: $_model.DeleteMessageContactRequest): Promise<$_model.DeleteMessageContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMessageContactWithOptions(request, runtime);
  }

  /**
   * Removes a delegated administrator account for a trusted service.
   * 
   * @remarks
   * If the delegated administrator account that you want to remove has historical management tasks in the related trusted service, the trusted service may be affected after the delegated administrator account is removed. Therefore, proceed with caution.
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
      version: "2022-04-19",
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
   * Removes a delegated administrator account for a trusted service.
   * 
   * @remarks
   * If the delegated administrator account that you want to remove has historical management tasks in the related trusted service, the trusted service may be affected after the delegated administrator account is removed. Therefore, proceed with caution.
   * 
   * @param request - DeregisterDelegatedAdministratorRequest
   * @returns DeregisterDelegatedAdministratorResponse
   */
  async deregisterDelegatedAdministrator(request: $_model.DeregisterDelegatedAdministratorRequest): Promise<$_model.DeregisterDelegatedAdministratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deregisterDelegatedAdministratorWithOptions(request, runtime);
  }

  /**
   * Disables a resource directory. This operation cannot be undone. Therefore, proceed with caution.
   * 
   * @remarks
   * Before you disable a resource directory, you must make sure that the following requirements are met:
   * *   All members of the cloud account type in the resource directory are removed. You can call the [RemoveCloudAccount](~~RemoveCloudAccount~~) operation to remove a member of the cloud account type.
   * *   All folders except the Root folder are deleted from the resource directory. You can call the [DeleteFolder](~~DeleteFolder~~) operation to delete a folder.
   * 
   * @param request - DestroyResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DestroyResourceDirectoryResponse
   */
  async destroyResourceDirectoryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DestroyResourceDirectoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DestroyResourceDirectory",
      version: "2022-04-19",
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
   * Disables a resource directory. This operation cannot be undone. Therefore, proceed with caution.
   * 
   * @remarks
   * Before you disable a resource directory, you must make sure that the following requirements are met:
   * *   All members of the cloud account type in the resource directory are removed. You can call the [RemoveCloudAccount](~~RemoveCloudAccount~~) operation to remove a member of the cloud account type.
   * *   All folders except the Root folder are deleted from the resource directory. You can call the [DeleteFolder](~~DeleteFolder~~) operation to delete a folder.
   * @returns DestroyResourceDirectoryResponse
   */
  async destroyResourceDirectory(): Promise<$_model.DestroyResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.destroyResourceDirectoryWithOptions(runtime);
  }

  /**
   * Detaches an access control policy.
   * 
   * @remarks
   * After you detach an access control policy, the operations performed on resources by using members are not limited by the policy. Make sure that the detached policy meets your expectations. Otherwise, your business may be affected.
   * Both the system and custom access control policies can be detached. If an object has only one access control policy attached, the policy cannot be detached.
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
      version: "2022-04-19",
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
   * Detaches an access control policy.
   * 
   * @remarks
   * After you detach an access control policy, the operations performed on resources by using members are not limited by the policy. Make sure that the detached policy meets your expectations. Otherwise, your business may be affected.
   * Both the system and custom access control policies can be detached. If an object has only one access control policy attached, the policy cannot be detached.
   * 
   * @param request - DetachControlPolicyRequest
   * @returns DetachControlPolicyResponse
   */
  async detachControlPolicy(request: $_model.DetachControlPolicyRequest): Promise<$_model.DetachControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachControlPolicyWithOptions(request, runtime);
  }

  /**
   * Disables the Control Policy feature.
   * 
   * @remarks
   * After you disable the Control Policy feature, the system automatically detaches all access control policies that are attached to folders and members. The system does not delete these access control policies, but you cannot attach them to folders or members again.
   * > If you disable the Control Policy feature, the permissions of all folders and members in your resource directory are affected. Therefore, proceed with caution.
   * 
   * @param request - DisableControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableControlPolicyResponse
   */
  async disableControlPolicyWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DisableControlPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DisableControlPolicy",
      version: "2022-04-19",
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
   * Disables the Control Policy feature.
   * 
   * @remarks
   * After you disable the Control Policy feature, the system automatically detaches all access control policies that are attached to folders and members. The system does not delete these access control policies, but you cannot attach them to folders or members again.
   * > If you disable the Control Policy feature, the permissions of all folders and members in your resource directory are affected. Therefore, proceed with caution.
   * @returns DisableControlPolicyResponse
   */
  async disableControlPolicy(): Promise<$_model.DisableControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableControlPolicyWithOptions(runtime);
  }

  /**
   * Unbinds a contact from a resource directory, folder, or member.
   * 
   * @param request - DisassociateMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateMembersResponse
   */
  async disassociateMembersWithOptions(request: $_model.DisassociateMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisassociateMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.members)) {
      query["Members"] = request.members;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateMembers",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociateMembersResponse>(await this.callApi(params, req, runtime), new $_model.DisassociateMembersResponse({}));
  }

  /**
   * Unbinds a contact from a resource directory, folder, or member.
   * 
   * @param request - DisassociateMembersRequest
   * @returns DisassociateMembersResponse
   */
  async disassociateMembers(request: $_model.DisassociateMembersRequest): Promise<$_model.DisassociateMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateMembersWithOptions(request, runtime);
  }

  /**
   * Enables the Control Policy feature.
   * 
   * @remarks
   * The Control Policy feature provided by the Resource Directory service allows you to manage the permission boundaries of the folders or members in your resource directory in a centralized manner. This feature is implemented based on the resource directory. You can use this feature to develop common or dedicated rules for access control. The Control Policy feature does not grant permissions but only defines permission boundaries. A member in a resource directory can be used to access resources only after it is granted the required permissions by using the Resource Access Management (RAM) service. For more information, see [Overview of the Control Policy feature](https://help.aliyun.com/document_detail/178671.html).
   * 
   * @param request - EnableControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableControlPolicyResponse
   */
  async enableControlPolicyWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.EnableControlPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableControlPolicy",
      version: "2022-04-19",
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
   * The Control Policy feature provided by the Resource Directory service allows you to manage the permission boundaries of the folders or members in your resource directory in a centralized manner. This feature is implemented based on the resource directory. You can use this feature to develop common or dedicated rules for access control. The Control Policy feature does not grant permissions but only defines permission boundaries. A member in a resource directory can be used to access resources only after it is granted the required permissions by using the Resource Access Management (RAM) service. For more information, see [Overview of the Control Policy feature](https://help.aliyun.com/document_detail/178671.html).
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
   * You can use the current account or a newly created account to enable a resource directory. For more information, see [Enable a resource directory](https://help.aliyun.com/document_detail/111215.html).
   * 
   * @param request - EnableResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableResourceDirectoryResponse
   */
  async enableResourceDirectoryWithOptions(request: $_model.EnableResourceDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableResourceDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

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
      version: "2022-04-19",
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
   * You can use the current account or a newly created account to enable a resource directory. For more information, see [Enable a resource directory](https://help.aliyun.com/document_detail/111215.html).
   * 
   * @param request - EnableResourceDirectoryRequest
   * @returns EnableResourceDirectoryResponse
   */
  async enableResourceDirectory(request: $_model.EnableResourceDirectoryRequest): Promise<$_model.EnableResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableResourceDirectoryWithOptions(request, runtime);
  }

  /**
   * Queries the information of a member.
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
      version: "2022-04-19",
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
   * Queries the information of a member.
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
   * After you call the [CheckAccountDelete](~~CheckAccountDelete~~) operation to perform a member deletion check, you can call the [GetAccountDeletionCheckResult](~~GetAccountDeletionCheckResult~~) operation to query the check result. If the check result shows that the member meets deletion requirements, you can delete the member. Otherwise, you need to first modify the items that do not meet requirements.
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
      version: "2022-04-19",
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
   * After you call the [CheckAccountDelete](~~CheckAccountDelete~~) operation to perform a member deletion check, you can call the [GetAccountDeletionCheckResult](~~GetAccountDeletionCheckResult~~) operation to query the check result. If the check result shows that the member meets deletion requirements, you can delete the member. Otherwise, you need to first modify the items that do not meet requirements.
   * 
   * @param request - GetAccountDeletionCheckResultRequest
   * @returns GetAccountDeletionCheckResultResponse
   */
  async getAccountDeletionCheckResult(request: $_model.GetAccountDeletionCheckResultRequest): Promise<$_model.GetAccountDeletionCheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountDeletionCheckResultWithOptions(request, runtime);
  }

  /**
   * Queries the deletion status of a member.
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
      version: "2022-04-19",
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
   * Queries the deletion status of a member.
   * 
   * @param request - GetAccountDeletionStatusRequest
   * @returns GetAccountDeletionStatusResponse
   */
  async getAccountDeletionStatus(request: $_model.GetAccountDeletionStatusRequest): Promise<$_model.GetAccountDeletionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountDeletionStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of an access control policy.
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
      version: "2022-04-19",
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
   * Queries the details of an access control policy.
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
      version: "2022-04-19",
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
   * Queries the information about a folder.
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
      version: "2022-04-19",
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
   * Queries the information about a folder.
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
      version: "2022-04-19",
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
   * @param request - GetHandshakeRequest
   * @returns GetHandshakeResponse
   */
  async getHandshake(request: $_model.GetHandshakeRequest): Promise<$_model.GetHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHandshakeWithOptions(request, runtime);
  }

  /**
   * Queries the information about a contact.
   * 
   * @param request - GetMessageContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageContactResponse
   */
  async getMessageContactWithOptions(request: $_model.GetMessageContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMessageContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMessageContact",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMessageContactResponse>(await this.callApi(params, req, runtime), new $_model.GetMessageContactResponse({}));
  }

  /**
   * Queries the information about a contact.
   * 
   * @param request - GetMessageContactRequest
   * @returns GetMessageContactResponse
   */
  async getMessageContact(request: $_model.GetMessageContactRequest): Promise<$_model.GetMessageContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMessageContactWithOptions(request, runtime);
  }

  /**
   * Queries the deletion status of a contact.
   * 
   * @param request - GetMessageContactDeletionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageContactDeletionStatusResponse
   */
  async getMessageContactDeletionStatusWithOptions(request: $_model.GetMessageContactDeletionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMessageContactDeletionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMessageContactDeletionStatus",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMessageContactDeletionStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetMessageContactDeletionStatusResponse({}));
  }

  /**
   * Queries the deletion status of a contact.
   * 
   * @param request - GetMessageContactDeletionStatusRequest
   * @returns GetMessageContactDeletionStatusResponse
   */
  async getMessageContactDeletionStatus(request: $_model.GetMessageContactDeletionStatusRequest): Promise<$_model.GetMessageContactDeletionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMessageContactDeletionStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information of a billing account.
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
      version: "2022-04-19",
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
   * Queries the information of a billing account.
   * 
   * @param request - GetPayerForAccountRequest
   * @returns GetPayerForAccountResponse
   */
  async getPayerForAccount(request: $_model.GetPayerForAccountRequest): Promise<$_model.GetPayerForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPayerForAccountWithOptions(request, runtime);
  }

  /**
   * Queries the information of a resource directory. If you use a management account to call this API operation, the system returns the information of the resource directory that is enabled by using the management account. If you use a member to call this operation, the system returns the information of
   * 
   * @param request - GetResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceDirectoryResponse
   */
  async getResourceDirectoryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceDirectoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceDirectory",
      version: "2022-04-19",
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
   * @returns GetResourceDirectoryResponse
   */
  async getResourceDirectory(): Promise<$_model.GetResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceDirectoryWithOptions(runtime);
  }

  /**
   * Invites an account to join a resource directory.
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

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
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
      version: "2022-04-19",
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
   * @param request - InviteAccountToResourceDirectoryRequest
   * @returns InviteAccountToResourceDirectoryResponse
   */
  async inviteAccountToResourceDirectory(request: $_model.InviteAccountToResourceDirectoryRequest): Promise<$_model.InviteAccountToResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inviteAccountToResourceDirectoryWithOptions(request, runtime);
  }

  /**
   * Queries a list of members in a resource directory.
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
      action: "ListAccounts",
      version: "2022-04-19",
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
   * Queries a list of members in a resource directory.
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
      version: "2022-04-19",
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
   * Queries the information of all the parent folders of a specified folder.
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
      version: "2022-04-19",
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
   * Queries the information of all the parent folders of a specified folder.
   * 
   * @param request - ListAncestorsRequest
   * @returns ListAncestorsResponse
   */
  async listAncestors(request: $_model.ListAncestorsRequest): Promise<$_model.ListAncestorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAncestorsWithOptions(request, runtime);
  }

  /**
   * Queries a list of members who have the permission to query member information in a resource directory.
   * 
   * @remarks
   * The permission to query member information refers to the permission to call the [GetAccount](~~GetAccount~~) API operation.
   * 
   * @param request - ListAuthorizedAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizedAccountsResponse
   */
  async listAuthorizedAccountsWithOptions(request: $_model.ListAuthorizedAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizedAccountsResponse> {
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
      action: "ListAuthorizedAccounts",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizedAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizedAccountsResponse({}));
  }

  /**
   * Queries a list of members who have the permission to query member information in a resource directory.
   * 
   * @remarks
   * The permission to query member information refers to the permission to call the [GetAccount](~~GetAccount~~) API operation.
   * 
   * @param request - ListAuthorizedAccountsRequest
   * @returns ListAuthorizedAccountsResponse
   */
  async listAuthorizedAccounts(request: $_model.ListAuthorizedAccountsRequest): Promise<$_model.ListAuthorizedAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizedAccountsWithOptions(request, runtime);
  }

  /**
   * Queries a list of folders that have permissions to query subfolder information in a resource directory.
   * 
   * @remarks
   * The permissions to query subfolder information refer to the permissions to call the [ListAccountsForParent](~~ListAccountsForParent~~) and [ListFoldersForParent](~~ListFoldersForParent~~) API operations.
   * 
   * @param request - ListAuthorizedFoldersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizedFoldersResponse
   */
  async listAuthorizedFoldersWithOptions(request: $_model.ListAuthorizedFoldersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizedFoldersResponse> {
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
      action: "ListAuthorizedFolders",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizedFoldersResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizedFoldersResponse({}));
  }

  /**
   * Queries a list of folders that have permissions to query subfolder information in a resource directory.
   * 
   * @remarks
   * The permissions to query subfolder information refer to the permissions to call the [ListAccountsForParent](~~ListAccountsForParent~~) and [ListFoldersForParent](~~ListFoldersForParent~~) API operations.
   * 
   * @param request - ListAuthorizedFoldersRequest
   * @returns ListAuthorizedFoldersResponse
   */
  async listAuthorizedFolders(request: $_model.ListAuthorizedFoldersRequest): Promise<$_model.ListAuthorizedFoldersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizedFoldersWithOptions(request, runtime);
  }

  /**
   * Queries access control policies.
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListControlPolicies",
      version: "2022-04-19",
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
   * @param request - ListControlPoliciesRequest
   * @returns ListControlPoliciesResponse
   */
  async listControlPolicies(request: $_model.ListControlPoliciesRequest): Promise<$_model.ListControlPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listControlPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the access control policies that are attached to a folder or member.
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
      version: "2022-04-19",
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
   * Queries the access control policies that are attached to a folder or member.
   * 
   * @param request - ListControlPolicyAttachmentsForTargetRequest
   * @returns ListControlPolicyAttachmentsForTargetResponse
   */
  async listControlPolicyAttachmentsForTarget(request: $_model.ListControlPolicyAttachmentsForTargetRequest): Promise<$_model.ListControlPolicyAttachmentsForTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listControlPolicyAttachmentsForTargetWithOptions(request, runtime);
  }

  /**
   * Queries delegated administrator accounts.
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
      version: "2022-04-19",
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
   * Queries delegated administrator accounts.
   * 
   * @param request - ListDelegatedAdministratorsRequest
   * @returns ListDelegatedAdministratorsResponse
   */
  async listDelegatedAdministrators(request: $_model.ListDelegatedAdministratorsRequest): Promise<$_model.ListDelegatedAdministratorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDelegatedAdministratorsWithOptions(request, runtime);
  }

  /**
   * Queries the trusted services for which a member is specified as a delegated administrator account.
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
      version: "2022-04-19",
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
   * Queries the trusted services for which a member is specified as a delegated administrator account.
   * 
   * @param request - ListDelegatedServicesForAccountRequest
   * @returns ListDelegatedServicesForAccountResponse
   */
  async listDelegatedServicesForAccount(request: $_model.ListDelegatedServicesForAccountRequest): Promise<$_model.ListDelegatedServicesForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDelegatedServicesForAccountWithOptions(request, runtime);
  }

  /**
   * Queries the information of all subfolders of a folder.
   * 
   * @remarks
   * You can call this API operation to view the information of only the first-level subfolders of a folder.
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFoldersForParent",
      version: "2022-04-19",
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
   * Queries the information of all subfolders of a folder.
   * 
   * @remarks
   * You can call this API operation to view the information of only the first-level subfolders of a folder.
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
      version: "2022-04-19",
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
      version: "2022-04-19",
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
   * Queries the mobile phone number or email address to be verified for a contact.
   * 
   * @param request - ListMessageContactVerificationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMessageContactVerificationsResponse
   */
  async listMessageContactVerificationsWithOptions(request: $_model.ListMessageContactVerificationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMessageContactVerificationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
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
      action: "ListMessageContactVerifications",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMessageContactVerificationsResponse>(await this.callApi(params, req, runtime), new $_model.ListMessageContactVerificationsResponse({}));
  }

  /**
   * Queries the mobile phone number or email address to be verified for a contact.
   * 
   * @param request - ListMessageContactVerificationsRequest
   * @returns ListMessageContactVerificationsResponse
   */
  async listMessageContactVerifications(request: $_model.ListMessageContactVerificationsRequest): Promise<$_model.ListMessageContactVerificationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMessageContactVerificationsWithOptions(request, runtime);
  }

  /**
   * Queries contacts.
   * 
   * @param request - ListMessageContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMessageContactsResponse
   */
  async listMessageContactsWithOptions(request: $_model.ListMessageContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMessageContactsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.member)) {
      query["Member"] = request.member;
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
      action: "ListMessageContacts",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMessageContactsResponse>(await this.callApi(params, req, runtime), new $_model.ListMessageContactsResponse({}));
  }

  /**
   * Queries contacts.
   * 
   * @param request - ListMessageContactsRequest
   * @returns ListMessageContactsResponse
   */
  async listMessageContacts(request: $_model.ListMessageContactsRequest): Promise<$_model.ListMessageContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMessageContactsWithOptions(request, runtime);
  }

  /**
   * Queries tag keys.
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
      version: "2022-04-19",
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
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to the members in a resource directory.
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
      version: "2022-04-19",
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
   * Queries the tags that are added to the members in a resource directory.
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
      version: "2022-04-19",
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
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Queries the objects to which an access control policy is attached.
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
      version: "2022-04-19",
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
   * Queries the objects to which an access control policy is attached.
   * 
   * @param request - ListTargetAttachmentsForControlPolicyRequest
   * @returns ListTargetAttachmentsForControlPolicyResponse
   */
  async listTargetAttachmentsForControlPolicy(request: $_model.ListTargetAttachmentsForControlPolicyRequest): Promise<$_model.ListTargetAttachmentsForControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTargetAttachmentsForControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the trusted services that are enabled within a management account or delegated administrator account.
   * 
   * @remarks
   * Only a management account or delegated administrator account can be used to call this operation.
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
      version: "2022-04-19",
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
   * Queries the trusted services that are enabled within a management account or delegated administrator account.
   * 
   * @remarks
   * Only a management account or delegated administrator account can be used to call this operation.
   * 
   * @param request - ListTrustedServiceStatusRequest
   * @returns ListTrustedServiceStatusResponse
   */
  async listTrustedServiceStatus(request: $_model.ListTrustedServiceStatusRequest): Promise<$_model.ListTrustedServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTrustedServiceStatusWithOptions(request, runtime);
  }

  /**
   * Moves a member from a folder to another.
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
      version: "2022-04-19",
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
   * Moves a member from a folder to another.
   * 
   * @param request - MoveAccountRequest
   * @returns MoveAccountResponse
   */
  async moveAccount(request: $_model.MoveAccountRequest): Promise<$_model.MoveAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveAccountWithOptions(request, runtime);
  }

  /**
   * Checks whether a management account or member can be used as a main financial account.
   * 
   * @param request - PrecheckForConsolidatedBillingAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PrecheckForConsolidatedBillingAccountResponse
   */
  async precheckForConsolidatedBillingAccountWithOptions(request: $_model.PrecheckForConsolidatedBillingAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PrecheckForConsolidatedBillingAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billingAccountId)) {
      query["BillingAccountId"] = request.billingAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PrecheckForConsolidatedBillingAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PrecheckForConsolidatedBillingAccountResponse>(await this.callApi(params, req, runtime), new $_model.PrecheckForConsolidatedBillingAccountResponse({}));
  }

  /**
   * Checks whether a management account or member can be used as a main financial account.
   * 
   * @param request - PrecheckForConsolidatedBillingAccountRequest
   * @returns PrecheckForConsolidatedBillingAccountResponse
   */
  async precheckForConsolidatedBillingAccount(request: $_model.PrecheckForConsolidatedBillingAccountRequest): Promise<$_model.PrecheckForConsolidatedBillingAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.precheckForConsolidatedBillingAccountWithOptions(request, runtime);
  }

  /**
   * Specifies a member in a resource directory as a delegated administrator account of a trusted service.
   * 
   * @remarks
   * The delegated administrator account can be used to access the information of the resource directory and view the structure and members of the resource directory. The delegated administrator account can also be used to perform service-related management operations in the trusted service on behalf of the management account of the resource directory. When you call this operation, you must take note of the following limits:
   * *   Only some trusted services support delegated administrator accounts. For more information, see [Supported trusted services](https://help.aliyun.com/document_detail/208133.html).
   * *   Only the management account of a resource directory or an authorized RAM user or RAM role of the management account can be used to call this operation.
   * *   The number of delegated administrator accounts that are allowed for a trusted service is defined by the trusted service.
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
      version: "2022-04-19",
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
   * Specifies a member in a resource directory as a delegated administrator account of a trusted service.
   * 
   * @remarks
   * The delegated administrator account can be used to access the information of the resource directory and view the structure and members of the resource directory. The delegated administrator account can also be used to perform service-related management operations in the trusted service on behalf of the management account of the resource directory. When you call this operation, you must take note of the following limits:
   * *   Only some trusted services support delegated administrator accounts. For more information, see [Supported trusted services](https://help.aliyun.com/document_detail/208133.html).
   * *   Only the management account of a resource directory or an authorized RAM user or RAM role of the management account can be used to call this operation.
   * *   The number of delegated administrator accounts that are allowed for a trusted service is defined by the trusted service.
   * 
   * @param request - RegisterDelegatedAdministratorRequest
   * @returns RegisterDelegatedAdministratorResponse
   */
  async registerDelegatedAdministrator(request: $_model.RegisterDelegatedAdministratorRequest): Promise<$_model.RegisterDelegatedAdministratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerDelegatedAdministratorWithOptions(request, runtime);
  }

  /**
   * Removes a member of the cloud account type.
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
      version: "2022-04-19",
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
   * Removes a member of the cloud account type.
   * 
   * @param request - RemoveCloudAccountRequest
   * @returns RemoveCloudAccountResponse
   */
  async removeCloudAccount(request: $_model.RemoveCloudAccountRequest): Promise<$_model.RemoveCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeCloudAccountWithOptions(request, runtime);
  }

  /**
   * Resends a verification email for the email address change of a member.
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
      version: "2022-04-19",
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
   * Resends a verification email for the email address change of a member.
   * 
   * @param request - RetryChangeAccountEmailRequest
   * @returns RetryChangeAccountEmailResponse
   */
  async retryChangeAccountEmail(request: $_model.RetryChangeAccountEmailRequest): Promise<$_model.RetryChangeAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryChangeAccountEmailWithOptions(request, runtime);
  }

  /**
   * Sends verification information to the email address of a contact.
   * 
   * @param request - SendEmailVerificationForMessageContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendEmailVerificationForMessageContactResponse
   */
  async sendEmailVerificationForMessageContactWithOptions(request: $_model.SendEmailVerificationForMessageContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendEmailVerificationForMessageContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.emailAddress)) {
      query["EmailAddress"] = request.emailAddress;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendEmailVerificationForMessageContact",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendEmailVerificationForMessageContactResponse>(await this.callApi(params, req, runtime), new $_model.SendEmailVerificationForMessageContactResponse({}));
  }

  /**
   * Sends verification information to the email address of a contact.
   * 
   * @param request - SendEmailVerificationForMessageContactRequest
   * @returns SendEmailVerificationForMessageContactResponse
   */
  async sendEmailVerificationForMessageContact(request: $_model.SendEmailVerificationForMessageContactRequest): Promise<$_model.SendEmailVerificationForMessageContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendEmailVerificationForMessageContactWithOptions(request, runtime);
  }

  /**
   * Sends verification information to the mobile phone number of a contact.
   * 
   * @param request - SendPhoneVerificationForMessageContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendPhoneVerificationForMessageContactResponse
   */
  async sendPhoneVerificationForMessageContactWithOptions(request: $_model.SendPhoneVerificationForMessageContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendPhoneVerificationForMessageContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendPhoneVerificationForMessageContact",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendPhoneVerificationForMessageContactResponse>(await this.callApi(params, req, runtime), new $_model.SendPhoneVerificationForMessageContactResponse({}));
  }

  /**
   * Sends verification information to the mobile phone number of a contact.
   * 
   * @param request - SendPhoneVerificationForMessageContactRequest
   * @returns SendPhoneVerificationForMessageContactResponse
   */
  async sendPhoneVerificationForMessageContact(request: $_model.SendPhoneVerificationForMessageContactRequest): Promise<$_model.SendPhoneVerificationForMessageContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendPhoneVerificationForMessageContactWithOptions(request, runtime);
  }

  /**
   * Sends a verification code to the mobile phone number that you want to bind to a member of the resource account type in a resource directory for security purposes.
   * 
   * @remarks
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this API operation.
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
      version: "2022-04-19",
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
   * Sends a verification code to the mobile phone number that you want to bind to a member of the resource account type in a resource directory for security purposes.
   * 
   * @remarks
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this API operation.
   * 
   * @param request - SendVerificationCodeForBindSecureMobilePhoneRequest
   * @returns SendVerificationCodeForBindSecureMobilePhoneResponse
   */
  async sendVerificationCodeForBindSecureMobilePhone(request: $_model.SendVerificationCodeForBindSecureMobilePhoneRequest): Promise<$_model.SendVerificationCodeForBindSecureMobilePhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendVerificationCodeForBindSecureMobilePhoneWithOptions(request, runtime);
  }

  /**
   * Sends a verification code to the mobile phone number bound to a newly created account when you use the account to enable a resource directory.
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
      version: "2022-04-19",
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
   * Sends a verification code to the mobile phone number bound to a newly created account when you use the account to enable a resource directory.
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
   * Enables or disables the member deletion feature.
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
      version: "2022-04-19",
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
   * Enables or disables the member deletion feature.
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
   * Enables or disables the Member Display Name Synchronization feature.
   * 
   * @param request - SetMemberDisplayNameSyncStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetMemberDisplayNameSyncStatusResponse
   */
  async setMemberDisplayNameSyncStatusWithOptions(request: $_model.SetMemberDisplayNameSyncStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetMemberDisplayNameSyncStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetMemberDisplayNameSyncStatus",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetMemberDisplayNameSyncStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetMemberDisplayNameSyncStatusResponse({}));
  }

  /**
   * Enables or disables the Member Display Name Synchronization feature.
   * 
   * @param request - SetMemberDisplayNameSyncStatusRequest
   * @returns SetMemberDisplayNameSyncStatusResponse
   */
  async setMemberDisplayNameSyncStatus(request: $_model.SetMemberDisplayNameSyncStatusRequest): Promise<$_model.SetMemberDisplayNameSyncStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setMemberDisplayNameSyncStatusWithOptions(request, runtime);
  }

  /**
   * Adds tags to the members in a resource directory.
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
      version: "2022-04-19",
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
   * Adds tags to the members in a resource directory.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from the members in a resource directory.
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
      version: "2022-04-19",
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
   * Removes tags from the members in a resource directory.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Changes the display name of a member, or switches the type of a member.
   * 
   * @remarks
   *   To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this operation.
   * *   Before you switch the type of a member from resource account to cloud account, make sure that specific conditions are met. For more information about the conditions, see [Switch a resource account to a cloud account](https://help.aliyun.com/document_detail/111233.html).
   * *   Before you switch the type of a member from cloud account to resource account, make sure that specific conditions are met. For more information about the conditions, see [Switch a cloud account to a resource account](https://help.aliyun.com/document_detail/209980.html).
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

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
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
      version: "2022-04-19",
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
   * Changes the display name of a member, or switches the type of a member.
   * 
   * @remarks
   *   To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this operation.
   * *   Before you switch the type of a member from resource account to cloud account, make sure that specific conditions are met. For more information about the conditions, see [Switch a resource account to a cloud account](https://help.aliyun.com/document_detail/111233.html).
   * *   Before you switch the type of a member from cloud account to resource account, make sure that specific conditions are met. For more information about the conditions, see [Switch a cloud account to a resource account](https://help.aliyun.com/document_detail/209980.html).
   * 
   * @param request - UpdateAccountRequest
   * @returns UpdateAccountResponse
   */
  async updateAccount(request: $_model.UpdateAccountRequest): Promise<$_model.UpdateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAccountWithOptions(request, runtime);
  }

  /**
   * Updates a custom access control policy.
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
      version: "2022-04-19",
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
   * Updates a custom access control policy.
   * 
   * @param request - UpdateControlPolicyRequest
   * @returns UpdateControlPolicyResponse
   */
  async updateControlPolicy(request: $_model.UpdateControlPolicyRequest): Promise<$_model.UpdateControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateControlPolicyWithOptions(request, runtime);
  }

  /**
   * Changes the name of a folder.
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
      version: "2022-04-19",
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
   * Changes the name of a folder.
   * 
   * @param request - UpdateFolderRequest
   * @returns UpdateFolderResponse
   */
  async updateFolder(request: $_model.UpdateFolderRequest): Promise<$_model.UpdateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

  /**
   * Updates a contact.
   * 
   * @param request - UpdateMessageContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMessageContactResponse
   */
  async updateMessageContactWithOptions(request: $_model.UpdateMessageContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMessageContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.emailAddress)) {
      query["EmailAddress"] = request.emailAddress;
    }

    if (!$dara.isNull(request.messageTypes)) {
      query["MessageTypes"] = request.messageTypes;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMessageContact",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMessageContactResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMessageContactResponse({}));
  }

  /**
   * Updates a contact.
   * 
   * @param request - UpdateMessageContactRequest
   * @returns UpdateMessageContactResponse
   */
  async updateMessageContact(request: $_model.UpdateMessageContactRequest): Promise<$_model.UpdateMessageContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMessageContactWithOptions(request, runtime);
  }

  /**
   * Updates the billing account of a member.
   * 
   * @param request - UpdatePayerForAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePayerForAccountResponse
   */
  async updatePayerForAccountWithOptions(request: $_model.UpdatePayerForAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePayerForAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.payerAccountId)) {
      query["PayerAccountId"] = request.payerAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePayerForAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePayerForAccountResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePayerForAccountResponse({}));
  }

  /**
   * Updates the billing account of a member.
   * 
   * @param request - UpdatePayerForAccountRequest
   * @returns UpdatePayerForAccountResponse
   */
  async updatePayerForAccount(request: $_model.UpdatePayerForAccountRequest): Promise<$_model.UpdatePayerForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePayerForAccountWithOptions(request, runtime);
  }

}
