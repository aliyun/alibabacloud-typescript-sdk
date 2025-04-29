// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag of the enterprise-level snapshot policy.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag of the enterprise-level snapshot policy.
   * 
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

