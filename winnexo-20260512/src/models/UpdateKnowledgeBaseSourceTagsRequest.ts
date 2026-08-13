// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseSourceTagsRequest extends $dara.Model {
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
   * 资源标签（JSON 字符串列表，如 ["tagA","tagB"]；传 null 表示清空标签）
   * 
   * @example
   * string_value
   */
  sourceTags?: string;
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
      sourceId: 'sourceId',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: 'string',
      sourceTags: 'string',
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

