// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthConditions extends $dara.Model {
  /**
   * @remarks
   * The key of the authentication condition.
   * 
   * @example
   * acs:SourceIp
   */
  conditionKey?: string;
  /**
   * @remarks
   * The list of values corresponding to the authentication condition key.
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
   * The identity identifier used for authentication in the user request, as follows:
   * 
   * - RAM user: The UID of the RAM user.
   * 
   * - RAM role: The role name and role session name (for example, RoleName:RoleSessionName).
   * 
   * - SSO federated identity: The identity provider type and name (for example, saml-provider/AzureAD).
   * 
   * @example
   * 28877424437521****
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account UID of the identity used for authentication in the user request.
   * 
   * @example
   * 196813200012****
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The identity type used for authentication in the user request.
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
   * The entity type to which the policy is attached.
   * 
   * @example
   * RamUser
   */
  attachedEntityType?: string;
  /**
   * @remarks
   * The scope to which the policy is attached.
   * 
   * @example
   * Account
   */
  attachedScope?: string;
  /**
   * @remarks
   * The policy effect.
   * 
   * @example
   * Deny
   */
  effect?: string;
  /**
   * @remarks
   * The policy name, as follows:
   * 
   * - Control policy: The control policy ID.
   * 
   * - RAM access policy: The access policy name.
   * 
   * @example
   * MyPolicyName
   */
  policyIdentifier?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The policy version number.
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
   * The action used for authentication in the user request.
   * 
   * @example
   * ram:DecodeDiagnosticMessage
   */
  authAction?: string;
  /**
   * @remarks
   * The list of conditions used for authentication in the user request.
   */
  authConditions?: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthConditions[];
  /**
   * @remarks
   * The principal used for authentication in the user request.
   */
  authPrincipal?: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthPrincipal;
  /**
   * @remarks
   * The resource used for authentication in the user request.
   * 
   * @example
   * *
   */
  authResource?: string;
  /**
   * @remarks
   * Indicates whether the denial is explicit.
   * 
   * @example
   * true
   */
  explicitDeny?: boolean;
  /**
   * @remarks
   * The list of policies matched during authentication.
   */
  matchedPolicies?: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageMatchedPolicies[];
  /**
   * @remarks
   * The policy type that caused the permission denial.
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
   * The decoded diagnostic message.
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

