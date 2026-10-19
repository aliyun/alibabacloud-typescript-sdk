// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryAutoExtractionSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * 是否同时清空当前记忆范围内的全部自动记忆；开启或关闭时均可使用，不影响手动记忆；不传时为 false
   * 
   * @example
   * true
   */
  clearExisting?: boolean;
  /**
   * @remarks
   * 目标开关状态；true 为开启自动记忆拾取，false 为关闭
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * 写作协作空间 ID；ownerType 为 group 时必填，且当前鉴权用户须为该空间的活跃成员；ownerType 为 user 时不传
   * 
   * @example
   * cg_12345
   */
  groupId?: string;
  /**
   * @remarks
   * 记忆归属范围；user 为当前鉴权用户的个人记忆，group 为指定写作协作空间的记忆；不传时默认为 user
   * 
   * @example
   * group
   */
  ownerType?: string;
  /**
   * @remarks
   * 租户 ID，查询参数；不传时使用调用方的默认租户
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      clearExisting: 'clearExisting',
      enabled: 'enabled',
      groupId: 'groupId',
      ownerType: 'ownerType',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clearExisting: 'boolean',
      enabled: 'boolean',
      groupId: 'string',
      ownerType: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

