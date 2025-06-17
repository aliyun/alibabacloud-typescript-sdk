// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeQpsDataResponseBodyDataQpsModel extends $dara.Model {
  /**
   * @remarks
   * The number of queries per second.
   * 
   * @example
   * 1851.25
   */
  qps?: number;
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the yyyy-MM-ddTHH:mm:ssZ format in the ISO 8601 standard and is in UTC.
   * 
   * @example
   * 2019-12-02T11:25:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      qps: 'Qps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qps: 'number',
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

