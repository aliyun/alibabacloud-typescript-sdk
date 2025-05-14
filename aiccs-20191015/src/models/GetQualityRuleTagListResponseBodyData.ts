// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleTagListResponseBodyData extends $dara.Model {
  ruleTagId?: number;
  ruleTagName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleTagId: 'RuleTagId',
      ruleTagName: 'RuleTagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleTagId: 'number',
      ruleTagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

