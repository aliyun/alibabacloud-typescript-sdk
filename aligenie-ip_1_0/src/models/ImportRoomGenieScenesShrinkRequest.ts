// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportRoomGenieScenesShrinkRequest extends $dara.Model {
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
   * 1211
   */
  roomNo?: string;
  sceneListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      sceneListShrink: 'SceneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      sceneListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

