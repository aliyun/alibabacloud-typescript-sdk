// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationIPDetailResponseBodyAssetListTagList extends $dara.Model {
  /**
   * @remarks
   * The classification ID.
   * 
   * @example
   * 1
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
   * The description of the tag.
   * 
   * @example
   * test
   */
  tagDescribe?: string;
  /**
   * @remarks
   * The ID of the tag.
   * 
   * @example
   * FirstFlow
   */
  tagId?: string;
  /**
   * @remarks
   * The name of the tag.
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

export class DescribeOutgoingDestinationIPDetailResponseBodyAssetList extends $dara.Model {
  /**
   * @remarks
   * The status of the access control policy.
   * 
   * @example
   * FullCoverage
   */
  aclCoverage?: string;
  /**
   * @remarks
   * The time of the first access. This is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1744682438
   */
  firstTime?: number;
  /**
   * @remarks
   * The inbound traffic. Unit: bytes.
   * 
   * @example
   * 0.0
   */
  inBytes?: number;
  /**
   * @remarks
   * The ISP of the destination IP address.
   * 
   * @example
   * telecom
   */
  ispName?: string;
  /**
   * @remarks
   * The time of the last access. This is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1739326614
   */
  lastTime?: number;
  /**
   * @remarks
   * The name of the region where the destination IP address is located.
   * 
   * @example
   * Hangzhou
   */
  locationName?: string;
  /**
   * @remarks
   * The ID of the NAT Gateway.
   * 
   * @example
   * ngw-bp1utx6wj4x9qu9tl****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The name of the NAT Gateway.
   * 
   * @example
   * ngw-test
   */
  natGatewayName?: string;
  /**
   * @remarks
   * The outbound traffic. Unit: bytes.
   * 
   * @example
   * 0.0
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
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The instance ID of the cloud product.
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
   * EcsPublicIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The rule ID.
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
   * The number of sessions.
   * 
   * @example
   * 2
   */
  sessionCount?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tagList?: DescribeOutgoingDestinationIPDetailResponseBodyAssetListTagList[];
  /**
   * @remarks
   * The total traffic.
   * 
   * @example
   * 458681
   */
  totalBytes?: string;
  /**
   * @remarks
   * The ID of the VPC instance.
   * 
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
  /**
   * @remarks
   * The list of assets.
   */
  assetList?: DescribeOutgoingDestinationIPDetailResponseBodyAssetList[];
  /**
   * @remarks
   * The ISP of the destination IP address.
   * 
   * @example
   * telecom
   */
  ispName?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * Hangzhou
   */
  locationName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

