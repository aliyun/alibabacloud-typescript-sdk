// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRelativePositionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"key"："value"}
   */
  relativePosition?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234****
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      relativePosition: 'RelativePosition',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relativePosition: 'string',
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

