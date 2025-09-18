// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartHomeSceneListResponseBodyFamilySceneListSceneList extends $dara.Model {
  /**
   * @example
   * 6813AH5586qrw1P5ln/123==
   */
  sceneId?: string;
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      sceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHomeSceneListResponseBodyFamilySceneList extends $dara.Model {
  /**
   * @example
   * 2iS1AH5eo8qrw1PYBL/Ulq==
   */
  familyId?: string;
  familyName?: string;
  sceneList?: GetSmartHomeSceneListResponseBodyFamilySceneListSceneList[];
  static names(): { [key: string]: string } {
    return {
      familyId: 'familyId',
      familyName: 'familyName',
      sceneList: 'sceneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      familyId: 'string',
      familyName: 'string',
      sceneList: { 'type': 'array', 'itemType': GetSmartHomeSceneListResponseBodyFamilySceneListSceneList },
    };
  }

  validate() {
    if(Array.isArray(this.sceneList)) {
      $dara.Model.validateArray(this.sceneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHomeSceneListResponseBody extends $dara.Model {
  familySceneList?: GetSmartHomeSceneListResponseBodyFamilySceneList[];
  /**
   * @example
   * 435CF567-12DC-5761-AFA8-650774502E2D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      familySceneList: 'FamilySceneList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      familySceneList: { 'type': 'array', 'itemType': GetSmartHomeSceneListResponseBodyFamilySceneList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.familySceneList)) {
      $dara.Model.validateArray(this.familySceneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

