// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * (Required) Request parameter.
   * 
   * @example
   * [{\\"jobId\\":\\"dlcdpfpc96mh63mg\\",\\"pod\\":\\"dlcdpfpc96mh63mg-worker-748\\",\\"regionId\\":\\"cn-wulanchabu\\",\\"userId\\":\\"1458867964644701\\"}]
   */
  dimensions?: string;
  /**
   * @remarks
   * The end time of the query. Default value: current time.
   * 
   * @example
   * 2020-11-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlckjd5hm84tmjec
   */
  jobId?: string;
  /**
   * @remarks
   * The number of records per query for paged queries. Default value: 1000.
   * 
   * @example
   * 5000
   */
  length?: string;
  /**
   * @remarks
   * Metric name. Not filled. Not in use.
   * 
   * @example
   * JOB_MEMORY_FREE
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace for cloud service monitoring data. For more information about namespaces, see cloud service monitoring metrics.
   * 
   * @example
   * acs_pai_dlc
   */
  namespace?: string;
  /**
   * @remarks
   * The pagination cursor token. If you do not set this parameter, the first page of data is returned. When a NextToken value is returned, more data is available. Use the returned NextToken as a parameter in your next request to retrieve the next page. Repeat until NextToken returns null, which means all data has been retrieved.
   * 
   * @example
   * 2c6b65b6f9d625d4716568ca19b2064be0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The statistical period for monitoring data. Unit: seconds. Valid values: 15, 60, 900, and 3600.
   * 
   * @example
   * 5
   */
  period?: string;
  /**
   * @remarks
   * The start time of the monitoring data query interval (UTC). Default value: one hour ago.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * A temporary token used for authentication.
   * 
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

