// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientUsersResponseBodyDataDataListDepartment extends $dara.Model {
  /**
   * @example
   * 105
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

