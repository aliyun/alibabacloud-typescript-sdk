// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRulesRule } from "./DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRulesRule";


export class DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules extends $dara.Model {
  rule?: DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRulesRule },
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

