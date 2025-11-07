// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSceneConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Intention authentication configuration, as a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"faceCompareMode\\":\\"AUTHORITY\\",\\"certConfigs\\":[{\\"index\\":0,\\"openVoiceCompare\\":true,\\"openCustomizedContent\\":true,\\"model\\":\\"FOLLOW\\"}],\\"screenEvidence\\":false}
   */
  config?: string;
  /**
   * @remarks
   * Scene ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000014084
   */
  sceneId?: number;
  /**
   * @remarks
   * Configuration type.
   * 
   * This parameter is required.
   * 
   * @example
   * VOLUNTARY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      sceneId: 'sceneId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      sceneId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

