// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos } from "./ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos";


export class ListRealtimeLogDeliveryInfosResponseBodyContent extends $dara.Model {
  realtimeLogDeliveryInfos?: ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos[];
  static names(): { [key: string]: string } {
    return {
      realtimeLogDeliveryInfos: 'RealtimeLogDeliveryInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realtimeLogDeliveryInfos: { 'type': 'array', 'itemType': ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos },
    };
  }

  validate() {
    if(Array.isArray(this.realtimeLogDeliveryInfos)) {
      $dara.Model.validateArray(this.realtimeLogDeliveryInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

