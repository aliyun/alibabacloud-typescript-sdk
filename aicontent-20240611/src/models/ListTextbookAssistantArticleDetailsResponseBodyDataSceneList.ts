// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantArticleDetailsResponseBodyDataSceneList extends $dara.Model {
  /**
   * @example
   * In the park, you introduce yourself to John and ask his name.
   */
  scene?: string;
  /**
   * @example
   * 38cddd70509911efbe6e0c42a106bb02
   */
  sceneId?: string;
  sceneImageList?: string[];
  sceneTransLate?: string;
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      sceneId: 'sceneId',
      sceneImageList: 'sceneImageList',
      sceneTransLate: 'sceneTransLate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      sceneId: 'string',
      sceneImageList: { 'type': 'array', 'itemType': 'string' },
      sceneTransLate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sceneImageList)) {
      $dara.Model.validateArray(this.sceneImageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

