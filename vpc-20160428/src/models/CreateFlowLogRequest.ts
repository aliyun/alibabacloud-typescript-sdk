// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowLogRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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

export class CreateFlowLogRequest extends $dara.Model {
  /**
   * @remarks
   * The sampling interval of the flow log. Unit: minutes. Valid values: **1**, **5**, and **10** (default).
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
  /**
   * @remarks
   * The IP version of the traffic captured by the flow log.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The name of the Logstore that stores the captured traffic.
   * - The Logstore name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * - The name must start and end with a lowercase letter or digit.
   * - The name must be 3 to 63 characters in length.
   * 
   * @example
   * FlowLogStore
   */
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the project that manages the captured traffic.
   * - The project name can contain only lowercase letters, digits, and hyphens (-).
   * - The name must start and end with a lowercase letter or digit.
   * - The name must be 3 to 63 characters in length.
   * 
   * @example
   * FlowLogProject
   */
  projectName?: string;
  /**
   * @remarks
   * The region ID of the flow log. You can call [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) to query the most recent region list.
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
   * The ID of the resource from which to capture traffic.
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
   * The type of resource from which to capture traffic. Valid values:
   * 
   * - **NetworkInterface**: network interface controller (NIC).
   *   
   * - **VSwitch**: all network interface controllers (NICs) in a vSwitch.
   *   
   * - **VPC**: all network interface controllers (NICs) in a virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * NetworkInterface
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreateFlowLogRequestTag[];
  /**
   * @remarks
   * The traffic path to capture. Valid values:
   * 
   * - **all**: captures all traffic.
   * - **internetGateway**: captures Internet traffic.
   */
  trafficPath?: string[];
  /**
   * @remarks
   * The traffic type to collect. Valid values:
   * 
   * - **All**: all traffic.
   *   
   * - **Allow**: traffic allowed by access control.
   *   
   * - **Drop**: traffic denied by access control.
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

