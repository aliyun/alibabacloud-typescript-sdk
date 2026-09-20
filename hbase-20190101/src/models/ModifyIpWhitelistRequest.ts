// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of target instance. You can call [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) to obtain target instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1uoihlf82e8****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the whitelist group for the target instance. You can invoke [DescribeIpWhitelist](https://help.aliyun.com/document_detail/144606.html) to obtain the whitelist group name.
   * 
   * This parameter is required.
   * 
   * @example
   * group_01
   */
  groupName?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist group after modification. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 42.120.XX.XX
   */
  ipList?: string;
  /**
   * @remarks
   * The version of the IP address. Valid values:
   * 
   * - **4**: IPv4.
   * - **6**: IPv6.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      groupName: 'GroupName',
      ipList: 'IpList',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      groupName: 'string',
      ipList: 'string',
      ipVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

