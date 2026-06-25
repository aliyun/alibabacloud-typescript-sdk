// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LineageRelation extends $dara.Model {
  /**
   * @remarks
   * The fully qualified name of the target entity in the relationship.
   */
  destEntityQualifiedName?: string;
  /**
   * @remarks
   * The system-assigned unique identifier (GUID) for the relationship.
   */
  relationshipGuid?: string;
  /**
   * @remarks
   * The fully qualified name of the source entity in the relationship.
   */
  srcEntityQualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      destEntityQualifiedName: 'DestEntityQualifiedName',
      relationshipGuid: 'RelationshipGuid',
      srcEntityQualifiedName: 'SrcEntityQualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destEntityQualifiedName: 'string',
      relationshipGuid: 'string',
      srcEntityQualifiedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

