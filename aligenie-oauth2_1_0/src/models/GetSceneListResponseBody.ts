// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSceneListResponseBodySceneList extends $dara.Model {
  /**
   * @example
   * 840960b85c3c48e0bd7260c1718295fd
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

export class GetSceneListResponseBody extends $dara.Model {
  /**
   * @example
   * 435CF567-58DC-5761-AFA8-650772602E2D
   */
  requestId?: string;
  sceneList?: GetSceneListResponseBodySceneList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sceneList: 'SceneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sceneList: { 'type': 'array', 'itemType': GetSceneListResponseBodySceneList },
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

