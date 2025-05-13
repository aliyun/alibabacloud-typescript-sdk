// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LineageEntity extends $dara.Model {
  attributes?: { [key: string]: any };
  entityType?: string;
  name?: string;
  qualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      entityType: 'EntityType',
      name: 'Name',
      qualifiedName: 'QualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      entityType: 'string',
      name: 'string',
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

