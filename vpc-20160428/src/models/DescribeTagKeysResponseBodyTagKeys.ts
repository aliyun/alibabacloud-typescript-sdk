// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTagKeysResponseBodyTagKeysTagKey } from "./DescribeTagKeysResponseBodyTagKeysTagKey";


export class DescribeTagKeysResponseBodyTagKeys extends $dara.Model {
  tagKey?: DescribeTagKeysResponseBodyTagKeysTagKey[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: { 'type': 'array', 'itemType': DescribeTagKeysResponseBodyTagKeysTagKey },
    };
  }

  validate() {
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

