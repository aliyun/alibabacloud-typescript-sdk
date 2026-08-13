// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVisibleKnowledgeBaseContentsRequest extends $dara.Model {
  /**
   * @remarks
   * 目录 ID（必传非空，必须在数字员工 linked_directories 及其子目录范围内）
   * 
   * This parameter is required.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 数字员工名称（运营对象 name）
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 页码（从 1 开始）
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
   * 资源类型筛选列表（有值时仅返回资源，不包含子目录）
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
      operatingObjectName: 'operatingObjectName',
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
      operatingObjectName: 'string',
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

