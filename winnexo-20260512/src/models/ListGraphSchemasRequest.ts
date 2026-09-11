// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGraphSchemasRequest extends $dara.Model {
  /**
   * @remarks
   * 关键词，匹配 graphName / displayName（可选，忽略大小写）
   * 
   * @example
   * crm
   */
  keyword?: string;
  /**
   * @remarks
   * 语义标签过滤（可选，命中任一标签即保留）
   * 
   * @example
   * ["销售"]
   */
  semanticTags?: string[];
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      semanticTags: 'semanticTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      semanticTags: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.semanticTags)) {
      $dara.Model.validateArray(this.semanticTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

