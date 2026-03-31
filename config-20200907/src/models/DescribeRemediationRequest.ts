// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRemediationRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-3184626622af003****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The ID of the remediation configuration.
   * 
   * @example
   * crr-f381cf0c1c2f004e****
   */
  remediationId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      remediationId: 'RemediationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      remediationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

