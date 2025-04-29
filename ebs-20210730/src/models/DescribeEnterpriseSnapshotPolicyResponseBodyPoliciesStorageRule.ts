// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instant access feature is enabled.
   * 
   * @example
   * false
   */
  enableImmediateAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableImmediateAccess: 'EnableImmediateAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableImmediateAccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

