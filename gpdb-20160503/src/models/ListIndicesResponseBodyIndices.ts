// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIndicesResponseBodyIndicesIndices } from "./ListIndicesResponseBodyIndicesIndices";


export class ListIndicesResponseBodyIndices extends $dara.Model {
  indices?: ListIndicesResponseBodyIndicesIndices[];
  static names(): { [key: string]: string } {
    return {
      indices: 'Indices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indices: { 'type': 'array', 'itemType': ListIndicesResponseBodyIndicesIndices },
    };
  }

  validate() {
    if(Array.isArray(this.indices)) {
      $dara.Model.validateArray(this.indices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

