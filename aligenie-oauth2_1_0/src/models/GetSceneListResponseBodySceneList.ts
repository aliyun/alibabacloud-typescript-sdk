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

