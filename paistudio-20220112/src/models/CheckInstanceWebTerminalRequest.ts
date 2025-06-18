// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceWebTerminalRequest extends $dara.Model {
  /**
   * @example
   * wss://pai-dlc-proxy-cn-shanghai.aliyun.com/terminal/t1157703270994901/dlcmjzjt1dxbmx4h/dlcmjzjt1dxbmx4h-worker-0?Token=******
   */
  checkInfo?: string;
  static names(): { [key: string]: string } {
    return {
      checkInfo: 'CheckInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

