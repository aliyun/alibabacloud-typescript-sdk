// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubSceneSeqShrinkRequest extends $dara.Model {
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
  sortSubSceneIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      sortSubSceneIdsShrink: 'SortSubSceneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      sortSubSceneIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

