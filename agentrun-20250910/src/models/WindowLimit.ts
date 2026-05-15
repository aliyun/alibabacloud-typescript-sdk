// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WindowLimit extends $dara.Model {
  /**
   * @remarks
   * 限流时间窗口的持续时间，单位为秒
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  durationSecs?: number;
  /**
   * @remarks
   * 在指定时间窗口内允许的最大请求数量
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      durationSecs: 'durationSecs',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecs: 'number',
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

