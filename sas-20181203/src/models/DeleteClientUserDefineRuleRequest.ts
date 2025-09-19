// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClientUserDefineRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the custom defense rules.
   * 
   * This parameter is required.
   */
  idList?: number[];
  static names(): { [key: string]: string } {
    return {
      idList: 'IdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.idList)) {
      $dara.Model.validateArray(this.idList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

