// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventResponseBodyOnlineMeetingInfo extends $dara.Model {
  /**
   * @example
   * 123
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
   * http://meeting
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

