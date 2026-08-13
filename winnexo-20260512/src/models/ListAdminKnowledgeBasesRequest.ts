// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAdminKnowledgeBasesRequest extends $dara.Model {
  /**
   * @remarks
   * 目录 ID；为空或 \"root\" 时返回 KB 顶层列表，传具体值时下钻返回该目录的子目录 + 资源（混合分页，由 itemType 区分）
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 搜索关键词，仅在 directoryId 为空/root 时生效，模糊匹配 KB 名称或描述（忽略大小写）
   * 
   * @example
   * 示例关键词
   */
  keyword?: string;
  /**
   * @remarks
   * 页码，从 1 开始
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页数量，范围 1-100
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 排序字段：name / gmtCreate / gmtModified；非法值回退为 name
   * 
   * @example
   * name
   */
  sortField?: string;
  /**
   * @remarks
   * 排序方向：asc / desc；非法值回退为 asc
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * 资源类型过滤，仅在下钻（directoryId 非空）时生效；命中时仅返回匹配类型的资源，不含子目录
   * 
   * @example
   * string_value
   */
  sourceTypes?: string[];
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
      directoryId: 'directoryId',
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      sortField: 'sortField',
      sortOrder: 'sortOrder',
      sourceTypes: 'sourceTypes',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      sortField: 'string',
      sortOrder: 'string',
      sourceTypes: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceTypes)) {
      $dara.Model.validateArray(this.sourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

