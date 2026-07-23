// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableColumns extends $dara.Model {
  /**
   * @example
   * 主键ID
   */
  comment?: string;
  /**
   * @example
   * id
   */
  name?: string;
  /**
   * @example
   * bigint
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableRetentionPolicy extends $dara.Model {
  /**
   * @remarks
   * Retention days for cold data, used for low-cost archival storage
   * 
   * @example
   * 30
   */
  coldTTL?: number;
  /**
   * @remarks
   * Retention days for hot data, used for high-performance query storage
   * 
   * @example
   * 7
   */
  hotTTL?: number;
  static names(): { [key: string]: string } {
    return {
      coldTTL: 'ColdTTL',
      hotTTL: 'HotTTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldTTL: 'number',
      hotTTL: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Table extends $dara.Model {
  /**
   * @remarks
   * The name of the data catalog to which the table belongs
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The column definition list of the table. Each column contains Name (column name), Type (data type), and Comment (remarks)
   * 
   * @example
   * [{"Name":"id","Type":"bigint","Comment":"主键"}]
   */
  columns?: TableColumns[];
  /**
   * @remarks
   * Comment description of the table
   * 
   * @example
   * 测试事件表
   */
  comment?: string;
  /**
   * @remarks
   * The creation time of the table (Unix timestamp, in milliseconds)
   * 
   * @example
   * 1717948800000
   */
  createTime?: number;
  /**
   * @remarks
   * The unique identifier name of the event table
   * 
   * @example
   * my_table
   */
  name?: string;
  /**
   * @remarks
   * The name of the namespace to which the table belongs
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * Data retention policy. Includes the retention days for hot data and cold data
   */
  retentionPolicy?: TableRetentionPolicy;
  /**
   * @remarks
   * The last update time of the table (Unix timestamp, in milliseconds)
   * 
   * @example
   * 1717948800000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      columns: 'Columns',
      comment: 'Comment',
      createTime: 'CreateTime',
      name: 'Name',
      namespace: 'Namespace',
      retentionPolicy: 'RetentionPolicy',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      columns: { 'type': 'array', 'itemType': TableColumns },
      comment: 'string',
      createTime: 'number',
      name: 'string',
      namespace: 'string',
      retentionPolicy: TableRetentionPolicy,
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(this.retentionPolicy && typeof (this.retentionPolicy as any).validate === 'function') {
      (this.retentionPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

