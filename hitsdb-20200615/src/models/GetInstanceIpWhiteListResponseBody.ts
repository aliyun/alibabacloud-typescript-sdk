// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceIpWhiteListResponseBodyGroupList extends $dara.Model {
  /**
   * @remarks
   * The name of the IP address whitelist.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist.
   * 
   * @example
   * 192.168.1.0/24
   */
  securityIpList?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      securityIpList: 'SecurityIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      securityIpList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIpWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {"AuthAction":"xxx","AuthPrincipalDisplayName":"222","AuthPrincipalOwnerId":"111","AuthPrincipalType":"SubUser",,"NoPermissionType":"ImplicitDeny","PolicyType":"AccountLevelIdentityBasedPolicy","EncodedDiagnosticMessage":"xxxxxx"}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The details about the IP address whitelists.
   */
  groupList?: GetInstanceIpWhiteListResponseBodyGroupList[];
  /**
   * @remarks
   * The ID of the Lindorm instance.
   * 
   * @example
   * ld-bp1z3506imz2f****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of IP addresses in the whitelist of the instance.
   */
  ipList?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1D1F6F4D-9203-53E7-84E9-5376B4657E63
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      groupList: 'GroupList',
      instanceId: 'InstanceId',
      ipList: 'IpList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      groupList: { 'type': 'array', 'itemType': GetInstanceIpWhiteListResponseBodyGroupList },
      instanceId: 'string',
      ipList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

