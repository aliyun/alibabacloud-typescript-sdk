// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelSceneItemResponseBodyPage extends $dara.Model {
  hasNext?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 12
   */
  total?: number;
  /**
   * @example
   * 6
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBodyResultSecondCategoryListItemList extends $dara.Model {
  /**
   * @example
   * 客用品类
   */
  category?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/wupin/keyongpinlei/mianqian.png
   */
  icon?: string;
  /**
   * @example
   * 152860
   */
  id?: string;
  /**
   * @example
   * 棉签
   */
  name?: string;
  /**
   * @example
   * 1
   */
  price?: number;
  residueLimit?: number;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      price: 'Price',
      residueLimit: 'ResidueLimit',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      icon: 'string',
      id: 'string',
      name: 'string',
      price: 'number',
      residueLimit: 'number',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBodyResultSecondCategoryList extends $dara.Model {
  itemList?: ListHotelSceneItemResponseBodyResultSecondCategoryListItemList[];
  /**
   * @example
   * 客用品类
   */
  secondCategoryName?: string;
  static names(): { [key: string]: string } {
    return {
      itemList: 'ItemList',
      secondCategoryName: 'SecondCategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemList: { 'type': 'array', 'itemType': ListHotelSceneItemResponseBodyResultSecondCategoryListItemList },
      secondCategoryName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemList)) {
      $dara.Model.validateArray(this.itemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBodyResult extends $dara.Model {
  secondCategoryList?: ListHotelSceneItemResponseBodyResultSecondCategoryList[];
  static names(): { [key: string]: string } {
    return {
      secondCategoryList: 'SecondCategoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondCategoryList: { 'type': 'array', 'itemType': ListHotelSceneItemResponseBodyResultSecondCategoryList },
    };
  }

  validate() {
    if(Array.isArray(this.secondCategoryList)) {
      $dara.Model.validateArray(this.secondCategoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListHotelSceneItemResponseBodyPage;
  /**
   * @example
   * CEADB586-51CB-1B6B-95BD-AB85A7A08E97
   */
  requestId?: string;
  result?: ListHotelSceneItemResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      page: ListHotelSceneItemResponseBodyPage,
      requestId: 'string',
      result: ListHotelSceneItemResponseBodyResult,
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

