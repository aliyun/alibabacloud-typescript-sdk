// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpBpsPeakOfLineResponseBodyDescribeUpBpsPeakOfLinesDescribeUpBpsPeakOfLine extends $dara.Model {
  /**
   * @remarks
   * The daily peak inbound bandwidth of the leased line.
   * 
   * @example
   * 777.2727083333333
   */
  bandWidth?: number;
  /**
   * @remarks
   * The time when the daily peak bandwidth of the leased line is reached.
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
      bandWidth: 'number',
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

export class DescribeUpBpsPeakOfLineResponseBodyDescribeUpBpsPeakOfLines extends $dara.Model {
  describeUpBpsPeakOfLine?: DescribeUpBpsPeakOfLineResponseBodyDescribeUpBpsPeakOfLinesDescribeUpBpsPeakOfLine[];
  static names(): { [key: string]: string } {
    return {
      describeUpBpsPeakOfLine: 'DescribeUpBpsPeakOfLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeUpBpsPeakOfLine: { 'type': 'array', 'itemType': DescribeUpBpsPeakOfLineResponseBodyDescribeUpBpsPeakOfLinesDescribeUpBpsPeakOfLine },
    };
  }

  validate() {
    if(Array.isArray(this.describeUpBpsPeakOfLine)) {
      $dara.Model.validateArray(this.describeUpBpsPeakOfLine);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakOfLineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about peak inbound bandwidth of the leased line on each day.
   */
  describeUpBpsPeakOfLines?: DescribeUpBpsPeakOfLineResponseBodyDescribeUpBpsPeakOfLines;
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
      describeUpBpsPeakOfLines: 'DescribeUpBpsPeakOfLines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeUpBpsPeakOfLines: DescribeUpBpsPeakOfLineResponseBodyDescribeUpBpsPeakOfLines,
      requestId: 'string',
    };
  }

  validate() {
    if(this.describeUpBpsPeakOfLines && typeof (this.describeUpBpsPeakOfLines as any).validate === 'function') {
      (this.describeUpBpsPeakOfLines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

