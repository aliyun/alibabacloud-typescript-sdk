// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBISchemaIndexQueryTablesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @example
   * 过滤字段，例如 schema_index
   */
  inputField?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  instanceName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 20
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      inputField: 'InputField',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      inputField: 'string',
      instanceName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

