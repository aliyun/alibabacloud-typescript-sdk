// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSchemeTaskConfigResponseBodyDataData } from "./ListSchemeTaskConfigResponseBodyDataData";


export class ListSchemeTaskConfigResponseBodyData extends $dara.Model {
  data?: ListSchemeTaskConfigResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

