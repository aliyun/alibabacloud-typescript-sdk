// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataSourceSchemasResponseBodyResultPrimaryKey } from "./ListDataSourceSchemasResponseBodyResultPrimaryKey";


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

