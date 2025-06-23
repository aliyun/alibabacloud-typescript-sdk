// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCcSblack extends $dara.Model {
  /**
   * @remarks
   * The threshold that the number of connections initiated from a source IP address can exceed the limit. Set the value to **5**. If the number of connections initiated from a source IP address exceeds the limit five times during the check, the source IP address is added to the blacklist.
   * 
   * @example
   * 5
   */
  cnt?: number;
  /**
   * @remarks
   * The interval at which checks are performed. Set the value to **60**. Unit: seconds.
   * 
   * @example
   * 60
   */
  during?: number;
  /**
   * @remarks
   * The validity period of the IP address in the blacklist. Valid values: **60** to **604800**. Unit: seconds.
   * 
   * @example
   * 600
   */
  expires?: number;
  /**
   * @remarks
   * The type of the limit that causes a source IP address to be added to the blacklist. Valid values:
   * 
   * *   **1**: Source New Connection Rate Limit
   * *   **2**: Source Concurrent Connection Rate Limit
   * *   **3**: PPS Limit for Source
   * *   **4**: Bandwidth Limit for Source
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      cnt: 'Cnt',
      during: 'During',
      expires: 'Expires',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnt: 'number',
      during: 'number',
      expires: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

