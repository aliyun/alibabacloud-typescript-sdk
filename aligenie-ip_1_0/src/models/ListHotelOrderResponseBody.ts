// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelOrderResponseBodyPage extends $dara.Model {
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
   * 21
   */
  total?: number;
  /**
   * @example
   * 7
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

export class ListHotelOrderResponseBodyResult extends $dara.Model {
  amt?: number;
  /**
   * @example
   * 21.5
   */
  applyAmt?: number;
  deliveryMethod?: string;
  deliveryRoomName?: string;
  deliveryTime?: number;
  /**
   * @example
   * 1659952892000
   */
  gmtCreate?: number;
  icon?: string;
  itemId?: number;
  itemType?: string;
  name?: string;
  /**
   * @example
   * 20220808180132000114508555527711
   */
  orderNo?: string;
  orderStatus?: string;
  paymentMethod?: string;
  /**
   * @example
   * 12
   */
  quantity?: number;
  /**
   * @example
   * 2001
   */
  roomNo?: string;
  startTime?: number;
  /**
   * @example
   * INIT
   */
  status?: string;
  sumAmt?: number;
  /**
   * @example
   * REPAIR
   */
  type?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingfenlei/shebeiweixiu.png
   */
  typeIconUrl?: string;
  /**
   * @example
   * 设备维修
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      amt: 'Amt',
      applyAmt: 'ApplyAmt',
      deliveryMethod: 'DeliveryMethod',
      deliveryRoomName: 'DeliveryRoomName',
      deliveryTime: 'DeliveryTime',
      gmtCreate: 'GmtCreate',
      icon: 'Icon',
      itemId: 'ItemId',
      itemType: 'ItemType',
      name: 'Name',
      orderNo: 'OrderNo',
      orderStatus: 'OrderStatus',
      paymentMethod: 'PaymentMethod',
      quantity: 'Quantity',
      roomNo: 'RoomNo',
      startTime: 'StartTime',
      status: 'Status',
      sumAmt: 'SumAmt',
      type: 'Type',
      typeIconUrl: 'TypeIconUrl',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amt: 'number',
      applyAmt: 'number',
      deliveryMethod: 'string',
      deliveryRoomName: 'string',
      deliveryTime: 'number',
      gmtCreate: 'number',
      icon: 'string',
      itemId: 'number',
      itemType: 'string',
      name: 'string',
      orderNo: 'string',
      orderStatus: 'string',
      paymentMethod: 'string',
      quantity: 'number',
      roomNo: 'string',
      startTime: 'number',
      status: 'string',
      sumAmt: 'number',
      type: 'string',
      typeIconUrl: 'string',
      typeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderResponseBody extends $dara.Model {
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
  page?: ListHotelOrderResponseBodyPage;
  /**
   * @example
   * 07F61FDA-606F-10A0-8ED0-C6CE62710A48
   */
  requestId?: string;
  result?: ListHotelOrderResponseBodyResult[];
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
      page: ListHotelOrderResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelOrderResponseBodyResult },
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

