// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelSceneItemsRequestListHotelSceneReqPage extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsRequestListHotelSceneReq extends $dara.Model {
  /**
   * @example
   * 客用品类
   */
  category?: string;
  /**
   * @example
   * 棉签
   */
  keywords?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListHotelSceneItemsRequestListHotelSceneReqPage;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keywords: 'Keywords',
      page: 'Page',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keywords: 'string',
      page: ListHotelSceneItemsRequestListHotelSceneReqPage,
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsRequest extends $dara.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * ListHotelSceneReq
   * 
   * This parameter is required.
   */
  listHotelSceneReq?: ListHotelSceneItemsRequestListHotelSceneReq;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      listHotelSceneReq: 'ListHotelSceneReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      listHotelSceneReq: ListHotelSceneItemsRequestListHotelSceneReq,
    };
  }

  validate() {
    if(this.listHotelSceneReq && typeof (this.listHotelSceneReq as any).validate === 'function') {
      (this.listHotelSceneReq as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

