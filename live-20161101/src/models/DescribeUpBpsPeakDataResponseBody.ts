// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpBpsPeakDataResponseBodyDescribeUpPeakTrafficsDescribeUpPeakTraffic extends $dara.Model {
  bandWidth?: string;
  peakTime?: string;
  queryTime?: string;
  statName?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'BandWidth',
      peakTime: 'PeakTime',
      queryTime: 'QueryTime',
      statName: 'StatName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'string',
      peakTime: 'string',
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

export class DescribeUpBpsPeakDataResponseBodyDescribeUpPeakTraffics extends $dara.Model {
  describeUpPeakTraffic?: DescribeUpBpsPeakDataResponseBodyDescribeUpPeakTrafficsDescribeUpPeakTraffic[];
  static names(): { [key: string]: string } {
    return {
      describeUpPeakTraffic: 'DescribeUpPeakTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeUpPeakTraffic: { 'type': 'array', 'itemType': DescribeUpBpsPeakDataResponseBodyDescribeUpPeakTrafficsDescribeUpPeakTraffic },
    };
  }

  validate() {
    if(Array.isArray(this.describeUpPeakTraffic)) {
      $dara.Model.validateArray(this.describeUpPeakTraffic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakDataResponseBody extends $dara.Model {
  describeUpPeakTraffics?: DescribeUpBpsPeakDataResponseBodyDescribeUpPeakTraffics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      describeUpPeakTraffics: 'DescribeUpPeakTraffics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeUpPeakTraffics: DescribeUpBpsPeakDataResponseBodyDescribeUpPeakTraffics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.describeUpPeakTraffics && typeof (this.describeUpPeakTraffics as any).validate === 'function') {
      (this.describeUpPeakTraffics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

