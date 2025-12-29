// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelSceneBookItemsRequestPage extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
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

export class ListHotelSceneBookItemsRequest extends $dara.Model {
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
   * This parameter is required.
   */
  page?: ListHotelSceneBookItemsRequestPage;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FOOD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      page: 'Page',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      page: ListHotelSceneBookItemsRequestPage,
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

