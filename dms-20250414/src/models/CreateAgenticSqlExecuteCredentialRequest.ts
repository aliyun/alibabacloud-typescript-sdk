// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgenticSqlExecuteCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * rm-bp1xxxxxxxx
   */
  catalogName?: string;
  /**
   * @remarks
   * The UUID of the instance.
   * 
   * @example
   * 9f8e7d6c-xxxx-xxxx-xxxx-1a2b3c4d5e6f
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The UUID of the database. If you specify this parameter, the credential is restricted to this database. You can call the ListDatabases operation to obtain the UUID.
   * 
   * @example
   * 6c4e8a2b-xxxx-xxxx-xxxx-0f1d2e3c4b5a
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The fully qualified name of the database. This parameter must be used together with CatalogUuid or CatalogName.
   * 
   * - MySQL database: The value is the same as the database name.
   * - PostgreSQL database or other databases with schemas: The value is in the database.schema format.
   * 
   * @example
   * test_db
   */
  qualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      catalogUuid: 'CatalogUuid',
      databaseUuid: 'DatabaseUuid',
      qualifiedName: 'QualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      catalogUuid: 'string',
      databaseUuid: 'string',
      qualifiedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

