// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLindormInstanceResponseBody extends $dara.Model {
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
   * The ID of the Lindorm instance that is created.
   * 
   * @example
   * ld-bp1o3y0yme2i2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 111111111111111
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 93BE8227-3406-4D7A-883D-9A421D42****
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

