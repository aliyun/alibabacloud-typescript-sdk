// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainDetailResponseBodyAssetListTagList extends $dara.Model {
  /**
   * @example
   * 3
   */
  classId?: string;
  /**
   * @example
   * 0
   */
  riskLevel?: number;
  /**
   * @example
   * test
   */
  tagDescribe?: string;
  /**
   * @example
   * FirstFlow
   */
  tagId?: string;
  /**
   * @example
   * test
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
      riskLevel: 'RiskLevel',
      tagDescribe: 'TagDescribe',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      riskLevel: 'number',
      tagDescribe: 'string',
      tagId: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainDetailResponseBodyAssetList extends $dara.Model {
  /**
   * @example
   * FullCoverage
   */
  aclCoverage?: string;
  /**
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @example
   * 1738548990
   */
  firstTime?: number;
  /**
   * @example
   * 244438.0
   */
  inBytes?: number;
  /**
   * @example
   * 32
   */
  ipsHitCnt?: number;
  /**
   * @example
   * 1739326614
   */
  lastTime?: number;
  /**
   * @example
   * ngw-bp1utx6wj4x9qu9tl****
   */
  natGatewayId?: string;
  /**
   * @example
   * ngw-test
   */
  natGatewayName?: string;
  /**
   * @example
   * 100
   */
  outBytes?: number;
  /**
   * @example
   * 10.21.242XXX
   */
  privateIP?: string;
  /**
   * @example
   * 47.96.181.XXX
   */
  publicIP?: string;
  /**
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @example
   * i-uf63wjhyoohc1g4z****
   */
  resourceInstanceId?: string;
  /**
   * @example
   * test
   */
  resourceInstanceName?: string;
  /**
   * @example
   * NatEIP
   */
  resourceType?: string;
  /**
   * @example
   * 08a58465-ff4d-4c47-8782-eb008301****
   */
  ruleId?: string;
  /**
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @example
   * 10
   */
  sessionCount?: number;
  tagList?: DescribeOutgoingDomainDetailResponseBodyAssetListTagList[];
  /**
   * @example
   * 321120825843
   */
  totalBytes?: string;
  /**
   * @example
   * vpc-9dp16jgwgyvn****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclCoverage: 'AclCoverage',
      domain: 'Domain',
      firstTime: 'FirstTime',
      inBytes: 'InBytes',
      ipsHitCnt: 'IpsHitCnt',
      lastTime: 'LastTime',
      natGatewayId: 'NatGatewayId',
      natGatewayName: 'NatGatewayName',
      outBytes: 'OutBytes',
      privateIP: 'PrivateIP',
      publicIP: 'PublicIP',
      regionNo: 'RegionNo',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceName: 'ResourceInstanceName',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sessionCount: 'SessionCount',
      tagList: 'TagList',
      totalBytes: 'TotalBytes',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclCoverage: 'string',
      domain: 'string',
      firstTime: 'number',
      inBytes: 'number',
      ipsHitCnt: 'number',
      lastTime: 'number',
      natGatewayId: 'string',
      natGatewayName: 'string',
      outBytes: 'number',
      privateIP: 'string',
      publicIP: 'string',
      regionNo: 'string',
      resourceInstanceId: 'string',
      resourceInstanceName: 'string',
      resourceType: 'string',
      ruleId: 'string',
      ruleName: 'string',
      sessionCount: 'number',
      tagList: { 'type': 'array', 'itemType': DescribeOutgoingDomainDetailResponseBodyAssetListTagList },
      totalBytes: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainDetailResponseBody extends $dara.Model {
  applicationNameList?: string[];
  assetList?: DescribeOutgoingDomainDetailResponseBodyAssetList[];
  /**
   * @example
   * 98AF5888-9606-59CF-888F-032A9ED0****
   */
  requestId?: string;
  /**
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationNameList: 'ApplicationNameList',
      assetList: 'AssetList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      assetList: { 'type': 'array', 'itemType': DescribeOutgoingDomainDetailResponseBodyAssetList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationNameList)) {
      $dara.Model.validateArray(this.applicationNameList);
    }
    if(Array.isArray(this.assetList)) {
      $dara.Model.validateArray(this.assetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

