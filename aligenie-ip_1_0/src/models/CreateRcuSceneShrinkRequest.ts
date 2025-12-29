// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRcuSceneShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yoga
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneRelationExtDTOShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneId: 'SceneId',
      sceneRelationExtDTOShrink: 'SceneRelationExtDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneId: 'string',
      sceneRelationExtDTOShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

