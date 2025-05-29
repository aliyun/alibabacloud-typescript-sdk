// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordList } from "./DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordList";


export class DescribeVsPullStreamInfoConfigResponseBody extends $dara.Model {
  liveAppRecordList?: DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordList;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveAppRecordList: 'LiveAppRecordList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecordList: DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveAppRecordList && typeof (this.liveAppRecordList as any).validate === 'function') {
      (this.liveAppRecordList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

