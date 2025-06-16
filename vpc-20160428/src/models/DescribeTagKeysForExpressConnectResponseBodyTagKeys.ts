// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTagKeysForExpressConnectResponseBodyTagKeysTagKey } from "./DescribeTagKeysForExpressConnectResponseBodyTagKeysTagKey";


export class DescribeTagKeysForExpressConnectResponseBodyTagKeys extends $dara.Model {
  tagKey?: DescribeTagKeysForExpressConnectResponseBodyTagKeysTagKey[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: { 'type': 'array', 'itemType': DescribeTagKeysForExpressConnectResponseBodyTagKeysTagKey },
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

