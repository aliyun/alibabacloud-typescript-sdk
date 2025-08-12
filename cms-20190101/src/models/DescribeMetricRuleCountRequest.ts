// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleCountRequest extends $dara.Model {
  /**
   * @remarks
   * The metric name. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      namespace: 'string',
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

