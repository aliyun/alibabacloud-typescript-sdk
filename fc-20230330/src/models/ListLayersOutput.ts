// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Layer } from "./Layer";


export class ListLayersOutput extends $dara.Model {
  layers?: Layer[];
  /**
   * @example
   * next-layer-name
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      layers: 'layers',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layers: { 'type': 'array', 'itemType': Layer },
      nextToken: 'string',
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

