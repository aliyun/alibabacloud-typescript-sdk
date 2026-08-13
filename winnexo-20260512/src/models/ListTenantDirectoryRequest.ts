// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * 目录唯一标识；不传或传 root 时查询知识库根目录列表
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 页码
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页数量
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 排序字段
   * 
   * @example
   * name
   */
  sortField?: string;
  /**
   * @remarks
   * 排序方向
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
   * string_value
   */
  sourceTypes?: string;
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

