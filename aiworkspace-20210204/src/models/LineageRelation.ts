// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LineageRelation extends $dara.Model {
  /**
   * @remarks
   * DestEntityQualifiedName
   */
  destEntityQualifiedName?: string;
  /**
   * @remarks
   * RelationshipGuid
   */
  relationshipGuid?: string;
  /**
   * @remarks
   * SrcEntityQualifiedName
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

