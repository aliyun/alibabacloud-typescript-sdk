// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCloudResourceAuthorizedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorization status. Valid values:
   * - **0**: Not authorized.
   * - **1**: Authorized.
   * - **2**: The user has not enabled KMS.
   * 
   * @example
   * 1
   */
  authorizationState?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A0181AC4-F186-46ED-87CA-100C70B86729
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the role that is authorized to access Alibaba Cloud resources.
   * > The response includes this parameter only when the return value of **AuthorizationState** is **1**.
   * 
   * @example
   * acs:ram::140****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationState: 'AuthorizationState',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationState: 'number',
      requestId: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

