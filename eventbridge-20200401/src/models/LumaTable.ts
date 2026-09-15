// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LumaTableColumns extends $dara.Model {
  /**
   * @remarks
   * The comment of the column.
   * 
   * @example
   * Primary key ID
   */
  comment?: string;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * id
   */
  name?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
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

export class LumaTableRetentionPolicy extends $dara.Model {
  /**
   * @remarks
   * The number of days to retain cold data in low-cost archival storage.
   * 
   * @example
   * 30
   */
  coldTTL?: number;
  /**
   * @remarks
   * The number of days to retain hot data in high-performance query storage.
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

export class LumaTable extends $dara.Model {
  /**
   * @remarks
   * The name of the data catalog to which the table belongs.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The list of column definitions for the table. Each column contains Name (column name), Type (data type), and Comment (comment).
   * 
   * @example
   * [{"Name":"id","Type":"bigint","Comment":"Primary key"}]
   */
  columns?: LumaTableColumns[];
  /**
   * @remarks
   * The comment of the table.
   * 
   * @example
   * Test event table
   */
  comment?: string;
  /**
   * @remarks
   * The creation time of the table. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1717948800000
   */
  createTime?: number;
  /**
   * @remarks
   * The unique name of the event table.
   * 
   * @example
   * my_table
   */
  name?: string;
  /**
   * @remarks
   * The name of the namespace to which the table belongs.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The data retention policy, including the retention days for hot data and cold data.
   */
  retentionPolicy?: LumaTableRetentionPolicy;
  /**
   * @remarks
   * The last update time of the table. This value is a UNIX timestamp in milliseconds.
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
      columns: { 'type': 'array', 'itemType': LumaTableColumns },
      comment: 'string',
      createTime: 'number',
      name: 'string',
      namespace: 'string',
      retentionPolicy: LumaTableRetentionPolicy,
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

