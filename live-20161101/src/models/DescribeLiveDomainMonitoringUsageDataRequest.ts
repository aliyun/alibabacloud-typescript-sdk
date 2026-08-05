// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainMonitoringUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain to query.
   * 
   * - You can specify a single domain name or multiple domain names. Separate multiple domain names with commas (,).
   * - If this parameter is left empty, the merged data of all live streaming domain names is returned by default.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-12-10T22:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The monitoring session ID. If this parameter is left empty, the merged data of all monitoring sessions is returned by default. You can specify multiple IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * e62af24d-a354-3b0c-9f1f-da592c4b****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time granularity for the query. Valid values: **3600** (hour) and **86400** (day).
   * 
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The live center region. If this parameter is left empty, the merged data of all regions is returned by default. You can specify multiple regions. Separate multiple regions with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
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
   * The grouping key. Default value: **resolution**, which indicates grouping by resolution. Valid values: **domain**, **region**, **instance**, and **resolution**. You can specify multiple values. Separate multiple values with commas (,).
   * 
   * @example
   * resolution
   */
  splitBy?: string;
  /**
   * @remarks
   * The start time. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * - The minimum data granularity is 1 hour.
   * - If this parameter is not specified, data of the last 24 hours is returned by default.
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

