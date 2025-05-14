// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteSceneRequest extends $dara.Model {
  /**
   * @example
   * a84a55aa410e460a9ac753570c76fecc
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

