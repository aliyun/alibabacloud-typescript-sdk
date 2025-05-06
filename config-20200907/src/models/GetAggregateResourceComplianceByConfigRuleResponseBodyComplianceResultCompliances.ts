// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation results of the resources. Valid values:
   * 
   * *   COMPLIANT: The resource was evaluated as compliant.
   * *   NON_COMPLIANT: The resource was evaluated as incompliant.
   * *   NOT_APPLICABLE: The rule did not apply to your resources.
   * *   INSUFFICIENT_DATA: No resource data was available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The number of resources that have compliance evaluation results. For example, if the value of the `ComplianceType` parameter is `COMPLIANT`, this parameter value indicates the number of compliant resources.
   * 
   * @example
   * 3
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

