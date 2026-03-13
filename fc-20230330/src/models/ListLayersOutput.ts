// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Layer } from "./Layer";


export class ListLayersOutput extends $dara.Model {
  /**
   * @remarks
   * The layers.
   */
  layers?: Layer[];
  /**
   * @remarks
   * The name of the start layer for the next query, which is also the token used to obtain more results.
   * 
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

