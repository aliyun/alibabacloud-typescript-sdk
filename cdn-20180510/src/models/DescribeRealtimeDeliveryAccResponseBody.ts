// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccDataAccData extends $dara.Model {
  /**
   * @remarks
   * The number of failed attempts to deliver log data to Log Service.
   * 
   * @example
   * 2
   */
  failedNum?: number;
  /**
   * @remarks
   * The number of successful deliveries of log data to Log Service.
   * 
   * @example
   * 2
   */
  successNum?: number;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2018-09-03T06:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      failedNum: 'FailedNum',
      successNum: 'SuccessNum',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedNum: 'number',
      successNum: 'number',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

