// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocTypesResponseBodyDocTypeList extends $dara.Model {
  /**
   * @remarks
   * The code of the object type.
   * 
   * @example
   * 100001
   */
  code?: number;
  /**
   * @remarks
   * The ID of the object type.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the object type.
   * 
   * @example
   * C/C++ Source Code
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

