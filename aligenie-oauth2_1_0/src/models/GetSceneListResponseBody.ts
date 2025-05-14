// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSceneListResponseBodySceneList } from "./GetSceneListResponseBodySceneList";


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

