// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGrantRulesToCenResponseBodyCenGrantRulesCbnGrantRule } from "./DescribeGrantRulesToCenResponseBodyCenGrantRulesCbnGrantRule";


export class DescribeGrantRulesToCenResponseBodyCenGrantRules extends $dara.Model {
  cbnGrantRule?: DescribeGrantRulesToCenResponseBodyCenGrantRulesCbnGrantRule[];
  static names(): { [key: string]: string } {
    return {
      cbnGrantRule: 'CbnGrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cbnGrantRule: { 'type': 'array', 'itemType': DescribeGrantRulesToCenResponseBodyCenGrantRulesCbnGrantRule },
    };
  }

  validate() {
    if(Array.isArray(this.cbnGrantRule)) {
      $dara.Model.validateArray(this.cbnGrantRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

