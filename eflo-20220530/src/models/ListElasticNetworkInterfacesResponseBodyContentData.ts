// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListElasticNetworkInterfacesResponseBodyContentDataTags } from "./ListElasticNetworkInterfacesResponseBodyContentDataTags";


export class ListElasticNetworkInterfacesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1601176751000
   */
  createTime?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * No description
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
   * 1640187007000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The IP address of the BE cluster.
   * 
   * @example
   * 10.0.0.13
   */
  ip?: string;
  /**
   * @remarks
   * mac address
   * 
   * @example
   * E0:01:A6:4A:6A:D0
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
   * The ID of the node.
   * 
   * @example
   * e01-cn-uax37m1****
   */
  nodeId?: string;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-f8z4wr1b41x3qsc9****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListElasticNetworkInterfacesResponseBodyContentDataTags[];
  /**
   * @remarks
   * network interface controller type, the default type DEFAULT cannot be manually released
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
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-f8ziirfl9k25h2qn7****
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
      gateway: 'Gateway',
      gmtModified: 'GmtModified',
      ip: 'Ip',
      mac: 'Mac',
      mask: 'Mask',
      message: 'Message',
      nodeId: 'NodeId',
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
      gateway: 'string',
      gmtModified: 'string',
      ip: 'string',
      mac: 'string',
      mask: 'string',
      message: 'string',
      nodeId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListElasticNetworkInterfacesResponseBodyContentDataTags },
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

