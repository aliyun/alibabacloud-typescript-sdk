// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthConditions } from "./DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthConditions";
import { DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthPrincipal } from "./DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthPrincipal";
import { DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageMatchedPolicies } from "./DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageMatchedPolicies";


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

