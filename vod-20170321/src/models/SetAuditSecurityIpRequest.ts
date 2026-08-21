// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAuditSecurityIpRequest extends $dara.Model {
  /**
   * @remarks
   * The list of security IP addresses for review. Each group supports a maximum of 100 IP addresses. Separate multiple IP addresses with commas (,). The following formats are supported:
   * 
   * - Exact IP address: 192.168.0.1
   * - CIDR block: 192.168.0.1/24 (Classless Inter-Domain Routing. /24 specifies the length of the prefix in the address. Valid values: `[1,32]`.)
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.1
   */
  ips?: string;
  /**
   * @remarks
   * The operation mode. Valid values:
   * 
   * - **Append**: default value. Appends IP addresses to the IP address whitelist.
   * - **Cover**: overwrites the existing IP address whitelist.
   * - **Delete**: deletes IP addresses from the IP address whitelist.
   * > If the specified value is not within the valid values, the default value (Append) is used.
   * 
   * @example
   * Cover
   */
  operateMode?: string;
  /**
   * @remarks
   * The name of the security group for review. Default value: **Default**. A maximum of 10 security groups are supported.
   * 
   * @example
   * Default
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      ips: 'Ips',
      operateMode: 'OperateMode',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ips: 'string',
      operateMode: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

