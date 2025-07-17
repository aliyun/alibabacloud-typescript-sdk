// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseRequest extends $dara.Model {
  /**
   * @example
   * database_name
   */
  name?: string;
  options?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      options: 'options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

