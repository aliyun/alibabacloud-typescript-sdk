// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SchemaTablesValue } from "./SchemaTablesValue";
import { SchemaIndexesSearchFieldsValue } from "./SchemaIndexesSearchFieldsValue";


export class SchemaIndexSortConfig extends $dara.Model {
  direction?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      field: 'field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      field: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemaIndexes extends $dara.Model {
  filterFields?: string[];
  searchFields?: { [key: string]: SchemaIndexesSearchFieldsValue };
  static names(): { [key: string]: string } {
    return {
      filterFields: 'filterFields',
      searchFields: 'searchFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterFields: { 'type': 'array', 'itemType': 'string' },
      searchFields: { 'type': 'map', 'keyType': 'string', 'valueType': SchemaIndexesSearchFieldsValue },
    };
  }

  validate() {
    if(Array.isArray(this.filterFields)) {
      $dara.Model.validateArray(this.filterFields);
    }
    if(this.searchFields) {
      $dara.Model.validateMap(this.searchFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemaTtlField extends $dara.Model {
  name?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Schema extends $dara.Model {
  indexSortConfig?: SchemaIndexSortConfig[];
  indexes?: SchemaIndexes;
  name?: string;
  routeField?: string;
  routeFieldValues?: string[];
  secondRouteField?: string;
  tables?: { [key: string]: SchemaTablesValue };
  ttlField?: SchemaTtlField;
  static names(): { [key: string]: string } {
    return {
      indexSortConfig: 'indexSortConfig',
      indexes: 'indexes',
      name: 'name',
      routeField: 'routeField',
      routeFieldValues: 'routeFieldValues',
      secondRouteField: 'secondRouteField',
      tables: 'tables',
      ttlField: 'ttlField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexSortConfig: { 'type': 'array', 'itemType': SchemaIndexSortConfig },
      indexes: SchemaIndexes,
      name: 'string',
      routeField: 'string',
      routeFieldValues: { 'type': 'array', 'itemType': 'string' },
      secondRouteField: 'string',
      tables: { 'type': 'map', 'keyType': 'string', 'valueType': SchemaTablesValue },
      ttlField: SchemaTtlField,
    };
  }

  validate() {
    if(Array.isArray(this.indexSortConfig)) {
      $dara.Model.validateArray(this.indexSortConfig);
    }
    if(this.indexes && typeof (this.indexes as any).validate === 'function') {
      (this.indexes as any).validate();
    }
    if(Array.isArray(this.routeFieldValues)) {
      $dara.Model.validateArray(this.routeFieldValues);
    }
    if(this.tables) {
      $dara.Model.validateMap(this.tables);
    }
    if(this.ttlField && typeof (this.ttlField as any).validate === 'function') {
      (this.ttlField as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

