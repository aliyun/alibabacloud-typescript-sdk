// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPersonalDirectoryContentsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 目录 ID（必传非空）；传 \"root\" 时 service 自动解析当前数字员工的默认根目录并返回其下内容（首屏知识库卡片场景），传具体目录 ID 时返回该目录下子目录与资源
   * 
   * This parameter is required.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 数字员工名称（已废弃：不再作为个人资源隔离条件，仅保留用于来源追溯）
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
   * 资源类型筛选列表（有值时仅返回资源，不包含子目录）；支持虚拟类型 OUTPUT（产出保存的资源，service 自动反查关联表）
   * 
   * @example
   * string_value
   */
  sourceTypesShrink?: string;
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
      sourceTypesShrink: 'sourceTypes',
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
      sourceTypesShrink: 'string',
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

