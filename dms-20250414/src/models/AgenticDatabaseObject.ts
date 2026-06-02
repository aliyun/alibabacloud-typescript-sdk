// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticDatabaseObject extends $dara.Model {
  databaseQualifiedName?: string;
  databaseUuid?: string;
  ddlSql?: string;
  objectName?: string;
  objectQualifiedName?: string;
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

