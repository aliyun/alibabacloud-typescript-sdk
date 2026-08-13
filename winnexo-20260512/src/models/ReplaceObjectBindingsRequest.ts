// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceObjectBindingsRequestObjectBindings extends $dara.Model {
  /**
   * @remarks
   * 绑定对象归属的语义图谱名（object_id 在该 graph 下唯一，必填）
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * 绑定对象 ID
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * 绑定对象类型（如 customer / project）
   * 
   * @example
   * string_value
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      graphName: 'graphName',
      objectId: 'objectId',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphName: 'string',
      objectId: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceObjectBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * 新的对象绑定列表（全量替换；传空列表表示清空所有绑定）
   * 
   * This parameter is required.
   */
  objectBindings?: ReplaceObjectBindingsRequestObjectBindings[];
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
      objectBindings: 'objectBindings',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectBindings: { 'type': 'array', 'itemType': ReplaceObjectBindingsRequestObjectBindings },
      sourceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectBindings)) {
      $dara.Model.validateArray(this.objectBindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

