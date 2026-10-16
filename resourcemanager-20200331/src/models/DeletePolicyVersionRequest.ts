// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolicyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * Policy Name of the access policy.
   * 
   * Policy Name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The ID of the access policy version.
   * 
   * You can call [ListPolicyVersions](https://help.aliyun.com/document_detail/159982.html) to query access policy version IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * v3
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
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

