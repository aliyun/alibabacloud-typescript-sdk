// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcGrantRulesToEcrRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * The ID of the Express Connect Router.
   * 
   * @example
   * ecr-ncxadcujadncsa****
   */
  ecrInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account (main account) that owns the Express Connect Router.
   * 
   * > This parameter is required when querying a cross-account network instance.
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
   * The type of instance whose authorization rules you want to query. Valid values:
   * 
   * - **VBR**: Set the value to **VBR** to query the Virtual Private Cloud (VPC) instances authorized to connect to the specified virtual border router (VBR).
   * 
   * - **VPC**: Set the value to **VPC** to query the VBRs to which the specified VPC has granted authorization.
   * 
   * @example
   * VPC
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1** to **100**. Default value: **100**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. Valid values:
   * 
   * - Omit this parameter for the first request.
   * 
   * - For subsequent requests, set this to the **NextToken** value from the previous response.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the network instance is located.
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
   * The tags. You can specify up to 20 tags.
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

