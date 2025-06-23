// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos } from "./DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos";


export class DescribeInstanceDetailsResponseBodyInstanceDetails extends $dara.Model {
  /**
   * @remarks
   * The IP address information about the Anti-DDoS Proxy instance.
   */
  eipInfos?: DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddoscoo-cn-zvp2eibz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The protection line of the instance.
   * 
   * @example
   * coop-line-001
   */
  line?: string;
  static names(): { [key: string]: string } {
    return {
      eipInfos: 'EipInfos',
      instanceId: 'InstanceId',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipInfos: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos },
      instanceId: 'string',
      line: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eipInfos)) {
      $dara.Model.validateArray(this.eipInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

