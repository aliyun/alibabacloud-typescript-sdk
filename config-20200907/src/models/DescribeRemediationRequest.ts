// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRemediationRequest extends $dara.Model {
  /**
   * @example
   * cr-3184626622af0038418c
   */
  configRuleId?: string;
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

