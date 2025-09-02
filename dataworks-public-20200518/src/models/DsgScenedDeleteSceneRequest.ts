// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgScenedDeleteSceneRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of level-2 data masking scenarios.
   * 
   * This parameter is required.
   */
  ids?: number[];
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

