// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainDetailResponseBodyAssetListTagList extends $dara.Model {
  /**
   * @remarks
   * The risk classification ID.
   * 
   * @example
   * 3
   */
  classId?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * 0
   */
  riskLevel?: number;
  /**
   * @remarks
   * The tag description.
   * 
   * @example
   * test
   */
  tagDescribe?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * FirstFlow
   */
  tagId?: string;
  /**
   * @remarks
   * The tag name.
   * 
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
   * @remarks
   * The policy coverage status.
   * 
   * @example
   * FullCoverage
   */
  aclCoverage?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The first access time, as a Unix timestamp in seconds.
   * 
   * @example
   * 1738548990
   */
  firstTime?: number;
  /**
   * @remarks
   * The inbound traffic (response traffic), in bytes.
   * 
   * @example
   * 244438.0
   */
  inBytes?: number;
  /**
   * @remarks
   * The IPS hit count.
   * 
   * @example
   * 32
   */
  ipsHitCnt?: number;
  /**
   * @remarks
   * The last access time, as a Unix timestamp in seconds.
   * 
   * @example
   * 1739326614
   */
  lastTime?: number;
  /**
   * @remarks
   * The NAT Gateway ID.
   * 
   * @example
   * ngw-bp1utx6wj4x9qu9tl****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The NAT Gateway name.
   * 
   * @example
   * ngw-test
   */
  natGatewayName?: string;
  /**
   * @remarks
   * The outbound traffic (request traffic), in bytes.
   * 
   * @example
   * 100
   */
  outBytes?: number;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.21.242XXX
   */
  privateIP?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 47.96.181.XXX
   */
  publicIP?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The asset instance ID.
   * 
   * @example
   * i-uf63wjhyoohc1g4z****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The asset instance name.
   * 
   * @example
   * test
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The type of the asset\\"s public IP address.
   * 
   * @example
   * NatEIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The ACL rule ID.
   * 
   * @example
   * 08a58465-ff4d-4c47-8782-eb008301****
   */
  ruleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The session count.
   * 
   * @example
   * 10
   */
  sessionCount?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tagList?: DescribeOutgoingDomainDetailResponseBodyAssetListTagList[];
  /**
   * @remarks
   * The total traffic, in bytes.
   * 
   * @example
   * 321120825843
   */
  totalBytes?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
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
  /**
   * @remarks
   * The list of application names.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The list of assets.
   */
  assetList?: DescribeOutgoingDomainDetailResponseBodyAssetList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98AF5888-9606-59CF-888F-032A9ED0****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

