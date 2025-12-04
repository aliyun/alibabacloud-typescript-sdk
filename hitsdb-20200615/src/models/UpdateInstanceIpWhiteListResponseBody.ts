// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceIpWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {"AuthAction":"xxx","AuthPrincipalDisplayName":"222","AuthPrincipalOwnerId":"111","AuthPrincipalType":"SubUser",,"NoPermissionType":"ImplicitDeny","PolicyType":"AccountLevelIdentityBasedPolicy","EncodedDiagnosticMessage":"xxxxxx"}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4944539D-D27C-458D-95F1-2DCEB5E0EED5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

