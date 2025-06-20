// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeliveryChannelStatisticsResponseBodyDeliveryChannelStatistics } from "./GetDeliveryChannelStatisticsResponseBodyDeliveryChannelStatistics";


export class GetDeliveryChannelStatisticsResponseBody extends $dara.Model {
  deliveryChannelStatistics?: GetDeliveryChannelStatisticsResponseBodyDeliveryChannelStatistics;
  /**
   * @example
   * 80DF0610-504C-56D7-BDCF-7C92FD687***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelStatistics: 'DeliveryChannelStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelStatistics: GetDeliveryChannelStatisticsResponseBodyDeliveryChannelStatistics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deliveryChannelStatistics && typeof (this.deliveryChannelStatistics as any).validate === 'function') {
      (this.deliveryChannelStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

