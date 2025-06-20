// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteSQLQueryResponseBodyColumns extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * resource_id
   */
  name?: string;
  /**
   * @remarks
   * The type of the column.
   * 
   * @example
   * varchar
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

