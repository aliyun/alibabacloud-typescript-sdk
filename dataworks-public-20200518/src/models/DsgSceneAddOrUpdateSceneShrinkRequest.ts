// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgSceneAddOrUpdateSceneShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the level-2 data masking scenario.
   * 
   * This parameter is required.
   */
  scenesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      scenesShrink: 'scenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

