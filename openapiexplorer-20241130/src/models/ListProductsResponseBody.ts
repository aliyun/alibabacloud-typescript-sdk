// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsResponseBodyProducts extends $dara.Model {
  category2Name?: string;
  categoryName?: string;
  /**
   * @example
   * Ecs
   */
  code?: string;
  /**
   * @example
   * 2014-05-26
   */
  defaultVersion?: string;
  description?: string;
  group?: string;
  name?: string;
  /**
   * @example
   * ECS
   */
  shortName?: string;
  /**
   * @example
   * RPC
   */
  style?: string;
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      category2Name: 'category2Name',
      categoryName: 'categoryName',
      code: 'code',
      defaultVersion: 'defaultVersion',
      description: 'description',
      group: 'group',
      name: 'name',
      shortName: 'shortName',
      style: 'style',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category2Name: 'string',
      categoryName: 'string',
      code: 'string',
      defaultVersion: 'string',
      description: 'string',
      group: 'string',
      name: 'string',
      shortName: 'string',
      style: 'string',
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $dara.Model {
  products?: ListProductsResponseBodyProducts[];
  /**
   * @example
   * 9BFC4AC1-6BE4-5405-BDEC-CA288D404812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      products: 'products',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      products: { 'type': 'array', 'itemType': ListProductsResponseBodyProducts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

