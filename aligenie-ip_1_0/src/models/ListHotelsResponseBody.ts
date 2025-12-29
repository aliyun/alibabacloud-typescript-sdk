// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelsResponseBodyResultHotelInfoList extends $dara.Model {
  accountNames?: string[];
  /**
   * @example
   * 1654568802000
   */
  createTime?: number;
  /**
   * @example
   * 酒店地址
   */
  hotelAddress?: string;
  /**
   * @example
   * 73ab1b03018d4da69b5bef17095f569b
   */
  hotelId?: string;
  /**
   * @example
   * 酒店名称
   */
  hotelName?: string;
  /**
   * @example
   * 酒店
   */
  industryType?: string;
  /**
   * @example
   * 13312340987
   */
  phoneNumber?: string;
  /**
   * @example
   * 测试产品
   */
  relatedProductName?: string;
  /**
   * @example
   * 12
   */
  roomNum?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountNames: 'AccountNames',
      createTime: 'CreateTime',
      hotelAddress: 'HotelAddress',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
      industryType: 'IndustryType',
      phoneNumber: 'PhoneNumber',
      relatedProductName: 'RelatedProductName',
      roomNum: 'RoomNum',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNames: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      hotelAddress: 'string',
      hotelId: 'string',
      hotelName: 'string',
      industryType: 'string',
      phoneNumber: 'string',
      relatedProductName: 'string',
      roomNum: 'number',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accountNames)) {
      $dara.Model.validateArray(this.accountNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsResponseBodyResultPage extends $dara.Model {
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

export class ListHotelsResponseBodyResult extends $dara.Model {
  hotelInfoList?: ListHotelsResponseBodyResultHotelInfoList[];
  page?: ListHotelsResponseBodyResultPage;
  static names(): { [key: string]: string } {
    return {
      hotelInfoList: 'HotelInfoList',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelInfoList: { 'type': 'array', 'itemType': ListHotelsResponseBodyResultHotelInfoList },
      page: ListHotelsResponseBodyResultPage,
    };
  }

  validate() {
    if(Array.isArray(this.hotelInfoList)) {
      $dara.Model.validateArray(this.hotelInfoList);
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

export class ListHotelsResponseBody extends $dara.Model {
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
   * @remarks
   * RequestId
   */
  requestId?: string;
  result?: ListHotelsResponseBodyResult;
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
      result: ListHotelsResponseBodyResult,
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

