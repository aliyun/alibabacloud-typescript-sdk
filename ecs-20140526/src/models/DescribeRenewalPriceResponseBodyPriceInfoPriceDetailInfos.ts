// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo } from "./DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo";


export class DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfos extends $dara.Model {
  detailInfo?: DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo[];
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo },
    };
  }

  validate() {
    if(Array.isArray(this.detailInfo)) {
      $dara.Model.validateArray(this.detailInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

