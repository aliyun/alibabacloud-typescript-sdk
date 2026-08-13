// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceObjectBindingsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 新的对象绑定列表（全量替换；传空列表表示清空所有绑定）
   * 
   * This parameter is required.
   */
  objectBindingsShrink?: string;
  /**
   * @remarks
   * 数据源 ID（租户内唯一）
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      objectBindingsShrink: 'objectBindings',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectBindingsShrink: 'string',
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

