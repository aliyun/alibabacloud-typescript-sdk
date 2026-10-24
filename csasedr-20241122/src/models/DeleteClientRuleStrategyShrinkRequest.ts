// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClientRuleStrategyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of IDs of the policies to delete. Use the policy IDs returned by the create operation or obtained from the policy list or details operations.
   */
  idListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      idListShrink: 'IdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

