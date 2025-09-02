// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LineageEntityVO extends $dara.Model {
  /**
   * @example
   * attribute map
   */
  attributes?: { [key: string]: string };
  /**
   * @example
   * http://domain.test.url/entity
   */
  detailUrl?: string;
  /**
   * @example
   * maxcompute-table
   */
  entityType?: string;
  /**
   * @example
   * tableName
   */
  name?: string;
  /**
   * @example
   * owner
   */
  owner?: string;
  /**
   * @example
   * dbName
   */
  parentName?: string;
  /**
   * @example
   * maxcompute-table.projectName.tablename
   */
  qualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      detailUrl: 'DetailUrl',
      entityType: 'EntityType',
      name: 'Name',
      owner: 'Owner',
      parentName: 'ParentName',
      qualifiedName: 'QualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      detailUrl: 'string',
      entityType: 'string',
      name: 'string',
      owner: 'string',
      parentName: 'string',
      qualifiedName: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

