// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LineageTask extends $dara.Model {
  /**
   * @remarks
   * The properties of the task.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 12345
   */
  id?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * custom-sql
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

