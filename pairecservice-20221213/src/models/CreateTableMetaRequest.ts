// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTableMetaRequestFields } from "./CreateTableMetaRequestFields";


export class CreateTableMetaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * this is a test table
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: CreateTableMetaRequestFields[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ABTest
   */
  module?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table_test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reso-2s416t146ffjc3yefx
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table_mysql
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fields: 'Fields',
      instanceId: 'InstanceId',
      module: 'Module',
      name: 'Name',
      resourceId: 'ResourceId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fields: { 'type': 'array', 'itemType': CreateTableMetaRequestFields },
      instanceId: 'string',
      module: 'string',
      name: 'string',
      resourceId: 'string',
      tableName: 'string',
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

