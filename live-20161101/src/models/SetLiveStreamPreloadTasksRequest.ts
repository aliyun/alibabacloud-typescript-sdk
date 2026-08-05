// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveStreamPreloadTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The prefetch area. Valid values:
   * - domestic: the Chinese mainland.
   * - overseas: outside the Chinese mainland, including Hong Kong (China), Macao (China), and Taiwan (China).
   * - global: global acceleration.
   *  
   * If you do not specify this parameter, the default prefetch area is the acceleration region configured for your domain name.
   * 
   * @example
   * domestic
   */
  area?: string;
  /**
   * @remarks
   * The streaming domain.
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
   * The live stream URLs. You can specify multiple URLs separated by commas (,). A maximum of 100 URLs can be specified.
   * 
   * This parameter is required.
   */
  playUrl?: string;
  /**
   * @remarks
   * The end time of the prefetch task in UTC. Example: 2016-06-30T19:00:00Z. The interval between EndTime and StartTime cannot exceed 6 hours.
   * 
   * @example
   * 2016-06-30T19:00:00Z
   */
  preloadedEndTime?: string;
  /**
   * @remarks
   * The start time of the prefetch task in UTC. Example: 2016-06-29T19:00:00Z. If you do not specify this parameter, the default prefetch duration is 1 hour.
   * 
   * @example
   * 2016-06-29T19:00:00Z
   */
  preloadedStartTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
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

