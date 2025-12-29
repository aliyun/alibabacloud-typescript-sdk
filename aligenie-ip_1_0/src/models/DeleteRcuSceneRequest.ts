// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRcuSceneRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
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
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
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

