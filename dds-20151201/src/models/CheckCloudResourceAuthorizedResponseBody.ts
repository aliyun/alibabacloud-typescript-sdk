// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCloudResourceAuthorizedResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether KMS keys are authorized to ApsaraDB for MongoDB instances. Valid values:
   * 
   * *   **0**: KMS keys are not authorized.
   * *   **1**: KMS keys are authorized.
   * *   **2**: KMS is not enabled.
   * 
   * @example
   * 1
   */
  authorizationState?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A0181AC4-F186-46ED-87CA-100C70B86729
   */
  requestId?: string;
  /**
   * @remarks
   * The role information of the authorized Alibaba Resource Name (ARN).
   * 
   * >  This parameter is returned only when the value of the **AuthorizationState** parameter is **1**.
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

