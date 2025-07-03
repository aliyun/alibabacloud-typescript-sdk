// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckCloudResourceAuthorizedResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  authorizationState?: string;
  /**
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

