// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdpDepartmentsResponseBodyDataDataList extends $dara.Model {
  /**
   * @example
   * 30520
   */
  id?: string;
  /**
   * @example
   * 1440
   */
  idpConfigId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      idpConfigId: 'IdpConfigId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      idpConfigId: 'string',
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

