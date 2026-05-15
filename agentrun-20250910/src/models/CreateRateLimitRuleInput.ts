// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WindowLimit } from "./WindowLimit";


export class CreateRateLimitRuleInput extends $dara.Model {
  /**
   * @remarks
   * 限流规则的描述符标识；非model维时必填，model维由服务端拼接
   * 
   * @example
   * model:gpt-4
   */
  descriptorId?: string;
  /**
   * @remarks
   * 限流规则的描述符类型，如model、user等
   * 
   * This parameter is required.
   * 
   * @example
   * model
   */
  descriptorType?: string;
  /**
   * @remarks
   * 是否启用该限流规则
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * 限流时间窗口配置列表，至少需要一个窗口
   * 
   * This parameter is required.
   */
  windows?: WindowLimit[];
  static names(): { [key: string]: string } {
    return {
      descriptorId: 'descriptorId',
      descriptorType: 'descriptorType',
      enabled: 'enabled',
      windows: 'windows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      descriptorId: 'string',
      descriptorType: 'string',
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

