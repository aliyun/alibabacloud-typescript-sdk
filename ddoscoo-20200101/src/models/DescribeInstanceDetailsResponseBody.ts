// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceDetailsResponseBodyInstanceDetails } from "./DescribeInstanceDetailsResponseBodyInstanceDetails";


export class DescribeInstanceDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address and ISP line information about the Anti-DDoS Proxy instance.
   */
  instanceDetails?: DescribeInstanceDetailsResponseBodyInstanceDetails[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C814429-21A5-4673-827E-FDD19DC75681
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDetails: 'InstanceDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDetails: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceDetails)) {
      $dara.Model.validateArray(this.instanceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

