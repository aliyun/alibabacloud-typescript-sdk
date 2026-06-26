// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IcebergTableMetadata } from "./IcebergTableMetadata";
import { Schema } from "./Schema";


export class Table extends $dara.Model {
  /**
   * @remarks
   * The time when the table was created.
   * 
   * @example
   * 1741266704867
   */
  createdAt?: number;
  /**
   * @remarks
   * The user who created the table.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  icebergTableMetadata?: IcebergTableMetadata;
  /**
   * @remarks
   * The UUID of the table.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the table is an external table.
   * 
   * @example
   * true
   */
  isExternal?: boolean;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * table_test
   */
  name?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  owner?: string;
  /**
   * @remarks
   * The table URI.
   * 
   * @example
   * oss://clg-paimon-xxx/db-xxx/tbl-xxxx
   */
  path?: string;
  /**
   * @remarks
   * The table schema.
   */
  schema?: Schema;
  /**
   * @remarks
   * The ID of the schema.
   * 
   * @example
   * 1
   */
  schemaId?: number;
  /**
   * @remarks
   * The storage action.
   */
  storageAction?: string;
  /**
   * @remarks
   * The timestamp of the storage action.
   */
  storageActionTimestamp?: number;
  /**
   * @remarks
   * The storage class of the table.
   */
  storageClass?: string;
  type?: string;
  /**
   * @remarks
   * The time when the table was last updated.
   * 
   * @example
   * 1741266704867
   */
  updatedAt?: number;
  /**
   * @remarks
   * The user who last updated the table.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      icebergTableMetadata: 'icebergTableMetadata',
      id: 'id',
      isExternal: 'isExternal',
      name: 'name',
      owner: 'owner',
      path: 'path',
      schema: 'schema',
      schemaId: 'schemaId',
      storageAction: 'storageAction',
      storageActionTimestamp: 'storageActionTimestamp',
      storageClass: 'storageClass',
      type: 'type',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      icebergTableMetadata: IcebergTableMetadata,
      id: 'string',
      isExternal: 'boolean',
      name: 'string',
      owner: 'string',
      path: 'string',
      schema: Schema,
      schemaId: 'number',
      storageAction: 'string',
      storageActionTimestamp: 'number',
      storageClass: 'string',
      type: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    if(this.icebergTableMetadata && typeof (this.icebergTableMetadata as any).validate === 'function') {
      (this.icebergTableMetadata as any).validate();
    }
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

