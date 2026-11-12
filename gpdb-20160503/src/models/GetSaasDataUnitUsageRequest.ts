// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSaasDataUnitUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query in UTC. The format is yyyy-MM-ddTHH:mm:ssZ, and the seconds must be 00. The end time must be later than the start time and no later than the request time. The query range is not automatically truncated.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-20T02:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the undeleted SaaS service. A standard DBInstanceId cannot override it.
   * 
   * This parameter is required.
   * 
   * @example
   * agdb-example
   */
  serviceId?: string;
  /**
   * @remarks
   * The start time of the query in UTC. The format is yyyy-MM-ddTHH:mm:ssZ, and the seconds must be 00. The start time cannot be earlier than 30 days before the request time. The start time and the end time form a left-closed and right-open interval, and the span cannot exceed 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-20T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Specifies the time granularity. Valid values: hour (UTC hour) and day (UTC day). Default value: hour. This parameter only determines the trend aggregation method and is not returned in the response.
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      startTime: 'StartTime',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      regionId: 'string',
      serviceId: 'string',
      startTime: 'string',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

