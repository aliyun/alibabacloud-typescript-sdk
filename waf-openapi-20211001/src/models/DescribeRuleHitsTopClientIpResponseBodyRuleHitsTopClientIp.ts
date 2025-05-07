// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitsTopClientIpResponseBodyRuleHitsTopClientIp extends $dara.Model {
  /**
   * @remarks
   * The IP address of the service client.
   * 
   * @example
   * 3.3.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The number of attacks that are initiated from the IP address.
   * 
   * @example
   * 531
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

