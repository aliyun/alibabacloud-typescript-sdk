// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Entity extends $dara.Model {
  entityContent?: { [key: string]: any };
  /**
   * @example
   * maxcompute_table.563f0357118d05ef145d6bddf2966cc23e86ca8f2f013f915e565afdf09f7a23
   */
  qualifiedName?: string;
  /**
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

