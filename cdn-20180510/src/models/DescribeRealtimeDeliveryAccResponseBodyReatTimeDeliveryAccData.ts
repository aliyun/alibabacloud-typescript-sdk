// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccDataAccData } from "./DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccDataAccData";


export class DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData extends $dara.Model {
  accData?: DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccDataAccData[];
  static names(): { [key: string]: string } {
    return {
      accData: 'AccData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accData: { 'type': 'array', 'itemType': DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccDataAccData },
    };
  }

  validate() {
    if(Array.isArray(this.accData)) {
      $dara.Model.validateArray(this.accData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

