// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Relationship extends $dara.Model {
  /**
   * @remarks
   * A collection of key-value pairs providing additional details about the relationship.
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * The channel or system through which the relationship is established.
   */
  dataChannel?: string;
  /**
   * @remarks
   * The globally unique identifier (GUID) for the relationship.
   */
  relationshipGuid?: string;
  /**
   * @remarks
   * Specifies the type of relationship.
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

