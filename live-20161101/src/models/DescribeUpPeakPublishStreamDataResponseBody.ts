// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpPeakPublishStreamDataResponseBodyDescribeUpPeakPublishStreamDatasDescribeUpPeakPublishStreamData extends $dara.Model {
  bandWidth?: string;
  peakTime?: string;
  publishStreamNum?: number;
  queryTime?: string;
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

export class DescribeUpPeakPublishStreamDataResponseBodyDescribeUpPeakPublishStreamDatas extends $dara.Model {
  describeUpPeakPublishStreamData?: DescribeUpPeakPublishStreamDataResponseBodyDescribeUpPeakPublishStreamDatasDescribeUpPeakPublishStreamData[];
  static names(): { [key: string]: string } {
    return {
      describeUpPeakPublishStreamData: 'DescribeUpPeakPublishStreamData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeUpPeakPublishStreamData: { 'type': 'array', 'itemType': DescribeUpPeakPublishStreamDataResponseBodyDescribeUpPeakPublishStreamDatasDescribeUpPeakPublishStreamData },
    };
  }

  validate() {
    if(Array.isArray(this.describeUpPeakPublishStreamData)) {
      $dara.Model.validateArray(this.describeUpPeakPublishStreamData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpPeakPublishStreamDataResponseBody extends $dara.Model {
  describeUpPeakPublishStreamDatas?: DescribeUpPeakPublishStreamDataResponseBodyDescribeUpPeakPublishStreamDatas;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CFDE7AB-571A-14EA-B072-989FF753****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      describeUpPeakPublishStreamDatas: 'DescribeUpPeakPublishStreamDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeUpPeakPublishStreamDatas: DescribeUpPeakPublishStreamDataResponseBodyDescribeUpPeakPublishStreamDatas,
      requestId: 'string',
    };
  }

  validate() {
    if(this.describeUpPeakPublishStreamDatas && typeof (this.describeUpPeakPublishStreamDatas as any).validate === 'function') {
      (this.describeUpPeakPublishStreamDatas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

