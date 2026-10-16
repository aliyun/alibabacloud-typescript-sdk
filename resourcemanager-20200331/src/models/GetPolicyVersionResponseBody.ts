// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyVersionResponseBodyPolicyVersion extends $dara.Model {
  /**
   * @remarks
   * The time when the access policy version was created. The time is in RFC 3339 UTC format, indicated by Z.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * Indicates whether the version is the default version of the access policy.
   * 
   * @example
   * false
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The content of the access policy.
   * 
   * @example
   * { \\"Statement\\": [{ \\"Action\\": [\\"oss:*\\"], \\"Effect\\": \\"Allow\\", \\"Resource\\": [\\"acs:oss:*:*:*\\"]}], \\"Version\\": \\"1\\"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the access policy version.
   * 
   * @example
   * v3
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      isDefaultVersion: 'IsDefaultVersion',
      policyDocument: 'PolicyDocument',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      isDefaultVersion: 'boolean',
      policyDocument: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The version information of the access policy.
   */
  policyVersion?: GetPolicyVersionResponseBodyPolicyVersion;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyVersion: 'PolicyVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: GetPolicyVersionResponseBodyPolicyVersion,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policyVersion && typeof (this.policyVersion as any).validate === 'function') {
      (this.policyVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

