// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAntCloudAuthSceneResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 01D3BDC6-64C0-58E2-8760-3F1B56AAE299
   */
  requestId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * 1000015112
   */
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sceneId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

