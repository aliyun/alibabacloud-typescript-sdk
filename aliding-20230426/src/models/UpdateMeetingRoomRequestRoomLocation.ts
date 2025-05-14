// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMeetingRoomRequestRoomLocation extends $dara.Model {
  desc?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

