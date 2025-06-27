// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePdnsAppKeysResponseBodyAppKeys } from "./DescribePdnsAppKeysResponseBodyAppKeys";


export class DescribePdnsAppKeysResponseBody extends $dara.Model {
  appKeys?: DescribePdnsAppKeysResponseBodyAppKeys[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appKeys: 'AppKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeys: { 'type': 'array', 'itemType': DescribePdnsAppKeysResponseBodyAppKeys },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appKeys)) {
      $dara.Model.validateArray(this.appKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

