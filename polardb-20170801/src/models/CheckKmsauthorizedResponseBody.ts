// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckKMSAuthorizedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorization status. Valid values:
   * 
   * - **0**: Unauthorized.
   * 
   * - **1**: Authorized.
   * 
   * @example
   * 0
   */
  authorizationState?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
   */
  requestId?: string;
  /**
   * @remarks
   * The Global Resource Descriptor of the role. It specifies the role. For more information, see [RAM role overview](https://help.aliyun.com/document_detail/93689.html).
   * 
   * @example
   * acs:ram::1406926*****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationState: 'AuthorizationState',
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationState: 'number',
      DBClusterId: 'string',
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

