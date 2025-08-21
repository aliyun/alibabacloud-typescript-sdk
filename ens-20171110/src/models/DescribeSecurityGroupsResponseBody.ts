// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupNetworkInterfaceIds extends $dara.Model {
  networkInterfaceId?: string[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaceId)) {
      $dara.Model.validateArray(this.networkInterfaceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeSecurityGroupsResponseBodySecurityGroups extends $dara.Model {
  securityGroup?: DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroup },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroup)) {
      $dara.Model.validateArray(this.securityGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Details about security groups.
   */
  securityGroups?: DescribeSecurityGroupsResponseBodySecurityGroups;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      securityGroups: DescribeSecurityGroupsResponseBodySecurityGroups,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.securityGroups && typeof (this.securityGroups as any).validate === 'function') {
      (this.securityGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

