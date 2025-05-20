// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHotKeysResponseBodyDataHotKey } from "./DescribeHotKeysResponseBodyDataHotKey";


export class DescribeHotKeysResponseBodyData extends $dara.Model {
  hotKey?: DescribeHotKeysResponseBodyDataHotKey[];
  static names(): { [key: string]: string } {
    return {
      hotKey: 'HotKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotKey: { 'type': 'array', 'itemType': DescribeHotKeysResponseBodyDataHotKey },
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

