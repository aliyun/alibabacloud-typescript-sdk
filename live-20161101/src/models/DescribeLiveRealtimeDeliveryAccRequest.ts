// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRealtimeDeliveryAccRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain.
   * 
   * *   You can query one or more domain names. If you specify multiple domain names, separate them with commas (,).
   * *   If you leave this parameter empty, the data of all domain names within your Alibaba Cloud account is returned.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * The end time must be later than the start time. The maximum time range that can be specified is one year.
   * 
   * @example
   * 2015-12-10T21:05:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the query. Unit: seconds. Valid values:
   * 
   * *   **300**
   * *   **3600**
   * *   **86400**
   * 
   * If you specify an invalid value or do not specify this parameter, the default value is used. If the specified time range is no more than three days, the default value is 300. If the specified time range is more than three days and no more than 30 days, the default value is 3600. If the specified time range is more than 30 days, the default value is 86400.
   * 
   * @example
   * 3600
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Logstore to which log entries are delivered. If you leave this parameter empty, the data of all Logstores is returned.
   * 
   * @example
   * logstore_example
   */
  logStore?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the Log Service project that is used for real-time log delivery. If you leave this parameter empty, the data of all Log Service projects is returned.
   * 
   * @example
   * project_example
   */
  project?: string;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      logStore: 'LogStore',
      ownerId: 'OwnerId',
      project: 'Project',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      logStore: 'string',
      ownerId: 'number',
      project: 'string',
      regionId: 'string',
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

