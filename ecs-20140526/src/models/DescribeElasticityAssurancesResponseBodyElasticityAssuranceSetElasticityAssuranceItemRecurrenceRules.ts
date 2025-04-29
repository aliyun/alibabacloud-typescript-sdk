// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRulesRecurrenceRule } from "./DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRulesRecurrenceRule";


export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRules extends $dara.Model {
  recurrenceRule?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRulesRecurrenceRule[];
  static names(): { [key: string]: string } {
    return {
      recurrenceRule: 'RecurrenceRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recurrenceRule: { 'type': 'array', 'itemType': DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRulesRecurrenceRule },
    };
  }

  validate() {
    if(Array.isArray(this.recurrenceRule)) {
      $dara.Model.validateArray(this.recurrenceRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

