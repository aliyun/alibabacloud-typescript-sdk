// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatas } from "./DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatas";


export class DescribeVsUpPeakPublishStreamDataResponseBody extends $dara.Model {
  describeVsUpPeakPublishStreamDatas?: DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatas;
  /**
   * @example
   * 27A3C548-A699-48F9-97CD-F35D81075AF3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      describeVsUpPeakPublishStreamDatas: 'DescribeVsUpPeakPublishStreamDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeVsUpPeakPublishStreamDatas: DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatas,
      requestId: 'string',
    };
  }

  validate() {
    if(this.describeVsUpPeakPublishStreamDatas && typeof (this.describeVsUpPeakPublishStreamDatas as any).validate === 'function') {
      (this.describeVsUpPeakPublishStreamDatas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

