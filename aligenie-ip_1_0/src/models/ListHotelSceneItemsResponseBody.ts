// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelSceneItemsResponseBodyResultPage extends $dara.Model {
  /**
   * @example
   * False
   */
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
   * 23
   */
  total?: number;
  /**
   * @example
   * 3
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

export class ListHotelSceneItemsResponseBodyResultSceneItemList extends $dara.Model {
  beyondLimitReply?: string;
  /**
   * @example
   * 客用品类
   */
  category?: string;
  deliveryMethod?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/wupin/keyongpinlei/mianqian.png
   */
  icon?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 10336
   */
  id?: number;
  limitNumber?: number;
  limitSwitch?: number;
  /**
   * @example
   * 棉签
   */
  name?: string;
  paymentMethod?: string;
  /**
   * @example
   * 160
   */
  price?: number;
  robotName?: string;
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
  /**
   * @example
   * 1666163226
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      beyondLimitReply: 'BeyondLimitReply',
      category: 'Category',
      deliveryMethod: 'DeliveryMethod',
      icon: 'Icon',
      id: 'Id',
      limitNumber: 'LimitNumber',
      limitSwitch: 'LimitSwitch',
      name: 'Name',
      paymentMethod: 'PaymentMethod',
      price: 'Price',
      robotName: 'RobotName',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beyondLimitReply: 'string',
      category: 'string',
      deliveryMethod: 'string',
      icon: 'string',
      id: 'number',
      limitNumber: 'number',
      limitSwitch: 'number',
      name: 'string',
      paymentMethod: 'string',
      price: 'number',
      robotName: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsResponseBodyResult extends $dara.Model {
  page?: ListHotelSceneItemsResponseBodyResultPage;
  sceneItemList?: ListHotelSceneItemsResponseBodyResultSceneItemList[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      sceneItemList: 'SceneItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListHotelSceneItemsResponseBodyResultPage,
      sceneItemList: { 'type': 'array', 'itemType': ListHotelSceneItemsResponseBodyResultSceneItemList },
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.sceneItemList)) {
      $dara.Model.validateArray(this.sceneItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsResponseBody extends $dara.Model {
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
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: ListHotelSceneItemsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListHotelSceneItemsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

