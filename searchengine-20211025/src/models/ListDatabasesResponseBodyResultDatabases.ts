// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResultDatabasesFunctionsValue } from "./ResultDatabasesFunctionsValue";
import { ListDatabasesResponseBodyResultDatabasesSqlInstances } from "./ListDatabasesResponseBodyResultDatabasesSqlInstances";
import { ListDatabasesResponseBodyResultDatabasesTables } from "./ListDatabasesResponseBodyResultDatabasesTables";
import { ListDatabasesResponseBodyResultDatabasesTemplates } from "./ListDatabasesResponseBodyResultDatabasesTemplates";


export class ListDatabasesResponseBodyResultDatabases extends $dara.Model {
  /**
   * @example
   * general
   */
  database?: string;
  functions?: { [key: string]: ResultDatabasesFunctionsValue[] };
  sqlInstances?: ListDatabasesResponseBodyResultDatabasesSqlInstances[];
  tables?: ListDatabasesResponseBodyResultDatabasesTables[];
  templates?: ListDatabasesResponseBodyResultDatabasesTemplates[];
  static names(): { [key: string]: string } {
    return {
      database: 'database',
      functions: 'functions',
      sqlInstances: 'sqlInstances',
      tables: 'tables',
      templates: 'templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      functions: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ResultDatabasesFunctionsValue } },
      sqlInstances: { 'type': 'array', 'itemType': ListDatabasesResponseBodyResultDatabasesSqlInstances },
      tables: { 'type': 'array', 'itemType': ListDatabasesResponseBodyResultDatabasesTables },
      templates: { 'type': 'array', 'itemType': ListDatabasesResponseBodyResultDatabasesTemplates },
    };
  }

  validate() {
    if(this.functions) {
      $dara.Model.validateMap(this.functions);
    }
    if(Array.isArray(this.sqlInstances)) {
      $dara.Model.validateArray(this.sqlInstances);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

