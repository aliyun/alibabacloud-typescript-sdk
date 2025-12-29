// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomQARequestPage extends $dara.Model {
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

export class ListCustomQARequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @example
   * ***
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListCustomQARequestPage;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      keyword: 'Keyword',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      keyword: 'string',
      page: ListCustomQARequestPage,
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

