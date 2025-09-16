// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceSchemasResponseBodyResultPrimaryKey extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the field has the primary key attribute. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  hasPrimaryKeyAttribute?: boolean;
  /**
   * @remarks
   * Indicates whether the field is the primary key. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  isPrimaryKey?: boolean;
  /**
   * @remarks
   * Indicates whether the field can be sorted. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  isPrimaryKeySorted?: boolean;
  static names(): { [key: string]: string } {
    return {
      hasPrimaryKeyAttribute: 'hasPrimaryKeyAttribute',
      isPrimaryKey: 'isPrimaryKey',
      isPrimaryKeySorted: 'isPrimaryKeySorted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPrimaryKeyAttribute: 'boolean',
      isPrimaryKey: 'boolean',
      isPrimaryKeySorted: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSchemasResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the field has the index attribute. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  addIndex?: boolean;
  /**
   * @remarks
   * Indicates whether the field is an attribute field. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  attribute?: boolean;
  /**
   * @remarks
   * Indicates whether the field is a custom field. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  custom?: boolean;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The primary key field.
   */
  primaryKey?: ListDataSourceSchemasResponseBodyResultPrimaryKey;
  /**
   * @remarks
   * Indicates whether the field can be displayed. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  summary?: boolean;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      addIndex: 'addIndex',
      attribute: 'attribute',
      custom: 'custom',
      name: 'name',
      primaryKey: 'primaryKey',
      summary: 'summary',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addIndex: 'boolean',
      attribute: 'boolean',
      custom: 'boolean',
      name: 'string',
      primaryKey: ListDataSourceSchemasResponseBodyResultPrimaryKey,
      summary: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.primaryKey && typeof (this.primaryKey as any).validate === 'function') {
      (this.primaryKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSchemasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
  result?: ListDataSourceSchemasResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataSourceSchemasResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

