// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion extends $dara.Model {
  /**
   * @remarks
   * The time when the version was created.
   * 
   * @example
   * 2015-02-26T01:25:52Z
   */
  createDate?: string;
  /**
   * @remarks
   * Indicates whether the policy version is the default version.
   * 
   * @example
   * false
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
   * The ID of the policy version.
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

