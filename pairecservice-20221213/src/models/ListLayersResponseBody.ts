// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLayersResponseBodyLayers extends $dara.Model {
  /**
   * @remarks
   * The layer description.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The time when the layer was created.
   * 
   * @example
   * 2024-05-30T02:02:28.000Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The laboratory ID.
   * 
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @remarks
   * The layer ID.
   * 
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @remarks
   * The layer name.
   * 
   * @example
   * layer1
   */
  name?: string;
  /**
   * @remarks
   * The remaining traffic for the layer.
   * 
   * @example
   * 10
   */
  residualFlow?: number;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      laboratoryId: 'LaboratoryId',
      layerId: 'LayerId',
      name: 'Name',
      residualFlow: 'ResidualFlow',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreateTime: 'string',
      laboratoryId: 'string',
      layerId: 'string',
      name: 'string',
      residualFlow: 'number',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of layers.
   */
  layers?: ListLayersResponseBodyLayers[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 518C64F6-DFF7-11ED-85B0-00163E14B3D1
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of layers.
   * 
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

