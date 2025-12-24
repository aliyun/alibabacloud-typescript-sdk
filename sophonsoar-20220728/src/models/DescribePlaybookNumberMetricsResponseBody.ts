// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlaybookNumberMetricsResponseBodyMetrics extends $dara.Model {
  /**
   * @remarks
   * The number of enabled playbooks.
   * 
   * @example
   * 50
   */
  startUpNum?: number;
  /**
   * @remarks
   * The total number of playbooks.
   * 
   * @example
   * 100
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      startUpNum: 'StartUpNum',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startUpNum: 'number',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNumberMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics.
   */
  metrics?: DescribePlaybookNumberMetricsResponseBodyMetrics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4CC979E-3D5B-5A6A-BC87-C93C9E861C7B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: DescribePlaybookNumberMetricsResponseBodyMetrics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

