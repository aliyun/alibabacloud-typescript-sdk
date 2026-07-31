// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of resource quota to query in the specified region. Valid values of N: 1 to 8. Valid values:
   * 
   * - instance-network-type: available network types.
   * - max-security-groups: the maximum number of security groups.
   * - max-elastic-network-interfaces: the maximum number of Elastic Network Interfaces (ENIs).
   * - max-postpaid-instance-vcpu-count: the maximum number of vCPUs for pay-as-you-go instances.
   * - max-spot-instance-vcpu-count: the maximum number of vCPUs for spot instances.
   * - used-postpaid-instance-vcpu-count: the number of vCPUs that have been used by pay-as-you-go instances.
   * - used-spot-instance-vcpu-count: the number of vCPUs that have been used by spot instances.
   * - max-postpaid-yundisk-capacity: the maximum total capacity of pay-as-you-go cloud disks used as data disks. (This parameter value is deprecated.)
   * - used-postpaid-yundisk-capacity: the capacity of pay-as-you-go cloud disks that have been used as data disks. (This parameter value is deprecated.)
   * - max-dedicated-hosts: the maximum number of dedicated hosts.
   * - supported-postpaid-instance-types: the instance types of pay-as-you-go I/O optimized instances.
   * - max-axt-command-count: the maximum number of Cloud Assistant commands.
   * - max-axt-invocation-daily: the maximum number of Cloud Assistant commands that can be executed per day.
   * - real-name-authentication: whether the account has completed real-name registration.
   * 
   *     > You must complete real-name registration before you can create ECS instances in regions in the Chinese mainland.
   * - max-cloud-assistant-activation-count: the maximum number of Cloud Assistant managed instance dynamic codes that can be created.
   * 
   * Default value: null.
   * 
   * @example
   * max-security-groups
   */
  attributeName?: string[];
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The zone ID.
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

