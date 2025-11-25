// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationIPDetailResponseBodyAssetListTagList extends $dara.Model {
  /**
   * @example
   * 1
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

export class DescribeOutgoingDestinationIPDetailResponseBodyAssetList extends $dara.Model {
  /**
   * @example
   * FullCoverage
   */
  aclCoverage?: string;
  /**
   * @example
   * 1744682438
   */
  firstTime?: number;
  /**
   * @example
   * 0.0
   */
  inBytes?: number;
  ispName?: string;
  /**
   * @example
   * 1739326614
   */
  lastTime?: number;
  locationName?: string;
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
   * 0.0
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
   * cn-shanghai
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
   * EcsPublicIP
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
   * 2
   */
  sessionCount?: number;
  tagList?: DescribeOutgoingDestinationIPDetailResponseBodyAssetListTagList[];
  /**
   * @example
   * 458681
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
      firstTime: 'FirstTime',
      inBytes: 'InBytes',
      ispName: 'IspName',
      lastTime: 'LastTime',
      locationName: 'LocationName',
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
      firstTime: 'number',
      inBytes: 'number',
      ispName: 'string',
      lastTime: 'number',
      locationName: 'string',
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
      tagList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPDetailResponseBodyAssetListTagList },
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

export class DescribeOutgoingDestinationIPDetailResponseBody extends $dara.Model {
  assetList?: DescribeOutgoingDestinationIPDetailResponseBodyAssetList[];
  ispName?: string;
  locationName?: string;
  /**
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @example
   * 25
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assetList: 'AssetList',
      ispName: 'IspName',
      locationName: 'LocationName',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPDetailResponseBodyAssetList },
      ispName: 'string',
      locationName: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetList)) {
      $dara.Model.validateArray(this.assetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

