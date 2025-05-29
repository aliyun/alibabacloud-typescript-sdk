// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpsertCollectionDataRequestRowsSparseVector } from "./UpsertCollectionDataRequestRowsSparseVector";


export class UpsertCollectionDataRequestRows extends $dara.Model {
  id?: string;
  metadata?: { [key: string]: string };
  sparseVector?: UpsertCollectionDataRequestRowsSparseVector;
  /**
   * @remarks
   * This parameter is required.
   */
  vector?: number[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metadata: 'Metadata',
      sparseVector: 'SparseVector',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sparseVector: UpsertCollectionDataRequestRowsSparseVector,
      vector: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.sparseVector && typeof (this.sparseVector as any).validate === 'function') {
      (this.sparseVector as any).validate();
    }
    if(Array.isArray(this.vector)) {
      $dara.Model.validateArray(this.vector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

