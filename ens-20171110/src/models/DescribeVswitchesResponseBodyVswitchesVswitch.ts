// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVSwitchesResponseBodyVSwitchesVSwitchTags } from "./DescribeVswitchesResponseBodyVswitchesVswitchTags";


export class DescribeVSwitchesResponseBodyVSwitchesVSwitch extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 10.21.224.0/22
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the VPC was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-06-16T06:33:15Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the vSwitch.
   * 
   * @example
   * VSwitchDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-xian-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The number of available IP addresses.
   * 
   * @example
   * 1024
   */
  freeIpCount?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-25cdvfeq58pl****
   */
  networkId?: string;
  /**
   * @remarks
   * The status of the vSwitch. Valid values:
   * 
   * *   Pending
   * *   Available
   * 
   * @example
   * Pending
   */
  status?: string;
  tags?: DescribeVSwitchesResponseBodyVSwitchesVSwitchTags;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-5m9xhlq8oh***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * testVSwitchName
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      createdTime: 'CreatedTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      freeIpCount: 'FreeIpCount',
      networkId: 'NetworkId',
      status: 'Status',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      createdTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      freeIpCount: 'number',
      networkId: 'string',
      status: 'string',
      tags: DescribeVSwitchesResponseBodyVSwitchesVSwitchTags,
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

