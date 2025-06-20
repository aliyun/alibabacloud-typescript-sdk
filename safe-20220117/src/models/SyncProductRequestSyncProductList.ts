// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SyncProductRequestSyncProductListInnerProductList } from "./SyncProductRequestSyncProductListInnerProductList";


export class SyncProductRequestSyncProductList extends $dara.Model {
  code?: string;
  innerProductList?: SyncProductRequestSyncProductListInnerProductList[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      innerProductList: 'InnerProductList',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      innerProductList: { 'type': 'array', 'itemType': SyncProductRequestSyncProductListInnerProductList },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.innerProductList)) {
      $dara.Model.validateArray(this.innerProductList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

