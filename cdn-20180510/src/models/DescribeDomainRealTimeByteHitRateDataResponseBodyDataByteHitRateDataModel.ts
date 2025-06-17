// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel extends $dara.Model {
  /**
   * @remarks
   * The byte hit ratio. The byte hit ratio is measured in percentage.
   * 
   * @example
   * 0.8956940476262277
   */
  byteHitRate?: number;
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      byteHitRate: 'ByteHitRate',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRate: 'number',
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

