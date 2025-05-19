// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLayersResponseBodyLayers } from "./ListLayersResponseBodyLayers";


export class ListLayersResponseBody extends $dara.Model {
  layers?: ListLayersResponseBodyLayers[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 518C64F6-DFF7-11ED-85B0-00163E14B3D1
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      layers: 'Layers',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layers: { 'type': 'array', 'itemType': ListLayersResponseBodyLayers },
      requestId: 'string',
      totalCount: 'number',
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

