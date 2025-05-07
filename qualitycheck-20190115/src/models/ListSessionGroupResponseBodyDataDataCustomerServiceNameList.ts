// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionGroupResponseBodyDataDataCustomerServiceNameList extends $dara.Model {
  customerServiceNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerServiceNameList: 'CustomerServiceNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerServiceNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customerServiceNameList)) {
      $dara.Model.validateArray(this.customerServiceNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

