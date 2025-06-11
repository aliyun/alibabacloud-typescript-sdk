// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTenantSecurityIpGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The group name of the whitelist group of IP addresses.
   * 
   * It starts with lowercase letters and ends with lowercase letters or numbers. It can only contain lowercase letters, numbers, and underscores, and should be 2~32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * paytest
   */
  securityIpGroupName?: string;
  /**
   * @remarks
   * The list of IP addresses in the whitelist group.
   * 
   * It is a JSON array. Each object in the array is an IP address or a CIDR block. You can have up to 40 whitelists.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.***.*.*"
   */
  securityIps?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * t4louaeei****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
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

