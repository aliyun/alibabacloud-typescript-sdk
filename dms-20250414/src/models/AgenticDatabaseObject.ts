// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticDatabaseObject extends $dara.Model {
  /**
   * @remarks
   * The fully qualified name of the database. This name uniquely identifies the database within the system.
   */
  databaseQualifiedName?: string;
  /**
   * @remarks
   * The unique identifier (UUID) of the database that contains the object.
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The Data Definition Language (DDL) SQL statement that defines the object\\"s structure.
   */
  ddlSql?: string;
  /**
   * @remarks
   * The name of the database object, such as a table, view, or index.
   */
  objectName?: string;
  /**
   * @remarks
   * The fully qualified name that uniquely identifies the object, typically formatted as <database>.<schema>.<object>.
   */
  objectQualifiedName?: string;
  /**
   * @remarks
   * The type of the database object. For example, `TABLE`, `VIEW`, or `INDEX`.
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      databaseQualifiedName: 'DatabaseQualifiedName',
      databaseUuid: 'DatabaseUuid',
      ddlSql: 'DdlSql',
      objectName: 'ObjectName',
      objectQualifiedName: 'ObjectQualifiedName',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseQualifiedName: 'string',
      databaseUuid: 'string',
      ddlSql: 'string',
      objectName: 'string',
      objectQualifiedName: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

