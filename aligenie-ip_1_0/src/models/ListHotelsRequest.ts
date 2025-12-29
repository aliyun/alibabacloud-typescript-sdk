// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelsRequestHotelRequest extends $dara.Model {
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsRequestPage extends $dara.Model {
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

export class ListHotelsRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  hotelRequest?: ListHotelsRequestHotelRequest;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListHotelsRequestPage;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      hotelRequest: 'HotelRequest',
      page: 'Page',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelRequest: ListHotelsRequestHotelRequest,
      page: ListHotelsRequestPage,
      status: 'number',
    };
  }

  validate() {
    if(this.hotelRequest && typeof (this.hotelRequest as any).validate === 'function') {
      (this.hotelRequest as any).validate();
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

