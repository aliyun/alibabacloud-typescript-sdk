// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableMetaResponseBodyFields extends $dara.Model {
  /**
   * @example
   * false
   */
  isDimensionField?: boolean;
  /**
   * @example
   * the gender of people
   */
  meaning?: string;
  /**
   * @example
   * gender
   */
  name?: string;
  /**
   * @example
   * BIGINT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isDimensionField: 'IsDimensionField',
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDimensionField: 'boolean',
      meaning: 'string',
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

export class GetTableMetaResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  canDelete?: boolean;
  config?: string;
  /**
   * @example
   * this is a test table
   */
  description?: string;
  fields?: GetTableMetaResponseBodyFields[];
  /**
   * @example
   * 2021-12-15:24:33
   */
  gmtCreateTime?: string;
  gmtImportedTime?: string;
  /**
   * @example
   * 2021-12-15:24:33
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * ABTest
   */
  module?: string;
  /**
   * @example
   * test_table
   */
  name?: string;
  /**
   * @example
   * 28C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * reso-wkgo***
   */
  resourceId?: string;
  tableMetaId?: string;
  /**
   * @example
   * table_mysql
   */
  tableName?: string;
  /**
   * @example
   * MaxCompute
   */
  type?: string;
  /**
   * @example
   * https://dmc-xxx.com/dm/table/xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      canDelete: 'CanDelete',
      config: 'Config',
      description: 'Description',
      fields: 'Fields',
      gmtCreateTime: 'GmtCreateTime',
      gmtImportedTime: 'GmtImportedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      module: 'Module',
      name: 'Name',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      tableMetaId: 'TableMetaId',
      tableName: 'TableName',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canDelete: 'boolean',
      config: 'string',
      description: 'string',
      fields: { 'type': 'array', 'itemType': GetTableMetaResponseBodyFields },
      gmtCreateTime: 'string',
      gmtImportedTime: 'string',
      gmtModifiedTime: 'string',
      module: 'string',
      name: 'string',
      requestId: 'string',
      resourceId: 'string',
      tableMetaId: 'string',
      tableName: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

