// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceIpWhitelistResponseBodyDbIpWhiteListGroups extends $dara.Model {
  groupName?: string;
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

export class DescribeInstanceIpWhitelistResponseBodyIpWhiteListGroups extends $dara.Model {
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The list of IP addresses.
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
  branchName?: string;
  dbIpWhiteListGroups?: DescribeInstanceIpWhitelistResponseBodyDbIpWhiteListGroups[];
  /**
   * @remarks
   * The instance ID of the AI application.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The IP whitelist groups.
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
      branchName: 'BranchName',
      dbIpWhiteListGroups: 'DbIpWhiteListGroups',
      instanceName: 'InstanceName',
      ipWhiteListGroups: 'IpWhiteListGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      dbIpWhiteListGroups: { 'type': 'array', 'itemType': DescribeInstanceIpWhitelistResponseBodyDbIpWhiteListGroups },
      instanceName: 'string',
      ipWhiteListGroups: { 'type': 'array', 'itemType': DescribeInstanceIpWhitelistResponseBodyIpWhiteListGroups },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dbIpWhiteListGroups)) {
      $dara.Model.validateArray(this.dbIpWhiteListGroups);
    }
    if(Array.isArray(this.ipWhiteListGroups)) {
      $dara.Model.validateArray(this.ipWhiteListGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

