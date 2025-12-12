// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphen (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the permission policy. Valid values:
   * 
   * *   Custom
   * *   System
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The ID of the policy version.
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
      policyType: 'PolicyType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyType: 'string',
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

