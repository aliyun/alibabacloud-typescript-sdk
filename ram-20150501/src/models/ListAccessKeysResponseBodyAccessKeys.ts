// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAccessKeysResponseBodyAccessKeysAccessKey } from "./ListAccessKeysResponseBodyAccessKeysAccessKey";


export class ListAccessKeysResponseBodyAccessKeys extends $dara.Model {
  accessKey?: ListAccessKeysResponseBodyAccessKeysAccessKey[];
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: { 'type': 'array', 'itemType': ListAccessKeysResponseBodyAccessKeysAccessKey },
    };
  }

  validate() {
    if(Array.isArray(this.accessKey)) {
      $dara.Model.validateArray(this.accessKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

