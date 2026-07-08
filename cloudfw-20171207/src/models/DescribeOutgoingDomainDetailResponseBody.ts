// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainDetailResponseBodyAssetListTagList extends $dara.Model {
  /**
   * @remarks
   * The risk category ID.
   * 
   * @example
   * 3
   */
  classId?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * - **0**: no risk.
   * - **1**: low risk.
   * - **2**: medium risk.
   * - **3**: high risk.
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
   * The time of the first access. The value is a UNIX timestamp in seconds.
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
   * The number of IPS hits.
   * 
   * @example
   * 32
   */
  ipsHitCnt?: number;
  /**
   * @remarks
   * The time of the most recent access. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1739326614
   */
  lastTime?: number;
  /**
   * @remarks
   * The NAT gateway ID.
   * 
   * @example
   * ngw-bp1utx6wj4x9qu9tl****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The NAT gateway name.
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
   * The ID of the asset instance.
   * 
   * @example
   * i-uf63wjhyoohc1g4z****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The name of the asset instance.
   * 
   * @example
   * test
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The type of the public IP address of the asset.
   * 
   * @example
   * NatEIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the ACL rule.
   * 
   * @example
   * 08a58465-ff4d-4c47-8782-eb008301****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The number of access sessions.
   * 
   * @example
   * 10
   */
  sessionCount?: number;
  /**
   * @remarks
   * The list of tag names.
   */
  tagList?: DescribeOutgoingDomainDetailResponseBodyAssetListTagList[];
  /**
   * @remarks
   * The total traffic.
   * 
   * @example
   * 321120825843
   */
  totalBytes?: string;
  /**
   * @remarks
   * The VPC instance ID.
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
   * The total number of entries returned.
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

