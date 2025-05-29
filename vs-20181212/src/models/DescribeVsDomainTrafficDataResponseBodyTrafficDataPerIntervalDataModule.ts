// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 2021-09-20T07:10:42Z
   */
  timeStamp?: string;
  /**
   * @example
   * 100
   */
  trafficValue?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      trafficValue: 'TrafficValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      trafficValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

