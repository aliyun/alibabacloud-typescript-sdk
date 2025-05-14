// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMeetingRoomsScheduleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["4002xxxxx"]
   */
  roomIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      roomIdsShrink: 'RoomIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      roomIdsShrink: 'string',
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

