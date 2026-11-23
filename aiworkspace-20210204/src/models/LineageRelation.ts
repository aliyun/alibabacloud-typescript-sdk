// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LineageRelation extends $dara.Model {
  /**
   * @remarks
   * The unique qualified name of the destination lineage entity.
   * 
   * @example
   * maxcompute-table.demo_project.training_output
   */
  destEntityQualifiedName?: string;
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
   * The unique qualified name of the source lineage entity.
   * 
   * @example
   * maxcompute-table.demo_project.training_data
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

