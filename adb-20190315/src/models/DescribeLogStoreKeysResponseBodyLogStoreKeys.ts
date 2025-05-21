// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogStoreKeysResponseBodyLogStoreKeys extends $dara.Model {
  logStoreKey?: string[];
  static names(): { [key: string]: string } {
    return {
      logStoreKey: 'LogStoreKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.logStoreKey)) {
      $dara.Model.validateArray(this.logStoreKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

