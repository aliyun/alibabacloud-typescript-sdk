// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReparseGroupSourceRequest extends $dara.Model {
  /**
   * @remarks
   * 是否等待解析完成；默认 false 异步受理，true 同步等待，网关超时 300000ms
   * 
   * @example
   * false
   */
  forceSync?: boolean;
  /**
   * @remarks
   * 资料所属协作空间 ID
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * 当前空间物理 GROUP 资料 ID；引用资料只读
   * 
   * This parameter is required.
   * 
   * @example
   * source_example
   */
  sourceId?: string;
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
      forceSync: 'forceSync',
      groupId: 'groupId',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceSync: 'boolean',
      groupId: 'string',
      sourceId: 'string',
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

