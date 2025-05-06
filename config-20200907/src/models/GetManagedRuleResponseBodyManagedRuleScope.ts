// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedRuleResponseBodyManagedRuleScope extends $dara.Model {
  /**
   * @remarks
   * The types of resources to which the managed rule applies.
   */
  complianceResourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      complianceResourceTypes: 'ComplianceResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.complianceResourceTypes)) {
      $dara.Model.validateArray(this.complianceResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

