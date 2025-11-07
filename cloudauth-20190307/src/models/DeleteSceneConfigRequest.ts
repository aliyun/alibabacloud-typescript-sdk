// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSceneConfigRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the intent authentication configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * 559
   */
  sceneConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      sceneConfigId: 'sceneConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneConfigId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

