// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RelationshipVO extends $dara.Model {
  attributes?: { [key: string]: string };
  relationshipGuid?: string;
  /**
   * @example
   * sql
   */
  relationshipType?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      relationshipGuid: 'RelationshipGuid',
      relationshipType: 'RelationshipType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      relationshipGuid: 'string',
      relationshipType: 'string',
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

