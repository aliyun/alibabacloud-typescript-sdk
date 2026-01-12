// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceIpWhitelistResponseBodyIpWhiteListGroups extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist name.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The IP addresses or CIDR blocks in the whitelist.
   * 
   * @example
   * 192.168.XXX.XXX/24,10.0.XXX.XXX/24
   */
  ipWhitelist?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      ipWhitelist: 'IpWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ipWhitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIpWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the RDS Supabase instance.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The IP address whitelists.
   */
  ipWhiteListGroups?: DescribeInstanceIpWhitelistResponseBodyIpWhiteListGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32DEFB4A-861F-5D1D-ADD5-918E4FD7AB8C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      ipWhiteListGroups: 'IpWhiteListGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      ipWhiteListGroups: { 'type': 'array', 'itemType': DescribeInstanceIpWhitelistResponseBodyIpWhiteListGroups },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipWhiteListGroups)) {
      $dara.Model.validateArray(this.ipWhiteListGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

