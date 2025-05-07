// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionGroupResponseBodyDataDataCustomerIdList extends $dara.Model {
  customerIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerIdList: 'CustomerIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customerIdList)) {
      $dara.Model.validateArray(this.customerIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

