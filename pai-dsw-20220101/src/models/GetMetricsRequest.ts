// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetricsRequest extends $dara.Model {
  /**
   * @example
   * {"userId":"16122852825*****","jobId":"dsw-328d2bbf605*****","regionId":"cn-wulanchabu","pod":"dsw-45680-76766f8778-95gxh"}
   */
  dimensions?: string;
  /**
   * @example
   * 2020-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  length?: string;
  /**
   * @example
   * INSTANCE_SPEC_MEMORY_SWAP
   */
  metricName?: string;
  /**
   * @example
   * acs_pai_dsw
   */
  namespace?: string;
  /**
   * @example
   * 15761485350009dd70bb64cff1f0fff750b08ffff073be5fb1e785e2b020f1a949d5ea14aea7fed82f01dd8****
   */
  nextToken?: string;
  /**
   * @example
   * 60
   */
  period?: string;
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      nextToken: 'NextToken',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      nextToken: 'string',
      period: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

