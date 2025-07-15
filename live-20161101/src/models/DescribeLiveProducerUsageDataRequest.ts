// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveProducerUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain of the production studio.
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
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * @example
   * 2018-10-31T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The production studio instance that you want to query. You can specify one or more production studio instances. Separate multiple instances with commas (,).
   * 
   * >  If you do not set this parameter, the usage data of all production studio instances is returned.
   * 
   * @example
   * a17d0184-462d-4630-b2a6-8c26dde2****
   */
  instance?: string;
  /**
   * @remarks
   * The time granularity for a query. Valid values: 3600 and 86400. Unit: seconds.
   * 
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region in which the domain name resides. If you leave this parameter empty, the data of all regions is returned. You can specify multiple regions by separating them with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  regionId?: string;
  /**
   * @remarks
   * The key that is used to group data. You can specify one or more keys. Separate multiple keys with commas (,). Valid values: domain, region, instance, and type. The data for a key that you specify by using the SplitBy parameter is returned by group.
   * 
   * >  If you do not set this parameter, the aggregated data is returned.
   * 
   * @example
   * type
   */
  splitBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2018-09-30T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the production studio. You can specify one or more production studio types. Separate multiple types with commas (,). Valid values:
   * 
   * *   **slidelive**: playlist-mode studio.
   * *   **universal**: general studio.
   * 
   * >  If you do not set this parameter, the usage data of all types of production studios is returned.
   * 
   * @example
   * slidelive
   */
  type?: string;
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      instance: 'Instance',
      interval: 'Interval',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
      type: 'Type',
      app: 'app',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      instance: 'string',
      interval: 'string',
      ownerId: 'number',
      region: 'string',
      regionId: 'string',
      splitBy: 'string',
      startTime: 'string',
      type: 'string',
      app: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

