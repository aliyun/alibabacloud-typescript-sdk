// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySceneConfigsResponseBodySceneConfigs extends $dara.Model {
  /**
   * @remarks
   * The specific configuration content, in JSON string format.
   * 
   * @example
   * {\\"faceCompareMode\\":\\"CUSTOM\\",\\"certConfigs\\":[{\\"index\\":0,\\"openVoiceCompare\\":false,\\"openCustomizedContent\\":true,\\"model\\":\\"QA\\"}],\\"screenEvidence\\":true}
   */
  config?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1760782820000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1760782820000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 607
   */
  id?: number;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 1000009045
   */
  sceneId?: number;
  /**
   * @remarks
   * The configuration type.
   * 
   * @example
   * VOLUNTARY
   */
  type?: string;
  /**
   * @remarks
   * The version number of the scenario configuration.
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
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The list of intent verification configurations.
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

