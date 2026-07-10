// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAntCloudAuthSceneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the scene to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000011589
   */
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

