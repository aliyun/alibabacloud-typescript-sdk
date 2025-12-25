// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveHotspotTagListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{}]
   */
  hotspotListJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tqwiuwetwet****
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      hotspotListJson: 'HotspotListJson',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotspotListJson: 'string',
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

