// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListKyuubiServicesResponseBodyDataKyuubiServices } from "./ListKyuubiServicesResponseBodyDataKyuubiServices";


export class ListKyuubiServicesResponseBodyData extends $dara.Model {
  kyuubiServices?: ListKyuubiServicesResponseBodyDataKyuubiServices[];
  static names(): { [key: string]: string } {
    return {
      kyuubiServices: 'kyuubiServices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kyuubiServices: { 'type': 'array', 'itemType': ListKyuubiServicesResponseBodyDataKyuubiServices },
    };
  }

  validate() {
    if(Array.isArray(this.kyuubiServices)) {
      $dara.Model.validateArray(this.kyuubiServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

