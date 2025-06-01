// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientUserResponseBodyDataDepartment extends $dara.Model {
  /**
   * @example
   * 107
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

