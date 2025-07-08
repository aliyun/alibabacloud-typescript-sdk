// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPhoneWhiteListNewResponseBodyList extends $dara.Model {
  id?: number;
  phoneNumber?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      phoneNumber: 'PhoneNumber',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      phoneNumber: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

