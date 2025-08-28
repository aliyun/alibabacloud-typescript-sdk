// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcGrantRulesToEcrRequestTags extends $dara.Model {
  /**
   * @example
   * FinanceDept
   */
  key?: string;
  /**
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
   * @example
   * ecr-ncxadcujadncsa****
   */
  ecrInstanceId?: string;
  /**
   * @example
   * 192732132151****
   */
  ecrOwnerId?: number;
  /**
   * @example
   * vpc-wz9ek66wd7tl5xqpy****
   */
  instanceId?: string;
  /**
   * @example
   * VPC
   */
  instanceType?: string;
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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

