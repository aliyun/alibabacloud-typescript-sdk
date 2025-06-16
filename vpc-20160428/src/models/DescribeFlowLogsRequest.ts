// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFlowLogsRequestTags } from "./DescribeFlowLogsRequestTags";


export class DescribeFlowLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the flow log.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my Flowlog.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the flow log.
   * 
   * @example
   * fl-bp1f6qqhsrc2c12ta****
   */
  flowLogId?: string;
  /**
   * @remarks
   * The name of the flow log.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * myFlowlog
   */
  flowLogName?: string;
  /**
   * @remarks
   * The Logstore that stores the captured traffic data.
   * 
   * @example
   * FlowLogStore
   */
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **50**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The project that manages the captured traffic data.
   * 
   * @example
   * FlowLogProject
   */
  projectName?: string;
  /**
   * @remarks
   * The region ID of the flow log.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the flow log belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource from which traffic is captured.
   * 
   * @example
   * eni-askldfas****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of resource from which traffic is captured. Valid values:
   * 
   * *   **NetworkInterface**: elastic network interface (ENI)
   * *   **VSwitch**: all ENIs in a vSwitch
   * *   **VPC**: all ENIs in a virtual private cloud (VPC)
   * 
   * @example
   * NetworkInterface
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the flow log. Valid values:
   * 
   * *   **Active**
   * *   **Activating**
   * *   **Inactive**
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: DescribeFlowLogsRequestTags[];
  /**
   * @remarks
   * The type of traffic that is captured. Valid values:
   * 
   * *   **All**: all traffic
   * *   **Allow**: traffic that is allowed by access control
   * *   **Drop**: traffic that is denied by access control
   * 
   * @example
   * All
   */
  trafficType?: string;
  /**
   * @remarks
   * The ID of the VPC to which the flow log belongs.
   * 
   * @example
   * vpc-bp1nwd16gvo1wgs****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      logStoreName: 'LogStoreName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      status: 'Status',
      tags: 'Tags',
      trafficType: 'TrafficType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      logStoreName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeFlowLogsRequestTags },
      trafficType: 'string',
      vpcId: 'string',
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

