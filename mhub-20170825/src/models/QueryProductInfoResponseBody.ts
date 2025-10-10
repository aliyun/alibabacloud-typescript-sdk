// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProductInfoResponseBodyProductInfo extends $dara.Model {
  /**
   * @example
   * 2022-12-02T09:50:01Z
   */
  createTime?: string;
  /**
   * @example
   * endpoint for ecs: kangaroo-xuanji-cn-hangzhou-ecs-console-mirror-0(i-bp1fs84ua5zw4aljdlh1)
   */
  description?: string;
  /**
   * @example
   * icon图片base64字符串
   */
  encodedIcon?: string;
  /**
   * @example
   * icon图片名称
   */
  iconName?: string;
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
   * linux/amd64
   */
  platforms?: string;
  /**
   * @example
   * 3910360
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
      iconName: 'IconName',
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
      iconName: 'string',
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

export class QueryProductInfoResponseBody extends $dara.Model {
  productInfo?: QueryProductInfoResponseBodyProductInfo;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productInfo: 'ProductInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInfo: QueryProductInfoResponseBodyProductInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.productInfo && typeof (this.productInfo as any).validate === 'function') {
      (this.productInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

