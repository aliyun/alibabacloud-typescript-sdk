// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCSecurityGroupListResponseBodyRCSecurityGroups extends $dara.Model {
  /**
   * @remarks
   * The number of instances that can be added to the security group.
   * 
   * @example
   * 48
   */
  availableInstanceAmount?: number;
  /**
   * @remarks
   * The time when the security group was created. The time follows the ISO 8601 standard and is in the `yyyy-MM-ddThh:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2025-05-31T03:12:29Z
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
   * The number of instances that are added to the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  instanceCount?: number;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-2ze27hs990o2hn9****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The type of the security group. Valid values:
   * 
   * *   **normal**: a normal security group.
   * *   **enterprise**: an advanced security group.
   * 
   * @example
   * normal
   */
  securityGroupType?: string;
  /**
   * @remarks
   * The ID of the VPC to which the security group belongs.
   * 
   * @example
   * vpc-bp1opxu1zkhn****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      availableInstanceAmount: 'AvailableInstanceAmount',
      creationTime: 'CreationTime',
      description: 'Description',
      instanceCount: 'InstanceCount',
      securityGroupId: 'SecurityGroupId',
      securityGroupType: 'SecurityGroupType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableInstanceAmount: 'number',
      creationTime: 'string',
      description: 'string',
      instanceCount: 'number',
      securityGroupId: 'string',
      securityGroupType: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCSecurityGroupListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The basic information about the security groups.
   */
  RCSecurityGroups?: DescribeRCSecurityGroupListResponseBodyRCSecurityGroups[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7A41C147-C8D0-4DAE-A1A2-17EBCD60DFA1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      RCSecurityGroups: 'RCSecurityGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RCSecurityGroups: { 'type': 'array', 'itemType': DescribeRCSecurityGroupListResponseBodyRCSecurityGroups },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.RCSecurityGroups)) {
      $dara.Model.validateArray(this.RCSecurityGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

