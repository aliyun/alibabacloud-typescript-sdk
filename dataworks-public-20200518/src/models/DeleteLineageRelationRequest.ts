// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLineageRelationRequest extends $dara.Model {
  /**
   * @remarks
   * Destination entity unique identifier
   * 
   * This parameter is required.
   * 
   * @example
   * custom-report.report123
   */
  destEntityQualifiedName?: string;
  /**
   * @remarks
   * Lineage relationship unique identifier
   * 
   * @example
   * dfazcdfdfccdedd
   */
  relationshipGuid?: string;
  /**
   * @remarks
   * Relationship type
   * 
   * @example
   * sql
   */
  relationshipType?: string;
  /**
   * @remarks
   * Source entity unique identifier
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table.project.table
   */
  srcEntityQualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      destEntityQualifiedName: 'DestEntityQualifiedName',
      relationshipGuid: 'RelationshipGuid',
      relationshipType: 'RelationshipType',
      srcEntityQualifiedName: 'SrcEntityQualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destEntityQualifiedName: 'string',
      relationshipGuid: 'string',
      relationshipType: 'string',
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

