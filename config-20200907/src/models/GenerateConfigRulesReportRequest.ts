// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateConfigRulesReportRequest extends $dara.Model {
  clientToken?: string;
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

