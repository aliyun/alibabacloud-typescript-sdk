// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TableBusinessMetadata } from "./TableBusinessMetadata";
import { TableTechnicalMetadata } from "./TableTechnicalMetadata";


export class Table extends $dara.Model {
  businessMetadata?: TableBusinessMetadata;
  /**
   * @example
   * 测试表
   */
  comment?: string;
  /**
   * @example
   * 1736852168000
   */
  createTime?: number;
  /**
   * @example
   * maxcompute-table:123456::test_project::test_tbl
   */
  id?: string;
  /**
   * @example
   * 1736852168000
   */
  modifyTime?: number;
  /**
   * @example
   * test_tbl
   */
  name?: string;
  /**
   * @example
   * maxcompute-project:123456::test_project
   */
  parentMetaEntityId?: string;
  partitionKeys?: string[];
  /**
   * @example
   * TABLE
   */
  tableType?: string;
  technicalMetadata?: TableTechnicalMetadata;
  static names(): { [key: string]: string } {
    return {
      businessMetadata: 'BusinessMetadata',
      comment: 'Comment',
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      parentMetaEntityId: 'ParentMetaEntityId',
      partitionKeys: 'PartitionKeys',
      tableType: 'TableType',
      technicalMetadata: 'TechnicalMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessMetadata: TableBusinessMetadata,
      comment: 'string',
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      parentMetaEntityId: 'string',
      partitionKeys: { 'type': 'array', 'itemType': 'string' },
      tableType: 'string',
      technicalMetadata: TableTechnicalMetadata,
    };
  }

  validate() {
    if(this.businessMetadata && typeof (this.businessMetadata as any).validate === 'function') {
      (this.businessMetadata as any).validate();
    }
    if(Array.isArray(this.partitionKeys)) {
      $dara.Model.validateArray(this.partitionKeys);
    }
    if(this.technicalMetadata && typeof (this.technicalMetadata as any).validate === 'function') {
      (this.technicalMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

