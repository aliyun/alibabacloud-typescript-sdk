// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMailAddressByParamResponseBodyDataMailAddress } from "./QueryMailAddressByParamResponseBodyDataMailAddress";


export class QueryMailAddressByParamResponseBodyData extends $dara.Model {
  mailAddress?: QueryMailAddressByParamResponseBodyDataMailAddress[];
  static names(): { [key: string]: string } {
    return {
      mailAddress: 'mailAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailAddress: { 'type': 'array', 'itemType': QueryMailAddressByParamResponseBodyDataMailAddress },
    };
  }

  validate() {
    if(Array.isArray(this.mailAddress)) {
      $dara.Model.validateArray(this.mailAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

