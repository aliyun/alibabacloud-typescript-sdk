// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageEntity } from "./LineageEntity";
import { LineageRelationship } from "./LineageRelationship";


export class ListLineagesResponseBodyPagingInfoLineages extends $dara.Model {
  dstEntity?: LineageEntity;
  relationships?: LineageRelationship[];
  srcEntity?: LineageEntity;
  static names(): { [key: string]: string } {
    return {
      dstEntity: 'DstEntity',
      relationships: 'Relationships',
      srcEntity: 'SrcEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstEntity: LineageEntity,
      relationships: { 'type': 'array', 'itemType': LineageRelationship },
      srcEntity: LineageEntity,
    };
  }

  validate() {
    if(this.dstEntity && typeof (this.dstEntity as any).validate === 'function') {
      (this.dstEntity as any).validate();
    }
    if(Array.isArray(this.relationships)) {
      $dara.Model.validateArray(this.relationships);
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

