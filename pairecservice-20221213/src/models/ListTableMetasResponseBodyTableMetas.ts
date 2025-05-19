// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTableMetasResponseBodyTableMetasFields } from "./ListTableMetasResponseBodyTableMetasFields";


export class ListTableMetasResponseBodyTableMetas extends $dara.Model {
  /**
   * @example
   * true
   */
  canDelete?: boolean;
  config?: string;
  /**
   * @example
   * this is a test table
   */
  description?: string;
  fields?: ListTableMetasResponseBodyTableMetasFields[];
  /**
   * @example
   * 2021-12-12 12:24:33
   */
  gmtCreateTime?: string;
  /**
   * @example
   * imprecation
   */
  gmtImportedTime?: string;
  /**
   * @example
   * 2021-12-12 12:24:33
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
   * reso-2s416t***
   */
  resourceId?: string;
  /**
   * @example
   * 3
   */
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
      fields: { 'type': 'array', 'itemType': ListTableMetasResponseBodyTableMetasFields },
      gmtCreateTime: 'string',
      gmtImportedTime: 'string',
      gmtModifiedTime: 'string',
      module: 'string',
      name: 'string',
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

