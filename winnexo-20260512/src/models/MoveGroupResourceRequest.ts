// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveGroupResourceRequest extends $dara.Model {
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
   * 资料当前所在的空间物理目录真实 ID，不支持 root 哨兵
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  sourceDirectoryId?: string;
  /**
   * @remarks
   * 待移动的物理 GROUP 资料 ID；引用资料只读
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  sourceId?: string;
  /**
   * @remarks
   * 同一空间目标物理目录真实 ID，必须与源目录不同
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  targetDirectoryId?: string;
  /**
   * @remarks
   * 租户ID，公共参数；缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      sourceDirectoryId: 'sourceDirectoryId',
      sourceId: 'sourceId',
      targetDirectoryId: 'targetDirectoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      sourceDirectoryId: 'string',
      sourceId: 'string',
      targetDirectoryId: 'string',
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

