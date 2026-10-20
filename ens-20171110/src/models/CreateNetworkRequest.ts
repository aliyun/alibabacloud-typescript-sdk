// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the instance. Valid values of N: **1** to **20**.
   * 
   * - The key cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * - The key can be up to 64 characters in length.
   * - The key cannot be an empty string.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the resource. Valid values of N: 1 to 20. The value can be an empty string. The value can be up to 128 characters in length, and cannot start with acs: or contain http:// or https://.
   * 
   * @example
   * tagValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the network. You can use one of the following CIDR blocks or their subsets as the CIDR block of the network:
   * 
   * - 10.0.0.0/8 (default).
   * - 172.16.0.0/12.
   * - 192.168.0.0/16.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the network.
   * 
   * The description must be 2 to 256 characters in length, and must start with a letter or a Chinese character. It cannot start with http:// or https://.
   * 
   * @example
   * this is my first network
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * - false (default): disables IPv6.
   * - true: enables IPv6.
   * 
   * @example
   * false
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The ID of the ENS edge zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ISP of the IPv6 address. Valid values:
   * 
   * - cmcc
   * - telecom
   * - unicom
   * 
   * @example
   * telecom
   */
  ipv6Isp?: string;
  /**
   * @remarks
   * The name of the network. The name must meet the following requirements:
   * 
   * - The name must be 2 to 128 characters in length.
   * - The name must start with a letter or a Chinese character, and cannot start with http:// or https://.
   * - The name can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * abc
   */
  networkName?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tag?: CreateNetworkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      enableIpv6: 'EnableIpv6',
      ensRegionId: 'EnsRegionId',
      ipv6Isp: 'Ipv6Isp',
      networkName: 'NetworkName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      enableIpv6: 'boolean',
      ensRegionId: 'string',
      ipv6Isp: 'string',
      networkName: 'string',
      tag: { 'type': 'array', 'itemType': CreateNetworkRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

