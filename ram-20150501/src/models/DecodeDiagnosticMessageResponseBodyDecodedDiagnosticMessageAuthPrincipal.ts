// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

