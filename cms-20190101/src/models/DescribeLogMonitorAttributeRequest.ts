// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogMonitorAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The metric name. Exact match is supported.
   * 
   * For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

