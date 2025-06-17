// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetElasticNetworkInterfaceResponseBodyContentIpv6Addresses } from "./GetElasticNetworkInterfaceResponseBodyContentIpv6addresses";
import { GetElasticNetworkInterfaceResponseBodyContentPrivateIpAddresses } from "./GetElasticNetworkInterfaceResponseBodyContentPrivateIpAddresses";
import { GetElasticNetworkInterfaceResponseBodyContentTags } from "./GetElasticNetworkInterfaceResponseBodyContentTags";


export class GetElasticNetworkInterfaceResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 2022-01-13 12:51:41
   */
  createTime?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * terraform-example
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Whether to enable the jumboFrame capability
   * 
   * @example
   * True
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * vswitch gateway address
   * 
   * @example
   * 172.16.****
   */
  gateway?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 2022-01-13 12:51:41
   */
  gmtModified?: string;
  /**
   * @remarks
   * Elastic Network Interface IP
   * 
   * @example
   * 203.107.****
   */
  ip?: string;
  /**
   * @remarks
   * IPV6 address
   */
  ipv6Addresses?: GetElasticNetworkInterfaceResponseBodyContentIpv6Addresses[];
  /**
   * @remarks
   * mac address
   * 
   * @example
   * 00:22:6D:97:**:**
   */
  mac?: string;
  /**
   * @remarks
   * vswitch mask bits
   * 
   * @example
   * 24
   */
  mask?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Lingjun Node ID
   * 
   * @example
   * e01-cn-lbj3aej****
   */
  nodeId?: string;
  /**
   * @remarks
   * Secondary private IP address
   */
  privateIpAddresses?: GetElasticNetworkInterfaceResponseBodyContentPrivateIpAddresses[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * 资源组实例ID
   * 
   * @example
   * rg-acfmzzka6bnjvbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-0jl5s4p4laalruk7****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The state of the private gateway.
   * 
   * Valid value:
   * 
   * *   Create Failed: the creation failure.
   * *   Delete Failed: the that failed to be deleted.
   * *   Executing
   * *   Available
   * *   Deleting
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The details of the resource tags.
   */
  tags?: GetElasticNetworkInterfaceResponseBodyContentTags[];
  /**
   * @remarks
   * NIC Type
   * 
   * Valid value:
   * 
   * *   CUSTOM: custom type.
   * *   DEFAULT: system type.
   * 
   * @example
   * DEFAULT
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-uf6u8473r84e9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-j6ctp4n75306****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      enableJumboFrame: 'EnableJumboFrame',
      gateway: 'Gateway',
      gmtModified: 'GmtModified',
      ip: 'Ip',
      ipv6Addresses: 'Ipv6Addresses',
      mac: 'Mac',
      mask: 'Mask',
      message: 'Message',
      nodeId: 'NodeId',
      privateIpAddresses: 'PrivateIpAddresses',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      enableJumboFrame: 'boolean',
      gateway: 'string',
      gmtModified: 'string',
      ip: 'string',
      ipv6Addresses: { 'type': 'array', 'itemType': GetElasticNetworkInterfaceResponseBodyContentIpv6Addresses },
      mac: 'string',
      mask: 'string',
      message: 'string',
      nodeId: 'string',
      privateIpAddresses: { 'type': 'array', 'itemType': GetElasticNetworkInterfaceResponseBodyContentPrivateIpAddresses },
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetElasticNetworkInterfaceResponseBodyContentTags },
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Addresses)) {
      $dara.Model.validateArray(this.ipv6Addresses);
    }
    if(Array.isArray(this.privateIpAddresses)) {
      $dara.Model.validateArray(this.privateIpAddresses);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

