// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of resource quota N. Valid values of N: 1 to 8. Valid values:
   * 
   * *   instance-network-type: the available network types.
   * 
   * *   max-security-groups: the maximum number of security groups.
   * 
   * *   max-elastic-network-interfaces: the maximum number of ENIs.
   * 
   * *   max-postpaid-instance-vcpu-count: the maximum number of vCPUs for pay-as-you-go instances.
   * 
   * *   max-spot-instance-vcpu-count: the maximum number of vCPUs for spot instances.
   * 
   * *   used-postpaid-instance-vcpu-count: the number of vCPUs that have been allocated to pay-as-you-go instances.
   * 
   * *   used-spot-instance-vcpu-count: the number of vCPUs that have been allocated to spot instances.
   * 
   * *   max-postpaid-yundisk-capacity: the maximum capacity of pay-as-you-go data disks. (The value is deprecated.)
   * 
   * *   used-postpaid-yundisk-capacity: the capacity of pay-as-you-go data disks that have been created. (The value is deprecated.)
   * 
   * *   max-dedicated-hosts: the maximum number of dedicated hosts.
   * 
   * *   supported-postpaid-instance-types: the instance types of pay-as-you-go I/O optimized instances.
   * 
   * *   max-axt-command-count: the maximum number of Cloud Assistant commands.
   * 
   * *   max-axt-invocation-daily: the maximum number of Cloud Assistant command executions per day.
   * 
   * *   real-name-authentication: whether the account has completed the real-name verification.
   * 
   *     **
   * 
   *     **Note** To create an ECS instance in a region in the Chinese mainland, you must complete the real-name verification.
   * 
   * *   max-cloud-assistant-activation-count: the maximum number of activation codes that can be created to use to register managed instances.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * max-security-groups
   */
  attributeName?: string[];
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent list of regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the zone in which the resource resides.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeName)) {
      $dara.Model.validateArray(this.attributeName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

