// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPropertyRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

