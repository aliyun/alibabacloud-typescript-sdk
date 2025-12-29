// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySceneListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  sceneStates?: number[];
  sceneTypes?: string[];
  templateInfoIds?: string[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneStates: 'SceneStates',
      sceneTypes: 'SceneTypes',
      templateInfoIds: 'TemplateInfoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneStates: { 'type': 'array', 'itemType': 'number' },
      sceneTypes: { 'type': 'array', 'itemType': 'string' },
      templateInfoIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sceneStates)) {
      $dara.Model.validateArray(this.sceneStates);
    }
    if(Array.isArray(this.sceneTypes)) {
      $dara.Model.validateArray(this.sceneTypes);
    }
    if(Array.isArray(this.templateInfoIds)) {
      $dara.Model.validateArray(this.templateInfoIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

