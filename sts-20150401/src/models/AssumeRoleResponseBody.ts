// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AssumeRoleResponseBodyAssumedRoleUser extends $dara.Model {
  /**
   * @remarks
   * The ARN of the temporary identity that you use to assume the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole/alice
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the temporary identity that you use to assume the RAM role.
   * 
   * @example
   * 34458433936495****:alice
   */
  assumedRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumedRoleId: 'AssumedRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumedRoleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleResponseBodyCredentials extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.L4aBSCSJVMuKg5U1****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * wyLTSmsyPGP1ohvvw8xYgB29dlGI8KMiH2pK****
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The time when the STS token expires. The time is displayed in UTC.
   * 
   * @example
   * 2015-04-09T11:52:19Z
   */
  expiration?: string;
  /**
   * @remarks
   * The STS token.
   * 
   * > Alibaba Cloud STS does not impose limits on the length of STS tokens. We strongly recommend that you do not specify a maximum length for STS tokens.
   * 
   * @example
   * ********
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      expiration: 'Expiration',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      expiration: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The temporary identity that you use to assume the RAM role.
   */
  assumedRoleUser?: AssumeRoleResponseBodyAssumedRoleUser;
  /**
   * @remarks
   * The STS credentials.
   */
  credentials?: AssumeRoleResponseBodyCredentials;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6894B13B-6D71-4EF5-88FA-F32781734A7F
   */
  requestId?: string;
  sourceIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
      requestId: 'RequestId',
      sourceIdentity: 'SourceIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleUser: AssumeRoleResponseBodyAssumedRoleUser,
      credentials: AssumeRoleResponseBodyCredentials,
      requestId: 'string',
      sourceIdentity: 'string',
    };
  }

  validate() {
    if(this.assumedRoleUser && typeof (this.assumedRoleUser as any).validate === 'function') {
      (this.assumedRoleUser as any).validate();
    }
    if(this.credentials && typeof (this.credentials as any).validate === 'function') {
      (this.credentials as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

