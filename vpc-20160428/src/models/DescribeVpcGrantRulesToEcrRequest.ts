// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcGrantRulesToEcrRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You must specify at least 1 and can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class DescribeVpcGrantRulesToEcrRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Express Connect Router (ECR) instance to query.
   * 
   * @example
   * ecr-ncxadcujadncsa****
   */
  ecrInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the ECR instance.
   * 
   * > This parameter is required if you want to load a cross-account network instance.
   * 
   * @example
   * 192732132151****
   */
  ecrOwnerId?: number;
  /**
   * @remarks
   * The ID of the network instance to query.
   * 
   * @example
   * vpc-wz9ek66wd7tl5xqpy****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance for which to query the authorization relationship. Valid values:
   * 
   * - **VBR**: Virtual Border Router (VBR) instance. Queries the VPC instances that the VBR instance is authorized to access through the vRouter.
   * - **VPC**: virtual private cloud (VPC) instance. Queries the VBR instances that the VPC instance has authorized through the vRouter.
   * 
   * @example
   * VPC
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of entries per page for paginated queries. Valid values: **1** to **100**. Default value: **100**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. Valid values:
   * 
   * * Leave this parameter empty for the first query or if no more results exist.
   * 
   * * If a next query is available, set this parameter to the **NextToken** value returned by the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region in which the network instance to query resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the network instance belongs.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag information.
   */
  tags?: DescribeVpcGrantRulesToEcrRequestTags[];
  static names(): { [key: string]: string } {
    return {
      ecrInstanceId: 'EcrInstanceId',
      ecrOwnerId: 'EcrOwnerId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecrInstanceId: 'string',
      ecrOwnerId: 'number',
      instanceId: 'string',
      instanceType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': DescribeVpcGrantRulesToEcrRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

