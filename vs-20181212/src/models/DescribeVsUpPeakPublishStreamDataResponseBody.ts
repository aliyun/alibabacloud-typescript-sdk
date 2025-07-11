// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatasDescribeVsUpPeakPublishStreamData extends $dara.Model {
  bandWidth?: string;
  /**
   * @example
   * 1522252320000
   */
  peakTime?: string;
  /**
   * @example
   * 31
   */
  publishStreamNum?: number;
  /**
   * @example
   * 1522166400000
   */
  queryTime?: string;
  /**
   * @example
   * example.com
   */
  statName?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'BandWidth',
      peakTime: 'PeakTime',
      publishStreamNum: 'PublishStreamNum',
      queryTime: 'QueryTime',
      statName: 'StatName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'string',
      peakTime: 'string',
      publishStreamNum: 'number',
      queryTime: 'string',
      statName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

