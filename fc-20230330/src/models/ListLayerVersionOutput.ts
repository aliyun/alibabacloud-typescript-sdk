// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Layer } from "./Layer";


export class ListLayerVersionOutput extends $dara.Model {
  layers?: Layer[];
  /**
   * @example
   * 10
   */
  nextVersion?: number;
  static names(): { [key: string]: string } {
    return {
      layers: 'layers',
      nextVersion: 'nextVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layers: { 'type': 'array', 'itemType': Layer },
      nextVersion: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

