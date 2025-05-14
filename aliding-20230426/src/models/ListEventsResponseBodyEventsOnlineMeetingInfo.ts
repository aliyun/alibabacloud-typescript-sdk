// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventsResponseBodyEventsOnlineMeetingInfo extends $dara.Model {
  /**
   * @example
   * 5c4df21dxxxx-a6db402b9f3a
   */
  conferenceId?: string;
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * dingtalk
   */
  type?: string;
  /**
   * @example
   * dingtalk://dingtalkclient/page/videoCoxxxxndar?confId=5c4df21dxxxx2b9f3a&calendarId=92xxxx36
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      extraInfo: 'ExtraInfo',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

