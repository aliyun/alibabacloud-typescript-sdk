// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserLoginPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Security audit
   */
  name?: string;
  /**
   * @remarks
   * The list of policy IDs. This is a filter condition for the query.
   */
  policyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      name: 'Name',
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

