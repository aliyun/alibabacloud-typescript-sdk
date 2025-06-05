// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupPriceResponseBodyPriceInfoRulesRule } from "./DescribeContainerGroupPriceResponseBodyPriceInfoRulesRule";


export class DescribeContainerGroupPriceResponseBodyPriceInfoRules extends $dara.Model {
  rule?: DescribeContainerGroupPriceResponseBodyPriceInfoRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeContainerGroupPriceResponseBodyPriceInfoRulesRule },
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

