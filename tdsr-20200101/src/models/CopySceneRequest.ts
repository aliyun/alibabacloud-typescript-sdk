// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopySceneRequest extends $dara.Model {
  /**
   * @example
   * opwuoieywtyqw****
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sgyuyewyew****
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
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

