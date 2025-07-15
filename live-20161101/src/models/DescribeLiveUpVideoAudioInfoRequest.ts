// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveUpVideoAudioInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2015-12-10T15:10:00Z
   */
  endTime?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the stream that you want to query. Specify this parameter in the following format: `rtmp://Ingest domain/Application name/Stream name`.
   * 
   * @example
   * 2015-12-10T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **DescribeLiveUpVideoAudioInfo**.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://example.com/AppName/StreamName
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

