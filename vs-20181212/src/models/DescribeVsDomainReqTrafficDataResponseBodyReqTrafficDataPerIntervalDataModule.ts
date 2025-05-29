// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 10000
   */
  reqTrafficValue?: string;
  /**
   * @example
   * 2021-09-22T03:40:41Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      reqTrafficValue: 'ReqTrafficValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqTrafficValue: 'string',
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

