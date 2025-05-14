// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventResponseBodyLocation extends $dara.Model {
  /**
   * @example
   * room 1-2-3
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

