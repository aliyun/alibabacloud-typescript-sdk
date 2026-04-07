// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgUpdateDesensStatusListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  desensStatus?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  ids?: number[];
  static names(): { [key: string]: string } {
    return {
      desensStatus: 'DesensStatus',
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensStatus: 'number',
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

