// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstancePayTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
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
   * The ID of the order.
   * 
   * @example
   * 211662251220224
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 587BCA54-50DA-4885-ADE9-80A848339151
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

