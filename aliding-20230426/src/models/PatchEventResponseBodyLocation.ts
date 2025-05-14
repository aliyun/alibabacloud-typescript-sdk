// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchEventResponseBodyLocation extends $dara.Model {
  /**
   * @example
   * true
   */
  displayName?: string;
  meetingRooms?: string[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      meetingRooms: 'MeetingRooms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      meetingRooms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.meetingRooms)) {
      $dara.Model.validateArray(this.meetingRooms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

