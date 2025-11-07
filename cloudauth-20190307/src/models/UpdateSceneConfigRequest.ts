// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSceneConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Scene configuration information, in JSON format. For the specific structure definition, please refer to more information about the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"faceCompareMode\\":\\"AUTHORITY\\",\\"certConfigs\\":[{\\"index\\":0,\\"model\\":\\"ENROLL\\"}],\\"screenEvidence\\":false}
   */
  config?: string;
  /**
   * @remarks
   * Willingness configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 607
   */
  id?: number;
  /**
   * @remarks
   * Selected authentication scene.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000012918
   */
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      id: 'id',
      sceneId: 'sceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      id: 'number',
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

