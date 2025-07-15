// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpPeakPublishStreamDataResponseBodyDescribeUpPeakPublishStreamDatasDescribeUpPeakPublishStreamData extends $dara.Model {
  /**
   * @remarks
   * The daily peak inbound bandwidth.
   * 
   * @example
   * 777.2727083333333
   */
  bandWidth?: string;
  /**
   * @remarks
   * The time when the daily peak number of concurrently ingested streams is reached.
   * 
   * @example
   * 1522180000000
   */
  peakTime?: string;
  /**
   * @remarks
   * The daily peak number of concurrently ingested streams.
   * 
   * @example
   * 36
   */
  publishStreamNum?: number;
  /**
   * @remarks
   * The time queried on the day.
   * 
   * @example
   * 1522080000000
   */
  queryTime?: string;
  /**
   * @remarks
   * The category of the statistical data. If the DomainSwitch parameter is set to on, the value of this parameter is the domain name. If the DomainSwitch parameter is set to off or not specified, the value of this parameter is the user ID.
   * 
   * @example
   * push-live.aliyuncs.com
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
  /**
   * @remarks
   * The information about the peak number of concurrently ingested streams on each day.
   */
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

