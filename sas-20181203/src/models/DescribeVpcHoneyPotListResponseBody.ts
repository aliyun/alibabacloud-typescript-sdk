// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcHoneyPotListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOListVpcSwitchIdList extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-p0wdnyv4wzp6jkuu4****
   */
  vpcSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * abc01
   */
  vpcSwitchName?: string;
  /**
   * @remarks
   * The zone ID of the vSwitch.
   * 
   * @example
   * ap-southeast-2b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcSwitchId: 'VpcSwitchId',
      vpcSwitchName: 'VpcSwitchName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcSwitchId: 'string',
      vpcSwitchName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOList extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the VPC.
   * 
   * @example
   * 192.168.XX.XX/16
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time at which the VPC was created. Unit: milliseconds.
   * 
   * @example
   * 1607365213000
   */
  createTime?: number;
  /**
   * @remarks
   * The status of the server on which the honeypot is deployed. Valid values:
   * 
   * *   **Pending**: The server is being created.
   * *   **Running**: The server is running.
   * *   **Starting**: The server is being started.
   * *   **Stopping**: The server is being stopped.
   * *   **Stopped**: The server is stopped.
   * 
   * @example
   * Running
   */
  honeyPotEcsInstanceStatus?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI) used by the honeypot in the VPC.
   * 
   * @example
   * eni-p0whwgg7bing8b80****
   */
  honeyPotEniInstanceId?: string;
  /**
   * @remarks
   * Indicates whether the cloud honeypot feature is enabled for the VPC. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  honeyPotExistence?: boolean;
  /**
   * @remarks
   * The status of the honeypot. Valid values:
   * 
   * *   **pending**: The honeypot is being created.
   * *   **deleting**: The honeypot is being deleted.
   * *   **off**: The honeypot is disabled.
   * *   **suspending**: The honeypot is suspended.
   * *   **on**: The honeypot is enabled.
   * 
   * @example
   * on
   */
  honeyPotInstanceStatus?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the ENI used by the honeypot is connected.
   * 
   * @example
   * vsw-p0w7gdcfvn20tvdul****
   */
  honeyPotVpcSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-p0w223apdl49sr5zv****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * abc-vpcname
   */
  vpcName?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * ap-southeast-2
   */
  vpcRegionId?: string;
  /**
   * @remarks
   * The status of the VPC. Valid values:
   * 
   * *   **Available**: The VPC is normal and available.
   * *   **Pending**: The VPC is being configured.
   * 
   * @example
   * Available
   */
  vpcStatus?: string;
  /**
   * @remarks
   * An array that consists of the vSwitches in the VPC.
   */
  vpcSwitchIdList?: DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOListVpcSwitchIdList[];
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      createTime: 'CreateTime',
      honeyPotEcsInstanceStatus: 'HoneyPotEcsInstanceStatus',
      honeyPotEniInstanceId: 'HoneyPotEniInstanceId',
      honeyPotExistence: 'HoneyPotExistence',
      honeyPotInstanceStatus: 'HoneyPotInstanceStatus',
      honeyPotVpcSwitchId: 'HoneyPotVpcSwitchId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcRegionId: 'VpcRegionId',
      vpcStatus: 'VpcStatus',
      vpcSwitchIdList: 'VpcSwitchIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      createTime: 'number',
      honeyPotEcsInstanceStatus: 'string',
      honeyPotEniInstanceId: 'string',
      honeyPotExistence: 'boolean',
      honeyPotInstanceStatus: 'string',
      honeyPotVpcSwitchId: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcRegionId: 'string',
      vpcStatus: 'string',
      vpcSwitchIdList: { 'type': 'array', 'itemType': DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOListVpcSwitchIdList },
    };
  }

  validate() {
    if(Array.isArray(this.vpcSwitchIdList)) {
      $dara.Model.validateArray(this.vpcSwitchIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeVpcHoneyPotListResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4FEC7F58-FCDA-415F-AE25-CD8BC0931DF2
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the honeypots.
   */
  vpcHoneyPotDTOList?: DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOList[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      vpcHoneyPotDTOList: 'VpcHoneyPotDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeVpcHoneyPotListResponseBodyPageInfo,
      requestId: 'string',
      vpcHoneyPotDTOList: { 'type': 'array', 'itemType': DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOList },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.vpcHoneyPotDTOList)) {
      $dara.Model.validateArray(this.vpcHoneyPotDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

