// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DentriesAppPropertiesValue extends $dara.Model {
  name?: string;
  value?: string;
  /**
   * @example
   * PRIVATE
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

