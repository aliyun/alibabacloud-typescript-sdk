// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryDetailRequest extends $dara.Model {
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
      groupId: 'groupId',
      ownerType: 'ownerType',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

