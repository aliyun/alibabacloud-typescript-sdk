// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDetectPornDataRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The main streaming domain to query.
   * 
   * *   You can query one or more domain names. If you specify multiple domain names, separate them with commas (,).
   * *   If you do not specify this parameter, the data of all domain names within your Alibaba Cloud account is returned.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2017-12-10T09:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether a quota of free image scanning is available. Valid values:
   * 
   * *   **free**: specifies that a quota of free image scanning is available.
   * *   **charge**: specifies that a quota of free image scanning is not available and fees are charged.
   * 
   * @example
   * free
   */
  fee?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the domain name resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  regionId?: string;
  /**
   * @remarks
   * The moderation scenario. Valid values:
   * 
   * *   **porn**: pornography detection. This is the default value.
   * *   **terrorism**: terrorism detection
   * *   **ad**: ad violation detection
   * *   **live**: undesirable scene detection
   * *   **logo**: logo detection
   * 
   * @example
   * porn
   */
  scene?: string;
  /**
   * @remarks
   * The fields based on which data is grouped. Separate multiple fields with commas (,).
   * 
   * > If you leave the **SplitBy** parameter empty, only the **TimeStamp** and **Count** parameters are returned.
   * 
   * @example
   * liveApp****,liveStream****
   */
  splitBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > 
   * 
   * *   You can query data in the last 90 days.
   * 
   * *   The minimum data granularity is 5 minutes. If you do not specify this parameter, data in the last 24 hours is queried.
   * 
   * @example
   * 2017-12-10T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * liveStream****
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      domainName: 'DomainName',
      endTime: 'EndTime',
      fee: 'Fee',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      scene: 'Scene',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      domainName: 'string',
      endTime: 'string',
      fee: 'string',
      ownerId: 'number',
      region: 'string',
      regionId: 'string',
      scene: 'string',
      splitBy: 'string',
      startTime: 'string',
      stream: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

