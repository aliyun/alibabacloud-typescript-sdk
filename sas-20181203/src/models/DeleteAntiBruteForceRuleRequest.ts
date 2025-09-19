// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAntiBruteForceRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the defense rules against brute-force attacks to delete.
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

