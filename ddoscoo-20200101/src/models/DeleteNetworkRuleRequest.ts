// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  networkRule?: string;
  static names(): { [key: string]: string } {
    return {
      networkRule: 'NetworkRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

