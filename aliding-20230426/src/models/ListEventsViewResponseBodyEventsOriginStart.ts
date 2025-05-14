// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventsViewResponseBodyEventsOriginStart extends $dara.Model {
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  dateTime?: string;
  static names(): { [key: string]: string } {
    return {
      dateTime: 'DateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

