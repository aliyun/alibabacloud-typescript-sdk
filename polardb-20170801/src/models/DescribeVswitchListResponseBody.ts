// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchListResponseBodyVSwitchs extends $dara.Model {
  /**
   * @remarks
   * The number of available IP addresses in the vSwitch.
   * 
   * @example
   * 1
   */
  availableIpAddressCount?: number;
  /**
   * @remarks
   * The vSwitch CIDR block.
   * 
   * @example
   * 172.16.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the vSwitch.
   * 
   * @example
   * vSwitchDescription
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the vSwitch is the default vSwitch. Valid values:
   * 
   * - **true**: The vSwitch is the default vSwitch.
   * 
   * - **false**: The vSwitch is not the default vSwitch.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the zone where the vSwitch resides.
   * 
   * @example
   * cn-hangzhou-b
   */
  izNo?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the resource.
   * 
   * @example
   * 177563751276****
   */
  ownerId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The sharing type.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The status of the vSwitch. Valid values:
   * 
   * - **Pending**: The vSwitch is being configured.
   * 
   * - **Available**: The vSwitch is available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-25bcdxs7pv1****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * vSwitch
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1vbkkyt7apvy4j*****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpAddressCount: 'AvailableIpAddressCount',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      isDefault: 'IsDefault',
      izNo: 'IzNo',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpAddressCount: 'number',
      cidrBlock: 'string',
      description: 'string',
      isDefault: 'boolean',
      izNo: 'string',
      ownerId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A2EE5B4-CC9F-46E1-A747-E43BC9******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of vSwitches.
   */
  vSwitchs?: DescribeVSwitchListResponseBodyVSwitchs[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vSwitchs: 'VSwitchs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vSwitchs: { 'type': 'array', 'itemType': DescribeVSwitchListResponseBodyVSwitchs },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchs)) {
      $dara.Model.validateArray(this.vSwitchs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

