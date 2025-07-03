// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserEncryptionKeyListResponseBodyData extends $dara.Model {
  keyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      keyIds: 'KeyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keyIds)) {
      $dara.Model.validateArray(this.keyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

