// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageEntityVO } from "./LineageEntityVo";
import { RelationshipVO } from "./RelationshipVo";


export class LineageRelationRegisterBulkVO extends $dara.Model {
  /**
   * @example
   * 1684327487964
   */
  createTimestamp?: number;
  destEntities?: LineageEntityVO[];
  relationship?: RelationshipVO;
  srcEntities?: LineageEntityVO[];
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      destEntities: 'DestEntities',
      relationship: 'Relationship',
      srcEntities: 'SrcEntities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      destEntities: { 'type': 'array', 'itemType': LineageEntityVO },
      relationship: RelationshipVO,
      srcEntities: { 'type': 'array', 'itemType': LineageEntityVO },
    };
  }

  validate() {
    if(Array.isArray(this.destEntities)) {
      $dara.Model.validateArray(this.destEntities);
    }
    if(this.relationship && typeof (this.relationship as any).validate === 'function') {
      (this.relationship as any).validate();
    }
    if(Array.isArray(this.srcEntities)) {
      $dara.Model.validateArray(this.srcEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

