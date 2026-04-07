// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Entity extends $dara.Model {
  /**
   * @remarks
   * The properties of the entity, including:
   * 
   * *   **entityType**: The type of the entity. Examples: maxcompute-table and emr-table.
   * *   **name**: the name of the entity.
   * *   **projectName**: the name of the MaxCompute project.
   */
  entityContent?: { [key: string]: any };
  /**
   * @remarks
   * The unique identifier of the entity. Example: maxcompute-table.projectA.tableB.
   * 
   * @example
   * maxcompute_table.563f0357118d05ef145d6bddf2966cc23e86ca8f2f013f915e565afdf09f7a23
   */
  qualifiedName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 12345
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      entityContent: 'EntityContent',
      qualifiedName: 'QualifiedName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityContent: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      qualifiedName: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    if(this.entityContent) {
      $dara.Model.validateMap(this.entityContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

