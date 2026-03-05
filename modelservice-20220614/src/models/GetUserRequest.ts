// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserRequest extends $dara.Model {
  /**
   * @example
   * image_label
   */
  sceneType?: string;
  static names(): { [key: string]: string } {
    return {
      sceneType: 'SceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

