// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SyncProductRequestSyncProductList } from "./SyncProductRequestSyncProductList";


export class SyncProductRequest extends $dara.Model {
  authKey?: string;
  authSign?: string;
  reqTimestamp?: number;
  syncProductList?: SyncProductRequestSyncProductList[];
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSign: 'AuthSign',
      reqTimestamp: 'ReqTimestamp',
      syncProductList: 'SyncProductList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authSign: 'string',
      reqTimestamp: 'number',
      syncProductList: { 'type': 'array', 'itemType': SyncProductRequestSyncProductList },
    };
  }

  validate() {
    if(Array.isArray(this.syncProductList)) {
      $dara.Model.validateArray(this.syncProductList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

