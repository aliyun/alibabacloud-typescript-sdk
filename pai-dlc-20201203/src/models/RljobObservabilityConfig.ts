// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLJobObservabilityConfig extends $dara.Model {
  /**
   * @remarks
   * 是否开启 Ray Dashboard 入口。Ray 后端缺省 true，Monarch 后端缺省 false；Monarch 不接受 true
   * 
   * @example
   * true
   */
  rayDashboardEnabled?: boolean;
  /**
   * @remarks
   * 是否启用训练观测数据采集，默认 true。
   * 
   * @example
   * true
   */
  xfuseEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      rayDashboardEnabled: 'RayDashboardEnabled',
      xfuseEnabled: 'XfuseEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rayDashboardEnabled: 'boolean',
      xfuseEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

