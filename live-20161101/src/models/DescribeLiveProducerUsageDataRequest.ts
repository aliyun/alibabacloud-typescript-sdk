// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveProducerUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain name of the cloud producer studio.
   * 
   * - Supports single or batch domain name queries. Separate multiple domain names with commas (,) for batch queries.
   * - If this parameter is left empty, merged data of all live streaming domain names is returned by default.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2018-10-31T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance to query. Batch query is supported. Separate multiple instances with commas (,).
   * 
   * > If this parameter is left empty, merged data of all instances is returned by default.
   * 
   * @example
   * a17d0184-462d-4630-b2a6-8c26dde2****
   */
  instance?: string;
  /**
   * @remarks
   * The time granularity of the queried data. Valid values: 3600 (1 hour) and 86400 (1 day). Unit: seconds.
   * 
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region to which the domain name belongs. If this parameter is left empty, merged data of all regions is returned by default. Batch query is supported. Separate multiple regions with commas (,).
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
   * The grouping key. You can specify one or more of the following: domain, region, instance, or type. Separate multiple values with commas (,). The specified fields will be grouped in the output.
   * 
   * 
   * > If this parameter is left empty, only aggregated data is returned.
   * 
   * @example
   * type
   */
  splitBy?: string;
  /**
   * @remarks
   * The start time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2018-09-30T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The producer type. Batch query is supported. Separate multiple types with commas (,). Valid values:
   * 
   * - **slidelive**: playlist-based.
   * 
   * - **universal**: general-purpose.
   * 
   * > If this parameter is left empty, merged data of all producer types is returned by default.
   * 
   * @example
   * slidelive
   */
  type?: string;
  /**
   * @remarks
   * The name of the application to which the stream belongs.
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

