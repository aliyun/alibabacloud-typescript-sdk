// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcGrantRulesToEcrRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You must specify at least one tag key and at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `acs:` or `aliyun`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can enter a maximum of 20 tag values. The tag value can be an empty string.
   * 
   * The tag key can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
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
   * The ID of the ECR that you want to query.
   * 
   * @example
   * ecr-ncxadcujadncsa****
   */
  ecrInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the ECR belongs.
   * 
   * > If you want to connect to a network instance that belongs to a different account, this parameter is required.
   * 
   * @example
   * 192732132151****
   */
  ecrOwnerId?: number;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-wz9ek66wd7tl5xqpy****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of instance. Valid values:
   * 
   * *   **VBR**: queries the permissions that are granted to a VBR.
   * *   **VPC**: queries the permissions that are granted from a VPC.
   * 
   * @example
   * VPC
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1** to **100**. Default value: **10**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   If a value is returned for NextToken, you must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the network instance that you want to query.
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
   * The tag.
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

