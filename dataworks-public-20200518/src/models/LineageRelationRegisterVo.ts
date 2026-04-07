// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageEntityVO } from "./LineageEntityVo";
import { RelationshipVO } from "./RelationshipVo";


export class LineageRelationRegisterVO extends $dara.Model {
  /**
   * @remarks
   * The time of lineage relation generation
   * 
   * @example
   * 1684327487964
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The destination entity in lineage relation
   */
  destEntity?: LineageEntityVO;
  /**
   * @remarks
   * The relationship between entities
   */
  relationship?: RelationshipVO;
  /**
   * @remarks
   * The source entity in lineage relation
   */
  srcEntity?: LineageEntityVO;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      destEntity: 'DestEntity',
      relationship: 'Relationship',
      srcEntity: 'SrcEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      destEntity: LineageEntityVO,
      relationship: RelationshipVO,
      srcEntity: LineageEntityVO,
    };
  }

  validate() {
    if(this.destEntity && typeof (this.destEntity as any).validate === 'function') {
      (this.destEntity as any).validate();
    }
    if(this.relationship && typeof (this.relationship as any).validate === 'function') {
      (this.relationship as any).validate();
    }
    if(this.srcEntity && typeof (this.srcEntity as any).validate === 'function') {
      (this.srcEntity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

