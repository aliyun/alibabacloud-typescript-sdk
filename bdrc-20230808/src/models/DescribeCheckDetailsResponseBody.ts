// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckDetailsResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The check status. Valid values: NOT_CHECKED, PASSED, FAILED, CHECKING, and CHECK_FAILED.
   * 
   * @example
   * PASSED
   */
  checkStatus?: string;
  /**
   * @remarks
   * The time when the check was performed.
   * 
   * @example
   * 1701725715
   */
  checkTime?: number;
  /**
   * @remarks
   * The check details.
   * 
   * @example
   * {"ecsAutoSnapshotPolicyIds":[],"hbrBackupPlans":[{"planId":"po-xxxxxxxx","sourceType":"UDM_ECS"}]}
   */
  detail?: string;
  /**
   * @remarks
   * The type of the cloud service.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The globally unique Alibaba Cloud Resource Name (ARN) of the resource.
   * 
   * @example
   * acs:ecs:123***890:cn-shanghai:instance/i-001***90
   */
  resourceArn?: string;
  /**
   * @remarks
   * The unique ID of the resource.
   * 
   * @example
   * i-xxxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * test server
   */
  resourceName?: string;
  /**
   * @remarks
   * The ID of the resource owner.
   * 
   * @example
   * 123***7890
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The unique ID of the rule.
   * 
   * @example
   * rule-xxxxxxxx
   */
  ruleId?: string;
  /**
   * @remarks
   * The rule template.
   * 
   * @example
   * ecs-backup
   */
  ruleTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkTime: 'CheckTime',
      detail: 'Detail',
      productType: 'ProductType',
      resourceArn: 'ResourceArn',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
      ruleTemplate: 'RuleTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkTime: 'number',
      detail: 'string',
      productType: 'string',
      resourceArn: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      ruleId: 'string',
      ruleTemplate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The collection of records returned by this request.
   */
  content?: DescribeCheckDetailsResponseBodyDataContent[];
  /**
   * @remarks
   * The maximum number of entries returned in this response.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. If this parameter is empty, it indicates that all data has been retrieved.
   * 
   * @example
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAOTzWWYAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM4NzA3NTcwMzY2MjMwNzY2ODcyMzAzMTY2Nzg3ODY5MzY=
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries that meet the query conditions. This parameter is optional and is not returned by default.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeCheckDetailsResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeCheckDetailsResponseBodyData;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 92793A50-0B97-59F1-BAEA-EAED83BA1998
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeCheckDetailsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

