// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLabSessionResponseBodyLabSession extends $dara.Model {
  /**
   * @example
   * 875
   */
  id?: string;
  /**
   * @example
   * -
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

