// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WindowLimit } from "./WindowLimit";


export class UpdateRateLimitRuleInput extends $dara.Model {
  /**
   * @remarks
   * 是否启用该限流规则
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * 限流时间窗口配置列表，提供时将整组覆盖
   */
  windows?: WindowLimit[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      windows: 'windows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      windows: { 'type': 'array', 'itemType': WindowLimit },
    };
  }

  validate() {
    if(Array.isArray(this.windows)) {
      $dara.Model.validateArray(this.windows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

