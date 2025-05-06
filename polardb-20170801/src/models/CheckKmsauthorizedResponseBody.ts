// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckKMSAuthorizedResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the cluster is authorized to use KMS. Valid values:
   * 
   * *   **0**: no.
   * *   **1**: yes.
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
   * The Alibaba Cloud Resource Name (ARN) of the RAM role. A RAM role is a virtual identity that you can create within your Alibaba Cloud account. For more information, see [RAM role overview](https://help.aliyun.com/document_detail/93689.html).
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

