// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen extends $dara.Model {
  /**
   * @remarks
   * The maximum length of a packet. Valid values: **0** to **6000**. Unit: bytes.
   * 
   * @example
   * 6000
   */
  max?: number;
  /**
   * @remarks
   * The minimum length of a packet. Valid values: **0** to **6000**. Unit: bytes.
   * 
   * @example
   * 0
   */
  min?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

