// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelSceneBookItemsResponseBodyResultPage extends $dara.Model {
  /**
   * @example
   * True
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

export class ListHotelSceneBookItemsResponseBodyResultSceneItemList extends $dara.Model {
  /**
   * @example
   * https://ailabs.alibabausercontent.com/platform/28d7a91e3c05db3855725fc39e0387e7/welcome_audios/aa918294b6ca3aa115c51135bf9b80cb/l9f996sq.png
   */
  icon?: string;
  /**
   * @example
   * 11824
   */
  id?: number;
  /**
   * @example
   * 青椒肉丝
   */
  name?: string;
  /**
   * @example
   * 1850
   */
  price?: number;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @example
   * FOOD
   */
  type?: string;
  /**
   * @example
   * 1666161803
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      price: 'Price',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      id: 'number',
      name: 'string',
      price: 'number',
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

export class ListHotelSceneBookItemsResponseBodyResult extends $dara.Model {
  page?: ListHotelSceneBookItemsResponseBodyResultPage;
  sceneItemList?: ListHotelSceneBookItemsResponseBodyResultSceneItemList[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      sceneItemList: 'SceneItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListHotelSceneBookItemsResponseBodyResultPage,
      sceneItemList: { 'type': 'array', 'itemType': ListHotelSceneBookItemsResponseBodyResultSceneItemList },
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

export class ListHotelSceneBookItemsResponseBody extends $dara.Model {
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
  result?: ListHotelSceneBookItemsResponseBodyResult;
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
      result: ListHotelSceneBookItemsResponseBodyResult,
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

