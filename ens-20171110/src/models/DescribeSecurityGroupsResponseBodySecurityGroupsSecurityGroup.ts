// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupInstanceIds } from "./DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupInstanceIds";
import { DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupNetworkInterfaceIds } from "./DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupNetworkInterfaceIds";


export class DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroup extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-01T06:08:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the security group.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The number of associated instances.
   * 
   * @example
   * 5
   */
  instanceCount?: number;
  /**
   * @remarks
   * The IDs of the instances that are associated with the security group.
   */
  instanceIds?: DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupInstanceIds;
  /**
   * @remarks
   * The IDs of the ENIs that are associated with the security group.
   */
  networkInterfaceIds?: DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupNetworkInterfaceIds;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp67acfmxazb4ph***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the security group.
   * 
   * @example
   * DocTest
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      instanceCount: 'InstanceCount',
      instanceIds: 'InstanceIds',
      networkInterfaceIds: 'NetworkInterfaceIds',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      instanceCount: 'number',
      instanceIds: DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupInstanceIds,
      networkInterfaceIds: DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupNetworkInterfaceIds,
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    if(this.networkInterfaceIds && typeof (this.networkInterfaceIds as any).validate === 'function') {
      (this.networkInterfaceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

