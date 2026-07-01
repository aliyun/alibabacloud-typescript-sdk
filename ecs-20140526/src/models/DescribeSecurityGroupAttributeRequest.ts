// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The security group attribute. Valid values:
   * 
   * - snapshotPolicyIds: queries the snapshot policies associated with the security group.
   * 
   * @example
   * snapshotPolicyIds
   */
  attribute?: string;
  /**
   * @remarks
   * The direction of the security group rule. Valid values: 
   *          
   * - egress: outbound.
   * - ingress: inbound.
   * - all: both inbound and outbound.
   * 
   * Default value: all.
   * 
   * @example
   * all
   */
  direction?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * - Minimum value: 10.
   * - Maximum value: 1000.
   * 
   * Default value: 500.
   * 
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The network type of the security group rule.
   * 
   * - For security groups in a VPC, the only valid value is intranet (default), which indicates internal network.
   *     > If you set this parameter to internet or leave it empty, the value is automatically set to intranet.
   * 
   * - Valid values for security groups in the classic network:
   *     - internet (default): Internet.
   *     - intranet: internal network.
   *     > The classic network feature has been offline. For details, see [Retirement announcement](https://help.aliyun.com/document_detail/2833134.html).
   * 
   * @example
   * intranet
   */
  nicType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the security group. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The security group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp1gxw6bznjjvhu3****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
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
      attribute: 'string',
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

