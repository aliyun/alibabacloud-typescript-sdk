// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRealtimeDeliveryAccRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain.
   * - You can specify a single domain name or multiple domain names. Separate multiple domain names with commas (,).
   * - If this parameter is not specified, the merged data of all live streaming domain names is returned by default.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * The end time must be later than the start time. The interval between the start time and end time cannot exceed one year.
   * 
   * @example
   * 2015-12-10T21:05:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the queried data. Unit: seconds. Valid values:
   * 
   * - **300**
   * - **3600**
   * - **86400**
   * 
   * If this parameter is not specified or the specified value is not supported, the default value is 300 seconds when the time span does not exceed 3 days, 3600 seconds when the time span exceeds 3 days, and 86400 seconds when the time span exceeds 30 days.
   * 
   * @example
   * 3600
   */
  interval?: string;
  /**
   * @remarks
   * The Logstore for real-time log delivery. If this parameter is not specified, the merged data of all Logstores is returned by default.
   * 
   * @example
   * logstore_example
   */
  logStore?: string;
  ownerId?: number;
  /**
   * @remarks
   * The Project for real-time log delivery. If this parameter is not specified, the merged data of all Projects is returned by default.
   * 
   * @example
   * project_example
   */
  project?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
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

