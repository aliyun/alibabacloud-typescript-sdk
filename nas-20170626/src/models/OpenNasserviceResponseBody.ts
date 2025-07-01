// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenNASServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the failed permission verification.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "178321033379****",
   *     "EncodedDiagnosticMessage": "AJpt/382mjxDSIYIqa/cUIFvOg9tajlLyN+LJA0C78kWfKIl****",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "21794847602038****",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "nas:OpenNASService"
   *   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 20671870151****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 427DB0B3-9436-4A3C-B2BC-B961F95E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      orderId: 'string',
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

