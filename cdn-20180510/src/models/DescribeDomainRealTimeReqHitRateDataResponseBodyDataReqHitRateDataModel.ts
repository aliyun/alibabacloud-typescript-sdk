// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel extends $dara.Model {
  /**
   * @remarks
   * The request hit ratio.
   * 
   * @example
   * 0.8956940476262277
   */
  reqHitRate?: number;
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-02T11:26:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      reqHitRate: 'ReqHitRate',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqHitRate: 'number',
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

