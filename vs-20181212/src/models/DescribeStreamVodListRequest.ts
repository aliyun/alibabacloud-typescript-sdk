// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamVodListRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the video-on-demand records. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1634873413
   */
  endTime?: number;
  /**
   * @remarks
   * The stream ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 18526049******19118918-cn-beijing
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
   * The start time of the video-on-demand records. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1639077653
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      id: 'Id',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      id: 'string',
      ownerId: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

