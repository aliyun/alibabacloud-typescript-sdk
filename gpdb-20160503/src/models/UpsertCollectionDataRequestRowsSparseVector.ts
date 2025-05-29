// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertCollectionDataRequestRowsSparseVector extends $dara.Model {
  indices?: number[];
  values?: number[];
  static names(): { [key: string]: string } {
    return {
      indices: 'Indices',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indices: { 'type': 'array', 'itemType': 'number' },
      values: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.indices)) {
      $dara.Model.validateArray(this.indices);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

