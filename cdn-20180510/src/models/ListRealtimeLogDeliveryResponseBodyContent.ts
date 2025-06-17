// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo } from "./ListRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo";


export class ListRealtimeLogDeliveryResponseBodyContent extends $dara.Model {
  realtimeLogDeliveryInfo?: ListRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo[];
  static names(): { [key: string]: string } {
    return {
      realtimeLogDeliveryInfo: 'RealtimeLogDeliveryInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realtimeLogDeliveryInfo: { 'type': 'array', 'itemType': ListRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo },
    };
  }

  validate() {
    if(Array.isArray(this.realtimeLogDeliveryInfo)) {
      $dara.Model.validateArray(this.realtimeLogDeliveryInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

