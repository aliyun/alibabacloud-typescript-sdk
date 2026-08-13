// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBaseDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * 父分类 ID；不传时返回企业知识库根目录下的所有分类树
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 排序字段：name / gmt_create / gmt_modified
   * 
   * @example
   * name
   */
  sortField?: string;
  /**
   * @remarks
   * 排序方向：asc / desc
   * 
   * @example
   * asc
   */
  sortOrder?: string;
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
      sortField: 'sortField',
      sortOrder: 'sortOrder',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      sortField: 'string',
      sortOrder: 'string',
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

