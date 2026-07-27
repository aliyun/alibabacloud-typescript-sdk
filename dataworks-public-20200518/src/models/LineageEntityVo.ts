// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LineageEntityVO extends $dara.Model {
  /**
   * @remarks
   * A map of additional key-value attributes for the entity.
   * 
   * @example
   * attribute map
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * A URL for more details about the entity.
   * 
   * @example
   * http://domain.test.url/entity
   */
  detailUrl?: string;
  /**
   * @remarks
   * The type of the entity.
   * 
   * @example
   * maxcompute-table
   */
  entityType?: string;
  /**
   * @remarks
   * The human-readable name of the entity.
   * 
   * @example
   * tableName
   */
  name?: string;
  /**
   * @remarks
   * The owner of the entity.
   * 
   * @example
   * owner
   */
  owner?: string;
  /**
   * @remarks
   * The name of the entity\\"s parent container, such as a database.
   * 
   * @example
   * dbName
   */
  parentName?: string;
  /**
   * @remarks
   * The unique, fully qualified name of the entity.
   * 
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

