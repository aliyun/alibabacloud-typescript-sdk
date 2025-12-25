// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveMinimapRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  data?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

