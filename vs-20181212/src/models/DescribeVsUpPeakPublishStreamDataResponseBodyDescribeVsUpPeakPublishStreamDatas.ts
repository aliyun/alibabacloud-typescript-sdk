// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatasDescribeVsUpPeakPublishStreamData } from "./DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatasDescribeVsUpPeakPublishStreamData";


export class DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatas extends $dara.Model {
  describeVsUpPeakPublishStreamData?: DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatasDescribeVsUpPeakPublishStreamData[];
  static names(): { [key: string]: string } {
    return {
      describeVsUpPeakPublishStreamData: 'DescribeVsUpPeakPublishStreamData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeVsUpPeakPublishStreamData: { 'type': 'array', 'itemType': DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatasDescribeVsUpPeakPublishStreamData },
    };
  }

  validate() {
    if(Array.isArray(this.describeVsUpPeakPublishStreamData)) {
      $dara.Model.validateArray(this.describeVsUpPeakPublishStreamData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

