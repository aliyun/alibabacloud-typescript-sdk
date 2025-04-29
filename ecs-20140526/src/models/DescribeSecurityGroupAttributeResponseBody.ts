// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityGroupAttributeResponseBodyPermissions } from "./DescribeSecurityGroupAttributeResponseBodyPermissions";


export class DescribeSecurityGroupAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the security group.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The access control policy of the security group. Valid values:
   * 
   * *   Accept: All instances in the security group can communicate with each other.
   * *   Drop: All instances in the security group are isolated from each other.
   * 
   * @example
   * Accept
   */
  innerAccessPolicy?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If the return value of this parameter is empty when you specify `MaxResults` and `NextToken` for a paged query, no more results are to be returned.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * Details about the security group rules.
   */
  permissions?: DescribeSecurityGroupAttributeResponseBodyPermissions;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp1gxw6bznjjvhu3****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the security group.
   * 
   * @example
   * SecurityGroupName Sample
   */
  securityGroupName?: string;
  /**
   * @remarks
   * The ID of the VPC. If a VPC ID is returned, the network type of the security group is VPC. If no VPC ID is returned, the network type of the security group is classic network.
   * 
   * @example
   * vpc-bp1opxu1zkhn00gzv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      innerAccessPolicy: 'InnerAccessPolicy',
      nextToken: 'NextToken',
      permissions: 'Permissions',
      regionId: 'RegionId',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      innerAccessPolicy: 'string',
      nextToken: 'string',
      permissions: DescribeSecurityGroupAttributeResponseBodyPermissions,
      regionId: 'string',
      requestId: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.permissions && typeof (this.permissions as any).validate === 'function') {
      (this.permissions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

