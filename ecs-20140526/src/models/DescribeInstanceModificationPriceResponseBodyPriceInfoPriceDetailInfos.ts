// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo } from "./DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo";


export class DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfos extends $dara.Model {
  detailInfo?: DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo[];
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: { 'type': 'array', 'itemType': DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo },
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

