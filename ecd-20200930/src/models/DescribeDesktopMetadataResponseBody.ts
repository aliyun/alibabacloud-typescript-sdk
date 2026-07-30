// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopMetadataResponseBodyDesktops extends $dara.Model {
  /**
   * @remarks
   * The agents supported by the current cloud desktop.
   */
  agentProviderList?: string[];
  /**
   * @remarks
   * The billing type of the cloud desktop. Valid values:
   * - PostPaid: pay-as-you-go.
   * - PrePaid: subscription.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the cloud desktop was created.
   * 
   * @example
   * 2020-11-06T08:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The shared cloud desktop ID.
   * 
   * @example
   * dg-3uiojcc0j4kh7****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The cloud desktop ID.
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
   * - Stopped
   * - Starting
   * - Rebuilding
   * - Running
   * - Stopping
   * - Expired
   * - Deleted
   * - Pending
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The cloud desktop specifications.
   * 
   * @example
   * eds.general.2c8g
   */
  desktopType?: string;
  /**
   * @remarks
   * The time when the cloud desktop expires. This value is returned only for cloud desktops that use the subscription billable method.
   * 
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  /**
   * @remarks
   * The local name of the region where the cloud desktop resides.
   * 
   * @example
   * 华东2（上海）
   */
  localName?: string;
  /**
   * @remarks
   * The management status of the cloud desktop.
   */
  managementFlags?: string[];
  /**
   * @remarks
   * The IP address of the member elastic network interface (ENI) of the instance.
   * 
   * @example
   * 192.168.2.1
   */
  memberEniIp?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The operating system platform information.
   * 
   * @example
   * Ubuntu
   */
  platform?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-f3s3dgt8dtb0vlqc8
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource group name.
   * 
   * @example
   * serverless_new
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The time when the cloud desktop was started.
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
   * The token for the next query. An empty value indicates that there are no more results.
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

