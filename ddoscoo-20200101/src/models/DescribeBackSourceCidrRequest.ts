// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackSourceCidrRequest extends $dara.Model {
  /**
   * @remarks
   * The IP version of the back-to-origin CIDR blocks.
   * 
   * *   **Ipv4**
   * *   **Ipv6**
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The Internet service provider (ISP) line that you want to query.
   * 
   * @example
   * coop-line-001
   */
  line?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      line: 'Line',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'string',
      line: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

