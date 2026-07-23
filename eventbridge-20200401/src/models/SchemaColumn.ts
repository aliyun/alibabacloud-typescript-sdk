// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SchemaColumn extends $dara.Model {
  /**
   * @remarks
   * Column name
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * Column type
   * 
   * @example
   * VARCHAR
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

