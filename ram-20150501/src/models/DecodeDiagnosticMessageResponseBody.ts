// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthConditions extends $dara.Model {
  /**
   * @remarks
   * The key of the condition.
   * 
   * @example
   * acs:SourceIp
   */
  conditionKey?: string;
  /**
   * @remarks
   * The values that correspond to the key.
   */
  conditionValues?: string[];
  static names(): { [key: string]: string } {
    return {
      conditionKey: 'ConditionKey',
      conditionValues: 'ConditionValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionKey: 'string',
      conditionValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.conditionValues)) {
      $dara.Model.validateArray(this.conditionValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthPrincipal extends $dara.Model {
  /**
   * @remarks
   * The identity.
   * 
   * *   If the operator is a RAM user, the ID of the user is displayed.
   * *   If the operator is a RAM role, the name and session name of the role are displayed. Example: RoleName:RoleSessionName.
   * *   If the operator is an SSO federated identity, the type and name of the identity provider (IdP) are displayed. Example: saml-provider/AzureAD.
   * 
   * @example
   * 28877424437521****
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the identity belongs.
   * 
   * @example
   * 196813200012****
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The identity type that is used for authentication in the request.
   * 
   * Valid values:
   * 
   * *   SubUser: RAM user
   * *   AssumedRoleUser: RAM role
   * *   Federated: SSO federated identity
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  static names(): { [key: string]: string } {
    return {
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageMatchedPolicies extends $dara.Model {
  /**
   * @remarks
   * The type of the entity to which the policy is attached.
   * 
   * Valid values:
   * 
   * *   RamUser: RAM user
   * *   RamRole: RAM role
   * *   ResourceDirectoryTarget: entity in a resource directory
   * *   RamGroup: RAM user group
   * 
   * @example
   * RamUser
   */
  attachedEntityType?: string;
  /**
   * @remarks
   * The authorization scope of the policy.
   * 
   * Valid values:
   * 
   * *   Account: Alibaba Cloud account
   * *   Folder: folder in the resource directory
   * *   ResourceGroup: resource group
   * 
   * @example
   * Account
   */
  attachedScope?: string;
  /**
   * @remarks
   * The effect of the policy.
   * 
   * Valid values:
   * 
   * *   Deny
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Allow
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Deny
   */
  effect?: string;
  /**
   * @remarks
   * The identifier of the policy.
   * 
   * *   Control policy: the ID of the control policy
   * *   RAM policy: the name of the policy
   * 
   * @example
   * MyPolicyName
   */
  policyIdentifier?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * Valid values:
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The version number of the policy.
   * 
   * > Only custom policies have version numbers.
   * 
   * @example
   * v1
   */
  policyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      attachedEntityType: 'AttachedEntityType',
      attachedScope: 'AttachedScope',
      effect: 'Effect',
      policyIdentifier: 'PolicyIdentifier',
      policyType: 'PolicyType',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedEntityType: 'string',
      attachedScope: 'string',
      effect: 'string',
      policyIdentifier: 'string',
      policyType: 'string',
      policyVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessage extends $dara.Model {
  /**
   * @remarks
   * The operation that is used for authentication in the request.
   * 
   * @example
   * ram:DecodeDiagnosticMessage
   */
  authAction?: string;
  /**
   * @remarks
   * The conditions that are used for authentication in the request.
   */
  authConditions?: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthConditions[];
  /**
   * @remarks
   * The operator that is used for authentication in the request.
   */
  authPrincipal?: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthPrincipal;
  /**
   * @remarks
   * The resource that is used for authentication in the request.
   * 
   * @example
   * *
   */
  authResource?: string;
  /**
   * @remarks
   * Indicates whether the access denied error is caused by an explicit deny.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  explicitDeny?: boolean;
  /**
   * @remarks
   * The policies that are matched.
   */
  matchedPolicies?: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageMatchedPolicies[];
  /**
   * @remarks
   * The type of the policy that causes the access denied error.
   * 
   * Valid values:
   * 
   * *   AssumeRolePolicy: role-specific trust policy
   * *   ControlPolicy: control policy
   * *   AccountLevelIdentityBasedPolicy: identity-based policy at the account level
   * *   ResourceGroupLevelIdentityBasedPolicy: identity-based policy at the resource group level
   * *   SessionPolicy: session policy
   * 
   * @example
   * AccountLevelIdentityBasedPolicy
   */
  noPermissionPolicyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authConditions: 'AuthConditions',
      authPrincipal: 'AuthPrincipal',
      authResource: 'AuthResource',
      explicitDeny: 'ExplicitDeny',
      matchedPolicies: 'MatchedPolicies',
      noPermissionPolicyType: 'NoPermissionPolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authConditions: { 'type': 'array', 'itemType': DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthConditions },
      authPrincipal: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthPrincipal,
      authResource: 'string',
      explicitDeny: 'boolean',
      matchedPolicies: { 'type': 'array', 'itemType': DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageMatchedPolicies },
      noPermissionPolicyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authConditions)) {
      $dara.Model.validateArray(this.authConditions);
    }
    if(this.authPrincipal && typeof (this.authPrincipal as any).validate === 'function') {
      (this.authPrincipal as any).validate();
    }
    if(Array.isArray(this.matchedPolicies)) {
      $dara.Model.validateArray(this.matchedPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeDiagnosticMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The decoded diagnostic information.
   */
  decodedDiagnosticMessage?: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D2331703-AADF-5564-BA9B-26CD51A33BA0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      decodedDiagnosticMessage: 'DecodedDiagnosticMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decodedDiagnosticMessage: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.decodedDiagnosticMessage && typeof (this.decodedDiagnosticMessage as any).validate === 'function') {
      (this.decodedDiagnosticMessage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

