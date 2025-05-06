// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSupportedProductsResponseBodyProductsResourceTypeList } from "./ListSupportedProductsResponseBodyProductsResourceTypeList";


export class ListSupportedProductsResponseBodyProducts extends $dara.Model {
  /**
   * @remarks
   * The English name of the Alibaba Cloud service.
   * 
   * @example
   * Elastic Compute Service
   */
  productNameEn?: string;
  /**
   * @remarks
   * The Chinese name of the Alibaba Cloud service.
   * 
   * @example
   * 云服务器ECS
   */
  productNameZh?: string;
  /**
   * @remarks
   * The resource types that are supported by Cloud Config.
   */
  resourceTypeList?: ListSupportedProductsResponseBodyProductsResourceTypeList[];
  static names(): { [key: string]: string } {
    return {
      productNameEn: 'ProductNameEn',
      productNameZh: 'ProductNameZh',
      resourceTypeList: 'ResourceTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productNameEn: 'string',
      productNameZh: 'string',
      resourceTypeList: { 'type': 'array', 'itemType': ListSupportedProductsResponseBodyProductsResourceTypeList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypeList)) {
      $dara.Model.validateArray(this.resourceTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

