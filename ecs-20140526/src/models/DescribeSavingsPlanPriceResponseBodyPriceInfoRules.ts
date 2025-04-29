// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSavingsPlanPriceResponseBodyPriceInfoRules extends $dara.Model {
  description?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

