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

