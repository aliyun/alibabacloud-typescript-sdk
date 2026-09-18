// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * (Required) The request parameters.
   * 
   * @example
   * [{\\"jobId\\":\\"dlcdpfpc96mh63mg\\",\\"pod\\":\\"dlcdpfpc96mh63mg-worker-748\\",\\"regionId\\":\\"cn-wulanchabu\\",\\"userId\\":\\"1458867964644701\\"}]
   */
  dimensions?: string;
  /**
   * @remarks
   * The end time of the query. Default value: the current time.
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
   * The number of entries per query. This parameter is used for paged query with paging. Default value: 1000.
   * 
   * @example
   * 5000
   */
  length?: string;
  /**
   * @remarks
   * The metric name. Not populated. Not in use.
   * 
   * @example
   * JOB_MEMORY_FREE
   */
  metricName?: string;
  /**
   * @remarks
   * The data namespace of the cloud service. For information about the data namespaces of cloud services, see cloud service monitoring items.
   * 
   * @example
   * acs_pai_dlc
   */
  namespace?: string;
  /**
   * @remarks
   * The pagination token. If you do not set this parameter, data on the first page is returned. If a value is returned for this parameter, more pages are available. You can set NextToken to the returned value to retrieve the next page. Repeat this process until a null value is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * 2c6b65b6f9d625d4716568ca19b2064be0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data. Unit: seconds. Valid values: 15, 60, 900, and 3600.
   * 
   * @example
   * 5
   */
  period?: string;
  /**
   * @remarks
   * The start time (UTC) of the time range for querying monitoring data. Default value: one hour before the current time.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The temporary token used for authentication.
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

