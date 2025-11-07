// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySceneConfigsResponseBodySceneConfigs extends $dara.Model {
  /**
   * @remarks
   * Specific configuration content, in JSON string format.
   * 
   * @example
   * {\\"faceCompareMode\\":\\"CUSTOM\\",\\"certConfigs\\":[{\\"index\\":0,\\"openVoiceCompare\\":false,\\"openCustomizedContent\\":true,\\"model\\":\\"QA\\"}],\\"screenEvidence\\":true}
   */
  config?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1760782820000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1760782820000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Configuration ID.
   * 
   * @example
   * 607
   */
  id?: number;
  /**
   * @remarks
   * Scene ID.
   * 
   * @example
   * 1000009045
   */
  sceneId?: number;
  /**
   * @remarks
   * Configuration type.
   * 
   * @example
   * VOLUNTARY
   */
  type?: string;
  /**
   * @remarks
   * Scene configuration version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      sceneId: 'sceneId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      sceneId: 'number',
      type: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Willingness configuration list.
   */
  sceneConfigs?: QuerySceneConfigsResponseBodySceneConfigs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sceneConfigs: 'sceneConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sceneConfigs: { 'type': 'array', 'itemType': QuerySceneConfigsResponseBodySceneConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.sceneConfigs)) {
      $dara.Model.validateArray(this.sceneConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

