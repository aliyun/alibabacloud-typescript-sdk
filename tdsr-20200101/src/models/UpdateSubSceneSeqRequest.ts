// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubSceneSeqRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sgyuyewyew****
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sortSubSceneIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      sortSubSceneIds: 'SortSubSceneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      sortSubSceneIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sortSubSceneIds)) {
      $dara.Model.validateArray(this.sortSubSceneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

