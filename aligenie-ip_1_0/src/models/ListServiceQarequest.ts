// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceQARequestPage extends $dara.Model {
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

export class ListServiceQARequest extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * ***
   */
  keyword?: string;
  page?: ListServiceQARequestPage;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      hotelId: 'HotelId',
      keyword: 'Keyword',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      hotelId: 'string',
      keyword: 'string',
      page: ListServiceQARequestPage,
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

