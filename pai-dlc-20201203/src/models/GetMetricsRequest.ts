// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetricsRequest extends $dara.Model {
  /**
   * @example
   * [{\\"jobId\\":\\"dlcdpfpc96mh63mg\\",\\"pod\\":\\"dlcdpfpc96mh63mg-worker-748\\",\\"regionId\\":\\"cn-wulanchabu\\",\\"userId\\":\\"1458867964644701\\"}]
   */
  dimensions?: string;
  /**
   * @example
   * 2020-11-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * dlckjd5hm84tmjec
   */
  jobId?: string;
  /**
   * @example
   * 5000
   */
  length?: string;
  /**
   * @example
   * JOB_MEMORY_FREE
   */
  metricName?: string;
  /**
   * @example
   * acs_pai_dlc
   */
  namespace?: string;
  /**
   * @example
   * 2c6b65b6f9d625d4716568ca19b2064be0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @example
   * 5
   */
  period?: string;
  /**
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * eyXXXX-XXXX.XXXXX
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      jobId: 'JobId',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      nextToken: 'NextToken',
      period: 'Period',
      startTime: 'StartTime',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      jobId: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      nextToken: 'string',
      period: 'string',
      startTime: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

