// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterUsersResponseBodyUsersSupportLoginIdps extends $dara.Model {
  idpId?: string;
  idpName?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      idpName: 'IdpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'string',
      idpName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

