// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckCloudResourceAuthorizedResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authorization status. Valid values:
   * 
   * - **0**: not authorized.
   * - **1**: authorized.
   * - **2**: KMS is not activated.
   * 
   * @example
   * 0
   */
  authorizationState?: string;
  /**
   * @remarks
   * The global resource descriptor ARN (Alibaba Cloud Resource Name) of the authorized role. After the authorization of this role is complete, the related KMS can be used. Format: acs:ram::$accountID:role/$roleName.
   * 
   * @example
   * acs:ram::123456789012****:role/AliyunRdsInstanceEncryptionDefaultRole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationState: 'AuthorizationState',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationState: 'string',
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

export class CheckCloudResourceAuthorizedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response body.
   */
  data?: CheckCloudResourceAuthorizedResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckCloudResourceAuthorizedResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

