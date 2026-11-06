// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationComponentPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the application component. You can obtain the ID from the Components parameter returned by the DescribeApplicationAttribute operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pac-*******************
   */
  componentId?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than or equal to the start time. Specify the time in the ISO 8601 standard in the YYYY-MM-DDTHH:mmZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-23T02:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The sampling granularity of the performance data. Unit: seconds.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The performance metrics to query. Separate multiple metrics with commas (,). You can specify up to 5 metrics.
   * 
   * This parameter is required.
   * 
   * @example
   * PolarDBCPU
   */
  key?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDTHH:mmZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-23T01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the performance data.
   * 
   * @example
   * supabase
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      componentId: 'ComponentId',
      endTime: 'EndTime',
      interval: 'Interval',
      key: 'Key',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      componentId: 'string',
      endTime: 'string',
      interval: 'string',
      key: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

