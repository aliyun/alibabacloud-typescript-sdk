// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance type.
   * 
   * @example
   * efg1.nvga1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

