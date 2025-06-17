// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData } from "./DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData";


export class DescribeRealtimeDeliveryAccResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics about real-time log deliveries.
   */
  reatTimeDeliveryAccData?: DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 684306D2-2511-4977-991D-CE97E91FD7C0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reatTimeDeliveryAccData: 'ReatTimeDeliveryAccData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reatTimeDeliveryAccData: DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.reatTimeDeliveryAccData && typeof (this.reatTimeDeliveryAccData as any).validate === 'function') {
      (this.reatTimeDeliveryAccData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

