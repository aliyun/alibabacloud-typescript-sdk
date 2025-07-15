// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainStreamTranscodeDataRequest extends $dara.Model {
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
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-10T22:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the query. Unit: seconds. Valid values:
   * 
   * *   **3600**: 1 hour
   * *   **86400**: 1 day
   * 
   * >  If you do not specify this parameter, the time granularity of 1 hour is used by default.
   * 
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The time precision of the query. Valid values:
   * 
   * *   **min** (default): in minutes.
   * *   **sec**: in seconds.
   * 
   * @example
   * min
   */
  precision?: string;
  regionId?: string;
  /**
   * @remarks
   * The key that is used to group data. Valid values:
   * 
   * *   **domain**: The DomainName parameter is available in the response only if Split is set to domain.
   * *   **region**: The Region parameter is available in the response only if Split is set to region.
   * *   **transcode_type**: The TanscodeType parameter is available in the response only if Split is set to transcode_type.
   * *   **resolution**: The Resolution parameter is available in the response only if Split is set to resolution.
   * *   **fps**: The Fps parameter is available in the response only if Split is set to fps.
   * 
   * You can specify one or more keys. If you specify multiple keys, separate them with commas (,).
   * 
   * Default value: `domain,region,transcode_type,resolution,fps`.
   * 
   * @example
   * domain
   */
  split?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * *   The minimum query interval is 1 hour.
   * *   If you do not set this parameter, the transcoding length for the last 24 hours is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      precision: 'Precision',
      regionId: 'RegionId',
      split: 'Split',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      precision: 'string',
      regionId: 'string',
      split: 'string',
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

