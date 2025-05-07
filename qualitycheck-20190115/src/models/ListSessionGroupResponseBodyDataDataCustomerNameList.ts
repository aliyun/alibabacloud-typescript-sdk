// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionGroupResponseBodyDataDataCustomerNameList extends $dara.Model {
  customerNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerNameList: 'CustomerNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customerNameList)) {
      $dara.Model.validateArray(this.customerNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

