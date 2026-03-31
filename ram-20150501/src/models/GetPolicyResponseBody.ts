// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyResponseBodyDefaultPolicyVersion extends $dara.Model {
  /**
   * @remarks
   * The time when the default policy version was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * An attribute in the `DefaultPolicyVersion` parameter. The value of the `IsDefaultVersion` parameter is `true`.
   * 
   * @example
   * true
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The document of the policy.
   * 
   * @example
   * { "Statement": [{ "Action": ["oss:*"], "Effect": "Allow", "Resource": ["acs:oss:*:*:*"]}], "Version": "1"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the default policy version.
   * 
   * @example
   * v1
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

export class GetPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The number of references to the policy.
   * 
   * @example
   * 0
   */
  attachmentCount?: number;
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The default version of the policy.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * OSS administrator
   */
  description?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * N/A
   */
  policyDocument?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The time when the policy was modified.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'number',
      createDate: 'string',
      defaultVersion: 'string',
      description: 'string',
      policyDocument: 'string',
      policyName: 'string',
      policyType: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the default policy version.
   */
  defaultPolicyVersion?: GetPolicyResponseBodyDefaultPolicyVersion;
  /**
   * @remarks
   * The basic information about the policy.
   */
  policy?: GetPolicyResponseBodyPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 697852FB-50D7-44D9-9774-530C31EAC572
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultPolicyVersion: 'DefaultPolicyVersion',
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPolicyVersion: GetPolicyResponseBodyDefaultPolicyVersion,
      policy: GetPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.defaultPolicyVersion && typeof (this.defaultPolicyVersion as any).validate === 'function') {
      (this.defaultPolicyVersion as any).validate();
    }
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

