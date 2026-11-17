// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistributionSku } from "./DistributionSku";


export class DistributionProduct extends $dara.Model {
  /**
   * @remarks
   * The category chain name.
   */
  categoryChain?: string;
  /**
   * @remarks
   * The leaf category ID.
   * 
   * @example
   * 50016422
   */
  categoryLeafId?: number;
  /**
   * @remarks
   * The leaf category name.
   * 
   * @example
   * 示例类目
   */
  categoryLeafName?: string;
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * LM_DEMO
   */
  channelCode?: string;
  /**
   * @remarks
   * The distribution status.
   */
  distributeStatus?: string;
  /**
   * @remarks
   * The main image.
   * 
   * @example
   * https://example.com/images/product.png
   */
  picUrl?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * 660057403063402509
   */
  productId?: string;
  /**
   * @remarks
   * The seller ID.
   * 
   * @example
   * 123456789
   */
  sellerId?: string;
  /**
   * @remarks
   * The short product title.
   * 
   * @example
   * 示例商品
   */
  shortTitle?: string;
  /**
   * @remarks
   * The SKU list.
   */
  skus?: DistributionSku[];
  /**
   * @remarks
   * The long product title.
   * 
   * @example
   * 示例商品名称
   */
  title?: string;
  /**
   * @remarks
   * The white background image.
   * 
   * @example
   * https://example.com/images/product-white.png
   */
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

