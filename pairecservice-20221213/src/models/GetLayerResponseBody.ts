// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLayerResponseBody extends $dara.Model {
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
  residualFlow?: number;
  /**
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

