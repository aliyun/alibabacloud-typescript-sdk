// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopMetadataResponseBodyDesktops extends $dara.Model {
  /**
   * @remarks
   * A list of agents that the cloud computer supports.
   */
  agentProviderList?: string[];
  /**
   * @remarks
   * The billing method of the cloud desktop. Valid values:
   * 
   * - `PostPaid`: pay-as-you-go
   * 
   * - `PrePaid`: subscription
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The creation time of the cloud desktop.
   * 
   * @example
   * 2020-11-06T08:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the desktop group.
   * 
   * @example
   * dg-3uiojcc0j4kh7****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * @example
   * testDesktopName
   */
  desktopName?: string;
  /**
   * @remarks
   * The status of the cloud desktop. Valid values:
   * 
   * - `Stopped`
   * 
   * - `Starting`
   * 
   * - `Rebuilding`
   * 
   * - `Running`
   * 
   * - `Stopping`
   * 
   * - `Expired`
   * 
   * - `Deleted`
   * 
   * - `Pending`
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The instance type of the cloud desktop.
   * 
   * @example
   * eds.general.2c8g
   */
  desktopType?: string;
  /**
   * @remarks
   * The expiration time of the cloud desktop. This parameter is returned only for cloud desktops that use the subscription billing method.
   * 
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * 华东2（上海）
   */
  localName?: string;
  /**
   * @remarks
   * The management flags for the cloud computer.
   */
  managementFlags?: string[];
  /**
   * @remarks
   * The private IP address of the instance\\"s network interface.
   * 
   * @example
   * 192.168.2.1
   */
  memberEniIp?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The operating system of the cloud desktop.
   * 
   * @example
   * Ubuntu
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-f3s3dgt8dtb0vlqc8
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * serverless_new
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The time when the cloud desktop started.
   * 
   * @example
   * 2020-11-06T08:31Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentProviderList: 'AgentProviderList',
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      desktopType: 'DesktopType',
      expiredTime: 'ExpiredTime',
      imageId: 'ImageId',
      localName: 'LocalName',
      managementFlags: 'ManagementFlags',
      memberEniIp: 'MemberEniIp',
      officeSiteId: 'OfficeSiteId',
      platform: 'Platform',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProviderList: { 'type': 'array', 'itemType': 'string' },
      chargeType: 'string',
      creationTime: 'string',
      desktopGroupId: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      desktopType: 'string',
      expiredTime: 'string',
      imageId: 'string',
      localName: 'string',
      managementFlags: { 'type': 'array', 'itemType': 'string' },
      memberEniIp: 'string',
      officeSiteId: 'string',
      platform: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentProviderList)) {
      $dara.Model.validateArray(this.agentProviderList);
    }
    if(Array.isArray(this.managementFlags)) {
      $dara.Model.validateArray(this.managementFlags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopMetadataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the cloud desktops.
   */
  desktops?: DescribeDesktopMetadataResponseBodyDesktops[];
  /**
   * @remarks
   * The token used to retrieve the next page of results. If this parameter is empty, all results have been returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: { 'type': 'array', 'itemType': DescribeDesktopMetadataResponseBodyDesktops },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktops)) {
      $dara.Model.validateArray(this.desktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

