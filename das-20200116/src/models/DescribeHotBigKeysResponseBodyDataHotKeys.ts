// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHotBigKeysResponseBodyDataHotKeysHotKey } from "./DescribeHotBigKeysResponseBodyDataHotKeysHotKey";


export class DescribeHotBigKeysResponseBodyDataHotKeys extends $dara.Model {
  hotKey?: DescribeHotBigKeysResponseBodyDataHotKeysHotKey[];
  static names(): { [key: string]: string } {
    return {
      hotKey: 'HotKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotKey: { 'type': 'array', 'itemType': DescribeHotBigKeysResponseBodyDataHotKeysHotKey },
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

