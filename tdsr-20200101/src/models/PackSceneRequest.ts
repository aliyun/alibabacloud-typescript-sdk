// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PackSceneRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * L2omaCMmQZZkEg4p****
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * download
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

