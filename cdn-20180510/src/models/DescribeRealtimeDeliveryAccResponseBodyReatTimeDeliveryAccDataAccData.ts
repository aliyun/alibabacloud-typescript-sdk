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

