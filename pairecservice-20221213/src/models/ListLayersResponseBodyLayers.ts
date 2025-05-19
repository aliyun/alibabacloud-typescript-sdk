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

