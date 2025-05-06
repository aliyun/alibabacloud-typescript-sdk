// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRuleResponseBodyConfigRuleCompliance extends $dara.Model {
  /**
   * @remarks
   * The statistics on the compliance evaluation results by compliance type. Valid values:
   * 
   * *   COMPLIANT: The resource was evaluated as compliant.
   * *   NON_COMPLIANT: The resource was evaluated as incompliant.
   * *   NOT_APPLICABLE: The rule did not apply to your resource.
   * *   INSUFFICIENT_DATA: No resource data was available.
   * 
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The number of evaluated resources.
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

