// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowLogsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. Up to 20 tag keys are supported. If you need to pass this value, it cannot be an empty string.
   * 
   * A tag key can have up to 128 characters and cannot start with `aliyun` or `acs:`. It also cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. Up to 20 tag values are supported. If you need to pass this value, it can be an empty string.
   * 
   * A tag value can have up to 128 characters and cannot start with `aliyun` or `acs:`. It also cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
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

export class DescribeFlowLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the flow log.
   * 
   * The description must be 1 to 256 characters long and cannot start with `http://` or `https://`.
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
   * The name must be 1 to 128 characters long and cannot start with `http://` or `https://`.
   * 
   * @example
   * myFlowlog
   */
  flowLogName?: string;
  /**
   * @remarks
   * The Logstore that stores the captured traffic.
   * 
   * @example
   * FlowLogStore
   */
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number, with a default value of **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of items per page in a paginated query, with a maximum value of **50** and a default value of **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The Project that manages the captured traffic.
   * 
   * @example
   * FlowLogProject
   */
  projectName?: string;
  /**
   * @remarks
   * The region ID of the flow log.
   * 
   * You can obtain the region ID by calling the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the flow log.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID of the traffic to capture.
   * 
   * @example
   * eni-askldfas****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type of the traffic to capture. Values:
   * - **NetworkInterface**: Elastic Network Interface (ENI).
   * - **VSwitch**: All ENIs within a VSwitch.
   * - **VPC**: All ENIs within a VPC.
   * 
   * @example
   * NetworkInterface
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the flow log. Values:
   * - **Active**: The flow log is in an active state.
   * - **Activating**: The flow log is being created.
   * - **Inactive**: The flow log is in an inactive state.
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
   * The type of traffic to collect. Values:
   * - **All**: All traffic.
   * - **Allow**: Traffic allowed by access control.
   * - **Drop**: Traffic denied by access control.
   * 
   * @example
   * All
   */
  trafficType?: string;
  /**
   * @remarks
   * The ID of the VPC for which you want to view the flow log.
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

