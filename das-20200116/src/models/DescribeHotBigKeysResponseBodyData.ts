// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHotBigKeysResponseBodyDataBigKeys } from "./DescribeHotBigKeysResponseBodyDataBigKeys";
import { DescribeHotBigKeysResponseBodyDataHotKeys } from "./DescribeHotBigKeysResponseBodyDataHotKeys";


export class DescribeHotBigKeysResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason why the large key failed to be queried.
   * 
   * @example
   * current version doesn\\"t support
   */
  bigKeyMsg?: string;
  /**
   * @remarks
   * The list of large keys.
   */
  bigKeys?: DescribeHotBigKeysResponseBodyDataBigKeys;
  /**
   * @remarks
   * The reason why the hot key failed to be queried.
   * 
   * @example
   * current version doesn\\"t support
   */
  hotKeyMsg?: string;
  /**
   * @remarks
   * The list of hot keys.
   */
  hotKeys?: DescribeHotBigKeysResponseBodyDataHotKeys;
  static names(): { [key: string]: string } {
    return {
      bigKeyMsg: 'BigKeyMsg',
      bigKeys: 'BigKeys',
      hotKeyMsg: 'HotKeyMsg',
      hotKeys: 'HotKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKeyMsg: 'string',
      bigKeys: DescribeHotBigKeysResponseBodyDataBigKeys,
      hotKeyMsg: 'string',
      hotKeys: DescribeHotBigKeysResponseBodyDataHotKeys,
    };
  }

  validate() {
    if(this.bigKeys && typeof (this.bigKeys as any).validate === 'function') {
      (this.bigKeys as any).validate();
    }
    if(this.hotKeys && typeof (this.hotKeys as any).validate === 'function') {
      (this.hotKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

