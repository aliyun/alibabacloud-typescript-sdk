// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveConfigRulesRequest extends $dara.Model {
  compliancePackId?: string;
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      configRuleIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

