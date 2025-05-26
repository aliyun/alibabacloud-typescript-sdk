// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIpfilterListResponseBodyDataIpfilters } from "./GetIpfilterListResponseBodyDataIpfilters";


export class GetIpfilterListResponseBodyData extends $dara.Model {
  ipfilters?: GetIpfilterListResponseBodyDataIpfilters[];
  static names(): { [key: string]: string } {
    return {
      ipfilters: 'ipfilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipfilters: { 'type': 'array', 'itemType': GetIpfilterListResponseBodyDataIpfilters },
    };
  }

  validate() {
    if(Array.isArray(this.ipfilters)) {
      $dara.Model.validateArray(this.ipfilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

