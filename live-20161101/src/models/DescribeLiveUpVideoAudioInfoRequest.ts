// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveUpVideoAudioInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The format is \\`yyyy-MM-ddTHH:mm:ssZ\\` in UTC.
   * 
   * @example
   * 2015-12-10T15:10:00Z
   */
  endTime?: string;
  ownerId?: number;
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
   * The start time. The format is \\`yyyy-MM-ddTHH:mm:ssZ\\` in UTC.
   * 
   * @example
   * 2015-12-10T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The full name of the stream to query. The format is `rtmp://<ingest domain>/<AppName>/<StreamName>`
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

