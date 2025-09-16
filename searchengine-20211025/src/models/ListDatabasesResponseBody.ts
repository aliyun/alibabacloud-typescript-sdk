// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResultDatabasesFunctionsValue } from "./ResultDatabasesFunctionsValue";


export class ListDatabasesResponseBodyResultDatabasesSqlInstances extends $dara.Model {
  children?: any[];
  /**
   * @example
   * 12190
   */
  id?: number;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isDir?: number;
  /**
   * @example
   * general
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parent?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * @example
   * instance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'any' },
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyResultDatabasesTables extends $dara.Model {
  children?: any[];
  /**
   * @example
   * 56
   */
  id?: number;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isDir?: number;
  /**
   * @example
   * general
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parent?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * @example
   * table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'any' },
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyResultDatabasesTemplates extends $dara.Model {
  children?: any[];
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isDir?: number;
  /**
   * @example
   * c26_schema
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parent?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * @example
   * template
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'any' },
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListDatabasesResponseBodyResult extends $dara.Model {
  databases?: ListDatabasesResponseBodyResultDatabases[];
  static names(): { [key: string]: string } {
    return {
      databases: 'databases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': ListDatabasesResponseBodyResultDatabases },
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * NodeTreeVO
   */
  result?: ListDatabasesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListDatabasesResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

