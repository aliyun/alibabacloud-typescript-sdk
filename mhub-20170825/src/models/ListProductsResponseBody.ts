// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsResponseBodyProductInfosProductInfo extends $dara.Model {
  /**
   * @example
   * 2020-12-16T06:25:52Z
   */
  createTime?: string;
  /**
   * @example
   * xxxx
   */
  description?: string;
  /**
   * @example
   * 图片 base64
   */
  encodedIcon?: string;
  /**
   * @example
   * 1
   */
  industryId?: number;
  /**
   * @example
   * 我的项目
   */
  name?: string;
  /**
   * @example
   * iOS
   */
  platforms?: string;
  /**
   * @example
   * 1234
   */
  productId?: number;
  /**
   * @example
   * false
   */
  readonly?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      encodedIcon: 'EncodedIcon',
      industryId: 'IndustryId',
      name: 'Name',
      platforms: 'Platforms',
      productId: 'ProductId',
      readonly: 'Readonly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      encodedIcon: 'string',
      industryId: 'number',
      name: 'string',
      platforms: 'string',
      productId: 'number',
      readonly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyProductInfos extends $dara.Model {
  productInfo?: ListProductsResponseBodyProductInfosProductInfo[];
  static names(): { [key: string]: string } {
    return {
      productInfo: 'ProductInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInfo: { 'type': 'array', 'itemType': ListProductsResponseBodyProductInfosProductInfo },
    };
  }

  validate() {
    if(Array.isArray(this.productInfo)) {
      $dara.Model.validateArray(this.productInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $dara.Model {
  productInfos?: ListProductsResponseBodyProductInfos;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  /**
   * @example
   * enabled
   */
  ubsmsStatus?: string;
  static names(): { [key: string]: string } {
    return {
      productInfos: 'ProductInfos',
      requestId: 'RequestId',
      total: 'Total',
      ubsmsStatus: 'UbsmsStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInfos: ListProductsResponseBodyProductInfos,
      requestId: 'string',
      total: 'number',
      ubsmsStatus: 'string',
    };
  }

  validate() {
    if(this.productInfos && typeof (this.productInfos as any).validate === 'function') {
      (this.productInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

