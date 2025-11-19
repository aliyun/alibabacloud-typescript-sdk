// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderResponseBodyDataOrderDetailList extends $dara.Model {
  instanceIds?: string[];
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBodyData extends $dara.Model {
  orderDetailList?: CreateOrderResponseBodyDataOrderDetailList[];
  orderId?: string;
  payLink?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      orderDetailList: 'OrderDetailList',
      orderId: 'OrderId',
      payLink: 'PayLink',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderDetailList: { 'type': 'array', 'itemType': CreateOrderResponseBodyDataOrderDetailList },
      orderId: 'string',
      payLink: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderDetailList)) {
      $dara.Model.validateArray(this.orderDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $dara.Model {
  code?: string;
  data?: CreateOrderResponseBodyData;
  message?: string;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateOrderResponseBodyData,
      message: 'string',
      requestId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

