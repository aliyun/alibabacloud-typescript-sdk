// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRcuSceneRequestSceneRelationExtDTO extends $dara.Model {
  corpusList?: string[];
  description?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingmoshi/shuimian.png
   */
  icon?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      corpusList: 'CorpusList',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpusList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      icon: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.corpusList)) {
      $dara.Model.validateArray(this.corpusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRcuSceneRequest extends $dara.Model {
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
  sceneRelationExtDTO?: UpdateRcuSceneRequestSceneRelationExtDTO;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneId: 'SceneId',
      sceneRelationExtDTO: 'SceneRelationExtDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneId: 'string',
      sceneRelationExtDTO: UpdateRcuSceneRequestSceneRelationExtDTO,
    };
  }

  validate() {
    if(this.sceneRelationExtDTO && typeof (this.sceneRelationExtDTO as any).validate === 'function') {
      (this.sceneRelationExtDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

