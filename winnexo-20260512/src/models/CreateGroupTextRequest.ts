// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupTextRequest extends $dara.Model {
  /**
   * @remarks
   * 资料描述
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * 当前空间物理目录ID；省略/root使用空间根，首次可能初始化根目录；引用目录不可写
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * 协作空间 ID
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * 资料显示名；最终名称沿用Provider规则
   * 
   * This parameter is required.
   * 
   * @example
   * 项目资料
   */
  name?: string;
  /**
   * @remarks
   * 资料标签，JSON字符串列表
   * 
   * @example
   * example
   */
  sourceTags?: string;
  /**
   * @remarks
   * 租户ID，公共参数；缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 纯文本正文，不能全为空白；Provider沿用去首尾空白规则
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  textContent?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      groupId: 'groupId',
      name: 'name',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
      textContent: 'textContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      groupId: 'string',
      name: 'string',
      sourceTags: 'string',
      tenantId: 'string',
      textContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

