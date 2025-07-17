// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ColumnBusinessMetadata extends $dara.Model {
  /**
   * @example
   * 字段1的业务描述
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Column extends $dara.Model {
  businessMetadata?: ColumnBusinessMetadata;
  /**
   * @example
   * 字段1
   */
  comment?: string;
  /**
   * @example
   * false
   */
  foreignKey?: boolean;
  /**
   * @example
   * maxcompute-column:123456::test_project:default:test_tbl:col1
   */
  id?: string;
  /**
   * @example
   * col1
   */
  name?: string;
  /**
   * @example
   * false
   */
  partitionKey?: boolean;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
   * @example
   * false
   */
  primaryKey?: boolean;
  /**
   * @example
   * maxcompute-table:123456::test_project:default:test_tbl
   */
  tableId?: string;
  /**
   * @example
   * bigint
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      businessMetadata: 'BusinessMetadata',
      comment: 'Comment',
      foreignKey: 'ForeignKey',
      id: 'Id',
      name: 'Name',
      partitionKey: 'PartitionKey',
      position: 'Position',
      primaryKey: 'PrimaryKey',
      tableId: 'TableId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessMetadata: ColumnBusinessMetadata,
      comment: 'string',
      foreignKey: 'boolean',
      id: 'string',
      name: 'string',
      partitionKey: 'boolean',
      position: 'number',
      primaryKey: 'boolean',
      tableId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.businessMetadata && typeof (this.businessMetadata as any).validate === 'function') {
      (this.businessMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

