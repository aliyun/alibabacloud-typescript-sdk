// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SqlOutputRows extends $dara.Model {
  /**
   * @example
   * null
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlOutputSchemaFields extends $dara.Model {
  name?: string;
  nullable?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      nullable: 'nullable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nullable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlOutputSchema extends $dara.Model {
  fields?: SqlOutputSchemaFields[];
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': SqlOutputSchemaFields },
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

export class SqlOutput extends $dara.Model {
  rows?: SqlOutputRows[];
  schema?: SqlOutputSchema;
  static names(): { [key: string]: string } {
    return {
      rows: 'rows',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rows: { 'type': 'array', 'itemType': SqlOutputRows },
      schema: SqlOutputSchema,
    };
  }

  validate() {
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
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

