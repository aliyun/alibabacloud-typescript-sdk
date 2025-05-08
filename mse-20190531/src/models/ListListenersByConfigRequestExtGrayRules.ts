// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersByConfigRequestExtGrayRules extends $dara.Model {
  grayRule?: string;
  grayRuleName?: string;
  grayRulePriority?: number;
  grayRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      grayRule: 'GrayRule',
      grayRuleName: 'GrayRuleName',
      grayRulePriority: 'GrayRulePriority',
      grayRuleType: 'GrayRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grayRule: 'string',
      grayRuleName: 'string',
      grayRulePriority: 'number',
      grayRuleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

