// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 1000
   */
  reqBpsValue?: string;
  /**
   * @example
   * 2021-12-24T16:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      reqBpsValue: 'ReqBpsValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqBpsValue: 'string',
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

