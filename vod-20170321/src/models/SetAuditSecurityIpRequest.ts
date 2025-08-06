// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAuditSecurityIpRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses that you want to add to the review security group. You can add a maximum of 100 IP addresses to a review security group. Separate multiple IP addresses with commas (,). You can add IP addresses in the following formats to review security groups:
   * 
   * *   IP address: 192.168.0.1
   * *   CIDR block: 192.168.0.1/24. /24 indicates that the prefix of the CIDR block is 24 bits in length. You can replace 24 with a value that ranges `from 1 to 32`.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.1
   */
  ips?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   **Append** (default): adds the IP addresses to the original whitelist.
   * *   **Cover**: overwrites the original whitelist.
   * *   **Delete**: removes the IP addresses from the original whitelist.
   * 
   * >  If the value that you specify is invalid, the default value is used.
   * 
   * @example
   * Cover
   */
  operateMode?: string;
  /**
   * @remarks
   * The name of the review security group. Default value: **Default**. You can specify a maximum of 10 review security groups.
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

