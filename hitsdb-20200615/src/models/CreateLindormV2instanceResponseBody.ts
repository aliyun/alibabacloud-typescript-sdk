// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLindormV2InstanceResponseBody extends $dara.Model {
  /**
   * @example
   * {"AuthAction":"xxx","AuthPrincipalDisplayName":"222","AuthPrincipalOwnerId":"111","AuthPrincipalType":"SubUser",,"NoPermissionType":"ImplicitDeny","PolicyType":"AccountLevelIdentityBasedPolicy","EncodedDiagnosticMessage":"xxxxxx"}
   */
  accessDeniedDetail?: string;
  instanceId?: string;
  /**
   * @example
   * 211110656240000
   */
  orderId?: number;
  /**
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

