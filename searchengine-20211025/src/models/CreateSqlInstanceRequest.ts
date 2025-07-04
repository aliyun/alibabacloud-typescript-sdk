// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -1
   */
  parent?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      parent: 'parent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parent: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

