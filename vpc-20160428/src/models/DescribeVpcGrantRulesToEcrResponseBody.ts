// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcGrantRulesToEcrResponseBodyGrantRuleModels extends $dara.Model {
  /**
   * @remarks
   * The creation time in milliseconds.
   * 
   * @example
   * 2024-09-09T02:14:51Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ECR ID.
   * 
   * @example
   * ecr-tz7w3chlaptxr2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the ECR belongs.
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
   * The ID of the Alibaba Cloud account to which the instance belongs.
   * 
   * @example
   * 192745367151****
   */
  instanceUid?: number;
  /**
   * @remarks
   * The ID of the region where the instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
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
   * The authorization information.
   */
  grantRuleModels?: DescribeVpcGrantRulesToEcrResponseBodyGrantRuleModels[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, there is no next page.
   * *   ****
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique ID that Alibaba Cloud generates for the request.
   * 
   * @example
   * 66342E8E-5E87-5FF9-80C7-C3E3571A****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances queried. If you specify the MaxResults and NextToken request parameters to perform a paged query, the value of the TotalCount response parameter is invalid.
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

