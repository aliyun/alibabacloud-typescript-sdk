// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDetectPornDataRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the stream belongs.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The streaming domain to query.
   * 
   * - You can query one or more domain names. To query multiple domain names, separate them with commas (,).
   * 
   * - If you do not specify this parameter, the service returns the merged data for all streaming domains.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2017-12-10T09:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * You have a daily free quota for image scans. Valid values:
   * 
   * - **free**
   * 
   * - **charge**
   * 
   * @example
   * free
   */
  fee?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the domain name is located.
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
   * The detection scenario. Valid values:
   * 
   * - **porn** (default): pornography detection.
   * 
   * - **terrorism**: terrorism and political content detection.
   * 
   * - **ad**: ad and text violation detection.
   * 
   * - **live**: undesirable live streaming scenario detection.
   * 
   * - **logo**: logo detection.
   * 
   * @example
   * porn
   */
  scene?: string;
  /**
   * @remarks
   * The list of grouping fields. Separate multiple fields with commas (,).
   * 
   * > If you leave this parameter empty, the service returns only TimeStamp and Count.
   * 
   * @example
   * liveApp****,liveStream****
   */
  splitBy?: string;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > - You can query data from the last 90 days.
   * 
   * - The minimum data granularity is 5 minutes. If you leave this parameter empty, the service queries data from the last 24 hours by default.
   * 
   * @example
   * 2017-12-10T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The stream name.
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

