// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcGrantRulesToEcrResponseBodyGrantRuleModels extends $dara.Model {
  /**
   * @example
   * 2024-09-09T02:14:51Z
   */
  creationTime?: string;
  /**
   * @example
   * ecr-tz7w3chlaptxr2****
   */
  ecrId?: string;
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
   * 192745367151****
   */
  instanceUid?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
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
  grantRuleModels?: DescribeVpcGrantRulesToEcrResponseBodyGrantRuleModels[];
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * 66342E8E-5E87-5FF9-80C7-C3E3571A****
   */
  requestId?: string;
  /**
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

