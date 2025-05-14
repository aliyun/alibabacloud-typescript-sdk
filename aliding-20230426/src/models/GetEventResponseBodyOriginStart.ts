// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventResponseBodyOriginStart extends $dara.Model {
  /**
   * @example
   * 2023-01-01T00:00:00Z
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

