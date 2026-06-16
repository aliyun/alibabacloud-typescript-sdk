// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppNotificationSceneRequest extends $dara.Model {
  /**
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @example
   * 1000006921
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

