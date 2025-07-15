// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainMonitoringUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain to query.
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
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-12-10T22:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the monitoring session. If you leave this parameter empty, data of all monitoring sessions is queried by default. Separate multiple session IDs with commas (,).
   * 
   * @example
   * e62af24d-a354-3b0c-9f1f-da592c4b****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time granularity. Valid values: **3600** and **86400**. 3600 specifies that data is queried by hour and 86400 specifies that data is queried by day.
   * 
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region of the live center. If you leave this parameter empty, data of all regions is queried by default. Separate multiple regions with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  regionId?: string;
  /**
   * @remarks
   * The key that is used to group data. Valid values: **domain**, **region**, **instance**, and **resolution**. Default value: **resolution**. resolution specifies that data is grouped by resolution. Separate multiple values with commas (,).
   * 
   * @example
   * resolution
   */
  splitBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * *   The time must be in UTC.
   * *   The minimum data granularity is 1 hour.
   * *   If you leave this parameter empty, data in the previous 24 hours is queried.
   * 
   * @example
   * 2022-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      instanceId: 'string',
      interval: 'string',
      ownerId: 'number',
      region: 'string',
      regionId: 'string',
      splitBy: 'string',
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

