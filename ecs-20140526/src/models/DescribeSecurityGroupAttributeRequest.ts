// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The direction in which the security group rule is applied. Valid values:
   * 
   * *   egress: outbound
   * *   ingress: inbound
   * *   all: outbound and inbound
   * 
   * Default value: all.
   * 
   * @example
   * all
   */
  direction?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * *   Minimum value: 10.
   * *   Maximum value: 1000.
   * 
   * Default value: 500.
   * 
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The network interface controller (NIC) type of the security group rule.
   * 
   * *   Valid values for rules of security groups in the classic network:
   * 
   *     *   internet (default)
   *     *   intranet
   * 
   *     **
   * 
   *     **Note** You can query security group rules of only one NIC type in a single call. To query security group rules of both NIC types, call the operation twice.
   * 
   * *   When the security group is in a virtual private cloud (VPC), set the value to intranet, which is the default value for rules of security groups in VPCs.
   * 
   *     **
   * 
   *     **Note** If you set this parameter to internet or leave this parameter empty, a value of intranet is automatically used.
   * 
   * @example
   * intranet
   */
  nicType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the security group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The ID of the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp1gxw6bznjjvhu3****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nicType: 'NicType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nicType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

