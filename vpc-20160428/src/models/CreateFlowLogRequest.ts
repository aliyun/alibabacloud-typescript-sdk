// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFlowLogRequestTag } from "./CreateFlowLogRequestTag";


export class CreateFlowLogRequest extends $dara.Model {
  /**
   * @remarks
   * The sampling interval of the flow log. Unit: seconds. Valid values: **1**, **5**, and **10** (default).
   * 
   * @example
   * 10
   */
  aggregationInterval?: number;
  /**
   * @remarks
   * The description of the flow log.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my Flowlog.
   */
  description?: string;
  /**
   * @remarks
   * The name of the flow log.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * myFlowlog
   */
  flowLogName?: string;
  ipVersion?: string;
  /**
   * @remarks
   * The name of the Logstore that stores the captured traffic data.
   * 
   * *   The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * *   The name must start and end with a lowercase letter or a digit.
   * *   The name must be 3 to 63 characters in length.
   * 
   * @example
   * FlowLogStore
   */
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the project that stores the captured traffic data.
   * 
   * *   The name can contain only lowercase letters, digits, and hyphens (-).
   * *   The name must start and end with a lowercase letter or a digit.
   * *   The name must be 3 to 63 characters in length.
   * 
   * @example
   * FlowLogProject
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the region where you want to create the flow log. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazdjdhd****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource whose traffic you want to capture.
   * 
   * This parameter is required.
   * 
   * @example
   * eni-askldfas****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource whose traffic you want to capture. Valid values:
   * 
   * *   **NetworkInterface**: elastic network interface (ENI)
   * *   **VSwitch**: all ENIs in a vSwitch
   * *   **VPC**: all ENIs in a virtual private cloud (VPC)
   * 
   * This parameter is required.
   * 
   * @example
   * NetworkInterface
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag of the resource.
   */
  tag?: CreateFlowLogRequestTag[];
  /**
   * @remarks
   * The scope of the traffic that you want to capture. Valid values:
   * 
   * *   **all**: all traffic.
   * *   **internetGateway**: Internet traffic.
   */
  trafficPath?: string[];
  /**
   * @remarks
   * The type of traffic that you want to capture. Valid values:
   * 
   * *   **All**: all traffic
   * *   **Allow**: traffic that is allowed
   * *   **Drop**: traffic that is rejected
   * 
   * This parameter is required.
   * 
   * @example
   * All
   */
  trafficType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregationInterval: 'AggregationInterval',
      description: 'Description',
      flowLogName: 'FlowLogName',
      ipVersion: 'IpVersion',
      logStoreName: 'LogStoreName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
      trafficPath: 'TrafficPath',
      trafficType: 'TrafficType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationInterval: 'number',
      description: 'string',
      flowLogName: 'string',
      ipVersion: 'string',
      logStoreName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      projectName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': CreateFlowLogRequestTag },
      trafficPath: { 'type': 'array', 'itemType': 'string' },
      trafficType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.trafficPath)) {
      $dara.Model.validateArray(this.trafficPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

