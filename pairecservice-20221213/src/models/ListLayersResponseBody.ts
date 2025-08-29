// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLayersResponseBodyLayers extends $dara.Model {
  /**
   * @example
   * This is a test.
   */
  description?: string;
  gmtCreateTime?: string;
  /**
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @example
   * layer1
   */
  name?: string;
  residualFlow?: number;
  /**
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

