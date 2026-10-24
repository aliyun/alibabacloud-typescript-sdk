// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientRuleStrategyDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the client rule policy. You can obtain the ID from the response of the create operation or the policy list.
   * 
   * @example
   * 14808
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

