// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLayerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the layer.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The time when the experiment layer was created. The time follows the ISO 8601 standard and includes a time zone offset.
   * 
   * @example
   * 2022-10-13T17:34:52.232+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The ID of the laboratory.
   * 
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @remarks
   * The name of the layer.
   * 
   * @example
   * layer1
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EE97D06A-2AA0-5AD9-B6CF-8A267924D691
   */
  requestId?: string;
  /**
   * @remarks
   * The remaining traffic on the experiment layer.
   * 
   * @example
   * 10
   */
  residualFlow?: number;
  /**
   * @remarks
   * The ID of the scene.
   * 
   * @example
   * 4
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      laboratoryId: 'LaboratoryId',
      name: 'Name',
      requestId: 'RequestId',
      residualFlow: 'ResidualFlow',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreateTime: 'string',
      laboratoryId: 'string',
      name: 'string',
      requestId: 'string',
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

