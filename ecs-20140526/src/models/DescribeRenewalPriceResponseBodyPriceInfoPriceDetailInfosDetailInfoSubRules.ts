// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRulesRule } from "./DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRulesRule";


export class DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules extends $dara.Model {
  rule?: DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRulesRule },
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

