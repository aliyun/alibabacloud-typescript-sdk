// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryInvalidAddressResponseBodyDataMailDetail } from "./QueryInvalidAddressResponseBodyDataMailDetail";


export class QueryInvalidAddressResponseBodyData extends $dara.Model {
  mailDetail?: QueryInvalidAddressResponseBodyDataMailDetail[];
  static names(): { [key: string]: string } {
    return {
      mailDetail: 'mailDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailDetail: { 'type': 'array', 'itemType': QueryInvalidAddressResponseBodyDataMailDetail },
    };
  }

  validate() {
    if(Array.isArray(this.mailDetail)) {
      $dara.Model.validateArray(this.mailDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

