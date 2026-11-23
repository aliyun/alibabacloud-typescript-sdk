// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Relationship extends $dara.Model {
  /**
   * @remarks
   * Attributes
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * The data channel to which the lineage relationship belongs.
   */
  dataChannel?: string;
  /**
   * @remarks
   * The globally unique identifier of the lineage relationship.
   * 
   * @example
   * 0f94c587-e926-48c8-9efe-bf9f8d9aa5c2
   */
  relationshipGuid?: string;
  /**
   * @remarks
   * The type of the lineage relationship.
   */
  relationshipType?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      dataChannel: 'DataChannel',
      relationshipGuid: 'RelationshipGuid',
      relationshipType: 'RelationshipType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dataChannel: 'string',
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

