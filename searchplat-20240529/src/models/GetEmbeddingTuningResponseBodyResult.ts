// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmbeddingTuningResponseBodyResult extends $dara.Model {
  output?: number[][];
  static names(): { [key: string]: string } {
    return {
      output: 'output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
    };
  }

  validate() {
    if(Array.isArray(this.output)) {
      $dara.Model.validateArray(this.output);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

