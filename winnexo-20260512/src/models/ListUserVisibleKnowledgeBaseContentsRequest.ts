// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserVisibleKnowledgeBaseContentsRequest extends $dara.Model {
  /**
   * @remarks
   * 目标知识库根目录或其子目录的唯一标识
   * 
   * This parameter is required.
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * 当前目录下的目录或资源名称关键词
   * 
   * @example
   * 产品说明
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
   * 每页数量，范围 1-200
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 排序字段，可选 name / gmt_create / gmt_modified
   * 
   * @example
   * name
   */
  sortField?: string;
  /**
   * @remarks
   * 排序方向，可选 asc / desc
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * 资源类型过滤，多个类型使用逗号分隔；传入后只返回资源
   * 
   * @example
   * FILE,WEB_PAGE
   */
  sourceTypes?: string;
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
      sourceTypes: 'string',
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

