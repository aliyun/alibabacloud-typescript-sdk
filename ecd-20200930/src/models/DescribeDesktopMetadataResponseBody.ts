// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopMetadataResponseBodyDesktops extends $dara.Model {
  /**
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @example
   * 2020-11-06T08:28Z
   */
  creationTime?: string;
  /**
   * @example
   * dg-3uiojcc0j4kh7****
   */
  desktopGroupId?: string;
  /**
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @example
   * testDesktopName
   */
  desktopName?: string;
  /**
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  localName?: string;
  managementFlags?: string[];
  /**
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-f3s3dgt8dtb0vlqc8
   */
  resourceGroupId?: string;
  /**
   * @example
   * serverless_new
   */
  resourceGroupName?: string;
  /**
   * @example
   * 2020-11-06T08:31Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      expiredTime: 'ExpiredTime',
      imageId: 'ImageId',
      localName: 'LocalName',
      managementFlags: 'ManagementFlags',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      creationTime: 'string',
      desktopGroupId: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      expiredTime: 'string',
      imageId: 'string',
      localName: 'string',
      managementFlags: { 'type': 'array', 'itemType': 'string' },
      officeSiteId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      startTime: 'string',
    };
  }

  validate() {
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
  desktops?: DescribeDesktopMetadataResponseBodyDesktops[];
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
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

