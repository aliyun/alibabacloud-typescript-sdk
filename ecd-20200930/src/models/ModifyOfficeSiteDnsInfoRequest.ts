// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOfficeSiteDnsInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses of the custom DNS servers. Up to 2 IP addresses can be specified.
   */
  dnsAddress?: string[];
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-778418****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dnsAddress: 'DnsAddress',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dnsAddress)) {
      $dara.Model.validateArray(this.dnsAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

