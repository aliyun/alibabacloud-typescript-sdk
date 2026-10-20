// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IcebergTableMetadata } from "./IcebergTableMetadata";
import { Schema } from "./Schema";


export class Table extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1741266704867
   */
  createdAt?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @remarks
   * The Iceberg table metadata.
   */
  icebergTableMetadata?: IcebergTableMetadata;
  /**
   * @remarks
   * The table UUID.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * Specifies whether the table is an external table.
   * 
   * @example
   * true
   */
  isExternal?: boolean;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table_test
   */
  name?: string;
  /**
   * @remarks
   * The table owner.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  owner?: string;
  /**
   * @remarks
   * The table path.
   * 
   * @example
   * oss://clg-paimon-xxx/db-xxx/tbl-xxxx
   */
  path?: string;
  /**
   * @remarks
   * The table schema information.
   */
  schema?: Schema;
  /**
   * @remarks
   * The table schema ID.
   * 
   * @example
   * 1
   */
  schemaId?: number;
  /**
   * @remarks
   * The table status. A value of active indicates that the table is normal. A value of retained indicates that the table is soft-deleted but still retained in the recycle bin. A value of releasing indicates that the table is about to be permanently purged.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The storage class transition status.
   * 
   * @example
   * None
   */
  storageAction?: string;
  /**
   * @remarks
   * The storage class transition time.
   * 
   * @example
   * 1764556155852
   */
  storageActionTimestamp?: number;
  /**
   * @remarks
   * The storage class.
   * 
   * @example
   * STANDARD
   */
  storageClass?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * PAIMON
   */
  type?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1741266704867
   */
  updatedAt?: number;
  /**
   * @remarks
   * The updater.
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
      status: 'status',
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
      status: 'string',
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

