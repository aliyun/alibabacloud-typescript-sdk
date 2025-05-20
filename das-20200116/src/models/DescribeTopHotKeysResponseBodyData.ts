// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTopHotKeysResponseBodyDataHotKey } from "./DescribeTopHotKeysResponseBodyDataHotKey";


export class DescribeTopHotKeysResponseBodyData extends $dara.Model {
  hotKey?: DescribeTopHotKeysResponseBodyDataHotKey[];
  static names(): { [key: string]: string } {
    return {
      hotKey: 'HotKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotKey: { 'type': 'array', 'itemType': DescribeTopHotKeysResponseBodyDataHotKey },
    };
  }

  validate() {
    if(Array.isArray(this.hotKey)) {
      $dara.Model.validateArray(this.hotKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

