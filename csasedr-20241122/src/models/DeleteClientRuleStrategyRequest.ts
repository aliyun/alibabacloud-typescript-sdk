// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClientRuleStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The list of IDs of the policies to delete. Use the policy IDs returned by the create operation or obtained from the policy list or details operations.
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

