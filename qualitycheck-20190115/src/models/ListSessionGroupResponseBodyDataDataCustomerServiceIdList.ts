// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionGroupResponseBodyDataDataCustomerServiceIdList extends $dara.Model {
  customerServiceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerServiceIdList: 'CustomerServiceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerServiceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customerServiceIdList)) {
      $dara.Model.validateArray(this.customerServiceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

