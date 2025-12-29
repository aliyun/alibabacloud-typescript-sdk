// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySceneListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  sceneStatesShrink?: string;
  sceneTypesShrink?: string;
  templateInfoIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneStatesShrink: 'SceneStates',
      sceneTypesShrink: 'SceneTypes',
      templateInfoIdsShrink: 'TemplateInfoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneStatesShrink: 'string',
      sceneTypesShrink: 'string',
      templateInfoIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

