// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGrantRulesToCenResponseBodyGrantRulesGrantRule } from "./DescribeGrantRulesToCenResponseBodyGrantRulesGrantRule";


export class DescribeGrantRulesToCenResponseBodyGrantRules extends $dara.Model {
  grantRule?: DescribeGrantRulesToCenResponseBodyGrantRulesGrantRule[];
  static names(): { [key: string]: string } {
    return {
      grantRule: 'GrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRule: { 'type': 'array', 'itemType': DescribeGrantRulesToCenResponseBodyGrantRulesGrantRule },
    };
  }

  validate() {
    if(Array.isArray(this.grantRule)) {
      $dara.Model.validateArray(this.grantRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

