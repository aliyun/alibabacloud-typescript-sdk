// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollectionPoliciesResponseBodyStatisticsPolicySourceList extends $dara.Model {
  /**
   * @example
   * policy_name1_from148
   */
  policyName?: string;
  /**
   * @example
   * 148***********50
   */
  policyUid?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'policyName',
      policyUid: 'policyUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

