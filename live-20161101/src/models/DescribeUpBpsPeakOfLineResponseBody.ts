// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpBpsPeakOfLineResponseBodyDescribeUpBpsPeakOfLinesDescribeUpBpsPeakOfLine extends $dara.Model {
  bandWidth?: number;
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

