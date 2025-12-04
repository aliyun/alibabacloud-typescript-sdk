// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewLindormInstanceResponseBody extends $dara.Model {
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
   * The ID of the instance.
   * 
   * @example
   * ld-bp1z3506imz2f****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the order. You can obtain the order ID on the Orders page of the Expenses and Costs console.
   * 
   * @example
   * 213465921640411
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1556DCB0-043A-4444-8BD9-CF4A68E7EE64
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      instanceId: 'string',
      orderId: 'number',
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

