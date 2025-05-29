// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCollectionRequestSparseVectorIndexConfig extends $dara.Model {
  hnswEfConstruction?: number;
  hnswM?: number;
  static names(): { [key: string]: string } {
    return {
      hnswEfConstruction: 'HnswEfConstruction',
      hnswM: 'HnswM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hnswEfConstruction: 'number',
      hnswM: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

