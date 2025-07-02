// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingGroupConfigNodeOfflinePolicy extends $dara.Model {
  /**
   * @remarks
   * 下线模式,是否为优雅下线。
   * 
   * @example
   * DEFAULT
   */
  mode?: string;
  /**
   * @remarks
   * 下线超时时间,单位毫秒。
   * 
   * @example
   * 1000
   */
  timeoutMs?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      timeoutMs: 'TimeoutMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      timeoutMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

