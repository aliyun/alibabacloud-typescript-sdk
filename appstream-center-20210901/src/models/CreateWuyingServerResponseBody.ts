// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWuyingServerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 23429322113****
   */
  orderId?: string;
  /**
   * @remarks
   * The list of workstation IDs.
   * 
   * **If AutoPay is set to false and the order is unpaid, these IDs are the workstation IDs pre-allocated for the order. The actual workstations are not yet created, and you cannot use these IDs to perform deletion or other resource operations.** Pay the order corresponding to the returned OrderId first, and then call ListWuyingServer to confirm that the workstations are created and check their current status.
   * [ListWuyingServer](~~ListWuyingServer~~)
   */
  wuyingServerIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      wuyingServerIdList: 'WuyingServerIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      wuyingServerIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.wuyingServerIdList)) {
      $dara.Model.validateArray(this.wuyingServerIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWuyingServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: CreateWuyingServerResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateWuyingServerResponseBodyData,
      requestId: 'string',
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

