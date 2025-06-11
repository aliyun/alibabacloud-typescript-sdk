// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTenantSecurityIpGroupResponseBodySecurityIpGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * @example
   * paytest
   */
  securityIpGroupName?: string;
  /**
   * @remarks
   * The list of IP addresses in the IP address whitelist group.   
   * 
   * It is a string separated by commas, and each object is an IP address or CIDR block.
   * 
   * @example
   * 192.***.*.*
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

