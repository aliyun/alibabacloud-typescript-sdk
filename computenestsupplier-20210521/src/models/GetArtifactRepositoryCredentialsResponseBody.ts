// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactRepositoryCredentialsResponseBodyAvailableResources extends $dara.Model {
  /**
   * @remarks
   * The path.
   * 
   * @example
   * "/xxx/"
   */
  path?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * oss-cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * computenest-artifacts-draft-cn-hangzhou
   */
  repositoryName?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      regionId: 'RegionId',
      repositoryName: 'RepositoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      regionId: 'string',
      repositoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsResponseBodyCredentials extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.xxx
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * xxx
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * eyJ0aW1lIjoiMTUyNjU0OTc5:0705733****
   */
  password?: string;
  /**
   * @remarks
   * The Security Token Service (STS) token.
   * 
   * @example
   * xxx
   */
  securityToken?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      password: 'Password',
      securityToken: 'SecurityToken',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      password: 'string',
      securityToken: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the resources that can be uploaded.
   */
  availableResources?: GetArtifactRepositoryCredentialsResponseBodyAvailableResources[];
  /**
   * @remarks
   * The credentials.
   */
  credentials?: GetArtifactRepositoryCredentialsResponseBodyCredentials;
  /**
   * @remarks
   * The time when the credentials expired.
   * 
   * @example
   * 1526549792000
   */
  expireDate?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94E89857-B994-44B6-9C4F-DBD200E9XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      credentials: 'Credentials',
      expireDate: 'ExpireDate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: { 'type': 'array', 'itemType': GetArtifactRepositoryCredentialsResponseBodyAvailableResources },
      credentials: GetArtifactRepositoryCredentialsResponseBodyCredentials,
      expireDate: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableResources)) {
      $dara.Model.validateArray(this.availableResources);
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

