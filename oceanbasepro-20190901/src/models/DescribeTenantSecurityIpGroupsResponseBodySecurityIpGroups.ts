// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantSecurityIpGroupsResponseBodySecurityIpGroups extends $dara.Model {
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * test1
   */
  securityIpGroupName?: string;
  /**
   * @remarks
   * The whitelist group type.
   * - instance: the whitelist group from the cluster.
   * - tenant: the whitelist group of the current tenant.
   * 
   * @example
   * tenant
   */
  securityIpGroupType?: string;
  /**
   * @remarks
   * The whitelist of IP addresses. It is a string separated by commas, and each object is an IP string or a CIDR block.
   * 
   * @example
   * 192.***.*.*"
   */
  securityIps?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * t4louaeei****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      securityIpGroupName: 'SecurityIpGroupName',
      securityIpGroupType: 'SecurityIpGroupType',
      securityIps: 'SecurityIps',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpGroupName: 'string',
      securityIpGroupType: 'string',
      securityIps: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

