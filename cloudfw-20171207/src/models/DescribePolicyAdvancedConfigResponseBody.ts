// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyAdvancedConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of elastic IP addresses (EIPs) that take effect when strict mode is enabled. A maximum of 100 IP addresses can be returned.
   * 
   * @example
   * ["47.100.XX.XX","47.101.XX.XX"]
   */
  eips?: string[];
  /**
   * @remarks
   * The enabling status of the strict mode for access control policies. Valid values:
   * - **on**: The strict mode is enabled.
   * - **off**: The strict mode is disabled.
   * 
   * @example
   * off
   */
  internetSwitch?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125EEB1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eips: 'Eips',
      internetSwitch: 'InternetSwitch',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eips: { 'type': 'array', 'itemType': 'string' },
      internetSwitch: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eips)) {
      $dara.Model.validateArray(this.eips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

