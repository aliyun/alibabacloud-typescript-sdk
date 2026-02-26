// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistributionSku } from "./DistributionSku";


export class DistributionProduct extends $dara.Model {
  categoryChain?: string;
  categoryLeafId?: number;
  categoryLeafName?: string;
  channelCode?: string;
  distributeStatus?: string;
  picUrl?: string;
  productId?: string;
  sellerId?: string;
  shortTitle?: string;
  skus?: DistributionSku[];
  title?: string;
  whiteBackgroundPicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      categoryChain: 'categoryChain',
      categoryLeafId: 'categoryLeafId',
      categoryLeafName: 'categoryLeafName',
      channelCode: 'channelCode',
      distributeStatus: 'distributeStatus',
      picUrl: 'picUrl',
      productId: 'productId',
      sellerId: 'sellerId',
      shortTitle: 'shortTitle',
      skus: 'skus',
      title: 'title',
      whiteBackgroundPicUrl: 'whiteBackgroundPicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryChain: 'string',
      categoryLeafId: 'number',
      categoryLeafName: 'string',
      channelCode: 'string',
      distributeStatus: 'string',
      picUrl: 'string',
      productId: 'string',
      sellerId: 'string',
      shortTitle: 'string',
      skus: { 'type': 'array', 'itemType': DistributionSku },
      title: 'string',
      whiteBackgroundPicUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skus)) {
      $dara.Model.validateArray(this.skus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

