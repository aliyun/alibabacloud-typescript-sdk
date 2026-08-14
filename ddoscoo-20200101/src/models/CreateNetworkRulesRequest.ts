// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkRulesRequest extends $dara.Model {
  ipMode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  networkRules?: string;
  static names(): { [key: string]: string } {
    return {
      ipMode: 'IpMode',
      networkRules: 'NetworkRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipMode: 'string',
      networkRules: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

