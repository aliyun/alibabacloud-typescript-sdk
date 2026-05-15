// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WindowLimit } from "./WindowLimit";


export class RateLimitRule extends $dara.Model {
  /**
   * @remarks
   * 限流规则的创建时间，采用ISO 8601格式
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * 限流规则的描述符标识，用于关联具体的限流对象
   * 
   * @example
   * model:gpt-4
   */
  descriptorId?: string;
  /**
   * @remarks
   * 限流规则的描述符类型，如model、user等
   * 
   * @example
   * model
   */
  descriptorType?: string;
  /**
   * @remarks
   * 限流规则是否启用，true表示启用，false表示禁用
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * 限流规则最后一次更新的时间，采用ISO 8601格式
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * 限流规则的唯一标识符
   * 
   * @example
   * 12345678-1234-1234-1234-123456789abc
   */
  rateLimitRuleId?: string;
  /**
   * @remarks
   * 限流时间窗口配置列表，支持多个窗口叠加限流
   */
  windows?: WindowLimit[];
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      descriptorId: 'descriptorId',
      descriptorType: 'descriptorType',
      enabled: 'enabled',
      lastUpdatedAt: 'lastUpdatedAt',
      rateLimitRuleId: 'rateLimitRuleId',
      windows: 'windows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      descriptorId: 'string',
      descriptorType: 'string',
      enabled: 'boolean',
      lastUpdatedAt: 'string',
      rateLimitRuleId: 'string',
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

