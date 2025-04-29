// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceModificationPriceResponseBodyPriceInfoRulesRule } from "./DescribeInstanceModificationPriceResponseBodyPriceInfoRulesRule";


export class DescribeInstanceModificationPriceResponseBodyPriceInfoRules extends $dara.Model {
  rule?: DescribeInstanceModificationPriceResponseBodyPriceInfoRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeInstanceModificationPriceResponseBodyPriceInfoRulesRule },
    };
  }

  validate() {
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

