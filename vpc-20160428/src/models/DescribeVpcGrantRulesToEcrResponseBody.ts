// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcGrantRulesToEcrResponseBodyGrantRuleModels extends $dara.Model {
  /**
   * @remarks
   * The time when the authorization was created.
   * 
   * @example
   * 2024-09-09T02:14:51Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the Express Connect Router.
   * 
   * @example
   * ecr-tz7w3chlaptxr2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account (main account) that owns the Express Connect Router.
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
   * The ID of the Alibaba Cloud account (main account) that owns the network instance.
   * 
   * @example
   * 192745367151****
   */
  instanceUid?: number;
  /**
   * @remarks
   * The ID of the region where the network instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * - **VBR**: virtual border router
   * 
   * - **VPC**: Virtual Private Cloud
   * 
   * @example
   * VPC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      ecrId: 'EcrId',
      ecrOwnerId: 'EcrOwnerId',
      instanceId: 'InstanceId',
      instanceUid: 'InstanceUid',
      regionNo: 'RegionNo',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      ecrId: 'string',
      ecrOwnerId: 'number',
      instanceId: 'string',
      instanceUid: 'number',
      regionNo: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcGrantRulesToEcrResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of authorization rules.
   */
  grantRuleModels?: DescribeVpcGrantRulesToEcrResponseBodyGrantRuleModels[];
  /**
   * @remarks
   * The pagination token for the next page of results. A non-empty value indicates that more results are available. If this parameter is not returned or is empty, all results have been retrieved.
   * 
   * - If **NextToken** is empty, there are no more queries.
   * 
   * - If **NextToken** has a value, the value is the token to start the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66342E8E-5E87-5FF9-80C7-C3E3571A****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries. Note: When you perform a paged query by using the `MaxResults` and `NextToken` parameters, the value of this parameter is for reference only.
   * 
   * @example
   * 10
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      grantRuleModels: 'GrantRuleModels',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRuleModels: { 'type': 'array', 'itemType': DescribeVpcGrantRulesToEcrResponseBodyGrantRuleModels },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.grantRuleModels)) {
      $dara.Model.validateArray(this.grantRuleModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

