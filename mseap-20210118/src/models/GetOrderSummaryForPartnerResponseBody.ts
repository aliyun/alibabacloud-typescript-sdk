// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrderSummaryForPartnerResponseBodyDataOrderLines extends $dara.Model {
  /**
   * @example
   * ob4twsebrj1734
   */
  instanceId?: string;
  /**
   * @example
   * 11350044
   */
  orderLineId?: string;
  /**
   * @example
   * UPGRADE
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderLineId: 'OrderLineId',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderLineId: 'string',
      orderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderSummaryForPartnerResponseBodyData extends $dara.Model {
  /**
   * @example
   * UShMru9tcC0RHD/04O0x1OrVkEJOq804ccSkgXSuZH0/42FlhtzyCKa6FofPs8n0
   */
  encryptedBuyerId?: string;
  /**
   * @example
   * UShMru9tcC0RHD/04O0x1OrVkEJOq804ccSkgXSuZH0/42FlhtzyCKa6FofPs8n0
   */
  encryptedPayerId?: string;
  /**
   * @example
   * UShMru9tcC0RHD/04O0x1OrVkEJOq804ccSkgXSuZH0/42FlhtzyCKa6FofPs8n0
   */
  encryptedUserId?: string;
  /**
   * @example
   * 11350044
   */
  orderId?: string;
  orderLines?: GetOrderSummaryForPartnerResponseBodyDataOrderLines[];
  static names(): { [key: string]: string } {
    return {
      encryptedBuyerId: 'EncryptedBuyerId',
      encryptedPayerId: 'EncryptedPayerId',
      encryptedUserId: 'EncryptedUserId',
      orderId: 'OrderId',
      orderLines: 'OrderLines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedBuyerId: 'string',
      encryptedPayerId: 'string',
      encryptedUserId: 'string',
      orderId: 'string',
      orderLines: { 'type': 'array', 'itemType': GetOrderSummaryForPartnerResponseBodyDataOrderLines },
    };
  }

  validate() {
    if(Array.isArray(this.orderLines)) {
      $dara.Model.validateArray(this.orderLines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderSummaryForPartnerResponseBody extends $dara.Model {
  data?: GetOrderSummaryForPartnerResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 56B009EB-AAA5-52C9-B05F-AF425E3885E8
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
      data: GetOrderSummaryForPartnerResponseBodyData,
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

