// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeToutiaoLivePlayRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. The time span cannot be greater than 10 hours. If you do not configure StartTime and EndTime, the data within the previous hour is queried. Specify the time in the ISO 8601 standard. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-10-10T20:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-10-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      domain: 'Domain',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      domain: 'string',
      endTime: 'string',
      ownerId: 'number',
      regionId: 'string',
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

