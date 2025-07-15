// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpBpsPeakDataResponseBodyDescribeUpPeakTrafficsDescribeUpPeakTraffic extends $dara.Model {
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
   * The time when the daily peak bandwidth is reached.
   * 
   * @example
   * 1522180000000
   */
  peakTime?: string;
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
  /**
   * @remarks
   * The information about peak inbound bandwidth on each day.
   */
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

