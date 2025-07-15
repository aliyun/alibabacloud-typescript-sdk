// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveStreamPreloadTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The acceleration region where you want to prefetch the live content. Valid values:
   * 
   * *   domestic: regions in the Chinese mainland.
   * *   overseas: regions outside the Chinese mainland.
   * *   global: regions in and outside the Chinese mainland.
   * 
   * If you do not specify this parameter, the acceleration region configured for the domain name is used.
   * 
   * @example
   * domestic
   */
  area?: string;
  /**
   * @remarks
   * The streaming domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The streaming URL. You can specify up to 100 streaming URLs in a request. Separate multiple streaming URLs with commas (,).
   * 
   * This parameter is required.
   */
  playUrl?: string;
  /**
   * @remarks
   * The end time of the prefetch task. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2016-06-30T19:00:00Z. The interval between the start time and end time cannot exceed 6 hours.
   * 
   * @example
   * 2016-06-30T19:00:00Z
   */
  preloadedEndTime?: string;
  /**
   * @remarks
   * The start time of the prefetch task. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2016-06-29T19:00:00Z. If you do not specify this parameter, the prefetch task runs for 1 hour by default.
   * 
   * @example
   * 2016-06-29T19:00:00Z
   */
  preloadedStartTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      playUrl: 'PlayUrl',
      preloadedEndTime: 'PreloadedEndTime',
      preloadedStartTime: 'PreloadedStartTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      domainName: 'string',
      ownerId: 'number',
      playUrl: 'string',
      preloadedEndTime: 'string',
      preloadedStartTime: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

