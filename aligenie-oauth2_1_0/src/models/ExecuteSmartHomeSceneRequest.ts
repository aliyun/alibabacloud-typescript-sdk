// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteSmartHomeSceneRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2iS1AH5eo8qrw1PYBL/Ulq==
   */
  familyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Y1lCALepjYmTEouxsTrkjB==
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      familyId: 'FamilyId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      familyId: 'string',
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

