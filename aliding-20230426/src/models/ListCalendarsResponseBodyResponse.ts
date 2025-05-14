// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCalendarsResponseBodyResponseCalendars } from "./ListCalendarsResponseBodyResponseCalendars";


export class ListCalendarsResponseBodyResponse extends $dara.Model {
  calendars?: ListCalendarsResponseBodyResponseCalendars[];
  static names(): { [key: string]: string } {
    return {
      calendars: 'Calendars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendars: { 'type': 'array', 'itemType': ListCalendarsResponseBodyResponseCalendars },
    };
  }

  validate() {
    if(Array.isArray(this.calendars)) {
      $dara.Model.validateArray(this.calendars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

